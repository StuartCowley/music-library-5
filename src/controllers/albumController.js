const { Album } = require('../models');
// const getDb = require('../services/db');

const createAlbum = async (req, res) => {
  // const db = await getDb();
  const { artistId } = req.params;
  const { name, year } = req.body;

  try{
    const createdAlbum = await Album.create({ name, year }, { where: { artistId } });

    return res.status(201).json(createdAlbum);

  }catch(err){
    return res.status(500).json(err)
  }

  // db.close();
};

const findAllAlbums = async (_, res) => {

  try{
    const foundAlbums = await Album.findAll();

    return res.json(foundAlbums);

  }catch(err){
    return res.status(500).json(err)
  }
};

const findAlbumByPk = async (req, res) => {
  const { albumId } = req.params;

  try{
    const foundAlbum = await Album.findByPk(albumId);

    return res.json(foundAlbum);

  }catch(err){
    return res.status(404).json(err)
  }
};

const updateAlbum = async (req, res) => {
  const { albumId } = req.params;

  try{
    const updatedAlbum = await Album.udpate({ name: new String() }, { year: new Number() }, { where: { id: albumId } });

    res.send(updatedAlbum);

  }catch(err){
    return res.sendStatus(500);
  }
};

const deleteAlbum = async (req, res) => {
  const { albumId } = req.params;

  try{
    const deleteAlbum = await Album.destroy({ where: albumId });

    return res.status(204).json({ albumDeleted: deleteAlbum});

  }catch(err){
    return res.sendStatus(404).json({ error: 'The artist does not exist.' });
  }
};



module.exports = { createAlbum, findAllAlbums, findAlbumByPk, updateAlbum, deleteAlbum };


/*
const getDb = require('../services/db');

exports.create = async (req, res) => {
  const db = await getDb();
  const { artistId } = req.params;
  const { name, year } = req.body;

  try {
    await db.query('INSERT INTO Album (name, year, artistId) VALUES (?, ?, ?)',[
      name, 
      year, 
      artistId
    ]);

    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500).json(err);
  }

  db.close();
};

exports.read = async (_, res) => {
  const db = await getDb();

  try {
    const [albums] = await db.query('SELECT * FROM Album');

    res.status(200).json(albums);
  } catch (err) {
    res.status(500).json(err);
  }
  db.close();
};

exports.readById = async (req, res) => {
  const db = await getDb();
  const { albumId } = req.params;
  const [[album]] = await db.query('SELECT * FROM Album WHERE id = ?', [
    albumId
  ]);

  if (!album) {
    res.sendStatus(404);
  } else {
    res.status(200).json(album);
  }
  
  db.close();
};

exports.update = async (req, res) => {
  const db = await getDb();
  const data = req.body;
  const { albumId } = req.params;

  try {
    const [
      { affectedRows }
    ] = await db.query(
      'UPDATE Album SET ? WHERE id = ?',[
        data, 
        albumId
    ]);

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
    const result = await db.query('SELECT * FROM Album WHERE id=?', [id]);
    const [[album]] = result;
    if (album) {
      await db.query('DELETE FROM Album WHERE id=?', [id]);
      res.status(200).redirect('/album');
    } else {
      res.status(404);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  db.close();
};
*/
