console.log("Koordynaty");
let box = document.getElementById("moveMe");
let move = document.getElementById("move")
move.addEventListener('click', ()=>{
	console.log("Moving");
	box.style.position="absolute";
	box.style.top="150px";
	box.style.left="150px";
});
