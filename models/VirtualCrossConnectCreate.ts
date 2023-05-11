/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegionIn } from './RegionIn.ts';
import type { VirtualCrossConnect } from './VirtualCrossConnect.ts';

export type VirtualCrossConnectCreate = (VirtualCrossConnect & RegionIn & Record<string, any>);

