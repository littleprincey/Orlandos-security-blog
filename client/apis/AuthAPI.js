import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'

const rootUrl = '/api/v1/users'
const acceptJsonHeader = { Accept: 'application/json' }

export function updateNameAndEmail (user) {
  return request.post(rootUrl)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .send(user)
    .then(res => res.body.users)
    .catch(logError)
}
