import request from 'superagent'

const rootUrl = '/api/v1/blogs'

export function getBlogs () {
  return request.get(rootUrl)
    .then(res => { 
      return res.body
      
    })
}
export function addBlog(blogData) {
  return request.post(rootUrl)
    .send(blogData)
    .then(res => { 
      return res.body
      
    })
}

