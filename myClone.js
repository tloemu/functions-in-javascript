const merge = Object.assign({}, obj1, obj2);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const isEmptyObject = obj => Object.keys(obj).length === 0;