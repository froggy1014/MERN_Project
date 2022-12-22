import { useReducer, useEffect, ChangeEvent } from 'react';
import { IChangeAction, IInput, IState, TActions } from 'shared/types/Form';

import { validate } from '../../util/validators';
import './Input.css';

const inputReducer = (state: IState, action: TActions) => {
  switch (action.type) {
    case 'CHANGE': {
      return {
        ...state,
        value: (action as IChangeAction).val,
        isValid: validate(
          (action as IChangeAction).val,
          (action as IChangeAction).validators,
        ),
      };
    }
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};

function Input(props: Partial<IInput>) {
  const {
    id,
    onInput,
    type,
    rows,
    placeholder,
    label,
    errorText,
    initialValid,
    initialValue,
    validators,
    element,
  } = props;
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue || '',
    isTouched: false,
    isValid: initialValid || false,
  });

  const { value, isValid } = inputState;

  useEffect(() => {
    onInput?.(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH',
    });
  };

  const El =
    element === 'input' ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={id}
        rows={rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && 'form-control--invalid'
      }`}
    >
      <label htmlFor={id}>{label}</label>
      {El}
      {!inputState.isValid && inputState.isTouched && <p>{errorText}</p>}
    </div>
  );
}

export default Input;
