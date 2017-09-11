var getHTML = require('../stepFive/http-functions');
//Callback functions
function printHTML (html) {
  console.log(html.split('').reverse().join(''));
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

getHTML(requestOptions, printHTML);