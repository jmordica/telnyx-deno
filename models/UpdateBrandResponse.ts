/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AltBusinessIdType } from './AltBusinessIdType.ts';
import type { BrandRelationship } from './BrandRelationship.ts';
import type { EntityType } from './EntityType.ts';
import type { StockExchange } from './StockExchange.ts';
import type { Vertical } from './Vertical.ts';

export type UpdateBrandResponse = {
    entityType: EntityType;
    /**
     * Display or marketing name of the brand.
     */
    displayName: string;
    /**
     * (Required for Non-profit/private/public) Legal company name.
     */
    companyName?: string;
    /**
     * (Required for Non-profit/private/public) Government assigned corporate tax ID. EIN is 9-digits in U.S. The only entity type which does not require an EIN is a Sole Proprietor.
     */
    ein?: string;
    /**
     * Valid phone number in e.164 international format.
     */
    phone?: string;
    /**
     * Street number and name.
     */
    street?: string;
    /**
     * City name
     */
    city?: string;
    /**
     * State. Must be 2 letters code for United States.
     */
    state?: string;
    /**
     * Postal codes. Use 5 digit zipcode for United States
     */
    postalCode?: string;
    /**
     * ISO2 2 characters country code. Example: US - United States
     */
    country: string;
    /**
     * Valid email address of brand support contact.
     */
    email: string;
    /**
     * (Required for public company) stock symbol.
     */
    stockSymbol?: string;
    stockExchange?: StockExchange;
    /**
     * IP address of the browser requesting to create brand identity.
     */
    ipAddress?: string;
    /**
     * Brand website URL.
     */
    website?: string;
    brandRelationship: BrandRelationship;
    vertical: Vertical;
    /**
     * Alternate business identifier such as DUNS, LEI, or GIIN
     */
    altBusinessId?: string;
    altBusinessIdType?: AltBusinessIdType;
    /**
     * TCR assessment of the brand identification status.
     */
    identityStatus?: string;
};

