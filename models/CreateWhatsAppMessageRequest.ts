/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Audio } from './Audio.ts';
import type { Document } from './Document.ts';
import type { Image } from './Image.ts';
import type { Location } from './Location.ts';
import type { MessageType } from './MessageType.ts';
import type { Template } from './Template.ts';
import type { Text } from './Text.ts';
import type { Video } from './Video.ts';

export type CreateWhatsAppMessageRequest = {
    /**
     * The sender's WhatsApp ID.
     */
    whatsapp_user_id: string;
    /**
     * The WhatsApp ID (phone number) returned from contacts endpoint.
     */
    to: string;
    type?: MessageType;
    text?: Text;
    audio?: Audio;
    image?: Image;
    document?: Document;
    video?: Video;
    location?: Location;
    /**
     * Specifying preview_url in the request is optional when not including a URL in your message.
     * To include a URL preview, set preview_url to true in the message body and make sure the URL begins with http:// or https://.
     */
    preview_url?: boolean;
    template?: Template;
};

