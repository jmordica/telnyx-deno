/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { From } from './From.ts';
import type { MediaName } from './MediaName.ts';
import type { MediaUrl } from './MediaUrl.ts';
import type { Quality } from './Quality.ts';
import type { To } from './To.ts';

export type SendFaxRequest = {
    /**
     * The connection ID to send the fax with.
     */
    connection_id: string;
    media_url?: MediaUrl;
    media_name?: MediaName;
    to: To;
    from: From;
    quality?: Quality;
    /**
     * The flag to disable the T.38 protocol.
     */
    t38_enabled?: boolean;
    /**
     * The flag to enable monochrome, true black and white fax results.
     */
    monochrome?: boolean;
    /**
     * Should fax media be stored on temporary URL. It does not support media_name, they can't be submitted together.
     */
    store_media?: boolean;
    /**
     * Use this field to override the URL to which Telnyx will send subsequent webhooks for this fax.
     */
    webhook_url?: string;
};

