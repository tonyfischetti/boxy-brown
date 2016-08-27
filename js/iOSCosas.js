


;iOSCosas = function(){
    var message = "hi";
    var BROWSER_HEIGHT = 0;
    var BROWSER_WIDTH = 0;
    var SHORTEST_DIM = 0;
    var initialized = false;
    var clickBlock = false;
    var appropriate_target = "click"; //initiate as false
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) appropriate_target = "touchstart";
    
    return {
        init: function(){
            var that = this;
            that.update_dimensions();

              $("body").on(appropriate_target, ".settings-header-right-item", function(){
                  $(".settings-page").each(function(ind){
                      iOSCosas.page.hide($(this));
                  });
              });


            initialized = true;
        },
        update_dimensions: function(){
            BROWSER_HEIGHT = $(window).height();
            BROWSER_WIDTH = $(window).width();
            SHORTEST_DIM = BROWSER_HEIGHT <= BROWSER_WIDTH ? BROWSER_HEIGHT : BROWSER_WIDTH;
        },

        /* settings-page things */
        page: {
            header: function(a_settings_page, obj){

                var the_html = '<div class="settings-header">' +
                        (obj.left_item ? ('<span class="settings-header-left-item"><i class="fa fa-chevron-left" aria-hidden="true"></i>&nbsp;' + obj.left_item + "</span>") : "") +
                        '<b>'+
                        obj.title + 
                        '</b>' +
                        (obj.right_item ? ('<span class="settings-header-right-item">' + obj.right_item + "</span>") : "") +
                        '</div>';
                
                a_settings_page.prepend(the_html);

                if(obj.left_item && obj.left_fn){
                    a_settings_page.on(appropriate_target,
                                       ".settings-header-right-item",
                                       function(){ obj.right_fn(); }); 
                }

                if(obj.right_item && obj.right_fn){
                    a_settings_page.on(appropriate_target,
                                       ".settings-header-left-item",
                                       function(){ obj.left_fn(); }); 
                }

            },
            display: function(a_settings_page, direction, duration){
                direction = typeof direction !== 'undefined' ? direction : "none";
                duration = typeof duration !== 'undefined' ? duration : 200;

                a_settings_page.css("height", BROWSER_HEIGHT);
                a_settings_page.css("width", BROWSER_WIDTH);
                switch(direction){
                    case "right":
                        a_settings_page.css("left", BROWSER_WIDTH);
                        a_settings_page.css("visibility", "visible");
                        a_settings_page.animate({ left: 0}, duration);
                        break;
                    case "left":
                        a_settings_page.css("left", -BROWSER_WIDTH);
                        a_settings_page.css("visibility", "visible");
                        a_settings_page.animate({ left: 0}, duration);
                        break;
                    default:
                        a_settings_page.css("visibility", "visible");
                }
            },
            hide: function(a_settings_page, direction, duration){
                direction = typeof direction !== 'undefined' ? direction : "none";
                duration = typeof duration !== 'undefined' ? duration : 250;
                switch(direction){
                    case "right":
                        a_settings_page.animate({ left: -BROWSER_WIDTH}, duration);
                        break;
                    case "left":
                        a_settings_page.animate({ left: BROWSER_WIDTH}, duration);
                        break;
                }
                setTimeout(function(){
                    a_settings_page.css("visibility", "hidden"); 
                    a_settings_page.css("left", 0); 
                }, duration);
            }
        },

        /* utilities and things things */
        utils: {
            on_click: function(a_settings_button, fn){
                // a_settings_button.on("click touchend", fn);
                // a_settings_button.on("click touchstart", fn);
                // a_settings_button.on("click", fn);
                // a_settings_button.on("touchstart", fn);
                a_settings_button.on(appropriate_target, fn);
            },
            on_click_blocking: function(a_settings_button, fn){
                // a_settings_button.on("click touchend", function(){
                // a_settings_button.on("click touchstart", function(){
                // a_settings_button.on("touchstart", function(){
                a_settings_button.on(appropriate_target, function(){
                    if(!clickBlock){
                        fn();
                        clickBlock=true;
                        setTimeout(function(){ clickBlock=false; }, 300);
                    }
                });
            }
        }
    }
}();


// $("body").on("click touchend", ".settings-header-exit", function(){
//     console.log("maybe");
//     $(".settings-page").each(function(ind){
//         settings.page.hide($(this));
//     });
// });


