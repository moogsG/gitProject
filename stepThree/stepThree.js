var https = require('https');



function getAndPrintHTML (options) {

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
      console.log(buf);
    })
  })

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);



