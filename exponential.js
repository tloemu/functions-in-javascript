const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const arrayContains = (arr, element) => arr.includes(element);
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);