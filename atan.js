const intermediateAppPath = path.join(buildOutputPath, 'app');
const stringReverse = str => str.split("").reverse().join("");
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());