const express = require('express'); // requiring expressJS
const app = express(); // using variable app as an instance of express
//const path = require('path');

app.use(express.static(__dirname + '/Web-Info', {  // creates routes for all html files in web-info folder. For instance if file name is about.html this will create route /about
extensions: ['html', 'htm'] // removes .html extension
}));

app.use("/Resources", express.static(__dirname + '/Resources')); // allows express to use static files (css, js) from Resources folder

app.get("/", function(req, res)
{
res.sendFile("index.html", {"root": __dirname + '/Web-Info'}); // renders index.html page as a default route page -- main folder / web-info / index.html
});

const port = process.env.PORT || 3000; // creates dynamic port

app.listen(port, () => { // tells server to listen to a port we created
console.log(`Server is running on port ${port}`);
});