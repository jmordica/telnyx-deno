/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DateTimeComponent } from './DateTimeComponent.ts';
import type { DateTimeUnixEpoch } from './DateTimeUnixEpoch.ts';

/**
 * The WhatsApp Business API Client will attempt to format the date/time based on a specified localization.
 */
export type DateTimeObject = {
    component?: DateTimeComponent;
    unix_epoch?: DateTimeUnixEpoch;
};

