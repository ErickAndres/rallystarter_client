import Api from '@/services/api'
import axios from 'axios'

export default {
  register (credentials) {
    console.log(credentials)
    axios
    .post('registrations', credentials)
    .then((response) => {
            console.log(response);
          })
    .catch(err => console.log(err))
  },
  login (credentials) {
    console.log(credentials)
    axios
    .post('users/sign_in', credentials)
    .then((response) => {
            console.log(response);
          })
    .catch(err => console.log(err))
  }
}
//Example
//AuthenticationService.register({
//  email: 'testing@gmail.com',
//  password: '123456'
//})
