import axios from "axios";

const baseUrl = process.env.REACT_APP_CORS_ANYWHERE ? process.env.REACT_APP_CORS_ANYWHERE : 'https://kurisu-cors-anywhere.herokuapp.com/'

// Yelp API key stored as Netlify variable (not exposed in Git repo)
const apiKey = process.env.REACT_APP_YELP_API_KEY;

// getData - search for Toronto restaurants based on category param
export const getData = (category) => {
  // todo: Update API call to GraphQL
  axios.get(`${baseUrl}https://api.yelp.com/v3/businesses/search?location=Toronto`, {
    headers: {
      Authorization: `Bearer ${apiKey}`
    },
    params: {
      categories: `${category}`
    }
    })
    .then((response) => {
        console.log(response.data.businesses)
    })
    .catch((error) => {
        console.log("error: ",error)
    })
}