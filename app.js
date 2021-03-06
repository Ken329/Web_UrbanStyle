const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/image', express.static(__dirname + 'public/image'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res)=>{
    res.render('index')
})

app.listen(port, () => console.info(`Listening to port ${port}`))