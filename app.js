const express = require('express');
const chalk = require('chalk');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '/public')));


app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/views/home-page.html'));
});

app.get('/about', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/views/about-page.html'));
});

app.get('/gallery', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/views/gallery-page.html'));
  });

app.get('/works', (req, res, next) => {
res.sendFile(path.join(__dirname, '/views/works-page.html'));
});
  

app.listen(3000, () => {
  console.log(chalk.bgCyan.black('Server listening on port 3000'));
});