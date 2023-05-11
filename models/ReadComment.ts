/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Comment } from './Comment.ts';

export type ReadComment = (Comment & {
    /**
     * An ISO 8901 datetime string for when the comment was read.
     */
    readonly read_at?: string;
});

