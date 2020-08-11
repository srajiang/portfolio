const PROJECTS_TABLE_NAME = 'projects';
const BIO_TABLE_NAME = 'bio';

const Airtable = require("airtable");
const portfolioBase = new Airtable({
  apiKey: process.env.REACT_APP_API_KEY,
}).base("appJ2zDoqvxeNEdQH");


export async function fetchProjects() {
  const records = await portfolioBase(PROJECTS_TABLE_NAME).select({}).all()
  return records;
}


export async function fetchBio() {
  const bio = await portfolioBase(BIO_TABLE_NAME).select({}).all();
  return bio;
}

