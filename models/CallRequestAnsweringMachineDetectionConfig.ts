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

/**
* Optional configuration parameters to modify \'answering_machine_detection\' performance.
*/
export class CallRequestAnsweringMachineDetectionConfig {
    /**
    * Maximum timeout threshold for overall detection.
    */
    'totalAnalysisTimeMillis'?: number;
    /**
    * Silence duration threshold after a greeting message or voice for it be considered human.
    */
    'afterGreetingSilenceMillis'?: number;
    /**
    * Maximum threshold for silence between words.
    */
    'betweenWordsSilenceMillis'?: number;
    /**
    * Maximum threshold of a human greeting. If greeting longer than this value, considered machine.
    */
    'greetingDurationMillis'?: number;
    /**
    * If initial silence duration is greater than this value, consider it a machine.
    */
    'initialSilenceMillis'?: number;
    /**
    * If number of detected words is greater than this value, consder it a machine.
    */
    'maximumNumberOfWords'?: number;
    /**
    * If a single word lasts longer than this threshold, consider it a machine.
    */
    'maximumWordLengthMillis'?: number;
    /**
    * Minimum noise threshold for any analysis.
    */
    'silenceThreshold'?: number;
    /**
    * If machine already detected, maximum timeout threshold to determine the end of the machine greeting.
    */
    'greetingTotalAnalysisTimeMillis'?: number;
    /**
    * If machine already detected, maximum threshold for silence between words. If exceeded, the greeting is considered ended.
    */
    'greetingSilenceDurationMillis'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "totalAnalysisTimeMillis",
            "baseName": "total_analysis_time_millis",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "afterGreetingSilenceMillis",
            "baseName": "after_greeting_silence_millis",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "betweenWordsSilenceMillis",
            "baseName": "between_words_silence_millis",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "greetingDurationMillis",
            "baseName": "greeting_duration_millis",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "initialSilenceMillis",
            "baseName": "initial_silence_millis",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "maximumNumberOfWords",
            "baseName": "maximum_number_of_words",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "maximumWordLengthMillis",
            "baseName": "maximum_word_length_millis",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "silenceThreshold",
            "baseName": "silence_threshold",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "greetingTotalAnalysisTimeMillis",
            "baseName": "greeting_total_analysis_time_millis",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "greetingSilenceDurationMillis",
            "baseName": "greeting_silence_duration_millis",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return CallRequestAnsweringMachineDetectionConfig.attributeTypeMap;
    }

    public constructor() {
    }
}

