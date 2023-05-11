/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BrandFeedbackCategory = {
    /**
     * One of `TAX_ID`, `STOCK_SYMBOL`, `GOVERNMENT_ENTITY`, `NONPROFIT`, and `OTHERS`
     */
    id: string;
    /**
     * Human-readable version of the `id` field
     */
    displayName: string;
    /**
     * Long-form description of the feedback with additional information
     */
    description: string;
    /**
     * List of relevant fields in the originally-submitted brand json
     */
    fields: Array<string>;
};

