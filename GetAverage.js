const arrayContains = (arr, element) => arr.includes(element);
const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);