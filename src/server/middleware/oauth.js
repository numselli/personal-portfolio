import {Client} from 'oceanic.js'
const client = new Client();

export default defineEventHandler((event) => {
    event.context.oauth = client
})