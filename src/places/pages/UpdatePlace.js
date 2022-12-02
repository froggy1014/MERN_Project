import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

import './PlaceForm.css';

const DUMMY_PLACES = [
  {
    id: 'p1',
    image:
      'https://cms-b-assets.familysearch.org/dims4/default/75309ad/2147483647/strip/true/crop/800x500+0+0/resize/1600x1000!/format/webp/quality/90/?url=http%3A%2F%2Ffh.familysearch.org%2Fsystem%2Ffiles%2Fteam%2Fait%2Fimages%2Fblog%2Fstatue-of-liberty-crown-and-torch.jpg',
    title: 'The Statue of Liberty',
    description:
      'According to the National Park Service, the idea of a monument presented by the French people to the United States was first proposed by Édouard René de Laboulaye, president of the French Anti-Slavery Society and a prominent and important political thinker of his time.',
    address: 'Liberty Island',
    createirId: '',
    coordinate: {
      lat: 40.689247,
      lng: -74.044502,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    image:
      'https://cms-b-assets.familysearch.org/dims4/default/75309ad/2147483647/strip/true/crop/800x500+0+0/resize/1600x1000!/format/webp/quality/90/?url=http%3A%2F%2Ffh.familysearch.org%2Fsystem%2Ffiles%2Fteam%2Fait%2Fimages%2Fblog%2Fstatue-of-liberty-crown-and-torch.jpg',
    title: 'The Statue of Liberty',
    description:
      'According to the National Park Service, the idea of a monument presented by the French people to the United States was first proposed by Édouard René de Laboulaye, president of the French Anti-Slavery Society and a prominent and important political thinker of his time.',
    address: 'Liberty Island',
    createirId: '',
    coordinate: {
      lat: 40.689247,
      lng: -74.044502,
    },
    creator: 'u2',
  },
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);
  // setFormData, identifiedPlace

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  const placeUpdateSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.input);
  };

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading ...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="please enter a valid title"
        onInput={() => {}}
        initialValue={formState.input.title.value}
        initialIsValid={formState.input.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="please enter a valid description at least 5 characters"
        onInput={inputHandler}
        initialValue={formState.input.description.value}
        initialIsValid={formState.input.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
