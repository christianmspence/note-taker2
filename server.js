const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
// parse incoming data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON
app.use(express.json());
//look in public folder
app.use(express.static('public'));

require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});