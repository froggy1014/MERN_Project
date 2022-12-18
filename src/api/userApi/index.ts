import { get, post } from '../request';
import { ISignup } from './userAPI';

export async function getUsers() {
  return get('users');
}

export async function postSignup(body: ISignup) {
  const form = new FormData();
  form.append('email', body.email);
  form.append('name', body.name);
  form.append('password', body.password);
  form.append('image', body.image);
  return post(`users/signup`, form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export async function postLogin(body: { email: string; password: string }) {
  return post(`users/login`, body);
}
