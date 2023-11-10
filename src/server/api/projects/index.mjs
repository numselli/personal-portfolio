import { defineEventHandler } from "h3"

export default defineEventHandler(async event => {
    // (projectID, projectName, description, status)

  return await event.context.pgPool`SELECT * FROM projects`
})

// ALTER TABLE IF EXISTS public.data
//     ADD COLUMN sadf json;