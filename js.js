function Doremon (image,top,left,size,speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getDoremon = function (){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
    this.setSpeed = function (speed){
        this.Speed = speed;
    }
    this.moveRight = function (){
        this.left += 50
        console.log('ok:' + this.left);
    }
    this.moveDown = function (){
        this.top += 50
    }
}
var doremon = new Doremon("image001-15585993846731827889266.png",20,30,200,50);

function start(){
    if (doremon.top < window.innerHeight - doremon.size){
        doremon.moveDown();
    }
    if (doremon.left < window.innerWidth - doremon.size){
        doremon.moveRight();
    }

    document.getElementById('game').innerHTML = doremon.getDoremon();
    setTimeout(start,500)
}
start();