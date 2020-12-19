function setup(){
    canvas = createCanvas(650, 650);
    canvas.position(350, 250)
    video = createCapture(VIDEO);
    video.hide()

    tint_color = "";


    circle(50, 50, 70)
    ellipse(56, 46, 55, 55);
    ellipse(62, 42, 40, 45);

    circle(300, 50, 70)
    ellipse(306, 50, 55, 55);
    ellipse(312, 50, 40, 45);

    circle(50, 350, 70)
    ellipse(56, 346, 55, 55);
    ellipse(62, 342, 40, 45);

    circle(50, 350, 70)
    ellipse(56, 346, 55, 55);
    ellipse(62, 342, 40, 45);

    circle(50, 600, 70)
    ellipse(56, 596, 55, 55);
    ellipse(62, 592, 40, 45);

    circle(300, 600, 70)
    ellipse(306, 596, 55, 55);
    ellipse(312, 592, 40, 45);

    circle(600, 600, 70)
    ellipse(606, 596, 55, 55);
    ellipse(612, 592, 40, 45);

    circle(600, 50, 70)
    ellipse(606, 46, 55, 55);
    ellipse(612, 42, 40, 45);

    circle(600, 350, 70)
    ellipse(606, 346, 55, 55);
    ellipse(612, 342, 40, 45);

}

function preload(){
}

function draw() {
    image(video, 100, 100, 450, 450);
    tint(tint_color);
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}