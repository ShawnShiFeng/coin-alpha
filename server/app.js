const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const path = require('path');
// const knex = require('knex')(require('../knexfile'));
const models = require('../db/models');

const { getGDAXHistoricRates } = require('./gdax/gdax.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  models.Investor.where({ email: req.body.email }).fetch()
  .then((user) => {
    if (user.password === req.body.password) {
      res.status(201).send(user);
    } else throw new Error();
  })
  .catch(() => {
    res.status(201).send({ error: 'user not found' });
  });
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.post('/gdax', (req, res) => {
  const input = req.body;
  return getGDAXHistoricRates(input.productId, input.start, input.end, input.granularity)
  .then((data) => {
    console.log('/gdax response: ', data);
    res.send(data);
  })
  .catch((err) => {
    console.log('/gdax error: ', err);
    res.send(err);
  });
});

app.post('/signup', (req, res) => {
  models.Investor.forge({
    email: req.body.email,
    password: req.body.password,
    eth_wallet: req.body.ethWallet,
    created_at: new Date(),
    updated_at: new Date(),
    type: 'Reg D',
    status: true,
  })
  .save()
  .then((user) => {
    res.status(201).send(user);
  })
  .catch(() => {
    res.status(201).send({ error: 'signup error' });
  });
});

app.get('*.js', (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('*', (req, res) => {
  res.status(404).send('Not found');
});

app.post('/', (req, res) => {
  res.status(201).send(req.body);
});

module.exports = app;
