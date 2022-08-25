var express = require('express');
const { getCoin } = require('../coinGekoApi');
var router = express.Router();



router.get('/:coin',async (request,response)=>{
    response.json({ coins:await getCoin(request.params.coin) });
});

module.exports = router;