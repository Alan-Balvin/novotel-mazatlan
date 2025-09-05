export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface AlertInfo {
    type: string;
    text: string;
}

export type InputChangeEvent = React.ChangeEvent< HTMLInputElement | HTMLTextAreaElement >;
export type FormSubmitEvent = React.FormEvent<HTMLFormElement>;