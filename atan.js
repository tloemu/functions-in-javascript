const symbolsPath = path.join(buildOutputPath, 'symbols');
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';