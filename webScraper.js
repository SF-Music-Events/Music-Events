const cheerio = require('cheerio');
const request = require('request');
const fs = require('fs');

const url = 'https://19hz.info/eventlisting_BayArea.php';

let exportData = [];

request(url, (error, response, html) => {
  if (!error) {
    const $ = cheerio.load(html);

    const storage = { events: [] };

    $('table:first-of-type > tbody > tr').filter(function() {
      const data = $(this);

      const event = [];
      const linkList = [];

      data.children().filter(function() {
        const item = $(this);
        if (item.children().attr('href')) {
          linkList.push(item.children().attr('href'));
        }
        event.push(item.text());
      });
      event.push(linkList);
      storage.events.push(event);
    });

    const cleanedData = storage.events.map(event => {
      const cityMarker = event[1].lastIndexOf('(');
      const venueMarker = event[1].lastIndexOf('@');
      const priceMarker = event[3].lastIndexOf('|');

      const city = event[1].slice(cityMarker + 1, event[1].length - 1);
      const title = event[1].slice(0, venueMarker - 1);
      const venue = event[1].slice(venueMarker + 2, cityMarker - 1);
      const time = event[0];
      const date = event[6];
      const tags = event[2];
      const price = event[3].slice(0, priceMarker - 1);
      const age = event[3].slice(priceMarker + 1);
      const organizers = event[4];
      const links = event[7];

      return {
        title,
        city,
        venue,
        time,
        date,
        tags,
        price,
        age,
        organizers,
        links
      };
    });

    // console.log(storage);

    fs.writeFile('scrapedData.json', JSON.stringify(storage, null, 4), function(err) {
      console.log('File successfully written');
    });
  }
});
