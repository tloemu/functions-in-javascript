const result = await makeHttpRequest(url);
const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());