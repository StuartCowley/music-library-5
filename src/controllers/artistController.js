const { Artist } = require('../models');
// const getDb = require('../services/db');

const createArtist = async (req, res) => {
  // const db = await getDb();
  const { name, genre } = req.body;

  try{
    const createdArtist = await Artist.create({
      name,
      genre
    })

    return res.status(201).json(createdArtist);

  }catch(err){
    return res.status(500).json(err)
  }

  // db.close();
};

const findAllArtists = async (_, res) => {

  try{
    const foundArtists = await Artist.findAll();

    return res.json(foundArtists);

  }catch(err){
    return res.status(500).json(err)
  }
};

const findArtistByPk = async (req, res) => {
  const { artistId } = req.params;

  try{
    const foundArtist = await Artist.findByPk(artistId);

    return res.json(foundArtist);

  }catch(err){
    return res.status(404).json(err)
  }
};

const updateArtist = async (req, res) => {
  const { artistId } = req.params;

  try{
    const updatedArtist = await Artist.udpate({ name: new String() }, { genre: new String() }, { where: { id: artistId } });

    res.send(updatedArtist);

  }catch(err){
    return res.sendStatus(500);
  }
};

const deleteArtist = async (req, res) => {
  const { artistId } = req.params;

  try{
    const deleteArtist = await Artist.destroy({ where: artistId });

    return res.status(204).json({ artistDeleted: deleteArtist});

  }catch(err){
    return res.sendStatus(404).json({ error: 'The artist does not exist.' });
  }
};



module.exports = { createArtist, findAllArtists, findArtistByPk, updateArtist, deleteArtist };

/*
const getDb = require('../services/db');

exports.create = async (req, res) => {
  const db = await getDb();
  const { name, genre } = req.body; // The req.body property contains key-value pairs of data submitted in the request body. 

  try {
    await db.query('INSERT INTO Artist (name, genre) VALUES (?, ?)', [
      name,
      genre,
    ]);

    res.status(201);
  } catch (err) {
    res.sendStatus(500).json(err);
  }

  db.close();
};

exports.read = async (_, res) => {
  const db = await getDb();

  try {
    const [artists] = await db.query('SELECT * FROM Artist');

    res.status(200).json(artists);
  } catch (err) {
    res.status(500).json(err);
  }
  db.close();
};

exports.readById = async (req, res) => {
  const db = await getDb();
  const { artistId } = req.params;

  const [[artist]] = await db.query('SELECT * FROM Artist WHERE id = ?', [
    artistId,
  ]);

  if (!artist) {
    res.sendStatus(404);
  } else {
    res.status(200).json(artist);
  }

  db.close();
};

exports.update = async (req, res) => {
  const db = await getDb();
  const data = req.body;
  const { artistId } = req.params;

  try {
    const [
      { affectedRows }
    ] = await db.query('UPDATE Artist SET ? WHERE id = ?', [data, artistId]);

    if (!affectedRows) {
      res.sendStatus(404);
    } else {
      res.status(200).send();
    }
  } catch (err) {
    res.sendStatus(500);
  }

  db.close();
};

exports.delete = async (req, res) => {
  const db = await getDb();
  const id = req.params.id;

  try {
    const [[artistToDelete]] = await db.query(
      'SELECT * FROM Artist WHERE id=?',
      [id]
    );
    if (artistToDelete) {
      await db.query('DELETE FROM Artist WHERE id=?', [id]);
      res.status(200).redirect('/artist');
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  db.close();
};
*/