import projects from "../../projects/list.mjs"

export const route = {
	method: 'GET',
	url: '/api/projects/count',
	handler: async (request, reply) => {
        reply.send(projects.length)
	}
}