var map = {
    title: "the cheetah",
    song: "env2",
    maker: "",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([0.00021, -1.05979, -48.429790000000004], [0, 0, 0], [3.4, 1.02, 102.06], 2.0, 0, 0, 0.6, false);
        a.p([-6.4397199999999994, -1.39972, -145.20972], [0.14, 0, 0.28], [2.94, 1.08, 103.24], 2.0, 0, 0, 0.6, false);
        a.p([-27.839650000000002, -1.53965, -243.31965], [0.3, 0, 0.28], [2.68, 1.06, 106.02], 2.0, 0, 0, 0.6, false);
        a.p([-65.95958, -1.85958, -337.41958], [0.48, 0, 0.28], [2.84, 1.06, 114.6], 2.0, 0, 0, 0.6, false);
        a.p([-146.59950999999998, -2.07951, -446.85951], [0.74, 0, 0.28], [3.42, 1.08, 167.5], 2.0, 0, 0, 0.6, false);
        a.p([-245.69993, 4.11007, -523.8599300000001], [-0.37, -0.06, -0.15], [99.5, 1.4, 4.76], 1, 0, 0, 0.6, false);
        a.p([-327.00986, 18.46014, -573.16986], [-0.7, -0.06, -0.15], [99.5, 1.4, 4.76], 1, 0, 0, 0.6, false);
        a.p([-394.52979, 32.86021, -641.79979], [-0.87, -0.06, -0.15], [99.5, 1.4, 4.76], 1, 0, 0, 0.6, false);
        a.y([47.920280000000005, -26.929720000000003, -109.15972], [-1.57, -1.57, 0], [35.42, 2, 35.42], 1, 0, 0, 0.6);
        a.y([47.92035, -26.929650000000002, -166.75965], [-1.57, -1.57, 0], [82.56, 2, 82.56], 1, 0, 0, 0.6);
        a.y([43.140420000000006, -26.92958, -223.58957999999998], [-1.29, -1.57, 0], [35.42, 2, 35.42], 1, 0, 0, 0.6);
        a.y([-78.52951, -19.94951, -208.34951], [-1.29, -1.57, 0], [35.42, 2, 35.42], 1, 0, 0, 0.6);
        a.y([-72.77, -19.95, -150.69], [-1.57, -1.57, 0], [82.56, 2, 82.56], 1, 0, 0, 0.6);
        a.y([-72.76993, -19.94993, -93.08993000000001], [-1.57, -1.57, 0], [35.42, 2, 35.42], 1, 0, 0, 0.6);
        a.y([-27.02986, -26.929859999999998, -388.21986], [-0.87, -1.57, 0], [35.42, 2, 35.42], 1, 0, 0, 0.6);
        a.y([0.10021000000000001, -26.929789999999997, -338.04979], [-1.16, -1.57, 0], [82.56, 2, 82.56], 1, 0, 0, 0.6);
        a.y([23.15028, -26.929720000000003, -285.26972], [-1.16, -1.57, 0], [35.42, 2, 35.42], 1, 0, 0, 0.6);
        a.y([-90.34965, -21.249650000000003, -239.12965], [-1.16, -1.57, 0], [35.42, 2, 35.42], 1, 0, 0, 0.6);
        a.y([-113.39958, -21.24958, -291.90958], [-1.16, -1.57, 0], [82.56, 2, 82.56], 1, 0, 0, 0.6);
        a.y([-140.52951, -21.24951, -342.07951], [-0.87, -1.57, 0], [35.42, 2, 35.42], 1, 0, 0, 0.6);
        a.y([-72.87, -21.79, -446.02], [-0.9, -1.57, 0], [35.42, 2, 35.42], 1, 0, 0, 0.6);
        a.y([-108.56993, -21.78993, -491.21993000000003], [-0.9, -1.57, 0], [82.56, 2, 82.56], 1, 0, 0, 0.6);
        a.y([-147.55986000000001, -21.789859999999997, -532.8498599999999], [-0.62, -1.57, 0], [35.42, 2, 35.42], 1, 0, 0, 0.6);
        a.y([-234.72978999999998, -21.789789999999996, -453.06979], [-0.62, -1.57, 0], [35.42, 2, 35.42], 1, 0, 0, 0.6);
        a.y([-195.74972000000002, -21.789720000000003, -411.43972], [-0.9, -1.57, 0], [82.56, 2, 82.56], 1, 0, 0, 0.6);
        a.y([-160.03965, -21.78965, -366.24965], [-0.9, -1.57, 0], [35.42, 2, 35.42], 1, 0, 0, 0.6);
        a.e([-421.59958, 40.61042, -673.58958]);
    },
    post: function() {
        cc.set_monkey("speed", default_speed * 5.0);
        cc.set_monkey("steer", default_steer * 1.1);
        cc.set_monkey("gravity", new BABYLON.Vector3(null, -18, null));
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -1.2598600000000033) {
                    light.groundColor = new BABYLON.Color3.FromHexString("#00ff00");
                    scene.clearColor = new BABYLON.Color3.FromHexString("#87ceeb");
                    light.diffuse = new BABYLON.Color3.FromHexString("#00ff00");
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -599.73986) {
                    light.groundColor = cc.get("light.groundColor", null);
                    scene.clearColor = cc.get("scene.clearColor", null);
                    light.diffuse = cc.get("light.diffuse", null);
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -599.82993) {
                    light.groundColor = new BABYLON.Color3.FromHexString("#00ff00");
                    scene.clearColor = new BABYLON.Color3.FromHexString("#87ceeb");
                    light.diffuse = new BABYLON.Color3.FromHexString("#00ff00");
                    speed = default_speed * 2.0;
                    this.section_id += 1
                }
                break;
            case 3:
                if (PZ < -685.9699300000001) {
                    light.groundColor = cc.get("light.groundColor", null);
                    scene.clearColor = cc.get("scene.clearColor", null);
                    light.diffuse = cc.get("light.diffuse", null);
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [0.00021, -1.05979, -48.429790000000004], [0, 0, 0], [3.4, 1.02, 102.06]);
        a.re('P1', [-6.4397199999999994, -1.39972, -145.20972], [0.14, 0, 0.28], [2.94, 1.08, 103.24]);
        a.re('P2', [-27.839650000000002, -1.53965, -243.31965], [0.3, 0, 0.28], [2.68, 1.06, 106.02]);
        a.re('P3', [-65.95958, -1.85958, -337.41958], [0.48, 0, 0.28], [2.84, 1.06, 114.6]);
        a.re('P4', [-146.59950999999998, -2.07951, -446.85951], [0.74, 0, 0.28], [3.42, 1.08, 167.5]);
        a.re('P5', [-245.69993, 4.11007, -523.8599300000001], [-0.37, -0.06, -0.15], [99.5, 1.4, 4.76]);
        a.re('P6', [-327.00986, 18.46014, -573.16986], [-0.7, -0.06, -0.15], [99.5, 1.4, 4.76]);
        a.re('P7', [-394.52979, 32.86021, -641.79979], [-0.87, -0.06, -0.15], [99.5, 1.4, 4.76]);
        a.re('Y0', [47.920280000000005, -26.929720000000003, -109.15972], [-1.57, -1.57, 0], [35.42, 2, 35.42]);
        a.re('Y1', [47.92035, -26.929650000000002, -166.75965], [-1.57, -1.57, 0], [82.56, 2, 82.56]);
        a.re('Y2', [43.140420000000006, -26.92958, -223.58957999999998], [-1.29, -1.57, 0], [35.42, 2, 35.42]);
        a.re('Y3', [-78.52951, -19.94951, -208.34951], [-1.29, -1.57, 0], [35.42, 2, 35.42]);
        a.re('Y4', [-72.77, -19.95, -150.69], [-1.57, -1.57, 0], [82.56, 2, 82.56]);
        a.re('Y5', [-72.76993, -19.94993, -93.08993000000001], [-1.57, -1.57, 0], [35.42, 2, 35.42]);
        a.re('Y6', [-27.02986, -26.929859999999998, -388.21986], [-0.87, -1.57, 0], [35.42, 2, 35.42]);
        a.re('Y7', [0.10021000000000001, -26.929789999999997, -338.04979], [-1.16, -1.57, 0], [82.56, 2, 82.56]);
        a.re('Y8', [23.15028, -26.929720000000003, -285.26972], [-1.16, -1.57, 0], [35.42, 2, 35.42]);
        a.re('Y9', [-90.34965, -21.249650000000003, -239.12965], [-1.16, -1.57, 0], [35.42, 2, 35.42]);
        a.re('Y10', [-113.39958, -21.24958, -291.90958], [-1.16, -1.57, 0], [82.56, 2, 82.56]);
        a.re('Y11', [-140.52951, -21.24951, -342.07951], [-0.87, -1.57, 0], [35.42, 2, 35.42]);
        a.re('Y12', [-72.87, -21.79, -446.02], [-0.9, -1.57, 0], [35.42, 2, 35.42]);
        a.re('Y13', [-108.56993, -21.78993, -491.21993000000003], [-0.9, -1.57, 0], [82.56, 2, 82.56]);
        a.re('Y14', [-147.55986000000001, -21.789859999999997, -532.8498599999999], [-0.62, -1.57, 0], [35.42, 2, 35.42]);
        a.re('Y15', [-234.72978999999998, -21.789789999999996, -453.06979], [-0.62, -1.57, 0], [35.42, 2, 35.42]);
        a.re('Y16', [-195.74972000000002, -21.789720000000003, -411.43972], [-0.9, -1.57, 0], [82.56, 2, 82.56]);
        a.re('Y17', [-160.03965, -21.78965, -366.24965], [-0.9, -1.57, 0], [35.42, 2, 35.42]);
        a.re('E0', [-421.59958, 40.61042, -673.58958], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}