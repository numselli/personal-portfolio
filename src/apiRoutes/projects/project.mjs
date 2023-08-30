import projects from "../../projects/list.mjs"

export const route = {
	method: 'GET',
	url: '/api/project/:project',
	handler: async (request, reply) => {
		const projectIndex = projects.findIndex(element => element.id === request.params.project.toLowerCase());

		if (projectIndex === -1) return reply.status(404).send()

        reply.send(projects[projectIndex])
	}
}