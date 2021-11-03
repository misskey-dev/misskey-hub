import * as THREE from 'three';
import * as Calc from './utils/calc';
import * as Ease from './utils/ease';
import { Loader } from './loader';
import { System } from './system';

export class Particle {
	private loader: Loader;
	private system: System;

	private lerpFactor = 0.3;
	private dampFactor = 0.3;

	private group: THREE.Object3D;
	private x: number;
	private y: number;
	private z: number;
	private size: number;
	private color: number;
	private opacity: number;

	public base: THREE.Vector3;
	public velocity: THREE.Vector3;
	private geometry: THREE.SphereBufferGeometry;
	private material: THREE.MeshBasicMaterial;
	private mesh: THREE.Mesh;

	constructor(config, system) {
		this.system = system;
		this.loader = this.system.loader;

		this.group = config.group;
		this.x = config.x;
		this.y = config.y;
		this.z = config.z;
		this.size = config.size;
		this.color = config.color;
		this.opacity = config.opacity;

		this.createMesh();

		this.base = new THREE.Vector3(config.x, config.y, config.z);
		this.velocity = new THREE.Vector3(0, 0, 0);
	}

	createMesh() {
		this.geometry = this.system.sphereGeometry;

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

	update() {
		const scale = 0.075 + (Math.abs(this.velocity.y) / 25)
		this.mesh.scale.set(scale, scale, scale);

		//const opacity = 0.15 + (Math.abs(this.velocity.y) / 1)
		//this.mesh.material.opacity = Calc.clamp(opacity, 0.15, 1);
		const opacity = 0 + (Math.abs(this.velocity.y) / 1)
		this.mesh.material.opacity = Calc.clamp(opacity, 0, 1);

		this.velocity.y += (this.base.y - this.mesh.position.y) * this.lerpFactor;
		this.velocity.multiplyScalar(this.dampFactor);
		this.mesh.position.add(this.velocity);
	}

}
