import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoUser = await Promise.all([
        uploadPhoto(),
        createUser(),
    ]);


    return Promise.resolve({ photo, user });
  } catch (err) {
    return Promise.resolve({ photo: null, user: null });
  }
}