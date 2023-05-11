/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DialogflowConnectionResponse = {
    data: {
        record_type?: string;
        /**
         * Uniquely identifies a Telnyx application (Call Control).
         */
        connection_id?: string;
        /**
         * The id of a configured conversation profile on your Dialogflow account. (If you use Dialogflow CX, this param is required)
         */
        conversation_profile_id?: string;
        /**
         * Which Dialogflow environment will be used.
         */
        environment?: string;
        /**
         * The JSON map to connect your Dialoglow account.
         */
        service_account?: string;
    };
};

