import axios from "axios";

export default {
  // Gets all books
  getBreweries: function(search) {
    // alert("we;re werrawdfakjdfn")
    return axios.get(`/api/breweryAPI?q=${search}`); 
  },
  saveBreweries: function(breweries){
    console.log("breweries", breweries)

    return axios.post("/api/breweryAPI/saved", breweries )
  },

  geoCode: function(address){
    console.log("address " + address)
    return axios.get(`/api/breweryAPI/geocode?q=${address}`)
  },

  getAllSaved: function(){

    return axios.get(`/api/breweryAPI/savedAll`)
  },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // Deletes the book with the given id
  deleteBrewery: function(id) {
    return axios.delete("/api/brewery/" + id);
  },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};