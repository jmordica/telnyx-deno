/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { NotificationChannel } from '../models/NotificationChannel.ts';
import type { NotificationEvent } from '../models/NotificationEvent.ts';
import type { NotificationEventCondition } from '../models/NotificationEventCondition.ts';
import type { NotificationProfile } from '../models/NotificationProfile.ts';
import type { NotificationSetting } from '../models/NotificationSetting.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class NotificationsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List notification channels
     * List notification channels.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterChannelTypeIdEq Filter by the id of a channel type
     * @returns any Returns a list of notification channels.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listNotificationChannels(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterChannelTypeIdEq?: 'webhook' | 'sms' | 'email' | 'voice',
    ): CancelablePromise<{
        data?: Array<NotificationChannel>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/notification_channels',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[channel_type_id][eq]': filterChannelTypeIdEq,
            },
        });
    }

    /**
     * Create a notification channel
     * Create a notification channel.
     * @param requestBody Add a Notification Channel
     * @returns any A Notification Channel response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public createNotificationChannels(
        requestBody?: NotificationChannel,
    ): CancelablePromise<{
        data?: NotificationChannel;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/notification_channels',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a notification channel
     * Delete a notification channel.
     * @param id Identifies the resource.
     * @returns any A Notification Channel response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public deleteNotificationChannel(
        id: string,
    ): CancelablePromise<{
        data?: NotificationChannel;
    } | Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/notification_channels/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Retrieve a notification channel
     * Retrieve a notification channel.
     * @param id Identifies the resource.
     * @returns any A Notification Channel response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrieveNotificationChannel(
        id: string,
    ): CancelablePromise<{
        data?: NotificationChannel;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/notification_channels/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a notification channel
     * Update a notification channel.
     * @param id Identifies the resource.
     * @param requestBody Update notification channel object
     * @returns any A Notification Channel response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public updateNotificationChannel(
        id: string,
        requestBody: NotificationChannel,
    ): CancelablePromise<{
        data?: NotificationChannel;
    } | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/notification_channels/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List all Notifications Events Conditions
     * Returns a list of your notifications events conditions.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterAssociatedRecordTypeEq Filter by the associated record type
     * @returns any Returns a list of notification event conditions available.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public findNotificationsEventsConditions(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterAssociatedRecordTypeEq?: 'account' | 'phone_number',
    ): CancelablePromise<{
        data?: Array<NotificationEventCondition>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/notification_event_conditions',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[associated_record_type][eq]': filterAssociatedRecordTypeEq,
            },
        });
    }

    /**
     * List all Notifications Events
     * Returns a list of your notifications events.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Returns a list of notification events available.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public findNotificationsEvents(
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<NotificationEvent>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/notification_events',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * List all Notifications Profiles
     * Returns a list of your notifications profiles.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Returns a list of notification profiles.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public findNotificationsProfiles(
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<NotificationProfile>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/notification_profiles',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * Create a notification profile
     * Create a notification profile.
     * @param requestBody Add a Notification Profile
     * @returns any A Notification Profile response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public createNotificationProfile(
        requestBody?: NotificationProfile,
    ): CancelablePromise<{
        data?: NotificationProfile;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/notification_profiles',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a notification profile
     * Delete a notification profile.
     * @param id Identifies the resource.
     * @returns any A Notification Profile response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public deleteNotificationProfile(
        id: string,
    ): CancelablePromise<{
        data?: NotificationProfile;
    } | Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/notification_profiles/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Retrieve a notification profile
     * Retrieve a notification profile.
     * @param id Identifies the resource.
     * @returns any A Notification Profile response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrieveNotificationProfile(
        id: string,
    ): CancelablePromise<{
        data?: NotificationProfile;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/notification_profiles/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a notification profile
     * Update a notification profile.
     * @param id Identifies the resource.
     * @param requestBody Update notification profile object
     * @returns any A Notification Profile response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public updateNotificationProfile(
        id: string,
        requestBody: NotificationProfile,
    ): CancelablePromise<{
        data?: NotificationProfile;
    } | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/notification_profiles/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List notification settings
     * List notification settings.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterNotificationProfileIdEq Filter by the id of a notification profile
     * @param filterNotificationChannelEq Filter by the id of a notification channel
     * @param filterNotificationEventConditionIdEq Filter by the id of a notification channel
     * @param filterAssociatedRecordTypeEq Filter by the associated record type
     * @param filterStatusEq The status of a notification setting
     * @returns any Returns a list of notification settings.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listNotificationSettings(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterNotificationProfileIdEq?: string,
        filterNotificationChannelEq?: string,
        filterNotificationEventConditionIdEq?: string,
        filterAssociatedRecordTypeEq?: 'account' | 'phone_number',
        filterStatusEq?: 'enabled' | 'enable-received' | 'enable-pending' | 'enable-submtited' | 'delete-received' | 'delete-pending' | 'delete-submitted' | 'deleted',
    ): CancelablePromise<{
        data?: Array<NotificationSetting>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/notification_settings',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[notification_profile_id][eq]': filterNotificationProfileIdEq,
                'filter[notification_channel][eq]': filterNotificationChannelEq,
                'filter[notification_event_condition_id][eq]': filterNotificationEventConditionIdEq,
                'filter[associated_record_type][eq]': filterAssociatedRecordTypeEq,
                'filter[status][eq]': filterStatusEq,
            },
        });
    }

    /**
     * Add a Notification Setting
     * Add a notification setting.
     * @param requestBody
     * @returns any A Notification Setting response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public createNotificationSetting(
        requestBody?: NotificationSetting,
    ): CancelablePromise<{
        data?: NotificationSetting;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/notification_settings',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a notification setting
     * Delete a notification setting.
     * @param id Identifies the resource.
     * @returns any A Notification Setting response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public deleteNotificationSetting(
        id: string,
    ): CancelablePromise<{
        data?: NotificationSetting;
    } | Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/notification_settings/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Retrieve a notification setting
     * Retrieve a notification setting.
     * @param id Identifies the resource.
     * @returns any A Notification Setting response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrieveNotificationSetting(
        id: string,
    ): CancelablePromise<{
        data?: NotificationSetting;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/notification_settings/{id}',
            path: {
                'id': id,
            },
        });
    }

}
