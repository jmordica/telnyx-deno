/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Document } from './Document.ts';
import type { Image } from './Image.ts';
import type { Video } from './Video.ts';

export type InteractiveHeader = {
    /**
     * The header type you would like to use.
     */
    type: string;
    /**
     * Text for the header. Formatting allows emojis, but not markdown.
     */
    text?: string;
    /**
     * Contains the media object for this video.
     */
    video?: Video;
    /**
     * Contains the media object for this image.
     */
    image?: Image;
    /**
     * Contains the media object for this document.
     */
    document?: Document;
};

