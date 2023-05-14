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

import { CampaignRegistryApiSchemasBulkCreationTaskStatus } from '../models/CampaignRegistryApiSchemasBulkCreationTaskStatus.ts';
import { HttpFile } from '../http/http.ts';

export class BulkCreationStatusResponse {
    /**
    * The ID of the task associated with bulk Sole Proprietor brand and campaign creation.
    */
    'taskId': string;
    'status': CampaignRegistryApiSchemasBulkCreationTaskStatus;
    /**
    * The date and time the task was initiated
    */
    'createdAt'?: Date;
    /**
    * The date and time the task\'s status was updated
    */
    'updatedAt'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "taskId",
            "baseName": "taskId",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "CampaignRegistryApiSchemasBulkCreationTaskStatus",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return BulkCreationStatusResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


