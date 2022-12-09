
import { get, post } from '../request';



export async function postNewPlace(body) {
  return await post('places', body);
}
