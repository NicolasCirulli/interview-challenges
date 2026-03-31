export default function esIsograma(string: string): boolean {
  // TODO: implement
  if (string.length == 0) return true;
  if (string.split(" ").length > 1) return false;
  const aux = string.split("").map((letra) =>
    letra
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
  );
  return new Set(aux).size == string.length;
}
// Como quitar los tildes se lo consulte a la IA
