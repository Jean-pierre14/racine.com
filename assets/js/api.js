fetch("https://instagram47.p.rapidapi.com/public_post_likers?shortcode=CHLXcX-h-Px", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "instagram47.p.rapidapi.com",
		"x-rapidapi-key": "7ffe277cf5mshcf4db704601812ep1cc290jsn1d5ef023e30b"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});