/**
 * Telnyx API
 * SIP trunking, SMS, MMS, Call Control and Telephony Data Services.
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@telnyx.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Email } from '../models/Email.ts';
//import { Name } from '../models/Name.ts';
import { Organization } from '../models/Organization.ts';
import { Phone } from '../models/Phone.ts';
import { Url } from '../models/Url.ts';
import { WhatsAppContactAddress } from '../models/WhatsAppContactAddress.ts';
import { HttpFile } from '../http/http.ts';

export class Contact {
    /**
    * Full contact address(es)
    */
    'addresses'?: Array<WhatsAppContactAddress>;
    /**
    * YYYY-MM-DD formatted string
    */
    'birthday'?: string;
    /**
    * Contact email address(es)
    */
    'emails'?: Array<Email>;
    /**
    * 
    */
    'ims'?: Array<string>;
    'name'?: string;
    'org'?: Organization;
    /**
    * Contact phone number(s)
    */
    'phones'?: Array<Phone>;
    /**
    * Contact URL(s)
    */
    'urls'?: Array<Url>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "addresses",
            "baseName": "addresses",
            "type": "Array<WhatsAppContactAddress>",
            "format": ""
        },
        {
            "name": "birthday",
            "baseName": "birthday",
            "type": "string",
            "format": ""
        },
        {
            "name": "emails",
            "baseName": "emails",
            "type": "Array<Email>",
            "format": ""
        },
        {
            "name": "ims",
            "baseName": "ims",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "Name",
            "format": ""
        },
        {
            "name": "org",
            "baseName": "org",
            "type": "Organization",
            "format": ""
        },
        {
            "name": "phones",
            "baseName": "phones",
            "type": "Array<Phone>",
            "format": ""
        },
        {
            "name": "urls",
            "baseName": "urls",
            "type": "Array<Url>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Contact.attributeTypeMap;
    }

    public constructor() {
    }
}
