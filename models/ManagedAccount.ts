/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ManagedAccountBalance } from './ManagedAccountBalance.ts';

export type ManagedAccount = {
    /**
     * Identifies the type of the resource.
     */
    record_type: ManagedAccount.record_type;
    /**
     * Uniquely identifies the managed account.
     */
    id: string;
    /**
     * The managed account's email.
     */
    email: string;
    /**
     * The managed account's V2 API access key
     */
    api_key: string;
    /**
     * The manager account's email, which serves as the V1 API user identifier
     */
    api_user: string;
    /**
     * The managed account's V1 API token
     */
    api_token: string;
    /**
     * The organization the managed account is associated with.
     */
    organization_name?: string;
    /**
     * The ID of the manager account associated with the managed account.
     */
    manager_account_id: string;
    balance?: ManagedAccountBalance;
    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at: string;
    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at: string;
    /**
     * Boolean value that indicates if the managed account is able to have custom pricing set for it or not. If false, uses the pricing of the manager account. Defaults to false. There may be time lag between when the value is changed and pricing changes take effect.
     */
    managed_account_allow_custom_pricing?: boolean;
    /**
     * Boolean value that indicates if the billing information and charges to the managed account "roll up" to the manager account. If true, the managed account will not have its own balance and will use the shared balance with the manager account. This value cannot be changed after account creation without going through Telnyx support as changes require manual updates to the account ledger. Defaults to false.
     */
    rollup_billing?: boolean;
};

export namespace ManagedAccount {

    /**
     * Identifies the type of the resource.
     */
    export enum record_type {
        MANAGED_ACCOUNT = 'managed_account',
    }


}

