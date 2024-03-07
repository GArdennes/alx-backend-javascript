import { uploadPhoto, createUser } from './utils.js'; // eslint-disable-line import/extensions

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((result) => {
      console.log(`${result[0].body} ${result[1].firstName} ${result[1].lastName}`);
    })
    .catch((error) => {
      console.error('Signup system offline');
      throw error;
    });
}
