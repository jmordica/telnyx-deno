/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InteractiveProduct } from './InteractiveProduct.ts';
import type { InteractiveSectionRow } from './InteractiveSectionRow.ts';

export type InteractiveSection = {
    /**
     * Title of the section. Required if the message has more than one section.
     */
    title?: string;
    /**
     * Contains a list of rows. Limited to 10 rows across all sections. Required for List Messages.
     */
    rows?: Array<InteractiveSectionRow>;
    /**
     * Array of product objects. There is a minimum of 1 product per section. There is a maximum of 30 products across all sections.
     */
    product_items?: Array<InteractiveProduct>;
};

