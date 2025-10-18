export type AlertFeature = {
  properties: {
    event?: string;
    areaDesc?: string;
    severity?: string;
    status?: string;
    headline?: string;
  };
};

type ForecastPeriod = {
  name?: string;
  temperature?: number;
  temperatureUnit?: string;
  windSpeed?: string;
  windDirection?: string;
  shortForecast?: string;
};

type AlertsResponse = {
  features: AlertFeature[];
};

type PointsResponse = {
  properties: {
    forecast?: string;
  };
};

type ForecastResponse = {
  properties: {
    periods: ForecastPeriod[];
  };
};
