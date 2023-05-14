// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { CreateWhatsAppMessageRequest } from '../models/CreateWhatsAppMessageRequest.ts';
import { Errors } from '../models/Errors.ts';
import { MarkMessageAsReadRequestBody } from '../models/MarkMessageAsReadRequestBody.ts';
import { SuccessfulResponseWithDetailsAboutTheWhatsAppMessageSent } from '../models/SuccessfulResponseWithDetailsAboutTheWhatsAppMessageSent.ts';

/**
 * no description
 */
export class WhatsAppMessagesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Mark a message as read.
     * Mark Message As Read
     * @param messageId Message ID from Webhook
     * @param markMessageAsReadRequestBody 
     */
    public async markMessageAsRead(messageId: string, markMessageAsReadRequestBody: MarkMessageAsReadRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'messageId' is not null or undefined
        if (messageId === null || messageId === undefined) {
            throw new RequiredError("WhatsAppMessagesApi", "markMessageAsRead", "messageId");
        }


        // verify required parameter 'markMessageAsReadRequestBody' is not null or undefined
        if (markMessageAsReadRequestBody === null || markMessageAsReadRequestBody === undefined) {
            throw new RequiredError("WhatsAppMessagesApi", "markMessageAsRead", "markMessageAsReadRequestBody");
        }


        // Path Params
        const localVarPath = '/whatsapp_messages/{message_id}'
            .replace('{' + 'message_id' + '}', encodeURIComponent(String(messageId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(markMessageAsReadRequestBody, "MarkMessageAsReadRequestBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Send text messages, media/documents, and message templates to your customers.
     * Send Message
     * @param createWhatsAppMessageRequest 
     */
    public async sendMessage(createWhatsAppMessageRequest: CreateWhatsAppMessageRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createWhatsAppMessageRequest' is not null or undefined
        if (createWhatsAppMessageRequest === null || createWhatsAppMessageRequest === undefined) {
            throw new RequiredError("WhatsAppMessagesApi", "sendMessage", "createWhatsAppMessageRequest");
        }


        // Path Params
        const localVarPath = '/whatsapp_messages';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createWhatsAppMessageRequest, "CreateWhatsAppMessageRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class WhatsAppMessagesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to markMessageAsRead
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async markMessageAsRead(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sendMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sendMessage(response: ResponseContext): Promise<SuccessfulResponseWithDetailsAboutTheWhatsAppMessageSent > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SuccessfulResponseWithDetailsAboutTheWhatsAppMessageSent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccessfulResponseWithDetailsAboutTheWhatsAppMessageSent", ""
            ) as SuccessfulResponseWithDetailsAboutTheWhatsAppMessageSent;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SuccessfulResponseWithDetailsAboutTheWhatsAppMessageSent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccessfulResponseWithDetailsAboutTheWhatsAppMessageSent", ""
            ) as SuccessfulResponseWithDetailsAboutTheWhatsAppMessageSent;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
