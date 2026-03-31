export default function filtrarPares(array: string[]): string[] {
  const aux = {};
  for (const letra of array) {
    if (aux[letra]) {
      aux[letra] = aux[letra] + 1;
    } else {
      aux[letra] = 1;
    }
  }
  return Object.entries(aux)
    .filter((temp: [string, number]) => temp[1] % 2 == 0)
    .map((temp) => toNumber(temp[0]));
}

function toNumber(caracter) {
  if (Number(caracter)) return Number(caracter);
  else return caracter;
}

/*
["A","B","A","C","C","C","C"] // -> ["A","C"]
[1,2,3,1,2] // -> [1,2]
*/
