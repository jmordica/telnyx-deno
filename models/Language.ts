/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Language = {
    /**
     * The language policy the message should follow
     */
    policy: Language.policy;
    /**
     * The code of the language or locale to use — Accepts both language and language_locale formats (e.g., en and en_US).
     */
    code: string;
};

export namespace Language {

    /**
     * The language policy the message should follow
     */
    export enum policy {
        FALLBACK = 'fallback',
        DETERMINISTIC = 'deterministic',
    }


}

