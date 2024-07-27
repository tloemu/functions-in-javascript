const merge = [...new Set(a.concat(b))];
const shuffledArray = array.sort(() => Math.random() - 0.5); 
const resultingPromises = urls.map((url) => makHttpRequest(url));