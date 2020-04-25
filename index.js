const express = require('express')
const path = require('path')
const coolAsciiFaces = require('cool-ascii-faces')

const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/times', (req, res) => res.send(showTimes()))
  .get('/cool', (req, res) => res.send(coolAsciiFaces()) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  let showTimes = () => {
    let result = ''
    const times = process.env.TIMES || 5
    for (i = 0; i < times; i++) {
      result += i + ' '
    }
    return result;
  }