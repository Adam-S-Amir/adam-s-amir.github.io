var map = {
    title: "flip turn",
    song: "env2",
    maker: "",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([-2.39993, 2.80007, -37.31993], [0.49, 0, 0], [6.46, 1.66, 53.32], "3.0", 0, 0, 0.6, false, false);
        a.c([7.51014, 0.09014, -14.999860000000002], true);
        a.c([8.590209999999999, 0.11020999999999997, -19.80979], true);
        a.c([5.43028, 0.15027999999999997, -20.02972], true);
        a.c([8.88035, 4.1903500000000005, -20.569650000000003], true);
        a.c([-2.46958, 3.67042, -32.91958], true);
        a.c([6.06049, 4.17049, -16.84951], true);
        a.p([10.38, -2.52, -48.88], [0, -0.89, 0], [6.02, 9.2, 4.54], "1", 0, 0, 0.6, false, false);
        a.p([7.34007, -1.06993, -21.09993], [-0.28, 0, 0], [4.38, 2, 56.56], "1", 0, 0, 0.6, false, false);
        a.p([-1.8598599999999998, 1.9001400000000002, -48.69986], [5.91, -5.28, -0.23], [22.9, 6.22, 2.64], "1", 0, 0, 0.6, false, false);
        a.p([-11.579790000000001, 7.3602099999999995, -48.25979], [0.44, 0, 0], [2.3, 10, 16], "1", 0, 0, 0.6, false, false);
        a.e([0.44028, 0.45028, 2.04028]);
    },
    post: function() {
        cc.set_monkey("speed", 0.2);
        cc.set_monkey("steer", 0.03);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {},
    reset: function() {
        this.section_id = 0;
        a.re('P0', [-2.39993, 2.80007, -37.31993], [0.49, 0, 0], [6.46, 1.66, 53.32]);
        a.re('C0', [7.51014, 0.09014, -14.999860000000002], [0, 0, 0], [2, 2, 2]);
        a.re('C1', [8.590209999999999, 0.11020999999999997, -19.80979], [0, 0, 0], [2, 2, 2]);
        a.re('C2', [5.43028, 0.15027999999999997, -20.02972], [0, 0, 0], [2, 2, 2]);
        a.re('C3', [8.88035, 4.1903500000000005, -20.569650000000003], [0, 0, 0], [2, 2, 2]);
        a.re('C4', [-2.46958, 3.67042, -32.91958], [0, 0, 0], [2, 2, 2]);
        a.re('C5', [6.06049, 4.17049, -16.84951], [0, 0, 0], [2, 2, 2]);
        a.re('P1', [10.38, -2.52, -48.88], [0, -0.89, 0], [6.02, 9.2, 4.54]);
        a.re('P2', [7.34007, -1.06993, -21.09993], [-0.28, 0, 0], [4.38, 2, 56.56]);
        a.re('P3', [-1.8598599999999998, 1.9001400000000002, -48.69986], [5.91, -5.28, -0.23], [22.9, 6.22, 2.64]);
        a.re('P4', [-11.579790000000001, 7.3602099999999995, -48.25979], [0.44, 0, 0], [2.3, 10, 16]);
        a.re('E0', [0.44028, 0.45028, 2.04028], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}