/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ButtonComponentType } from './ButtonComponentType.ts';
import type { ButtonSubtype } from './ButtonSubtype.ts';
import type { TemplateButtonParameters } from './TemplateButtonParameters.ts';

export type TemplateButtonComponent = {
    /**
     * Describes the component type.
     */
    type: ButtonComponentType;
    /**
     * Used when type is set to button.
     */
    sub_type: ButtonSubtype;
    /**
     * Position index of the button. You can have up to 3 buttons using index values of 0-2.
     */
    index: number;
    /**
     * The parameters for the button, which are set at creation time in your Business Manager.
     */
    parameters: TemplateButtonParameters;
};

