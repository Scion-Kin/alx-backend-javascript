import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    console.log((await uploadPhoto()).body,
      (await createUser()).firstName,
      (await createUser()).lastName);
  } catch (error) {
    console.log('Signup system offline');
  }
}
