export type TInput = {
  value: string;
  isValid: boolean;
};

export type TState = {
  inputs: TInput;
  isValid: boolean;
};

export type TAction = {
  type: string;
  isValid?: boolean;
  value?: string;
  inputs?: TInput;
  inputId: string;
};

type TInputContents = {
  value: string;
  isValid: boolean;
};

export interface FormType {
  value: string | null;
  isValid: boolean;
}

export interface StateType {
  inputs: Record<string, FormType>;
  isValid: boolean;
}

export interface SetData {
  formIsValid: boolean;
  inputs: Record<string, FormType>;
  type: string;
}

export interface InputChange {
  inputId: string;
  isValid: boolean;
  type: string;
  value: string;
}

export type Actions = SetData | InputChange;

// Login State
// inputs: {
//   email:{value: '', isValid: false}
//   password: {value: '', isValid: false}
// }
// isValid: false

// Signup State
// inputs: {
//   email:{value: '', isValid: false}
//   password: {value: '', isValid: false}
//   image: {value: null, isValid: false}
//   name {value: '', isValid: false}
// }
// isValid: false

// newPlace State
// inputs: {
//   address:{value: '', isValid: false}
//   description: {value: '', isValid: false}
//   image: {value: null, isValid: false}
//   title {value: '', isValid: false}
// }
// isValid: false

// updatePlace state
// inputs: {
//   description: {value: '', isValid: false}
//   title {value: '', isValid: false}
// }
// isValid: false

// update action
// formIsValid: boolean;
// inputs: Record<string, FormType>;
// type: string;

// login,newplace action
// inputId:"description"
// isValid:false
// type:"INPUT_CHANGE"
// value:""
