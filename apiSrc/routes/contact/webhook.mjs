import {discordWebhook} from '/config/apiConfig.mjs'

export const route = {
	method: 'POST',
	url: '/api/contact/webhook',
	handler: async (request, reply) => {
		fetch(discordWebhook,{method: 'post', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({embeds: [{color: 11730954, title: request.body.subject, timestamp: new Date(), fields: [{"name": "Name", "value": request.body.name, "inline": true}, {"name": "Email", "value": `[${request.body.email}](mailto:${request.body.email})`, "inline": true},{"name": "Message","value": request.body.message}]}]})}).catch(err=>{})
	}
}