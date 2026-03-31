export default function moverCeros(array: unknown[]): unknown[] {
  // TODO: implement
  const inicio = [];
  const final = [];
  for (const element of array) {
    if (element === 0) {
      final.push(element);
    } else {
      inicio.push(element);
    }
  }
  return [...inicio, ...final];
}
