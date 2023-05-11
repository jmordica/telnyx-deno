/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TemplateButtonComponent } from './TemplateButtonComponent.ts';
import type { TemplateComponent } from './TemplateComponent.ts';
import type { TemplateParameters } from './TemplateParameters.ts';

export type TemplateComponents = Array<(TemplateComponent | TemplateButtonComponent | {
    /**
     * Describes the component type.
     */
    type: 'header' | 'body' | 'footer.ts';
    parameters?: TemplateParameters;
})>;
