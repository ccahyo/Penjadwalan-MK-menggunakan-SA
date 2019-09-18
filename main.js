  const car = {
    color: 'Red',
    drive: 'false',
    type: 'SUV',
    driving: function() {
      this.drive= 'true';
    },
    stoping: function() {
      this.drive= 'false';
    }
  };

const hostname = '127.0.0.1';
const port = 8080;
const http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(car.drive);
    car.driving();
    response.write(car.drive);
    car.stoping();
    response.write(car.drive);
    response.write('<br>');
    response.end('Hello World!');
}).listen(port);

console.log(`Server running at http://${hostname}:${port}/`);

