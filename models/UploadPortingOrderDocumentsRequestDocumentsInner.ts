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

export class UploadPortingOrderDocumentsRequestDocumentsInner {
    /**
    * The type of the document.
    */
    'documentType': UploadPortingOrderDocumentsRequestDocumentsInnerDocumentTypeEnum;
    /**
    * Uniquely identifies a document uploaded via the <code><a href=\"https://developers.telnyx.com/docs/api/v2/documents/Documents#createDocument\">/v2/documents</a></code> endpoint.
    */
    'documentId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "documentType",
            "baseName": "document_type",
            "type": "UploadPortingOrderDocumentsRequestDocumentsInnerDocumentTypeEnum",
            "format": ""
        },
        {
            "name": "documentId",
            "baseName": "document_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UploadPortingOrderDocumentsRequestDocumentsInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export type UploadPortingOrderDocumentsRequestDocumentsInnerDocumentTypeEnum = "loa" | "invoice" | "other" ;

