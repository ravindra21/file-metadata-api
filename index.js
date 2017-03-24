var express = require('express')
var multer = require('multer')
var port = process.env.PORT|| 3000
var app = express()

var storage = multer.memoryStorage()
var upload = multer({storage:storage})

app.use('/',express.static('view'))

app.post('/upload',upload.single('data'),function(req,res){
	if(req.file){
		res.json({
			filename:req.file.originalname,
			size:req.file.size,
			type:req.file.mimetype
		})
	}else{
		res.send('no file found')
	}
})

app.listen(port,function(){console.log('app listen on port '+port)})