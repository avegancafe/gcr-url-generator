const readline = require('readline-sync')

const githubUrl = readline.question('What is the GitHub URL? ')
const currentDate = new Date().toLocaleDateString()
const presenter = readline.question('Who presented this PR? (Please use their airtable presenter name) ').replace(/\s/g, '+')

const airtableUrl = `https://airtable.com/shryESNrt9cpIer2L?prefill_Date=${currentDate}&prefill_URL=${githubUrl}&prefill_Presenter=${presenter}`
console.log(`Hey! Would you mind filling out this form to summarize your PR that you presented at GCR? ${airtableUrl}
thanks!
(it's for this pr :smile: ${githubUrl})
Also, here's a link to the airtable in case you want to check out the other entries: https://airtable.com/tbldenDo71UnE7PRo/viwa0KYdrQfnnJEpS?blocks=hide`)
