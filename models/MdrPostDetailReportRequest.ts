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

import { Filter } from '../models/Filter.ts';
import { HttpFile } from '../http/http.ts';

export class MdrPostDetailReportRequest {
    'startDate': Date;
    'endDate': Date;
    'directions'?: Array<MdrPostDetailReportRequestDirectionsEnum>;
    'recordTypes'?: Array<MdrPostDetailReportRequestRecordTypesEnum>;
    'connections'?: Array<number>;
    'reportName'?: string;
    'includeMessageBody'?: boolean;
    'filters'?: Array<Filter>;
    'profiles'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "startDate",
            "baseName": "start_date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "endDate",
            "baseName": "end_date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "directions",
            "baseName": "directions",
            "type": "Array<MdrPostDetailReportRequestDirectionsEnum>",
            "format": ""
        },
        {
            "name": "recordTypes",
            "baseName": "record_types",
            "type": "Array<MdrPostDetailReportRequestRecordTypesEnum>",
            "format": ""
        },
        {
            "name": "connections",
            "baseName": "connections",
            "type": "Array<number>",
            "format": "int64"
        },
        {
            "name": "reportName",
            "baseName": "report_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "includeMessageBody",
            "baseName": "include_message_body",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "filters",
            "baseName": "filters",
            "type": "Array<Filter>",
            "format": ""
        },
        {
            "name": "profiles",
            "baseName": "profiles",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MdrPostDetailReportRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type MdrPostDetailReportRequestDirectionsEnum = "INBOUND" | "OUTBOUND" ;
export type MdrPostDetailReportRequestRecordTypesEnum = "INCOMPLETE" | "COMPLETED" | "ERRORS" ;
