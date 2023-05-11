/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CursorPagination = {
    cursors?: {
        /**
         * A cursor to use for paginating results.
         */
        before?: string;
        /**
         * A cursor to use for paginating results.
         */
        after?: string;
    };
    /**
     * A URL to the next page of results.
     */
    next?: string;
    /**
     * A URL to the previous page of results.
     */
    previous?: string;
};

