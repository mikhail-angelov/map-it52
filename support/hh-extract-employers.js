const fs = require('fs')
const _ = require('lodash')

const fileName = 'hh-dump.json'
const employersFileName = 'hh-employers.json'

const collector = {}

function extract(fileName) {
    const raw = fs.readFileSync(fileName)
    const data = JSON.parse(raw)
    console.log('data', data.length)
    _.forEach(data, cv => {
        if (cv.employer.url) {
            const id = cv.employer.id || cv.employer.url.split('/')[4]
            collector[id] = cv.employer
            collector[id].address = cv.address
            collector[id].info = collector[id].info + ' ' + cv.name
            console.log(cv.name)
        } else {
            console.log('anounim', cv.employer)
        }
    })

    fs.writeFileSync(employersFileName, JSON.stringify(collector))
}

function format(fileName){
	const raw = fs.readFileSync(fileName)
    const data = JSON.parse(raw)
    console.log('data', data.length)
    const good = []
    const incomplete = []
    _.forEach(data, (value, key) => {
    	if(value.address && value.address.lat){
			good.push({
				id: key,
				name: value.name,
				lat: value.address.lat,
				lng: value.address.lng,
				url: value.url,
				logo: value.logo_urls || {},
				address: value.address 
			})
    	}else{
    		incomplete.push(value)
    	}
    })
    console.log('good:',good.length, 'bad:', incomplete.length)
    fs.writeFileSync('employers.json', JSON.stringify(good))
    fs.writeFileSync('employers-incomplete.json', JSON.stringify(incomplete))
}

format(employersFileName)
