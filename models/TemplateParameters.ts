/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Currency } from './Currency.ts';
import type { DateTimeObject } from './DateTimeObject.ts';
import type { Document } from './Document.ts';
import type { Image } from './Image.ts';
import type { Video } from './Video.ts';

export type TemplateParameters = Array<{
    /**
     * Describes the parameter type.
     */
    type: 'text' | 'currency' | 'date_time' | 'image' | 'document' | 'video.ts';
    text?: string;
    currency?: Currency;
    date_time?: DateTimeObject;
    image?: Image;
    document?: Document;
    video?: Video;
}>;
