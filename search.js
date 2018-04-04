const fs = require('fs');
const csv = require('csv');

// Load Data from local CSV file and turn lines in objects
function fetchData() {
  return new Promise((resolve, reject) => {
    fs.readFile('./data.csv', (err, data) => {
      if (err) return reject(err);
      csv.parse(data, (err, data) => {
        if (err) return reject(err);
        // Remove first element and use it as columns
        const columns = data.shift();
        // Transforming arrays to object using columns
        data = data.map(
          result => result.reduce((object, value, index) => {
            object[columns[index]] = value;
            return object;
          }, {})
        );
        resolve(data);
      });
    });
  });
}

const keyScores = {
  'slug': 30,
  'name': 20,
  'website': 10,
  'twitterHandle': 10,
  'longDescription': 5,
  'mission': 5,
}

function search(q) {
  // Our search is case insensitive
  q = q.toLowerCase();

  return fetchData()
    .then(
      results => {
        return results
        // Score results based on the keyScores
        .map(result => {
          result.score = 0;
          Object.keys(keyScores).forEach(key => {
            if (result[key].toLowerCase().indexOf(q) !== -1) {
              result.score += keyScores[key];
            }
          })
          return result;
        })
        // Filter
        .filter(result => result.score > 0)
        // Sort
        .sort((a, b) => a.score < b.score)
        // Limit
        .slice(0, 10);
      }
  );
}

module.exports = search;
