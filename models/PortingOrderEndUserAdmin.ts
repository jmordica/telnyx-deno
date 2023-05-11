/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PortingOrderEndUserAdmin = {
    /**
     * Person Name or Company name requesting the port
     */
    entity_name?: string;
    /**
     * Name of person authorizing the porting order
     */
    auth_person_name?: string;
    /**
     * Billing phone number associated with these phone numbers
     */
    billing_phone_number?: string;
    /**
     * The authorized person's account number with the current service provider
     */
    account_number?: string;
    /**
     * European tax identification number. Applicable only in the European Union
     */
    tax_identifier?: string;
    /**
     * PIN/passcode possibly required by the old service provider for extra verification
     */
    pin_passcode?: string;
    /**
     * European business identification number. Applicable only in the European Union
     */
    business_identifier?: string;
};

