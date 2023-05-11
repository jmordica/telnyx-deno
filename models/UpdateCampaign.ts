/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateCampaign = {
    /**
     * Alphanumeric identifier of the reseller that you want to associate with this campaign.
     */
    resellerId?: string;
    /**
     * Message sample. Some campaign tiers require 1 or more message samples.
     */
    sample1?: string;
    /**
     * Message sample. Some campaign tiers require 2 or more message samples.
     */
    sample2?: string;
    /**
     * Message sample. Some campaign tiers require 3 or more message samples.
     */
    sample3?: string;
    /**
     * Message sample. Some campaign tiers require 4 or more message samples.
     */
    sample4?: string;
    /**
     * Message sample. Some campaign tiers require 5 or more message samples.
     */
    sample5?: string;
    /**
     * Message flow description.
     */
    messageFlow?: string;
    /**
     * Help message of the campaign.
     */
    helpMessage?: string;
    /**
     * Help message of the campaign.
     */
    autoRenewal?: boolean;
};

