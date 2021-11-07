export interface responseInterface {
  error: {
    message: string;
  };
  current: {
    last_updated: string;
    temp_c: number;
    condition: {
      text: string;
    };
    feelslike_c: number;
    wind_kph: number;
    wind_dir: string;
    pressure_mb: number;
    cloud: number;
    humidity: number;
    precip_mm: number;
  };
  location: {
    country: string;
    name: string;
  };
}
