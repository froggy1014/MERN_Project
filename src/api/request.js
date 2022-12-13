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

export async function del(url) {
  return await request
  .delete(url)
  .then((res) => res.data)
  .catch((error) => error);
}