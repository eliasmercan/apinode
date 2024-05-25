const customHeader =(req, res, next)=>{
    console.log(req.headers);

}

module.exports=customHeader;