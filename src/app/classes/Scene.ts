import * as THREE from 'three';
// var OrbitControls = require('three-orbit-controls')(THREE)
import * as OB from 'three-orbit-controls';
let OrbitControls = OB(THREE);

export class Scene {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private canvas: HTMLCanvasElement;
    private container: HTMLElement
    
    constructor(container:HTMLElement,color){
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        this.container = container;
        this.canvas = document.createElement('canvas');
        this.canvas.id     = "CursorLayer";
        this.canvas.width  = container.clientWidth;
        console.log('heit',container.clientHeight)
        this.canvas.height = container.clientHeight;
        this.canvas.style.backgroundColor = color;

        this.renderer = new THREE.WebGLRenderer({
            canvas: <HTMLCanvasElement>this.canvas,
            alpha: true,     // transparent background
            antialias: true // smooth edges
        });

    
        this.container.appendChild(this.renderer.domElement);
        this.renderer.setSize( this.canvas.width, this.canvas.height );



        this.camera.position.z = 5;

        this.animate();
        window.addEventListener( 'resize', ()=>{this.onWindowResize()}, false );
        
         let controls = new OrbitControls( this.camera, this.renderer.domElement );
            controls.target.set( 0, 1, 0 );
            controls.update();
    }
    
    onWindowResize(){
        //xdebugger;
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );

    }

    animate(){
        requestAnimationFrame( () => { this.animate() } );
        
        // this.cube.rotation.x += 0.05;
        // this.cube.rotation.y += 0.05;

        this.renderer.render(this.scene, this.camera);
    }
}
