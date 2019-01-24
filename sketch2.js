

let data;
// let img1;

var song, analyzer;
var completion;
var playing = false;
var durationTotal;
var m; //mappin the mouseX


var year;
var min;
var max;
var city;
var sirenType;
var operationType;
var houseadress;
var memory;

var current;

var textleft;
var textleft;

// preload table data
function preload() {
  // song = loadSound('sirens - 21:11:2018, 16.44.mp3');
  // url = "https://www.youtube.com/embed/sEa_jChg8_A?autoplay=1"



  data = loadTable(
    'PRSA-adapted-aparrish.csv',
		'csv',
		'header');
}

function setup() {
  song = document.getElementById('sirenAudio');
  song.loop = true;
  song.play();
  createCanvas(1350, 50);



  // how many rows?
  console.log(data.getRowCount());
  // what are the columns?
  console.log(data.columns);

  textleft = createP('00:00 min',0,100);
  // var textright = text('09:00 min',940,100);
	textleft.style("font-size", 10+"px");
  textleft.style("color", 'white');
  textleft.style("font-family", 'Work Sans','sans-serif');
  textleft.position(50, 165);

  textright = createP('673:00 min');
  textright.style("font-size", 10+"px");
  textright.style("color", 'white');
  textright.style("font-family", 'Work Sans','sans-serif');
  textright.position(1350, 165);

  // img1.style("position", 'fixed');
  // img1.style("top", 260+"px");
  // img1.style("left", 50+"px");
  // img1.style("height", 370+"px");
  // img1.style("width", 700+"px");



// img2 = createImg()
// img3 = createImg()
// img4 = createImg()
// img5 = createImg()
// img6 = createImg()
// img7 = createImg()
// img8 = createImg()

}


function draw() {
  background(51,48,48);
  current = int(song.currentTime);
  //console.log(current);

  completion = current / int(song.duration);
  stroke(255);
  ellipse(completion*width, 20, 20, 20);
  //console.log(song.currentTime());

  updatedDisplay();
  //console.log(min);
push();
  stroke('white');
  strokeWeight(2);
  noFill();
  rect(0,0,1350,40);
pop();



}


function updatedDisplay() {

  for (var i = 0; i < data.rows.length; i++){

    min = data.rows[i].arr[0];
    max = data.rows[i].arr[1];

    //console.log('min: ' + min);
    if (current > min && current < max) {

      year = data.rows[i].arr[2];
      city = data.rows[i].arr[3];
      sirenType = data.rows[i].arr[4];
      operationType = data.rows[i].arr[5];
      houseadress = data.rows[i].arr[6];
      memory = data.rows[i].arr[7];

      document.getElementById('year').innerHTML = year;
      // document.getElementById('city').innerHTML = city;

      if(city == "haifa"){
        document.getElementById('imageContainer').style.display = "block";
      }else{
        document.getElementById('imageContainer').style.display = "none";
      }


      if(city == "haifa1"){
        document.getElementById('imageContainer6').style.display = "block";
      }else{
        document.getElementById('imageContainer6').style.display = "none";
      }

      if(city == "haifa2"){
        document.getElementById('imageContainer7').style.display = "block";
      }else{
        document.getElementById('imageContainer7').style.display = "none";
      }


      if(city == "haifa3"){
      document.getElementById('imageContainer8').style.display = "block";
      }else{
      document.getElementById('imageContainer8').style.display = "none";
      }

      if(city == "haifa4"){
      document.getElementById('imageContainer9').style.display = "block";
      }else{
      document.getElementById('imageContainer9').style.display = "none";
      }

      if(city == "Jerusalem"){
        document.getElementById('imageContainer2').style.display = "block";
      }else{
        document.getElementById('imageContainer2').style.display = "none";
      }


      if(city == "Tel Aviv"){
        document.getElementById('imageContainer3').style.display = "block";
      }else{
        document.getElementById('imageContainer3').style.display = "none";
      }

      if(city == "North of israel"){
        document.getElementById('imageContainer4').style.display = "block";
      }else{
        document.getElementById('imageContainer4').style.display = "none";
      }


      if(city == "South of Israel"){
        document.getElementById('imageContainer5').style.display = "block";
      }else{
        document.getElementById('imageContainer5').style.display = "none";
      }





      // document.getElementById('sirenType').innerHTML = sirenType;
      document.getElementById('operationType').innerHTML = operationType;
      document.getElementById('houseadress').innerHTML = houseadress;
      document.getElementById('memory').innerHTML = memory;
    }

}
}

function pressing(){
  if(mouseX>=0&&mouseX<=width&&mouseY>=0&&mouseY<=height){
  m = map(mouseX, 0, width, 0, song.duration);
  song.currentTime = m;
  console.log(song.currentTime);}
}

function mouseDragged() {
pressing();
  }

  function mousePressed() {
pressing();
    }


//video for haifa

var img = document.createElement("img");
var startUrl = "http://87.69.129.95:60001/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&q=0&";
var imgNum = 1544981061;
var endURL = "#.XBaKQtzoCjg.link";
var container = document.getElementById("imageContainer");
container.appendChild(img);
setInterval(autoRefresh, 3000);
function autoRefresh() {
  imgNum = Date.now().toString().substring(0, 10);
  img.src = startUrl + imgNum + endURL;
}



// video for Jerusalem
var img2 = document.createElement("img");
var startUrl2 = "http://81.218.159.40:60001/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&q=0&";
var imgNum2 = 1544005371;
var endURL2 = "#.XAem96uUJXY.link";
var container2 = document.getElementById("imageContainer2");
container2.appendChild(img2);
setInterval(autoRefresh2, 3000);

function autoRefresh2() {
  imgNum2 = Date.now().toString().substring(0, 10);
  img2.src = startUrl2 + imgNum2 + endURL2;
}


// video for Tel Aviv

var img3 = document.createElement("img");
var startUrl3 = "http://81.218.165.167:60001/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&q=0&";
var imgNum3 = 1543992044;
var endURL3 = "#.XAdy6fyuvlM.link";
var container3 = document.getElementById("imageContainer3");
container3.appendChild(img3);
setInterval(autoRefresh3, 3000);

function autoRefresh3() {
  imgNum3 = Date.now().toString().substring(0, 10);
  img3.src = startUrl3 + imgNum3 + endURL3;
}


// video for north

var img4 = document.createElement("img");
var startUrl4 = "http://192.116.61.96:60001/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&q=0&";
var imgNum4 = 1543992881;
var endURL4 = "#.XAd2LW550SI.link";
var container4 = document.getElementById("imageContainer4");
container4.appendChild(img4);
setInterval(autoRefresh4, 3000);

function autoRefresh4() {
  imgNum4 = Date.now().toString().substring(0, 10);
  img4.src = startUrl4 + imgNum4 + endURL4;
}



// video for south

var img5 = document.createElement("img");
var startUrl5 = "http://31.168.193.77:60001/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&q=0&";
var imgNum5 = 1543993085;
var endURL5 = " #.XAd27Z_soSs.link";
var container5 = document.getElementById("imageContainer5");
container5.appendChild(img5);
setInterval(autoRefresh5, 3000);

function autoRefresh5() {
  imgNum5 = Date.now().toString().substring(0, 10);
  img5.src = startUrl5 + imgNum5 + endURL5;
}


// video for haifa1

var img6 = document.createElement("img");
var startUrl6 = "http://62.90.210.10:90/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&q=0&";
var imgNum6 = 1544492175;
var endURL6 = " #.XA8UjFmQghc.link";
var container6 = document.getElementById("imageContainer6");
container6.appendChild(img6);
setInterval(autoRefresh6, 3000);

function autoRefresh6() {
  imgNum6 = Date.now().toString().substring(0, 10);
  img6.src = startUrl6 + imgNum6 + endURL6;
}


// video for haifa2

var img7 = document.createElement("img");
var startUrl7 = "http://46.117.83.250:60001/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&q=0&";
var imgNum7 = 1544492083;
var endURL7 = " #.XA8UMYhthwA.link";
var container7 = document.getElementById("imageContainer7");
container7.appendChild(img7);
setInterval(autoRefresh7, 3000);

function autoRefresh7() {
  imgNum7 = Date.now().toString().substring(0, 10);
  img7.src = startUrl7 + imgNum7 + endURL7;
}


// video for haifa3

var img8 = document.createElement("img");
var startUrl8 = "http://84.108.8.39:60001/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&q=0&";
var imgNum8 = 1544492039;
var endURL8 = " #.XA8UBHpS0qk.link";
var container8 = document.getElementById("imageContainer8");
container8.appendChild(img8);
setInterval(autoRefresh8, 3000);

function autoRefresh8() {
  imgNum8 = Date.now().toString().substring(0, 10);
  img8.src = startUrl8 + imgNum8 + endURL8;
}


// video for haifa4

var img9 = document.createElement("img");
var startUrl9 = "http://82.80.136.65:60001/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&q=0&";
var imgNum9 = 1544491986;
var endURL9 = " #.XA8T0B8sC1Q.link";
var container9 = document.getElementById("imageContainer9");
container9.appendChild(img9);
setInterval(autoRefresh9, 3000);

function autoRefresh9() {
  imgNum9 = Date.now().toString().substring(0, 10);
  img9.src = startUrl9 + imgNum9 + endURL9;
}
