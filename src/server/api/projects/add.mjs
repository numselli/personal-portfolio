import { defineEventHandler, readMultipartFormData } from "h3"

export default defineEventHandler(async event => {
  const body = await readMultipartFormData(event)

  const textFieldsMap = new Map()

  const textFieldsArray = body.filter(i=>!i.filename)
  const imageFieldsArray = body.filter(i=>i.filename)

  textFieldsArray.forEach(item => {
    textFieldsMap.set(item.name, item.data.toString())
  })

  const imgIDs = imageFieldsArray.map(async file => {
    const projectID = textFieldsMap.get("projectID")
    const apsadf = await event.context.minio.putObject("name", `${file.filename}`
    , file.data, {
      projectID: projectID
    })

    return apsadf.etag
  })

  console.log(textFieldsArray)

  // imgIDs

  // event.context.pgPool`INSERT INTO projects (id, name, description, status) VALUES (${textFieldsMap.get("projectID")}, ${textFieldsMap.get("projectName")}, ${textFieldsMap.get("description")}, ${textFieldsMap.get("status")})`.catch(e=>{})

       
        // links array 
        // tools array
        // images array
})