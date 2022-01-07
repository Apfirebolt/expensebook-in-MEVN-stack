import { extend } from 'vee-validate';
import {
  // eslint-disable-next-line camelcase
  required, email, length, min, required_if,
} from 'vee-validate/dist/rules';

extend('required', required);
extend('email', email);
extend('min', min);
extend('length', length);
extend('required_if', required_if);
// check if text in an input is only whitespace
extend('clean', (value) => Boolean(value.trim()));

extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target;
  },
  message: 'Password confirmation does not match',
});
