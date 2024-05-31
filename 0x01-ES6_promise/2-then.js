export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ success: 200, body: 'success' }))
    .catch(() => { throw new Error(); })
    .finally(() => console.log('Got a response from the API'));
}
