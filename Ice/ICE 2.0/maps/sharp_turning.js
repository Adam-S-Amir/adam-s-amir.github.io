var map = {
    title: "Sharp turning",
    song: "env2",
    maker: "",
    spawn: [0, 0.5, 0],
    init: function() {
        a.e([80.51, -1.1497, -19.66]);
        a.p([70.2, -1.99994, -17.08], [0, 0, 0], [5.6, 0.6, 6.56], 2.0, 0);
        a.p([0, -1.41982, 0.04], [0, 0, 0], [6.66, 0.6, 4.92], 1, 0);
        a.p([-0.4, -1.99976, -10.78], [0, 0, 0], [2, 1, 18.52], 1, 0);
        a.p([0.85, -1.9997, -21.1], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([2.51, -2, -23.12], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([4.21, -1.99994, -24.96], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([5.93, -1.99988, -23.26], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([7.39, -1.99982, -21.17], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([8.76, -1.99976, -19.09], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([60.19, -1.9997, -15.71], [-1.46, 0.05, 0.21], [1.2, 1.18, 17.74], 1, 0);
        a.p([11.13, -2, -11.22], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([12.99, -1.99994, -10.2], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([14.98, -1.99988, -8.83], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([16.95, -1.99982, -7.25], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([18.6, -1.99976, -8.3], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([20.3, -1.9997, -9.32], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([22.26, -2, -10.58], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([24.12, -1.99994, -12.47], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([8.65, -1.99988, -14.71], [0, 0, 0], [5.6, 0.6, 6.56], 2.0, 0);
        a.p([23.29, -1.99982, -17.08], [0, 0, 0], [5.6, 0.6, 6.56], 2.0, 0);
        a.p([48.15, -1.99976, -17.08], [0, 0, 0], [5.6, 0.6, 6.56], 2.0, 0);
        a.p([26.7, -1.9997, -16.98], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([28.57, -2, -18.36], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([30.01, -1.99994, -16.73], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([34.69, -1.99988, -21.13], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([32.82, -1.99982, -20.09], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([36.93, -1.99976, -22.64], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([38.21, -1.9997, -21.05], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([31.48, -2, -18.2], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([39.78, -1.99994, -19.27], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([40.67, -1.99988, -17.52], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([43.69, -1.99982, -15.79], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([42.2, -1.99976, -15.79], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([45.47, -1.9997, -15.79], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([73.88, -2, -15.79], [0, 0, 0], [2.92, 0.6, 2.24], 1, 0);
        a.p([76.14, -1.99994, -16.88], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([77.96, -1.99988, -18.43], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([79.91, -1.99982, -19.59], [0, 0, 0], [2, 0.6, 2.24], 1, 0);
        a.p([60.19, -1.99976, -18.94], [-1.62, 0.05, 0.21], [1.2, 1.18, 17.74], 1, 0);
    },
    post: function() {},
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -2.039999999999999) {
                    steer = default_steer * 3.5;
                    speed = default_speed * 0.7;
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -32.5) {
                    steer = default_steer;
                    speed = default_speed;
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [70.2, -1.99994, -17.08], [0, 0, 0], [5.6, 0.6, 6.56]);
        a.re('P1', [0, -1.41982, 0.04], [0, 0, 0], [6.66, 0.6, 4.92]);
        a.re('P2', [-0.4, -1.99976, -10.78], [0, 0, 0], [2, 1, 18.52]);
        a.re('P3', [0.85, -1.9997, -21.1], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P4', [2.51, -2, -23.12], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P5', [4.21, -1.99994, -24.96], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P6', [5.93, -1.99988, -23.26], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P7', [7.39, -1.99982, -21.17], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P8', [8.76, -1.99976, -19.09], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P9', [60.19, -1.9997, -15.71], [-1.46, 0.05, 0.21], [1.2, 1.18, 17.74]);
        a.re('P10', [11.13, -2, -11.22], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P11', [12.99, -1.99994, -10.2], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P12', [14.98, -1.99988, -8.83], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P13', [16.95, -1.99982, -7.25], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P14', [18.6, -1.99976, -8.3], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P15', [20.3, -1.9997, -9.32], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P16', [22.26, -2, -10.58], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P17', [24.12, -1.99994, -12.47], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P18', [8.65, -1.99988, -14.71], [0, 0, 0], [5.6, 0.6, 6.56]);
        a.re('P19', [23.29, -1.99982, -17.08], [0, 0, 0], [5.6, 0.6, 6.56]);
        a.re('P20', [48.15, -1.99976, -17.08], [0, 0, 0], [5.6, 0.6, 6.56]);
        a.re('P21', [26.7, -1.9997, -16.98], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P22', [28.57, -2, -18.36], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P23', [30.01, -1.99994, -16.73], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P24', [34.69, -1.99988, -21.13], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P25', [32.82, -1.99982, -20.09], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P26', [36.93, -1.99976, -22.64], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P27', [38.21, -1.9997, -21.05], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P28', [31.48, -2, -18.2], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P29', [39.78, -1.99994, -19.27], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P30', [40.67, -1.99988, -17.52], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P31', [43.69, -1.99982, -15.79], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P32', [42.2, -1.99976, -15.79], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P33', [45.47, -1.9997, -15.79], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P34', [73.88, -2, -15.79], [0, 0, 0], [2.92, 0.6, 2.24]);
        a.re('P35', [76.14, -1.99994, -16.88], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P36', [77.96, -1.99988, -18.43], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P37', [79.91, -1.99982, -19.59], [0, 0, 0], [2, 0.6, 2.24]);
        a.re('P38', [60.19, -1.99976, -18.94], [-1.62, 0.05, 0.21], [1.2, 1.18, 17.74]);
    },
    physics_update: function() {},
    render_update: function() {}
}