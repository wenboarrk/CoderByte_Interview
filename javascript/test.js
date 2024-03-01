const https = require('https');


https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {

    let rawData = '';
    resp.on("data", (data) => {
        rawData += data;
    })

    // Once reveived all data, parse it and do the processing of cleaning
    resp.on("end", () => {
        try {
            let jsonData = JSON.parse(rawData);
            let count = 0;

            function recurse(obj) {
                let data;
                for (let key in obj) {
                    data = obj[key];
                    if (data == "N/A" || data == "-" || data == "" || data === null || typeof data == "undefined") {
                        delete obj[key];
                        count++;
                    }
                    else if (data instanceof Object) {
                        data = recurse(data);
                    }
                }
            }

            recurse(jsonData);
            jsonData.items_removed = count;
            console.log(JSON.stringify(jsonData));

        } catch (e) {
            console.log("Error: ", e)
        }
    })

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