import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    image:'https://cms-b-assets.familysearch.org/dims4/default/75309ad/2147483647/strip/true/crop/800x500+0+0/resize/1600x1000!/format/webp/quality/90/?url=http%3A%2F%2Ffh.familysearch.org%2Fsystem%2Ffiles%2Fteam%2Fait%2Fimages%2Fblog%2Fstatue-of-liberty-crown-and-torch.jpg',
    title: 'The Statue of Liberty',
    description:'According to the National Park Service, the idea of a monument presented by the French people to the United States was first proposed by Édouard René de Laboulaye, president of the French Anti-Slavery Society and a prominent and important political thinker of his time.',
    address:'Liberty Island',
    createirId:'',
    coordinate: {
      lat: 21.5586484,
      lng: -106.4322772
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    image:'https://cms-b-assets.familysearch.org/dims4/default/75309ad/2147483647/strip/true/crop/800x500+0+0/resize/1600x1000!/format/webp/quality/90/?url=http%3A%2F%2Ffh.familysearch.org%2Fsystem%2Ffiles%2Fteam%2Fait%2Fimages%2Fblog%2Fstatue-of-liberty-crown-and-torch.jpg',
    title: 'The Statue of Liberty',
    description:'According to the National Park Service, the idea of a monument presented by the French people to the United States was first proposed by Édouard René de Laboulaye, president of the French Anti-Slavery Society and a prominent and important political thinker of his time.',
    address:'Liberty Island',
    createirId:'',
    coordinate: {
      lat: 21.5586484,
      lng: -106.4322772
    },
    creator: 'u2',
  }
]

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
  return <PlaceList items={loadedPlaces} />
}

export default UserPlaces;