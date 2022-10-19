/*< script src = "https://code.jquery.com/jquery-3.4.1.min.js"
integrity = "sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
crossorigin = "anonymous" > < /script>*/
"use strict";
var growthAmount = $("#circle-growth").children("option:selected").val();
var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900'
];

function distroy() {
    stop = true;
    $(".circle").css("width", 0);
    $(".circle").css("height", 0);
    $("#circle1").hide();

}

function kill() {
    setTimeout(distroy, 0);
}

function start() {
    let circlesNumber = $("#circle-number").children("option:selected").val();
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

                css: {
                    "color": "yellow",
                    "border-radius": `50%`,
                    "margin-left": marginLeft + "px",
                    "background-color": colorArray[i],
                    "top": top
                },
                click: function() {
                    $(this).hide();

                },

            })
            .appendTo("#container");
    }
    //$("#circle1").show();
    console.log("growth amount " + growthAmount);
    setInterval(function grow() {

        let growthAmount = parseInt($("#circle-growth").children("option:selected").val());
        let growthRate = $("#growth-rate").children("option:selected").val();
        let width = parseInt($(".circle").css("width"));
        let height = parseInt($(".circle").css("height"));

        let newHeigth = (height + growthAmount) + "px";
        let newWidth = (width + growthAmount) + "px";
        $(".circle").css("width", newWidth);
        $(".circle").css("height", newHeigth);
    }, parseInt($("#growth-rate").children("option:selected").val()));


}