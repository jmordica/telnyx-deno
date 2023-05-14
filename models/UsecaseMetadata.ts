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

import { HttpFile } from '../http/http.ts';

export class UsecaseMetadata {
    /**
    * Campaign annual subscription fee
    */
    'annualFee'?: number;
    /**
    * Maximum number of sub-usecases declaration required.
    */
    'maxSubUsecases'?: number;
    /**
    * Minimum number of sub-usecases declaration required.
    */
    'minSubUsecases'?: number;
    /**
    * Map of usecase metadata for each MNO. Key is the network ID of the MNO (e.g. 10017), Value is the mno metadata for the usecase.
    */
    'mnoMetadata'?: any;
    /**
    * Campaign monthly subscription fee
    */
    'monthlyFee'?: number;
    /**
    * Campaign quarterly subscription fee
    */
    'quarterlyFee'?: number;
    /**
    * Campaign usecase
    */
    'usecase'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "annualFee",
            "baseName": "annualFee",
            "type": "number",
            "format": ""
        },
        {
            "name": "maxSubUsecases",
            "baseName": "maxSubUsecases",
            "type": "number",
            "format": ""
        },
        {
            "name": "minSubUsecases",
            "baseName": "minSubUsecases",
            "type": "number",
            "format": ""
        },
        {
            "name": "mnoMetadata",
            "baseName": "mnoMetadata",
            "type": "any",
            "format": ""
        },
        {
            "name": "monthlyFee",
            "baseName": "monthlyFee",
            "type": "number",
            "format": ""
        },
        {
            "name": "quarterlyFee",
            "baseName": "quarterlyFee",
            "type": "number",
            "format": ""
        },
        {
            "name": "usecase",
            "baseName": "usecase",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UsecaseMetadata.attributeTypeMap;
    }

    public constructor() {
    }
}

