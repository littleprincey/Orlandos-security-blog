import { getBlogs } from '../apis/blogsAPI'

export const SET_BLOGS = 'SET_BLOGS'
export const SET_LOADED = 'SET_LOADED'

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

export const fetchBlogsFromDBandAddToRedux = () => {
  return dispatch => {
    return getBlogs()
      .then(blogs => {
        dispatch(setBlogs(blogs))
        dispatch(setLoaded())
      })
  }
}

