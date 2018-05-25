const express = require('express');
const path = require('path');
const Purchase = require('./db/Purchases.js');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname, 'public/')));

app.post('/api/add', (req, res) => {
  let purchase = new Purchase(req.body)
  restroom.save((err, data) => {
    if (err) {
      res.send("already added")
    } else {
      res.sendStatus(202);
    }
  })
})

app.listen(8080, () => { console.log('listening on port 8080')})

