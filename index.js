const porta = 3000
const express = require('express')
const session = require('express-session')
var path = require('path')
const router = express.Router()
const app = express()

router.get('/', function(req, res){

    res.sendFile(path.join(__dirname+'/'))

})

app.engine('html', require('ejs').renderFile)
app.set('view-engine', 'html')
app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, '/views'))

app.listen(porta, ()=>{
        console.log("servidor ligado...")
})