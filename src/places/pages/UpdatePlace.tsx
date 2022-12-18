import { useQueryClient } from '@tanstack/react-query';
import { TPlaceDetail, IQueryPlaceData } from 'shared/types/Place';
import React, {
  FormEventHandler,
  useContext,
  useEffect,
  useState,
} from 'react';
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

import './PlaceForm.css';
import { QueryKey } from '../../shared/constants';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import usePatchPlace from '../../shared/hooks/usePatchPlace';

function UpdatePlace() {
  const ctx = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const { placeId } = useParams();
  const queryClient = useQueryClient();
  const [identifiedPlace, setIdentifiedPlace] = useState<TPlaceDetail>();

  const state = queryClient.getQueryState([QueryKey.PLACES, ctx.userId]);

  const { mutateAsync: UpdatePlace } = usePatchPlace();

  useEffect(() => {
    if (state !== undefined) {
      if ((state.data as IQueryPlaceData).place.length !== 0) {
        setIdentifiedPlace(
          (state.data as IQueryPlaceData).place.filter(
            (p: TPlaceDetail) => p.id === placeId,
          )[0],
        );
      }
    }
  }, [state, placeId]);

  /**
   * address: "333 Starke Rd, Carlstadt, NJ 07072"
creator: "639c79b38df3745e6c31c52e"
description: "The Company in NJ where I was working as intern last year... "
id: "639c7bdd8df3745e6c31c536"
image: "uploads/images/78e6bf4b-fdfb-42a6-b9bf-93f5d130f668.jpeg"
location: {lat: 40.8332584, lng: -74.0746145}
title: "Grand BK"
__v: 0
_id: "639c7bdd8df3745e6c31c536"
   */

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
    false,
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
        true,
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
  // : React.FormEvent<HTMLFormElement>
  const placeUpdateSubmitHandler = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    await UpdatePlace({
      pid: placeId as string,
      title: formState.inputs.title.value,
      description: formState.inputs.description.value,
      token: ctx.token,
    });
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
}

export default UpdatePlace;
