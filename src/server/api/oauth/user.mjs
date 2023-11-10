import { defineEventHandler, createError } from 'h3';

export default defineEventHandler(async(event) => {
    if (!event.context.session.accessToken) throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized',
    })

    return event.context.session.userInfo
})