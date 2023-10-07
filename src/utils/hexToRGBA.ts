export default function hexToRGBA(hex: string, opacity: number = 1): string {
  if (hex.charAt(0) !== "#") {
    return "rgba(0, 0, 0, 1)";
  }
  const red = parseInt(hex.substring(1, 3), 16);
  const green = parseInt(hex.substring(3, 5), 16);
  const blue = parseInt(hex.substring(5, 7), 16);

  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
}
