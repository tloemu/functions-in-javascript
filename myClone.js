const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const channel = getChannel(computedAppVersion);