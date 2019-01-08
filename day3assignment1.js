var express= require('express')
var app=express()

app.use(express.static('bro'))

app.get('/',function(req,res){
	console.log(__dirname)
	res.sendFile(__dirname+'/bro/sample.html')
})

app.get('/login',function(req,res)
{
	console.log(__dirname)
	res.sendFile(__dirname+'/bro/login.html')
})
app.get('/signup',function(req,res)
{
	console.log(__dirname)
	res.sendFile(__dirname+'/bro/signup.html')
})
app.get('/dashboard',function(req,res)
{
	console.log(__dirname)
	res.sendFile(__dirname+'/bro/bashboard.html')
})
app.get('/loginsubmit',function(req,res){
	var a=req.query.fname;
	var b=req.query.middlename;
	res.send("Firstname is"+a+"Middlename"+b)
})
app.listen(3010,function()
{
	console.log("hey i am Running")
})