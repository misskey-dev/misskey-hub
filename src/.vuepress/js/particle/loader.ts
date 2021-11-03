import * as THREE from 'three';
import * as tinycolor from 'tinycolor2';
import { System } from './system';

export class Loader {
	public timescale: number;
	public camera: THREE.PerspectiveCamera;
	public clock: THREE.Clock;
	public deltaTimeSeconds: number;
	public deltaTimeMilliseconds: number;
	public deltaTimeNormal: number;
	public elapsedMilliseconds: number;
	public system: System;
	public scene: THREE.Scene;
	public renderer: THREE.WebGLRenderer;
	private diffTime: number;
	private raf: ReturnType<typeof window.requestAnimationFrame>;
	private dom: HTMLElement;

	constructor(container: HTMLElement) {
		this.dom = container;

		this.raf = null;

		this.setupTime();
		this.setupScene();
		this.setupCamera();
		this.setupRenderer();
		this.listen();
		this.onResize();

		this.system = new System(this, {
			particleColor: tinycolor(getComputedStyle(this.dom).getPropertyValue('--c-text')).toHexString(),
			dropColor: tinycolor(getComputedStyle(this.dom).getPropertyValue('--c-brand')).toHexString(),
			rippleColor: tinycolor(getComputedStyle(this.dom).getPropertyValue('--c-brand')).toHexString(),
		});
		this.loop();
	}

	setupTime() {
		this.timescale = 1;
		this.clock = new THREE.Clock();
		this.deltaTimeSeconds = this.clock.getDelta() * this.timescale;
		this.deltaTimeMilliseconds = this.deltaTimeSeconds * 1000;
		this.deltaTimeNormal = this.deltaTimeMilliseconds / (1000 / 60);
		this.elapsedMilliseconds = 0;
	}

	setupScene() {
		this.scene = new THREE.Scene();
	}

	setupCamera() {
		this.camera = new THREE.PerspectiveCamera(70, 0, 0.0001, 10000);

		//this.camera.position.x = 0;
		//this.camera.position.y = 0;
		//this.camera.position.z = 20;

		this.camera.position.x = 0;
		this.camera.position.y = -30;
		this.camera.position.z = 10;
	}

	setupRenderer() {
		this.renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true
		});

		this.dom.appendChild(this.renderer.domElement);
	}

	update() {
		this.deltaTimeSeconds = this.clock.getDelta();
		if(this.diffTime) {
			this.deltaTimeSeconds -= this.diffTime;
			this.diffTime = 0;
		}
		this.deltaTimeSeconds *= this.timescale;
		this.deltaTimeMilliseconds = this.deltaTimeSeconds * 1000;
		this.deltaTimeNormal = this.deltaTimeMilliseconds / (1000 / 60);
		this.elapsedMilliseconds += this.deltaTimeMilliseconds;

		this.system.update();
	}

	render() {
		this.renderer.render(this.scene, this.camera);
	}

	listen() {
		window.addEventListener('resize', (e) => this.onResize(e));
	}

	onResize() {
		const width = this.dom.offsetWidth;
		const height = this.dom.offsetHeight;

		this.camera.aspect = width / height;
		this.camera.updateProjectionMatrix();

		this.renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
		this.renderer.setSize(width, height);
	}

	loop() {
		this.update();
		this.render();
		this.raf = window.requestAnimationFrame(() => this.loop());
	}

	destroy() {
		window.cancelAnimationFrame(this.raf);
	}
}
