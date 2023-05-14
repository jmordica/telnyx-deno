# .WhatsAppMessageTemplateApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWhatsappMessageTemplates**](WhatsAppMessageTemplateApi.md#createWhatsappMessageTemplates) | **POST** /whatsapp_business_accounts/{id}/whatsapp_message_templates | Create WhatsApp Message Templates
[**deleteWhatsappMessageTemplates**](WhatsAppMessageTemplateApi.md#deleteWhatsappMessageTemplates) | **DELETE** /whatsapp_business_accounts/{id}/whatsapp_message_templates/{name} | Delete WhatsApp Message Templates
[**listWhatsappMessageTemplates**](WhatsAppMessageTemplateApi.md#listWhatsappMessageTemplates) | **GET** /whatsapp_business_accounts/{id}/whatsapp_message_templates | List WhatsApp Message Templates


# **createWhatsappMessageTemplates**
> WhatsAppMessageTemplate1 createWhatsappMessageTemplates()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WhatsAppMessageTemplateApi(configuration);

let body:.WhatsAppMessageTemplateApiCreateWhatsappMessageTemplatesRequest = {
  // string | Identifies the WhatsApp Business Account
  id: "12ade33a-21c0-473b-b055-b3c836e1c292",
  // CreateWhatsappMessageTemplateRequestBody (optional)
  createWhatsappMessageTemplateRequestBody: {
    category: "ACCOUNT_UPDATE",
    language: "af",
    name: "name_example",
    components: "components_example",
  },
};

apiInstance.createWhatsappMessageTemplates(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWhatsappMessageTemplateRequestBody** | **CreateWhatsappMessageTemplateRequestBody**|  |
 **id** | [**string**] | Identifies the WhatsApp Business Account | defaults to undefined


### Return type

**WhatsAppMessageTemplate1**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | WhatsApp Message Template |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteWhatsappMessageTemplates**
> void deleteWhatsappMessageTemplates()

Deletes all of the message templates with the given name and business account

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WhatsAppMessageTemplateApi(configuration);

let body:.WhatsAppMessageTemplateApiDeleteWhatsappMessageTemplatesRequest = {
  // string | Identifies the WhatsApp Business Account
  id: "12ade33a-21c0-473b-b055-b3c836e1c292",
  // string | The name of the Whatsapp Message Template
  name: "my_test_template2",
};

apiInstance.deleteWhatsappMessageTemplates(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the WhatsApp Business Account | defaults to undefined
 **name** | [**string**] | The name of the Whatsapp Message Template | defaults to undefined


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
**202** | All message templates with the given name have been deleted |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listWhatsappMessageTemplates**
> WhatsAppMessageTemplate listWhatsappMessageTemplates()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WhatsAppMessageTemplateApi(configuration);

let body:.WhatsAppMessageTemplateApiListWhatsappMessageTemplatesRequest = {
  // string | Identifies the WhatsApp Business Account
  id: "12ade33a-21c0-473b-b055-b3c836e1c292",
  // 'ACCOUNT_UPDATE' | 'PAYMENT_UPDATE' | 'PERSONAL_FINANCE_UPDATE' | 'SHIPPING_UPDATE' | 'RESERVATION_UPDATE' | 'ISSUE_RESOLUTION' | 'APPOINTMENT_UPDATE' | 'TRANSPORTATION_UPDATE' | 'TICKET_UPDATE' | 'ALERT_UPDATE' | 'AUTO_REPLY' | The template category (optional)
  category: "ACCOUNT_UPDATE",
  // 'af' | 'sq' | 'ar' | 'az' | 'bn' | 'bg' | 'ca' | 'zh_CN' | 'zh_HK' | 'zh_TW' | 'hr' | 'cs' | 'da' | 'nl' | 'en' | 'en_GB' | 'en_US' | 'et' | 'fil' | 'fi' | 'fr' | 'ka' | 'de' | 'el' | 'gu' | 'ha' | 'he' | 'hi' | 'hu' | 'id' | 'ga' | 'it' | 'ja' | 'kn' | 'kk' | 'rw_RW' | 'ko' | 'ky_KG' | 'lo' | 'lv' | 'lt' | 'mk' | 'ms' | 'ml' | 'mr' | 'nb' | 'fa' | 'pl' | 'pt_BR' | 'pt_PT' | 'pa' | 'ro' | 'ru' | 'sr' | 'sk' | 'sl' | 'es' | 'es_AR' | 'es_ES' | 'es_MX' | 'sw' | 'sv' | 'ta' | 'te' | 'th' | 'tr' | 'uk' | 'ur' | 'uz' | 'vi' | 'zu' | The language of the whatsapp message template (optional)
  language: "af",
  // string | A name identifying this whatsapp message template (optional)
  name: "name_example",
  // string | The score of the whatsapp message template (optional)
  qualityScore: "quality_score_example",
  // string | The reason why a message template was rejected by Whatsapp (optional)
  rejectedReason: "rejected_reason_example",
  // string | The maximum number of message_templates to be returned on a query, we may return less than the limit number even if more pages are available. (optional)
  limit: "10",
  // string | Indicates that this is a query for entries before the given cursor (optional)
  before: "QAVCEP",
  // string | Indicates that this is a query for entries after the given cursor (optional)
  after: "QAVCEP",
  // string | Identifies the whatsApp Message Template status (optional)
  status: "APPROVED",
};

apiInstance.listWhatsappMessageTemplates(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the WhatsApp Business Account | defaults to undefined
 **category** | [**&#39;ACCOUNT_UPDATE&#39; | &#39;PAYMENT_UPDATE&#39; | &#39;PERSONAL_FINANCE_UPDATE&#39; | &#39;SHIPPING_UPDATE&#39; | &#39;RESERVATION_UPDATE&#39; | &#39;ISSUE_RESOLUTION&#39; | &#39;APPOINTMENT_UPDATE&#39; | &#39;TRANSPORTATION_UPDATE&#39; | &#39;TICKET_UPDATE&#39; | &#39;ALERT_UPDATE&#39; | &#39;AUTO_REPLY&#39;**]**Array<&#39;ACCOUNT_UPDATE&#39; &#124; &#39;PAYMENT_UPDATE&#39; &#124; &#39;PERSONAL_FINANCE_UPDATE&#39; &#124; &#39;SHIPPING_UPDATE&#39; &#124; &#39;RESERVATION_UPDATE&#39; &#124; &#39;ISSUE_RESOLUTION&#39; &#124; &#39;APPOINTMENT_UPDATE&#39; &#124; &#39;TRANSPORTATION_UPDATE&#39; &#124; &#39;TICKET_UPDATE&#39; &#124; &#39;ALERT_UPDATE&#39; &#124; &#39;AUTO_REPLY&#39;>** | The template category | (optional) defaults to undefined
 **language** | [**&#39;af&#39; | &#39;sq&#39; | &#39;ar&#39; | &#39;az&#39; | &#39;bn&#39; | &#39;bg&#39; | &#39;ca&#39; | &#39;zh_CN&#39; | &#39;zh_HK&#39; | &#39;zh_TW&#39; | &#39;hr&#39; | &#39;cs&#39; | &#39;da&#39; | &#39;nl&#39; | &#39;en&#39; | &#39;en_GB&#39; | &#39;en_US&#39; | &#39;et&#39; | &#39;fil&#39; | &#39;fi&#39; | &#39;fr&#39; | &#39;ka&#39; | &#39;de&#39; | &#39;el&#39; | &#39;gu&#39; | &#39;ha&#39; | &#39;he&#39; | &#39;hi&#39; | &#39;hu&#39; | &#39;id&#39; | &#39;ga&#39; | &#39;it&#39; | &#39;ja&#39; | &#39;kn&#39; | &#39;kk&#39; | &#39;rw_RW&#39; | &#39;ko&#39; | &#39;ky_KG&#39; | &#39;lo&#39; | &#39;lv&#39; | &#39;lt&#39; | &#39;mk&#39; | &#39;ms&#39; | &#39;ml&#39; | &#39;mr&#39; | &#39;nb&#39; | &#39;fa&#39; | &#39;pl&#39; | &#39;pt_BR&#39; | &#39;pt_PT&#39; | &#39;pa&#39; | &#39;ro&#39; | &#39;ru&#39; | &#39;sr&#39; | &#39;sk&#39; | &#39;sl&#39; | &#39;es&#39; | &#39;es_AR&#39; | &#39;es_ES&#39; | &#39;es_MX&#39; | &#39;sw&#39; | &#39;sv&#39; | &#39;ta&#39; | &#39;te&#39; | &#39;th&#39; | &#39;tr&#39; | &#39;uk&#39; | &#39;ur&#39; | &#39;uz&#39; | &#39;vi&#39; | &#39;zu&#39;**]**Array<&#39;af&#39; &#124; &#39;sq&#39; &#124; &#39;ar&#39; &#124; &#39;az&#39; &#124; &#39;bn&#39; &#124; &#39;bg&#39; &#124; &#39;ca&#39; &#124; &#39;zh_CN&#39; &#124; &#39;zh_HK&#39; &#124; &#39;zh_TW&#39; &#124; &#39;hr&#39; &#124; &#39;cs&#39; &#124; &#39;da&#39; &#124; &#39;nl&#39; &#124; &#39;en&#39; &#124; &#39;en_GB&#39; &#124; &#39;en_US&#39; &#124; &#39;et&#39; &#124; &#39;fil&#39; &#124; &#39;fi&#39; &#124; &#39;fr&#39; &#124; &#39;ka&#39; &#124; &#39;de&#39; &#124; &#39;el&#39; &#124; &#39;gu&#39; &#124; &#39;ha&#39; &#124; &#39;he&#39; &#124; &#39;hi&#39; &#124; &#39;hu&#39; &#124; &#39;id&#39; &#124; &#39;ga&#39; &#124; &#39;it&#39; &#124; &#39;ja&#39; &#124; &#39;kn&#39; &#124; &#39;kk&#39; &#124; &#39;rw_RW&#39; &#124; &#39;ko&#39; &#124; &#39;ky_KG&#39; &#124; &#39;lo&#39; &#124; &#39;lv&#39; &#124; &#39;lt&#39; &#124; &#39;mk&#39; &#124; &#39;ms&#39; &#124; &#39;ml&#39; &#124; &#39;mr&#39; &#124; &#39;nb&#39; &#124; &#39;fa&#39; &#124; &#39;pl&#39; &#124; &#39;pt_BR&#39; &#124; &#39;pt_PT&#39; &#124; &#39;pa&#39; &#124; &#39;ro&#39; &#124; &#39;ru&#39; &#124; &#39;sr&#39; &#124; &#39;sk&#39; &#124; &#39;sl&#39; &#124; &#39;es&#39; &#124; &#39;es_AR&#39; &#124; &#39;es_ES&#39; &#124; &#39;es_MX&#39; &#124; &#39;sw&#39; &#124; &#39;sv&#39; &#124; &#39;ta&#39; &#124; &#39;te&#39; &#124; &#39;th&#39; &#124; &#39;tr&#39; &#124; &#39;uk&#39; &#124; &#39;ur&#39; &#124; &#39;uz&#39; &#124; &#39;vi&#39; &#124; &#39;zu&#39;>** | The language of the whatsapp message template | (optional) defaults to undefined
 **name** | [**string**] | A name identifying this whatsapp message template | (optional) defaults to undefined
 **qualityScore** | [**string**] | The score of the whatsapp message template | (optional) defaults to undefined
 **rejectedReason** | [**string**] | The reason why a message template was rejected by Whatsapp | (optional) defaults to undefined
 **limit** | [**string**] | The maximum number of message_templates to be returned on a query, we may return less than the limit number even if more pages are available. | (optional) defaults to undefined
 **before** | [**string**] | Indicates that this is a query for entries before the given cursor | (optional) defaults to undefined
 **after** | [**string**] | Indicates that this is a query for entries after the given cursor | (optional) defaults to undefined
 **status** | [**string**] | Identifies the whatsApp Message Template status | (optional) defaults to undefined


### Return type

**WhatsAppMessageTemplate**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | WhatsApp Message Template |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


