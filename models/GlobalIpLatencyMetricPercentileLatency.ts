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

import { GlobalIpLatencyMetricPercentileLatency0 } from '../models/GlobalIpLatencyMetricPercentileLatency0.ts';
import { GlobalIpLatencyMetricPercentileLatency100 } from '../models/GlobalIpLatencyMetricPercentileLatency100.ts';
import { GlobalIpLatencyMetricPercentileLatency25 } from '../models/GlobalIpLatencyMetricPercentileLatency25.ts';
import { GlobalIpLatencyMetricPercentileLatency50 } from '../models/GlobalIpLatencyMetricPercentileLatency50.ts';
import { GlobalIpLatencyMetricPercentileLatency75 } from '../models/GlobalIpLatencyMetricPercentileLatency75.ts';
import { GlobalIpLatencyMetricPercentileLatency90 } from '../models/GlobalIpLatencyMetricPercentileLatency90.ts';
import { GlobalIpLatencyMetricPercentileLatency99 } from '../models/GlobalIpLatencyMetricPercentileLatency99.ts';
import { HttpFile } from '../http/http.ts';

export class GlobalIpLatencyMetricPercentileLatency {
    '_0'?: GlobalIpLatencyMetricPercentileLatency0;
    '_25'?: GlobalIpLatencyMetricPercentileLatency25;
    '_50'?: GlobalIpLatencyMetricPercentileLatency50;
    '_75'?: GlobalIpLatencyMetricPercentileLatency75;
    '_90'?: GlobalIpLatencyMetricPercentileLatency90;
    '_99'?: GlobalIpLatencyMetricPercentileLatency99;
    '_100'?: GlobalIpLatencyMetricPercentileLatency100;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "_0",
            "baseName": "0",
            "type": "GlobalIpLatencyMetricPercentileLatency0",
            "format": ""
        },
        {
            "name": "_25",
            "baseName": "25",
            "type": "GlobalIpLatencyMetricPercentileLatency25",
            "format": ""
        },
        {
            "name": "_50",
            "baseName": "50",
            "type": "GlobalIpLatencyMetricPercentileLatency50",
            "format": ""
        },
        {
            "name": "_75",
            "baseName": "75",
            "type": "GlobalIpLatencyMetricPercentileLatency75",
            "format": ""
        },
        {
            "name": "_90",
            "baseName": "90",
            "type": "GlobalIpLatencyMetricPercentileLatency90",
            "format": ""
        },
        {
            "name": "_99",
            "baseName": "99",
            "type": "GlobalIpLatencyMetricPercentileLatency99",
            "format": ""
        },
        {
            "name": "_100",
            "baseName": "100",
            "type": "GlobalIpLatencyMetricPercentileLatency100",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GlobalIpLatencyMetricPercentileLatency.attributeTypeMap;
    }

    public constructor() {
    }
}

