import uploadPhoto from './5-photo-reject.js'; // eslint-disable-line import/extensions
import signUpUser from './4-user-promise.js'; // eslint-disable-line import/extensions

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([uploadPhoto(fileName), signUpUser(firstName, lastName)])
    .then((results) => {
      const formattedResults = results.map((result) => ({
        status: result.status ? 'resolved' : 'rejected',
        value: result.status === 'fulfilled' ? results.value : String(results.reason),
      }));
      return formattedResults;
    })
    .catch((error) => [{ status: 'rejected', value: error }]);
}
