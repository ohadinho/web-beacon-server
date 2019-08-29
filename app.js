const express = require('express');
const app = express();
const port = 3000;

const catalogRouter = require('./routes/catalog');
app.set('trust proxy', true)
app.use('/catalog', catalogRouter);

app.listen(port, () => console.log(`Web beacon app listening on port ${port}!`));
