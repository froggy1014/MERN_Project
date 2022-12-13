
import { get, post } from '../request';

export async function getUsers() {
  return await get('/users');
}


export async function postSignup(body) {
  const form = new FormData();
  form.append('email', body.email)
  form.append('name', body.name)
  form.append('password', body.password)
  form.append('image', body.image)
  return await post(`users/signup`, form, {
    headers: {
    'Content-Type': 'multipart/form-data'
  }
  });
}


export async function postLogin(body) {
  return await post(`users/login`, body);
}