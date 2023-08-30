import projects from "../../projects/list.mjs"

export const route = {
	method: 'GET',
	url: '/api/projects/search',
	querystring: {
		query: { type: 'string' }
	},
	handler: async (request, reply) => {
		if (!request.query.query) return reply.status(400).send()
		const filterdProjects = projects.filter(element => element.id.includes(request.query.query.toLowerCase()));

        reply.send(filterdProjects)
	}
}