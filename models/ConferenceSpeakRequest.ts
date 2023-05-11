/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ConferenceSpeakRequest = {
    /**
     * Call Control IDs of participants who will hear the spoken text. When empty all participants will hear the spoken text.
     */
    call_control_ids?: Array<string>;
    /**
     * The text or SSML to be converted into speech. There is a 3,000 character limit.
     */
    payload: string;
    /**
     * The type of the provided payload. The payload can either be plain text, or Speech Synthesis Markup Language (SSML).
     */
    payload_type?: ConferenceSpeakRequest.payload_type;
    /**
     * The gender of the voice used to speak the text.
     */
    voice: ConferenceSpeakRequest.voice;
    /**
     * The language used to speak the text.
     */
    language: ConferenceSpeakRequest.language;
    /**
     * Use this field to avoid execution of duplicate commands. Telnyx will ignore subsequent commands with the same `command_id` as one that has already been executed.
     */
    command_id?: string;
};

export namespace ConferenceSpeakRequest {

    /**
     * The type of the provided payload. The payload can either be plain text, or Speech Synthesis Markup Language (SSML).
     */
    export enum payload_type {
        TEXT = 'text',
        SSML = 'ssml',
    }

    /**
     * The gender of the voice used to speak the text.
     */
    export enum voice {
        MALE = 'male',
        FEMALE = 'female',
    }

    /**
     * The language used to speak the text.
     */
    export enum language {
        ARB = 'arb',
        CMN_CN = 'cmn-CN',
        CY_GB = 'cy-GB',
        DA_DK = 'da-DK',
        DE_DE = 'de-DE',
        EN_AU = 'en-AU',
        EN_GB = 'en-GB',
        EN_GB_WLS = 'en-GB-WLS',
        EN_IN = 'en-IN',
        EN_US = 'en-US',
        ES_ES = 'es-ES',
        ES_MX = 'es-MX',
        ES_US = 'es-US',
        FR_CA = 'fr-CA',
        FR_FR = 'fr-FR',
        HI_IN = 'hi-IN',
        IS_IS = 'is-IS',
        IT_IT = 'it-IT',
        JA_JP = 'ja-JP',
        KO_KR = 'ko-KR',
        NB_NO = 'nb-NO',
        NL_NL = 'nl-NL',
        PL_PL = 'pl-PL',
        PT_BR = 'pt-BR',
        PT_PT = 'pt-PT',
        RO_RO = 'ro-RO',
        RU_RU = 'ru-RU',
        SV_SE = 'sv-SE',
        TR_TR = 'tr-TR',
    }


}

