/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WhatsappMessageTemplate = {
    /**
     * Telnyx record type
     */
    record_type?: string;
    /**
     * The category of the message template, The possible values are provided by WhatsApp and are subject to change.
     */
    category?: WhatsappMessageTemplate.category;
    /**
     * The components of the message template
     */
    components?: Array<{
        type?: string;
        text?: string;
        format?: string;
    }>;
    /**
     * The id of the template on WhatsApp
     */
    id?: string;
    /**
     * The language of the message template, The available languages are provided by WhatsApp and are subject to change.
     */
    language?: WhatsappMessageTemplate.language;
    /**
     * This name will act as an identifier grouping similar message templates together, the same name can be used to different languages.
     */
    name?: string;
    /**
     * The quality rating shows how messages from your template have been received by your customers in a rolling window of the past 24 hours. The possible values are provided by WhatsApp and are subject to change.
     */
    quality_score?: {
        score?: WhatsappMessageTemplate.score;
    };
    rejected_reason?: string;
    /**
     * The current status of the message template, The possible values are provided by WhatsApp and are subject to change.
     */
    status?: WhatsappMessageTemplate.status;
};

export namespace WhatsappMessageTemplate {

    /**
     * The category of the message template, The possible values are provided by WhatsApp and are subject to change.
     */
    export enum category {
        ACCOUNT_UPDATE = 'ACCOUNT_UPDATE',
        PAYMENT_UPDATE = 'PAYMENT_UPDATE',
        PERSONAL_FINANCE_UPDATE = 'PERSONAL_FINANCE_UPDATE',
        SHIPPING_UPDATE = 'SHIPPING_UPDATE',
        RESERVATION_UPDATE = 'RESERVATION_UPDATE',
        ISSUE_RESOLUTION = 'ISSUE_RESOLUTION',
        APPOINTMENT_UPDATE = 'APPOINTMENT_UPDATE',
        TRANSPORTATION_UPDATE = 'TRANSPORTATION_UPDATE',
        TICKET_UPDATE = 'TICKET_UPDATE',
        ALERT_UPDATE = 'ALERT_UPDATE',
        AUTO_REPLY = 'AUTO_REPLY',
    }

    /**
     * The language of the message template, The available languages are provided by WhatsApp and are subject to change.
     */
    export enum language {
        AF = 'af',
        SQ = 'sq',
        AR = 'ar',
        AZ = 'az',
        BN = 'bn',
        BG = 'bg',
        CA = 'ca',
        ZH_CN = 'zh_CN',
        ZH_HK = 'zh_HK',
        ZH_TW = 'zh_TW',
        HR = 'hr',
        CS = 'cs',
        DA = 'da',
        NL = 'nl',
        EN = 'en',
        EN_GB = 'en_GB',
        EN_US = 'en_US',
        ET = 'et',
        FIL = 'fil',
        FI = 'fi',
        FR = 'fr',
        KA = 'ka',
        DE = 'de',
        EL = 'el',
        GU = 'gu',
        HA = 'ha',
        HE = 'he',
        HI = 'hi',
        HU = 'hu',
        ID = 'id',
        GA = 'ga',
        IT = 'it',
        JA = 'ja',
        KN = 'kn',
        KK = 'kk',
        RW_RW = 'rw_RW',
        KO = 'ko',
        KY_KG = 'ky_KG',
        LO = 'lo',
        LV = 'lv',
        LT = 'lt',
        MK = 'mk',
        MS = 'ms',
        ML = 'ml',
        MR = 'mr',
        NB = 'nb',
        FA = 'fa',
        PL = 'pl',
        PT_BR = 'pt_BR',
        PT_PT = 'pt_PT',
        PA = 'pa',
        RO = 'ro',
        RU = 'ru',
        SR = 'sr',
        SK = 'sk',
        SL = 'sl',
        ES = 'es',
        ES_AR = 'es_AR',
        ES_ES = 'es_ES',
        ES_MX = 'es_MX',
        SW = 'sw',
        SV = 'sv',
        TA = 'ta',
        TE = 'te',
        TH = 'th',
        TR = 'tr',
        UK = 'uk',
        UR = 'ur',
        UZ = 'uz',
        VI = 'vi',
        ZU = 'zu',
    }

    export enum score {
        UNKNOWN = 'UNKNOWN',
        HIGH = 'HIGH',
        MEDIUM = 'MEDIUM',
        LOW = 'LOW',
    }

    /**
     * The current status of the message template, The possible values are provided by WhatsApp and are subject to change.
     */
    export enum status {
        APPROVED = 'APPROVED',
        IN_APPEAL = 'IN_APPEAL',
        PENDING = 'PENDING',
        REJECTED = 'REJECTED',
        PENDING_DELETION = 'PENDING_DELETION',
        DELETED = 'DELETED',
        DISABLED = 'DISABLED',
    }


}

