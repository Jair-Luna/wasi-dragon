document.getElementById('illariBtn').addEventListener('click', () => {
	decir(document.getElementById('illariTxt').innerHTML);
});

document.getElementById('samiBtn').addEventListener('click', () => {
	decir(document.getElementById('samiTxt').innerHTML);
});

document.getElementById('kilariBtn').addEventListener('click', () => {
	decir(document.getElementById('kilariTxt').innerHTML);
});

document.getElementById('yanayBtn').addEventListener('click', () => {
	decir(document.getElementById('yanayTxt').innerHTML);
});

document.getElementById('unayBtn').addEventListener('click', () => {
	decir(document.getElementById('unayTxt').innerHTML);
});

document.getElementById('sayaniBtn').addEventListener('click', () => {
	decir(document.getElementById('sayaniTxt').innerHTML);
});

document.getElementById('antayBtn').addEventListener('click', () => {
	decir(document.getElementById('antayTxt').innerHTML);
});

document.getElementById('kusiBtn').addEventListener('click', () => {
	decir(document.getElementById('kusiTxt').innerHTML);
});

document.getElementById('tupacBtn').addEventListener('click', () => {
	decir(document.getElementById('tupacTxt').innerHTML);
});

document.getElementById('descBtn').addEventListener('click', () => {
	decir(document.getElementById('descTxt').innerHTML);
});

function decir(texto) {
	speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}
