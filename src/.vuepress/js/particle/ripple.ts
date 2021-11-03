import * as THREE from 'three';
import { MeshLine, MeshLineMaterial, MeshLineRaycast } from 'meshline';
import * as Calc from './utils/calc';
import * as Ease from './utils/ease';
import { Loader } from './loader';
import { System } from './system';

export class Ripple {
	private loader: Loader;
	private system: System;

	private array: Ripple[];
	private group: THREE.Object3D;
	private sphere: THREE.Sphere;
	private strength: number;
	private threshold: number;
	private growth: number;
	private life: number;
	private decay: number;
	private influence: THREE.Vector3;
	private geometry: MeshLine;
	private material: THREE.LineBasicMaterial;
	private mesh: THREE.Mesh;

	constructor(config, system, loader) {
		this.system = system;
		this.loader = loader;

		this.array = config.array;
		this.group = config.group;
		this.sphere = new THREE.Sphere(new THREE.Vector3(config.x, config.y, config.z), 0);
		this.strength = config.strength ? config.strength : Calc.rand(7, 15);
		this.threshold = Calc.rand(4, 16);
		this.growth = Calc.rand(0.2, 0.5);
		this.life = 1;
		this.decay = Calc.rand(0.01, 0.02);
		this.influence = new THREE.Vector3();
		const points = [];
		const resolution = 64;
		for (let j = 0; j < (Math.PI * 2) + ((Math.PI) / resolution); j += (2 * Math.PI) / resolution) {
			points.push(Math.cos(j), Math.sin(j), 0);
		}
		this.geometry = new MeshLine();
		this.geometry.setPoints(points);

		this.material = new MeshLineMaterial({
			lineWidth: 0.25,
			color: config.color,
			opacity: 1,
			transparent: true,
			depthTest: false,
		});
		this.material.onBeforeRender = () => {};
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.mesh.rotation.x = Math.PI / 2;
		this.mesh.position.x = this.sphere.center.x;
		this.mesh.position.y = 0;
		this.mesh.position.z = this.sphere.center.z;
		this.group.add(this.mesh);
	}

	getInfluenceVector(vec) {
		this.influence.set(0, 0, 0);
		let distance = this.sphere.distanceToPoint(vec);

		if(distance <= this.threshold ) {
			let ease = Ease.inOutSine(this.threshold - distance, 0, 1, this.threshold);
			let power = (this.strength * ease * this.life);
			this.influence.addVectors(vec, this.sphere.center).multiplyScalar(power);
		}

		return this.influence;
	}

	update(i) {
		this.sphere.radius += (this.growth * this.life) * this.loader.deltaTimeNormal;
		this.life -= this.decay * this.loader.deltaTimeNormal;

		this.mesh.position.y = (1 - this.life) * -2;
		let newScale = 0.001 + this.sphere.radius;
		this.mesh.scale.set(newScale, newScale, newScale);
		this.mesh.material.opacity = this.life / 3;

		if(this.life <= 0) {
			this.destroy(i);
		}
	}

	destroy(i) {
		this.geometry.dispose();
		this.material.dispose();
		this.group.remove(this.mesh);
		this.array.splice(i, 1);
	}
}
