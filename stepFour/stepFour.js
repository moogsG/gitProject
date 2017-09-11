var https = require('https');



function getHTML (options, callback) {
  var buf = '';

  https.get(options, function (response) {
    response.setEncoding('utf8');

    //callback to be invoked
    response.on('data', function (data) {
      console.log('Chunk Received.  Length:', data.length, '\n');
      buf += data.toString();
    });

    response.on('end', function(){
      console.log('Response stream complete');
      return callback(buf);
    })
  })

}
//Callback functions
function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);



