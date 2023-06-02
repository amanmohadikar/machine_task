import axios from "axios"


export const getAllMovies = async () => { // movies/movies.js, header.js, homepage.js
  const res = await axios
    .get("/api/movie")
    .catch((err) => console.log(err))

  if (res.status !== 200) {
    return console.log("No data")
  }

  let data = await res.data
  return data
}



export const sendUserAuthRequest = async (data, signup) => { // Auth/Auth.js
  const res = await axios
    .post(`/api/user/${signup ? "signup" : "login"}`, {
      name: signup ? data.name : "",
      email: data.email,
      password: data.password
    })
    .catch((err) => console.log(err))

  if (res.status !== 201 && res.status !== 200) {
    return console.log("Unexpected Error Occured")
  }

  let redData = await res.data
  return redData
}


export const sendAdminAuthRequest = async (data) => { // Admin/Admin.js
  const res = await axios
    .post(`/api/admin/login`, {
      email: data.email,
      password: data.password
    })
    .catch((err) => console.log(err))

  if (res.status !== 200) {
    return console.log("Unexpected Error Occured")
  }

  let redData = await res.data
  return redData
}


export const getMovieDetails = async (id) => { // call from movie-route
  const res = await axios.get(`/api/movie/${id}`).catch((err) => console.log(err));
  if (res.status !== 200) {
    return console.log("Unexpected Error");
  }
  const resData = await res.data;
  return resData;
};



export const newBooking = async (data) => { // call from booking-route
  const res = await axios
    .post("/api/booking", {
      movie: data.movie,
      seatNumber: data.seatNumber,
      date: data.date,
      user: localStorage.getItem("userId"),
    })
    .catch((err) => console.log(err));

  if (res.status !== 201) {
    return console.log("Unexpected Error");
  }
  const resData = await res.data;
  return resData;
};


export const deleteBooking = async (id) => {
  const res = await axios
    .delete(`/api/booking/${id}`)
    .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("Unepxected Error");
  }

  const resData = await res.data;
  return resData;
};


export const getUserDetails = async () => {
  const id = localStorage.getItem("userId");
  const res = await axios.get(`/api/user/${id}`).catch((err) => console.log(err));
  if (res.status !== 200) {
    return console.log("Unexpected Error");
  }
  const resData = await res.data;
  return resData;
};


export const getUserBooking = async () => {
  const id = localStorage.getItem("userId");
  const res = await axios
    .get(`/api/user/bookings/${id}`)
    .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("Unexpected Error");
  }
  const resData = await res.data;
  return resData;
};


export const getAdminById = async () => {
  const adminId = localStorage.getItem("adminId");
  const res = await axios
    .get(`/api/admin/${adminId}`)
    .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("Unexpected Error Occurred");
  }

  const resData = await res.data;
  return resData;
};

export const addMovie = async (data) => { // call from movie-route
  const res = await axios
    .post(
      "/api/movie",
      {
        title: data.title,
        description: data.description,
        releaseDate: data.releaseDate,
        posterUrl: data.posterUrl,
        fetaured: data.fetaured,
        actors: data.actors,
        admin: localStorage.getItem("adminId"),
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .catch((err) => console.log(err));

  if (res.status !== 201) {
    return console.log("Unexpected Error Occurred");
  }

  const resData = await res.data;
  return resData;
};
