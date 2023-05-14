# .ConferenceCommandsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**conferenceDialParticipantIn**](ConferenceCommandsApi.md#conferenceDialParticipantIn) | **POST** /conferences/{id}/actions/dial_participant | Dial a new participant into a conference
[**conferenceHoldParticipants**](ConferenceCommandsApi.md#conferenceHoldParticipants) | **POST** /conferences/{id}/actions/hold | Hold conference participants
[**conferenceJoin**](ConferenceCommandsApi.md#conferenceJoin) | **POST** /conferences/{id}/actions/join | Join a conference
[**conferenceLeave**](ConferenceCommandsApi.md#conferenceLeave) | **POST** /conferences/{id}/actions/leave | Leave a conference
[**conferenceMuteParticipants**](ConferenceCommandsApi.md#conferenceMuteParticipants) | **POST** /conferences/{id}/actions/mute | Mute conference participants
[**conferencePauseRecording**](ConferenceCommandsApi.md#conferencePauseRecording) | **POST** /conferences/{id}/actions/record_pause | Conference recording pause
[**conferencePlayAudio**](ConferenceCommandsApi.md#conferencePlayAudio) | **POST** /conferences/{id}/actions/play | Play audio to conference participants
[**conferenceResumeRecording**](ConferenceCommandsApi.md#conferenceResumeRecording) | **POST** /conferences/{id}/actions/record_resume | Conference recording resume
[**conferenceSpeakText**](ConferenceCommandsApi.md#conferenceSpeakText) | **POST** /conferences/{id}/actions/speak | Speak text to conference participants
[**conferenceStartRecording**](ConferenceCommandsApi.md#conferenceStartRecording) | **POST** /conferences/{id}/actions/record_start | Conference recording start
[**conferenceStopAudio**](ConferenceCommandsApi.md#conferenceStopAudio) | **POST** /conferences/{id}/actions/stop | Stop audio being played on the conference
[**conferenceStopRecording**](ConferenceCommandsApi.md#conferenceStopRecording) | **POST** /conferences/{id}/actions/record_stop | Conference recording stop
[**conferenceUnholdParticipants**](ConferenceCommandsApi.md#conferenceUnholdParticipants) | **POST** /conferences/{id}/actions/unhold | Unhold conference participants
[**conferenceUnmuteParticipants**](ConferenceCommandsApi.md#conferenceUnmuteParticipants) | **POST** /conferences/{id}/actions/unmute | Unmute conference participants
[**conferenceUpdate**](ConferenceCommandsApi.md#conferenceUpdate) | **POST** /conferences/{id}/actions/update | Update conference participant
[**createConference**](ConferenceCommandsApi.md#createConference) | **POST** /conferences | Create conference
[**listConferenceParticipants**](ConferenceCommandsApi.md#listConferenceParticipants) | **GET** /conferences/{conference_id}/participants | List conference participants
[**listConferences**](ConferenceCommandsApi.md#listConferences) | **GET** /conferences | List conferences
[**retrieveConference**](ConferenceCommandsApi.md#retrieveConference) | **GET** /conferences/{id} | Retrieve a conference


# **conferenceDialParticipantIn**
> ConferenceCommandResponse conferenceDialParticipantIn(conferenceCallRequest)

Dials a phone number and, when the call is answered, automatically joins them into the specified conference.  **Expected Webhooks:**  - `call.hangup` - `call.answered` - `conference.participant.joined` - `conference.participant.left` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConferenceCommandsApi(configuration);

let body:.ConferenceCommandsApiConferenceDialParticipantInRequest = {
  // string | Uniquely identifies the conference by id or name
  id: "id_example",
  // ConferenceCallRequest | Dial Into Conference request object
  conferenceCallRequest: {
    callControlId: "v2:T02llQxIyaRkhfRKxgAP8nY511EhFLizdvdUKJiSw8d6A9BborherQczRrZvZakpWxBlpw48KyZQ==",
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
    _from: "+18005550101",
    hold: true,
    holdAudioUrl: "http://example.com/message.wav",
    holdMediaName: "my_media_uploaded_to_media_storage_api",
    mute: false,
    startConferenceOnEnter: true,
    supervisorRole: "whisper",
    to: "+18005550100 or sip:username@sip.telnyx.com",
    whisperCallControlIds: ["v2:Sg1xxxQ_U3ixxxyXT_VDNI3xxxazZdg6Vxxxs4-GNYxxxVaJPOhFMRQ","v2:qqpb0mmvd-ovhhBr0BUQQn0fld5jIboaaX3-De0DkqXHzbf8d75xkw"],
  },
};

apiInstance.conferenceDialParticipantIn(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conferenceCallRequest** | **ConferenceCallRequest**| Dial Into Conference request object |
 **id** | [**string**] | Uniquely identifies the conference by id or name | defaults to undefined


### Return type

**ConferenceCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a conference command. |  -  |
**401** | Unauthorized |  -  |
**404** | Conference does not exist |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **conferenceHoldParticipants**
> ConferenceCommandResponse conferenceHoldParticipants(conferenceHoldRequest)

Hold a list of participants in a conference call

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConferenceCommandsApi(configuration);

let body:.ConferenceCommandsApiConferenceHoldParticipantsRequest = {
  // string | Uniquely identifies the conference by id or name
  id: "id_example",
  // ConferenceHoldRequest
  conferenceHoldRequest: {
    callControlIds: [
      "callControlIds_example",
    ],
    audioUrl: "http://example.com/message.wav",
    mediaName: "my_media_uploaded_to_media_storage_api",
  },
};

apiInstance.conferenceHoldParticipants(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conferenceHoldRequest** | **ConferenceHoldRequest**|  |
 **id** | [**string**] | Uniquely identifies the conference by id or name | defaults to undefined


### Return type

**ConferenceCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a conference command. |  -  |
**401** | Unauthorized |  -  |
**404** | Conference does not exist |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **conferenceJoin**
> ConferenceCommandResponse conferenceJoin(joinConferenceRequest)

Join an existing call leg to a conference. Issue the Join Conference command with the conference ID in the path and the `call_control_id` of the leg you wish to join to the conference as an attribute. The conference can have up to a certain amount of active participants, as set by the `max_participants` parameter in conference creation request.   **Expected Webhooks:**  - `conference.participant.joined` - `conference.participant.left` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConferenceCommandsApi(configuration);

let body:.ConferenceCommandsApiConferenceJoinRequest = {
  // string | Uniquely identifies the conference by id or name
  id: "id_example",
  // JoinConferenceRequest | Join Conference request object
  joinConferenceRequest: {
    callControlId: "v2:T02llQxIyaRkhfRKxgAP8nY511EhFLizdvdUKJiSw8d6A9BborherQczRrZvZakpWxBlpw48KyZQ==",
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
    endConferenceOnExit: true,
    softEndConferenceOnExit: true,
    hold: true,
    holdAudioUrl: "http://example.com/message.wav",
    holdMediaName: "my_media_uploaded_to_media_storage_api",
    mute: true,
    startConferenceOnEnter: true,
    supervisorRole: "whisper",
    whisperCallControlIds: ["v2:Sg1xxxQ_U3ixxxyXT_VDNI3xxxazZdg6Vxxxs4-GNYxxxVaJPOhFMRQ","v2:qqpb0mmvd-ovhhBr0BUQQn0fld5jIboaaX3-De0DkqXHzbf8d75xkw"],
    beepEnabled: "on_exit",
  },
};

apiInstance.conferenceJoin(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **joinConferenceRequest** | **JoinConferenceRequest**| Join Conference request object |
 **id** | [**string**] | Uniquely identifies the conference by id or name | defaults to undefined


### Return type

**ConferenceCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a conference command. |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **conferenceLeave**
> ConferenceCommandResponse conferenceLeave(leaveConferenceRequest)

Removes a call leg from a conference and moves it back to parked state. **Expected Webhooks:**  - `conference.participant.left` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConferenceCommandsApi(configuration);

let body:.ConferenceCommandsApiConferenceLeaveRequest = {
  // string | Uniquely identifies the conference by id or name
  id: "id_example",
  // LeaveConferenceRequest | Leave Conference request object
  leaveConferenceRequest: {
    callControlId: "f91269aa-61d1-417f-97b3-10e020e8bc47",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
    beepEnabled: "on_exit",
  },
};

apiInstance.conferenceLeave(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leaveConferenceRequest** | **LeaveConferenceRequest**| Leave Conference request object |
 **id** | [**string**] | Uniquely identifies the conference by id or name | defaults to undefined


### Return type

**ConferenceCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a conference command. |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **conferenceMuteParticipants**
> ConferenceCommandResponse conferenceMuteParticipants(conferenceMuteRequest)

Mute a list of participants in a conference call

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConferenceCommandsApi(configuration);

let body:.ConferenceCommandsApiConferenceMuteParticipantsRequest = {
  // string | Uniquely identifies the conference by id or name
  id: "id_example",
  // ConferenceMuteRequest
  conferenceMuteRequest: {
    callControlIds: [
      "callControlIds_example",
    ],
  },
};

apiInstance.conferenceMuteParticipants(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conferenceMuteRequest** | **ConferenceMuteRequest**|  |
 **id** | [**string**] | Uniquely identifies the conference by id or name | defaults to undefined


### Return type

**ConferenceCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a conference command. |  -  |
**401** | Unauthorized |  -  |
**404** | Conference does not exist |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **conferencePauseRecording**
> ConferenceCommandResponse conferencePauseRecording(pauseConferenceRecordingRequest)

Pause conference recording.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConferenceCommandsApi(configuration);

let body:.ConferenceCommandsApiConferencePauseRecordingRequest = {
  // string | Specifies the conference by id or name
  id: "id_example",
  // PauseConferenceRecordingRequest
  pauseConferenceRecordingRequest: {
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
    recordingId: "891510ac-f3e4-11e8-af5b-de00688a4901",
  },
};

apiInstance.conferencePauseRecording(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pauseConferenceRecordingRequest** | **PauseConferenceRecordingRequest**|  |
 **id** | [**string**] | Specifies the conference by id or name | defaults to undefined


### Return type

**ConferenceCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a conference command. |  -  |
**401** | Unauthorized |  -  |
**404** | Conference does not exist |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **conferencePlayAudio**
> ConferenceCommandResponse conferencePlayAudio(conferencePlayRequest)

Play audio to all or some participants on a conference call.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConferenceCommandsApi(configuration);

let body:.ConferenceCommandsApiConferencePlayAudioRequest = {
  // string | Uniquely identifies the conference by id or name
  id: "id_example",
  // ConferencePlayRequest
  conferencePlayRequest: {
    audioUrl: "http://example.com/message.wav",
    mediaName: "my_media_uploaded_to_media_storage_api",
    loop: null,
    callControlIds: [
      "callControlIds_example",
    ],
  },
};

apiInstance.conferencePlayAudio(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conferencePlayRequest** | **ConferencePlayRequest**|  |
 **id** | [**string**] | Uniquely identifies the conference by id or name | defaults to undefined


### Return type

**ConferenceCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a conference command. |  -  |
**401** | Unauthorized |  -  |
**404** | Conference does not exist |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **conferenceResumeRecording**
> ConferenceCommandResponse conferenceResumeRecording(resumeConferenceRecordingRequest)

Resume conference recording.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConferenceCommandsApi(configuration);

let body:.ConferenceCommandsApiConferenceResumeRecordingRequest = {
  // string | Specifies the conference by id or name
  id: "id_example",
  // ResumeConferenceRecordingRequest
  resumeConferenceRecordingRequest: {
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
    recordingId: "891510ac-f3e4-11e8-af5b-de00688a4901",
  },
};

apiInstance.conferenceResumeRecording(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resumeConferenceRecordingRequest** | **ResumeConferenceRecordingRequest**|  |
 **id** | [**string**] | Specifies the conference by id or name | defaults to undefined


### Return type

**ConferenceCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a conference command. |  -  |
**401** | Unauthorized |  -  |
**404** | Conference does not exist |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **conferenceSpeakText**
> ConferenceCommandResponse conferenceSpeakText(conferenceSpeakRequest)

Convert text to speech and play it to all or some participants.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConferenceCommandsApi(configuration);

let body:.ConferenceCommandsApiConferenceSpeakTextRequest = {
  // string | Specifies the conference by id or name
  id: "id_example",
  // ConferenceSpeakRequest
  conferenceSpeakRequest: {
    callControlIds: [
      "callControlIds_example",
    ],
    payload: "Say this to participants",
    payloadType: "ssml",
    voice: "female",
    language: "en-US",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
  },
};

apiInstance.conferenceSpeakText(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conferenceSpeakRequest** | **ConferenceSpeakRequest**|  |
 **id** | [**string**] | Specifies the conference by id or name | defaults to undefined


### Return type

**ConferenceCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a conference command. |  -  |
**401** | Unauthorized |  -  |
**404** | Conference does not exist |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **conferenceStartRecording**
> ConferenceCommandResponse conferenceStartRecording(startConferenceRecordingRequest)

Start recording the conference. Recording will stop on conference end, or via the Stop Recording command.  **Expected Webhooks:**  - `conference.recording.saved`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConferenceCommandsApi(configuration);

let body:.ConferenceCommandsApiConferenceStartRecordingRequest = {
  // string | Specifies the conference to record by id or name
  id: "id_example",
  // StartConferenceRecordingRequest
  startConferenceRecordingRequest: {
    format: "mp3",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
    playBeep: true,
  },
};

apiInstance.conferenceStartRecording(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startConferenceRecordingRequest** | **StartConferenceRecordingRequest**|  |
 **id** | [**string**] | Specifies the conference to record by id or name | defaults to undefined


### Return type

**ConferenceCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a conference command. |  -  |
**401** | Unauthorized |  -  |
**404** | Conference does not exist |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **conferenceStopAudio**
> ConferenceCommandResponse conferenceStopAudio(conferenceStopRequest)

Stop audio being played to all or some participants on a conference call.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConferenceCommandsApi(configuration);

let body:.ConferenceCommandsApiConferenceStopAudioRequest = {
  // string | Uniquely identifies the conference by id or name
  id: "id_example",
  // ConferenceStopRequest
  conferenceStopRequest: {
    callControlIds: [
      "callControlIds_example",
    ],
  },
};

apiInstance.conferenceStopAudio(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conferenceStopRequest** | **ConferenceStopRequest**|  |
 **id** | [**string**] | Uniquely identifies the conference by id or name | defaults to undefined


### Return type

**ConferenceCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a conference command. |  -  |
**401** | Unauthorized |  -  |
**404** | Conference does not exist |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **conferenceStopRecording**
> ConferenceCommandResponse conferenceStopRecording(stopRecordingRequest)

Stop recording the conference.  **Expected Webhooks:**  - `conference.recording.saved` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConferenceCommandsApi(configuration);

let body:.ConferenceCommandsApiConferenceStopRecordingRequest = {
  // string | Specifies the conference to stop the recording for by id or name
  id: "id_example",
  // StopRecordingRequest | Stop recording conference request
  stopRecordingRequest: {
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
  },
};

apiInstance.conferenceStopRecording(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stopRecordingRequest** | **StopRecordingRequest**| Stop recording conference request |
 **id** | [**string**] | Specifies the conference to stop the recording for by id or name | defaults to undefined


### Return type

**ConferenceCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a conference command. |  -  |
**401** | Unauthorized |  -  |
**404** | Conference does not exist |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **conferenceUnholdParticipants**
> ConferenceCommandResponse conferenceUnholdParticipants(conferenceUnholdRequest)

Unhold a list of participants in a conference call

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConferenceCommandsApi(configuration);

let body:.ConferenceCommandsApiConferenceUnholdParticipantsRequest = {
  // string | Uniquely identifies the conference by id or name
  id: "id_example",
  // ConferenceUnholdRequest
  conferenceUnholdRequest: {
    callControlIds: [
      "callControlIds_example",
    ],
  },
};

apiInstance.conferenceUnholdParticipants(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conferenceUnholdRequest** | **ConferenceUnholdRequest**|  |
 **id** | [**string**] | Uniquely identifies the conference by id or name | defaults to undefined


### Return type

**ConferenceCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a conference command. |  -  |
**401** | Unauthorized |  -  |
**404** | Conference does not exist |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **conferenceUnmuteParticipants**
> ConferenceCommandResponse conferenceUnmuteParticipants(conferenceUnmuteRequest)

Unmute a list of participants in a conference call

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConferenceCommandsApi(configuration);

let body:.ConferenceCommandsApiConferenceUnmuteParticipantsRequest = {
  // string | Uniquely identifies the conference by id or name
  id: "id_example",
  // ConferenceUnmuteRequest
  conferenceUnmuteRequest: {
    callControlIds: [
      "callControlIds_example",
    ],
  },
};

apiInstance.conferenceUnmuteParticipants(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conferenceUnmuteRequest** | **ConferenceUnmuteRequest**|  |
 **id** | [**string**] | Uniquely identifies the conference by id or name | defaults to undefined


### Return type

**ConferenceCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a conference command. |  -  |
**401** | Unauthorized |  -  |
**404** | Conference does not exist |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **conferenceUpdate**
> ConferenceCommandResponse conferenceUpdate(updateConferenceRequest)

Update conference participant supervisor_role

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConferenceCommandsApi(configuration);

let body:.ConferenceCommandsApiConferenceUpdateRequest = {
  // string | Uniquely identifies the conference by id or name
  id: "id_example",
  // UpdateConferenceRequest | Update Conference request object
  updateConferenceRequest: {
    callControlId: "v2:T02llQxIyaRkhfRKxgAP8nY511EhFLizdvdUKJiSw8d6A9BborherQczRrZvZakpWxBlpw48KyZQ==",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
    supervisorRole: "whisper",
    whisperCallControlIds: ["v2:Sg1xxxQ_U3ixxxyXT_VDNI3xxxazZdg6Vxxxs4-GNYxxxVaJPOhFMRQ","v2:qqpb0mmvd-ovhhBr0BUQQn0fld5jIboaaX3-De0DkqXHzbf8d75xkw"],
  },
};

apiInstance.conferenceUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateConferenceRequest** | **UpdateConferenceRequest**| Update Conference request object |
 **id** | [**string**] | Uniquely identifies the conference by id or name | defaults to undefined


### Return type

**ConferenceCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a conference command. |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createConference**
> ConferenceResponse createConference(createConferenceRequest)

Create a conference from an existing call leg using a `call_control_id` and a conference name. Upon creating the conference, the call will be automatically bridged to the conference. Conferences will expire after all participants have left the conference or after 4 hours regardless of the number of active participants.  **Expected Webhooks:**  - `conference.created` - `conference.participant.joined` - `conference.participant.left` - `conference.ended` - `conference.recording.saved` - `conference.floor.changed` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConferenceCommandsApi(configuration);

let body:.ConferenceCommandsApiCreateConferenceRequest = {
  // CreateConferenceRequest | Create a conference
  createConferenceRequest: {
    callControlId: "v2:T02llQxIyaRkhfRKxgAP8nY511EhFLizdvdUKJiSw8d6A9BborherQczRrZvZakpWxBlpw48KyZQ==",
    name: "Business",
    beepEnabled: "on_exit",
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    comfortNoise: false,
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
    durationMinutes: 5,
    holdAudioUrl: "http://example.com/message.wav",
    holdMediaName: "my_media_uploaded_to_media_storage_api",
    maxParticipants: 3,
    startConferenceOnCreate: false,
  },
};

apiInstance.createConference(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createConferenceRequest** | **CreateConferenceRequest**| Create a conference |


### Return type

**ConferenceResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a conference. |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listConferenceParticipants**
> ListParticipantsResponse listConferenceParticipants()

Lists conference participants

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConferenceCommandsApi(configuration);

let body:.ConferenceCommandsApiListConferenceParticipantsRequest = {
  // string | Uniquely identifies the conference by id
  conferenceId: "conference_id_example",
  // boolean | If present, participants will be filtered to those who are/are not muted (optional)
  filterMuted: true,
  // boolean | If present, participants will be filtered to those who are/are not put on hold (optional)
  filterOnHold: true,
  // boolean | If present, participants will be filtered to those who are whispering or are not (optional)
  filterWhispering: true,
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listConferenceParticipants(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conferenceId** | [**string**] | Uniquely identifies the conference by id | defaults to undefined
 **filterMuted** | [**boolean**] | If present, participants will be filtered to those who are/are not muted | (optional) defaults to undefined
 **filterOnHold** | [**boolean**] | If present, participants will be filtered to those who are/are not put on hold | (optional) defaults to undefined
 **filterWhispering** | [**boolean**] | If present, participants will be filtered to those who are whispering or are not | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListParticipantsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of conference participants. |  -  |
**401** | Unauthorized |  -  |
**404** | Conference does not exist |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listConferences**
> ListConferencesResponse listConferences()

Lists conferences. Conferences are created on demand, and will expire after all participants have left the conference or after 4 hours regardless of the number of active participants. Conferences are listed in descending order by `expires_at`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConferenceCommandsApi(configuration);

let body:.ConferenceCommandsApiListConferencesRequest = {
  // string | If present, conferences will be filtered to those with a matching `name` attribute. Matching is case-sensitive (optional)
  filterName: "filter[name]_example",
  // 'init' | 'in_progress' | 'completed' | If present, conferences will be filtered by status. (optional)
  filterStatus: "init",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listConferences(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterName** | [**string**] | If present, conferences will be filtered to those with a matching &#x60;name&#x60; attribute. Matching is case-sensitive | (optional) defaults to undefined
 **filterStatus** | [**&#39;init&#39; | &#39;in_progress&#39; | &#39;completed&#39;**]**Array<&#39;init&#39; &#124; &#39;in_progress&#39; &#124; &#39;completed&#39;>** | If present, conferences will be filtered by status. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListConferencesResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of conferences. |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveConference**
> ConferenceResponse retrieveConference()

Retrieve an existing conference

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConferenceCommandsApi(configuration);

let body:.ConferenceCommandsApiRetrieveConferenceRequest = {
  // string | Uniquely identifies the conference by id
  id: "id_example",
};

apiInstance.retrieveConference(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Uniquely identifies the conference by id | defaults to undefined


### Return type

**ConferenceResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a conference. |  -  |
**404** | Conference does not exist |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


