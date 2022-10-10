window.onload = function() {
    "use strict";

    let delayTime = 250;
    let animator = undefined;
    let textAreaValue = null;
    var startButton = document.getElementById("start");
    var stopButton = document.getElementById("stop");
    var animationSelector = document.getElementById("animation");
    var sizeSelector = document.getElementById("fontsize");
    var speedCheckbox = document.getElementById("turbo");
    var textArea = document.getElementById("text-area");

    startButton.onclick = onStartClick;
    stopButton.onclick = onStopClick;
    animationSelector.onchange = onAnimationSelector;
    sizeSelector.onchange = onSizeSelector;
    speedCheckbox.onchange = onSpeedSelector;

    function onStartClick() {
        startButton.disabled = true;
        animationSelector.disabled = true;
        stopButton.disabled = false;
        animation(textAreaValue, delayTime);
    }

    function onStopClick() {
        startButton.disabled = false;
        animationSelector.disabled = false;
        stopButton.disabled = true;

        clearInterval(animator);
    }

    function onAnimationSelector() {
        displayAnimation();
    }

    function onSizeSelector() {
        var selectedValue = sizeSelector.value;
        if (selectedValue == "Tiny") {
            textArea.style.fontSize = "8px";
        } else if (selectedValue == "Small") {
            textArea.style.fontSize = "12px";
        } else if (selectedValue == "Medium") {
            textArea.style.fontSize = "16px";
        } else if (selectedValue == "Large") {
            textArea.style.fontSize = "20px";
        } else if (selectedValue == "Extra Large") {
            textArea.style.fontSize = "24px";
        } else if (selectedValue == "XXL") {
            textArea.style.fontSize = "30px";
        }

    }

    function onSpeedSelector() {
        // if (speedCheckbox.checked) {
        //   delayTime = 50;
        // } else {
        //   delayTime = 250;
        // }
        // if (startButton.disabled) {
        //   animation(textAreaValue, delayTime);
        // }
        // console.log(speedCheckbox.checked);
        // console.log(startButton.disabled);

        startButton.disabled && speedCheckbox.checked ?
            animation(textAreaValue, 50) :
            animation(textAreaValue, 250);
    }

    function animation(textValue, timer) {
        let i = 0;
        let frame = textValue.split("=====\n");
        clearInterval(animator);
        animator = setInterval(function() {
            textArea.value = frame[i];
            i++;
            if (i == frame.length) {
                i = 0;
            }
        }, timer);
    }

    function displayAnimation() {
        var selectedAnimation = animationSelector.value;
        textAreaValue = ANIMATIONS[selectedAnimation];
        textArea.value = textAreaValue;
    }
};