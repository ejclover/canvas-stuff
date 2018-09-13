var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//c.fillStyle="red";

// c.fillRect(100,100,100,100);
// c.fillStyle="blue";
// c.fillRect(100,500,100,100);
// c.fillStyle="green";
// c.fillRect(200,200,100,100);

// //line stuff

 

//arc stuff
// c.beginPath();
// c.arc(300,300,30,0,Math.PI * 2, false);
// c.strokeStyle = "blue";
// c.stroke();


// for(var i =0;i<3;i++){
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     var r = Math.floor(Math.random() * 256);
//     var g = Math.floor(Math.random() * 256);
//     var b = Math.floor(Math.random() * 256);
//     var rgb = 'rgba('+r+ ', ' +g+ ', ' +b+ ', ' +0.9+ ')';
 
//     c.beginPath();
//     c.arc(x,y,30,0,Math.PI * 2, false);
//     c.strokeStyle = rgb;
//     c.stroke();
    
    
    
    
// }

var mouse = {
    
    x: undefined,
    y: undefined
    
    
}

var maxRadius = 10;
var maxSpeed = 15;

var minRadius = 50;

var colorArray = [
    '#BEB8EB',
    '#5299D3',
    '#0B5563',
    '#A2BCE0',
    '#5E5C6C'
    ];

    


window.addEventListener('mousemove', function(event){
    
    mouse.x = event.x;
    mouse.y = event.y;
    
    
})
/*
window.addEventListener('resize',function(){
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    init();
    
})
*/


function Circle(x,y,dx,dy,radius,){
    this.x=x;
    this.y=y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random()*colorArray.length)];
    
    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false);
        
        c.fillStyle = this.color
        c.fill()
        
        
        
    }
    
    this.update = function(){
        if(this.y+this.radius > innerHeight-100){
            this.dx=0;
            this.dy=0;
        }
         if (this.x + this.radius >innerWidth || this.x - this.radius < 0){
             this.dx = -this.dx;
        
        }
        if (this.y + this.radius >innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        
    }
        this.x+=this.dx;
        this.y+=this.dy;
        
        //interactivity
        
        if(mouse.x - this.x < 60 && mouse.x - this.x > -60 && mouse.y - this.y <60 && mouse.y -this.y > -60){
            this.dx  = -this.dx;
            this.dy = -this.dy;
            if(this.dx < maxSpeed && this.dy < maxSpeed){
            
                this.dx = this.dx + 5;
                this.dy = this.dy + 5;
            }
            
        }
        
        
        this.draw();
    
        
        
        
    }
}




var circleArray = [];

for(var i =0; i < 1; i++){
    var radius = 20;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight-100 - radius * 2) + radius;
    var dx = (Math.random() * 5 ) ;
    var dy =  (Math.random() * 5 );
    

    
    circleArray.push(new Circle(x,y,dx,dy,radius));
    
    
    
}


   


function init(){
    circleArray = [];
    for(var i =0; i < 750; i++){
    var radius = Math.random() * 3 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight+100 - radius * 2) + radius;
    var dx= (Math.random() -0.5) ;
    var dy =  (Math.random() -0.5);
    

    
    //circleArray.push(new Circle(x,y,dx,dy,radius));
    
    
    
}

    
    
}

function Line(x,y){
c.beginPath();
 c.moveTo(0,innerHeight-100);
 c.lineTo(innerWidth,innerHeight-100);
 c.lineWidth = 5;
 
 c.strokeStyle = "red";
 c.stroke();
    
}

function animate(){
    requestAnimationFrame(animate);
    
    c.clearRect(0,0,innerWidth,innerHeight);
    Line(10,10);
   for(var i = 0; i < circleArray.length; i ++){
       
       
       circleArray[i].update();
       
   }
    
    
 
}

animate();