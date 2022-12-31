var controls = {
  left: false,
  right: false,
  add_mobile: true,
  buttons_hidden: false,
  support_mobile: false,
  init: function() {
    if (this.support_mobile) {
      if (localStorage.getItem("add_mobile") == "no") {
        controls.include_mobile = false;
      }
    }
    if (settings.interface === "chrome_ext") {
      this.bind_keys();
      this.hide_buttons();
    } else {
      // desktop
      this.bind_keys();
      // mobile
      if ((controls.add_mobile) && (controls.support_mobile)) {
        this.bind_buttons();
      } else {
        this.hide_buttons();
      }
    }
  },
  count_button_presses: function() {
    if (alive) {
      stats.button_time += 1;
    }
  },
  count_key_presses: function() {
    if (alive) {
      stats.key_time += 1;
      if (stats.key_time > 16) {
        this.hide_buttons();
      }
    }
  },
  hide_buttons: function() {
    if (this.buttons_hidden == false) {
      this.buttons_hidden = true;
      $("#left").hide();
      $("#right").hide();
      localStorage.setItem("add_mobile", "no");
      this.include_mobile = false;
    }
  },
  bind_buttons: function() {
    $("#left").mousedown(function() {
      controls.left = true; controls.right = false;
      controls.count_button_presses();
    });
    $("#right").mousedown(function() {
      controls.right = true; controls.left = false;
      controls.count_button_presses();
    });
    $("#left").mouseup(function() {
      controls.left = false;
    });
    $("#right").mouseup(function() {
      controls.right = false;
    });
  },
  bind_keys: function() {
    document.onkeydown = function(e) {
      if ((e.keyCode == 37) || (e.keyCode == 65)) {
        controls.left = true; controls.right = false;
        controls.count_key_presses();
      }
      if ((e.keyCode == 39) || (e.keyCode == 68)) {
        controls.right = true; controls.left = false;
        controls.count_key_presses();
      }
      if (e.keyCode == 32) {
        if (!alive) {
          $("#restart").click();
        }
      }
    }
    document.onkeyup = function(e) {
      if ((e.keyCode == 37) || (e.keyCode == 65)) {
        controls.left = false;
      }
      if ((e.keyCode == 39) || (e.keyCode == 68)) {
        controls.right = false;
      }
    }
  }
}
