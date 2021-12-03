import { gql, GraphQLClient } from 'graphql-request';

const baseUrl = process.env.REACT_APP_CORS_ANYWHERE ? process.env.REACT_APP_CORS_ANYWHERE : 'https://kurisu-cors-anywhere.herokuapp.com/'

// Yelp API key stored as Netlify variable (not exposed in Git repo)
const apiKey = process.env.REACT_APP_YELP_API_KEY;

// getData - search for Toronto restaurants based on category param
export const getData = async (category) => {
  const endpoint = `${baseUrl}https://api.yelp.com/v3/graphql`;

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${apiKey}`,
      'accept-language': 'en-CA'
    }
  })

  const query = gql`{
    search(term: "${category}",
      location: "toronto",
      limit: 6) {
        total
        business {
          id
          name
          display_phone
          price
          rating
          url
          location {
            formatted_address
          }
          photos
        }
      }
  }`;

  const data = await graphQLClient.request(query);

  return data;      
}