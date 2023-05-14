# .CallCommandsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callAnswer**](CallCommandsApi.md#callAnswer) | **POST** /calls/{call_control_id}/actions/answer | Answer call
[**callBridge**](CallCommandsApi.md#callBridge) | **POST** /calls/{call_control_id}/actions/bridge | Bridge calls
[**callDial**](CallCommandsApi.md#callDial) | **POST** /calls | Dial
[**callEnqueue**](CallCommandsApi.md#callEnqueue) | **POST** /calls/{call_control_id}/actions/enqueue | Enqueue call
[**callForkStart**](CallCommandsApi.md#callForkStart) | **POST** /calls/{call_control_id}/actions/fork_start | Forking start
[**callForkStop**](CallCommandsApi.md#callForkStop) | **POST** /calls/{call_control_id}/actions/fork_stop | Forking stop
[**callGather**](CallCommandsApi.md#callGather) | **POST** /calls/{call_control_id}/actions/gather | Gather
[**callGatherStop**](CallCommandsApi.md#callGatherStop) | **POST** /calls/{call_control_id}/actions/gather_stop | Gather stop
[**callGatherUsingAudio**](CallCommandsApi.md#callGatherUsingAudio) | **POST** /calls/{call_control_id}/actions/gather_using_audio | Gather using audio
[**callGatherUsingSpeak**](CallCommandsApi.md#callGatherUsingSpeak) | **POST** /calls/{call_control_id}/actions/gather_using_speak | Gather using speak
[**callHangup**](CallCommandsApi.md#callHangup) | **POST** /calls/{call_control_id}/actions/hangup | Hangup call
[**callPlaybackStart**](CallCommandsApi.md#callPlaybackStart) | **POST** /calls/{call_control_id}/actions/playback_start | Play audio URL
[**callPlaybackStop**](CallCommandsApi.md#callPlaybackStop) | **POST** /calls/{call_control_id}/actions/playback_stop | Stop audio playback
[**callRecordPause**](CallCommandsApi.md#callRecordPause) | **POST** /calls/{call_control_id}/actions/record_pause | Record pause
[**callRecordResume**](CallCommandsApi.md#callRecordResume) | **POST** /calls/{call_control_id}/actions/record_resume | Record resume
[**callRecordStart**](CallCommandsApi.md#callRecordStart) | **POST** /calls/{call_control_id}/actions/record_start | Recording start
[**callRecordStop**](CallCommandsApi.md#callRecordStop) | **POST** /calls/{call_control_id}/actions/record_stop | Recording stop
[**callRefer**](CallCommandsApi.md#callRefer) | **POST** /calls/{call_control_id}/actions/refer | SIP Refer a call
[**callReject**](CallCommandsApi.md#callReject) | **POST** /calls/{call_control_id}/actions/reject | Reject a call
[**callSendDTMF**](CallCommandsApi.md#callSendDTMF) | **POST** /calls/{call_control_id}/actions/send_dtmf | Send DTMF
[**callSpeak**](CallCommandsApi.md#callSpeak) | **POST** /calls/{call_control_id}/actions/speak | Speak text
[**callStreamingStart**](CallCommandsApi.md#callStreamingStart) | **POST** /calls/{call_control_id}/actions/streaming_start | Streaming start
[**callStreamingStop**](CallCommandsApi.md#callStreamingStop) | **POST** /calls/{call_control_id}/actions/streaming_stop | Streaming stop
[**callTranscriptionStart**](CallCommandsApi.md#callTranscriptionStart) | **POST** /calls/{call_control_id}/actions/transcription_start | Transcription start
[**callTranscriptionStop**](CallCommandsApi.md#callTranscriptionStop) | **POST** /calls/{call_control_id}/actions/transcription_stop | Transcription stop
[**callTransfer**](CallCommandsApi.md#callTransfer) | **POST** /calls/{call_control_id}/actions/transfer | Transfer call
[**clientStateUpdate**](CallCommandsApi.md#clientStateUpdate) | **PUT** /calls/{call_control_id}/actions/client_state_update | Update client state
[**leaveQueue**](CallCommandsApi.md#leaveQueue) | **POST** /calls/{call_control_id}/actions/leave_queue | Remove call from a queue


# **callAnswer**
> CallControlCommandResponse callAnswer(answerRequest)

Answer an incoming call. You must issue this command before executing subsequent commands on an incoming call.  **Expected Webhooks:**  - `call.answered` - `streaming.started`, `streaming.stopped` or `streaming.failed` if `stream_url` was set 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiCallAnswerRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // AnswerRequest | Answer call request
  answerRequest: {
    billingGroupId: "f5586561-8ff0-4291-a0ac-84fe544797bd",
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
    customHeaders: [
      {
        name: "head_1",
        value: "val_1",
      },
    ],
    sipHeaders: [
      {
        name: "User-to-User",
        value: "value",
      },
    ],
    soundModifications: {
      pitch: 0.8,
      semitone: -10,
      octaves: -0.5,
      track: "inbound",
    },
    streamUrl: "wss://www.example.com/websocket",
    streamTrack: "both_tracks",
    webhookUrl: "https://www.example.com/server-b/",
    webhookUrlMethod: "GET",
  },
};

apiInstance.callAnswer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **answerRequest** | **AnswerRequest**| Answer call request |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callBridge**
> CallControlCommandResponse callBridge(bridgeRequest)

Bridge two call control calls.  **Expected Webhooks:**  - `call.bridged` for Leg A - `call.bridged` for Leg B 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiCallBridgeRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // BridgeRequest | Bridge call request
  bridgeRequest: {
    callControlId: "v3:MdI91X4lWFEs7IgbBEOT9M4AigoY08M0WWZFISt1Yw2axZ_IiE4pqg",
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
    queue: "support",
    videoRoomId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
    videoRoomContext: "Alice",
    parkAfterUnbridge: "self",
  },
};

apiInstance.callBridge(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bridgeRequest** | **BridgeRequest**| Bridge call request |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callDial**
> RetrieveCallStatusResponse callDial(callRequest)

Dial a number or SIP URI from a given connection. A successful response will include a `call_leg_id` which can be used to correlate the command with subsequent webhooks.  **Expected Webhooks:**  - `call.initiated` - `call.answered` or `call.hangup` - `call.machine.detection.ended` if `answering_machine_detection` was requested - `call.machine.greeting.ended` if `answering_machine_detection` was requested to detect the end of machine greeting - `call.machine.premium.detection.ended` if `answering_machine_detection=premium` was requested - `call.machine.premium.greeting.ended` if `answering_machine_detection=premium` was requested and a beep was detected - `streaming.started`, `streaming.stopped` or `streaming.failed` if `stream_url` was set 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiCallDialRequest = {
  // CallRequest | Call request
  callRequest: {
    to: null,
    _from: "+18005550101",
    fromDisplayName: "Company Name",
    connectionId: "connectionId_example",
    audioUrl: "http://example.com/message.wav",
    mediaName: "my_media_uploaded_to_media_storage_api",
    preferredCodecs: "G722,PCMU,PCMA,G729,OPUS,VP8,H264",
    timeoutSecs: 60,
    timeLimitSecs: 600,
    answeringMachineDetection: "disabled",
    answeringMachineDetectionConfig: {
      totalAnalysisTimeMillis: 5000,
      afterGreetingSilenceMillis: 1000,
      betweenWordsSilenceMillis: 100,
      greetingDurationMillis: 1500,
      initialSilenceMillis: 1800,
      maximumNumberOfWords: 3,
      maximumWordLengthMillis: 2000,
      silenceThreshold: 512,
      greetingTotalAnalysisTimeMillis: 7500,
      greetingSilenceDurationMillis: 2000,
    },
    customHeaders: [
      {
        name: "head_1",
        value: "val_1",
      },
    ],
    billingGroupId: "f5586561-8ff0-4291-a0ac-84fe544797bd",
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
    linkTo: "ilditnZK_eVysupV21KzmzN_sM29ygfauQojpm4BgFtfX5hXAcjotg==",
    sipAuthUsername: "sipAuthUsername_example",
    sipAuthPassword: "sipAuthPassword_example",
    sipHeaders: [
      {
        name: "User-to-User",
        value: "value",
      },
    ],
    soundModifications: {
      pitch: 0.8,
      semitone: -10,
      octaves: -0.5,
      track: "inbound",
    },
    streamUrl: "wss://www.example.com/websocket",
    streamTrack: "both_tracks",
    webhookUrl: "https://www.example.com/server-b/",
    webhookUrlMethod: "GET",
    record: "record-from-answer",
    recordChannels: "single",
    recordFormat: "wav",
    recordMaxLength: 1000,
    recordTimeoutSecs: 100,
    enableDialogflow: true,
    dialogflowConfig: {
      analyzeSentiment: true,
      partialAutomatedAgentReply: true,
    },
  },
};

apiInstance.callDial(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **callRequest** | **CallRequest**| Call request |


### Return type

**RetrieveCallStatusResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a call status. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callEnqueue**
> CallControlCommandResponse callEnqueue(enqueueRequest)

Put the call in a queue.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiCallEnqueueRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // EnqueueRequest | Enqueue call request
  enqueueRequest: {
    queueName: "tier_1_support",
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
    maxWaitTimeSecs: 600,
    maxSize: 200,
  },
};

apiInstance.callEnqueue(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **enqueueRequest** | **EnqueueRequest**| Enqueue call request |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callForkStart**
> CallControlCommandResponse callForkStart(startForkingRequest)

Call forking allows you to stream the media from a call to a specific target in realtime.  This stream can be used to enable realtime audio analysis to support a  variety of use cases, including fraud detection, or the creation of AI-generated audio responses.  Requests must specify either the `target` attribute or the `rx` and `tx` attributes.  **Expected Webhooks:**  - `call.fork.started` - `call.fork.stopped`  **Simple Telnyx RTP Encapsulation Protocol (STREP)**  *Note: This header/encapsulation is not used when the `rx` and `tx` parameters have been specified; it only applies when media is forked using the `target` attribute.*  If the destination for forked media is specified using the \"target\" attribute, the RTP will be encapsulated in an extra Telnyx protocol, which adds a 24 byte header to the RTP payload in each packet. The STREP header includes the Call Control `call_leg_id` for stream identification, along with bits that represent the direction (inbound or outbound) of the media. This 24-byte header sits between the UDP header and the RTP header.  The STREP header makes it possible to fork RTP for multiple calls (or two RTP streams for the same call) to the same IP:port, where the streams can be demultiplexed by your application using the information in the header. Of course, it\'s still possible to ignore this header completely, for example, if sending forked media for different calls to different ports or IP addresses. In this case, simply strip 24 bytes (or use the second byte to find the header length) from the received UDP payload to get the RTP (RTP header and payload).  ``` STREP Specification    0                   1                   2                   3   0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+  |1 1|Version|L|D|    HeaderLen  |  reserved (2 bytes)           |  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+  |       reserved (4 bytes, for UDP ports or anything else)      |  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+  |               The call_leg_id                                 |  |                   from Call Control                           |  |                       (128 bits / 16 bytes)                   |  |                           (this is binary data)               |  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+   11    Static bits 11, always set to 11 to easily distinguish forked media    from RTP (10) and T.38 media (usually 00) and SIP (which begins    with a capital letter, so begins with bits 01). This is a magic number.   Version    Four bits to indicate the version number of the protocol, starting at 0001.   L    One bit to represent the leg of the call (A or B).    0 represents the A (first) leg of the call.    1 represents the B (second) leg of the call.   D    One bit to represent the direction of this RTP stream.    0 represents media received by Telnyx.    1 represents media transmitted by Telnyx.   HeaderLen (1 byte)    The length of the header in bytes.    Note that this value does not include the length of the payload. The total    size of the RTP can be calculated by subtracting the HeaderLen from the UDP    length (minus 8 for the UDP header).    In version 1, this value will always be 24.   Reserved (6 bytes)    Reserved for future use and to make sure that the header is a multiple of 32 bits   Call Leg ID    A 128-bit identifier for the call leg.    This is the call_leg_id from Call Control. ``` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiCallForkStartRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // StartForkingRequest | Fork media request
  startForkingRequest: {
    target: "udp:192.0.2.1:9000",
    rx: "udp:192.0.2.1:9000",
    streamType: "decrypted",
    tx: "udp:192.0.2.1:9001",
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
  },
};

apiInstance.callForkStart(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startForkingRequest** | **StartForkingRequest**| Fork media request |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callForkStop**
> CallControlCommandResponse callForkStop(stopForkingRequest)

Stop forking a call.  **Expected Webhooks:**  - `call.fork.stopped` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiCallForkStopRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // StopForkingRequest | Stop forking media request
  stopForkingRequest: {
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
    streamType: "decrypted",
  },
};

apiInstance.callForkStop(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stopForkingRequest** | **StopForkingRequest**| Stop forking media request |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callGather**
> CallControlCommandResponse callGather(gatherRequest)

Gather DTMF signals to build interactive menus.  You can pass a list of valid digits. The [Answer](/docs/api/v2/call-control/Call-Commands#CallControlAnswer) command must be issued before the `gather` command.  **Expected Webhooks:**  - `call.dtmf.received` (you may receive many of these webhooks) - `call.gather.ended` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiCallGatherRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // GatherRequest | Gather
  gatherRequest: {
    minimumDigits: 1,
    maximumDigits: 10,
    timeoutMillis: 60000,
    interDigitTimeoutMillis: 10000,
    initialTimeoutMillis: 10000,
    terminatingDigit: "#",
    validDigits: "123",
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
  },
};

apiInstance.callGather(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gatherRequest** | **GatherRequest**| Gather |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callGatherStop**
> CallControlCommandResponse callGatherStop(stopGatherRequest)

Stop current gather.  **Expected Webhooks:**  - `call.gather.ended` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiCallGatherStopRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // StopGatherRequest | Stop current gather
  stopGatherRequest: {
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
  },
};

apiInstance.callGatherStop(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stopGatherRequest** | **StopGatherRequest**| Stop current gather |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callGatherUsingAudio**
> CallControlCommandResponse callGatherUsingAudio(gatherUsingAudioRequest)

Play an audio file on the call until the required DTMF signals are gathered to build interactive menus.  You can pass a list of valid digits along with an \'invalid_audio_url\', which will be played back at the beginning of each prompt. Playback will be interrupted when a DTMF signal is received. The [Answer](/docs/api/v2/call-control/Call-Commands#CallControlAnswer) command must be issued before the `gather_using_audio` command.  **Expected Webhooks:**  - `call.playback.started` - `call.playback.ended` - `call.dtmf.received` (you may receive many of these webhooks) - `call.gather.ended` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiCallGatherUsingAudioRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // GatherUsingAudioRequest | Gather using audio request
  gatherUsingAudioRequest: {
    audioUrl: "http://example.com/message.wav",
    mediaName: "my_media_uploaded_to_media_storage_api",
    invalidAudioUrl: "http://example.com/invalid.wav",
    invalidMediaName: "my_media_uploaded_to_media_storage_api",
    minimumDigits: 1,
    maximumDigits: 10,
    maximumTries: 3,
    timeoutMillis: 60000,
    terminatingDigit: "#",
    validDigits: "123",
    interDigitTimeoutMillis: 10000,
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
  },
};

apiInstance.callGatherUsingAudio(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gatherUsingAudioRequest** | **GatherUsingAudioRequest**| Gather using audio request |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callGatherUsingSpeak**
> CallControlCommandResponse callGatherUsingSpeak(gatherUsingSpeakRequest)

Convert text to speech and play it on the call until the required DTMF signals are gathered to build interactive menus.  You can pass a list of valid digits along with an \'invalid_payload\', which will be played back at the beginning of each prompt. Speech will be interrupted when a DTMF signal is received. The [Answer](/docs/api/v2/call-control/Call-Commands#CallControlAnswer) command must be issued before the `gather_using_speak` command.  **Expected Webhooks:**  - `call.dtmf.received` (you may receive many of these webhooks) - `call.gather.ended` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiCallGatherUsingSpeakRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // GatherUsingSpeakRequest | Gather using speak request
  gatherUsingSpeakRequest: {
    payload: "Say this on the call",
    invalidPayload: "Say this on the call",
    payloadType: "ssml",
    serviceLevel: "premium",
    voice: "female",
    language: "en-US",
    minimumDigits: 1,
    maximumDigits: 10,
    maximumTries: 3,
    timeoutMillis: 60000,
    terminatingDigit: "#",
    validDigits: "123",
    interDigitTimeoutMillis: 10000,
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
  },
};

apiInstance.callGatherUsingSpeak(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gatherUsingSpeakRequest** | **GatherUsingSpeakRequest**| Gather using speak request |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callHangup**
> CallControlCommandResponse callHangup(hangupRequest)

Hang up the call.  **Expected Webhooks:**  - `call.hangup` - `call.recording.saved` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiCallHangupRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // HangupRequest | Hangup request
  hangupRequest: {
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
  },
};

apiInstance.callHangup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hangupRequest** | **HangupRequest**| Hangup request |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callPlaybackStart**
> CallControlCommandResponse callPlaybackStart(playAudioUrlRequest)

Play an audio file on the call. If multiple play audio commands are issued consecutively, the audio files will be placed in a queue awaiting playback.  *Notes:*  - When `overlay` is enabled, `target_legs` is limited to `self`. - A customer cannot Play Audio with `overlay=true` unless there is a Play Audio with `overlay=false` actively playing.  **Expected Webhooks:**  - `call.playback.started` - `call.playback.ended` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiCallPlaybackStartRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // PlayAudioUrlRequest | Play audio URL request
  playAudioUrlRequest: {
    audioUrl: "http://example.com/message.wav",
    mediaName: "my_media_uploaded_to_media_storage_api",
    loop: null,
    overlay: true,
    stop: "current",
    targetLegs: "self",
    cacheAudio: true,
    playbackContent: "SUQzAwAAAAADf1...",
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
  },
};

apiInstance.callPlaybackStart(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playAudioUrlRequest** | **PlayAudioUrlRequest**| Play audio URL request |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callPlaybackStop**
> CallControlCommandResponse callPlaybackStop(playbackStopRequest)

Stop audio being played on the call.  **Expected Webhooks:**  - `call.playback.ended` or `call.speak.ended` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiCallPlaybackStopRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // PlaybackStopRequest | Stop audio playback request
  playbackStopRequest: {
    overlay: true,
    stop: "current",
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
  },
};

apiInstance.callPlaybackStop(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playbackStopRequest** | **PlaybackStopRequest**| Stop audio playback request |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callRecordPause**
> CallControlCommandResponse callRecordPause(pauseRecordingRequest)

Pause recording the call. Recording can be resumed via Resume recording command.  **Expected Webhooks:**  There are no webhooks associated with this command. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiCallRecordPauseRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // PauseRecordingRequest | Pause recording call request
  pauseRecordingRequest: {
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
  },
};

apiInstance.callRecordPause(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pauseRecordingRequest** | **PauseRecordingRequest**| Pause recording call request |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callRecordResume**
> CallControlCommandResponse callRecordResume(resumeRecordingRequest)

Resume recording the call.  **Expected Webhooks:**  There are no webhooks associated with this command. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiCallRecordResumeRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // ResumeRecordingRequest | Resume recording call request
  resumeRecordingRequest: {
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
  },
};

apiInstance.callRecordResume(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resumeRecordingRequest** | **ResumeRecordingRequest**| Resume recording call request |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callRecordStart**
> CallControlCommandResponse callRecordStart(startRecordingRequest)

Start recording the call. Recording will stop on call hang-up, or can be initiated via the Stop Recording command.  **Expected Webhooks:**  - `call.recording.saved` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiCallRecordStartRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // StartRecordingRequest | Start recording audio request
  startRecordingRequest: {
    format: "mp3",
    channels: "single",
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
    playBeep: true,
    maxLength: 100,
    timeoutSecs: 100,
  },
};

apiInstance.callRecordStart(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startRecordingRequest** | **StartRecordingRequest**| Start recording audio request |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callRecordStop**
> CallControlCommandResponse callRecordStop(stopRecordingRequest)

Stop recording the call.  **Expected Webhooks:**  - `call.recording.saved` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiCallRecordStopRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // StopRecordingRequest | Stop recording call request
  stopRecordingRequest: {
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
  },
};

apiInstance.callRecordStop(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stopRecordingRequest** | **StopRecordingRequest**| Stop recording call request |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callRefer**
> CallControlCommandResponse callRefer(referRequest)

Initiate a SIP Refer on a Call Control call. You can initiate a SIP Refer at any point in the duration of a call.  **Expected Webhooks:**  - `call.refer.started` - `call.refer.completed` - `call.refer.failed` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiCallReferRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // ReferRequest | Refer request
  referRequest: {
    sipAddress: "sip:username@sip.non-telnyx-address.com",
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
    customHeaders: [
      {
        name: "head_1",
        value: "val_1",
      },
    ],
    sipAuthUsername: "sipAuthUsername_example",
    sipAuthPassword: "sipAuthPassword_example",
    sipHeaders: [
      {
        name: "User-to-User",
        value: "value",
      },
    ],
  },
};

apiInstance.callRefer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referRequest** | **ReferRequest**| Refer request |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callReject**
> CallControlCommandResponse callReject(rejectRequest)

Reject an incoming call.  **Expected Webhooks:**  - `call.hangup` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiCallRejectRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // RejectRequest | Reject request
  rejectRequest: {
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
    cause: "USER_BUSY",
  },
};

apiInstance.callReject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rejectRequest** | **RejectRequest**| Reject request |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callSendDTMF**
> CallControlCommandResponse callSendDTMF(sendDTMFRequest)

Sends DTMF tones from this leg. DTMF tones will be heard by the other end of the call.  **Expected Webhooks:**  There are no webhooks associated with this command. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiCallSendDTMFRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // SendDTMFRequest | Send DTMF request
  sendDTMFRequest: {
    digits: "1www2WABCDw9",
    durationMillis: 500,
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
  },
};

apiInstance.callSendDTMF(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendDTMFRequest** | **SendDTMFRequest**| Send DTMF request |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callSpeak**
> CallControlCommandResponse callSpeak(speakRequest)

Convert text to speech and play it back on the call. If multiple speak text commands are issued consecutively, the audio files will be placed in a queue awaiting playback.  **Expected Webhooks:**  - `call.speak.started` - `call.speak.ended` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiCallSpeakRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // SpeakRequest | Speak request
  speakRequest: {
    payload: "Say this on the call",
    payloadType: "ssml",
    serviceLevel: "premium",
    stop: "current",
    voice: "female",
    language: "en-US",
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
  },
};

apiInstance.callSpeak(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **speakRequest** | **SpeakRequest**| Speak request |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callStreamingStart**
> CallControlCommandResponse callStreamingStart(startStreamingRequest)

Start streaming the media from a call to a specific WebSocket address or Dialogflow connection in near-realtime. Audio will be delivered as base64-encoded RTP payload (raw audio), wrapped in JSON payloads.   **Example: Starting a stream to a Websocket address**   The `stream_url` param is mandatory.  ``` curl -X POST \\    --header \"Content-Type: application/json\" \\    --header \"Accept: application/json\" \\    --header \"Authorization: Bearer YOUR_API_KEY\" \\    --data \'{  \"stream_url\": \"wss://www.example.com/websocket\",\\  \"client_state\":\"aGF2ZSBhIG5pY2UgZGF5ID1d\",\\  \"command_id\":\"891510ac-f3e4-11e8-af5b-de00688a4901\" \\  }\' \\    https://api.telnyx.com/v2/calls/{call_control_id}/actions/streaming_start  ```    **Example: Starting a stream to a Dialogflow connection**    Enable the Dialogflow integration by sending `\"enable_dialogflow\": true` in the request. You need to have a Dialogflow connection associated with your Call Control application first, [click here for instructions](https://developers.telnyx.com/docs/v2/call-control/tutorials/dialogflow-es). ``` curl -X POST \\    --header \"Content-Type: application/json\" \\    --header \"Accept: application/json\" \\    --header \"Authorization: Bearer YOUR_API_KEY\" \\    --data \'{  \"client_state\":\"aGF2ZSBhIG5pY2UgZGF5ID1d\", \\  \"command_id\":\"891510ac-f3e4-11e8-af5b-de00688a4901\", \\  \"enable_dialogflow\": true \\  }\' \\    https://api.telnyx.com/v2/calls/{call_control_id}/actions/streaming_start  ```  **Expected Webhooks:**  - `streaming.started` - `streaming.stopped` - `streaming.failed`  **WebSocket events**  When the WebSocket connection is established, the following event is being sent over it: ``` {   \"event\": \"connected\",   \"version\": \"1.0.0\" } ``` And when the call is started, an event which contains information about the encoding and `stream_id` that identifies a particular stream: ``` {   \"event\": \"start\",   \"sequence_number\": \"1\",   \"start\": {     \"user_id\": \"3e6f995f-85f7-4705-9741-53b116d28237\",     \"call_control_id\": \"v3:MdI91X4lWFEs7IgbBEOT9M4AigoY08M0WWZFISt1Yw2axZ_IiE4pqg\",      \"client_state\": \"aGF2ZSBhIG5pY2UgZGF5ID1d\",     \"media_format\": {       \"encoding\": \"audio/x-mulaw\",       \"sample_rate\": 8000,       \"channels\": 1     }   },   \"stream_id\": \"32de0dea-53cb-4b21-89a4-9e1819c043bc\" } ``` The start event is followed by the following media events that contain base64-encoded RTP payload (raw audio, no RTP headers) (: ``` {    \"event\": \"media\",   \"sequence_number\": \"4\",   \"media\": {      \"track\": \"inbound/outbound\",      \"chunk\": \"2\",     \"timestamp\": \"5\",     \"payload\": \"no+JhoaJjpzSHxAKBgYJD...IsSbjomGhoqQn1Ic\"    },   \"stream_id\": \"32de0dea-53cb-4b21-89a4-9e1819c043bc\"  } ``` Please note that the order of events is not guaranteed and the chunk number can be used to reorder the events.  When the call ends, the stop event over WebSockets connection is sent: ``` {    \"event\": \"stop\",   \"sequence_number\": \"5\",   \"stop\": {     \"user_id\": \"3e6f995f-85f7-4705-9741-53b116d28237\",     \"call_control_id\": \"v2:T02llQxIyaRkhfRKxgAP8nY511EhFLizdvdUKJiSw8d6A9BborherQ\"    },     \"stream_id\": \"32de0dea-53cb-4b21-89a4-9e1819c043bc\"   } ```  **Bidirectional Media Streaming**  Media can be sent back to the call through the websocket as well. This is done in a way very similar to the [playback_start](https://developers.telnyx.com/docs/api/v2/call-control/Call-Commands#callPlaybackStart) command, when using a base64 encoded mp3 file in the payload. Simply send a packet to the websocket connection as follows:  ``` {   \"event\": \"media\",   \"media\": {     \"payload\" : <your base64 encoded mp3 file>   } } ```  The payload, which is a base64-encoded mp3 file, will be played on the call.  Some limitations to be aware of:  - Media payloads can only be submitted once per second. - Media _must_ be base64 encoded mp3  **Stream Errors**  Any errors in the media packet, including when a rate limit is reached, will result in an error frame being sent to your websocket server. The error frame will appear as follows:  ``` {   \"stream_id\": \"32de0dea-53cb-4b21-89a4-9e1819c043bc\",   \"event\": \"error\",   \"sequence_number\": \"6\",   \"error\": {     \"title\": \"rate_limit_reached\",     \"code\": \"100005\",     \"detail\": \"Too many requests\"   } } ```  Possible errors are as follows:  - Error 100002: `\"unknown_error\"` - Error 100003: `\"malformed_frame\"` - Error 100004: `\"invalid_media\"` - Error 100005: `\"rate_limit_reached\"` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiCallStreamingStartRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // StartStreamingRequest | Start streaming media request
  startStreamingRequest: {
    streamUrl: "wss://www.example.com/websocket",
    streamTrack: "both_tracks",
    enableDialogflow: true,
    dialogflowConfig: {
      analyzeSentiment: true,
      partialAutomatedAgentReply: true,
    },
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
  },
};

apiInstance.callStreamingStart(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startStreamingRequest** | **StartStreamingRequest**| Start streaming media request |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callStreamingStop**
> CallControlCommandResponse callStreamingStop(stopStreamingRequest)

Stop streaming a call to a WebSocket.  **Expected Webhooks:**  - `streaming.stopped` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiCallStreamingStopRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // StopStreamingRequest | Stop streaming media request
  stopStreamingRequest: {
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
  },
};

apiInstance.callStreamingStop(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stopStreamingRequest** | **StopStreamingRequest**| Stop streaming media request |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callTranscriptionStart**
> CallControlCommandResponse callTranscriptionStart(transcriptionStartRequest)

Start real-time transcription. Transcription will stop on call hang-up, or can be initiated via the Transcription stop command.  **Expected Webhooks:**  - `call.transcription` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiCallTranscriptionStartRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // TranscriptionStartRequest | Transcription start request
  transcriptionStartRequest: {
    language: "en",
    interimResults: true,
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    transcriptionTracks: "both",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
  },
};

apiInstance.callTranscriptionStart(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcriptionStartRequest** | **TranscriptionStartRequest**| Transcription start request |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callTranscriptionStop**
> CallControlCommandResponse callTranscriptionStop(transcriptionStopRequest)

Stop real-time transcription.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiCallTranscriptionStopRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // TranscriptionStopRequest | Transcription stop request
  transcriptionStopRequest: {
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
  },
};

apiInstance.callTranscriptionStop(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcriptionStopRequest** | **TranscriptionStopRequest**| Transcription stop request |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **callTransfer**
> CallControlCommandResponse callTransfer(transferCallRequest)

Transfer a call to a new destination. If the transfer is unsuccessful, a `call.hangup` webhook for the other call (Leg B) will be sent indicating that the transfer could not be completed. The original call will remain active and may be issued additional commands, potentially transfering the call to an alternate destination.  **Expected Webhooks:**  - `call.initiated` - `call.bridged` to Leg B - `call.answered` or `call.hangup` - `call.machine.detection.ended` if `answering_machine_detection` was requested - `call.machine.greeting.ended` if `answering_machine_detection` was requested to detect the end of machine greeting - `call.machine.premium.detection.ended` if `answering_machine_detection=premium` was requested - `call.machine.premium.greeting.ended` if `answering_machine_detection=premium` was requested and a beep was detected 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiCallTransferRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // TransferCallRequest | Transfer call request
  transferCallRequest: {
    to: null,
    _from: "+18005550101",
    fromDisplayName: "Company Name",
    audioUrl: "http://example.com/message.wav",
    mediaName: "my_media_uploaded_to_media_storage_api",
    timeoutSecs: 60,
    timeLimitSecs: 600,
    answeringMachineDetection: "disabled",
    answeringMachineDetectionConfig: {
      totalAnalysisTimeMillis: 5000,
      afterGreetingSilenceMillis: 1000,
      betweenWordsSilenceMillis: 100,
      greetingDurationMillis: 1500,
      initialSilenceMillis: 1800,
      maximumNumberOfWords: 3,
      maximumWordLengthMillis: 2000,
      silenceThreshold: 512,
      greetingTotalAnalysisTimeMillis: 7500,
      greetingSilenceDurationMillis: 2000,
    },
    customHeaders: [
      {
        name: "head_1",
        value: "val_1",
      },
    ],
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    targetLegClientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
    sipAuthUsername: "username",
    sipAuthPassword: "password",
    sipHeaders: [
      {
        name: "User-to-User",
        value: "value",
      },
    ],
    soundModifications: {
      pitch: 0.8,
      semitone: -10,
      octaves: -0.5,
      track: "inbound",
    },
    webhookUrl: "https://www.example.com/server-b/",
    webhookUrlMethod: "GET",
  },
};

apiInstance.callTransfer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferCallRequest** | **TransferCallRequest**| Transfer call request |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **clientStateUpdate**
> CallControlCommandResponse clientStateUpdate(clientStateUpdateRequest)

Updates client state

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiClientStateUpdateRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // ClientStateUpdateRequest | Updates client state for every subsequent webhook
  clientStateUpdateRequest: {
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
  },
};

apiInstance.clientStateUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientStateUpdateRequest** | **ClientStateUpdateRequest**| Updates client state for every subsequent webhook |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **leaveQueue**
> CallControlCommandResponse leaveQueue(leaveQueueRequest)

Removes the call from a queue.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallCommandsApi(configuration);

let body:.CallCommandsApiLeaveQueueRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
  // LeaveQueueRequest | Removes the call from the queue, the call currently is enqueued in.
  leaveQueueRequest: {
    clientState: "aGF2ZSBhIG5pY2UgZGF5ID1d",
    commandId: "891510ac-f3e4-11e8-af5b-de00688a4901",
  },
};

apiInstance.leaveQueue(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leaveQueueRequest** | **LeaveQueueRequest**| Removes the call from the queue, the call currently is enqueued in. |
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**CallControlCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a call control command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


