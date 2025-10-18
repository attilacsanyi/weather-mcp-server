export type AlertFeature = {
  properties: {
    event?: string;
    areaDesc?: string;
    severity?: string;
    status?: string;
    headline?: string;
  };
};

export type ForecastPeriod = {
  name?: string;
  temperature?: number;
  temperatureUnit?: string;
  windSpeed?: string;
  windDirection?: string;
  shortForecast?: string;
};

export type AlertsResponse = {
  features: AlertFeature[];
};

export type PointsResponse = {
  properties: {
    forecast?: string;
  };
};

export type ForecastResponse = {
  properties: {
    periods: ForecastPeriod[];
  };
};
