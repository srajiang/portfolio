
const TABLE_NAME = 'projects';

const Airtable = require('airtable');
const portfolioBase = new Airtable({
  apiKey: API_KEY}).base('appJ2zDoqvxeNEdQH');


export const fetchProjects = () => {
  const projects = [];

  portfolioBase(TABLE_NAME)
    .select({})
    .firstPage((err, records) => {
      if (err) { console.log('err', err); return;}
      records.forEach((record) => {
        projects.push(record.fields);
      })
  })

  return projects;
}

