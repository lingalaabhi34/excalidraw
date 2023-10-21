const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext("2d");
// c.beginPath();
// c.moveTo(200, 300); // starting point for the line.
// c.lineTo(400, 100); // ending point for the line.
// c.strokeStyle = "red";
// c.lineWidth = 10 ;
// // c.globalAlpha = 1;
// c.stroke(); // stroke function draws the line with black color from p1 to p2
// c.closePath();

// c.beginPath();
// c.strokeStyle = "red"; 
// c.lineWidth  = 4 ;
// c.moveTo( 100, 100 );  // p1
// c.lineTo( 300, 100 ); // p2
// c.stroke(); // p1 => p2
// c.closePath();
// c.beginPath();
// c.moveTo(300, 100 );
// c.lineTo( 350, 20 ) ;
// c.lineWidth = 2;
// c.strokeStyle = "blue"; 
// c.stroke();

canvas.addEventListener("mousedown", onMouseDown); 

let drawingColor = "blue";
let previousPosition = null ;

function onMouseDown(e) {
    previousPosition = [ e.clientX , e.clientY];
    c.strokeStyle = "blue";
    c.lineWidth = 5; 
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp); 
}

function onMouseMove(e){ 
    // for the first time inside this  
    let currentPosition = [ e.clientX , e.clientY ];
    // draw line from previous position to current position ;
    c.beginPath();
    c.moveTo(...previousPosition);
    c.lineTo(...currentPosition);
    c.stroke();
    c.closePath();
    previousPosition = currentPosition ;
}

function onMouseUp(e){ 
    canvas.removeEventListener("mousemove", onMouseMove);
}
// let isDrawing = false;
// let x = 0;
// let y = 0;

// canvas.addEventListener('mousedown', (e) => {
//   x = e.offsetX;
//   y = e.offsetY;
//   isDrawing = true;
// });

// canvas.addEventListener('mousemove', (e) => {
//   if (!isDrawing) return;
//   c.beginPath();
//   c.moveTo(x, y);
//   c.lineTo(e.offsetX, e.offsetY);
//   c.stroke();
//   x = e.offsetX;
//   y = e.offsetY;
// });
