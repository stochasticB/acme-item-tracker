const { User } = require('./db/User');
const { Thing } = require('./db/Thing');
const express = require('express');
const app = express();
const path = require('path');
const { seeder } = require('./db');

app.use(express.json());
app.use('/dist', express.static('dist'));
app.use('/assets', express.static('assets'));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));


app.post('/api/things', async(req, res, next)=> {
  try {
    res.status(201).send(await Thing.create(req.body));
  }
  catch(ex){
    next(ex);
  }
});

app.post('/api/users', async(req, res, next) => {
  try {
    res.status(201).send(await User.create(req.body));
  }
  catch(ex){
    next(ex)
  }
});

app.get('/api/things', async(req, res, next)=> {
  try {
    res.send(await Thing.findAll());
  }
  catch(ex){
    next(ex);
  }
});

app.get('/api/users', async(req, res, next)=> {
  try {
    res.send(await User.findAll());
  }
  catch(ex){
    next(ex);
  }
});

app.delete('/api/users/:id', async(req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.sendStatus(204);
  }
  catch(ex) {
    next(ex);
  }
});

app.delete('/api/things/:id', async(req, res, next) => {
  try {
    const thing = await Thing.findByPk(req.params.id);
    await thing.destroy();
    res.sendStatus(204);
  }
  catch(ex) {
    next(ex);
  }
});


const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`));

const init = async()=> {
  try {
    await seeder();
  }
  catch(ex){
    console.log(ex);
  }
};

init();