const setupDiv = document.getElementById('idSetup');
const punchlineDiv = document.getElementById('punchline');
const punchlineBtn = document.getElementById('punchlineBtn');
const newJokeBtn = document.getElementById('newJokeBtn');
const url = 'https://official-joke-api.appspot.com/jokes/programming/random';
let punchline;

punchlineBtn.addEventListener('click', getPunchLine);
newJokeBtn.addEventListener('click', getJoke);

function getPunchLine() {
	punchlineDiv.innerHTML = punchline;
	punchlineDiv.classList.add('bubble');
	punchlineBtn.classList.toggle('hidden');
	newJokeBtn.classList.toggle('hidden');
}

async function getJoke() {
	const jokePromise = await fetch(url);
	const joke = await jokePromise.json();
	setupDiv.innerHTML = joke[0].setup;
	punchline = joke[0].punchline;
	punchlineDiv.innerHTML = '';
	punchlineDiv.classList.remove('bubble');
	punchlineBtn.classList.toggle('hidden');
	newJokeBtn.classList.toggle('hidden');
}

getJoke();
