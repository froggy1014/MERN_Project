
import { get, post, patch } from '../request';


export async function getPlacesByUser(uid) {
  return await get(`places/user/${uid}`);
}

export async function postNewPlace(body) {
  return await post('places', body);
}

export async function patchPlace({pid, title, description}) {
  return await patch(`places/${pid}`, {title, description});
}


