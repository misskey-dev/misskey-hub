import * as THREE from 'three';
import * as Calc from './utils/calc';
import * as Ease from './utils/ease';
import { Drop } from './drop';
import { Loader } from './loader';
import { Particle } from './particle';
import { Ripple } from './ripple';

function hexToInt(rrggbb: string): number {
	if (rrggbb.startsWith('#')) rrggbb = rrggbb.substr(1);
	return parseInt(rrggbb, 16);
}

export class System {

	private loader: Loader;
	private drops: Drop[] = [];
	private ripples: Ripple[] = [];
	private particles: Particle[] = [];

	public sphereGeometry: THREE.SphereBufferGeometry;
	public boxGeometry: THREE.BoxBufferGeometry;
	private center: THREE.Vector3;
	private particleGroup: THREE.Object3D;

	private size = 128;
	private cols = 48;
	private rows = 48;

	private tick: number = 0;
	private dropTick = 15;
	private dropTickMin = 10;
	private dropTickMax = 30;

	private particleColor: number;
	private rippleColor: number;
	private dropColor: number;

	constructor(loader, config: { particleColor: string; rippleColor: string; dropColor: string; }) {
		this.loader = loader;

		this.particleColor = hexToInt(config.particleColor);
		this.rippleColor = hexToInt(config.rippleColor);
		this.dropColor = hexToInt(config.dropColor);

		this.sphereGeometry = new THREE.SphereBufferGeometry(1, 16, 16);
		this.boxGeometry = new THREE.BoxBufferGeometry(1, 1, 1);
		this.center = new THREE.Vector3();
		this.loader.camera.lookAt(this.center);

		this.particleGroup = new THREE.Object3D();
		this.particleGroup.scale.set(1, 1, 1);

		this.loader.scene.add(this.particleGroup);

		for(let col = 0; col < this.cols; col++) {
			for(let row = 0; row < this.rows; row++) {
				let x = Calc.map(col, 0, this.cols - 1, -this.size / 2, this.size / 2);
				let y = 0;
				let z = Calc.map(row, 0, this.rows - 1, -this.size / 2, this.size / 2);

				this.particles.push(new Particle({
					group: this.particleGroup,
					x: x,
					y: y,
					z: z,
					size: 0.01,
					color: this.particleColor,
					opacity: 0.01
				}, this, this.loader));
			}
		}
	}

	createDrop(x?, y?, z?, strength?) {
		this.drops.push(new Drop({
			array: this.drops,
			group: this.particleGroup,
			x: x === undefined ? Calc.rand(-this.size / 2, this.size / 2) : x,
			y: y === undefined ? Calc.rand(30, 50) : y,
			z: z === undefined ? Calc.rand(-this.size / 2, this.size / 2) : z,
			size: 0.1,
			color: this.dropColor,
			opacity: 0,
			strength: strength
		}, this, this.loader));
	}

	updateDrops() {
		let i = this.drops.length;
		while(i--) {
			this.drops[i].update(i);
		}
	}

	createRipple(x, z, strength) {
		this.ripples.push(new Ripple({
			array: this.ripples,
			group: this.particleGroup,
			x: x,
			y: -0.1,
			z: z,
			color: this.rippleColor,
			strength: strength
		}, this, this.loader));
	}

	updateRipples() {
		let i = this.ripples.length;
		while(i--) {
			this.ripples[i].update(i);
		}
	}

	update() {
		{
			let i = this.particles.length;
			while(i--) {
				this.particles[i].update();
			}

			if(this.tick >= this.dropTick) {
				this.createDrop();
				this.dropTick = Calc.randInt(this.dropTickMin, this.dropTickMax);
				this.tick = 0;
			}

			this.updateDrops();
			this.updateRipples();
		}

		{
			let i = this.particles.length;
			while(i--) {
				let j = this.ripples.length;
				while(j--) {
					let particle = this.particles[i];
					let ripple = this.ripples[j];
					let influence = ripple.getInfluenceVector(particle.base);
					influence.setX(0);
					influence.setZ(0);
					particle.velocity.add(influence);
				}
			}

			this.particleGroup.rotation.x = Math.cos(this.loader.elapsedMilliseconds * 0.0005) * 0.1;
			this.particleGroup.rotation.y = Math.PI * 0.25 + Math.sin(this.loader.elapsedMilliseconds * 0.0005) * -0.2;
		}

		this.tick += this.loader.deltaTimeNormal;
	}
}

