export default function validarParéntesis(parentesis: string): boolean {
  // TODO: implement
  if (!/\(\)/.test(parentesis) && parentesis.length > 0) return false;
  else if (parentesis.length === 0) return true;
  return validarParéntesis(parentesis.replace(/\(\)/g, ""));
}
