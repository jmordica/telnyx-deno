/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BrandFeedbackCategory } from './BrandFeedbackCategory.ts';

export type BrandFeedback = {
    /**
     * ID of the brand being queried about
     */
    brandId: string;
    /**
     * A list of reasons why brand creation/revetting didn't go as planned
     */
    category: Array<BrandFeedbackCategory>;
};

