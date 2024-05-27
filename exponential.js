const channel = getChannel(computedAppVersion);
const isWeekday = (date) => date.getDay() % 6 !== 0;
const flattenedArray = arr => [].concat(...arr);