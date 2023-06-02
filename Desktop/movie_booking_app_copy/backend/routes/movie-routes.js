const express = require("express")


let {
  addMovie,
  getAllMovies,
  getMovieById,
} = require ("../controllers/movie-controller")

const movieRouter = express.Router();
movieRouter.get("/", getAllMovies); // call
movieRouter.get("/:id", getMovieById); // call
movieRouter.post("/", addMovie); // call

module.exports = movieRouter;