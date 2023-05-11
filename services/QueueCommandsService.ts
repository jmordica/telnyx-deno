/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { Queue } from '../models/Queue.ts';
import type { QueueCall } from '../models/QueueCall.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class QueueCommandsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Retrieve a call queue
     * Retrieve an existing call queue
     * @param queueName Uniquely identifies the queue by name
     * @returns any Successful response with details about a queue.
     * @throws ApiError
     */
    public retrieveCallQueue(
        queueName: string,
    ): CancelablePromise<{
        data?: Queue;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/queues/{queue_name}',
            path: {
                'queue_name': queueName,
            },
            errors: {
                404: `Conference does not exist`,
            },
        });
    }

    /**
     * Retrieve calls from a queue
     * Retrieve the list of calls in an existing queue
     * @param queueName Uniquely identifies the queue by name
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response with a list of calls in a queue.
     * @throws ApiError
     */
    public listQueueCalls(
        queueName: string,
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<QueueCall>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/queues/{queue_name}/calls',
            path: {
                'queue_name': queueName,
            },
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
            errors: {
                404: `Conference does not exist`,
            },
        });
    }

    /**
     * Retrieve a call from a queue
     * Retrieve an existing call from an existing queue
     * @param queueName Uniquely identifies the queue by name
     * @param callControlId Unique identifier and token for controlling the call
     * @returns any Successful response with details about a call in a queue.
     * @throws ApiError
     */
    public retrieveCallFromQueue(
        queueName: string,
        callControlId: string,
    ): CancelablePromise<{
        data?: QueueCall;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/queues/{queue_name}/calls/{call_control_id}',
            path: {
                'queue_name': queueName,
                'call_control_id': callControlId,
            },
            errors: {
                404: `Conference does not exist`,
            },
        });
    }

}
