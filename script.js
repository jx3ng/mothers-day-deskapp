// script.js

// first page
function spinFlower() {
    console.log("Flower clicked");
    const flower = document.getElementById('flower');
    flower.style.transition = "transform 2s";
    flower.style.transform = "rotate(360deg)";

    setTimeout(() => {
        console.log("Navigating to the next page");
        window.location.href = 'second_page.html';
    }, 2000);
}

// second page

function confirmXuan() {
    // When "Xuan" is clicked, transition to the third page
    console.log("Xuan button clicked");
    window.location.href = 'third_page.html';
}

let clickCount = 0;

function handleShrink() {
    clickCount++;

    switch (clickCount) {
        case 1:
            shrinkOther1();
            break;
        case 2:
            shrinkOther2();
            break;
        case 3:
            shrinkOther3();
            break;
        case 4:
            shrinkOther4();
            break;
        default:
            console.log("No more functions to call.");
            break;
    }
}

function shrinkOther1() {
    console.log("First click - Shrink and Move Right");
    const otherButton = document.getElementById("otherButton");
    otherButton.style.width = "110px";
    otherButton.style.height = "60px";
    otherButton.style.position = "absolute";
    otherButton.style.left = "1000px";
    otherButton.style.top = "420px";
    const xuanButton = document.getElementById("xuanButton");
    xuanButton.style.width = "250px";
    xuanButton.style.position = "absolute";
    xuanButton.style.left = "400px";
    xuanButton.style.top = "200px";
}

function shrinkOther2() {
    console.log("Second click - Shrink and Move Down");
    const otherButton = document.getElementById("otherButton");
    otherButton.style.width = "95px";
    otherButton.style.height = "47px";
    otherButton.style.fontSize = "12px";
    otherButton.style.position = "absolute";
    otherButton.style.left = "100px";
    otherButton.style.top = "100px";
    const xuanButton = document.getElementById("xuanButton");
    xuanButton.style.width = "400px";
    xuanButton.style.position = "absolute";
    xuanButton.style.left = "400px";
    xuanButton.style.top = "180px";
}

function shrinkOther3() {
    console.log("Third click - Shrink and Move Left");
    const otherButton = document.getElementById("otherButton");
    otherButton.style.width = "60px";
    otherButton.style.height = "40px";
    otherButton.style.fontSize = "9px";
    otherButton.style.position = "absolute";
    otherButton.style.left = "400px";
    otherButton.style.top = "600px";
    const xuanButton = document.getElementById("xuanButton");
    xuanButton.style.width = "500px";
    xuanButton.style.position = "absolute";
    xuanButton.style.left = "380px";
    xuanButton.style.top = "160px";
}

function shrinkOther4() {
    console.log("Fourth click - Shrink and Move Up");
    const otherButton = document.getElementById("otherButton");
    otherButton.style.display = 'none';
    const xuanButton = document.getElementById("xuanButton");
    xuanButton.style.width = "680px";
    xuanButton.style.position = "absolute";
    xuanButton.style.left = "285px";
    xuanButton.style.top = "110px";
}

// third page
function goHome() {
    window.location.href = "index.html"; 
}

