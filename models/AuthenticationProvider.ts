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

import { AuthenticationProviderSettings } from '../models/AuthenticationProviderSettings.ts';
import { HttpFile } from '../http/http.ts';

export class AuthenticationProvider {
    /**
    * Uniquely identifies the authentication provider.
    */
    'id'?: string;
    /**
    * Identifies the type of the resource.
    */
    'recordType'?: string;
    /**
    * The name associated with the authentication provider.
    */
    'name'?: string;
    /**
    * The short name associated with the authentication provider. This must be unique and URL-friendly, as it\'s going to be part of the login URL.
    */
    'shortName'?: string;
    /**
    * The id from the Organization the authentication provider belongs to.
    */
    'organizationId'?: string;
    /**
    * The active status of the authentication provider
    */
    'active'?: boolean;
    'settings'?: AuthenticationProviderSettings;
    /**
    * ISO 8601 formatted date indicating when the resource was created.
    */
    'createdAt'?: string;
    /**
    * ISO 8601 formatted date indicating when the resource was updated.
    */
    'updatedAt'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "recordType",
            "baseName": "record_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "shortName",
            "baseName": "short_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "organizationId",
            "baseName": "organization_id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "settings",
            "baseName": "settings",
            "type": "AuthenticationProviderSettings",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AuthenticationProvider.attributeTypeMap;
    }

    public constructor() {
    }
}

