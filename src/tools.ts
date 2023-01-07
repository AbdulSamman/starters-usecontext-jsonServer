/**
 * Capitalizes the first letter of a string.
 *
 * const title = qstr.capitalizeFirstLetter( 'the study group');
 *
 * The study group
 */
export function capitalizeFirstLetter(line: string) {
  return line.charAt(0).toUpperCase() + line.slice(1);
}
