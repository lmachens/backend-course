const express = require('express');
const path = require('path');
const menuRouter = require('./routes/menu');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.use('/api/menu', menuRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
