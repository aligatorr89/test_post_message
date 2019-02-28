"use strict";

class FrameSquares {
	
	constructor() {
		
		this.squareElements = document.getElementsByClassName("square");
		
		for(let i = 0; i < this.squareElements.length; i++) {
			
			this.squareElements[i].addEventListener("mouseover", this.postMessage.bind({index: i, name: "mouseover"}));
			
			this.squareElements[i].addEventListener("mouseleave", this.postMessage.bind({index: i, name: "mouseleave"}));
		}
		
	}
	
	postMessage() {
		const _self = this;
		window.parent.postMessage(_self, "*");
	}
	
}

const frameSquares = new FrameSquares();

module.exports = frameSquares;






