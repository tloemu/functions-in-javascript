const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const isEmptyObject = obj => Object.keys(obj).length === 0;