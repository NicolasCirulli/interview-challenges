import type { Estudiante } from "./types";

const notas = {
  A: 30,
  B: 20,
  C: 10,
  D: 5,
};
const estudiantes = [
  ["estudiante1", 150, ["B", "A", "A", "C", "A", "A"]],
  ["estudiante2", 120, ["B", "A", "A", "A"]],
  ["estudiante3", 160, ["B", "A", "A", "A", "A"]],
  ["estudiante4", 140, ["B", "A", "A", "C", "A"]],
];
export default function encontrarHackers(estudiantes: Estudiante[]): string[] {
  // TODO: implementar
  const aux = estudiantes.map((e) => {
    let total = e[2].reduce((acc, act) => {
      return acc + notas[act];
    }, 0);
    if (e[2].length >= 5 && e[2].every((n) => ["A", "B"].includes(n))) {
      total += 20;
    }
    if (total > 200) {
      total = 200;
    }
    return total;
  });
  console.log(aux);
  return estudiantes.filter((es, i) => es[1] !== aux[i]).map((e) => e[0]);
}
