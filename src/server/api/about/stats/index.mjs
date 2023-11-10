import { defineEventHandler } from "h3"

export default defineEventHandler(async event => {
    return [
        {
          name: "Years of experience",
          value: "7"
        },
        {
          name: "Stars on GitHub",
          value: "21+"
        },
        {
          name: "Positive feedback",
          value: "90%"
        },
        {
          name: "Projects completed",
          value: "8"
        }
    ]
})