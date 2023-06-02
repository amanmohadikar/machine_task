// import express from "express";
const express = require("express")
let {
  deleteBooking,
  getBookingById,
  newBooking,
} = require("../controllers/booking-controller")

const bookingsRouter = express.Router();

bookingsRouter.get("/:id", getBookingById);
bookingsRouter.post("/", newBooking); // call
bookingsRouter.delete("/:id", deleteBooking);


module.exports = bookingsRouter;