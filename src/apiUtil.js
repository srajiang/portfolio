const axios = require("axios");
const AIRTABLE_ENDPOINT = 'https://api.airtable.com/v0/appJ2zDoqvxeNEdQH/Table%201';
const BEARER_TOKEN = 'keyVv0yLNmlyIb3ze'; // need to protect

export const fetchProjects = () => {
  return axios( { 
    method: 'get', 
    url: AIRTABLE_ENDPOINT, 
    headers: { 'Authorization': BEARER_TOKEN }  
  });
}

