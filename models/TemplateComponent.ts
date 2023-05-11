/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TemplateComponentType } from './TemplateComponentType.ts';
import type { TemplateParameters } from './TemplateParameters.ts';

export type TemplateComponent = {
    /**
     * Describes the component type.
     */
    type: TemplateComponentType;
    parameters?: TemplateParameters;
};

