import request from 'superagent'

const rootUrl = '/api/v1'

export function getBlogs () {
  return request.get(rootUrl + '/blogs')
    .then(res => { 
      // console.log(res.body.blogs)
      return res.body.blogs
      
    })
}
