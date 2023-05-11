/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DialogflowConnection = {
    /**
     * The JSON map to connect your Dialoglow account.
     */
    service_account: Record<string, any>;
    /**
     * Determin which Dialogflow will be used.
     */
    dialogflow_api?: DialogflowConnection.dialogflow_api;
    /**
     * The id of a configured conversation profile on your Dialogflow account. (If you use Dialogflow CX, this param is required)
     */
    conversation_profile_id?: string;
    /**
     * The region of your agent is. (If you use Dialogflow CX, this param is required)
     */
    location?: string;
    /**
     * Which Dialogflow environment will be used.
     */
    environment?: string;
};

export namespace DialogflowConnection {

    /**
     * Determin which Dialogflow will be used.
     */
    export enum dialogflow_api {
        CX = 'cx',
        ES = 'es',
    }


}

