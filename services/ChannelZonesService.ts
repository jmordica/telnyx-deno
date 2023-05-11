/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { GcbChannelZone } from '../models/GcbChannelZone.ts';
import type { GcbPhoneNumber } from '../models/GcbPhoneNumber.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class ChannelZonesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get list of channel zones
     * List of channel zones with their countries
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any A list of channel zones
     * @throws ApiError
     */
    public getChannelZones(
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<GcbChannelZone>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/channel_zones',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * Get a specific channel zone
     * Get a specific channel zone
     * @param channelZoneId Channel zone identifier
     * @returns GcbChannelZone Requested channel zone
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public getChannelZone(
        channelZoneId: string,
    ): CancelablePromise<GcbChannelZone | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/channel_zones/{channel_zone_id}',
            path: {
                'channel_zone_id': channelZoneId,
            },
        });
    }

    /**
     * Patch a channel zone
     * Change the amount of reserved channels at a given channel zone
     * @param channelZoneId Channel zone identifier
     * @param requestBody Quantity of reserved channels
     * @returns GcbChannelZone Successfuly patched channel zone
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public patchGroup(
        channelZoneId: string,
        requestBody: {
            channels?: number;
        },
    ): CancelablePromise<GcbChannelZone | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/channel_zones/{channel_zone_id}',
            path: {
                'channel_zone_id': channelZoneId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get the list of phone numbers assigned to a channel zone
     * Retrieve the assigned phone numbers in a channel zone. Phone numbers assigned to a channel zone can receive concurrent calls up to the quantity reserved in that channel zone. Additional concurrent calls are rejected with a busy signal.
     * @param channelZoneId Channel zone identifier
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any A list of phone numbers
     * @throws ApiError
     */
    public getPhoneNumbers(
        channelZoneId: string,
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<GcbPhoneNumber>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/channel_zones/{channel_zone_id}/channel_zone_phone_numbers',
            path: {
                'channel_zone_id': channelZoneId,
            },
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * Assign a phone number to a channel zone
     * You should own the phone number being assigned to the channel zone. Remember that you should reserve channels in this channel zone, otherwise you won't be able to receive incoming calls.
     * @param channelZoneId Channel zone identifier
     * @param requestBody Phone number to assign to the channel zone. The phone number should be in E.164 format.
     * @returns GcbPhoneNumber A new inserted phone number
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public assignPhoneNumber(
        channelZoneId: string,
        requestBody: {
            phone_number: string;
        },
    ): CancelablePromise<GcbPhoneNumber | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/channel_zones/{channel_zone_id}/channel_zone_phone_numbers',
            path: {
                'channel_zone_id': channelZoneId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Unassign a phone number from a channel zone
     * @param channelZoneId Channel zone identifier
     * @param phoneNumber The phone number to be looked up
     * @returns any The phone number is successfully deleted
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public unassignPhoneNumber(
        channelZoneId: string,
        phoneNumber: string,
    ): CancelablePromise<any | Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/channel_zones/{channel_zone_id}/channel_zone_phone_numbers/{phone_number}',
            path: {
                'channel_zone_id': channelZoneId,
                'phone_number': phoneNumber,
            },
        });
    }

}
