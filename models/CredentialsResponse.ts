/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConnectionId } from './ConnectionId.ts';
import type { CustomStorageConfiguration } from './CustomStorageConfiguration.ts';
import type { RecordType } from './RecordType.ts';

export type CredentialsResponse = {
    data: CustomStorageConfiguration;
    connection_id: ConnectionId;
    record_type: RecordType;
};

