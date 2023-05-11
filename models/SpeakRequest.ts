/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SpeakRequest = {
    /**
     * The text or SSML to be converted into speech. There is a 3,000 character limit.
     */
    payload: string;
    /**
     * The type of the provided payload. The payload can either be plain text, or Speech Synthesis Markup Language (SSML).
     */
    payload_type?: SpeakRequest.payload_type;
    /**
     * This parameter impacts speech quality, language options and payload types. When using `basic`, only the `en-US` language and payload type `text` are allowed.
     */
    service_level?: SpeakRequest.service_level;
    /**
     * When specified, it stops the current audio being played. Specify `current` to stop the current audio being played, and to play the next file in the queue. Specify `all` to stop the current audio file being played and to also clear all audio files from the queue.
     */
    stop?: string;
    /**
     * The gender of the voice used to speak back the text.
     */
    voice: SpeakRequest.voice;
    /**
     * The language you want spoken.
     */
    language: SpeakRequest.language;
    /**
     * Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.
     */
    client_state?: string;
    /**
     * Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.
     */
    command_id?: string;
};

export namespace SpeakRequest {

    /**
     * The type of the provided payload. The payload can either be plain text, or Speech Synthesis Markup Language (SSML).
     */
    export enum payload_type {
        TEXT = 'text',
        SSML = 'ssml',
    }

    /**
     * This parameter impacts speech quality, language options and payload types. When using `basic`, only the `en-US` language and payload type `text` are allowed.
     */
    export enum service_level {
        BASIC = 'basic',
        PREMIUM = 'premium',
    }

    /**
     * The gender of the voice used to speak back the text.
     */
    export enum voice {
        MALE = 'male',
        FEMALE = 'female',
    }

    /**
     * The language you want spoken.
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

