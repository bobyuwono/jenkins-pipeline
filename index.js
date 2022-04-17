const express= require('express');


const app = express();
// //Idiomatic expression in express to route and respond to a client request
// app.get('/', (req, res) => {       
//     res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
//                                                         //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
// });

// app.get('/', (req, res) => {       
//     res.send('hello world')      //server responds by sending the index.html file to the client's browser
//                                                         //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
// });

// app.listen(process.env.PORT || port, () => {
//     console.log(`Now listening on port ${port}`);
// }); 


//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
    res.send('hello world');
   });
//listen to port 3000 by default
app.listen(process.env.PORT || 3000), () =>{
    console.log(`Now listening on port ${port}`)
};

module.exports = app;
