const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

 const getServerSideProps = async (context)=>{
    const params = {
        order:CoinGecko.ORDER_MARKET_CAP_DESC
    }
    const result = await CoinGeckoClient.coins.markets({params})
    return result;
}


const getCoin = async (context)=>{
    let data = await CoinGeckoClient.coins.fetch(context, {});
    return data;
}



module.exports = {getServerSideProps,getCoin}