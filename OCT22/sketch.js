// copyright
// flxblyy2022

// variables
let pageNum = 0;
let value = 0;

function preload() {
  ibmR = loadFont("fonts/IBMPLEXSANS-REGULAR.TTF");
  ibmB = loadFont("fonts/IBMPLEXSANS-BOLD.TTF");
  ibmS = loadFont("fonts/IBMPLEXSANS-SEMIBOLD.TTF");
  ibmRkr = loadFont("fonts/IBMPLEXSANSKR-REGULAR.TTF");
  ibmBkr = loadFont("fonts/IBMPLEXSANSKR-BOLD.TTF");
  ibmSkr = loadFont("fonts/IBMPLEXSANSKR-SEMIBOLD.TTF");
  vogue = loadFont("fonts/VOGUE.TTF");

  // content images
  img01 = loadImage("contents/01.png");
  img02 = loadImage("contents/02.png");
  img03 = loadImage("contents/03.png");
  img04 = loadImage("contents/04.png");
  img05 = loadImage("contents/05.png");
  img06 = loadImage("contents/06.png");
  img07 = loadImage("contents/07.png");
  img08 = loadImage("contents/08.png");
  img09 = loadImage("contents/09.png");
  img10 = loadImage("contents/10.png");
  img11 = loadImage("contents/11.png");
}

function setup() {
  createCanvas(1080, 1080);

  // page jump through buttons
  buttonP = createButton("prev");
  buttonP.position(745, 1036);
  buttonP.style("font-size", "30px");
  buttonP.mousePressed(buttonPClicked);
  buttonN = createButton("next");
  buttonN.style("font-size", "30px");
  buttonN.position(825, 1036);
  buttonN.mousePressed(buttonNClicked);
  buttonR = createButton("reset");
  buttonR.style("font-size", "30px");
  buttonR.position(904, 1036);
  buttonR.mousePressed(buttonRClicked);

  // save current page button
  buttonS = createButton("save");
  buttonS.style("font-size", "30px");
  buttonS.style("color", color(16, 46, 200));
  buttonS.position(994, 1036);
  buttonS.mousePressed(saveToPNG);
}

function draw() {
  background(240);

  // cover page
  if (pageNum == 0) {
    // color template
    fill(200, 16, 46);
    noStroke();
    rect(0, 0, 100, 1080);

    // title
    stroke(35, 4, 10);
    strokeWeight(3);
    line(300, 180, 880, 180);
    line(300, 605, 880, 605);

    noStroke();
    textAlign(CENTER, CENTER);
    textFont(vogue);
    textSize(140);
    fill(35, 4, 10);
    textLeading(120);
    text("Category\nInsight\nMagazine", width * 0.54, height * 0.36);

    // month
    textSize(50);
    text("Oct, 2022", width * 0.54, height * 0.65);

    // contact
    textAlign(CENTER, BOTTOM);
    textFont(ibmR);
    textSize(30);
    fill(135, 135, 135);
    text("YKim137@ITS.JNJ.com", width * 0.55, 1030);

    // copyright
    textAlign(LEFT, BOTTOM);
    textFont(ibmS);
    textSize(13);
    fill(217, 88, 109);
    text("© flxblyy2022", 7, 1070);

    // check current page
    textAlign(RIGHT, BOTTOM);
    textFont(ibmR);
    textSize(20);
    fill(135, 135, 135);
    text(pageNum, 1060, 1060);
  }

  if (pageNum == 1) {
    // index title position
    textAlign(LEFT, TOP);
    textFont(ibmB);
    textSize(55);
    fill(200, 16, 46);
    noStroke();
    text("Index", 50, 40);

    // category buttons
    noStroke();

    // button 1 function
    if (overRect(90, 200, 900, 150)) {
      push();
      stroke(240, 184, 49);
      strokeWeight(10);
      noFill();
      rect(90, 200, 900, 150);
      pop();
    } else {
      noStroke();
    }

    // button 1
    fill(0, 181, 226);
    rect(150, 200, 840, 150);
    fill(81, 210, 231);
    rect(90, 200, 60, 150);
    // button 1 text
    textAlign(LEFT, TOP);
    textFont(ibmB);
    fill(225);
    textSize(40);
    text("Total", 220, 245);

    // button 2 function
    if (overRect(90, 400, 900, 150)) {
      push();
      stroke(165, 136, 255);
      strokeWeight(10);
      noFill();
      rect(90, 400, 900, 150);
      pop();
    } else {
      noStroke();
    }

    // button 2
    fill(255, 130, 1);
    rect(150, 400, 840, 150);
    fill(240, 184, 49);
    rect(90, 400, 60, 150);
    // button 2 text
    fill(225);
    text("Mouthwash", 220, 445);

    // button 3 function
    if (overRect(90, 600, 900, 150)) {
      push();
      stroke(254, 159, 195);
      strokeWeight(10);
      noFill();
      rect(90, 600, 900, 150);
      pop();
    } else {
      noStroke();
    }

    // button 3
    fill(109, 194, 75);
    rect(150, 600, 840, 150);
    fill(76, 220, 162);
    rect(90, 600, 60, 150);
    // button 3 text
    fill(225);
    text("Cleansing", 220, 645);

    /*
    // button 4
    fill(117, 59, 189);
    rect(150, 800, 840, 150);
    fill(165, 136, 255);
    rect(90, 800, 60, 150);
    // button 4 text
    fill(225);
    text("Category 4", 220, 845);
    */

    // check current page
    textAlign(RIGHT, BOTTOM);
    textFont(ibmR);
    textSize(20);
    fill(135, 135, 135);
    text(pageNum, 1060, 1060);
  }

  if (pageNum == 2) {
    // Top-left corner of the img is at (0, 0)
    // Width and height are the img's original width and height
    image(img01, 0, 0);

    // check current page
    textAlign(RIGHT, TOP);
    textFont(ibmR);
    textSize(20);
    fill(135, 135, 135);
    text(pageNum, 1060, 20);
  }

  if (pageNum == 3) {
    // Top-left corner of the img is at (0, 0)
    // Width and height are the img's original width and height
    image(img02, 0, 0);

    // check current page
    textAlign(RIGHT, TOP);
    textFont(ibmR);
    textSize(20);
    fill(135, 135, 135);
    text(pageNum, 1060, 20);
  }

  if (pageNum == 4) {
    // Top-left corner of the img is at (0, 0)
    // Width and height are the img's original width and height
    image(img03, 0, 0);

    // check current page
    textAlign(RIGHT, TOP);
    textFont(ibmR);
    textSize(20);
    fill(135, 135, 135);
    text(pageNum, 1060, 20);
  }

  if (pageNum == 5) {
    // Top-left corner of the img is at (0, 0)
    // Width and height are the img's original width and height
    image(img04, 0, 0);

    // check current page
    textAlign(RIGHT, TOP);
    textFont(ibmR);
    textSize(20);
    fill(135, 135, 135);
    text(pageNum, 1060, 20);
  }

  if (pageNum == 6) {
    // Top-left corner of the img is at (0, 0)
    // Width and height are the img's original width and height
    image(img05, 0, 0);

    // check current page
    textAlign(RIGHT, TOP);
    textFont(ibmR);
    textSize(20);
    fill(135, 135, 135);
    text(pageNum, 1060, 20);
  }

  if (pageNum == 7) {
    // Top-left corner of the img is at (0, 0)
    // Width and height are the img's original width and height
    image(img06, 0, 0);

    // check current page
    textAlign(RIGHT, TOP);
    textFont(ibmR);
    textSize(20);
    fill(135, 135, 135);
    text(pageNum, 1060, 20);
  }

  if (pageNum == 8) {
    // Top-left corner of the img is at (0, 0)
    // Width and height are the img's original width and height
    image(img07, 0, 0);

    // check current page
    textAlign(RIGHT, TOP);
    textFont(ibmR);
    textSize(20);
    fill(135, 135, 135);
    text(pageNum, 1060, 20);
  }

  if (pageNum == 9) {
    // Top-left corner of the img is at (0, 0)
    // Width and height are the img's original width and height
    image(img08, 0, 0);

    // check current page
    textAlign(RIGHT, TOP);
    textFont(ibmR);
    textSize(20);
    fill(135, 135, 135);
    text(pageNum, 1060, 20);
  }

  if (pageNum == 10) {
    // Top-left corner of the img is at (0, 0)
    // Width and height are the img's original width and height
    image(img09, 0, 0);

    // check current page
    textAlign(RIGHT, TOP);
    textFont(ibmR);
    textSize(20);
    fill(135, 135, 135);
    text(pageNum, 1060, 20);
  }

  if (pageNum == 11) {
    // Top-left corner of the img is at (0, 0)
    // Width and height are the img's original width and height
    image(img10, 0, 0);

    // check current page
    textAlign(RIGHT, TOP);
    textFont(ibmR);
    textSize(20);
    fill(135, 135, 135);
    text(pageNum, 1060, 20);
  }

  // reference page
  if (pageNum == 12) {
    // Top-left corner of the img is at (0, 0)
    // Width and height are the img's original width and height
    image(img11, 0, 0);

    // link button function
    if (overRect(300, 375, 480, 150)) {
      push();
      stroke(1, 181, 226);
      strokeWeight(10);
      noFill();
      rect(300, 375, 480, 150);
      pop();
    } else {
      noStroke();
    }
    // link button
    fill(200, 16, 46);
    noStroke();
    rect(300, 375, 480, 150);

    // button text
    textAlign(CENTER, TOP);
    textFont(ibmB);
    textSize(35);
    fill(225);
    text("↗ SharePoint", width * 0.5, height * 0.39);

    // check current page
    textAlign(RIGHT, TOP);
    textFont(ibmR);
    textSize(20);
    fill(135, 135, 135);
    text(pageNum, 1060, 20);
  }

  // end of page
  if (pageNum > 12) {
    textAlign(CENTER, CENTER);
    textFont(ibmR);
    textSize(30);
    fill(135, 135, 135);
    text(
      "click RESET button below to move to the first page",
      width * 0.5,
      height * 0.5
    );
  }
}

// page moving functions
function buttonPClicked() {
  // move to previous page
  pageNum -= 1;
}
function buttonNClicked() {
  // move to next page
  pageNum += 1;
}
function buttonRClicked() {
  // move to start page
  pageNum = 0;
}

// rectangular button function
function overRect(x, y, w, h) {
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    return true;
  } else {
    return false;
  }
}

function mousePressed() {
  // page movement by mouse click function
  if (
    pageNum == 1 &&
    90 < mouseX &&
    mouseX < 990 &&
    200 < mouseY &&
    mouseY < 350
  ) {
    // button 1 to page2
    pageNum = 2;
  } else if (
    pageNum == 1 &&
    90 < mouseX &&
    mouseX < 990 &&
    400 < mouseY &&
    mouseY < 550
  ) {
    // button 2 to page6
    pageNum = 6;
  } else if (
    pageNum == 1 &&
    90 < mouseX &&
    mouseX < 990 &&
    600 < mouseY &&
    mouseY < 750
  ) {
    // button3 to page10
    pageNum = 10;
  } else if (
    pageNum == 12 &&
    300 < mouseX &&
    mouseX < 780 &&
    375 < mouseY &&
    mouseY < 525
  ) {
    // sharepoint hyperlink
    window.open(
      "https://jnj.sharepoint.com/:f:/t/CON-TEAM-SHARED_12/conkr/CD/EisZB7DKkQtMm1J9Hx06-9YBtRXJjlk0eCzvsX_cfUrXmA?e=UVBgzD"
    );
  }
}

// save img as png function
function saveToPNG() {
  saveCanvas("insightmagazine", "png");
}
