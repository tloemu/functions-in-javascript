const shuffledArray = array.sort(() => Math.random() - 0.5); 
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));