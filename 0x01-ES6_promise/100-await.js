import uploadPhoto from "./utils.js";
import createUser from "./utils.js";

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (error) {
    console.error("Error during async operations:", error);
    return { photo: null, user: null };
  }
}
