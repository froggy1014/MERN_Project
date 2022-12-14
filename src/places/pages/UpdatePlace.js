import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../shared/context/AppContext';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

import { useQueryClient } from '@tanstack/react-query';

import './PlaceForm.css';
import { QueryKey } from '../../shared/constants';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import usePatchPlace from '../../shared/hooks/usePatchPlace';

const UpdatePlace = () => {
  const ctx = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;
  const queryClient = useQueryClient();
  const [identifiedPlace, setIdentifiedPlace] = useState(false);

  const state = queryClient.getQueryState([
    QueryKey.PLACES,
    ctx.userId,
  ]);
  const { mutateAsync: UpdatePlace } = usePatchPlace();

  useEffect(() => {
    if (state) {
      setIdentifiedPlace(state.data.place.filter((v) => v.id === placeId)[0]);
    }
  }, [state, placeId]);

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
      setIsLoading(false);
    }
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

  const placeUpdateSubmitHandler = async (e) => {
    e.preventDefault();
    const data = await UpdatePlace({
      pid: placeId,
      title: formState.inputs.title.value,
      description: formState.inputs.description.value,
    });
    console.log(data);
  };

  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner asOverlay />
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
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="please enter a valid description at least 5 characters"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
