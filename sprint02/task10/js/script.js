'use strict';



const obj = {
	words: 'newspapers newspapers  books magazines'
};
console.log(obj);

function addWords(obj, wrds) {
	const currentWords = obj.words.split(' ').filter(Boolean);
	const newWords = wrds.split(' ').filter(Boolean);

	newWords.forEach((word) => {
		if (currentWords.indexOf(word) === -1) {
			currentWords.push(word);
		}
	});

	obj.words = currentWords.filter((word, index) => {
		return currentWords.indexOf(word) === index;
	}).join(' ');	
}
addWords(obj, 'radio newspapers   ');
console.log(obj);

function removeWords(obj, wrds) {
	let wordsArray = obj.words.split(' ');
	wordsArray = wordsArray.filter(word => !wrds.includes(word));
	obj.words = wordsArray.join(' ');
}
removeWords(obj, 'newspapers   radio');
console.log(obj);

function changeWords(obj, oldWrds, newWrds) {
	let arrWords = obj.words.split(' ');
	let oldWordsArray = oldWrds.split(' ');
	let newWordsArray = newWrds.split(' ');

	for (let i = 0; i < oldWordsArray.length; i++) {
		const oldWordIndex = arrWords.indexOf(oldWordsArray[i]);

		if (oldWordIndex !== -1) {
			arrWords.splice(oldWordIndex, 1, ...newWordsArray);
		}
	}
	obj.words = arrWords.filter((oldWordsArray, index) => {
		return arrWords.indexOf(oldWordsArray) === index;
	}).join(' ');
}
changeWords(obj, 'books radio  magazines', 'tv internet');
console.log(obj);
