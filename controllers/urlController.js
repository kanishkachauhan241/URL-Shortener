function shortenURL(req,res){
    const{url}=req.body;
    res.json({
        message:"URL received successfully",
        url
    })
}
module.exports={
    shortenURL
};