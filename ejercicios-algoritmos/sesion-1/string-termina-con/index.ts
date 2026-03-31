export default function stringTerminaCon(
  string: string,
  final: string
): boolean {
  // TODO: implement
  return string.substring(final.length - 1) == final;
}
