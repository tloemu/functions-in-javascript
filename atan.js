const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;