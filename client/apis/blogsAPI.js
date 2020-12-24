import request from 'superagent'

const rootUrl = '/api/v1/blogs'

export function getBlogs () {
  return request.get(rootUrl)
    .then(res => { 
      return res.body
      
    })
}

