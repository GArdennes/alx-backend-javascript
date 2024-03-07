import { uploadPhoto, createUser } from './utils.js'; // eslint-disable-line import/extensions

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (error) {
    console.error('Error during async operations:', error);
    return { photo: null, user: null };
  }
}
