/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AmdDetailRecord } from './AmdDetailRecord.ts';
import type { ConferenceDetailRecord } from './ConferenceDetailRecord.ts';
import type { ConferenceParticipantDetailRecord } from './ConferenceParticipantDetailRecord.ts';
import type { MediaStorageDetailRecord } from './MediaStorageDetailRecord.ts';
import type { MessageDetailRecord } from './MessageDetailRecord.ts';
import type { SimCardUsageDetailRecord } from './SimCardUsageDetailRecord.ts';
import type { VerifyDetailRecord } from './VerifyDetailRecord.ts';
import type { WhatsAppConversationDetailRecord } from './WhatsAppConversationDetailRecord.ts';
import type { WhatsAppDetailRecord } from './WhatsAppDetailRecord.ts';

/**
 * An object following one of the schemas published in https://developers.telnyx.com/docs/api/v2/detail-records
 */
export type DetailRecord = (MessageDetailRecord | ConferenceDetailRecord | ConferenceParticipantDetailRecord | WhatsAppDetailRecord | WhatsAppConversationDetailRecord | AmdDetailRecord | VerifyDetailRecord | SimCardUsageDetailRecord | MediaStorageDetailRecord);

