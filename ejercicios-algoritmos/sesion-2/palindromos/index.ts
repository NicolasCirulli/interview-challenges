export default function posiblePalindromo(num: number): boolean {
  // TODO: implement
  const reverse = Number(String(num).split("").reverse().join(""));
  return num == reverse;
}
