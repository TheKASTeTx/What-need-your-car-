const btnSearch = document.querySelector('.question-area__search');
const inputBrand = document.querySelector('.brand');
const inputModel = document.querySelector('.model');
const error = document.querySelector('.question-area__error');
const answer = document.querySelector('.question-area__answer');
const btnTranslate = document.querySelector('.box__language');
const box = document.querySelector('.box');
const title = box.querySelector('.box__info__title');
const description = box.querySelector('.box__info__description');
const year = document.querySelector('.year');

const partsArrEn = [
	'New tires',
	'Bodykit',
	'Carbon splitter',
	'Shower :D',
	'More power',
	'Repairs',
	'New engine',
	'Turbo kit',
	'New rims',
	'Ceramic coatings',
];

const partsArrPl = [
	'Nowe opony',
	'Bodykit',
	'Karbonowe dokładki',
	'Prysznic :D',
	'Więcej mocy',
	'Naprawy',
	'Nowy silnik',
	'Zestaw turbo',
	'Nowe felgi',
	'Powłoki ceramicznej',
];

let currentArray = partsArrEn;

const pulse = () => {
	box.classList.add('animation');
};

const currentInput = () => {
	if (box.classList.contains('english')) {
		if (inputBrand.value === '' && inputModel.value === '') {
			error.textContent = 'Podaj markę i model!';
		} else if (inputBrand.value === '') {
			error.textContent = 'Uzupełnij markę!';
		} else if (inputModel.value === '') {
			error.textContent = 'Uzupelnij model!';
		} else {
			pulse();
			setTimeout('randomAnswer(currentArray)', 2000);
			error.textContent = '';
		}
	} else {
		if (inputBrand.value === '' && inputModel.value === '') {
			error.textContent = 'Complete model and brand!';
		} else if (inputBrand.value === '') {
			error.textContent = 'Complete brand!';
		} else if (inputModel.value === '') {
			error.textContent = 'Complete model!';
		} else {
			pulse();
			setTimeout('randomAnswer(currentArray)', 2000);
			error.textContent = '';
		}
	}
};

const randomAnswer = (array) => {
	const randomIndex = Math.floor(Math.random() * array.length);
	answer.textContent = array[randomIndex];
	box.classList.remove('animation');
};

const translate = () => {
	box.classList.toggle('english');

	if (box.classList.contains('english')) {
		btnTranslate.innerHTML = 'translate to english';
		btnSearch.innerHTML =
			'Wyszukaj części <i class="fa-solid fa-screwdriver-wrench"></i>';
		title.textContent = 'Czego potrzebuje Twój samochód?';
		description.textContent =
			'Wprowadź markę swojego samochodu i kliknij przycisk!';
		inputBrand.placeholder = 'Marka:';
		inputModel.placeholder = 'Model:';
		currentArray = partsArrPl;
	} else {
		btnTranslate.innerHTML = 'translate to polish';
		btnSearch.innerHTML =
			'Search for parts <i class="fa-solid fa-screwdriver-wrench"></i>';
		title.textContent = 'What need your car?';
		description.textContent =
			'Enter the make of your car, and click the button!';
		inputBrand.placeholder = 'Brand:';
		inputModel.placeholder = 'Model:';
		currentArray = partsArrEn;
	}
};

const eng = document.querySelector('.box__language');

eng.addEventListener('click', translate);

btnSearch.addEventListener('click', currentInput);

year.textContent = new Date().getFullYear();
