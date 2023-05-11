/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VerificationProfileRecordType } from './VerificationProfileRecordType.ts';
import type { VerifyProfileCallResponse } from './VerifyProfileCallResponse.ts';
import type { VerifyProfileFlashcallResponse } from './VerifyProfileFlashcallResponse.ts';
import type { VerifyProfilePSD2Response } from './VerifyProfilePSD2Response.ts';
import type { VerifyProfileSMSResponse } from './VerifyProfileSMSResponse.ts';
import type { VerifyProfileWhatsappResponse } from './VerifyProfileWhatsappResponse.ts';

export type VerifyProfileResponse = {
    id?: string;
    name?: string;
    webhook_url?: string;
    webhook_failover_url?: string;
    record_type?: VerificationProfileRecordType;
    created_at?: string;
    updated_at?: string;
    sms?: VerifyProfileSMSResponse;
    psd2?: VerifyProfilePSD2Response;
    whatsapp?: VerifyProfileWhatsappResponse;
    call?: VerifyProfileCallResponse;
    flashcall?: VerifyProfileFlashcallResponse;
    language?: string;
};

