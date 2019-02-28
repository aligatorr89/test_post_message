"use strict";

class IndexSquares {
	
	constructor() {
		this.squareElements = document.getElementsByClassName("square");
	}
	
	colorSquare(event) {
		if(event.name === "mouseover") this.squareElements[event.index].classList.add("over");
		else if(event.name === "mouseleave") this.squareElements[event.index].classList.remove("over");
	}
	
}


const indexSquares = new IndexSquares();

const receiveMessage = message => {
	indexSquares.colorSquare(message.data);
}

window.addEventListener("message", receiveMessage, false);

module.exports = indexSquares;


