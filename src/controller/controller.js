const axios = require("axios");

const getContactById = async(_,res) => {
    try{
        let result = await axios.get('https://rest.gohighlevel.com/v1/contacts/SMzrOX22Pur5FYjjyozh',{
            headers : {
                'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6IkpOVEpTV04ya0tkRVZkMElFbEZhIiwiY29tcGFueV9pZCI6ImJmb1Q3MkNWcm9oMlg4ZWZPUmdRIiwidmVyc2lvbiI6MSwiaWF0IjoxNjYxNDE2NzQzNTcxLCJzdWIiOiJQcVJEWDZqMjdXempXRUNsQm92eCJ9.u6WPtyudfB9R4nLnLbBZ6i9KquDeK6WnIOZxKAeE9Hg'
            }

        });
        let data = result.data.contact
        data.customField[0].value="TEST"
        res.status(200).send({status:true,msg:data});
    } catch(err) {
        res.status(500).send({status:false,msg:err.message});
    }
    }
    
    module.exports.getContactById = getContactById;