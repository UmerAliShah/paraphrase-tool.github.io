

var text = "There are several major benefits to moving to plant-based nutrition, all supported by excellent science. ";

function apiCall(){
    fetch("https://paraphrasing-tool1.p.rapidapi.com/api/rewrite", {
	"method": "POST",
	"headers": {
		"content-type": "application/json",
		"x-rapidapi-key": "39ee38125bmshd99e8559f9000bbp14ccfdjsnf77457e1f510",
		"x-rapidapi-host": "paraphrasing-tool1.p.rapidapi.com"
	},
	"body": {
		"sourceText": text
	}
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
}