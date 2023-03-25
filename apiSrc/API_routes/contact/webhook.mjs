export const route = {
	method: 'POST',
	url: '/api/contact/webhook',
	handler: async (request, reply) => {
		console.log(request.body)
	}
}