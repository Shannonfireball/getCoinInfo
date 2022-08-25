var express = require('express');
const { getServerSideProps } = require('../coinGekoApi');
var router = express.Router();



router.get('/',async (request,response)=>{
    response.json({ coins:await getServerSideProps() });
});

module.exports = router;