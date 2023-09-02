export function getAirportCountry(dep: string, arr: string) {
  const depCountry = dep.substring(dep.indexOf("Havalimanı") + 11);
  const arrCountry = arr.substring(arr.indexOf("Havalimanı") + 11);
  return {
    depCountry,
    arrCountry,
  };
}
