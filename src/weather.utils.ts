import { AlertFeature } from './weather.types.js';

const USER_AGENT = 'weather-app/1.0';

/**
 * Helper function for making NWS API requests
 * @param url - The URL to make the request to
 * @returns The response from the API
 */
export const makeNWSRequest = async <T>(url: string): Promise<T | null> => {
  const headers = {
    'User-Agent': USER_AGENT,
    Accept: 'application/geo+json',
  };

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return (await response.json()) as T;
  } catch (error) {
    console.error('Error making NWS request:', error);
    return null;
  }
};

/**
 * Format alert data
 * @param feature - The alert feature
 * @returns The formatted alert data
 */
const formatAlert = (feature: AlertFeature): string => {
  const props = feature.properties;
  return [
    `Event: ${props.event || 'Unknown'}`,
    `Area: ${props.areaDesc || 'Unknown'}`,
    `Severity: ${props.severity || 'Unknown'}`,
    `Status: ${props.status || 'Unknown'}`,
    `Headline: ${props.headline || 'No headline'}`,
    '---',
  ].join('\n');
};
