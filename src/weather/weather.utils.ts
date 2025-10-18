import { AlertFeature } from './weather.types.js';

/**
 * Format alert data
 * @param feature - The alert feature
 * @returns The formatted alert data
 */
export const formatAlert = (feature: AlertFeature): string => {
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
