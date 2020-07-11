const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon.model');

const port = process.env.PORT || 5000;

const app  = express();
app.use(cors());
app.use(express.json());

const uri = 'mongodb://localhost/pokemon';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.get('/', (req,res) => res.send('working'));


//add pokemon
app.route('/pokemon').post(async (req, res) => {
  const name = req.body.name;
  const image = req.body.image;
  const id = Number(req.body.id);
  const url = req.body.url;

  await Pokemon.create({name,image,id,url}, (err,pokemon) => {
    if (err) console.log(err);
    else {
      console.log(pokemon);
      res.json(pokemon);
    }
  });
});

  //get All
app.route('/pokemon').get(async (req, res) => {
  try{
    const pokemons = await Pokemon.find();
    res.json(pokemons);
    res.status(200);
    }catch (e) {
      console.log(e)
    }}
    );

//get one
app.route('/pokemon/:pokemonId').get(async (req,res) => {
  try{
    const pokemons = await Pokemon.findById(req.params.pokemonId);
    res.json(pokemons);
    res.status(200);
  } catch(e) {
    console.log(e)
  }
})

app.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}`);
});

