// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { CreateWhatsappMessageTemplateRequestBody } from '../models/CreateWhatsappMessageTemplateRequestBody.ts';
import { Errors } from '../models/Errors.ts';
import { WhatsAppMessageTemplate } from '../models/WhatsAppMessageTemplate.ts';
import { WhatsAppMessageTemplate1 } from '../models/WhatsAppMessageTemplate1.ts';

/**
 * no description
 */
export class WhatsAppMessageTemplateApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create WhatsApp Message Templates
     * @param id Identifies the WhatsApp Business Account
     * @param createWhatsappMessageTemplateRequestBody 
     */
    public async createWhatsappMessageTemplates(id: string, createWhatsappMessageTemplateRequestBody?: CreateWhatsappMessageTemplateRequestBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("WhatsAppMessageTemplateApi", "createWhatsappMessageTemplates", "id");
        }



        // Path Params
        const localVarPath = '/whatsapp_business_accounts/{id}/whatsapp_message_templates'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "multipart/form-data"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createWhatsappMessageTemplateRequestBody, "CreateWhatsappMessageTemplateRequestBody", ""),
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
     * Deletes all of the message templates with the given name and business account
     * Delete WhatsApp Message Templates
     * @param id Identifies the WhatsApp Business Account
     * @param name The name of the Whatsapp Message Template
     */
    public async deleteWhatsappMessageTemplates(id: string, name: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("WhatsAppMessageTemplateApi", "deleteWhatsappMessageTemplates", "id");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("WhatsAppMessageTemplateApi", "deleteWhatsappMessageTemplates", "name");
        }


        // Path Params
        const localVarPath = '/whatsapp_business_accounts/{id}/whatsapp_message_templates/{name}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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
     * List WhatsApp Message Templates
     * @param id Identifies the WhatsApp Business Account
     * @param category The template category
     * @param language The language of the whatsapp message template
     * @param name A name identifying this whatsapp message template
     * @param qualityScore The score of the whatsapp message template
     * @param rejectedReason The reason why a message template was rejected by Whatsapp
     * @param limit The maximum number of message_templates to be returned on a query, we may return less than the limit number even if more pages are available.
     * @param before Indicates that this is a query for entries before the given cursor
     * @param after Indicates that this is a query for entries after the given cursor
     * @param status Identifies the whatsApp Message Template status
     */
    public async listWhatsappMessageTemplates(id: string, category?: 'ACCOUNT_UPDATE' | 'PAYMENT_UPDATE' | 'PERSONAL_FINANCE_UPDATE' | 'SHIPPING_UPDATE' | 'RESERVATION_UPDATE' | 'ISSUE_RESOLUTION' | 'APPOINTMENT_UPDATE' | 'TRANSPORTATION_UPDATE' | 'TICKET_UPDATE' | 'ALERT_UPDATE' | 'AUTO_REPLY', language?: 'af' | 'sq' | 'ar' | 'az' | 'bn' | 'bg' | 'ca' | 'zh_CN' | 'zh_HK' | 'zh_TW' | 'hr' | 'cs' | 'da' | 'nl' | 'en' | 'en_GB' | 'en_US' | 'et' | 'fil' | 'fi' | 'fr' | 'ka' | 'de' | 'el' | 'gu' | 'ha' | 'he' | 'hi' | 'hu' | 'id' | 'ga' | 'it' | 'ja' | 'kn' | 'kk' | 'rw_RW' | 'ko' | 'ky_KG' | 'lo' | 'lv' | 'lt' | 'mk' | 'ms' | 'ml' | 'mr' | 'nb' | 'fa' | 'pl' | 'pt_BR' | 'pt_PT' | 'pa' | 'ro' | 'ru' | 'sr' | 'sk' | 'sl' | 'es' | 'es_AR' | 'es_ES' | 'es_MX' | 'sw' | 'sv' | 'ta' | 'te' | 'th' | 'tr' | 'uk' | 'ur' | 'uz' | 'vi' | 'zu', name?: string, qualityScore?: string, rejectedReason?: string, limit?: string, before?: string, after?: string, status?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("WhatsAppMessageTemplateApi", "listWhatsappMessageTemplates", "id");
        }











        // Path Params
        const localVarPath = '/whatsapp_business_accounts/{id}/whatsapp_message_templates'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (category !== undefined) {
            requestContext.setQueryParam("category", ObjectSerializer.serialize(category, "'ACCOUNT_UPDATE' | 'PAYMENT_UPDATE' | 'PERSONAL_FINANCE_UPDATE' | 'SHIPPING_UPDATE' | 'RESERVATION_UPDATE' | 'ISSUE_RESOLUTION' | 'APPOINTMENT_UPDATE' | 'TRANSPORTATION_UPDATE' | 'TICKET_UPDATE' | 'ALERT_UPDATE' | 'AUTO_REPLY'", ""));
        }

        // Query Params
        if (language !== undefined) {
            requestContext.setQueryParam("language", ObjectSerializer.serialize(language, "'af' | 'sq' | 'ar' | 'az' | 'bn' | 'bg' | 'ca' | 'zh_CN' | 'zh_HK' | 'zh_TW' | 'hr' | 'cs' | 'da' | 'nl' | 'en' | 'en_GB' | 'en_US' | 'et' | 'fil' | 'fi' | 'fr' | 'ka' | 'de' | 'el' | 'gu' | 'ha' | 'he' | 'hi' | 'hu' | 'id' | 'ga' | 'it' | 'ja' | 'kn' | 'kk' | 'rw_RW' | 'ko' | 'ky_KG' | 'lo' | 'lv' | 'lt' | 'mk' | 'ms' | 'ml' | 'mr' | 'nb' | 'fa' | 'pl' | 'pt_BR' | 'pt_PT' | 'pa' | 'ro' | 'ru' | 'sr' | 'sk' | 'sl' | 'es' | 'es_AR' | 'es_ES' | 'es_MX' | 'sw' | 'sv' | 'ta' | 'te' | 'th' | 'tr' | 'uk' | 'ur' | 'uz' | 'vi' | 'zu'", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }

        // Query Params
        if (qualityScore !== undefined) {
            requestContext.setQueryParam("quality_score", ObjectSerializer.serialize(qualityScore, "string", ""));
        }

        // Query Params
        if (rejectedReason !== undefined) {
            requestContext.setQueryParam("rejected_reason", ObjectSerializer.serialize(rejectedReason, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "string", ""));
        }

        // Query Params
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "string", ""));
        }

        // Query Params
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer.serialize(after, "string", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "string", ""));
        }


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

export class WhatsAppMessageTemplateApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createWhatsappMessageTemplates
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createWhatsappMessageTemplates(response: ResponseContext): Promise<WhatsAppMessageTemplate1 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WhatsAppMessageTemplate1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WhatsAppMessageTemplate1", ""
            ) as WhatsAppMessageTemplate1;
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
            const body: WhatsAppMessageTemplate1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WhatsAppMessageTemplate1", ""
            ) as WhatsAppMessageTemplate1;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteWhatsappMessageTemplates
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteWhatsappMessageTemplates(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
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
     * @params response Response returned by the server for a request to listWhatsappMessageTemplates
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listWhatsappMessageTemplates(response: ResponseContext): Promise<WhatsAppMessageTemplate > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WhatsAppMessageTemplate = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WhatsAppMessageTemplate", ""
            ) as WhatsAppMessageTemplate;
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
            const body: WhatsAppMessageTemplate = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WhatsAppMessageTemplate", ""
            ) as WhatsAppMessageTemplate;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
