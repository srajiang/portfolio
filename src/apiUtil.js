const TABLE_NAME = 'projects';

const Airtable = require('airtable');
const portfolioBase = new Airtable({
  apiKey: API_KEY}).base('appJ2zDoqvxeNEdQH');


export async function fetchProjects() {
  const records = await portfolioBase(TABLE_NAME).select({}).all()
  return records;
}


