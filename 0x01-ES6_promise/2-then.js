export default function handleResponseFromAPI(promise) {
  promise
    .then(() => ({ success: 200, body: 'success' }))
    .catch(() => Error())
    .finally(() => console.log('Got a response from the API'));
}