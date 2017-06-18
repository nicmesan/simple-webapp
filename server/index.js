const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
const errorMiddleware = require('./middleware/error_middleware');

app.use(bodyParser.json({ type: 'application/json' }));
app.use('/', express.static(path.resolve(__dirname, '../build')));
app.use(routes);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Example app listening on port ' + port)
});