const channelName = getChannelName(channel);
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;