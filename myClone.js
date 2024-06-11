const buildOutputPath = path.join(repositoryRootPath, 'out');
const arrayContains = (arr, element) => arr.includes(element);
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;