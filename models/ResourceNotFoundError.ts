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

import { ResourceNotFoundErrorAllOfMeta } from '../models/ResourceNotFoundErrorAllOfMeta.ts';
import { UpdateOutboundChannelsDefaultResponseErrorsInnerSource } from '../models/UpdateOutboundChannelsDefaultResponseErrorsInnerSource.ts';
import { HttpFile } from '../http/http.ts';

export class ResourceNotFoundError {
    'code'?: any | null;
    'title'?: any | null;
    'detail'?: any | null;
    'source'?: UpdateOutboundChannelsDefaultResponseErrorsInnerSource;
    'meta'?: ResourceNotFoundErrorAllOfMeta;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "any",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "any",
            "format": ""
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "any",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "UpdateOutboundChannelsDefaultResponseErrorsInnerSource",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "ResourceNotFoundErrorAllOfMeta",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ResourceNotFoundError.attributeTypeMap;
    }

    public constructor() {
    }
}
