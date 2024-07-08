console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const uniqueArray = arr => [...new Set(arr)];
const channel = getChannel(computedAppVersion);