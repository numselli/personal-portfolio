export const route = {
	method: 'GET',
	url: '/img/:project/:fileName',
	handler: (request, reply) => {
        reply.sendFile(`${request.params.project}/images/${request.params.fileName}`) // serving path.join(__dirname, 'public', 'myHtml.html') directly
	}
}