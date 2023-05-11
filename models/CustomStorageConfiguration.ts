/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GCSConfigurationData } from './GCSConfigurationData.ts';
import type { S3ConfigurationData } from './S3ConfigurationData.ts';

export type CustomStorageConfiguration = {
    backend: CustomStorageConfiguration.backend;
    configuration: (GCSConfigurationData | S3ConfigurationData);
};

export namespace CustomStorageConfiguration {

    export enum backend {
        GCS = 'gcs',
        S3 = 's3',
    }


}

