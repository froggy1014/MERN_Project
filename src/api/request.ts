import request from './core';

export async function get(url: string) {
  return request
    .get(url)
    .then((res) => res.data)
    .catch((error) => error);
}

export async function post(url: string, body: any, header?: any) {
  return request
    .post(url, body, header || null)
    .then((res) => res.data)
    .catch((error) => error);
}

export async function patch(url: string, body: any, header: any) {
  return request
    .patch(url, body, header || null)
    .then((res) => res.data)
    .catch((error) => error);
}

export async function del(url: string, token: string | null) {
  return request
    .delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
    .catch((error) => error);
}
