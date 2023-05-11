/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Bucket } from './Bucket.ts';
import type { Credentials } from './Credentials.ts';

export type GCSConfigurationData = {
    credentials?: Credentials;
    bucket?: Bucket;
};

