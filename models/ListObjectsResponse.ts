/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListObjectsResponse = {
    Name?: string;
    Contents?: Array<{
        Key?: string;
        Size?: number;
        LastModified?: string;
    }>;
};

