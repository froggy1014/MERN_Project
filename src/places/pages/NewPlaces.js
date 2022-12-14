import React, {useContext} from 'react';

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './PlaceForm.css';
import useNewPlace from '../../shared/hooks/useNewPlace';
import { AppContext } from '../../shared/context/AppContext';
import { ImageUpload, Input, Button } from 'shared/components/FormElements'


const NewPlace = () =>  {
  const cxt = useContext(AppContext);
  const [formState, inputHandler] = useForm({
          title: {
          value: '',
          isValid: false,
        },
        description: {
          value: '',
          isValid: false,
        },
        address: {
          value: '',
          isValid: false,
        },
        image: {
          value: null,
          isValid: false,
        },},
        false,
    );

    const { isLoading, mutateAsync: newPlace} = useNewPlace();

    const placeSubmitHandler = event => {
      event.preventDefault();
      async function postPlace() {
        const { title, description, address, image } = formState.inputs;
        const body = {
          title : title.value,
          description : description.value,
          address : address.value,
          creator: cxt.userId,
          image: image.value,
        }
        await newPlace({body, token: cxt.token});
      }
      postPlace();
    }
    return (
      <form className="place-form" onSubmit={placeSubmitHandler}>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="please enter a valid title"
          onInput={inputHandler}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="please enter a valid description at least 5 characters"
          onInput={inputHandler}
        />
        <Input
          id="address"
          element="input"
          label="Address"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="please enter a valid address"
          onInput={inputHandler}
        />
        <ImageUpload center id="image" onInput={inputHandler} errorText="Please provide image"/>
        <Button type="submit" disabled={!formState.isValid}>
          ADD PLACE
        </Button>
      </form>
    );
  }


export default NewPlace;
