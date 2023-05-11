/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConnectionId } from './ConnectionId.ts';
import type { From } from './From.ts';
import type { Monochrome } from './Monochrome.ts';
import type { Quality } from './Quality.ts';
import type { StoreMedia } from './StoreMedia.ts';
import type { T38Enabled } from './T38Enabled.ts';
import type { To } from './To.ts';

export type SendFaxMultipartRequest = {
    connection_id: ConnectionId;
    /**
     * The file you want to upload. The maximum allowed size is 20 MB. contents and media_name/media_url can't be submitted together.
     */
    contents: Blob;
    to: To;
    from: From;
    quality?: Quality;
    t38_enabled?: T38Enabled;
    monochrome?: Monochrome;
    store_media?: StoreMedia;
};

