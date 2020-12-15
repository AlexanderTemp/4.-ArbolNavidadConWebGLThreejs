var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
	var canvasWidth = window.innerWidth * 1;
	var canvasHeight = window.innerHeight * 0.85;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 80000 );
	camera.position.set(0,0,4);
	camera.lookAt(0,0,0);

	// LIGHTS

	light = new THREE.DirectionalLight( 0xffffff, 1 );
	light.position.set( 1, 3, 0 );
	//light.target.position.set(0, 0, 0);
	//light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x111111 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0xBAEAE7, 1.0 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);
	// OBJECT
    var estrella=new THREE.Geometry();
    estrella.vertices.push(new THREE.Vector3(0,0,0.3));//0
    estrella.vertices.push(new THREE.Vector3(0,0,-0.3));//1
    estrella.vertices.push(new THREE.Vector3(-0.3,0.3,0));//2
    estrella.vertices.push(new THREE.Vector3(0,1,0));//3
    estrella.vertices.push(new THREE.Vector3(0.3,0.3,0));//4
    estrella.vertices.push(new THREE.Vector3(1,0,0));//5
    estrella.vertices.push(new THREE.Vector3(0.3,-0.3,0));//6
    estrella.vertices.push(new THREE.Vector3(0,-1,0));//7
    estrella.vertices.push(new THREE.Vector3(-0.3,-0.3,0));//8
    estrella.vertices.push(new THREE.Vector3(-1,0,0));//9
    //LA CARA ES LA ESPALDA EN THREE.JS
    //LA COORDENADA Z ES LA Y EN THREE.JS
    //DERECHA ES IZQUIERDA E IZQ ES DERECHA EN THREE.JS
    //descubri que si colocas mal los face el material pong no sirve
    estrella.faces.push(new THREE.Face3(3,2,0));
    estrella.faces.push(new THREE.Face3(4,3,0));
    estrella.faces.push(new THREE.Face3(1,2,3));
    estrella.faces.push(new THREE.Face3(1,3,4));
    
    estrella.faces.push(new THREE.Face3(5,4,0));
    estrella.faces.push(new THREE.Face3(6,5,0));
    estrella.faces.push(new THREE.Face3(1,4,5));
    estrella.faces.push(new THREE.Face3(1,5,6));
    
    estrella.faces.push(new THREE.Face3(7,6,0));
    estrella.faces.push(new THREE.Face3(8,7,0));
    estrella.faces.push(new THREE.Face3(1,7,8));
    estrella.faces.push(new THREE.Face3(1,6,7));
    
    estrella.faces.push(new THREE.Face3(9,8,0));
    estrella.faces.push(new THREE.Face3(2,9,0));
    estrella.faces.push(new THREE.Face3(1,9,2));
    estrella.faces.push(new THREE.Face3(1,8,9));
    
    estrella.computeFaceNormals();
    
    
    var materialestrella=new THREE.MeshPhongMaterial({color:0xFFFA17});
    var objetoestrella=new THREE.Mesh(estrella,materialestrella);
    
   //Tronco
    var tronco=new THREE.Geometry();
    tronco.vertices.push(new THREE.Vector3(-0.6,0,0.6));//0
    tronco.vertices.push(new THREE.Vector3(0.6,0,0.6));//1
    tronco.vertices.push(new THREE.Vector3(0.6,0,-0.6));//2
    tronco.vertices.push(new THREE.Vector3(-0.6,0,-0.6));//3
    tronco.vertices.push(new THREE.Vector3(0,10,0));//4
    
    tronco.faces.push(new THREE.Face3(1,4,0));
    tronco.faces.push(new THREE.Face3(0,4,3));
    tronco.faces.push(new THREE.Face3(3,4,2));
    tronco.faces.push(new THREE.Face3(2,4,1));
    tronco.faces.push(new THREE.Face3(1,0,3));
    tronco.faces.push(new THREE.Face3(3,2,1));
    
    
    tronco.computeFaceNormals();
    var materialtronco=new THREE.MeshPhongMaterial({color:0x553C1F});
    var objetotronco=new THREE.Mesh(tronco,materialtronco);
	
    
    //parte repetitiva para crear ilusión de ramas y hojas (estrella de 8 puntas unidas 4 rotadas y escaladas por nivel)
    var arbolramas=new THREE.Geometry();
    arbolramas.vertices.push(new THREE.Vector3(0,0.2,0));//0
    arbolramas.vertices.push(new THREE.Vector3(0,-0.2,0));//1
    arbolramas.vertices.push(new THREE.Vector3(-0.135,0,0.135));//2
    arbolramas.vertices.push(new THREE.Vector3(-0.38,0,0.93));//3
    arbolramas.vertices.push(new THREE.Vector3(0,0,0.189));//4
    arbolramas.vertices.push(new THREE.Vector3(0.38,0,0.93));//5
    arbolramas.vertices.push(new THREE.Vector3(0.134,0,0.134));//6
    arbolramas.vertices.push(new THREE.Vector3(0.93,0,0.38));//7
    arbolramas.vertices.push(new THREE.Vector3(0.189,0,0));//8
    arbolramas.vertices.push(new THREE.Vector3(0.93,0,-0.38));//9
    arbolramas.vertices.push(new THREE.Vector3(0.134,0,-0.134));//10
    arbolramas.vertices.push(new THREE.Vector3(0.38,0,-0.93));//11
    arbolramas.vertices.push(new THREE.Vector3(0,0,-0.189));//12
    arbolramas.vertices.push(new THREE.Vector3(-0.38,0,-0.93));//13
    arbolramas.vertices.push(new THREE.Vector3(-0.134,0,-0.134));//14
    arbolramas.vertices.push(new THREE.Vector3(-0.93,0,-0.38));//15
    arbolramas.vertices.push(new THREE.Vector3(-0.189,0,0));//16
    arbolramas.vertices.push(new THREE.Vector3(-0.93,0,0.38));//17
    
    arbolramas.faces.push(new THREE.Face3(0,2,3));//0
    arbolramas.faces.push(new THREE.Face3(3,2,1));//1
    arbolramas.faces.push(new THREE.Face3(3,4,0));//2
    arbolramas.faces.push(new THREE.Face3(1,4,3));//3
    
    arbolramas.faces.push(new THREE.Face3(4,5,0));//4
    arbolramas.faces.push(new THREE.Face3(1,5,4));//5
    arbolramas.faces.push(new THREE.Face3(5,6,0));//6
    arbolramas.faces.push(new THREE.Face3(1,6,5));//7
    
    arbolramas.faces.push(new THREE.Face3(6,7,0));//8
    arbolramas.faces.push(new THREE.Face3(1,7,6));//9
    arbolramas.faces.push(new THREE.Face3(7,8,0));//10
    arbolramas.faces.push(new THREE.Face3(1,8,7));//11
    
    arbolramas.faces.push(new THREE.Face3(8,9,0));//12
    arbolramas.faces.push(new THREE.Face3(1,9,8));//13
    arbolramas.faces.push(new THREE.Face3(9,10,0));//14
    arbolramas.faces.push(new THREE.Face3(1,10,9));//15
    
    arbolramas.faces.push(new THREE.Face3(10,11,0));//16
    arbolramas.faces.push(new THREE.Face3(1,11,10));//17
    arbolramas.faces.push(new THREE.Face3(11,12,0));//18
    arbolramas.faces.push(new THREE.Face3(1,12,11));//19
    
    arbolramas.faces.push(new THREE.Face3(12,13,0));//20
    arbolramas.faces.push(new THREE.Face3(1,13,12));//21
    arbolramas.faces.push(new THREE.Face3(13,14,0));//22
    arbolramas.faces.push(new THREE.Face3(1,14,13));//23
    
    arbolramas.faces.push(new THREE.Face3(14,15,0));//24
    arbolramas.faces.push(new THREE.Face3(1,15,14));//25
    arbolramas.faces.push(new THREE.Face3(15,16,0));//26
    arbolramas.faces.push(new THREE.Face3(1,16,15));//27
    
    arbolramas.faces.push(new THREE.Face3(16,17,0));//28
    arbolramas.faces.push(new THREE.Face3(1,17,16));//29
    arbolramas.faces.push(new THREE.Face3(17,2,0));//18
    arbolramas.faces.push(new THREE.Face3(1,2,17));//18
    arbolramas.computeFaceNormals();
    var materialarbolramas=new THREE.MeshPhongMaterial({color:0x4BB960});
    var objetoarbolramas=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas2=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas3=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas4=new THREE.Mesh(arbolramas,materialarbolramas);
 
    objetoarbolramas2.rotateY(10);
    objetoarbolramas3.rotateY(20);
    objetoarbolramas4.rotateY(30);
    
    ////Carga de grupos para nivelar en el arbol NIVEL 1
    //var group =new THREE.Group();
    var objetoarbolramas5=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas6=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas7=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas8=new THREE.Mesh(arbolramas,materialarbolramas);
    objetoarbolramas6.rotateY(10);
    objetoarbolramas7.rotateY(20);
    objetoarbolramas8.rotateY(30);
    objetoarbolramas5.translateY(0.2);
    objetoarbolramas6.translateY(0.2);
    objetoarbolramas7.translateY(0.2);
    objetoarbolramas8.translateY(0.2);
    objetoarbolramas5.scale.set(0.85,0.85,0.85);
    objetoarbolramas6.scale.set(0.85,0.85,0.85);
    objetoarbolramas7.scale.set(0.85,0.85,0.85);
    objetoarbolramas8.scale.set(0.85,0.85,0.85);
    
    //MAS NIVELES
    var objetoarbolramas29=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas30=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas31=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas32=new THREE.Mesh(arbolramas,materialarbolramas);
    objetoarbolramas30.rotateY(10);
    objetoarbolramas31.rotateY(20);
    objetoarbolramas32.rotateY(30);
    objetoarbolramas29.translateY(0.1);
    objetoarbolramas30.translateY(0.1);
    objetoarbolramas31.translateY(0.1);
    objetoarbolramas32.translateY(0.1);
    objetoarbolramas29.scale.set(0.92,0.92,0.92);
    objetoarbolramas30.scale.set(0.92,0.92,0.92);
    objetoarbolramas31.scale.set(0.92,0.92,0.92);
    objetoarbolramas32.scale.set(0.92,0.92,0.92);
    
    
    //objetoarbolramas5.scale(0.8,0.8,0.8);
    //NIVEL 2
    var objetoarbolramas9=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas10=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas11=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas12=new THREE.Mesh(arbolramas,materialarbolramas);
    objetoarbolramas9.rotateY(10);
    objetoarbolramas10.rotateY(20);
    objetoarbolramas11.rotateY(30);
    objetoarbolramas12.translateY(0.4);
    objetoarbolramas9.translateY(0.4);
    objetoarbolramas10.translateY(0.4);
    objetoarbolramas11.translateY(0.4);
    objetoarbolramas9.scale.set(0.7,0.7,0.7);
    objetoarbolramas10.scale.set(0.7,0.7,0.7);
    objetoarbolramas11.scale.set(0.7,0.7,0.7);
    objetoarbolramas12.scale.set(0.7,0.7,0.7);
    
    //MAS NIVELES
    var objetoarbolramas33=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas34=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas35=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas36=new THREE.Mesh(arbolramas,materialarbolramas);
    objetoarbolramas34.rotateY(10);
    objetoarbolramas35.rotateY(20);
    objetoarbolramas36.rotateY(30);
    objetoarbolramas33.translateY(0.48);
    objetoarbolramas34.translateY(0.48);
    objetoarbolramas35.translateY(0.48);
    objetoarbolramas36.translateY(0.48);
    objetoarbolramas33.scale.set(0.62,0.62,0.62);
    objetoarbolramas34.scale.set(0.62,0.62,0.62);
    objetoarbolramas35.scale.set(0.62,0.62,0.62);
    objetoarbolramas36.scale.set(0.62,0.62,0.62);
    
    //MAS NIVELES
    var objetoarbolramas37=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas38=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas39=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas40=new THREE.Mesh(arbolramas,materialarbolramas);
    objetoarbolramas38.rotateY(10);
    objetoarbolramas39.rotateY(20);
    objetoarbolramas40.rotateY(30);
    objetoarbolramas37.translateY(0.3);
    objetoarbolramas38.translateY(0.3);
    objetoarbolramas39.translateY(0.3);
    objetoarbolramas40.translateY(0.3);
    objetoarbolramas37.scale.set(0.8,0.8,0.8);
    objetoarbolramas38.scale.set(0.8,0.8,0.8);
    objetoarbolramas39.scale.set(0.8,0.8,0.8);
    objetoarbolramas40.scale.set(0.8,0.8,0.8);
    
    
    //NIVEL 3
    var objetoarbolramas13=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas14=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas15=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas16=new THREE.Mesh(arbolramas,materialarbolramas);
    objetoarbolramas14.rotateY(10);
    objetoarbolramas15.rotateY(20);
    objetoarbolramas16.rotateY(30);
    objetoarbolramas13.translateY(0.55);
    objetoarbolramas14.translateY(0.55);
    objetoarbolramas15.translateY(0.55);
    objetoarbolramas16.translateY(0.55);
    objetoarbolramas13.scale.set(0.55,0.55,0.55);
    objetoarbolramas14.scale.set(0.55,0.55,0.55);
    objetoarbolramas15.scale.set(0.55,0.55,0.55);
    objetoarbolramas16.scale.set(0.55,0.55,0.55);
    
    //MAS NIVELES
    var objetoarbolramas41=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas42=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas43=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas44=new THREE.Mesh(arbolramas,materialarbolramas);
    objetoarbolramas42.rotateY(10);
    objetoarbolramas43.rotateY(20);
    objetoarbolramas44.rotateY(30);
    objetoarbolramas41.translateY(0.6);
    objetoarbolramas42.translateY(0.6);
    objetoarbolramas43.translateY(0.6);
    objetoarbolramas44.translateY(0.6);
    objetoarbolramas41.scale.set(0.5,0.5,0.5);
    objetoarbolramas42.scale.set(0.5,0.5,0.5);
    objetoarbolramas43.scale.set(0.5,0.5,0.5);
    objetoarbolramas44.scale.set(0.5,0.5,0.5);
    
    
    //NIVEL 4
    var objetoarbolramas17=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas18=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas19=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas20=new THREE.Mesh(arbolramas,materialarbolramas);
    objetoarbolramas18.rotateY(10);
    objetoarbolramas19.rotateY(20);
    objetoarbolramas20.rotateY(30);
    objetoarbolramas17.translateY(0.68);
    objetoarbolramas18.translateY(0.68);
    objetoarbolramas19.translateY(0.68);
    objetoarbolramas20.translateY(0.68);
    objetoarbolramas17.scale.set(0.4,0.4,0.4);
    objetoarbolramas18.scale.set(0.4,0.4,0.4);
    objetoarbolramas19.scale.set(0.4,0.4,0.4);
    objetoarbolramas20.scale.set(0.4,0.4,0.4);
    
    //NIVEL 5
    var objetoarbolramas21=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas22=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas23=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas24=new THREE.Mesh(arbolramas,materialarbolramas);
    objetoarbolramas22.rotateY(10);
    objetoarbolramas23.rotateY(20);
    objetoarbolramas24.rotateY(30);
    objetoarbolramas21.translateY(0.75);
    objetoarbolramas22.translateY(0.75);
    objetoarbolramas23.translateY(0.75);
    objetoarbolramas24.translateY(0.75);
    objetoarbolramas21.scale.set(0.3,0.3,0.3);
    objetoarbolramas22.scale.set(0.3,0.3,0.3);
    objetoarbolramas23.scale.set(0.3,0.3,0.3);
    objetoarbolramas24.scale.set(0.3,0.3,0.3);
    
    //NIVEL 6
    var objetoarbolramas25=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas26=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas27=new THREE.Mesh(arbolramas,materialarbolramas);
    var objetoarbolramas28=new THREE.Mesh(arbolramas,materialarbolramas);
    objetoarbolramas26.rotateY(10);
    objetoarbolramas27.rotateY(20);
    objetoarbolramas28.rotateY(30);
    objetoarbolramas25.translateY(0.8);
    objetoarbolramas26.translateY(0.8);
    objetoarbolramas27.translateY(0.8);
    objetoarbolramas28.translateY(0.8);
    objetoarbolramas25.scale.set(0.17,0.17,0.17);
    objetoarbolramas26.scale.set(0.17,0.17,0.17);
    objetoarbolramas27.scale.set(0.17,0.17,0.17);
    objetoarbolramas28.scale.set(0.17,0.17,0.17);
    objetotronco.scale.set(0.25,0.1,0.25);
    objetotronco.translateY(-0.4);
    objetoestrella.scale.set(0.16,0.16,0.16);
    objetoestrella.translateY(0.95);
    ///esferas
    
    var esfera1 = new THREE.SphereGeometry( 0.06, 64, 32 );
    esfera1.computeFaceNormals();
    var objetoesfera1 = new THREE.Mesh( esfera1, new THREE.MeshPhongMaterial({color:0xffff00}));
    //objetoesfera1.translateY(1); 0 escala
    //objetoesfera1.translateOnAxis(new THREE.Vector3(0,5,0),0);
    objetoesfera1.translateX(0.5);
    objetoesfera1.translateY(0.4);
    objetoesfera1.translateZ(0.4);
    
    var esfera2=new THREE.SphereGeometry(0.06,64,32);
    esfera2.computeFaceNormals();
    var objetoesfera2=new THREE.Mesh(esfera2, new THREE.MeshPhongMaterial({color:0xDF4646}));
    objetoesfera2.translateX(-0.8);
    objetoesfera2.translateY(0.2);
    objetoesfera2.translateZ(-0.2);
    

    var esfera3=new THREE.SphereGeometry(0.06,64,32);
    esfera3.computeFaceNormals();
    var objetoesfera3=new THREE.Mesh(esfera3, new THREE.MeshPhongMaterial({color:0xFB9A53}));
    objetoesfera3.translateX(0.8);
    objetoesfera3.translateY(0.2);
    objetoesfera3.translateZ(-0.2);
    
    var esfera4=new THREE.SphereGeometry(0.06,64,32);
    esfera4.computeFaceNormals();
    var objetoesfera4=new THREE.Mesh(esfera4, new THREE.MeshPhongMaterial({color:0x29EEDB}));
    objetoesfera4.translateX(-0.7);
    objetoesfera4.translateY(0.4);
    objetoesfera4.translateZ(0.2);
    
    var esfera5=new THREE.SphereGeometry(0.06,64,32);
    esfera5.computeFaceNormals();
    var objetoesfera5=new THREE.Mesh(esfera5, new THREE.MeshPhongMaterial({color:0x6575F3}));
    objetoesfera5.translateX(0.5);
    objetoesfera5.translateY(0.6);
    objetoesfera5.translateZ(0);
    
    var esfera6=new THREE.SphereGeometry(0.06,64,32);
    esfera6.computeFaceNormals();
    var objetoesfera6=new THREE.Mesh(esfera6, new THREE.MeshPhongMaterial({color:0x963DFF}));
    objetoesfera6.translateX(0);
    objetoesfera6.translateY(0.4);
    objetoesfera6.translateZ(-0.7);
    
    var esfera7=new THREE.SphereGeometry(0.06,64,32);
    esfera7.computeFaceNormals();
    var objetoesfera7=new THREE.Mesh(esfera7, new THREE.MeshPhongMaterial({color:0xE749FF}));
    objetoesfera7.translateX(-0.3);
    objetoesfera7.translateY(0.5);
    objetoesfera7.translateZ(0.5);
    
    var esfera8=new THREE.SphereGeometry(0.06,64,32);
    esfera8.computeFaceNormals();
    var objetoesfera8=new THREE.Mesh(esfera8, new THREE.MeshPhongMaterial({color:0x656E8A}));
    objetoesfera8.translateX(0.2);
    objetoesfera8.translateY(0.1);
    objetoesfera8.translateZ(0.9);
    
    // Carga de objetos a Escena Render
	scene = new THREE.Scene();
    scene.add( objetoesfera1 );
    scene.add(objetoesfera2);
    scene.add(objetoesfera3);
    scene.add(objetoesfera4);
    scene.add(objetoesfera5);
    scene.add(objetoesfera6);
    scene.add(objetoesfera7);
    scene.add(objetoesfera8);
    
	scene.add( light );
	scene.add( ambientLight );
	scene.add( objetoestrella );
    scene.add( objetotronco );
    
    scene.add(objetoarbolramas);
    scene.add(objetoarbolramas2);
    scene.add(objetoarbolramas3);
    scene.add(objetoarbolramas4);
    
    scene.add(objetoarbolramas5);
    scene.add(objetoarbolramas6);
    scene.add(objetoarbolramas7);
    scene.add(objetoarbolramas8);
    
    scene.add(objetoarbolramas9);
    scene.add(objetoarbolramas10);
    scene.add(objetoarbolramas11);
    scene.add(objetoarbolramas12);
    
    scene.add(objetoarbolramas13);
    scene.add(objetoarbolramas14);
    scene.add(objetoarbolramas15);
    scene.add(objetoarbolramas16);
    
    scene.add(objetoarbolramas17);
    scene.add(objetoarbolramas18);
    scene.add(objetoarbolramas19);
    scene.add(objetoarbolramas20);
    
    scene.add(objetoarbolramas21);
    scene.add(objetoarbolramas22);
    scene.add(objetoarbolramas23);
    scene.add(objetoarbolramas24);
    
    scene.add(objetoarbolramas25);
    scene.add(objetoarbolramas26);
    scene.add(objetoarbolramas27);
    scene.add(objetoarbolramas28);
    
    scene.add(objetoarbolramas29);
    scene.add(objetoarbolramas30);
    scene.add(objetoarbolramas31);
    scene.add(objetoarbolramas32);
    
    scene.add(objetoarbolramas33);
    scene.add(objetoarbolramas34);
    scene.add(objetoarbolramas35);
    scene.add(objetoarbolramas36);
    
    scene.add(objetoarbolramas37);
    scene.add(objetoarbolramas38);
    scene.add(objetoarbolramas39);
    scene.add(objetoarbolramas40);
    
    scene.add(objetoarbolramas41);
    scene.add(objetoarbolramas42);
    scene.add(objetoarbolramas43);
    scene.add(objetoarbolramas44);
}

function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}

try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport);
}
