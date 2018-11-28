let Clarifai = require('clarifai')

const app = new Clarifai.App({
    apiKey: process.env.API_KEY
});

const handleApiCall = (req,res) => {
	app.models
		.predict(Clarifai.APPAREL_MODEL, req.body.input)
		.then(data=> {
			res.json(data);
		})
		.catch(err=> res.status(400).json(err))
}

module.exports= {
	handleApiCall
}