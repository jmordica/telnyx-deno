// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { Errors } from '../models/Errors.ts';
import { UploadMedia } from '../models/UploadMedia.ts';

/**
 * no description
 */
export class WhatsAppMediaApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Delete uploaded media.
     * Delete Media
     * @param whatsappUserId User\&#39;s WhatsApp ID
     * @param mediaId WhatsApp\&#39;s Media ID
     */
    public async deleteMedia(whatsappUserId: string, mediaId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'whatsappUserId' is not null or undefined
        if (whatsappUserId === null || whatsappUserId === undefined) {
            throw new RequiredError("WhatsAppMediaApi", "deleteMedia", "whatsappUserId");
        }


        // verify required parameter 'mediaId' is not null or undefined
        if (mediaId === null || mediaId === undefined) {
            throw new RequiredError("WhatsAppMediaApi", "deleteMedia", "mediaId");
        }


        // Path Params
        const localVarPath = '/whatsapp_media/{whatsapp_user_id}/{media_id}'
            .replace('{' + 'whatsapp_user_id' + '}', encodeURIComponent(String(whatsappUserId)))
            .replace('{' + 'media_id' + '}', encodeURIComponent(String(mediaId)));

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
     * Retrieve uploaded media. Media is typically available for 30 days after uploading.
     * Download Media
     * @param whatsappUserId User\&#39;s WhatsApp ID
     * @param mediaId WhatsApp\&#39;s Media ID
     */
    public async downloadMedia(whatsappUserId: string, mediaId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'whatsappUserId' is not null or undefined
        if (whatsappUserId === null || whatsappUserId === undefined) {
            throw new RequiredError("WhatsAppMediaApi", "downloadMedia", "whatsappUserId");
        }


        // verify required parameter 'mediaId' is not null or undefined
        if (mediaId === null || mediaId === undefined) {
            throw new RequiredError("WhatsAppMediaApi", "downloadMedia", "mediaId");
        }


        // Path Params
        const localVarPath = '/whatsapp_media/{whatsapp_user_id}/{media_id}'
            .replace('{' + 'whatsapp_user_id' + '}', encodeURIComponent(String(whatsappUserId)))
            .replace('{' + 'media_id' + '}', encodeURIComponent(String(mediaId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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
     * Upload media. Accepted media types include image/jpeg, image/png, video/mp4, video/3gpp, audio/aac, audio/ogg.
     * Upload Media
     * @param whatsappUserId The user\\\&#39;s WhatsApp ID.
     * @param mediaContentType The content-type of the uplaoded media.
     * @param uploadFile The media to store with WhatsApp.
     */
    public async uploadMedia(whatsappUserId: string, mediaContentType: string, uploadFile: HttpFile, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'whatsappUserId' is not null or undefined
        if (whatsappUserId === null || whatsappUserId === undefined) {
            throw new RequiredError("WhatsAppMediaApi", "uploadMedia", "whatsappUserId");
        }


        // verify required parameter 'mediaContentType' is not null or undefined
        if (mediaContentType === null || mediaContentType === undefined) {
            throw new RequiredError("WhatsAppMediaApi", "uploadMedia", "mediaContentType");
        }


        // verify required parameter 'uploadFile' is not null or undefined
        if (uploadFile === null || uploadFile === undefined) {
            throw new RequiredError("WhatsAppMediaApi", "uploadMedia", "uploadFile");
        }


        // Path Params
        const localVarPath = '/whatsapp_media';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'multipart/form-data',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (whatsappUserId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('whatsapp_user_id', whatsappUserId as any);
        }
        if (mediaContentType !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('media_content_type', mediaContentType as any);
        }
        if (uploadFile !== undefined) {
             // TODO: replace .append with .set
             if (localVarFormParams instanceof FormData) {
                 localVarFormParams.append('upload_file', uploadFile, uploadFile.name);
             }
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
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

export class WhatsAppMediaApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteMedia
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteMedia(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to downloadMedia
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async downloadMedia(response: ResponseContext): Promise<HttpFile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", "binary"
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HttpFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpFile", "binary"
            ) as HttpFile;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadMedia
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async uploadMedia(response: ResponseContext): Promise<UploadMedia > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UploadMedia = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UploadMedia", ""
            ) as UploadMedia;
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
            const body: UploadMedia = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UploadMedia", ""
            ) as UploadMedia;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
