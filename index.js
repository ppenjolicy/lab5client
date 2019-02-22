var express = require('express')
var app = express()

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + ''));

app.get('/computer', function(req, res){
   res.render('Computer', {computers: [{no:'Windows',p:'./images/1.jpg'}, 
   									{no:'OSX',p:'./images/2.jpg'}, 
   									{no:'Android',p:'./images/3.jpg'}, 
   									{no:'IOS',p:'./images/4.jpg'}] })
})
app.listen(8000)