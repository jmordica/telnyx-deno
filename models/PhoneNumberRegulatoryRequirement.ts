/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubNumberOrderRegulatoryRequirement } from './SubNumberOrderRegulatoryRequirement.ts';

export type PhoneNumberRegulatoryRequirement = (SubNumberOrderRegulatoryRequirement & {
    /**
     * The value of the requirement, this could be an id to a resource or a string value.
     */
    field_value?: string;
});

