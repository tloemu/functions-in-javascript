const value = ( 5 < 7 ) ? "True" : "False" ;
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();