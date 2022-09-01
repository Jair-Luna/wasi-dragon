document.getElementById('bolipounk16Btn').addEventListener('click', () => {
	decir(document.getElementById('bolipounk16Txt').innerHTML);
});

document.getElementById('DavrobrineBtn').addEventListener('click', () => {
	decir(document.getElementById('DavrobrineTxt').innerHTML);
});

document.getElementById('Alex90JBtn').addEventListener('click', () => {
	decir(document.getElementById('Alex90JTxt').innerHTML);
});

document.getElementById('4nd3r50n50Btn').addEventListener('click', () => {
	decir(document.getElementById('4nd3r50n50Txt').innerHTML);
});

document.getElementById('Salvatore_22Btn').addEventListener('click', () => {
	decir(document.getElementById('Salvatore_22Txt').innerHTML);
});

function decir(texto) {
	speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}
