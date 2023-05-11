/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InteractiveButtonReply } from './InteractiveButtonReply.ts';
import type { InteractiveButtonType } from './InteractiveButtonType.ts';

export type InteractiveButton = {
    /**
     * The only supported type is reply (for Reply Button Messages).
     */
    type?: InteractiveButtonType;
    /**
     * Reply button details.
     */
    reply: InteractiveButtonReply;
};

