const axios = require( 'axios' );
const apiKey = process.env.PEXELS_API_KEY;
const perPageImage = 27;

exports.getImages = ( req, res ) => {
    const topic = req.body.topic;
    if(!topic){
       res.status(400).json({ error: 'Topic is required' })
    }
    axios.get( `https://api.pexels.com/v1/search?query=${topic}&orientation=portrait&per_page=${perPageImage}&page=1`, {
        headers: {
            Authorization: apiKey,
        },
     }).then( response => {
        const images = response.data.photos;
        res.status(200).json( images )
     }).catch( error => {
        res.status(500).json({ error: 'Something went wrong in generating images'});
    });
}