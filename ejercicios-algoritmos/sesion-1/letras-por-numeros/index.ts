export default function letrasPorNumeros(string: string): string {
  // TODO: implement
  const swap = (letra: string) => {
    const l = letra
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    return l.charCodeAt(0) - 96;
  };
  const aux = string.replace(/\s+/g, "").split("").map(swap).join(" ");
  return aux;
}

// Le pregunte a la IA la regex para quitar espacios
