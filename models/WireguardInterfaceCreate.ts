/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegionIn } from './RegionIn.ts';
import type { WireguardInterface } from './WireguardInterface.ts';

export type WireguardInterfaceCreate = (WireguardInterface & RegionIn & Record<string, any>);

