const express = require('express');
const app = express();
port = 8000;

const expressLayout = require('express-ejs-layouts');
app.use(expressLayout);

app.use(express.urlencoded());
app.use('/', require('./routes'));
app.use(express.static('./assets'));
app.set('layout extractStyle', true);
app.set('layout extractScript', true);
app.set('view engine','ejs');
app.set('views','./views');




app.listen(port,function(err){
    if (err) {
        console.log(`error in running the ${port}`);
        return;
    }
    console.log(`http://localhost:${port}`);
});