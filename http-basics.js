// Node.js ka inbuilt  http module  require kiya hai
const http = require('http');

const server = http.createServer((req,res) => {
  if(req.url === '/'){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end(' hello server');
  }else if(req.url === '/about'){
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(' Hi My Name is Himanshu' + ' this is about section')
  } else if( req.url === '/contact'){
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Contact me at backendDeveloper@gamil.com ')
  }else{
    res.writeHead(404,{'Content-Type':'text/plain'})
    res.end('Oops! page not found')
  }
});

  server.listen(4000 , () => {
    console.log(" Server is working .....")
  });


  // this is my 