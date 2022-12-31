var a = {
    p: function(q,r,s) {
        maker.make_platform(q,r,s);
    },
    c: function(q) {
        maker.make_cone(q);
    },
    e: function(q) {
        maker.make_ending(q);
    },
    y: function(q,r,s) {
        maker.make_cylinder(q,r,s);
    },
    m: function(id) {
        return scene.getMeshByName(id);
    }
}