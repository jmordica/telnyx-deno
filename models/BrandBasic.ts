/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EntityType } from './EntityType.ts';

export type BrandBasic = {
    /**
     * Unique identifier assigned to the brand.
     */
    brandId?: string;
    /**
     * Entity type behind the brand. This is the form of business establishment.
     */
    entityType?: EntityType;
    /**
     * (Required for Non-profit/private/public) Legal company name.
     */
    companyName?: string;
    /**
     * Display or marketing name of the brand.
     */
    displayName?: string;
    /**
     * Valid email address of brand support contact.
     */
    email?: string;
    /**
     * Brand website URL.
     */
    website?: string;
    /**
     * Date and time that the brand was created at.
     */
    createAt?: string;
    /**
     * Date and time that the brand was last updated at.
     */
    updatedAt?: string;
};

