/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Meta } from './Meta.ts';
import type { VerifyProfileResponse } from './VerifyProfileResponse.ts';

/**
 * A paginated list of Verify profiles
 */
export type ListVerifyProfilesResponse = {
    data: Array<VerifyProfileResponse>;
    meta: Meta;
};

