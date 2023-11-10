import { defineEventHandler, getRouterParams } from "h3"

export default defineEventHandler(async event => {
  const path = getRouterParams(event)

  const project = await event.context.pgPool`SELECT * FROM projects WHERE id = ${path.projectID}`

  return project[0]
})