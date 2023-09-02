export interface IFilterTypes {
  selectedSortBy: string | undefined;
  selectedAirlines: string | undefined;
  setSelectedSortBy: (sortBy: string | undefined) => void;
  setSelectedAirlines: (airline: string | undefined) => void;
}
