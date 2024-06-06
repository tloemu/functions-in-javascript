const uniqueArray = arr => [...new Set(arr)];
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';