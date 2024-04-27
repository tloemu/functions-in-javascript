const isEven = (num) => num % 2 === 0;
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const result = await makeHttpRequest(url);