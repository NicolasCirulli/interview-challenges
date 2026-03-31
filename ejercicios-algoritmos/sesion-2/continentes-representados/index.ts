type Registry = {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
};

export default function continentesRepresentados(array: Registry[]): boolean {
  // TODO: implement
  const continentes = {
    Africa: false,
    Americas: false,
    Asia: false,
    Europe: false,
    Oceania: false,
  };
  for (const persona of array) {
    continentes[persona.continent] = true;
  }
  return Object.values(continentes).every((v) => v);
}
// Bonus 1
function desarrolladoresDeContinente(
  registro: Registry[],
  lenguaje: string,
  continente: string
) {
  return registro.filter(
    ({ language, continent }) =>
      language === lenguaje && continent === continente
  ).length;
}
interface RegistyExtended extends Registry {
  greeting: string;
}
// Bonus 2
export function registroActualizado(array: Registry[]): RegistyExtended[] {
  return array.map((el) => {
    return {
      ...el,
      greeting: `Hi ${el.firstName}, what do you like the most about ${el.language}?`,
    };
  });
}

//Bonus 3
export function lenguajesRepresentados(array: Registry[]) {
  return Array.from(array.map((e) => e.language));
}
