var map = {
    title: "Project Stardust",
    song: "env2",
    maker: "",
    spawn: [0, 0.5, 0],
    init: function() {
        a.c([0, -20.24, -526.41]);
        a.c([2.05, -20.24, -526.41]);
        a.c([3.32, -20.24, -527.62]);
        a.c([3.89, -20.24, -529.09]);
        a.c([3.91, -20.24, -530.73]);
        a.c([3.27, -20.24, -532.6]);
        a.c([1.64, -20.24, -533.15]);
        a.c([-0.2, -20.24, -533.15]);
        a.c([-1.77, -20.24, -532.2]);
        a.c([-2.42, -20.24, -530.74]);
        a.c([-2.26, -20.24, -529.07]);
        a.c([-1.7, -20.24, -527.52]);
        a.c([1.73, -20.24, -531.42]);
        a.c([-0.44, -20.24, -531.3]);
        a.c([-0.44, -20.24, -528.86]);
        a.c([0.11, -20.24, -528.35]);
        a.c([0.84, -20.24, -528.35]);
        a.c([1.39, -20.24, -528.63]);
        a.p([0.35, -0.88, -1.97], [0, 0, 0], [10, 0.48, 10]);
        a.p([0.35, -21, -306.84], [0, 0, 0], [10, 0.48, 600]);
        a.p([0.35, -10.82, -24.11], [0, -0.44, 0], [10, 0.48, 40]);
        a.p([0.35, -18.72, -41.91], [0, 0, 0], [10, 0.48, 10]);
        a.p([0.35, -18.3, -46.69], [0, 0.35, 0], [10, 0.48, 10]);
        a.p([0.35, 0, -319.82], [0, 0, 0], [10, 0.48, 600]);
        a.p([4.86, -10.28, -306.84], [0, 0, -1.57], [20, 0.5, 600]);
        a.p([-4.2, -10.28, -306.84], [0, 0, -1.57], [20, 0.5, 600]);
        a.p([-1.08, -10.96, -55.75], [-0.26, 0, 0], [0.5, 20, 38]);
        a.p([3.19, -10.11, -99.36], [0, 0.09, 0], [6, 20, 2]);
        a.p([-3.73, -10.11, -124.56], [0, 0.09, 0], [2, 20, 2]);
        a.p([2.32, -10.11, -130.53], [0, 0.09, 0], [6, 20, 2]);
        a.p([-3.61, -14.16, -138.32], [0, 0.35, 0], [2, 0.5, 20]);
        a.p([-3.54, -10.11, -159.01], [0, 0.09, 0], [8, 20, 2]);
        a.p([-1.05, -10.11, -173.3], [0, 0.09, 0], [1, 20, 20]);
        a.p([2.96, -10.11, -182.39], [0, 0.09, 0], [8, 20, 2]);
        a.p([3.68, -21.12, -159.85], [0, 0.09, 0], [8, 20, 2]);
        a.p([-2.66, -18.09, -173.12], [0, 0.35, 0], [4, 0.5, 20]);
        a.p([2.66, -10.11, -233.59], [0, 0.09, 0], [8, 20, 2]);
        a.p([6.11, -10.11, -218.7], [0, 0.09, 0], [8, 20, 2]);
        a.p([-3.42, -10.11, -218.7], [0, 0.09, 0], [8, 20, 2]);
        a.p([-1.74, -10.11, -250.03], [0, 0.09, 0], [8, 20, 2]);
        a.p([2.81, -10.11, -266.46], [0, 0.09, 0], [8, 20, 2]);
        a.p([-2.64, -10.11, -287.07], [0, 0.09, 0], [8, 20, 2]);
        a.p([5.78, -14.82, -295.2], [0, 0.35, 0], [4, 0.5, 20]);
        a.p([-1.22, -10.11, -352.43], [0, 0.09, 0], [2, 20, 16]);
        a.p([2.33, -18.17, -352.43], [0, 0.09, 0], [6, 2, 16]);
        a.p([2.33, -9.3, -359.49], [0, 0.09, 0], [6, 20, 2]);
        a.p([1.8, -8.01, -181.4], [0, 0.09, 0], [4, 1, 1]);
        a.p([3.03, -7.41, -181.4], [0, 0.09, -0.79], [3, 1, 1]);
        a.p([3.03, -8.92, -181.4], [0, 0.09, 0.79], [3, 1, 1]);
        a.y([4.31, -11.37, -307.47], [0, 0.09, 0], [2, 24, 2]);
        a.y([2.44, -11.37, -310.19], [0, 0.09, 0], [2, 24, 2]);
        a.y([0.34, -11.37, -312.74], [0, 0.09, 0], [2, 24, 2]);
        a.y([-1.29, -11.37, -314.62], [0, 0.09, 0], [2, 24, 2]);
        a.y([-3.69, -11.37, -321.13], [0, 0.09, 0], [2, 24, 2]);
        a.y([1.78, -11.37, -329.98], [0, 0.09, 0], [2, 24, 2]);
        a.y([4.34, -11.37, -333.24], [0, 0.09, 0], [2, 24, 2]);
        a.e([1.68, -16.68, -358.65]);
    },
    post: function() {},
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -32.87) {
                    update.set_gravity(default_gravity * 10.0);
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -42.87) {
                    update.set_gravity(default_gravity);
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -47.61) {
                    update.set_gravity(default_gravity * 0.02);
                    this.section_id += 1
                }
                break;
            case 3:
                if (PZ < -647.61) {
                    update.set_gravity(default_gravity);
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
    },
    physics_update: function() {},
    render_update: function() {}
}