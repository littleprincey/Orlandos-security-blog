import { getBlogs, addBlog } from '../apis/blogsAPI'

export const SET_BLOGS = 'SET_BLOGS'
export const SET_LOADED = 'SET_LOADED'
export const SET_ADDED_BLOG = 'SET_ADDED_BLOG'

export function setBlogs (blogs) {
  return {
    type: SET_BLOGS,
    blogs
  }
}

export const setLoaded = () => {
  return {
    type: SET_LOADED,
  };
};
export const setAddedBlog = () => {
  return {
    type: SET_ADDED_BLOG,
    blog
  };
};

export const fetchBlogsFromDBandAddToRedux = () => {
  return dispatch => {
    return getBlogs()
      .then(blogs => {
        dispatch(setBlogs(blogs))
        dispatch(setLoaded())
      })
  }
}

export const addBlogToReduxAndDB = (blogData) => {
  return dispatch => {
    return addBlog(blogData)
      .then(blog => {
        dispatch(setAddedBlog(blog)
        )
      } )
  }
}

