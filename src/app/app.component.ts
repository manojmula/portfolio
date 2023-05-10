import { Component, OnInit, ElementRef, ViewChild, Renderer2, RendererFactory2 } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  // @ViewChild('rendererContainer') rendererContainer!: ElementRef;

  // renderer = new THREE.WebGLRenderer();
  // scene : any = null;
  // camera : any = null;
  // carouselItems : any = [];
  // renderer2: Renderer2;
  // raycaster = new THREE.Raycaster();
  // mouse = new THREE.Vector2();

  // constructor(private rendererFactory: RendererFactory2) {
  //   this.renderer2 = rendererFactory.createRenderer(null, null);

  //   this.scene = new THREE.Scene();

  //   this.camera = new THREE.PerspectiveCamera(
  //     75, window.innerWidth / window.innerHeight, 0.1, 1000
  //   );
  //   this.camera.position.z = 15;

  //   // Create carousel items
  //   const images = ['assets/images/ocean.jpeg', 'assets/images/ocean2.jpeg', 'assets/images/ocean2.jpeg'];
  //   const radius = 5;
  //   const angleStep = (2 * Math.PI) / images.length;

  //   images.forEach((image, index) => {
  //     const texture = new THREE.TextureLoader().load(image);
  //     const material = new THREE.MeshBasicMaterial({ map: texture });
  //     const geometry = new THREE.PlaneGeometry(6, 4);
  //     const mesh = new THREE.Mesh(geometry, material);
  //     mesh.position.set(
  //       radius * Math.cos(index * angleStep),
  //       0,
  //       radius * Math.sin(index * angleStep)
  //     );
  //     mesh.lookAt(this.scene.position);
  //     this.scene.add(mesh);
  //     this.carouselItems.push(mesh);
  //   });
  // }

  // ngOnInit() {
  //   this.renderer.setSize(window.innerWidth, window.innerHeight);
  //   this.animate();
  // }

  // animate() {
  //   window.requestAnimationFrame(() => this.animate());
  
  //   // Rotate carousel items
  //   this.carouselItems.forEach((item : any, index : any) => {
  //     const angle = (index * 2 * Math.PI) / this.carouselItems.length + (Math.PI / 180) * 0.1 * (Date.now() % 360);
  //     item.position.set(
  //       5 * Math.cos(angle),
  //       0,
  //       5 * Math.sin(angle)
  //     );
  //     item.lookAt(this.scene.position);
  
  //     // Update scale and opacity based on z-position
  //     const scale = 1 + (item.position.z + 5) / 10;
  //     item.scale.set(scale, scale, scale);
  //     item.material.opacity = (item.position.z + 5) / 10;
  //     item.material.needsUpdate = true;
  //   });
  
  //   this.renderer.render(this.scene, this.camera);
  // }
  

  // onDocumentMouseDown(event: MouseEvent) {
  //   event.preventDefault();

  //   this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  //   this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  //   this.raycaster.setFromCamera(this.mouse, this.camera);
  //   const intersects = this.raycaster.intersectObjects(this.carouselItems);

  //   if (intersects.length > 0) {
  //     console.log('Image clicked:', intersects[0].object);
  //     // Handle the click event here, e.g., open the image in a new tab or display more information about the project
  //   }
  // }

  // ngAfterViewInit() {
  //   this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
  //   this.renderer2.listen(this.rendererContainer.nativeElement, 'mousedown', this.onDocumentMouseDown.bind(this));
  // }
}
