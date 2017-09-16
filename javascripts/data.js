"use strict";

const printToDom = require('./dom');
const loadGifs = require('./gifs');
const loadCategories = require('./categories');

let gifArray = [];

const errorFunction = () => {
	console.log("You broke everything. Thanks.");
};

//when the Gif loads
const whenGifsLoad = function (){
	gifArray = JSON.parse(this.responsetText).gifs;
	//TO DO: Load categories
	loadCategories(whenCategoriesLoad, errorFunction);
};

const whenCategoriesLoad = function(){
	let categoryArray = JSON.parse(this.responsetText).categories;
	// TO DO: Combine Arrays
	combineArrays(categoryArray);
};

const combineArrays = (categories) => {
	categories.forEach((category) => {
		gifArray.forEach((gif) => {
			if (gif.category === category.id) {
				gif.category.name = category.name;
				gif.categoryDataName = category.dataName;
			}
		});
	});
	//TO DO: call the print to DOM
	printToDom(gifArray);
};

//TO DO: set up 'initializer' - load gifs

const initializer = () => {
	loadGifs(whenGifsLoad, errorFunction);
};


module.exports = initializer;






