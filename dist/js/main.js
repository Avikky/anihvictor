//Init on DOM load
document.addEventListener('DOMContentLoaded', init);

//Init app
function init() {
	const txtElement = document.querySelector('.txt-type');
	const words = JSON.parse(txtElement.getAttribute('data-words'));
	const wait = txtElement.getAttribute('data-wait');
	//Init typewriter
	new TypeWriter(txtElement, words, wait);
}


const html = new ProgressBar(document.querySelector('.html'), 80);

const css = new ProgressBar(document.querySelector('.css'), 65);

const javaScript = new ProgressBar(document.querySelector('.javascript'), 30);

const jquery = new ProgressBar(document.querySelector('.jquery'), 45);

const sql = new ProgressBar(document.querySelector('.sql'), 57);

const php = new ProgressBar(document.querySelector('.php'), 70);

const BootStrap = new ProgressBar(document.querySelector('.bootstrap'), 80);

const MaterialiseCss = new ProgressBar(document.querySelector('.materialised-css'), 78);