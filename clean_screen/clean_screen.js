/*< script src = "https://code.jquery.com/jquery-3.4.1.min.js"
integrity = "sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
crossorigin = "anonymous" > < /script>*/
"use strict";
var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900'
];
let stop = false;

function grow(growthRate) {

    let width = parseInt($(this).css("width"));
    let height = parseInt($(this).css("height"));
    let newHeigth = height + growthRate + "px";
    let newWidth = width + growthRate + "px";
    $(".circle").css("width", newWidth);
    $(".circle").css("height", newHeigth);
    console.log("growing height: ");
}

function createCircles() {

}

function distroy() {
    stop = true;
    $("#circle1").hide();

}

function kill() {
    setTimeout(distroy, 0);
}

function start() {
    let circlesNumber = $("#circle-number").children("option:selected").val();
    let growthRate = $("#growth-rate").children("option:selected").val();
    let growthAmount = $("#circle-growth").children("option:selected").val();
    let circleWidth = $("#circle-width").children("option:selected").val();

    for (let i = 0; i < circlesNumber; i++) {
        const min = 100;
        const max = 500;
        const marginLeft = Math.floor(Math.random() * (max - min + 1) + min);
        const top = 110;
        const width = circleWidth + "px";
        const height = circleWidth + "px";
        $("<div/>", {
                "position": "absolute",
                class: "circle",
                width: circleWidth + "px",
                height: circleWidth + "px",
                backgroundColor: "red",

                top: top + "px",
                text: "circle",
                color: "yellow",

                css: {
                    "color": "yellow",
                    "border-radius": `50%`,
                    "margin-left": marginLeft + "px",
                    "background-color": colorArray[i],
                    "top": top
                },
                click: function() {
                    $(this).hide();
                }
            })
            .appendTo("#container");
        console.log("color " + colorArray[i]);
        console.log("margin left " + marginLeft + "px");
        console.log("top " + top + "px");
        console.log("circle number " + i);
        console.log("margin-left " + marginLeft + "px");
    }
    console.log(circlesNumber);
    //$("#circle1").show();

    setInterval(grow(), 200);


}