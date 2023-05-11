/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Email } from './Email.ts';
import type { Name } from './Name.ts';
import type { Organization } from './Organization.ts';
import type { Phone } from './Phone.ts';
import type { Url } from './Url.ts';
import type { WhatsAppContactAddress } from './WhatsAppContactAddress.ts';

export type Contact = {
    /**
     * Full contact address(es)
     */
    addresses?: Array<WhatsAppContactAddress>;
    /**
     * YYYY-MM-DD formatted string
     */
    birthday?: string;
    /**
     * Contact email address(es)
     */
    emails?: Array<Email>;
    ims?: Array<string>;
    name?: Name;
    org?: Organization;
    /**
     * Contact phone number(s)
     */
    phones?: Array<Phone>;
    /**
     * Contact URL(s)
     */
    urls?: Array<Url>;
};

