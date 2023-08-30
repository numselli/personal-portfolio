import projects from "../../projects/list.mjs"

export const route = {
	method: 'GET',
	url: '/api/projects/list',
	handler: async (request, reply) => {
        reply.send(projects)
	}
}