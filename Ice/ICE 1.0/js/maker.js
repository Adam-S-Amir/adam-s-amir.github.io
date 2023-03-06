var maker = {
    platform_count: 0,
    cone_count: 0,
    cylinder_count: 0,
    root_platform_mesh: null,
    root_cone_mesh: null,
    init: function() {
        // platform
        this.root_platform_mesh = BABYLON.Mesh.CreateBox("root_platform",1, scene);
        decorations.decorate_platform(this.root_platform_mesh);
        this.root_platform_mesh.cullingStrategy = BABYLON.AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY;
        this.root_platform_mesh.isVisible = false;
        // cone
        this.root_cone_mesh = BABYLON.Mesh.CreateCylinder("root_cone", 1.0, 0.0, 1.0, 5, 1, scene, false, BABYLON.Mesh.DEFAULTSIDE);
        decorations.decorate_cone(this.root_cone_mesh);
        this.root_cone_mesh.cullingStrategy = BABYLON.AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY;
        this.root_cone_mesh.isVisible = false;

    },
    make_platform: function(posList, rotList, sizList) {
        // Data
        let pX = posList[0]; let pY = posList[1]; let pZ = posList[2];
        let rX = rotList[1]; let rY = rotList[0]; let rZ = rotList[2];
        let sX = sizList[0]; let sY = sizList[1]; let sZ = sizList[2];
        // Random
        pY += Math.random() / 10;
        // Mesh
        let mesh_name = "P" + this.platform_count;
        var platform = this.root_platform_mesh.createInstance(mesh_name);
        platform.scaling = new BABYLON.Vector3(sX,sY,sZ);
        platform.position = new BABYLON.Vector3(pX,pY,pZ);
        platform.rotation = new BABYLON.Vector3(rX,rY,rZ);
        platform.freezeWorldMatrix();
        // Physics
        platform.physicsImpostor = new BABYLON.PhysicsImpostor(platform, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0.0, restitution: 0.0, friction: 0.6}, scene);

        // Tracker
        this.platform_count += 1;
    },
    make_cone: function(posList) {
        // Data
        let pX = posList[0]; let pY = posList[1]; let pZ = posList[2];
        // Mesh
        let mesh_name = "C" + this.cone_count;
        var cone = this.root_cone_mesh.createInstance(mesh_name);
        cone.position = new BABYLON.Vector3(pX,pY,pZ);
        cone.scaling.y = 1.2;
        cone.freezeWorldMatrix();
        // Tracker
        cones.push(cone);
        this.cone_count += 1;
    },
    make_ending: function(posList) {
        // Data
        let pX = posList[0]; let pY = posList[1]; let pZ = posList[2];
        // Mesh
        ending = BABYLON.Mesh.CreateCylinder("ending", 2.0, 2.0, 2.0, 8, 1, scene, false, BABYLON.Mesh.DEFAULTSIDE);
        ending.position = new BABYLON.Vector3(pX, pY, pZ)
        // Visuals
        ending.material = decorations.materials.ending;
        // Physics
        ending.freezeWorldMatrix();
    },
    make_cylinder: function(posList, rotList, sizList) {
        // Data
        let pX = posList[0]; let pY = posList[1]; let pZ = posList[2];
        let rX = rotList[1]; let rY = rotList[0]; let rZ = rotList[2];
        let sX = sizList[0]; let sY = sizList[1]; let sZ = sizList[2];
        
        let height = 1;//sY;
        let radius = 1;//sZ;

        var mesh = BABYLON.Mesh.CreateCylinder("Y" + this.cylinder_count, height, radius, radius, 12, 1, scene, false, BABYLON.Mesh.DEFAULTSIDE);
        mesh.scaling = new BABYLON.Vector3(sX,sY,sZ);
        mesh.position = new BABYLON.Vector3(pX,pY,pZ);
        mesh.rotation = new BABYLON.Vector3(rX,rY,rZ);
        mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.CylinderImpostor, { mass: 0.0, restitution: 0.0 }, scene);

        this.cylinder_count += 1;
    },
    make_start: function(posList) {
        let pX = posList[0]; let pY = posList[1]; let pZ = posList[2];
        this.make_platform([pX,pY,pZ+9], [0,0,0], [3,0.5, 14]);
    }

}
