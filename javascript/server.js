// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 3000

// const server = http.createServer((req, res) => {
//     res.Status = 200;
//     res.setHeader("ContentType", "text/plain");
//     res.end("Hello world!");

// });

// server.listen(port, hostname, () => {
//     console.log(`Server is running at http://${hostname}:${port}/`)
// });


const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {

    let rawData = '';
    // Accumulate the data blocks received
    resp.on("data", (block) => {
        rawData += block;
    })

    // Once reveived all data, parse it and do the processing of cleaning
    //resp.on("end", () => {
    //  try {
    let jsonData = JSON.parse(rawData);
    let count = 0;

    function recurse(resp) {
        let data;
        for (let key in resp) {
            data = resp[key]
            if (data == "N/A" || data == "-" || data == "" || data === null || typeof data == "undefined") {
                delete resp[key];
                count++;
            }
            if (data instanceof Object) {
                data = recurse(data);
            }
        }
    }

    recurse(jsonData);
    jsonData.items_removed = count;
    console.log(JSON.stringify(jsonData));

    //}
    //catch (e) {
    //  console.error("Error when parsing JSON: ", e)
    //}
    //}

    //data => {
    //const obj = cleanObj(JSON.parse(data.toString()));
    //console.log(JSON.stringify({...obj, items_removed}))
    //})

    // parse json data here...

    // Remove all keys that have values of N/A, -, or empty strings.


});





