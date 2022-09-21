const express = require('express');
const route = require('./route/route')
const app = express()

app.use(express.json());

app.use('/', route);

//PORT listening
app.listen(3000, () => {
    console.log('Express app running on port ' + (3000))
});
