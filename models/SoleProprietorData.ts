/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EntityType } from './EntityType.ts';
import type { Usecase } from './Usecase.ts';
import type { Vertical } from './Vertical.ts';

export type SoleProprietorData = {
    /**
     * City name
     */
    city?: string;
    /**
     * (Required for Non-profit/private/public) Legal company name.
     */
    companyName?: string;
    /**
     * ISO2 2 characters country code. Example: US - United States
     */
    country: string;
    /**
     * A brief description about the campaign.
     */
    description: string;
    /**
     * Display name, marketing name, or DBA name of the brand.
     */
    displayName: string;
    /**
     * Valid email address of brand support contact.
     */
    email: string;
    /**
     * Entity type behind the brand. This is the form of business establishment.
     */
    entityType: EntityType;
    /**
     * First name of business contact.
     */
    firstName?: string;
    /**
     * Last name of business contact.
     */
    lastName?: string;
    /**
     * Valid phone number in e.164 international format.
     */
    phone?: string;
    /**
     * The phone numbers that will be assigned to the Sole Proprietor's campaign (Max of 5).
     */
    phoneNumbers: Array<string>;
    /**
     * Postal codes. Use 5 digit zipcode for United States
     */
    postalCode?: string;
    /**
     * A user generated unique identifier that keeps track of sole proprietor brand/campaign combinations submitted during bulk creation.
     */
    referenceId: string;
    /**
     * The sample_messages that will be assigned to the Sole Proprietor's campaign (Max of 5).
     */
    sampleMessages: Array<string>;
    /**
     * State. Must be 2 letters code for United States.
     */
    state?: string;
    /**
     * Street number and name.
     */
    street?: string;
    /**
     * The sub use cases that will be assigned to the Sole Proprietor's campaign (Max of 5).
     */
    subUsecases: Array<Usecase>;
    /**
     * Vertical or industry segment of the brand.
     */
    vertical: Vertical;
    /**
     * Brand website URL.
     */
    website?: string;
};

