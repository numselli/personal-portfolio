import { eventHandler, readBody } from "h3"

if (import.meta.env) {
    var {discordWebhook} = await import("~/config.mjs")
}

export default eventHandler(
    async a => {
        const body = await readBody(a)

        fetch(discordWebhook,{method: 'post', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({embeds: [{color: 11730954, title: body.subject, timestamp: new Date(), fields: [{"name": "Name", "value": body.name, "inline": true}, {"name": "Email", "value": `[${body.email}](mailto:${body.email})`, "inline": true},{"name": "Message","value": body.message}]}]})}).catch(err=>{})
    }
)

export const schema = {
	method: "post",
	url: "/api/contact/webhook"
}