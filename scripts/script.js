// JavaScript Document
const deButton = document.querySelector("header section button");
const nav = document.querySelector("header nav");

const deVideoButton = document.querySelector("main section:nth-of-type(1) button");
const deVideo = document.querySelector("video");
const deVideoButtonImage = document.querySelector("main section:nth-of-type(1) button img");

deButton.onclick = ()=> {
  deButton.classList.toggle("is-open");
  nav.classList.toggle("open");
};

deVideoButton.onclick =toggleVideo;



function toggleVideo () {
	
	if ( deVideo.paused === true) {
		deVideo.play();
        deVideoButtonImage.src = "images/pauzeafbeelding.svg"
		deVideoButtonImage.alt = "pauzeren";
		
	} else {
		deVideo.pause();
        deVideoButtonImage.src = "images/playafbeelding.svg"
		deVideoButtonImage.alt = "play";
	}
	
}
