const rp = require('request-promise');
const _ = require('lodash')
const fs = require('fs')

const fileName = 'hh-dump.json'
const URI = 'https://api.hh.ru/vacancies?area=66&specialization=1.221&industry=7&page='
function load() {
    const options = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36'
        },
        json: true
    };
    var collector = []
    options.uri = URI + '0'
    rp(options)
        .then(response => {
            console.log(response)
            collector = collector.concat(response.items)
            const pages = response.pages
            const requests = _.times(pages - 1, (index => {
                options.uri = URI +(index + 1)
                return rp(options)
            }))
            return Promise.all(requests)
        })
        .then(responses => {
            console.log(responses.length)
            _.forEach(responses, response => collector = collector.concat(response.items))
            return collector
        })
        .then(data => {
            fs.writeFileSync(fileName, JSON.stringify(data))
        })
        .catch(err => {
            console.log('error', err)
        })
}

load()
