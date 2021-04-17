/* eslint-disable
   @typescript-eslint/no-var-requires,
   @typescript-eslint/no-unsafe-assignment,
   @typescript-eslint/no-unsafe-call,
   @typescript-eslint/restrict-template-expressions,
*/
const fs = require('fs')

// function generateBadges (object, objectKey) {
//   const badges = Object.keys(object).reduce((badges, packageName) => {

//     return (`${badges}\n[![](https://img.shields.io/badge/dynamic/json?label=${
//         packageName
//       }&query=${objectKey}['${
//         packageName
//       }']&url=https://raw.githubusercontent.com/${
//         user
//       }/${
//         repoName
//       }/release/${
//         version
//       }/package.json?token=${
//         token
//       })](https://www.npmjs.com/package/${
//         packageName
//       })`
//     )
//   }, '')

//   return badges
// }

function generateMarkdown () {
  const markdownContents = fs.readFile('./READMEcontents.md', (err, data) => {
    console.log(data)
  })

  const outputPath = `./README.md`
  fs.writeFile(outputPath, markdownContents, function (err) {
    if (err) {
      return console.log(err)
    }
    console.log(`${outputPath} generated.`)
  })
}

generateMarkdown()
