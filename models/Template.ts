/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Language } from './Language.ts';
import type { TemplateComponents } from './TemplateComponents.ts';

export type Template = {
    /**
     * Namespace of the template. This must be the namespace associated with the WhatsApp business account that owns the phone number associated with the current WhatsApp Business API client or the message fails to send.
     */
    namespace: string;
    /**
     * Name of the template.
     */
    name: string;
    language: Language;
    components?: TemplateComponents;
};

