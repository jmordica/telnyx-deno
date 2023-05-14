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

import { DocServiceDocumentAllOfSize } from '../models/DocServiceDocumentAllOfSize.ts';
import { HttpFile } from '../http/http.ts';

export class DocServiceDocumentAllOf {
    /**
    * Identifies the type of the resource.
    */
    'recordType'?: string;
    /**
    * The document\'s content_type.
    */
    'contentType'?: string;
    'size'?: DocServiceDocumentAllOfSize;
    /**
    * Indicates the current document reviewing status
    */
    'status'?: DocServiceDocumentAllOfStatusEnum;
    /**
    * The document\'s SHA256 hash provided for optional verification purposes.
    */
    'sha256'?: string;
    /**
    * The filename of the document.
    */
    'filename'?: string;
    /**
    * Optional reference string for customer tracking.
    */
    'customerReference'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "contentType",
            "baseName": "content_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "DocServiceDocumentAllOfSize",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "DocServiceDocumentAllOfStatusEnum",
            "format": ""
        },
        {
            "name": "sha256",
            "baseName": "sha256",
            "type": "string",
            "format": ""
        },
        {
            "name": "filename",
            "baseName": "filename",
            "type": "string",
            "format": ""
        },
        {
            "name": "customerReference",
            "baseName": "customer_reference",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DocServiceDocumentAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}


export type DocServiceDocumentAllOfStatusEnum = "pending" | "verified" | "denied" ;

