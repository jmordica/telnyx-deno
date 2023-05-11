/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AutorespConfigSchema = {
    op: AutorespConfigSchema.op;
    keywords: Array<string>;
    resp_text?: string;
    country_code: string;
    id: string;
    created_at: string;
    updated_at: string;
};

export namespace AutorespConfigSchema {

    export enum op {
        START = 'start',
        STOP = 'stop',
        INFO = 'info',
    }


}

