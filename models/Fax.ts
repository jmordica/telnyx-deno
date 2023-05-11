/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConnectionId } from './ConnectionId.ts';
import type { Direction } from './Direction.ts';
import type { From } from './From.ts';
import type { Id } from './Id.ts';
import type { MediaName } from './MediaName.ts';
import type { MediaUrl } from './MediaUrl.ts';
import type { Quality } from './Quality.ts';
import type { To } from './To.ts';

export type Fax = {
    /**
     * Identifies the type of the resource.
     */
    record_type?: Fax.record_type;
    id?: Id;
    connection_id?: ConnectionId;
    direction?: Direction;
    media_url?: MediaUrl;
    media_name?: MediaName;
    to?: To;
    from?: From;
    quality?: Quality;
    /**
     * Status of the fax
     */
    status?: Fax.status;
    /**
     * URL that will receive fax webhooks
     */
    webhook_url?: string;
    /**
     * Optional failover URL that will receive fax webhooks if webhook_url doesn't return a 2XX response
     */
    webhook_failover_url?: string;
    /**
     * Should fax media be stored on temporary URL. It does not support media_name.
     */
    store_media?: boolean;
    /**
     * If store_media was set to true, this is a link to temporary location. Link expires after 10 minutes.
     */
    stored_media_url?: string;
    /**
     * ISO 8601 timestamp when resource was created
     */
    created_at?: string;
    /**
     * ISO 8601 timestamp when resource was updated
     */
    updated_at?: string;
};

export namespace Fax {

    /**
     * Identifies the type of the resource.
     */
    export enum record_type {
        FAX = 'fax',
    }

    /**
     * Status of the fax
     */
    export enum status {
        QUEUED = 'queued',
        MEDIA_PROCESSED = 'media.processed',
        ORIGINATED = 'originated',
        SENDING = 'sending',
        DELIVERED = 'delivered',
        FAILED = 'failed',
        INITIATED = 'initiated',
        RECEIVING = 'receiving',
        MEDIA_PROCESSING = 'media.processing',
        RECEIVED = 'received',
    }


}

