/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TFPhoneNumber } from './TFPhoneNumber.ts';
import type { TFVerificationStatus } from './TFVerificationStatus.ts';
import type { Url } from './Url.ts';
import type { UseCaseCategories } from './UseCaseCategories.ts';
import type { Volume } from './Volume.ts';

/**
 * A verification request as it comes out of the database
 */
export type VerificationRequestEgress = {
    businessName: string;
    corporateWebsite: string;
    businessAddr1: string;
    businessAddr2?: string;
    businessCity: string;
    businessState: string;
    businessZip: string;
    businessContactFirstName: string;
    businessContactLastName: string;
    businessContactEmail: string;
    businessContactPhone: string;
    /**
     * One of the following exact values: 10; 100; 1,000; 10,000; 100,000; 250,000; 500,000; 750,000; 1,000,000; 5,000,000; 10,000,000+
     */
    messageVolume: Volume;
    phoneNumbers: Array<TFPhoneNumber>;
    useCase: UseCaseCategories;
    useCaseSummary: string;
    productionMessageContent: string;
    optInWorkflow: string;
    optInWorkflowImageURLs: Array<Url>;
    additionalInformation: string;
    isvReseller: string;
    webhookUrl?: string;
    id: string;
    verificationRequestId: string;
    verificationStatus?: TFVerificationStatus;
};

