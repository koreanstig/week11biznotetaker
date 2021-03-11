// dependencies
const express = require('express');

// setting up express
const PORT = process.env.PORT || 8080;
const app = express();

// setting up express for data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// requiring routes - separate folders for cleaner look
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//listener + console log
app.listen(PORT, () => {
    console.log('App listening on: ' + PORT);
});