/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AutoRespConfigCreateSchema = {
    op: AutoRespConfigCreateSchema.op;
    keywords: Array<string>;
    resp_text?: string;
    country_code: string;
};

export namespace AutoRespConfigCreateSchema {

    export enum op {
        START = 'start',
        STOP = 'stop',
        INFO = 'info',
    }


}

