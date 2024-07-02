const updated = numbers.filter(element => element > 6);
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};