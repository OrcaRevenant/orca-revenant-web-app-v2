export default function toPascalCase(str: string) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : ``;
}
