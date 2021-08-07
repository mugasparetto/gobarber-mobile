import { ValidationError } from 'yup';

interface Errors {
  //assim a gente declara que pode ter qualquer chave do tipo string
  [key: string]: string;
}

export default function getValidationErrors(error: ValidationError): Errors {
  const validationErrors: Errors = {};

  error.inner.forEach((err) => {
    validationErrors[err.path!] = err.message;
  });

  return validationErrors;
}
