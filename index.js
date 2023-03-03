const express = require('express')
const app = express()
const port = 3000
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs')
app.set('views','./views')

const router = require('./routes/')
app.use(expressLayouts)
app.use('/', router )

app.listen(port, () => {
  console.log(`Facebook app listening on port ${port}`)
})