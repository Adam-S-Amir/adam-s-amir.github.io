var map = {
    title: "observatory",
    song: "env2",
    maker: "",
    spawn: [0, 0.5, 0],
    init: function() {
        a.e([-21.36, 1.4103, -797.6]);
        a.p([7.15, 27.99006, -711.3], [0, 0, 0], [2, 0.4, 6], 1.0, 10000.0, 0, 0.6);
        a.y([7.17, 27.69012, -711.18], [0, 0, 0], [2, 1.5, 2], 1.0, 10000.0, 0, 0.6);
        a.p([-40.74, 33.72018, -708.11], [0.35, 0, 0], [6, 0.8, 12], 1.0, 10000.0, 0, 2.0);
        a.p([26.98, 23.22024, -734.79], [-0.35, 0, 0], [5, 0.8, 12], 1.0, 10000.0, 0, 2.0);
        a.p([-30.5, 33.7203, -708], [-0.35, 0, 0], [6, 0.8, 12], 2.0, 0, 0, 2.0);
        a.p([-24.46, 33.65, -716.67], [-0.87, 0, 0], [4, 0.8, 12], 2.0, 0, 0, 2.0);
        a.p([-0.69, 27.44006, -711.38], [0, 0, 0], [28, 0.8, 10], 2.0, 0, 0, 2.0);
        a.p([22.32, 23.340120000000002, -721.77], [0, 0, 0], [10, 0.8, 16], 2.0, 0, 0, 2.0);
        a.p([-35.8, 33.83018, -689.43], [0, 0, 0], [14, 0.8, 28], 2.0, 0, 0, 2.0);
        a.p([18.24, 23.22024, -734.75], [0.35, 0, 0], [5, 0.8, 12], 3.0, 0, 0, 2.0);
        a.p([-9.79, 74.56006000000001, -135.21], [0, 0, 0], [8, 6, 20], 3.0, 0, 0, 0.6);
        a.p([-9.79, 67.15012, -155.79], [0, 0, 0], [10.32, 0.8, 20], 3.0, 0, 0, 0.6);
        a.p([-6.8, 74.56018, -605.76], [0, 0, 0], [8, 6, 20], 3.0, 0, 0, 0.6);
        a.p([-6.8, 67.15024, -626.17], [0, 0, 0], [10.32, 0.8, 20], 3.0, 0, 0, 0.6);
        a.p([-11.88, -29.999699999999997, -296.89], [0, 0, 0], [12, 40, 2], 3.0, 0, 0, 0.6);
        a.p([-29.83, -1.3197, -518.25], [-1.57, 0, 0], [10.38, 0.78, 28.9], 1, 0, 0, 0.6);
        a.p([22.94, 0.12, -511.33], [0, 0, 0], [10.38, 0.78, 30], 1, 0, 0, 0.6);
        a.p([-28.21, -3.09988, -549.77], [0, 0.26, 0], [10.38, 0.78, 28.9], 1, 0, 0, 0.6);
        a.p([-6.42, 54.73018, -668.99], [0, -0.35, 0], [6, 0.8, 14], 1.0, 10000.0, 0, 0.6);
        a.p([-9.9, 59.60024000000001, -655.76], [0, -0.35, 0], [6, 0.8, 14], 1.0, 10000.0, 0, 0.6);
        a.p([-23.1, 3.8202999999999996, -354.83], [-0.35, 0.7, 0], [4, 4, 14], 1.0, 0, 0, 2.0);
        a.p([-16.42, 12.09, -363.54], [-0.87, 0.7, 0], [4, 4, 14], 1.0, 0, 0, 2.0);
        a.p([4.4, 29.320059999999998, -369.16], [-1.75, 0.7, 0], [4, 4, 14], 1.0, 0, 0, 2.0);
        a.p([-6.69, 20.85012, -368.73], [-1.22, 0.7, 0], [4, 4, 14], 1.0, 0, 0, 2.0);
        a.p([16.2, 36.17018, -362.44], [-2.27, 0.35, 0], [4, 4, 18], 1.0, 0, 0, 2.0);
        a.p([0.57, 38.06024, -324.59], [1.57, 0.61, 0], [4, 4, 14], 1.0, 0, 0, 2.0);
        a.p([-11.49, 46.2603, -329.06], [1.05, 0.61, 0], [4, 4, 18], 1.0, 0, 0, 2.0);
        a.p([-11.68, 30.42, -242.28], [0, 0, 0], [10, 8, 2], 1.0, 0, 0, 0.6);
        a.p([-11.68, 29.22006, -269.55], [0, 0, 0], [10, 5.22, 2], 1.0, 0, 0, 0.6);
        a.p([-10.86, 34.670120000000004, -269.61], [0, 0, 0], [6.92, 6, 2], 1.0, 0, 0, 0.6);
        a.p([-15.99, 30.11018, -274.27], [0, 0, 0], [3, 3, 10], 1.0, 0, 0, 0.6);
        a.p([-10.49, 30.65024, -223.29], [0, 0, 0], [6.46, 8, 2], 1.0, 0, 0, 0.6);
        a.p([-12.88, 30.6503, -290.93], [0, 0, 0], [6.46, 8, 2], 1.0, 0, 0, 0.6);
        a.p([-7.09, 32.62, -248.23], [0, 0, 0], [3, 3, 10], 1.0, 0, 0, 0.6);
        a.y([0, 0.10006, -347.39], [0, 0, 0], [60, 2, 60], 1.0, 0, 0, 0.6);
        a.p([-0.91, -0.27988, -473.87], [-0.52, 0, 0], [6, 2, 14], 1.0, 0, 0, 0.6);
        a.p([-11.63, 0.00018, -313], [0, 0, 0], [12, 2, 20], 1.0, 0, 0, 0.6);
        a.p([-9.71, 47.680240000000005, -350.08], [-0.87, 0, 0], [3, 2, 8], 1.0, 0, 0, 0.6);
        a.p([-4.24, 47.680299999999995, -355.33], [-0.7, 0, 0], [3, 2, 8], 1.0, 0, 0, 0.6);
        a.p([-1.36, 47.68, -361.78], [-0.17, 0, 0], [3, 2, 8], 1.0, 0, 0, 0.6);
        a.p([-0.64, 47.70006, -369.34], [0, 0, 0], [3, 2, 8], 1.0, 0, 0, 0.6);
        a.p([-2.32, 47.650119999999994, -375.84], [0.52, 0, 0], [3, 2, 8], 1.0, 0, 0, 0.6);
        a.p([-5.05, 47.60018, -382.67], [0.26, 0, 0], [3, 2, 8], 1.0, 0, 0, 0.6);
        a.p([-5.99, 47.55024, -389.94], [0, 0, 0], [3, 2, 8], 1.0, 0, 0, 0.6);
        a.p([-14.31, 47.680299999999995, -344.68], [-0.52, 0, 0], [3, 2, 8], 1.0, 0, 0, 0.6);
        a.p([7.65, -0.33, -483.71], [-0.87, 0, 0], [4, 2, 14], 1.0, 0, 0, 0.6);
        a.p([-5.28, -0.22994, -459.63], [0, 0, 0], [12, 2, 20], 1.0, 0, 0, 0.6);
        a.p([-6.83, -0.22988, -572.17], [0, 0, 0], [6, 2, 16], 1.0, 0, 0, 0.6);
        a.p([17.1, -0.37982, -493.01], [-0.7, 0, 0], [3.4, 2, 14], 1.0, 0, 0, 0.6);
        a.p([-11.63, 26.180239999999998, -257.63], [0, 0, 0], [12, 2, 9.12], 2.0, 1.3, 0, 0.6);
        a.y([25.55, 37.6503, -343.44], [0, 0.7, -0.52], [4, 14, 4], 2.0, 10000.0, 0, 0.6);
        a.y([16.66, 38.46, -321.8], [-0.35, 0.7, -0.52], [4, 14, 4], 2.0, 10000.0, 0, 0.6);
        a.p([-17.84, 53.92006000000001, -333.91], [-0.52, 0, -1.57], [8, 2, 6], 2.0, 10000.0, 0, 0.6);
        a.p([1.77, 4.84012, -323.04], [0, 0, -1.57], [12, 2, 10], 2.0, 10000.0, 0, 0.6);
        a.p([-20.84, 3.8201799999999997, -334.59], [0.52, 0.7, 0], [4, 4, 14], 2.0, 10000.0, 0, 0.6);
        a.p([1.76, 28.360239999999997, -422.63], [0, 0, 0.79], [12, 2, 20], 2.0, 0, 0, 0.0);
        a.p([1.76, 7.1303, -445.97], [0, 0, 0.79], [12, 2, 20], 2.0, 0, 0, 0.0);
        a.p([-6.55, 64.75, -642.56], [0, -0.35, 0], [6, 0.8, 14], 2.0, 0, 0, 0.0);
        a.p([-4.08, 39.97006, -402.44], [0, 0, -0.79], [12, 2, 20], 2.0, 0, 0, 0.0);
        a.p([-0.41, 54.73012, -668.99], [0, -0.35, 0], [6, 0.8, 14], 2.0, 0, 0, 0.0);
        a.p([-3.88, 59.60018, -655.76], [0, -0.35, 0], [6, 0.8, 14], 2.0, 0, 0, 0.0);
        a.p([-4.08, 17.71024, -432.43], [0, 0, -0.79], [12, 2, 20], 2.0, 0, 0, 0.0);
        a.s([0, -18.3497, -21.69], 40, 2.0, 0, 0, 2.0);
        a.p([-16.7, 31.57, -257.39], [0, 0, -1.57], [13, 2, 80], 2.0, 0, 0, 0.6);
        a.p([-11.63, 26.090059999999998, -257.5], [0, 0, 0], [12, 2, 80], 2.0, 0, 0, 0.6);
        a.p([-12.05, 29.63012, -236.11], [-0.35, 0.61, 0], [3, 3, 14], 2.0, 0, 0, 0.6);
        a.y([23.98, 38.46018, -331.16], [-0.17, 0.7, -0.52], [4, 14, 4], 2.0, 10000.0, 0, 0.6);
        a.p([-11.04, 49.820240000000005, -681.96], [-0.52, 0.7, 0], [28, 0.8, 30], 3.0, 0, 0, 0.0);
        a.p([20.26, 25.4703, -709.77], [0, -0.52, 0], [14, 0.8, 8], 3.0, 0, 0, 0.0);
        a.p([-13.89, 30.6, -719.48], [0, 0.7, 0], [14, 0.8, 8], 3.0, 0, 0, 0.0);
        a.p([-11.04, 49.820060000000005, -681.96], [-0.52, 0.7, 0], [28, 0.8, 30], 3.0, 0, 0, 0.0);
        a.p([-15.57, 3.14012, -771.09], [0.52, -0.35, 0], [5, 5, 26], 3.0, 0, 0, 2.0);
        a.p([-2.03, 10.960180000000001, -756.77], [1.05, -0.35, 0], [5, 5, 20], 3.0, 0, 0, 2.0);
        a.p([11.38, 17.82024, -745.43], [0.7, -0.35, 0], [5, 5, 20], 3.0, 0, 0, 2.0);
        a.p([-9.82, -2.8497000000000003, -102.25], [0, 0, 0], [6, 0.6, 12], 3.0, 0, 0, 0.6);
        a.p([-5.2, 60.4, -171.77], [-0.52, -0.52, 0], [4, 4, 20], 3.0, 0, 0, 0.6);
        a.p([-0.43, 49.95006, -186.45], [0, -0.52, 0], [4, 4, 20], 3.0, 0, 0, 0.6);
        a.p([-5.53, 38.20012, -204.37], [0.52, -0.52, 0], [4, 4, 26], 3.0, 0, 0, 0.6);
        a.p([-14.78, -2.8498200000000002, -90.3], [0, 0, 0], [6, 0.6, 12], 3.0, 0, 0, 0.6);
        a.y([9.86, 34.78024, -340.41], [0, 0, 0], [40, 2, 40], 1.0, 0, 0, 0.6);
        a.y([0, 0.0003, -347.39], [0, 0, 0], [40, 100, 40], 3.0, 0, 0, 0.6);
        a.p([-18.27, -2.85, -74.36], [0, 0, 0], [5, 0.6, 20], 3.0, 0, 0, 0.6);
        a.p([-6.59, 31.570300000000003, -257.39], [0, 0, -1.57], [13, 2, 80], 2.0, 0, 0, 0.6);
        a.c([-11.6, 27.650000000000002, -295.58], true);
        a.c([-11.6, 27.65006, -268.35], true);
        a.c([-11.6, 27.650120000000005, -241.13], true);
        a.y([-0.04, -3.8298200000000002, -520.12], [0, 0, -1.57], [6, 30, 6], 3.0, 0, 0, 0.6);
        a.p([0, -0.23976, -2.36], [0, 0, 0], [3, 0.6, 12], 1, 0, 0, 0.6);
        a.p([-11.63, 37.210300000000004, -257.46], [0, 0, 0], [12, 2, 80], 3.0, 0, 0, 0.6);
        a.p([-13.18, -9.91, -34.77], [0.52, 0, 0], [5, 0.6, 18], 1, 0, 0, 0.6);
        a.p([-18.31, -9.89994, -55.14], [0, 0, 0], [5, 0.6, 20], 1, 0, 0, 0.6);
        a.p([-17.78, -9.899880000000001, -43.1], [0.35, 0, 0], [5, 0.6, 2], 1, 0, 0, 0.6);
        a.p([-18.15, -9.89982, -44.59], [0.17, 0, 0], [5, 0.6, 2], 1, 0, 0, 0.6);
        a.p([-21.99, 0.00024, -790.33], [0, 0, 0], [10.32, 0.8, 20], 1, 0, 0, 0.6);
    },
    post: function() {
        a.m('P0').unfreezeWorldMatrix();
        a.m('P9').unfreezeWorldMatrix();
        a.m('P10').unfreezeWorldMatrix();
        a.m('P11').unfreezeWorldMatrix();
        a.m('P12').unfreezeWorldMatrix();
        a.m('P13').unfreezeWorldMatrix();
        a.m('P14').unfreezeWorldMatrix();
        a.m('P15').unfreezeWorldMatrix();
        a.m('P16').unfreezeWorldMatrix();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -2.5700000000000003) {
                    steer = default_steer * 1.5;
                    speed = default_speed * 1.1;
                    a.msg_set("Turn right");
                    a.t(0, 1, -1.0);
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -41.15) {
                    steer = default_steer;
                    speed = default_speed;
                    a.msg_del();
                    a.t(0, 1, 0);
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -41.54) {
                    this.section_id += 1
                }
                break;
            case 3:
                if (PZ < -45.6) {
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -65.8) {
                    a.g(0, -1.0, 0);
                    this.section_id += 1
                }
                break;
            case 5:
                if (PZ < -108.04) {
                    a.g(0, 1, 0);
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -108.64) {
                    speed = default_speed * 1.1;
                    steer = default_steer * 1.1;
                    a.msg_set("Up we go");
                    a.g(0, -1.0, 0);
                    this.section_id += 1
                }
                break;
            case 7:
                if (PZ < -144.46) {
                    speed = default_speed;
                    steer = default_steer;
                    a.msg_del();
                    a.g(0, 1, 0);
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -166.23) {
                    speed = default_speed * 1.1;
                    steer = default_steer * 1.3;
                    a.msg_set("Into the tunnel");
                    a.g(0, 0.7, 0);
                    this.section_id += 1
                }
                break;
            case 9:
                if (PZ < -224.65) {
                    speed = default_speed;
                    steer = default_steer;
                    a.msg_del();
                    a.g(0, 1, 0);
                    this.section_id += 1
                }
                break;
            case 10:
                if (PZ < -225.38) {
                    speed = default_speed * 1.1;
                    steer = default_steer * 1.1;
                    a.msg_set("Get out quickly!");
                    this.section_id += 1
                }
                break;
            case 11:
                a.mov('P13', 'y', 0.5);
                if (PZ < -293.15999999999997) {
                    speed = default_speed;
                    steer = default_steer;
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 12:
                if (PZ < -293.44) {
                    a.msg_set("Do not touch purple blocks");
                    this.section_id += 1
                }
                break;
            case 13:
                if (PZ < -300.11999999999995) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 14:
                if (PZ < -300.27000000000004) {
                    speed = default_speed * 1.1;
                    steer = default_steer * 1.1;
                    a.msg_set("Do not touch purple blocks");
                    this.section_id += 1
                }
                break;
            case 15:
                if (PZ < -390.17) {
                    speed = default_speed;
                    steer = default_steer;
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 16:
                if (PZ < -390.59999999999997) {
                    speed = default_speed * 1.5;
                    steer = default_steer * 1.1;
                    a.msg_set("Enjoy the slide");
                    this.section_id += 1
                }
                break;
            case 17:
                if (PZ < -464.94) {
                    speed = default_speed;
                    steer = default_steer;
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 18:
                if (PZ < -472.32) {
                    a.msg_set("Hmm looks familiar");
                    this.section_id += 1
                }
                break;
            case 19:
                if (PZ < -501.02000000000004) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 20:
                if (PZ < -501.71000000000004) {
                    a.msg_set("Hmm looks familiar");
                    this.section_id += 1
                }
                break;
            case 21:
                a.rot('P14', 'y', 0.85);
                a.rot('P15', 'y', 1.0);
                if (PZ < -530.6700000000001) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 22:
                if (PZ < -530.9599999999999) {
                    a.msg_set("Hmm looks familiar");
                    this.section_id += 1
                }
                break;
            case 23:
                a.mov('P16', 'x', 0.5);
                if (PZ < -569.88) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 24:
                if (PZ < -579.19) {
                    speed = default_speed * 1.1;
                    steer = default_steer * 1.1;
                    a.msg_set("Up we go again!");
                    a.g(0, -1.0, 0);
                    this.section_id += 1
                }
                break;
            case 25:
                a.rot('P0', 'y', 3.0);
                if (PZ < -615.01) {
                    speed = default_speed;
                    steer = default_steer;
                    a.msg_del();
                    a.g(0, 1, 0);
                    this.section_id += 1
                }
                break;
            case 26:
                if (PZ < -615.24) {
                    a.msg_set("Avoid pink blocks this time");
                    this.section_id += 1
                }
                break;
            case 27:
                a.rot('P0', 'y', 3.0);
                if (PZ < -619.8) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 28:
                if (PZ < -619.9399999999999) {
                    speed = default_speed * 1.5;
                    a.msg_set("Avoid pink blocks this time");
                    this.section_id += 1
                }
                break;
            case 29:
                a.rot('P0', 'y', 3.0);
                if (PZ < -697.12) {
                    speed = default_speed;
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 30:
                if (PZ < -697.6800000000001) {
                    a.msg_set("Avoid the pink blocks this time");
                    this.section_id += 1
                }
                break;
            case 31:
                a.rot('P0', 'y', 3.0);
                if (PZ < -736.48) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 32:
                if (PZ < -736.79) {
                    speed = default_speed * 1.1;
                    steer = default_steer * 1.1;
                    a.msg_set("Almost there!");
                    this.section_id += 1
                }
                break;
            case 33:
                if (PZ < -780.4300000000001) {
                    speed = default_speed;
                    steer = default_steer;
                    a.msg_del();
                    this.section_id += 1
                }
                break;
            case 34:
                if (PZ < -783.26) {
                    a.msg_set("Congrats you did it!");
                    this.section_id += 1
                }
                break;
            case 35:
                if (PZ < -800.0799999999999) {
                    a.msg_del();
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [7.15, 27.99006, -711.3], [0, 0, 0], [2, 0.4, 6]);
        a.re('Y0', [7.17, 27.69012, -711.18], [0, 0, 0], [2, 1.5, 2]);
        a.re('P1', [-40.74, 33.72018, -708.11], [0.35, 0, 0], [6, 0.8, 12]);
        a.re('P2', [26.98, 23.22024, -734.79], [-0.35, 0, 0], [5, 0.8, 12]);
        a.re('P3', [-30.5, 33.7203, -708], [-0.35, 0, 0], [6, 0.8, 12]);
        a.re('P4', [-24.46, 33.65, -716.67], [-0.87, 0, 0], [4, 0.8, 12]);
        a.re('P5', [-0.69, 27.44006, -711.38], [0, 0, 0], [28, 0.8, 10]);
        a.re('P6', [22.32, 23.340120000000002, -721.77], [0, 0, 0], [10, 0.8, 16]);
        a.re('P7', [-35.8, 33.83018, -689.43], [0, 0, 0], [14, 0.8, 28]);
        a.re('P8', [18.24, 23.22024, -734.75], [0.35, 0, 0], [5, 0.8, 12]);
        a.re('P9', [-9.79, 74.56006000000001, -135.21], [0, 0, 0], [8, 6, 20]);
        a.re('P10', [-9.79, 67.15012, -155.79], [0, 0, 0], [10.32, 0.8, 20]);
        a.re('P11', [-6.8, 74.56018, -605.76], [0, 0, 0], [8, 6, 20]);
        a.re('P12', [-6.8, 67.15024, -626.17], [0, 0, 0], [10.32, 0.8, 20]);
        a.re('P13', [-11.88, -29.999699999999997, -296.89], [0, 0, 0], [12, 40, 2]);
        a.re('P14', [-29.83, -1.3197, -518.25], [-1.57, 0, 0], [10.38, 0.78, 28.9]);
        a.re('P15', [22.94, 0.12, -511.33], [0, 0, 0], [10.38, 0.78, 30]);
        a.re('P16', [-28.21, -3.09988, -549.77], [0, 0.26, 0], [10.38, 0.78, 28.9]);
        a.re('P17', [-6.42, 54.73018, -668.99], [0, -0.35, 0], [6, 0.8, 14]);
        a.re('P18', [-9.9, 59.60024000000001, -655.76], [0, -0.35, 0], [6, 0.8, 14]);
        a.re('P19', [-23.1, 3.8202999999999996, -354.83], [-0.35, 0.7, 0], [4, 4, 14]);
        a.re('P20', [-16.42, 12.09, -363.54], [-0.87, 0.7, 0], [4, 4, 14]);
        a.re('P21', [4.4, 29.320059999999998, -369.16], [-1.75, 0.7, 0], [4, 4, 14]);
        a.re('P22', [-6.69, 20.85012, -368.73], [-1.22, 0.7, 0], [4, 4, 14]);
        a.re('P23', [16.2, 36.17018, -362.44], [-2.27, 0.35, 0], [4, 4, 18]);
        a.re('P24', [0.57, 38.06024, -324.59], [1.57, 0.61, 0], [4, 4, 14]);
        a.re('P25', [-11.49, 46.2603, -329.06], [1.05, 0.61, 0], [4, 4, 18]);
        a.re('P26', [-11.68, 30.42, -242.28], [0, 0, 0], [10, 8, 2]);
        a.re('P27', [-11.68, 29.22006, -269.55], [0, 0, 0], [10, 5.22, 2]);
        a.re('P28', [-10.86, 34.670120000000004, -269.61], [0, 0, 0], [6.92, 6, 2]);
        a.re('P29', [-15.99, 30.11018, -274.27], [0, 0, 0], [3, 3, 10]);
        a.re('P30', [-10.49, 30.65024, -223.29], [0, 0, 0], [6.46, 8, 2]);
        a.re('P31', [-12.88, 30.6503, -290.93], [0, 0, 0], [6.46, 8, 2]);
        a.re('P32', [-7.09, 32.62, -248.23], [0, 0, 0], [3, 3, 10]);
        a.re('Y1', [0, 0.10006, -347.39], [0, 0, 0], [60, 2, 60]);
        a.re('P33', [-0.91, -0.27988, -473.87], [-0.52, 0, 0], [6, 2, 14]);
        a.re('P34', [-11.63, 0.00018, -313], [0, 0, 0], [12, 2, 20]);
        a.re('P35', [-9.71, 47.680240000000005, -350.08], [-0.87, 0, 0], [3, 2, 8]);
        a.re('P36', [-4.24, 47.680299999999995, -355.33], [-0.7, 0, 0], [3, 2, 8]);
        a.re('P37', [-1.36, 47.68, -361.78], [-0.17, 0, 0], [3, 2, 8]);
        a.re('P38', [-0.64, 47.70006, -369.34], [0, 0, 0], [3, 2, 8]);
        a.re('P39', [-2.32, 47.650119999999994, -375.84], [0.52, 0, 0], [3, 2, 8]);
        a.re('P40', [-5.05, 47.60018, -382.67], [0.26, 0, 0], [3, 2, 8]);
        a.re('P41', [-5.99, 47.55024, -389.94], [0, 0, 0], [3, 2, 8]);
        a.re('P42', [-14.31, 47.680299999999995, -344.68], [-0.52, 0, 0], [3, 2, 8]);
        a.re('P43', [7.65, -0.33, -483.71], [-0.87, 0, 0], [4, 2, 14]);
        a.re('P44', [-5.28, -0.22994, -459.63], [0, 0, 0], [12, 2, 20]);
        a.re('P45', [-6.83, -0.22988, -572.17], [0, 0, 0], [6, 2, 16]);
        a.re('P46', [17.1, -0.37982, -493.01], [-0.7, 0, 0], [3.4, 2, 14]);
        a.re('P47', [-11.63, 26.180239999999998, -257.63], [0, 0, 0], [12, 2, 9.12]);
        a.re('Y2', [25.55, 37.6503, -343.44], [0, 0.7, -0.52], [4, 14, 4]);
        a.re('Y3', [16.66, 38.46, -321.8], [-0.35, 0.7, -0.52], [4, 14, 4]);
        a.re('P48', [-17.84, 53.92006000000001, -333.91], [-0.52, 0, -1.57], [8, 2, 6]);
        a.re('P49', [1.77, 4.84012, -323.04], [0, 0, -1.57], [12, 2, 10]);
        a.re('P50', [-20.84, 3.8201799999999997, -334.59], [0.52, 0.7, 0], [4, 4, 14]);
        a.re('P51', [1.76, 28.360239999999997, -422.63], [0, 0, 0.79], [12, 2, 20]);
        a.re('P52', [1.76, 7.1303, -445.97], [0, 0, 0.79], [12, 2, 20]);
        a.re('P53', [-6.55, 64.75, -642.56], [0, -0.35, 0], [6, 0.8, 14]);
        a.re('P54', [-4.08, 39.97006, -402.44], [0, 0, -0.79], [12, 2, 20]);
        a.re('P55', [-0.41, 54.73012, -668.99], [0, -0.35, 0], [6, 0.8, 14]);
        a.re('P56', [-3.88, 59.60018, -655.76], [0, -0.35, 0], [6, 0.8, 14]);
        a.re('P57', [-4.08, 17.71024, -432.43], [0, 0, -0.79], [12, 2, 20]);
        a.re('S0', [0, -18.3497, -21.69], [0, 0, 0], [40, 40, 40]);
        a.re('P58', [-16.7, 31.57, -257.39], [0, 0, -1.57], [13, 2, 80]);
        a.re('P59', [-11.63, 26.090059999999998, -257.5], [0, 0, 0], [12, 2, 80]);
        a.re('P60', [-12.05, 29.63012, -236.11], [-0.35, 0.61, 0], [3, 3, 14]);
        a.re('Y4', [23.98, 38.46018, -331.16], [-0.17, 0.7, -0.52], [4, 14, 4]);
        a.re('P61', [-11.04, 49.820240000000005, -681.96], [-0.52, 0.7, 0], [28, 0.8, 30]);
        a.re('P62', [20.26, 25.4703, -709.77], [0, -0.52, 0], [14, 0.8, 8]);
        a.re('P63', [-13.89, 30.6, -719.48], [0, 0.7, 0], [14, 0.8, 8]);
        a.re('P64', [-11.04, 49.820060000000005, -681.96], [-0.52, 0.7, 0], [28, 0.8, 30]);
        a.re('P65', [-15.57, 3.14012, -771.09], [0.52, -0.35, 0], [5, 5, 26]);
        a.re('P66', [-2.03, 10.960180000000001, -756.77], [1.05, -0.35, 0], [5, 5, 20]);
        a.re('P67', [11.38, 17.82024, -745.43], [0.7, -0.35, 0], [5, 5, 20]);
        a.re('P68', [-9.82, -2.8497000000000003, -102.25], [0, 0, 0], [6, 0.6, 12]);
        a.re('P69', [-5.2, 60.4, -171.77], [-0.52, -0.52, 0], [4, 4, 20]);
        a.re('P70', [-0.43, 49.95006, -186.45], [0, -0.52, 0], [4, 4, 20]);
        a.re('P71', [-5.53, 38.20012, -204.37], [0.52, -0.52, 0], [4, 4, 26]);
        a.re('P72', [-14.78, -2.8498200000000002, -90.3], [0, 0, 0], [6, 0.6, 12]);
        a.re('Y5', [9.86, 34.78024, -340.41], [0, 0, 0], [40, 2, 40]);
        a.re('Y6', [0, 0.0003, -347.39], [0, 0, 0], [40, 100, 40]);
        a.re('P73', [-18.27, -2.85, -74.36], [0, 0, 0], [5, 0.6, 20]);
        a.re('P74', [-6.59, 31.570300000000003, -257.39], [0, 0, -1.57], [13, 2, 80]);
        a.re('C0', [-11.6, 27.650000000000002, -295.58], [0, 0, 0], [2, 2, 2]);
        a.re('C1', [-11.6, 27.65006, -268.35], [0, 0, 0], [2, 2, 2]);
        a.re('C2', [-11.6, 27.650120000000005, -241.13], [0, 0, 0], [2, 2, 2]);
        a.re('Y7', [-0.04, -3.8298200000000002, -520.12], [0, 0, -1.57], [6, 30, 6]);
        a.re('P75', [0, -0.23976, -2.36], [0, 0, 0], [3, 0.6, 12]);
        a.re('P76', [-11.63, 37.210300000000004, -257.46], [0, 0, 0], [12, 2, 80]);
        a.re('P77', [-13.18, -9.91, -34.77], [0.52, 0, 0], [5, 0.6, 18]);
        a.re('P78', [-18.31, -9.89994, -55.14], [0, 0, 0], [5, 0.6, 20]);
        a.re('P79', [-17.78, -9.899880000000001, -43.1], [0.35, 0, 0], [5, 0.6, 2]);
        a.re('P80', [-18.15, -9.89982, -44.59], [0.17, 0, 0], [5, 0.6, 2]);
        a.re('P81', [-21.99, 0.00024, -790.33], [0, 0, 0], [10.32, 0.8, 20]);
    },
    physics_update: function() {},
    render_update: function() {}
}