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

import { VerificationRequestStatus } from '../models/VerificationRequestStatus.ts';
import { HttpFile } from '../http/http.ts';

/**
* A paginated response
*/
export class PaginatedVerificationRequestStatus {
    /**
    * The records yielded by this request
    */
    'records'?: Array<VerificationRequestStatus>;
    /**
    * The total amount of records for these query parameters
    */
    'totalRecords'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "records",
            "baseName": "records",
            "type": "Array<VerificationRequestStatus>",
            "format": ""
        },
        {
            "name": "totalRecords",
            "baseName": "total_records",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PaginatedVerificationRequestStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

