import * as THREE from 'three';
import * as Calc from './utils/calc';
import * as Ease from './utils/ease';
import { Loader } from './loader';
import { System } from './system';

export class Drop {
	private loader: Loader;
	private system: System;

	private array: Drop[];
	private group: THREE.Object3D;
	private x: number;
	private y: number;
	private z: number;
	private size: number;
	private color: number;
	private opacity: number;
	private strength: number;
	private yBase: number;

	private progress: number = 0;
	private rate: number = 0.01;

	private geometry: System['boxGeometry'];
	private material: THREE.MeshBasicMaterial;
	private mesh: THREE.Mesh;

	constructor(config, system) {
		this.system = system;
		this.loader = this.system.loader;

		this.array = config.array;
		this.group = config.group;
		this.x = config.x;
		this.y = config.y;
		this.z = config.z;
		this.size = config.size;
		this.color = config.color;
		this.opacity = config.opacity;
		this.strength = config.strength;

		this.yBase = config.y;

		this.createMesh();
	}

	createMesh() {
		this.geometry = this.system.boxGeometry;

		this.material = new THREE.MeshBasicMaterial({
			color: this.color,
			transparent: true,
			opacity: this.opacity,
			depthTest: false,
			precision: 'lowp'
		});

		this.mesh = new THREE.Mesh(this.geometry, this.material);

		this.mesh.position.x = this.x;
		this.mesh.position.y = this.y;
		this.mesh.position.z = this.z;

		this.mesh.scale.set(this.size, this.size, this.size);

		this.group.add(this.mesh);
	}

	update(i) {
		this.progress += this.rate * this.loader.deltaTimeNormal;
		this.mesh.position.y = this.yBase - Ease.inExpo(this.progress, 0, 1, 1) * this.yBase;
		this.mesh.scale.set(this.size, this.size + this.size * 16 * Ease.inExpo(this.progress, 0, 1, 1), this.size);
		this.mesh.material.opacity = Ease.inExpo(this.progress, 0, 1, 1);

		if(this.progress >= 1) {
			this.geometry.dispose();
			this.material.dispose();
			this.group.remove(this.mesh);
			this.array.splice(i, 1);
			this.system.createRipple(this.mesh.position.x, this.mesh.position.z, this.strength);
		}
	}
}
