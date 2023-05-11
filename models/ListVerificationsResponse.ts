/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Meta } from './Meta.ts';
import type { Verification } from './Verification.ts';

export type ListVerificationsResponse = {
    data: Array<Verification>;
    meta: Meta;
};

