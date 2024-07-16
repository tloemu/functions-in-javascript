const channelName = getChannelName(channel);
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;