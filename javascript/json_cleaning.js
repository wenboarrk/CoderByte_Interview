const https = require('https');

let items_removed = 0;
const removedItems = ["N/A", "-", ""];

const cleanObj = obj => {
    for (const key in obj) {
        if (removedItems.includes(obj[key])) {
            delete obj[key];
            items_removed++;
        } else if (Array.isArray(obj[key])) {
            const len = obj[key].length;
            let arr = [];

            for (let i = 0; i < len; i++) {
                let temp = obj[key][i];

                if (removedItems.includes(temp)) {
                    items_removed++;
                    continue;
                }

                if (typeof (temp) === 'object') {
                    temp = cleanObj(temp);
                }

                arr = arr.concat(temp);
            }
            obj[key] = arr;
        } else if (typeof (obj[key]) === 'object') {
            obj[key] = cleanObj(obj[key]);
        }
    }

    return obj;
}

https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {
    resp.on("data", data => {
        const obj = cleanObj(JSON.parse(data.toString()));
        console.log(JSON.stringify({ ...obj, items_removed }));
    });
});