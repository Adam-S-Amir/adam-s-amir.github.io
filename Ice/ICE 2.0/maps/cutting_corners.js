var map = {
    title: "Cutting Corners",
    song: "env2",
    maker: "",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([3.7, 1.92007, -11.51], [0, 0, 1.58], [4.42, 3.12, 28.98], 2.0, 0, 0, 0.6, false);
        a.p([-3.71, 1.9201400000000002, -9.23], [0, 0, 1.58], [4.42, 3.1, 24.54], 2.0, 0, 0, 0.6, false);
        a.p([-10.04, 1.92021, -27.03], [1.6, 0, 1.58], [4.42, 2.92, 26.92], 2.0, 0, 0, 0.6, false);
        a.p([-10.24, 1.92028, -19.47], [1.6, 0, 1.58], [4.42, 3.86, 14.38], 2.0, 0, 0, 0.6, false);
        a.p([-19.61, 0.00035000000000000005, -6.49], [0, 0, 0], [4.42, 0.98, 28.98], 2.0, 0, 0, 0.6, false);
        a.p([-23.92, 1.92, -11.51], [0, 0, 1.58], [4.44, 4.48, 28.98], 2.0, 0, 0, 0.6, false);
        a.p([-15.79, 1.92007, -5.71], [0, 0, 1.58], [4.42, 3.66, 28.98], 2.0, 0, 0, 0.6, false);
        a.p([-31.85, -0.01986, 5.44], [1.59, 0, 0], [4.42, 0.98, 20.24], 2.0, 0, 0, 0.6, false);
        a.p([-30.97, 1.92021, 9.35], [1.6, 0, 1.58], [4.42, 3.24, 26.94], 2.0, 0, 0, 0.6, false);
        a.p([-29.8, 1.92028, 1.17], [1.6, 0, 1.58], [4.42, 3.72, 14.38], 2.0, 0, 0, 0.6, false);
        a.p([-39.42, 0.00035000000000000005, -11.09], [0, 0, 0], [4.42, 0.98, 28.98], 2.0, 0, 0, 0.6, false);
        a.p([-35.31, 1.92, -12.04], [0, 0, 1.58], [4.66, 4.46, 30.48], 2.0, 0, 0, 0.6, false);
        a.p([-43.72, 1.92007, -9.71], [0, 0, 1.58], [4.42, 4.04, 35.4], 2.0, 0, 0, 0.6, false);
        a.p([-39.08, 0.00014000000000000001, -40.35], [0, 0, 0], [26.82, 1.08, 29.04], 2.0, 0, 0, 0.6, false);
        a.p([-30.48, 1.92021, -25.59], [1.6, 0, 1.58], [4.44, 4, 12.64], 2.0, 0, 0, 0.6, false);
        a.p([-23.64, 1.83028, -40.14], [0, 0, 1.58], [4.42, 4.16, 28.98], 2.0, 0, 0, 0.6, false);
        a.p([-48.78, 1.92035, -25.59], [1.6, 0, 1.58], [4.44, 3.56, 12.62], 2.0, 0, 0, 0.6, false);
        a.p([-54.43, 1.83, -40.14], [0, 0, 1.58], [4.76, 4.26, 31.14], 2.0, 0, 0, 0.6, false);
        a.c([2.13, 0.8701399999999999, -24.85], true);
        a.c([1.05, 0.8702099999999999, -24.85], true);
        a.c([0.36, 0.8702799999999999, -24.85], true);
        a.c([-0.65, 0.87035, -24.85], true);
        a.c([-1.34, 0.87, -24.85], true);
        a.c([-0.14, 0.87007, -24.85], true);
        a.c([1.6, 0.8701399999999999, -24.85], true);
        a.c([-2.5, 0.8702099999999999, -21.89], true);
        a.c([-1.94, 0.8702799999999999, -21.89], true);
        a.c([-1.94, 0.87035, -21.31], true);
        a.c([-1.92, 0.87, -24.85], true);
        a.c([-2.55, 0.87007, -24.85], true);
        a.c([-17.96, 0.8701399999999999, -20.76], true);
        a.c([-17.96, 0.8702099999999999, -20.21], true);
        a.c([-19.21, 0.8702799999999999, -25.06], true);
        a.c([-20.14, 0.87035, -25.06], true);
        a.c([-21.25, 0.87, -25.06], true);
        a.c([-18.33, 0.87007, -25.06], true);
        a.c([-17.34, 0.8701399999999999, -25.06], true);
        a.c([-16.32, 0.8702099999999999, -25.06], true);
        a.c([-17.96, 1.02028, -21.53], true);
        a.c([-17.29, 1.0203499999999999, -21.53], true);
        a.c([-16.79, 1.02, -21.53], true);
        a.c([-41.31, 1.02007, -26.68], true);
        a.c([-41.04, 1.03014, -28.02], true);
        a.c([-40.75, 1.0302099999999998, -28.94], true);
        a.c([-39.92, 1.0302799999999999, -29.66], true);
        a.c([-38.87, 1.0303499999999999, -30.43], true);
        a.c([-37.9, 1.03, -31.09], true);
        a.c([-25.93, 1.0300699999999998, -36.45], true);
        a.c([-25.93, 1.03014, -37.46], true);
        a.c([-25.93, 1.0302099999999998, -38.37], true);
        a.c([-25.93, 1.0302799999999999, -39.16], true);
        a.c([-25.93, 1.0303499999999999, -40.1], true);
        a.c([-25.93, 1.03, -37.13], true);
        a.c([-25.93, 1.0300699999999998, -40.91], true);
        a.c([-25.93, 1.03014, -41.77], true);
        a.c([-37.13, 1.0302099999999998, -31.58], true);
        a.c([-36.22, 1.0302799999999999, -32.13], true);
        a.c([-35.29, 1.0303499999999999, -32.46], true);
        a.c([-34.28, 1.03, -32.8], true);
        a.c([-33.51, 1.0300699999999998, -32.98], true);
        a.c([-21.25, 0.8701399999999999, -24.25], true);
        a.c([-21.25, 0.8702099999999999, -23.58], true);
        a.c([-21.25, 0.8702799999999999, -22.93], true);
        a.c([-21.25, 0.87035, -22.36], true);
        a.c([-21.25, 0.87, -21.79], true);
        a.c([-21.25, 0.87007, -21.21], true);
        a.c([-17.69, 0.8701399999999999, -4.21], true);
        a.c([-18.58, 0.8702099999999999, -4.21], true);
        a.c([-21.55, 0.8702799999999999, -4.21], true);
        a.c([-20.78, 0.87035, -4.21], true);
        a.c([-19.81, 0.87, -10.33], true);
        a.c([-9.69, 0.87007, -23.67], true);
        a.c([-26.71, 0.96014, 4.41], true);
        a.c([-17.69, 0.8702099999999999, 3.09], true);
        a.c([-26.77, 0.98028, 3.77], true);
        a.c([-26.77, 0.9803499999999999, 4.67], true);
        a.c([-26.77, 0.98, 2.91], true);
        a.c([-31.13, 0.98007, 5.55], true);
        a.c([-17.69, 0.8501399999999999, 3.75], true);
        a.c([-31.13, 0.98021, 4.65], true);
        a.c([-17.69, 1.0302799999999999, 4.43], true);
        a.c([-17.69, 1.0303499999999999, 5.1], true);
        a.c([-17.69, 1.03, 5.87], true);
        a.c([-17.69, 1.0300699999999998, 6.5], true);
        a.c([-17.69, 1.03014, 7.29], true);
        a.c([-18.81, 1.0302099999999998, 7.29], true);
        a.c([-19.63, 0.98028, 7.29], true);
        a.c([-20.66, 0.9803499999999999, 7.29], true);
        a.c([-21.27, 0.98, 7.29], true);
        a.c([-31.13, 0.98007, 6.31], true);
        a.c([-39.06, 0.98014, 7.65], true);
        a.c([-39.88, 0.98021, 7.65], true);
        a.c([-40.66, 0.98028, 7.65], true);
        a.c([-41.33, 0.9803499999999999, 7.65], true);
        a.c([-41.33, 0.98, 6.99], true);
        a.c([-41.33, 0.98007, 6.3], true);
        a.c([-41.33, 0.98014, 5.52], true);
        a.c([-41.33, 0.98021, 4.81], true);
        a.c([-37.25, 0.98028, 3.02], true);
        a.c([-36.54, 0.9803499999999999, 3.19], true);
        a.c([-37.96, 0.98, 2.4], true);
        a.c([-37.61, 0.98007, -7.43], true);
        a.c([-38.28, 0.98014, -8.12], true);
        a.c([-38.83, 0.98021, -8.89], true);
        a.c([-39.23, 0.98028, -9.57], true);
        a.c([-39.95, 0.8403499999999999, -10.47], true);
        a.c([-39.95, 0.98, -11.49], true);
        a.c([-39.95, 0.98007, -12.48], true);
        a.c([-39.95, 0.98014, -13.4], true);
        a.c([-39.95, 0.98021, -14.31], true);
        a.c([-39.24, 0.96028, -14.83], true);
        a.c([-38.58, 0.9703499999999999, -14.83], true);
        a.c([-37.97, 0.95, -14.83], true);
        a.c([-37.54, 0.99007, -14.83], true);
        a.c([-42.12, 1.02014, -26.68], true);
        a.c([-41.78, 1.02021, -26.02], true);
        a.c([-41.78, 1.02028, -26.59], true);
        a.c([-41.04, 1.0303499999999999, -27.46], true);
        a.c([-21.21, 0.8899999999999999, -4.21], true);
        a.c([-18.14, 0.87007, -4.21], true);
        a.c([-31.13, 0.98014, 5.26], true);
        a.c([-31.13, 0.98021, 6.09], true);
        a.c([-36.95, 0.98028, 3.19], true);
        a.c([-37.91, 0.9803499999999999, 3.02], true);
        a.c([-38.09, 0.98, -7.43], true);
        a.c([-39.76, 0.84007, -9.78], true);
        a.c([-39.95, 0.98014, -11], true);
        a.c([-39.95, 0.98021, -12.13], true);
        a.c([-39.95, 0.98028, -13.08], true);
        a.c([-39.95, 0.9803499999999999, -13.99], true);
        a.c([-39.87, 0.98, -14.83], true);
        a.c([-38.95, 0.99007, -14.83], true);
        a.c([-41.04, 1.03014, -28.45], true);
        a.c([-40.39, 1.0302099999999998, -29.7], true);
        a.c([-39.47, 1.0302799999999999, -29.82], true);
        a.c([-38.37, 1.0303499999999999, -30.43], true);
        a.c([-37.41, 1.03, -31.09], true);
        a.c([-36.56, 1.0300699999999998, -31.58], true);
        a.c([-35.69, 1.03014, -32.13], true);
        a.c([-34.71, 1.0302099999999998, -32.46], true);
        a.c([-33.85, 1.0302799999999999, -32.8], true);
        a.c([-26.48, 1.0303499999999999, -36.45], true);
        a.c([-27.06, 1.03, -36.45], true);
        a.c([-27.54, 1.0300699999999998, -36.74], true);
        a.c([-27.85, 1.03014, -37.13], true);
        a.c([-28.32, 1.0302099999999998, -37.13], true);
        a.c([-28.65, 1.0302799999999999, -37.13], true);
        a.c([-29.01, 1.0303499999999999, -37.38], true);
        a.p([-12.32, 0, -23.39], [1.59, 0, 0], [4.42, 0.98, 20.24], 2.0, 0, 0, 0.6, false);
        a.p([0, 0.00007000000000000001, -11.51], [0, 0, 0], [4.42, 0.98, 28.98], 2.0, 0, 0, 0.6, false);
        a.p([-38.8, 1.83014, -57.19], [-1.53, -0.05, 1.53], [4.5, 4.96, 29.08], 2.0, 0, 0, 0.6, false);
        a.e([-48.23, 0.37021, -51.14]);
    },
    post: function() {
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -12.8) {
                    steer = default_steer * 2.5;
                    speed = default_speed * 1.1;
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -71.28) {
                    steer = cc.get("steer", null);
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [3.7, 1.92007, -11.51], [0, 0, 1.58], [4.42, 3.12, 28.98]);
        a.re('P1', [-3.71, 1.9201400000000002, -9.23], [0, 0, 1.58], [4.42, 3.1, 24.54]);
        a.re('P2', [-10.04, 1.92021, -27.03], [1.6, 0, 1.58], [4.42, 2.92, 26.92]);
        a.re('P3', [-10.24, 1.92028, -19.47], [1.6, 0, 1.58], [4.42, 3.86, 14.38]);
        a.re('P4', [-19.61, 0.00035000000000000005, -6.49], [0, 0, 0], [4.42, 0.98, 28.98]);
        a.re('P5', [-23.92, 1.92, -11.51], [0, 0, 1.58], [4.44, 4.48, 28.98]);
        a.re('P6', [-15.79, 1.92007, -5.71], [0, 0, 1.58], [4.42, 3.66, 28.98]);
        a.re('P7', [-31.85, -0.01986, 5.44], [1.59, 0, 0], [4.42, 0.98, 20.24]);
        a.re('P8', [-30.97, 1.92021, 9.35], [1.6, 0, 1.58], [4.42, 3.24, 26.94]);
        a.re('P9', [-29.8, 1.92028, 1.17], [1.6, 0, 1.58], [4.42, 3.72, 14.38]);
        a.re('P10', [-39.42, 0.00035000000000000005, -11.09], [0, 0, 0], [4.42, 0.98, 28.98]);
        a.re('P11', [-35.31, 1.92, -12.04], [0, 0, 1.58], [4.66, 4.46, 30.48]);
        a.re('P12', [-43.72, 1.92007, -9.71], [0, 0, 1.58], [4.42, 4.04, 35.4]);
        a.re('P13', [-39.08, 0.00014000000000000001, -40.35], [0, 0, 0], [26.82, 1.08, 29.04]);
        a.re('P14', [-30.48, 1.92021, -25.59], [1.6, 0, 1.58], [4.44, 4, 12.64]);
        a.re('P15', [-23.64, 1.83028, -40.14], [0, 0, 1.58], [4.42, 4.16, 28.98]);
        a.re('P16', [-48.78, 1.92035, -25.59], [1.6, 0, 1.58], [4.44, 3.56, 12.62]);
        a.re('P17', [-54.43, 1.83, -40.14], [0, 0, 1.58], [4.76, 4.26, 31.14]);
        a.re('C0', [2.13, 0.8701399999999999, -24.85], [0, 0, 0], [2, 2, 2]);
        a.re('C1', [1.05, 0.8702099999999999, -24.85], [0, 0, 0], [2, 2, 2]);
        a.re('C2', [0.36, 0.8702799999999999, -24.85], [0, 0, 0], [2, 2, 2]);
        a.re('C3', [-0.65, 0.87035, -24.85], [0, 0, 0], [2, 2, 2]);
        a.re('C4', [-1.34, 0.87, -24.85], [0, 0, 0], [2, 2, 2]);
        a.re('C5', [-0.14, 0.87007, -24.85], [0, 0, 0], [2, 2, 2]);
        a.re('C6', [1.6, 0.8701399999999999, -24.85], [0, 0, 0], [2, 2, 2]);
        a.re('C7', [-2.5, 0.8702099999999999, -21.89], [0, 0, 0], [2, 2, 2]);
        a.re('C8', [-1.94, 0.8702799999999999, -21.89], [0, 0, 0], [2, 2, 2]);
        a.re('C9', [-1.94, 0.87035, -21.31], [0, 0, 0], [2, 2, 2]);
        a.re('C10', [-1.92, 0.87, -24.85], [0, 0, 0], [2, 2, 2]);
        a.re('C11', [-2.55, 0.87007, -24.85], [0, 0, 0], [2, 2, 2]);
        a.re('C12', [-17.96, 0.8701399999999999, -20.76], [0, 0, 0], [2, 2, 2]);
        a.re('C13', [-17.96, 0.8702099999999999, -20.21], [0, 0, 0], [2, 2, 2]);
        a.re('C14', [-19.21, 0.8702799999999999, -25.06], [0, 0, 0], [2, 2, 2]);
        a.re('C15', [-20.14, 0.87035, -25.06], [0, 0, 0], [2, 2, 2]);
        a.re('C16', [-21.25, 0.87, -25.06], [0, 0, 0], [2, 2, 2]);
        a.re('C17', [-18.33, 0.87007, -25.06], [0, 0, 0], [2, 2, 2]);
        a.re('C18', [-17.34, 0.8701399999999999, -25.06], [0, 0, 0], [2, 2, 2]);
        a.re('C19', [-16.32, 0.8702099999999999, -25.06], [0, 0, 0], [2, 2, 2]);
        a.re('C20', [-17.96, 1.02028, -21.53], [0, 0, 0], [2, 2, 2]);
        a.re('C21', [-17.29, 1.0203499999999999, -21.53], [0, 0, 0], [2, 2, 2]);
        a.re('C22', [-16.79, 1.02, -21.53], [0, 0, 0], [2, 2, 2]);
        a.re('C23', [-41.31, 1.02007, -26.68], [0, 0, 0], [2, 2, 2]);
        a.re('C24', [-41.04, 1.03014, -28.02], [0, 0, 0], [2, 2, 2]);
        a.re('C25', [-40.75, 1.0302099999999998, -28.94], [0, 0, 0], [2, 2, 2]);
        a.re('C26', [-39.92, 1.0302799999999999, -29.66], [0, 0, 0], [2, 2, 2]);
        a.re('C27', [-38.87, 1.0303499999999999, -30.43], [0, 0, 0], [2, 2, 2]);
        a.re('C28', [-37.9, 1.03, -31.09], [0, 0, 0], [2, 2, 2]);
        a.re('C29', [-25.93, 1.0300699999999998, -36.45], [0, 0, 0], [2, 2, 2]);
        a.re('C30', [-25.93, 1.03014, -37.46], [0, 0, 0], [2, 2, 2]);
        a.re('C31', [-25.93, 1.0302099999999998, -38.37], [0, 0, 0], [2, 2, 2]);
        a.re('C32', [-25.93, 1.0302799999999999, -39.16], [0, 0, 0], [2, 2, 2]);
        a.re('C33', [-25.93, 1.0303499999999999, -40.1], [0, 0, 0], [2, 2, 2]);
        a.re('C34', [-25.93, 1.03, -37.13], [0, 0, 0], [2, 2, 2]);
        a.re('C35', [-25.93, 1.0300699999999998, -40.91], [0, 0, 0], [2, 2, 2]);
        a.re('C36', [-25.93, 1.03014, -41.77], [0, 0, 0], [2, 2, 2]);
        a.re('C37', [-37.13, 1.0302099999999998, -31.58], [0, 0, 0], [2, 2, 2]);
        a.re('C38', [-36.22, 1.0302799999999999, -32.13], [0, 0, 0], [2, 2, 2]);
        a.re('C39', [-35.29, 1.0303499999999999, -32.46], [0, 0, 0], [2, 2, 2]);
        a.re('C40', [-34.28, 1.03, -32.8], [0, 0, 0], [2, 2, 2]);
        a.re('C41', [-33.51, 1.0300699999999998, -32.98], [0, 0, 0], [2, 2, 2]);
        a.re('C42', [-21.25, 0.8701399999999999, -24.25], [0, 0, 0], [2, 2, 2]);
        a.re('C43', [-21.25, 0.8702099999999999, -23.58], [0, 0, 0], [2, 2, 2]);
        a.re('C44', [-21.25, 0.8702799999999999, -22.93], [0, 0, 0], [2, 2, 2]);
        a.re('C45', [-21.25, 0.87035, -22.36], [0, 0, 0], [2, 2, 2]);
        a.re('C46', [-21.25, 0.87, -21.79], [0, 0, 0], [2, 2, 2]);
        a.re('C47', [-21.25, 0.87007, -21.21], [0, 0, 0], [2, 2, 2]);
        a.re('C48', [-17.69, 0.8701399999999999, -4.21], [0, 0, 0], [2, 2, 2]);
        a.re('C49', [-18.58, 0.8702099999999999, -4.21], [0, 0, 0], [2, 2, 2]);
        a.re('C50', [-21.55, 0.8702799999999999, -4.21], [0, 0, 0], [2, 2, 2]);
        a.re('C51', [-20.78, 0.87035, -4.21], [0, 0, 0], [2, 2, 2]);
        a.re('C52', [-19.81, 0.87, -10.33], [0, 0, 0], [2, 2, 2]);
        a.re('C53', [-9.69, 0.87007, -23.67], [0, 0, 0], [2, 2, 2]);
        a.re('C54', [-26.71, 0.96014, 4.41], [0, 0, 0], [2, 2, 2]);
        a.re('C55', [-17.69, 0.8702099999999999, 3.09], [0, 0, 0], [2, 2, 2]);
        a.re('C56', [-26.77, 0.98028, 3.77], [0, 0, 0], [2, 2, 2]);
        a.re('C57', [-26.77, 0.9803499999999999, 4.67], [0, 0, 0], [2, 2, 2]);
        a.re('C58', [-26.77, 0.98, 2.91], [0, 0, 0], [2, 2, 2]);
        a.re('C59', [-31.13, 0.98007, 5.55], [0, 0, 0], [2, 2, 2]);
        a.re('C60', [-17.69, 0.8501399999999999, 3.75], [0, 0, 0], [2, 2, 2]);
        a.re('C61', [-31.13, 0.98021, 4.65], [0, 0, 0], [2, 2, 2]);
        a.re('C62', [-17.69, 1.0302799999999999, 4.43], [0, 0, 0], [2, 2, 2]);
        a.re('C63', [-17.69, 1.0303499999999999, 5.1], [0, 0, 0], [2, 2, 2]);
        a.re('C64', [-17.69, 1.03, 5.87], [0, 0, 0], [2, 2, 2]);
        a.re('C65', [-17.69, 1.0300699999999998, 6.5], [0, 0, 0], [2, 2, 2]);
        a.re('C66', [-17.69, 1.03014, 7.29], [0, 0, 0], [2, 2, 2]);
        a.re('C67', [-18.81, 1.0302099999999998, 7.29], [0, 0, 0], [2, 2, 2]);
        a.re('C68', [-19.63, 0.98028, 7.29], [0, 0, 0], [2, 2, 2]);
        a.re('C69', [-20.66, 0.9803499999999999, 7.29], [0, 0, 0], [2, 2, 2]);
        a.re('C70', [-21.27, 0.98, 7.29], [0, 0, 0], [2, 2, 2]);
        a.re('C71', [-31.13, 0.98007, 6.31], [0, 0, 0], [2, 2, 2]);
        a.re('C72', [-39.06, 0.98014, 7.65], [0, 0, 0], [2, 2, 2]);
        a.re('C73', [-39.88, 0.98021, 7.65], [0, 0, 0], [2, 2, 2]);
        a.re('C74', [-40.66, 0.98028, 7.65], [0, 0, 0], [2, 2, 2]);
        a.re('C75', [-41.33, 0.9803499999999999, 7.65], [0, 0, 0], [2, 2, 2]);
        a.re('C76', [-41.33, 0.98, 6.99], [0, 0, 0], [2, 2, 2]);
        a.re('C77', [-41.33, 0.98007, 6.3], [0, 0, 0], [2, 2, 2]);
        a.re('C78', [-41.33, 0.98014, 5.52], [0, 0, 0], [2, 2, 2]);
        a.re('C79', [-41.33, 0.98021, 4.81], [0, 0, 0], [2, 2, 2]);
        a.re('C80', [-37.25, 0.98028, 3.02], [0, 0, 0], [2, 2, 2]);
        a.re('C81', [-36.54, 0.9803499999999999, 3.19], [0, 0, 0], [2, 2, 2]);
        a.re('C82', [-37.96, 0.98, 2.4], [0, 0, 0], [2, 2, 2]);
        a.re('C83', [-37.61, 0.98007, -7.43], [0, 0, 0], [2, 2, 2]);
        a.re('C84', [-38.28, 0.98014, -8.12], [0, 0, 0], [2, 2, 2]);
        a.re('C85', [-38.83, 0.98021, -8.89], [0, 0, 0], [2, 2, 2]);
        a.re('C86', [-39.23, 0.98028, -9.57], [0, 0, 0], [2, 2, 2]);
        a.re('C87', [-39.95, 0.8403499999999999, -10.47], [0, 0, 0], [2, 2, 2]);
        a.re('C88', [-39.95, 0.98, -11.49], [0, 0, 0], [2, 2, 2]);
        a.re('C89', [-39.95, 0.98007, -12.48], [0, 0, 0], [2, 2, 2]);
        a.re('C90', [-39.95, 0.98014, -13.4], [0, 0, 0], [2, 2, 2]);
        a.re('C91', [-39.95, 0.98021, -14.31], [0, 0, 0], [2, 2, 2]);
        a.re('C92', [-39.24, 0.96028, -14.83], [0, 0, 0], [2, 2, 2]);
        a.re('C93', [-38.58, 0.9703499999999999, -14.83], [0, 0, 0], [2, 2, 2]);
        a.re('C94', [-37.97, 0.95, -14.83], [0, 0, 0], [2, 2, 2]);
        a.re('C95', [-37.54, 0.99007, -14.83], [0, 0, 0], [2, 2, 2]);
        a.re('C96', [-42.12, 1.02014, -26.68], [0, 0, 0], [2, 2, 2]);
        a.re('C97', [-41.78, 1.02021, -26.02], [0, 0, 0], [2, 2, 2]);
        a.re('C98', [-41.78, 1.02028, -26.59], [0, 0, 0], [2, 2, 2]);
        a.re('C99', [-41.04, 1.0303499999999999, -27.46], [0, 0, 0], [2, 2, 2]);
        a.re('C100', [-21.21, 0.8899999999999999, -4.21], [0, 0, 0], [2, 2, 2]);
        a.re('C101', [-18.14, 0.87007, -4.21], [0, 0, 0], [2, 2, 2]);
        a.re('C102', [-31.13, 0.98014, 5.26], [0, 0, 0], [2, 2, 2]);
        a.re('C103', [-31.13, 0.98021, 6.09], [0, 0, 0], [2, 2, 2]);
        a.re('C104', [-36.95, 0.98028, 3.19], [0, 0, 0], [2, 2, 2]);
        a.re('C105', [-37.91, 0.9803499999999999, 3.02], [0, 0, 0], [2, 2, 2]);
        a.re('C106', [-38.09, 0.98, -7.43], [0, 0, 0], [2, 2, 2]);
        a.re('C107', [-39.76, 0.84007, -9.78], [0, 0, 0], [2, 2, 2]);
        a.re('C108', [-39.95, 0.98014, -11], [0, 0, 0], [2, 2, 2]);
        a.re('C109', [-39.95, 0.98021, -12.13], [0, 0, 0], [2, 2, 2]);
        a.re('C110', [-39.95, 0.98028, -13.08], [0, 0, 0], [2, 2, 2]);
        a.re('C111', [-39.95, 0.9803499999999999, -13.99], [0, 0, 0], [2, 2, 2]);
        a.re('C112', [-39.87, 0.98, -14.83], [0, 0, 0], [2, 2, 2]);
        a.re('C113', [-38.95, 0.99007, -14.83], [0, 0, 0], [2, 2, 2]);
        a.re('C114', [-41.04, 1.03014, -28.45], [0, 0, 0], [2, 2, 2]);
        a.re('C115', [-40.39, 1.0302099999999998, -29.7], [0, 0, 0], [2, 2, 2]);
        a.re('C116', [-39.47, 1.0302799999999999, -29.82], [0, 0, 0], [2, 2, 2]);
        a.re('C117', [-38.37, 1.0303499999999999, -30.43], [0, 0, 0], [2, 2, 2]);
        a.re('C118', [-37.41, 1.03, -31.09], [0, 0, 0], [2, 2, 2]);
        a.re('C119', [-36.56, 1.0300699999999998, -31.58], [0, 0, 0], [2, 2, 2]);
        a.re('C120', [-35.69, 1.03014, -32.13], [0, 0, 0], [2, 2, 2]);
        a.re('C121', [-34.71, 1.0302099999999998, -32.46], [0, 0, 0], [2, 2, 2]);
        a.re('C122', [-33.85, 1.0302799999999999, -32.8], [0, 0, 0], [2, 2, 2]);
        a.re('C123', [-26.48, 1.0303499999999999, -36.45], [0, 0, 0], [2, 2, 2]);
        a.re('C124', [-27.06, 1.03, -36.45], [0, 0, 0], [2, 2, 2]);
        a.re('C125', [-27.54, 1.0300699999999998, -36.74], [0, 0, 0], [2, 2, 2]);
        a.re('C126', [-27.85, 1.03014, -37.13], [0, 0, 0], [2, 2, 2]);
        a.re('C127', [-28.32, 1.0302099999999998, -37.13], [0, 0, 0], [2, 2, 2]);
        a.re('C128', [-28.65, 1.0302799999999999, -37.13], [0, 0, 0], [2, 2, 2]);
        a.re('C129', [-29.01, 1.0303499999999999, -37.38], [0, 0, 0], [2, 2, 2]);
        a.re('P18', [-12.32, 0, -23.39], [1.59, 0, 0], [4.42, 0.98, 20.24]);
        a.re('P19', [0, 0.00007000000000000001, -11.51], [0, 0, 0], [4.42, 0.98, 28.98]);
        a.re('P20', [-38.8, 1.83014, -57.19], [-1.53, -0.05, 1.53], [4.5, 4.96, 29.08]);
        a.re('E0', [-48.23, 0.37021, -51.14], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}