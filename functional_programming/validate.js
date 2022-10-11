"use strict";

function validate() {
    if (!validateHttpAddress() | !validatePassword()) {
        return false;
    }

}

function validatePassword() {

    let pattern = /[A-Za-z0-9]{10,}/;

    if (document.getElementById("password").value.match(pattern)) {
        alert("Password meet requirements")
        return true;
    } else {
        alert("Password must contain at least 10 characters in length and contain at least one number and one uppercase and lowercase letter");

        return false;
    }
}

function validateHttpAddress() {

    let pattern = /https?:\/\//;

    if (document.getElementById("httpAddress").value.match(pattern)) {
        alert("Http address meet requirements")
        return true;
    } else {
        alert("Address must start with either https:// or http://");

        return false;
    }
}