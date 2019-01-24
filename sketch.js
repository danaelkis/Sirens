let data;
let img1;

var song, analyzer;
var completion;
var playing = false;
var durationTotal;
var m; //mappin the mouseX


// preload table data
function preload() {
  song = loadSound('sirens - 21:11:2018, 16.44.mp3');
  data = loadTable(
    'PRSA-adapted-aparrish.csv',
		'csv',
		'header');



}

function setup() {
  createCanvas(710, 200);
	song.loop();

  // how many rows?
  console.log(data.getRowCount());
  // what are the columns?
  console.log(data.columns);

  // getColumn evaluates to a list of all the values
  // in the column with the given name.
  let year = data.getColumn("Year");
  let min = data.getColumn("Min");
  let max = data.getColumn("Max");
  let city = data.getColumn("Where");
  let sirenType = data.getColumn("SirenType");
  let operationType = data.getColumn("OperationType");
  let houseadress = data.getColumn("Address");
  let memory = data.getColumn("MemoryText");

  // p5js, they can be just plain HTML.
createP(year[1]).addClass('text');
createP(operationType[1]).addClass('text');
createP(city[1]).addClass('text');
createP(houseadress[1]).addClass('text');
createP(memory[1]).addClass('text');

img1 = createImg('http://109.186.54.90:60001/cgi-bin/snapshot.cgi?chn=0&u=admin&p=&q=0&1543263403#.W_xUqZiB0yM.link');
// img2 = createImg()
// img3 = createImg()
// img4 = createImg()
// img5 = createImg()
// img6 = createImg()
// img7 = createImg()
// img8 = createImg()
}


function draw() {
  background(50);

  completion = song.currentTime / song.duration;
  ellipse(completion*width, 50, 20, 20);
  console.log(song.currentTime;
}




function display() {
 // text(title, position.... );
  // img(url..);
// text(title, position.... );

}

function updatedDisplay() {
  for (i=0; i < data.length; i++){

    if song.currentTime > data[i].timemin && song.currentTime <  data[i].timemax {
    video = data[i].links
    title = data[i].titles
    description = data[i].memorytext

    }
}


function mouseDragged() {
  m = map(mouseX, 0, width, 0, 540);
  song.jump(m);
  }
