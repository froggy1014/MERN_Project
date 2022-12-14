import request from './core';

export async function get(url) {
  return await request
    .get(url)
    .then((res) => res.data)
    .catch((error) => error);
}

export async function post(url, body, header) {
  return await request
    .post(url, body, header || null)
    .then((res) => res.data)
    .catch((error) => error);
}

export async function patch(url, body) {
  return await request
    .patch(url, body)
    .then((res) => res.data)
    .catch((error) => error);
}

export async function del(url, token) {
  return await request
  .delete(url, {
    headers: {
    'Authorization': 'Bearer ' + token,
  }},)
  .then((res) => res.data)
  .catch((error) => error);
}