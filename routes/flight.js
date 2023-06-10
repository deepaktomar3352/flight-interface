var express = require("express")
var router = express.Router();
var pool = require("./pool")

router.get('/', function(req, res, next) {
    res.render('search-flights', { message: '' });
  });

router.get("/fetchallcities",(req,res)=>{
  pool.query("select * from cities",(error,result)=>{
    if(error)
    {
      res.status(400).json({result:[],message:'Server error'})
    }
    else
    {
      res.status(200).json({result:result,message:'Success'})
    }
  })
})


router.post("/flightdetails",(req,res)=>{
  console.log( "source",req.body.source)

  if(req.body.source==req.body.destination)
  {
    // res.status(400).json({message:"Same cities can't travel"})
    res.render('search-flights',{message:"Same cities can't travel"});
  }
  else
  {
  pool.query("select * from displayflight where source=? and destination=? and date=?",[req.body.source,req.body.destination,req.body.date],(error,result)=>{
    
    if(error)
    {
      console.log(error)
      res.status(400).json({result:[],message:'Server error'})
    }
    else
    {
      res.render('Display-flights',{result:result,message:'Success'});
    }

  })}
})

  
  module.exports = router;
  