export default function guardrail(mathFunction) {
  try {
    const queue = [mathFunction(), 'Guardrail was processed'];
    return queue;
  } catch (error) {
    const queue = [String(error), 'Guardrail was processed'];
    return queue;
  }
}
