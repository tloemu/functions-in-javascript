const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const goToTop = () => window.scrollTo(0, 0);
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));