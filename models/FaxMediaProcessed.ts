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

export type FaxMediaProcessed = {
    record_type?: RecordType;
    id?: Id;
    /**
     * The type of event being delivered.
     */
    event_type?: FaxMediaProcessed.event_type;
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
         * The status of the fax.
         */
        status?: FaxMediaProcessed.status;
    };
};

export namespace FaxMediaProcessed {

    /**
     * The type of event being delivered.
     */
    export enum event_type {
        FAX_MEDIA_PROCESSED = 'fax.media.processed',
    }

    /**
     * The status of the fax.
     */
    export enum status {
        MEDIA_PROCESSED = 'media.processed',
    }


}

