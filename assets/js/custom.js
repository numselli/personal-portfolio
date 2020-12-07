
// contact
function sendSubmit(event) {
	var errormessage = false;
	if (document.contactForm.name.value) {
		document.contactForm.name.style = "";
	} else {							
		document.contactForm.name.style.backgroundColor = "red";
		errormessage = true;
	}
	if (document.contactForm.email.value) {
		document.contactForm.email.style = "";
	} else {
		document.contactForm.email.style.backgroundColor = "red";
		errormessage = true;
	}
	if (document.contactForm.message.value) {
		document.contactForm.message.style = "";
	} else {
		document.contactForm.message.style.backgroundColor = "red";
		errormessage = true;
	}
	event.preventDefault();
	if (!errormessage) {
		fetch('https://discordapp.com/api/webhooks/779986049207762945/AOBq-yiXCk64dOg5G7V3Fp8a98fl4jidGB-kyz5r9s9JqE-kp1VpepkrNav6q2MO6Nuw',{method: 'post',headers: {'Content-Type': 'application/json',},body: JSON.stringify({embeds: [{color: 11730954,title: 'New Message!',timestamp: new Date(),fields: [{"name": "Name","value": document.contactForm.name.value,"inline": true},{"name": "Email","value": document.contactForm.email.value,"inline": true},{"name": "Message","value": document.contactForm.message.value}]}]})})
		.then(response => {
			if (response.ok){
				console.log("Success");
			}
		})
		window.location.replace("#");
	}
}
function reset(){
	document.contactForm.name.style = "", document.contactForm.email.style = "", document.contactForm.message.style = "";
}
document.getElementById('contactForm').addEventListener('submit', sendSubmit)
document.getElementById('contactForm').addEventListener('reset', reset)


// photogallery
const targetNode = document.getElementById('photogallery');
const config = { classes: true, attributes: true, childList: true, subtree: true };
const callback = async function (mutationsList, observer) {
	for (const mutation of mutationsList) {
		if (mutation.attributeName === "class") {
			if (mutation.target.className === "active") {
				const response = await fetch('https://api.github.com/repos/numselli/numselli.github.io/contents/photogallery_images/');
				const data = await response.json();
				for (let file of data) {
					$('#photos').append(`<div id="${file.name}"><h3 class="major">${file.name}</h3> <ul id="${file.name}ImgContainer" class="ul"></div>`)
					$.ajax({
						url: `https://api.github.com/repos/numselli/numselli.github.io/contents/${file.path}`,
						success: function (data) {
							data.map(({ download_url, name }) => {
								$(`#${file.name.replaceAll('%20', "")}ImgContainer`).append(`<li class="li"><img src="${download_url}" alt="${name}" loading="lazy"></li>`)
							});
						}
					});
				}
			} 
		}
	}
};
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
