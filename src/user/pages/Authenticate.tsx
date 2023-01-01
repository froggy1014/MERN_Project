import { FormEvent, useState } from 'react';

import Card from '../../shared/components/UIElements/Card';
import { LoadingSpinner } from '../../shared/components/UIElements';
import Input from '../../shared/components/FormElements/Input';
import ImageUpload from '../../shared/components/FormElements/ImageUpload';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import useSignup from '../../shared/hooks/useSignup';
import useLogin from '../../shared/hooks/useLogin';

function Authenticate() {
  const [isLoginMode, setIsLoginMode] = useState<boolean>(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false,
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          image: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid,
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false,
          },
          image: {
            value: null,
            isValid: false,
          },
        },
        false,
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const { isLoading: signupLoading, mutateAsync: Signup } = useSignup();
  const { isLoading: loginLoading, mutateAsync: Login } = useLogin();

  const authSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();

    if (isLoginMode) {
      await Login({
        email: formState.inputs.email.value,
        password: formState.inputs.password.value,
      });
    } else {
      await Signup({
        name: formState.inputs.name.value,
        email: formState.inputs.email.value,
        password: formState.inputs.password.value,
        image: formState.inputs.image.value,
      });
    }
  };

  return (
    <Card className="w-11/12 max-w-[25rem] my-28 mx-auto">
      {(loginLoading || signupLoading) && (
        <div className="center">
          <LoadingSpinner asOverlay />
        </div>
      )}
      <h2>Login Required</h2>
      <hr />
      <form className="mb-4" onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name."
            onInput={inputHandler}
          />
        )}
        {!isLoginMode && (
          <ImageUpload center id="image" onInput={inputHandler} />
        )}
        <Input
          element="input"
          id="email"
          type="email"
          label="E-mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email"
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="password"
          validators={[VALIDATOR_MINLENGTH(6)]}
          errorText="Please enter a valid password, at least 6 characters."
          onInput={inputHandler}
        />
        <div className="w-full flex justify-center">
          <Button type="submit" disabled={!formState.isValid}>
            {isLoginMode ? 'LOGIN' : 'SIGNUP'}
          </Button>
        </div>
      </form>
      <div className="w-full flex justify-center">
        <Button inverse onClick={switchModeHandler}>
          SWITCH TO {!isLoginMode ? 'LOGIN' : 'SIGNUP'}
        </Button>
      </div>
    </Card>
  );
}

export default Authenticate;
