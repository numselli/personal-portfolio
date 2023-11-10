import { defineEventHandler, readBody } from "h3"
import { discordWebhook } from "~/config.mjs"

export default defineEventHandler(async event => {
    const body = await readBody(event)

    fetch(discordWebhook,{method: 'post', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({embeds: [{color: 11730954, title: body.subject, timestamp: new Date(), fields: [{"name": "Name", "value": body.name, "inline": true}, {"name": "Email", "value": `[${body.email}](mailto:${body.email})`, "inline": true},{"name": "Message","value": body.message}]}]})}).catch(err=>{})
})