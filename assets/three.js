var obj;
        import { GLTFLoader } from './three/GLTFLoader.js';

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
        var renderer = new THREE.WebGLRenderer({alpha: true,antialias: true});
        let canvas = document.querySelector('canvas')
        renderer.setSize( window.innerWidth, window.innerHeight );
        let can = document.querySelector('.hero_right')
        renderer.domElement.classList.add('logo3D')
        document.body.appendChild( renderer.domElement );

        var loader = new GLTFLoader();
        loader.load( './assets/three/mod.gltf', function ( gltf ) {
            obj = gltf.scene;
            scene.add( gltf.scene );
        }, undefined, function ( error ) {
            console.error( error );
        } );
        // scene.background = new THREE.Color(0xFAFAFD);
        // const pointLight = new THREE.PointLight(0x000000);
        // pointLight.position.set(5, 5, 5);

        // // const ambientLight = new THREE.AmbientLight(0xffffff);
        // scene.add(pointLight);

        scene.add( new THREE.AmbientLight( 0x222222 ) );

        const light = new THREE.DirectionalLight( 0xffffff, 1 );
        light.position.set( -2, 0, 10 );
        scene.add( light );

        camera.position.set(0,0,20);

        // obj.position.set(0,0,0);

        function moveCamera() {
        const t = document.body.getBoundingClientRect().top;
        if(window.innerHeight < scrollY){
            document.querySelector('.logo3D').style.display = 'none';
        }
        else{
            document.querySelector('.logo3D').style.display = 'block';
        }
        }

        document.body.onscroll = moveCamera;
        moveCamera();

        function animate() {
            requestAnimationFrame( animate );
            // obj.rotation.y += 0.08;
            let temp = -.5 + scrollY/100;
            if(obj) obj.rotation.y = temp;
            renderer.render( scene, camera );
        }
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        window.addEventListener('resize', onWindowResize, false);
        animate();

