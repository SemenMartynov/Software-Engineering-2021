import { makeAutoObservable } from 'mobx';

const locationsKey = 'TrackingLocations';

const removeLocation = (
  locations: string[],
  removeLocationName: string
): string[] => locations.filter((location) => location !== removeLocationName);

const addLocation = (locations: string[], newLocation: string): string[] => [
  ...locations,
  newLocation,
];

class LocationList {
  locations: string[] = [];
  initialized: boolean = false;
  wasSearch: boolean = false;
  lastSearch: string = 'Hanoi';

  constructor() {
    makeAutoObservable(this);
  }

  removeLocation(removeLocationName: string) {
    this.locations = removeLocation(this.locations, removeLocationName);
    const stringifiedLocation = JSON.stringify(this.locations);
    window.localStorage.setItem(locationsKey, stringifiedLocation);
  }

  addLocation(newLocation: string) {
    if (!this.locations.includes(newLocation)) {
      this.locations = addLocation(this.locations, newLocation);
      const stringifiedLocation = JSON.stringify(this.locations);
      window.localStorage.setItem(locationsKey, stringifiedLocation);
    }
  }

  initializeLocations() {
    const unparsedLocations = window.localStorage.getItem(locationsKey) || '[]';
    const parsedLocations = JSON.parse(unparsedLocations);
    this.locations = [...parsedLocations];
    this.initialized = true;
  }
}

const store = new LocationList();

export default store;
