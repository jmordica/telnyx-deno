/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InteractiveAction } from './InteractiveAction.ts';
import type { InteractiveBody } from './InteractiveBody.ts';
import type { InteractiveFooter } from './InteractiveFooter.ts';
import type { InteractiveHeader } from './InteractiveHeader.ts';
import type { InteractiveType } from './InteractiveType.ts';

export type Interactive = {
    /**
     * The type of interactive message you want to send.
     */
    type: InteractiveType;
    /**
     * Header content displayed on top of a message. See header object for more information. You cannot set a header if your interactive object is of product type. Required for type product_list. Optional for other types.
     */
    header?: InteractiveHeader;
    /**
     * The body of the message. Emojis and markdown are supported. Optional for type product. Required for other message types.
     */
    body?: InteractiveBody;
    /**
     * The footer of the message. Emojis and markdown are supported.
     */
    footer?: InteractiveFooter;
    /**
     * Action you want the user to perform after reading the message.
     */
    action: InteractiveAction;
};

