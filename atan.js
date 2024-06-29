const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const merge = Object.assign({}, obj1, obj2);
const appName = getAppName(channel);