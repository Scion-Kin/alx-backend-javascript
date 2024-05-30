export default function handleResponseFromAPI(promise) {
  promise
    .then(() => ({ success: 200 }))
    .catch(() => { throw new Error() })
    .finally(() => console.log('Got a response from the API'));
}
