export default function guardrail(mathFunction) {
  const queue = ['Guardrail was processed'];
  try {
    queue.unshift(mathFunction());
  } catch (error) {
    queue.unshift(String(error));
  }
  return queue;
}
