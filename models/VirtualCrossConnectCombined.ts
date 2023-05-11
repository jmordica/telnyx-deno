/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegionOut } from './RegionOut.ts';
import type { VirtualCrossConnectCreate } from './VirtualCrossConnectCreate.ts';
import type { VirtualCrossConnectPatch } from './VirtualCrossConnectPatch.ts';

export type VirtualCrossConnectCombined = (VirtualCrossConnectCreate & VirtualCrossConnectPatch & RegionOut);

