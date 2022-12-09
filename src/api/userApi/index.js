
import { get, post } from '../request';


// export async function getMyOrders() {
//   return await get(
//     `api/users`,
//   );
// }
export async function getUsers() {
  return await get('/users');
}


export async function postSignup(body) {
  return await post(`users/signup`, body);
}


export async function postLogin(body) {
  return await post(`users/login`, body);
}