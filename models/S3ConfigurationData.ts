/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AwsAccessKeyId } from './AwsAccessKeyId.ts';
import type { AwsSecretAccessKey } from './AwsSecretAccessKey.ts';
import type { Bucket } from './Bucket.ts';
import type { Region } from './Region.ts';

export type S3ConfigurationData = {
    bucket?: Bucket;
    region?: Region;
    aws_access_key_id?: AwsAccessKeyId;
    aws_secret_access_key?: AwsSecretAccessKey;
};

