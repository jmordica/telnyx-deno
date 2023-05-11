/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BusinessIdentity_properties_address } from './BusinessIdentity_properties_address.ts';
import type { BusinessIdentity_properties_business_description } from './BusinessIdentity_properties_business_description.ts';
import type { BusinessIdentity_properties_business_email } from './BusinessIdentity_properties_business_email.ts';
import type { BusinessIdentity_properties_business_name } from './BusinessIdentity_properties_business_name.ts';
import type { BusinessIdentity_properties_business_phone_number } from './BusinessIdentity_properties_business_phone_number.ts';
import type { BusinessIdentity_properties_contacts } from './BusinessIdentity_properties_contacts.ts';
import type { BusinessIdentity_properties_name } from './BusinessIdentity_properties_name.ts';
import type { BusinessIdentity_properties_submission_acknowledgement } from './BusinessIdentity_properties_submission_acknowledgement.ts';
import type { BusinessIdentity_properties_website_url } from './BusinessIdentity_properties_website_url.ts';

export type CreateOrUpdateBusinessIdentityRequest = {
    name: BusinessIdentity_properties_name;
    business_email?: BusinessIdentity_properties_business_email;
    business_name?: BusinessIdentity_properties_business_name;
    business_phone_number?: BusinessIdentity_properties_business_phone_number;
    business_description?: BusinessIdentity_properties_business_description;
    submission_acknowledgement?: BusinessIdentity_properties_submission_acknowledgement;
    website_url?: BusinessIdentity_properties_website_url;
    address?: BusinessIdentity_properties_address;
    contacts?: BusinessIdentity_properties_contacts;
};

