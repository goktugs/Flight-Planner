export function getAirportIATA(dep: string, arr: string) {
  const depIATA = dep.split(" ")[0];
  const arrIATA = arr.split(" ")[0];
  return {
    depIATA,
    arrIATA,
  };
}
