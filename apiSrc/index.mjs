import fastify from 'fastify'
import fastifyFormBody from '@fastify/formbody'

import routeList from './routes/list.mjs'

const API = fastify();
API.register(fastifyFormBody)

await Promise.all(routeList.map(async endpoint => {
	API.route(endpoint)
}))

API.listen({ port: 8010, host: "0.0.0.0" }, (err, address) => {
	console.log(`API live on 0.0.0.0:8010`)
	if (err) throw err
});
