var map = {
    title: "Cosmos Cruise",
    song: "env2",
    maker: "",
    spawn: [0, 0.5, 0],
    init: function() {
        a.y([-0.49993000000000004, -0.21993, -71.06993], [0, 0, 0], [2, 2, 2], 1, 0, 0, 0.6);
        a.y([0.50014, -0.21986, -61.509859999999996], [0, 0, 0], [2, 2, 2], 1, 0, 0, 0.6);
        a.p([0.54021, 0.00021, -129.04979], [0, 0, 0], [1.4, 2, 2], 1, 1000000.0, 0, 0.6, false);
        a.p([-0.53972, 0.00028000000000000003, -138.98972], [0, 0, 0], [1, 2, 2], 1, 1000000.0, 0, 0.6, false);
        a.p([0.00035000000000000005, 0.00035000000000000005, -157.14965], [0, 0, 0], [1, 2, 2], 1, 1000000.0, 0, 0.6, false);
        a.y([0, -0.22, -37.9], [0, 0, 0], [2, 2, 2], 1, 0, 0, 0.6);
        a.y([0.00007000000000000001, -0.21993, -52.249930000000006], [0, 0, 0], [2, 2, 2], 1, 0, 0, 0.6);
        a.p([-12.179860000000001, -1.41986, -28.79986], [0, 0, 0], [2, 1, 2], 1, 0, 0, 0.6, false);
        a.p([19.53021, -1.41979, -45.82979], [0, 0, 0], [2, 1, 2], 1, 0, 0, 0.6, false);
        a.p([0.00028000000000000003, -1.41972, -14.289719999999999], [0, 0, 0], [2, 1, 2], 1, 0, 0, 0.6, false);
        a.p([0.00035000000000000005, -0.83965, -10.239650000000001], [0, 0, 0], [2, 0.2, 8], 0.0, 0, 0, 0.6, false);
        a.p([2.00042, -0.21958, -6.99958], [0, -0.31, 0.44], [4, 0.2, 2], 0.0, 0, 0, 0.6, false);
        a.p([-10.17951, -0.21951, -21.50951], [0, -0.31, 0.44], [4, 0.2, 2], 0.0, 0, 0, 0.6, false);
        a.p([-12.18, -0.84, -24.75], [0, 0, 0], [2, 0.2, 8], 0.0, 0, 0, 0.6, false);
        a.p([19.530070000000002, -0.83993, -41.77993000000001], [0, 0, 0], [2, 0.2, 8], 0.0, 0, 0, 0.6, false);
        a.p([21.530140000000003, -0.21986, -38.53986], [0, -0.31, 0.44], [4, 0.2, 2], 0.0, 0, 0, 0.6, false);
        a.p([-31.859789999999997, 1.7902099999999999, -73.79979], [0, -0.31, 0.44], [6.62, 0.34, 3.3], 0.0, 0, 0, 0.6, false);
        a.p([0.00028000000000000003, -0.8397199999999999, -2.05972], [0, 0, 0], [2, 0.2, 8], -1.0, 0, 0, 0.6, false);
        a.p([-1.99965, -0.21965, -6.99965], [0, -0.31, -0.44], [4, 0.2, 2], 0.0, 0, 0, 0.6, false);
        a.p([-14.179580000000001, -0.21958, -21.50958], [0, -0.31, -0.44], [4, 0.2, 2], 0.0, 0, 0, 0.6, false);
        a.p([17.53049, -0.21951, -38.53951], [0, -0.31, -0.44], [4, 0.2, 2], 0.0, 0, 0, 0.6, false);
        a.p([-38.48, 1.79, -73.8], [0, -0.31, -0.44], [6.62, 0.34, 3.3], 0.0, 0, 0, 0.6, false);
        a.p([-19.16993, -2.33993, -172.82993], [-0.31, 0.02, -0.56], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([-18.66986, -2.04986, -175.63986], [0, 0.17, -0.53], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([7.97021, 3.4702100000000002, -90.53979], [0, 0.17, 0], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([8.43028, 2.81028, -86.81972], [0.26, 0.17, 0.05], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([9.58035, 2.37035, -84.29965], [0.6, 0.14, 0.1], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([21.360419999999998, 1.77042, -80.91958], [-1.22, 0.06, -0.16], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([11.48049, 2.02049, -82.34951], [0.95, 0.1, 0.14], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([14.4, 1.76, -80.85], [1.22, 0.06, 0.16], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([17.88007, 1.6500700000000001, -80.26993], [-1.57, 0, 0], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([26.22014, 2.39014, -84.40986000000001], [-0.6, 0.14, -0.1], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([24.200210000000002, 2.0602099999999997, -82.56979], [-0.95, 0.1, -0.14], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([27.97028, 3.4702800000000003, -90.53972], [0, 0.17, 0], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([27.69035, 2.9703500000000003, -87.71965], [-0.26, 0.17, -0.05], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([-22.639580000000002, -1.33958, -167.67958], [-1.09, -0.37, -0.43], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([-20.73951, -2.0895099999999998, -169.50951], [-0.71, -0.2, -0.53], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([-28.28, 1.53, -165.38], [-1.57, -0.53, 0], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([-31.219929999999998, 3.39007, -165.95992999999999], [1.18, 0.56, -0.03], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([-33.59986, 5.10014, -167.45986000000002], [0.96, 0.54, -0.17], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([-25.229789999999998, -0.14978999999999998, -166.01979], [-1.35, -0.47, -0.32], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([-35.05972, 6.37028, -169.40972000000002], [0.64, 0.46, -0.34], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([-35.82965, 7.34035, -171.92965], [0.29, 0.32, -0.47], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([-35.879580000000004, 8.13042, -175.63958], [0, 0.17, -0.53], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([57.40049, -0.06951, -181.73951], [-1.24, 1.19, 0.56], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([56.78, -2.79, -179.17], [-1.1, 1.1, 0.8], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([56.59007, -4.19993, -176.73993], [-0.76, 0.82, 1.09], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([59.12014, -0.65986, -165.26986], [-1.68, 1.18, -0.59], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([56.720209999999994, -4.74979, -174.04979], [0.06, 0.05, 1.25], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([57.210280000000004, -4.399719999999999, -170.81972000000002], [0.78, -0.62, 1.17], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([58.05035, -3.01965, -167.67965], [-2.11, 0.87, -0.8], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([61.140420000000006, 4.700419999999999, -163.44958], [-1.46, 1.25, -0.02], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([60.23049, 2.17049, -163.97951], [-1.58, 1.23, -0.35], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([62.85, 10.53, -165.68], [-1.24, 1.19, 0.56], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([62.210069999999995, 8.13007, -164.22993], [-1.35, 1.23, 0.31], [2, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([18.76014, -0.8898600000000001, -201.82986], [0, 0, -0.34], [40, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([18.76021, -0.88979, -219.95979], [0, 0, -0.34], [40, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([-1.53972, 6.390280000000001, -206.94972], [-0.82, -0.25, -0.24], [14, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([-1.55965, 6.39035, -215.84965], [0.82, 0.25, -0.24], [14, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([39.52042, -8.32958, -206.57958], [0.82, 0.25, -0.24], [14, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([40.57049, -8.70951, -215.35951], [-0.82, -0.25, -0.24], [14, 2, 4], 10.0, 0, 0, 0.6, false);
        a.p([-2, -0.85, -9.42], [-0.44, 0, 0], [6, 0.2, 2], 2.0, 0, 0, 0.6, false);
        a.p([2.00007, -0.84993, -9.41993], [0.44, 0, 0], [6, 0.2, 2], 2.0, 0, 0, 0.6, false);
        a.p([-10.17986, -0.8498600000000001, -23.929859999999998], [0.44, 0, 0], [6, 0.2, 2], 2.0, 0, 0, 0.6, false);
        a.p([-14.17979, -0.84979, -23.929789999999997], [-0.44, 0, 0], [6, 0.2, 2], 2.0, 0, 0, 0.6, false);
        a.p([17.53028, -0.8497199999999999, -40.959720000000004], [-0.44, 0, 0], [6, 0.2, 2], 2.0, 0, 0, 0.6, false);
        a.p([21.53035, -0.84965, -40.95965], [0.44, 0, 0], [6, 0.2, 2], 2.0, 0, 0, 0.6, false);
        a.p([-34.79958, 0.95042, -78.51957999999999], [0, 0, 0], [6.74, 3.92, 7.06], 2.0, 0, 0, 0.6, false);
        a.s([-5.6395100000000005, 15.010489999999999, -53.30951], 5.06, 2.0, 0, 0, 0.6);
        a.s([60.02, 5.87, -76.84], 5.06, 2.0, 0, 0, 0.6);
        a.s([-14.019929999999999, 14.810070000000001, -41.69993], 7.64, 2.0, 0, 0, 0.6);
        a.s([-16.869860000000003, 24.06014, -108.94986], 5.06, 2.0, 0, 0, 0.6);
        a.s([9.37021, 5.870209999999999, -124.93978999999999], 5.06, 2.0, 0, 0, 0.6);
        a.s([-14.01972, 15.01028, -41.69972], 5.06, 2.0, 0, 0, 0.6);
        a.s([9.37035, 5.85035, -124.93965], 6.98, 2.0, 0, 0, 0.6);
        a.s([-37.51958, 5.87042, -102.21958000000001], 5.06, 3.0, 0, 0, 0.6);
        a.y([4.80049, -0.83951, -11.07951], [0, -1.57, 0], [1, 4, 1], 4.0, 0, 0, 0.6);
        a.y([-4.8, -0.84, -11.08], [0, -1.57, 0], [1, 4, 1], 4.0, 0, 0, 0.6);
        a.y([-16.97993, -0.83993, -25.57993], [0, -1.57, 0], [1, 4, 1], 4.0, 0, 0, 0.6);
        a.y([-7.37986, -0.83986, -25.57986], [0, -1.57, 0], [1, 4, 1], 4.0, 0, 0, 0.6);
        a.y([14.73021, -0.83979, -42.609790000000004], [0, -1.57, 0], [1, 4, 1], 4.0, 0, 0, 0.6);
        a.y([24.370279999999998, -0.8397199999999999, -41.31972], [0, -1.57, 0], [1, 4, 1], 4.0, 0, 0, 0.6);
        a.s([17.97035, 1.38035, -90.69965], 20, 4.0, 0, 0, 0.6);
        a.y([-41.75958, 1.48042, -78.91958], [0, -1.57, 0], [1, 4, 1], 4.0, 0, 0, 0.6);
        a.s([-6.18951, 5.00049, -52.83951], 7.64, 4.0, 0, 0, 0.6);
        a.s([-28.34, 1.24, -175.81], 20, 4.0, 0, 0, 0.6);
        a.y([-28.059929999999998, 1.48007, -78.91993000000001], [0, -1.57, 0], [1, 4, 1], 4.0, 0, 0, 0.6);
        a.s([62.05014, 4.41014, -173.81986], 20, 4.0, 0, 0, 0.6);
        a.s([19.17021, 0.50021, -210.93979], 20, 4.0, 0, 0, 0.6);
        a.p([-29.39965, 0.29035, -78.05965], [-0.49, 0, 0], [5.58, 1.74, 2.5], 1, 0, 0, 0.6, false);
        a.p([-40.52958, 0.29042, -78.51957999999999], [0.34, 0, 0], [5.58, 1.74, 2.5], 1, 0, 0, 0.6, false);
        a.y([-0.49951, -0.21951, -98.42951], [0, 0, 0], [2, 2, 2], 1, 0, 0, 0.6);
        a.y([0.7, -0.22, -83.46], [0, 0, 0], [2, 2, 2], 1, 0, 0, 0.6);
        a.p([0.00007000000000000001, 0.00007000000000000001, -119.68993], [0, 0, 0], [1.4, 2, 2], 1, 0, 0, 0.6, false);
        a.e([-0.07986, -1.71986, -16.42986]);
    },
    post: function() {
        a.u('Y2');
        a.u('Y3');
        a.u('P3');
        a.u('P4');
        a.u('P5');
        a.u('P6');
        a.u('P7');
        a.u('P8');
        a.u('P9');
        a.u('P10');
        a.u('P11');
        a.u('P12');
        a.u('P14');
        a.u('P15');
        a.u('P16');
        a.u('P17');
        a.u('P57');
        a.u('P58');
        a.u('P59');
        a.u('P60');
        a.u('P61');
        a.u('P62');
        a.u('Y4');
        a.u('Y5');
        a.u('Y6');
        a.u('Y7');
        a.u('Y8');
        a.u('Y9');
        a.u('E0');
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -0.4397199999999999) {
                    speed = default_speed * 3.0;
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -5.039719999999999) {
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -5.419510000000001) {
                    this.section_id += 1
                }
                break;
            case 3:
                a.mov('Y2', 'z', 1.0);
                a.mov('Y3', 'z', 1.0);
                a.mov('P3', 'z', -0.9);
                a.mov('P4', 'z', -0.9);
                a.mov('P5', 'z', -0.9);
                a.mov('P6', 'z', -0.9);
                a.mov('P7', 'z', -0.9);
                a.mov('P8', 'z', -0.9);
                a.mov('P9', 'z', -0.9);
                a.mov('P10', 'z', -0.9);
                a.mov('P11', 'z', -0.9);
                a.mov('P12', 'z', -0.9);
                a.mov('P14', 'z', -0.9);
                a.mov('P15', 'z', -0.9);
                a.mov('P16', 'z', -0.9);
                a.mov('P17', 'z', -0.9);
                a.mov('P57', 'z', -0.9);
                a.mov('P58', 'z', -0.9);
                a.mov('P59', 'z', -0.9);
                a.mov('P60', 'z', -0.9);
                a.mov('P61', 'z', -0.9);
                a.mov('P62', 'z', -0.9);
                a.mov('Y4', 'z', -0.9);
                a.mov('Y5', 'z', -0.9);
                a.mov('Y6', 'z', -0.9);
                a.mov('Y7', 'z', -0.9);
                a.mov('Y8', 'z', -0.9);
                a.mov('Y9', 'z', -0.9);
                a.mov('E0', 'z', -0.9);
                if (PZ < -25.419510000000002) {
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -26.03958) {
                    speed = default_speed * 0.9;
                    this.section_id += 1
                }
                break;
            case 5:
                a.mov('Y2', 'z', 1.0);
                a.mov('Y3', 'z', 1.0);
                a.mov('P3', 'z', -0.9);
                a.mov('P4', 'z', -0.9);
                a.mov('P5', 'z', -0.9);
                a.mov('P6', 'z', -0.9);
                a.mov('P7', 'z', -0.9);
                a.mov('P8', 'z', -0.9);
                a.mov('P9', 'z', -0.9);
                a.mov('P10', 'z', -0.9);
                a.mov('P11', 'z', -0.9);
                a.mov('P12', 'z', -0.9);
                a.mov('P14', 'z', -0.9);
                a.mov('P15', 'z', -0.9);
                a.mov('P16', 'z', -0.9);
                a.mov('P17', 'z', -0.9);
                a.mov('P57', 'z', -0.9);
                a.mov('P58', 'z', -0.9);
                a.mov('P59', 'z', -0.9);
                a.mov('P60', 'z', -0.9);
                a.mov('P61', 'z', -0.9);
                a.mov('P62', 'z', -0.9);
                a.mov('Y4', 'z', -0.9);
                a.mov('Y5', 'z', -0.9);
                a.mov('Y6', 'z', -0.9);
                a.mov('Y7', 'z', -0.9);
                a.mov('Y8', 'z', -0.9);
                a.mov('Y9', 'z', -0.9);
                a.mov('E0', 'z', -0.9);
                if (PZ < -226.03958) {
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('Y0', [-0.49993000000000004, -0.21993, -71.06993], [0, 0, 0], [2, 2, 2]);
        a.re('Y1', [0.50014, -0.21986, -61.509859999999996], [0, 0, 0], [2, 2, 2]);
        a.re('P0', [0.54021, 0.00021, -129.04979], [0, 0, 0], [1.4, 2, 2]);
        a.re('P1', [-0.53972, 0.00028000000000000003, -138.98972], [0, 0, 0], [1, 2, 2]);
        a.re('P2', [0.00035000000000000005, 0.00035000000000000005, -157.14965], [0, 0, 0], [1, 2, 2]);
        a.re('Y2', [0, -0.22, -37.9], [0, 0, 0], [2, 2, 2]);
        a.re('Y3', [0.00007000000000000001, -0.21993, -52.249930000000006], [0, 0, 0], [2, 2, 2]);
        a.re('P3', [-12.179860000000001, -1.41986, -28.79986], [0, 0, 0], [2, 1, 2]);
        a.re('P4', [19.53021, -1.41979, -45.82979], [0, 0, 0], [2, 1, 2]);
        a.re('P5', [0.00028000000000000003, -1.41972, -14.289719999999999], [0, 0, 0], [2, 1, 2]);
        a.re('P6', [0.00035000000000000005, -0.83965, -10.239650000000001], [0, 0, 0], [2, 0.2, 8]);
        a.re('P7', [2.00042, -0.21958, -6.99958], [0, -0.31, 0.44], [4, 0.2, 2]);
        a.re('P8', [-10.17951, -0.21951, -21.50951], [0, -0.31, 0.44], [4, 0.2, 2]);
        a.re('P9', [-12.18, -0.84, -24.75], [0, 0, 0], [2, 0.2, 8]);
        a.re('P10', [19.530070000000002, -0.83993, -41.77993000000001], [0, 0, 0], [2, 0.2, 8]);
        a.re('P11', [21.530140000000003, -0.21986, -38.53986], [0, -0.31, 0.44], [4, 0.2, 2]);
        a.re('P12', [-31.859789999999997, 1.7902099999999999, -73.79979], [0, -0.31, 0.44], [6.62, 0.34, 3.3]);
        a.re('P13', [0.00028000000000000003, -0.8397199999999999, -2.05972], [0, 0, 0], [2, 0.2, 8]);
        a.re('P14', [-1.99965, -0.21965, -6.99965], [0, -0.31, -0.44], [4, 0.2, 2]);
        a.re('P15', [-14.179580000000001, -0.21958, -21.50958], [0, -0.31, -0.44], [4, 0.2, 2]);
        a.re('P16', [17.53049, -0.21951, -38.53951], [0, -0.31, -0.44], [4, 0.2, 2]);
        a.re('P17', [-38.48, 1.79, -73.8], [0, -0.31, -0.44], [6.62, 0.34, 3.3]);
        a.re('P18', [-19.16993, -2.33993, -172.82993], [-0.31, 0.02, -0.56], [2, 2, 4]);
        a.re('P19', [-18.66986, -2.04986, -175.63986], [0, 0.17, -0.53], [2, 2, 4]);
        a.re('P20', [7.97021, 3.4702100000000002, -90.53979], [0, 0.17, 0], [2, 2, 4]);
        a.re('P21', [8.43028, 2.81028, -86.81972], [0.26, 0.17, 0.05], [2, 2, 4]);
        a.re('P22', [9.58035, 2.37035, -84.29965], [0.6, 0.14, 0.1], [2, 2, 4]);
        a.re('P23', [21.360419999999998, 1.77042, -80.91958], [-1.22, 0.06, -0.16], [2, 2, 4]);
        a.re('P24', [11.48049, 2.02049, -82.34951], [0.95, 0.1, 0.14], [2, 2, 4]);
        a.re('P25', [14.4, 1.76, -80.85], [1.22, 0.06, 0.16], [2, 2, 4]);
        a.re('P26', [17.88007, 1.6500700000000001, -80.26993], [-1.57, 0, 0], [2, 2, 4]);
        a.re('P27', [26.22014, 2.39014, -84.40986000000001], [-0.6, 0.14, -0.1], [2, 2, 4]);
        a.re('P28', [24.200210000000002, 2.0602099999999997, -82.56979], [-0.95, 0.1, -0.14], [2, 2, 4]);
        a.re('P29', [27.97028, 3.4702800000000003, -90.53972], [0, 0.17, 0], [2, 2, 4]);
        a.re('P30', [27.69035, 2.9703500000000003, -87.71965], [-0.26, 0.17, -0.05], [2, 2, 4]);
        a.re('P31', [-22.639580000000002, -1.33958, -167.67958], [-1.09, -0.37, -0.43], [2, 2, 4]);
        a.re('P32', [-20.73951, -2.0895099999999998, -169.50951], [-0.71, -0.2, -0.53], [2, 2, 4]);
        a.re('P33', [-28.28, 1.53, -165.38], [-1.57, -0.53, 0], [2, 2, 4]);
        a.re('P34', [-31.219929999999998, 3.39007, -165.95992999999999], [1.18, 0.56, -0.03], [2, 2, 4]);
        a.re('P35', [-33.59986, 5.10014, -167.45986000000002], [0.96, 0.54, -0.17], [2, 2, 4]);
        a.re('P36', [-25.229789999999998, -0.14978999999999998, -166.01979], [-1.35, -0.47, -0.32], [2, 2, 4]);
        a.re('P37', [-35.05972, 6.37028, -169.40972000000002], [0.64, 0.46, -0.34], [2, 2, 4]);
        a.re('P38', [-35.82965, 7.34035, -171.92965], [0.29, 0.32, -0.47], [2, 2, 4]);
        a.re('P39', [-35.879580000000004, 8.13042, -175.63958], [0, 0.17, -0.53], [2, 2, 4]);
        a.re('P40', [57.40049, -0.06951, -181.73951], [-1.24, 1.19, 0.56], [2, 2, 4]);
        a.re('P41', [56.78, -2.79, -179.17], [-1.1, 1.1, 0.8], [2, 2, 4]);
        a.re('P42', [56.59007, -4.19993, -176.73993], [-0.76, 0.82, 1.09], [2, 2, 4]);
        a.re('P43', [59.12014, -0.65986, -165.26986], [-1.68, 1.18, -0.59], [2, 2, 4]);
        a.re('P44', [56.720209999999994, -4.74979, -174.04979], [0.06, 0.05, 1.25], [2, 2, 4]);
        a.re('P45', [57.210280000000004, -4.399719999999999, -170.81972000000002], [0.78, -0.62, 1.17], [2, 2, 4]);
        a.re('P46', [58.05035, -3.01965, -167.67965], [-2.11, 0.87, -0.8], [2, 2, 4]);
        a.re('P47', [61.140420000000006, 4.700419999999999, -163.44958], [-1.46, 1.25, -0.02], [2, 2, 4]);
        a.re('P48', [60.23049, 2.17049, -163.97951], [-1.58, 1.23, -0.35], [2, 2, 4]);
        a.re('P49', [62.85, 10.53, -165.68], [-1.24, 1.19, 0.56], [2, 2, 4]);
        a.re('P50', [62.210069999999995, 8.13007, -164.22993], [-1.35, 1.23, 0.31], [2, 2, 4]);
        a.re('P51', [18.76014, -0.8898600000000001, -201.82986], [0, 0, -0.34], [40, 2, 4]);
        a.re('P52', [18.76021, -0.88979, -219.95979], [0, 0, -0.34], [40, 2, 4]);
        a.re('P53', [-1.53972, 6.390280000000001, -206.94972], [-0.82, -0.25, -0.24], [14, 2, 4]);
        a.re('P54', [-1.55965, 6.39035, -215.84965], [0.82, 0.25, -0.24], [14, 2, 4]);
        a.re('P55', [39.52042, -8.32958, -206.57958], [0.82, 0.25, -0.24], [14, 2, 4]);
        a.re('P56', [40.57049, -8.70951, -215.35951], [-0.82, -0.25, -0.24], [14, 2, 4]);
        a.re('P57', [-2, -0.85, -9.42], [-0.44, 0, 0], [6, 0.2, 2]);
        a.re('P58', [2.00007, -0.84993, -9.41993], [0.44, 0, 0], [6, 0.2, 2]);
        a.re('P59', [-10.17986, -0.8498600000000001, -23.929859999999998], [0.44, 0, 0], [6, 0.2, 2]);
        a.re('P60', [-14.17979, -0.84979, -23.929789999999997], [-0.44, 0, 0], [6, 0.2, 2]);
        a.re('P61', [17.53028, -0.8497199999999999, -40.959720000000004], [-0.44, 0, 0], [6, 0.2, 2]);
        a.re('P62', [21.53035, -0.84965, -40.95965], [0.44, 0, 0], [6, 0.2, 2]);
        a.re('P63', [-34.79958, 0.95042, -78.51957999999999], [0, 0, 0], [6.74, 3.92, 7.06]);
        a.re('S0', [-5.6395100000000005, 15.010489999999999, -53.30951], [0, 0, 0], [5.06, 5.06, 5.06]);
        a.re('S1', [60.02, 5.87, -76.84], [0, 0, 0], [5.06, 5.06, 5.06]);
        a.re('S2', [-14.019929999999999, 14.810070000000001, -41.69993], [0, 0, 0], [7.64, 7.64, 7.64]);
        a.re('S3', [-16.869860000000003, 24.06014, -108.94986], [0, 0, 0], [5.06, 5.06, 5.06]);
        a.re('S4', [9.37021, 5.870209999999999, -124.93978999999999], [0, 0, 0], [5.06, 5.06, 5.06]);
        a.re('S5', [-14.01972, 15.01028, -41.69972], [0, 0, 0], [5.06, 5.06, 5.06]);
        a.re('S6', [9.37035, 5.85035, -124.93965], [0, 0, 0], [6.98, 6.98, 6.98]);
        a.re('S7', [-37.51958, 5.87042, -102.21958000000001], [0, 0, 0], [5.06, 5.06, 5.06]);
        a.re('Y4', [4.80049, -0.83951, -11.07951], [0, -1.57, 0], [1, 4, 1]);
        a.re('Y5', [-4.8, -0.84, -11.08], [0, -1.57, 0], [1, 4, 1]);
        a.re('Y6', [-16.97993, -0.83993, -25.57993], [0, -1.57, 0], [1, 4, 1]);
        a.re('Y7', [-7.37986, -0.83986, -25.57986], [0, -1.57, 0], [1, 4, 1]);
        a.re('Y8', [14.73021, -0.83979, -42.609790000000004], [0, -1.57, 0], [1, 4, 1]);
        a.re('Y9', [24.370279999999998, -0.8397199999999999, -41.31972], [0, -1.57, 0], [1, 4, 1]);
        a.re('S8', [17.97035, 1.38035, -90.69965], [0, 0, 0], [20, 20, 20]);
        a.re('Y10', [-41.75958, 1.48042, -78.91958], [0, -1.57, 0], [1, 4, 1]);
        a.re('S9', [-6.18951, 5.00049, -52.83951], [0, 0, 0], [7.64, 7.64, 7.64]);
        a.re('S10', [-28.34, 1.24, -175.81], [0, 0, 0], [20, 20, 20]);
        a.re('Y11', [-28.059929999999998, 1.48007, -78.91993000000001], [0, -1.57, 0], [1, 4, 1]);
        a.re('S11', [62.05014, 4.41014, -173.81986], [0, 0, 0], [20, 20, 20]);
        a.re('S12', [19.17021, 0.50021, -210.93979], [0, 0, 0], [20, 20, 20]);
        a.re('P64', [-29.39965, 0.29035, -78.05965], [-0.49, 0, 0], [5.58, 1.74, 2.5]);
        a.re('P65', [-40.52958, 0.29042, -78.51957999999999], [0.34, 0, 0], [5.58, 1.74, 2.5]);
        a.re('Y12', [-0.49951, -0.21951, -98.42951], [0, 0, 0], [2, 2, 2]);
        a.re('Y13', [0.7, -0.22, -83.46], [0, 0, 0], [2, 2, 2]);
        a.re('P66', [0.00007000000000000001, 0.00007000000000000001, -119.68993], [0, 0, 0], [1.4, 2, 2]);
        a.re('E0', [-0.07986, -1.71986, -16.42986], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}