/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Cursor } from './Cursor.ts';

export type CursorPaginationMeta = {
    cursors?: Cursor;
    total_items?: number;
    /**
     * Path to next page.
     */
    next?: string;
    /**
     * Path to previous page.
     */
    previous?: string;
};

