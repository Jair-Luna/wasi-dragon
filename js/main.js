document.getElementById('mainBtn').addEventListener('click', () => {
	decir(document.getElementById('mainTxt').innerHTML);
});

function decir(texto) {
	speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}
