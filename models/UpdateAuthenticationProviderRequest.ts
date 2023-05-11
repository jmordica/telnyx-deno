/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { active } from './active.ts';
import type { name } from './Name.ts';
import type { settings } from './settings.ts';
import type { settings_url } from './settings_url.ts';
import type { short_name } from './short_name.ts';

export type UpdateAuthenticationProviderRequest = {
    name?: name;
    short_name?: short_name;
    active?: active;
    settings?: settings;
    settings_url?: settings_url;
};

