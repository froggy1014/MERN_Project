
import { useContext } from 'react';
import { AppContext } from '../../shared/context/AppContext';

import { get, post, patch, del } from '../request';


export async function getPlacesByUser(uid) {
  return await get(`places/user/${uid}`);
}

export async function postNewPlace({body, token}) {
  const form = new FormData();
  Object.entries(body).forEach((v) => form.append(v[0], v[1]));
  return await post('places', form, {
    headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': 'Bearer ' + token,
  }
  });
}

export async function patchPlace({pid, title, description, token}) {
  return await patch(`places/${pid}`, {title, description}, {
    headers: {
      'Authorization': 'Bearer ' + token,
    }
  });
}


export async function delPlace({pid, token}) {
  return await del(`places/${pid}`, token);
};