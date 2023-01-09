const express = require("express");
const router = express.Router();
const Movie = require('../models/Movie.model');


/* GET home page */
router.get('/movies/:movieId', (req, res) =>{
    console.log(req.params)
    Movie.findById(req.params.movieId)
    .then((result)=>{
        console.log(result)
        res.render('movies/movie-details', result)
    })
})

router.get('/movies', (req,res)=> {
    Movie.find()
    .then((result)=>{
        console.log(result)
        res.render('movies/movies-list',{result})
    })
})


module.exports = router;

