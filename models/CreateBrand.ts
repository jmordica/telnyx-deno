/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EntityType } from './EntityType.ts';
import type { StockExchange } from './StockExchange.ts';
import type { Vertical } from './Vertical.ts';

export type CreateBrand = {
    /**
     * Entity type behind the brand. This is the form of business establishment.
     */
    entityType: EntityType;
    /**
     * Display name, marketing name, or DBA name of the brand.
     */
    displayName: string;
    /**
     * (Required for Non-profit/private/public) Legal company name.
     */
    companyName?: string;
    /**
     * First name of business contact.
     */
    firstName?: string;
    /**
     * Last name of business contact.
     */
    lastName?: string;
    /**
     * (Required for Non-profit) Government assigned corporate tax ID. EIN is 9-digits in U.S.
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
    /**
     * (Required for public company) stock exchange.
     */
    stockExchange?: StockExchange;
    /**
     * IP address of the browser requesting to create brand identity.
     */
    ipAddress?: string;
    /**
     * Brand website URL.
     */
    website?: string;
    /**
     * Vertical or industry segment of the brand.
     */
    vertical: Vertical;
    isReseller?: boolean;
    /**
     * Mock brand for testing purposes
     */
    mock?: boolean;
    /**
     * Valid mobile phone number in e.164 international format.
     */
    mobilePhone?: string;
};

