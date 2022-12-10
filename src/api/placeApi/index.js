
import { get, post } from '../request';


export async function getPlacesByUser(uid) {
  return await get(`places/user/${uid}`);
}


export async function postNewPlace(body) {
  return await post('places', body);
}
