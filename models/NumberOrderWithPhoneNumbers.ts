/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NumberOrder } from './NumberOrder.ts';
import type { PhoneNumber } from './PhoneNumber.ts';

export type NumberOrderWithPhoneNumbers = (NumberOrder & {
    phone_numbers?: Array<PhoneNumber>;
});

