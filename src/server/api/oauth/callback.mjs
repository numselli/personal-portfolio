import { defineEventHandler, getQuery, sendRedirect } from 'h3';
import { host, oauth2 } from '~/static/apiConfig.mjs';

export default defineEventHandler(async(event) => {
    const params = getQuery(event)

    const tokens = await event.context.oauth.rest.oauth.exchangeCode({
        code: params.code,
        clientSecret: oauth2.clientSecret,
        clientID: oauth2.clientID,
        redirectURI: host + "/api/oauth/callback"
    }).catch(e=> console.log(e));

    const OAuthHelper = event.context.oauth.rest.oauth.getHelper(`Bearer ${tokens.accessToken}`)
    event.context.session.userInfo = (await OAuthHelper.getCurrentAuthorizationInformation()).user;

    await sendRedirect(event, host, 302)
})