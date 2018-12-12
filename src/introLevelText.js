function narrator1 () {
	gameAction = "type your name and press enter.";
	update();

}

function narrator2() {

	name = document.getElementById('playerInput').value
	gameAction = name + ", nice to meet you!"
	update();
}

narrator1();



								