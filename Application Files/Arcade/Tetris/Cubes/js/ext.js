 $(document).ready(function () {
                var oMain = new CMain({
                    level_up_lines: 10, //EVERY N LINES IS FILL 
                    score_line: [40, 100, 300, 1200], //ADD THIS VALUE TO SCORE WHEN DESTROY LINES
                    blocks_occurence: [19, 19, 19, 12, 12, 7, 11], //BLOCKS SPAWN OCCURENCE 
                    start_refresh_game: 1,
                    min_refresh_game: 0.05, //MINIUM REFRESH FOR GAME UPDATE (MAX VELOCITY OF GAME)
                    step_decrease_refresh_game: 0.25, //EVERY LEVEL UP REFRESH VALUE IS DECREASE 
                    audio_enable_on_startup:false, //ENABLE/DISABLE AUDIO WHEN GAME STARTS 
                    fullscreen:true,        //SET THIS TO FALSE IF YOU DON'T WANT TO SHOW FULLSCREEN BUTTON
                    check_orientation:true, //SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT ON MOBILE DEVICES
                    num_levels_for_ads: 3 //NUMBER OF TURNS PLAYED BEFORE AD SHOWING //
                            //////// THIS FEATURE  IS ACTIVATED ONLY WITH CTL ARCADE PLUGIN./////////////////////////// 
                            /////////////////// YOU CAN GET IT AT: ///////////////////////////////////////////////////////// 
                            // http://codecanyon.net/item/ctl-arcade-wordpress-plugin/13856421///////////
                });

                $(oMain).on("start_session", function (evt) {
                    if (getParamValue('ctl-arcade') === "true") {
                        parent.__ctlArcadeStartSession();
                    }
                });

                $(oMain).on("end_session", function (evt) {
                    if (getParamValue('ctl-arcade') === "true") {
                        parent.__ctlArcadeEndSession();
                    }
                });

                $(oMain).on("start_level", function (evt, iLevel) {
                    if (getParamValue('ctl-arcade') === "true") {
                        parent.__ctlArcadeStartLevel({level: iLevel});
                    }
                });

                $(oMain).on("end_level", function (evt, iLevel) {
                    if (getParamValue('ctl-arcade') === "true") {
                        parent.__ctlArcadeEndLevel({level: iLevel});
                    }
                });

                $(oMain).on("restart_level", function (evt, iLevel) {
                    if (getParamValue('ctl-arcade') === "true") {
                        parent.__ctlArcadeRestartLevel({level: iLevel});
                    }
                });

                $(oMain).on("save_score", function (evt, iScore) {
                    if (getParamValue('ctl-arcade') === "true") {
                        parent.__ctlArcadeSaveScore({score: iScore});
                    }
                });

                $(oMain).on("show_interlevel_ad", function (evt) {
                    if (getParamValue('ctl-arcade') === "true") {
                        parent.__ctlArcadeShowInterlevelAD();
                    }
                });

                $(oMain).on("share_event", function (evt, iScore) {
                    if (getParamValue('ctl-arcade') === "true") {
                        parent.__ctlArcadeShareEvent({img: TEXT_SHARE_IMAGE,
                            title: TEXT_SHARE_TITLE,
                            msg: TEXT_SHARE_MSG1 + iScore
                                    + TEXT_SHARE_MSG2,
                            msg_share: TEXT_SHARE_SHARE1
                                    + iScore + TEXT_SHARE_SHARE1});
                    }
                });

                if (isIOS()) {
                    setTimeout(function () {
                        sizeHandler();
                    }, 200);
                } else {
                    sizeHandler();
                }
            });