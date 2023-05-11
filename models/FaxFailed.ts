/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConnectionId } from './ConnectionId.ts';
import type { Direction } from './Direction.ts';
import type { FaxId } from './FaxId.ts';
import type { From } from './From.ts';
import type { Id } from './Id.ts';
import type { MediaName } from './MediaName.ts';
import type { OriginalMediaUrl } from './OriginalMediaUrl.ts';
import type { RecordType } from './RecordType.ts';
import type { To } from './To.ts';
import type { UserId } from './UserId.ts';

export type FaxFailed = {
    record_type?: RecordType;
    id?: Id;
    /**
     * The type of event being delivered.
     */
    event_type?: FaxFailed.event_type;
    payload?: {
        connection_id?: ConnectionId;
        direction?: Direction;
        fax_id?: FaxId;
        original_media_url?: OriginalMediaUrl;
        media_name?: MediaName;
        to?: To;
        from?: From;
        user_id?: UserId;
        /**
         * Cause of the sending failure
         */
        failure_reason?: FaxFailed.failure_reason;
        /**
         * The status of the fax.
         */
        status?: FaxFailed.status;
    };
};

export namespace FaxFailed {

    /**
     * The type of event being delivered.
     */
    export enum event_type {
        FAX_FAILED = 'fax.failed',
    }

    /**
     * Cause of the sending failure
     */
    export enum failure_reason {
        REJECTED = 'rejected',
    }

    /**
     * The status of the fax.
     */
    export enum status {
        FAILED = 'failed',
    }


}

