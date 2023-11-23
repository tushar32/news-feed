
// or ESM/TypeScript import
import Ajv from "ajv"

export const validateSchema = (currentNFSource, response) => {
  const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

  const schema = APIResponseSchema[currentNFSource]
  const validate = ajv.compile(schema)
  console.log(validate.errors)
  const valid = validate(response)

  console.log('valid', valid)

  if (!valid) 

  return valid

}


export const APIResponseSchema = {  
    newsOrg:{
      "$id": "https://example.com/blog-post.schema.json",
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "description": "A representation of a news feed post",
      "type": "object",
      "required": ["articles"],
      "properties": {
        "status": {
          "type": "string"
        },    
        "totalResults": {
          "type": "number"
        },    
        "articles": {    
          "type": "array", 
          "items": {    
            "type": "object",   
            "required": ["title","description", "publishedAt", "urlToImage", "url"],
            "properties": {
                "title": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                }, 
                "url": {
                    "type": "string"
                },  
                "urlToImage": {
                    "type": "string"
                },                
                "publishedAt": {
                    "type": "string",
                    "format": "date-time"
                }
            }

          }
        }
      }
    }
}


    