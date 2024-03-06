import uploadPhoto from "./5-photo-reject.js";
import signUpUser from "./4-user-promise.js";

export function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([uploadPhoto(fileName), signUpUser(firstName, lastName)])
    .then((results) => {
      const formattedResults = results.map((result, index) => ({
        status: result.isFulfilled ? "resolved" : "rejected",
        value: result.value,
      }));
      return formattedResults;
    })
    .catch((error) => {
      return [{ status: "rejected", value: error }];
    });
}
