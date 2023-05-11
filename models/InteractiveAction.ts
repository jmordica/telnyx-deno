/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InteractiveButton } from './InteractiveButton.ts';
import type { InteractiveSection } from './InteractiveSection.ts';

export type InteractiveAction = {
    /**
     * Button content. It cannot be an empty string and must be unique within the message. Emojis are supported, markdown is not. Required for List Messages.
     */
    button?: string;
    /**
     * A list of buttons. Required for Reply Button Messages.
     */
    buttons?: Array<InteractiveButton>;
    /**
     * Array of section objects. Required for List Messages and Multi-Product Messages.
     */
    sections?: Array<InteractiveSection>;
    /**
     * Unique identifier of the Facebook catalog linked to your WhatsApp Business Account. This ID can be retrieved via Commerce Manager. Required for Single Product Messages and Multi-Product Messages.
     */
    catalog_id?: string;
    /**
     * Unique identifier of the product in a catalog. To get this ID, go to Commerce Manager, select your Facebook Business account, and you will see a list of shops connected to your account. Click the shop you want to use. On the left-side panel, click Catalog > Items, and find the item you want to mention. The ID for that item is displayed under the item's name.
     */
    product_retailer_id?: string;
};

