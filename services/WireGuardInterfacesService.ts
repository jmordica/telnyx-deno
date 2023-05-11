/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { WireguardInterfaceCreate } from '../models/WireguardInterfaceCreate.ts';
import type { WireguardInterfaceRead } from '../models/WireguardInterfaceRead.ts';
import type { WireguardPeer } from '../models/WireguardPeer.ts';
import type { WireguardPeerAllowedIP } from '../models/WireguardPeerAllowedIP.ts';
import type { WireguardPeerCreate } from '../models/WireguardPeerCreate.ts';
import type { WireguardPeerPatch } from '../models/WireguardPeerPatch.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class WireGuardInterfacesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List all WireGuard Interfaces
     * List all WireGuard Interfaces.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterNetworkId The associated network id to filter on.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public wireguardInterfaceList(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterNetworkId?: string,
    ): CancelablePromise<{
        data?: Array<WireguardInterfaceRead>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wireguard_interfaces',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[network_id]': filterNetworkId,
            },
        });
    }

    /**
     * Create a WireGuard Interface
     * Create a new WireGuard Interface. Current limitation of 10 interfaces per user can be created.
     * @param requestBody
     * @returns Errors Unexpected error
     * @returns any Successful response
     * @throws ApiError
     */
    public wireguardInterfaceCreate(
        requestBody: WireguardInterfaceCreate,
    ): CancelablePromise<Errors | {
        data?: WireguardInterfaceRead;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/wireguard_interfaces',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

    /**
     * Delete a WireGuard Interface
     * Delete a WireGuard Interface.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public wireguardInterfaceDelete(
        id: string,
    ): CancelablePromise<{
        data?: WireguardInterfaceRead;
    } | Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/wireguard_interfaces/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Retrieve a WireGuard Interfaces
     * Retrieve a WireGuard Interfaces.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public wireguardInterfaceGet(
        id: string,
    ): CancelablePromise<{
        data?: WireguardInterfaceRead;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wireguard_interfaces/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * List all WireGuard Peers
     * List all WireGuard peers.
     * @param id Identifies the resource.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterWireguardInterfaceId The id of the associated WireGuard interface to filter on.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public wireguardPeerList(
        id: string,
        pageNumber: number = 1,
        pageSize: number = 20,
        filterWireguardInterfaceId?: string,
    ): CancelablePromise<{
        data?: Array<WireguardPeer>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wireguard_peers',
            path: {
                'id': id,
            },
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[wireguard_interface_id]': filterWireguardInterfaceId,
            },
        });
    }

    /**
     * Create a WireGuard Peer
     * Create a new WireGuard Peer. Current limitation of 5 peers per interface can be created.
     * @param id Identifies the resource.
     * @param requestBody
     * @returns Errors Unexpected error
     * @returns any Successful response
     * @throws ApiError
     */
    public wireguardPeerCreate(
        id: string,
        requestBody: WireguardPeerCreate,
    ): CancelablePromise<Errors | {
        data?: WireguardPeer;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/wireguard_peers',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

    /**
     * Delete the WireGuard Peer
     * Delete the WireGuard peer.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public wireguardPeerDelete(
        id: string,
    ): CancelablePromise<{
        data?: WireguardPeer;
    } | Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/wireguard_peers/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Retrieve the WireGuard Peer
     * Retrieve the WireGuard peer.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public wireguardPeerGet(
        id: string,
    ): CancelablePromise<{
        data?: WireguardPeer;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wireguard_peers/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update the WireGuard Peer
     * Update the WireGuard peer.
     * @param id Identifies the resource.
     * @param requestBody
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public wireguardPeerUpdate(
        id: string,
        requestBody: WireguardPeerPatch,
    ): CancelablePromise<{
        data?: WireguardPeer;
    } | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/wireguard_peers/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

    /**
     * List all Allowed IPs for a WireGuard Peer
     * List all Allowed IPs for a WireGuard peer.
     * @param id Identifies the resource.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public wireguardPeerAllowedIpList(
        id: string,
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<WireguardPeerAllowedIP>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wireguard_peers/{id}/allowed_ips',
            path: {
                'id': id,
            },
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * Retrieve the Allowed IP
     * Retrieve the Allowed IP.
     * @param id Identifies the resource.
     * @param childId Identifies the child resource
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public wireguardPeerAllowedIpGet(
        id: string,
        childId: string,
    ): CancelablePromise<{
        data?: WireguardPeerAllowedIP;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wireguard_peers/{id}/allowed_ips/{child_id}',
            path: {
                'id': id,
                'child_id': childId,
            },
        });
    }

    /**
     * Retrieve Wireguard config template for Peer
     * Retrieve Wireguard config template for Peer
     * @param id Identifies the resource.
     * @returns string Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public wireguardPeerConfig(
        id: string,
    ): CancelablePromise<string | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wireguard_peers/{id}/config',
            path: {
                'id': id,
            },
        });
    }

}
