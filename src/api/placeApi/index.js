
import { get, post, patch, del } from '../request';


export async function getPlacesByUser(uid) {
  return await get(`places/user/${uid}`);
}

export async function postNewPlace(body) {
  const form = new FormData();
  Object.entries(body).forEach((v) => form.append(v[0], v[1]));
  return await post('places', form, {
    headers: {
    'Content-Type': 'multipart/form-data'
  }
  });
}

export async function patchPlace({pid, title, description}) {
  return await patch(`places/${pid}`, {title, description});
}


export async function delPlace(pid) {
  return await del(`places/${pid}`);
}