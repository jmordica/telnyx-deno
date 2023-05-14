# .DialogflowIntegrationApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDialogflowConnection**](DialogflowIntegrationApi.md#createDialogflowConnection) | **POST** /dialogflow_connections/{connection_id} | Create a Dialogflow Connection
[**deleteDialogflowConnection**](DialogflowIntegrationApi.md#deleteDialogflowConnection) | **DELETE** /dialogflow_connections/{connection_id} | Delete stored Dialogflow Connection
[**getDialogflowConnection**](DialogflowIntegrationApi.md#getDialogflowConnection) | **GET** /dialogflow_connections/{connection_id} | Retrieve stored Dialogflow Connection
[**updateDialogflowConnection**](DialogflowIntegrationApi.md#updateDialogflowConnection) | **PUT** /dialogflow_connections/{connection_id} | Update stored Dialogflow Connection


# **createDialogflowConnection**
> DialogflowConnectionResponse createDialogflowConnection(dialogflowConnection)

Save Dialogflow Credentiails to Telnyx, so it can be used with other Telnyx services.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DialogflowIntegrationApi(configuration);

let body:.DialogflowIntegrationApiCreateDialogflowConnectionRequest = {
  // string | Telnyx connection id
  connectionId: "1293384261075731461",
  // DialogflowConnection | The params expected to create/update a Dialogflow Connection for given connection_id.
  dialogflowConnection: {
    serviceAccount: {},
    dialogflowApi: "cx",
    conversationProfileId: "a-VMHLWzTmKjiJw5S6O0-w",
    location: "global",
    environment: "development",
  },
};

apiInstance.createDialogflowConnection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dialogflowConnection** | **DialogflowConnection**| The params expected to create/update a Dialogflow Connection for given connection_id. |
 **connectionId** | [**string**] | Telnyx connection id | defaults to undefined


### Return type

**DialogflowConnectionResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Return details of the Dialogflow connection associated with the given CallControl connection. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteDialogflowConnection**
> void deleteDialogflowConnection()

Deletes a stored Dialogflow Connection.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DialogflowIntegrationApi(configuration);

let body:.DialogflowIntegrationApiDeleteDialogflowConnectionRequest = {
  // string | Telnyx connection id
  connectionId: "1293384261075731461",
};

apiInstance.deleteDialogflowConnection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionId** | [**string**] | Telnyx connection id | defaults to undefined


### Return type

**void**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The Dialogflow Connection for connection_id was deleted successfully. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDialogflowConnection**
> DialogflowConnectionResponse getDialogflowConnection()

Return details of the Dialogflow connection associated with the given CallControl connection.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DialogflowIntegrationApi(configuration);

let body:.DialogflowIntegrationApiGetDialogflowConnectionRequest = {
  // string | Telnyx connection id
  connectionId: "1293384261075731461",
};

apiInstance.getDialogflowConnection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionId** | [**string**] | Telnyx connection id | defaults to undefined


### Return type

**DialogflowConnectionResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return details of the Dialogflow connection associated with the given CallControl connection. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateDialogflowConnection**
> DialogflowConnectionResponse updateDialogflowConnection(dialogflowConnection)

Updates a stored Dialogflow Connection.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DialogflowIntegrationApi(configuration);

let body:.DialogflowIntegrationApiUpdateDialogflowConnectionRequest = {
  // string | Telnyx connection id
  connectionId: "1293384261075731461",
  // DialogflowConnection | The params expected to create/update a Dialogflow Connection for given connection_id.
  dialogflowConnection: {
    serviceAccount: {},
    dialogflowApi: "cx",
    conversationProfileId: "a-VMHLWzTmKjiJw5S6O0-w",
    location: "global",
    environment: "development",
  },
};

apiInstance.updateDialogflowConnection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dialogflowConnection** | **DialogflowConnection**| The params expected to create/update a Dialogflow Connection for given connection_id. |
 **connectionId** | [**string**] | Telnyx connection id | defaults to undefined


### Return type

**DialogflowConnectionResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return details of the Dialogflow connection associated with the given CallControl connection. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


