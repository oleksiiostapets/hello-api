const express = require('express');
const session = require('express-session');
const app = express();

const port = process.env.PORT || 8080;

const helmet = require('helmet')
const router = express.Router();

app.use(helmet())
app.set('trust proxy', 1)
app.use(session({
  secret: 's3Cur3',
  name: 'sessionId',
  resave: true,
  saveUninitialized: true
}))

router.get('/hello', function(req, res) {
  res.send("World!");
});

app.use('/', router);

app.listen(port);
