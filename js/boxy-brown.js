

/* the browser (app) height and width */
var AHEIGHT = 0;
var AWIDTH = 0;

/* the position of the box (from top left) */
var MYY = 0;
var MYX = 0;

/* the dimensions of the box */
var BHEIGHT = 90;
var BWIDTH = 90;

/* directions (negative is left or up) */
var DX = 2;
var DY = 2;

/* the shortest dimension */
var SHORTEST_DIM = 0;

var TICKSPEED = 1;


function update_app_dimensions(){
    AHEIGHT = $(window).height();
    AWIDTH = $(window).width();
    SHORTEST_DIM = AHEIGHT <= AWIDTH ? AHEIGHT : AWIDTH;
}

function reposition_clock(){
    $("#the-clock").css("line-height", AHEIGHT + "px");
}

function update_clock(){
    var currentdate = new Date();
    var hours = currentdate.getHours();
    hours = (hours > 12 ? (hours % 12) : hours);
    var mins = currentdate.getMinutes();
    mins = (String(mins).length < 2 ? ("0"+mins) : mins);
    $("#the-clock").text(hours + ":" + mins);
}

function restart(){
    MYX = 0;
    MYY = 0;
}

function initialize_boxy_brown(){
    $("#boxy-brown").css("width", BWIDTH + "px")
        .css("height", BHEIGHT + "px")
        .css("margin-left", MYX + "px")
        .css("margin-top", MYY + "px");
}

function update_position(){
    $("#boxy-brown").css("margin-left", MYX + "px")
        .css("margin-top", MYY + "px");
}

function tick(){
    if( (MYX + BWIDTH) > AWIDTH || MYX < 0){
        DX = DX * -1;
    }
    if( (MYY + BHEIGHT) > AHEIGHT || MYY < 0 ){
        DY = DY * -1;
    }
    MYX = MYX + DX;
    MYY = MYY + DY;
    update_position();
}

function BlockMove(event) {
    // Tell Safari not to move the window.
    event.preventDefault() ;
}

function update_speed(val){
    DX = val;
    DY = val;
}

function update_size(val){
    BWIDTH = val;
    BHEIGHT = val;
    $("#boxy-brown").css("width", BWIDTH).css("height", BHEIGHT);
}
