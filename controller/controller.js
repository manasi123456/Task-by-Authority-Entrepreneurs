const urlParams = function (req,res){
    let data = req.query;
    res.status(200).send({ status : true, queryParams : data})
}

module.exports.urlParams = urlParams