import * as THREE from 'three';

export class ThreeViewer {
  constructor(canvasContainer) {
    this.container = canvasContainer;
    this.currentMeshGroup = null;
    this.isWireframe = false;
    this.isSlicing = false;
    this.sliceY = 0.5;
    this.animationId = null;

    this.init();
  }

  init() {
    // 1. Scene setup (Bright studio light background)
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf8fafc);

    // Grid Helper & 3D Print Bed Simulation for light mode
    const gridHelper = new THREE.GridHelper(10, 20, 0x1d4ed8, 0xcb5e1);
    gridHelper.position.y = -1.5;
    this.scene.add(gridHelper);

    // 2. Camera setup
    const aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100);
    this.camera.position.set(3.5, 3.5, 4.5);
    this.camera.lookAt(0, 0, 0);

    // 3. Renderer setup
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.container.appendChild(this.renderer.domElement);

    // 4. Studio Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    this.scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xfff5ea, 1.6);
    dirLight1.position.set(5, 8, 5);
    dirLight1.castShadow = true;
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xe0f2fe, 0.9);
    dirLight2.position.set(-5, 4, -5);
    this.scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x2563eb, 1, 10);
    pointLight.position.set(0, 3, 0);
    this.scene.add(pointLight);

    // Interactive mouse rotation control
    this.isMouseDown = false;
    this.previousMousePosition = { x: 0, y: 0 };
    this.rotationGroup = new THREE.Group();
    this.scene.add(this.rotationGroup);

    this.setupInteractivity();
    this.animate();

    window.addEventListener('resize', () => this.onWindowResize());
  }

  setupInteractivity() {
    const el = this.renderer.domElement;

    el.addEventListener('mousedown', (e) => {
      this.isMouseDown = true;
      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => {
      this.isMouseDown = false;
    });

    el.addEventListener('mousemove', (e) => {
      if (!this.isMouseDown) return;
      const deltaMove = {
        x: e.clientX - this.previousMousePosition.x,
        y: e.clientY - this.previousMousePosition.y
      };

      this.rotationGroup.rotation.y += deltaMove.x * 0.008;
      this.rotationGroup.rotation.x += deltaMove.y * 0.008;

      this.previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    el.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.camera.position.z += e.deltaY * 0.003;
      this.camera.position.z = THREE.MathUtils.clamp(this.camera.position.z, 2, 9);
    }, { passive: false });
  }

  loadModel(objectType) {
    if (this.currentMeshGroup) {
      this.rotationGroup.remove(this.currentMeshGroup);
    }

    const group = new THREE.Group();

    // Material definitions
    const mainMaterial = new THREE.MeshStandardMaterial({
      color: 0x1d4ed8,
      roughness: 0.35,
      metalness: 0.1,
      wireframe: this.isWireframe
    });

    const accentMaterial = new THREE.MeshStandardMaterial({
      color: 0x00f2fe,
      roughness: 0.2,
      metalness: 0.3,
      wireframe: this.isWireframe
    });

    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.6,
      metalness: 0.2,
      wireframe: this.isWireframe
    });

    if (objectType === 'nametag') {
      // 1차시: 네임택 (Nametag Plate + Strap Hole + Embossed Text Blocks)
      const baseGeo = new THREE.BoxGeometry(2.6, 0.2, 1.0);
      const baseMesh = new THREE.Mesh(baseGeo, mainMaterial);
      baseMesh.position.y = -1.3;
      group.add(baseMesh);

      // Hole ring
      const ringGeo = new THREE.TorusGeometry(0.25, 0.08, 16, 32);
      const ringMesh = new THREE.Mesh(ringGeo, accentMaterial);
      ringMesh.rotation.x = Math.PI / 2;
      ringMesh.position.set(-1.4, -1.3, 0);
      group.add(ringMesh);

      // Embossed letters simulation (3D Blocks forming '3D PRINT')
      const letterGeo1 = new THREE.BoxGeometry(0.4, 0.15, 0.4);
      const letterMesh1 = new THREE.Mesh(letterGeo1, accentMaterial);
      letterMesh1.position.set(-0.6, -1.15, 0);
      group.add(letterMesh1);

      const letterGeo2 = new THREE.CylinderGeometry(0.2, 0.2, 0.15, 16);
      const letterMesh2 = new THREE.Mesh(letterGeo2, accentMaterial);
      letterMesh2.position.set(0.2, -1.15, 0);
      group.add(letterMesh2);

      const letterGeo3 = new THREE.BoxGeometry(0.5, 0.15, 0.3);
      const letterMesh3 = new THREE.Mesh(letterGeo3, accentMaterial);
      letterMesh3.position.set(0.8, -1.15, 0);
      group.add(letterMesh3);

    } else if (objectType === 'phone_stand') {
      // 2차시: 스마트폰 거치대 (Phone Stand with Cutout)
      const shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.lineTo(1.8, 0);
      shape.lineTo(2.0, 0.4);
      shape.lineTo(1.5, 2.2);
      shape.lineTo(1.1, 2.2);
      shape.lineTo(1.3, 0.8);
      shape.lineTo(0.9, 0.6);
      shape.lineTo(0.3, 1.2);
      shape.lineTo(0, 1.0);
      shape.closePath();

      const extrudeSettings = {
        steps: 1,
        depth: 1.4,
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.05,
        bevelSegments: 3
      };

      const standGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      const standMesh = new THREE.Mesh(standGeo, mainMaterial);
      standMesh.position.set(-1.0, -1.4, -0.7);
      group.add(standMesh);

      // Cable Hole simulation
      const holeGeo = new THREE.CylinderGeometry(0.3, 0.3, 1.6, 16);
      const holeMesh = new THREE.Mesh(holeGeo, accentMaterial);
      holeMesh.rotation.z = Math.PI / 2;
      holeMesh.position.set(0, -1.0, 0);
      group.add(holeMesh);

    } else if (objectType === 'mini_character') {
      // 3차시: 미니 캐릭터 피규어 (Head, Body, Ears, Limbs, Base)
      // Head
      const headGeo = new THREE.SphereGeometry(0.7, 32, 32);
      const headMesh = new THREE.Mesh(headGeo, mainMaterial);
      headMesh.position.y = 0.2;
      group.add(headMesh);

      // Eyes (Mirror effect)
      const eyeGeo = new THREE.SphereGeometry(0.09, 16, 16);
      const leftEye = new THREE.Mesh(eyeGeo, accentMaterial);
      leftEye.position.set(-0.25, 0.3, 0.6);
      const rightEye = new THREE.Mesh(eyeGeo, accentMaterial);
      rightEye.position.set(0.25, 0.3, 0.6);
      group.add(leftEye, rightEye);

      // Ears (Sculpted cones)
      const earGeo = new THREE.ConeGeometry(0.22, 0.6, 16);
      const leftEar = new THREE.Mesh(earGeo, accentMaterial);
      leftEar.position.set(-0.5, 0.85, 0);
      leftEar.rotation.z = 0.3;
      const rightEar = new THREE.Mesh(earGeo, accentMaterial);
      rightEar.position.set(0.5, 0.85, 0);
      rightEar.rotation.z = -0.3;
      group.add(leftEar, rightEar);

      // Body
      const bodyGeo = new THREE.CylinderGeometry(0.35, 0.5, 0.7, 16);
      const bodyMesh = new THREE.Mesh(bodyGeo, mainMaterial);
      bodyMesh.position.y = -0.5;
      group.add(bodyMesh);

      // Stand Base (3D print bed stability)
      const baseGeo = new THREE.CylinderGeometry(1.0, 1.0, 0.15, 32);
      const baseMesh = new THREE.Mesh(baseGeo, baseMaterial);
      baseMesh.position.y = -1.3;
      group.add(baseMesh);

    } else if (objectType === 'ai_ornament') {
      // 4차시: AI 생성 기하학적 로터스 소품 (TorusKnot + Faceted Icosahedron)
      const knotGeo = new THREE.TorusKnotGeometry(0.75, 0.22, 100, 16, 3, 5);
      const knotMesh = new THREE.Mesh(knotGeo, mainMaterial);
      knotMesh.position.y = 0.1;
      group.add(knotMesh);

      const coreGeo = new THREE.IcosahedronGeometry(0.45, 1);
      const coreMesh = new THREE.Mesh(coreGeo, accentMaterial);
      coreMesh.position.y = 0.1;
      group.add(coreMesh);

      const baseGeo = new THREE.CylinderGeometry(0.8, 0.9, 0.2, 8);
      const baseMesh = new THREE.Mesh(baseGeo, baseMaterial);
      baseMesh.position.y = -1.2;
      group.add(baseMesh);
    }

    this.currentMeshGroup = group;
    this.rotationGroup.add(group);
  }

  toggleWireframe(enabled) {
    this.isWireframe = enabled;
    if (this.currentMeshGroup) {
      this.currentMeshGroup.traverse((child) => {
        if (child.isMesh) {
          child.material.wireframe = enabled;
        }
      });
    }
  }

  resetCamera() {
    this.rotationGroup.rotation.set(0, 0, 0);
    this.camera.position.set(3.5, 3.5, 4.5);
    this.camera.lookAt(0, 0, 0);
  }

  onWindowResize() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());

    if (!this.isMouseDown && this.rotationGroup) {
      this.rotationGroup.rotation.y += 0.005; // gentle auto rotation
    }

    this.renderer.render(this.scene, this.camera);
  }
}
