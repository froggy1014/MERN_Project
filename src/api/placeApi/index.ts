import { INewPlaceBody, IPatchPlace, IDelPlace } from './placeAPI.d';
import { get, post, patch, del } from '../request';

export async function getPlacesByUser(uid: string) {
  return get(`places/user/${uid}`);
}

export async function postNewPlace({ body, token }: INewPlaceBody) {
  const form = new FormData();
  Object.entries(body).forEach((v) => form.append(v[0], v[1]));
  return post('places', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function patchPlace({
  pid,
  title,
  description,
  token,
}: IPatchPlace) {
  return patch(
    `places/${pid}`,
    { title, description },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
}

export async function delPlace({ pid, token }: IDelPlace) {
  return del(`places/${pid}`, token);
}
