export default function contarDuplicados(texto: string): number {
  // TODO: implementar
  const aux = texto
    .split("")
    .map((letra) =>
      letra
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase(),
    )
    .reduce((acc, act) => {
      if (acc[act]) {
        acc[act] += 1;
      } else {
        acc[act] = 1;
      }
      return acc;
    }, {});
  const result = Object.entries(aux).filter((e: {}) => e[1] >= 2).length;
  return result;
}
