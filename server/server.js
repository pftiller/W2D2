const express = require( 'express' );
const app = express();
const port = 2938;

app.use(express.static('server/public'));

app.listen(port, function(){
    console.log( 'server is up on', port);
});