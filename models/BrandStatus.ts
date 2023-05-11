/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreationStatus } from './CreationStatus.ts';

export type BrandStatus = {
    /**
     * The display name of the brand submitted via bulk creation.
     */
    displayName: string;
    /**
     * The current status of the brand.
     */
    status: CreationStatus;
    /**
     * The ID of the brand created via bulk creation. This brand will only have a brandId after the brand has been created.
     */
    brandId?: string;
    /**
     * The date and time that the brand was created.
     */
    created_at?: string;
    /**
     * Errors related to a brand creation failure.
     */
    error?: string;
};

