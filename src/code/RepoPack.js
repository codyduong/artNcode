const fs = require('fs')
const fetch = require("node-fetch");

const COLORS = require(require('./Config.json').Colors)
const MIN_PERCENTAGE_THRESHOLD = require('./Config.json').PercentageThreshold
const TOKEN = require(require('./Config.json').Token).Token
const OUTPUT =  parseInput() ?? './Repos.json'

function parseInput() {
  //handles one arg: -o='relativeOutput'
  const args = process.argv.slice(2) //This emits the 'node RepoPack.js' part of the args
  let rv
  rv = (args[0].slice(0,4)==='--o=') ? args[0].slice(4,) : null 
  rv = rv ? rv+'Repos.json' : null
  console.log("Changed output to " + rv)
  return rv ?? null
}

const fetch2 = {
  method:'GET',
  headers: {
    Authorization: `token ${TOKEN}`
  }
}

fetch('https://api.github.com/users/codyduong/repos', fetch2)
  .then(res => res.json())
  .then(
    (result) => {
      parseJson(result)
    },
    (error) => {
      console.log(error)
    }
  )

function handleLangs(repos) {
  let finalRepo = []
  var index
  for (index in repos) {
    fetch(repos[index].languages_url, fetch2)
      .then(res => res.json())
      .then((result) => {
        var langList = []
        var langTotal = 0
        var langOther = 0
        var lang
        for (lang in result) {
          langTotal += result[lang]
        }
        for (lang in result) {
          var percent = Math.round((result[lang] / langTotal) * 10000) / 100
          if (percent > MIN_PERCENTAGE_THRESHOLD) {
            langList.push([lang, percent, COLORS[lang] ? COLORS[lang]['color'] : null])
          } else {
            langOther += percent
          }
        }
        if (langOther !== 0) {
          langList.push(['Other', langOther, '#696969']) //haha funny number
        }
        repos[index]['languages'] = langList
        finalRepo.push(repos[index])
      }, (error) => {
        console.log(error)
      })
      .then(() => {
        console.log(finalRepo)
        writeFile(finalRepo)
      })
  }
}

function writeFile(repos) {
  fs.writeFile(OUTPUT, JSON.stringify(repos), err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        //console.log('Successfully wrote file')
    }
  })
}

function parseJson(repos) {
  handleLangs(repos)
}

