# Promotions

## Promotions

### Create a new promotion
> To create a new promotion, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#promotion-object) for more information on the Promotion object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"PromotionID\": -70787818,
  \"PromotionName\": \"eiusmod\",
  \"PromotionDescription\": \"Excepteur\",
  \"PromotionStart\": \"2013-11-21T16:57:36.470Z\",
  \"PromotionEnd\": \"1966-02-07T19:44:57.551Z\",
  \"PromotionEnabled\": -48977457,
  \"PromotionByAmount\": 95378417,
  \"PromotionCheckByAmount\": -3391469,
  \"PromotionByQuantity\": 708639,
  \"PromotionCheckByQuantity\": 23328625,
  \"PromotionByProduct\": 47625638,
  \"PromotionByCategory\": \"deserunt magna\",
  \"PromotionAmount\": 9603639.536042824,
  \"PromotionPercentage\": -11525999,
  \"PromotionPerItem\": -65657023,
  \"PromotionCategory\": \"exercitation voluptate\",
  \"PromotionProduct\": \"ut magna cupidatat consectetur enim\",
  \"PromotionFreeShipping\": -97692873,
  \"PromotionFreeProduct\": \"non proident enim\",
  \"PromotionProduct1ID\": -53727638,
  \"PromotionProduct1Quantity\": -38839433,
  \"PromotionProduct2ID\": 91208453,
  \"PromotionProduct2Quantity\": 95555978,
  \"PromotionProduct3ID\": 71971243,
  \"PromotionProduct3Quantity\": 12919219,
  \"PromotionProductID\": -73896769,
  \"PromotionProduct4Quantity\": 50535562,
  \"PromotionCoupon\": \"ad aute dolor labori\",
  \"PromotionUses\": 59575711,
  \"PromotionMaxUses\": -81845375,
  \"PromotionUsesPerCustomer\": -80194178,
  \"PromotionGroupID\": \"commodo amet\",
  \"PromotionUserid\": \"incididunt qui pariatur Lorem consequat\",
  \"PromotionLastUpdate\": \"2006-04-29T21:41:46.227Z\",
  \"PromotionByAmount2\": -30343131.984041616,
  \"PromotionByQuantity2\": -65282190.00438376,
  \"PromotionCountry\": \"non\",
  \"PromotionState\": \"ex mollit enim\",
  \"PromotionNonStackable\": 15683072,
  \"PromotionRulesRetailPrice\": 71773203,
  \"PromotionExcludeManufacturers\": \"nisi est\",
  \"PromotionFreeProductPrice\": 41976805.558638155,
  \"PromotionExcludePreorder\": -8814193,
  \"PromotionExcludeSpecialOrder\": -15211039,
  \"PromotionShippingDiscount\": 86752738.00580907,
  \"PromotionShippingOptions\": \"anim eiusmod commodo consectetur\",
  \"PromotionRecurringOrders\": -47265290,
  \"PromotionBonusRewardPoints\": -36420340
}");

curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "Content-Type: application/json",
  "Accept: application/json",
  "SecureURL: ",
  "PrivateKey: ",
  "Token: "
));

$response = curl_exec($ch);
curl_close($ch);

var_dump($response);
```

```csharp
//Common testing requirement. If you are consuming an API in a sandbox/test region, uncomment this line of code ONLY for non production uses.
//System.Net.ServicePointManager.ServerCertificateValidationCallback = delegate { return true; };

//Be sure to run "Install-Package Microsoft.Net.Http" from your nuget command line.
using System;
using System.Net.Http;

var baseAddress = new Uri("https://apirest.3dcart.com/");

using (var httpClient = new HttpClient{ BaseAddress = baseAddress })
{

  
  httpClient.DefaultRequestHeaders.TryAddWithoutValidation("accept", "application/json");
  
  httpClient.DefaultRequestHeaders.TryAddWithoutValidation("secureurl", "");
  
  httpClient.DefaultRequestHeaders.TryAddWithoutValidation("privatekey", "");
  
  httpClient.DefaultRequestHeaders.TryAddWithoutValidation("token", "");
  
    using (var content = new StringContent("{  \"PromotionID\": -70787818,  \"PromotionName\": \"eiusmod\",  \"PromotionDescription\": \"Excepteur\",  \"PromotionStart\": \"2013-11-21T16:57:36.470Z\",  \"PromotionEnd\": \"1966-02-07T19:44:57.551Z\",  \"PromotionEnabled\": -48977457,  \"PromotionByAmount\": 95378417,  \"PromotionCheckByAmount\": -3391469,  \"PromotionByQuantity\": 708639,  \"PromotionCheckByQuantity\": 23328625,  \"PromotionByProduct\": 47625638,  \"PromotionByCategory\": \"deserunt magna\",  \"PromotionAmount\": 9603639.536042824,  \"PromotionPercentage\": -11525999,  \"PromotionPerItem\": -65657023,  \"PromotionCategory\": \"exercitation voluptate\",  \"PromotionProduct\": \"ut magna cupidatat consectetur enim\",  \"PromotionFreeShipping\": -97692873,  \"PromotionFreeProduct\": \"non proident enim\",  \"PromotionProduct1ID\": -53727638,  \"PromotionProduct1Quantity\": -38839433,  \"PromotionProduct2ID\": 91208453,  \"PromotionProduct2Quantity\": 95555978,  \"PromotionProduct3ID\": 71971243,  \"PromotionProduct3Quantity\": 12919219,  \"PromotionProductID\": -73896769,  \"PromotionProduct4Quantity\": 50535562,  \"PromotionCoupon\": \"ad aute dolor labori\",  \"PromotionUses\": 59575711,  \"PromotionMaxUses\": -81845375,  \"PromotionUsesPerCustomer\": -80194178,  \"PromotionGroupID\": \"commodo amet\",  \"PromotionUserid\": \"incididunt qui pariatur Lorem consequat\",  \"PromotionLastUpdate\": \"2006-04-29T21:41:46.227Z\",  \"PromotionByAmount2\": -30343131.984041616,  \"PromotionByQuantity2\": -65282190.00438376,  \"PromotionCountry\": \"non\",  \"PromotionState\": \"ex mollit enim\",  \"PromotionNonStackable\": 15683072,  \"PromotionRulesRetailPrice\": 71773203,  \"PromotionExcludeManufacturers\": \"nisi est\",  \"PromotionFreeProductPrice\": 41976805.558638155,  \"PromotionExcludePreorder\": -8814193,  \"PromotionExcludeSpecialOrder\": -15211039,  \"PromotionShippingDiscount\": 86752738.00580907,  \"PromotionShippingOptions\": \"anim eiusmod commodo consectetur\",  \"PromotionRecurringOrders\": -47265290,  \"PromotionBonusRewardPoints\": -36420340}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("3dCartWebAPI/v1/Promotions", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'PromotionID': -70787818,
  'PromotionName': 'eiusmod',
  'PromotionDescription': 'Excepteur',
  'PromotionStart': '2013-11-21T16:57:36.470Z',
  'PromotionEnd': '1966-02-07T19:44:57.551Z',
  'PromotionEnabled': -48977457,
  'PromotionByAmount': 95378417,
  'PromotionCheckByAmount': -3391469,
  'PromotionByQuantity': 708639,
  'PromotionCheckByQuantity': 23328625,
  'PromotionByProduct': 47625638,
  'PromotionByCategory': 'deserunt magna',
  'PromotionAmount': 9603639.536042824,
  'PromotionPercentage': -11525999,
  'PromotionPerItem': -65657023,
  'PromotionCategory': 'exercitation voluptate',
  'PromotionProduct': 'ut magna cupidatat consectetur enim',
  'PromotionFreeShipping': -97692873,
  'PromotionFreeProduct': 'non proident enim',
  'PromotionProduct1ID': -53727638,
  'PromotionProduct1Quantity': -38839433,
  'PromotionProduct2ID': 91208453,
  'PromotionProduct2Quantity': 95555978,
  'PromotionProduct3ID': 71971243,
  'PromotionProduct3Quantity': 12919219,
  'PromotionProductID': -73896769,
  'PromotionProduct4Quantity': 50535562,
  'PromotionCoupon': 'ad aute dolor labori',
  'PromotionUses': 59575711,
  'PromotionMaxUses': -81845375,
  'PromotionUsesPerCustomer': -80194178,
  'PromotionGroupID': 'commodo amet',
  'PromotionUserid': 'incididunt qui pariatur Lorem consequat',
  'PromotionLastUpdate': '2006-04-29T21:41:46.227Z',
  'PromotionByAmount2': -30343131.984041616,
  'PromotionByQuantity2': -65282190.00438376,
  'PromotionCountry': 'non',
  'PromotionState': 'ex mollit enim',
  'PromotionNonStackable': 15683072,
  'PromotionRulesRetailPrice': 71773203,
  'PromotionExcludeManufacturers': 'nisi est',
  'PromotionFreeProductPrice': 41976805.558638155,
  'PromotionExcludePreorder': -8814193,
  'PromotionExcludeSpecialOrder': -15211039,
  'PromotionShippingDiscount': 86752738.00580907,
  'PromotionShippingOptions': 'anim eiusmod commodo consectetur',
  'PromotionRecurringOrders': -47265290,
  'PromotionBonusRewardPoints': -36420340
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "PromotionID": -70787818,
  "PromotionName": "eiusmod",
  "PromotionDescription": "Excepteur",
  "PromotionStart": "2013-11-21T16:57:36.470Z",
  "PromotionEnd": "1966-02-07T19:44:57.551Z",
  "PromotionEnabled": -48977457,
  "PromotionByAmount": 95378417,
  "PromotionCheckByAmount": -3391469,
  "PromotionByQuantity": 708639,
  "PromotionCheckByQuantity": 23328625,
  "PromotionByProduct": 47625638,
  "PromotionByCategory": "deserunt magna",
  "PromotionAmount": 9603639.536042824,
  "PromotionPercentage": -11525999,
  "PromotionPerItem": -65657023,
  "PromotionCategory": "exercitation voluptate",
  "PromotionProduct": "ut magna cupidatat consectetur enim",
  "PromotionFreeShipping": -97692873,
  "PromotionFreeProduct": "non proident enim",
  "PromotionProduct1ID": -53727638,
  "PromotionProduct1Quantity": -38839433,
  "PromotionProduct2ID": 91208453,
  "PromotionProduct2Quantity": 95555978,
  "PromotionProduct3ID": 71971243,
  "PromotionProduct3Quantity": 12919219,
  "PromotionProductID": -73896769,
  "PromotionProduct4Quantity": 50535562,
  "PromotionCoupon": "ad aute dolor labori",
  "PromotionUses": 59575711,
  "PromotionMaxUses": -81845375,
  "PromotionUsesPerCustomer": -80194178,
  "PromotionGroupID": "commodo amet",
  "PromotionUserid": "incididunt qui pariatur Lorem consequat",
  "PromotionLastUpdate": "2006-04-29T21:41:46.227Z",
  "PromotionByAmount2": -30343131.984041616,
  "PromotionByQuantity2": -65282190.00438376,
  "PromotionCountry": "non",
  "PromotionState": "ex mollit enim",
  "PromotionNonStackable": 15683072,
  "PromotionRulesRetailPrice": 71773203,
  "PromotionExcludeManufacturers": "nisi est",
  "PromotionFreeProductPrice": 41976805.558638155,
  "PromotionExcludePreorder": -8814193,
  "PromotionExcludeSpecialOrder": -15211039,
  "PromotionShippingDiscount": 86752738.00580907,
  "PromotionShippingOptions": "anim eiusmod commodo consectetur",
  "PromotionRecurringOrders": -47265290,
  "PromotionBonusRewardPoints": -36420340
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.post 'https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "PromotionID": -70787818,
    "PromotionName": "eiusmod",
    "PromotionDescription": "Excepteur",
    "PromotionStart": "2013-11-21T16:57:36.470Z",
    "PromotionEnd": "1966-02-07T19:44:57.551Z",
    "PromotionEnabled": -48977457,
    "PromotionByAmount": 95378417,
    "PromotionCheckByAmount": -3391469,
    "PromotionByQuantity": 708639,
    "PromotionCheckByQuantity": 23328625,
    "PromotionByProduct": 47625638,
    "PromotionByCategory": "deserunt magna",
    "PromotionAmount": 9603639.536042824,
    "PromotionPercentage": -11525999,
    "PromotionPerItem": -65657023,
    "PromotionCategory": "exercitation voluptate",
    "PromotionProduct": "ut magna cupidatat consectetur enim",
    "PromotionFreeShipping": -97692873,
    "PromotionFreeProduct": "non proident enim",
    "PromotionProduct1ID": -53727638,
    "PromotionProduct1Quantity": -38839433,
    "PromotionProduct2ID": 91208453,
    "PromotionProduct2Quantity": 95555978,
    "PromotionProduct3ID": 71971243,
    "PromotionProduct3Quantity": 12919219,
    "PromotionProductID": -73896769,
    "PromotionProduct4Quantity": 50535562,
    "PromotionCoupon": "ad aute dolor labori",
    "PromotionUses": 59575711,
    "PromotionMaxUses": -81845375,
    "PromotionUsesPerCustomer": -80194178,
    "PromotionGroupID": "commodo amet",
    "PromotionUserid": "incididunt qui pariatur Lorem consequat",
    "PromotionLastUpdate": "2006-04-29T21:41:46.227Z",
    "PromotionByAmount2": -30343131.984041616,
    "PromotionByQuantity2": -65282190.00438376,
    "PromotionCountry": "non",
    "PromotionState": "ex mollit enim",
    "PromotionNonStackable": 15683072,
    "PromotionRulesRetailPrice": 71773203,
    "PromotionExcludeManufacturers": "nisi est",
    "PromotionFreeProductPrice": 41976805.558638155,
    "PromotionExcludePreorder": -8814193,
    "PromotionExcludeSpecialOrder": -15211039,
    "PromotionShippingDiscount": 86752738.00580907,
    "PromotionShippingOptions": "anim eiusmod commodo consectetur",
    "PromotionRecurringOrders": -47265290,
    "PromotionBonusRewardPoints": -36420340
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions', data=values, headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"PromotionID",
    "Value":"1234",
    "Status":"201",
    "Message":"Created successfully",
  }
]
```

See [Data Structures](#promotion-object) for more information on the Promotion object.

#### HTTP Request
`POST https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions`

#### Responses and Errors

Response Code | Description
------------- | ---------
201 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.

### Retrieve a list of promotions
> To retrieve a list of promotions, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions?limit=&offset=&promotion=&countonly=");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "Content-Type: application/json",
  "Accept: application/json",
  "SecureURL: ",
  "PrivateKey: ",
  "Token: "
));

$response = curl_exec($ch);
curl_close($ch);

var_dump($response);
```

```csharp
//Common testing requirement. If you are consuming an API in a sandbox/test region, uncomment this line of code ONLY for non production uses.
//System.Net.ServicePointManager.ServerCertificateValidationCallback = delegate { return true; };

//Be sure to run "Install-Package Microsoft.Net.Http" from your nuget command line.
using System;
using System.Net.Http;

var baseAddress = new Uri("https://apirest.3dcart.com/");

using (var httpClient = new HttpClient{ BaseAddress = baseAddress })
{

  
  httpClient.DefaultRequestHeaders.TryAddWithoutValidation("accept", "application/json");
  
  httpClient.DefaultRequestHeaders.TryAddWithoutValidation("secureurl", "");
  
  httpClient.DefaultRequestHeaders.TryAddWithoutValidation("privatekey", "");
  
  httpClient.DefaultRequestHeaders.TryAddWithoutValidation("token", "");
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Promotions"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions?limit=&offset=&promotion=&countonly=');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions?limit=&offset=&promotion=&countonly=', headers
puts response
```

```python
from urllib2 import Request, urlopen

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions?limit=&offset=&promotion=&countonly=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#promotion-object) for more information on the Promotion object):

```json
[
  {
    "PromotionID": 1,
    "PromotionName": "sample string 1",
    "PromotionDescription": "sample string 2",
    "PromotionStart": "04/25/2019 15:43",
    "PromotionEnd": "04/25/2019 15:43",
    "PromotionEnabled": 5,
    "PromotionByAmount": 1,
    "PromotionCheckByAmount": 1,
    "PromotionByQuantity": 1,
    "PromotionCheckByQuantity": 1,
    "PromotionByProduct": 1,
    "PromotionByCategory": "sample string 6",
    "PromotionAmount": 1.1,
    "PromotionPercentage": 1,
    "PromotionPerItem": 1,
    "PromotionCategory": "sample string 7",
    "PromotionProduct": "sample string 8",
    "PromotionFreeShipping": 1,
    "PromotionFreeProduct": "sample string 9",
    "PromotionProduct1ID": 1,
    "PromotionProduct1Quantity": 1,
    "PromotionProduct2ID": 1,
    "PromotionProduct2Quantity": 1,
    "PromotionProduct3ID": 1,
    "PromotionProduct3Quantity": 1,
    "PromotionProductID": 1,
    "PromotionProduct4Quantity": 1,
    "PromotionCoupon": "sample string 10",
    "PromotionUses": 11,
    "PromotionMaxUses": 12,
    "PromotionUsesPerCustomer": 13,
    "PromotionGroupID": "sample string 14",
    "PromotionUserid": "sample string 15",
    "PromotionLastUpdate": "04/25/2019 15:43",
    "PromotionByAmount2": 1.0,
    "PromotionByQuantity2": 1.1,
    "PromotionCountry": "sample string 16",
    "PromotionState": "sample string 17",
    "PromotionNonStackable": 1,
    "PromotionRulesRetailPrice": 1,
    "PromotionExcludeManufacturers": "sample string 18",
    "PromotionFreeProductPrice": 1.1,
    "PromotionExcludePreorder": 1,
    "PromotionExcludeSpecialOrder": 1,
    "PromotionShippingDiscount": 1.1,
    "PromotionShippingOptions": "sample string 19",
    "PromotionRecurringOrders": 1,
    "PromotionBonusRewardPoints": 1
  },
  {
    "PromotionID": 1,
    "PromotionName": "sample string 1",
    "PromotionDescription": "sample string 2",
    "PromotionStart": "04/25/2019 15:43",
    "PromotionEnd": "04/25/2019 15:43",
    "PromotionEnabled": 5,
    "PromotionByAmount": 1,
    "PromotionCheckByAmount": 1,
    "PromotionByQuantity": 1,
    "PromotionCheckByQuantity": 1,
    "PromotionByProduct": 1,
    "PromotionByCategory": "sample string 6",
    "PromotionAmount": 1.1,
    "PromotionPercentage": 1,
    "PromotionPerItem": 1,
    "PromotionCategory": "sample string 7",
    "PromotionProduct": "sample string 8",
    "PromotionFreeShipping": 1,
    "PromotionFreeProduct": "sample string 9",
    "PromotionProduct1ID": 1,
    "PromotionProduct1Quantity": 1,
    "PromotionProduct2ID": 1,
    "PromotionProduct2Quantity": 1,
    "PromotionProduct3ID": 1,
    "PromotionProduct3Quantity": 1,
    "PromotionProductID": 1,
    "PromotionProduct4Quantity": 1,
    "PromotionCoupon": "sample string 10",
    "PromotionUses": 11,
    "PromotionMaxUses": 12,
    "PromotionUsesPerCustomer": 13,
    "PromotionGroupID": "sample string 14",
    "PromotionUserid": "sample string 15",
    "PromotionLastUpdate": "04/25/2019 15:43",
    "PromotionByAmount2": 1.0,
    "PromotionByQuantity2": 1.1,
    "PromotionCountry": "sample string 16",
    "PromotionState": "sample string 17",
    "PromotionNonStackable": 1,
    "PromotionRulesRetailPrice": 1,
    "PromotionExcludeManufacturers": "sample string 18",
    "PromotionFreeProductPrice": 1.1,
    "PromotionExcludePreorder": 1,
    "PromotionExcludeSpecialOrder": 1,
    "PromotionShippingDiscount": 1.1,
    "PromotionShippingOptions": "sample string 19",
    "PromotionRecurringOrders": 1,
    "PromotionBonusRewardPoints": 1
  }
]
```

See [Data Structures](#promotion-object) for more information on the Promotion object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
limit | optional | Maximum number of items that can be returned.
offset | optional | Starting point for the return data.
countonly | optional | Count the number of rows only.
promotion | optional | The name of the promotion to return.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No Promotions found.

### Retrieve a specific promotion by id
> To retrieve a specific promotion by id, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions/{id}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "Content-Type: application/json",
  "Accept: application/json",
  "SecureURL: ",
  "PrivateKey: ",
  "Token: "
));

$response = curl_exec($ch);
curl_close($ch);

var_dump($response);
```

```csharp
//Common testing requirement. If you are consuming an API in a sandbox/test region, uncomment this line of code ONLY for non production uses.
//System.Net.ServicePointManager.ServerCertificateValidationCallback = delegate { return true; };

//Be sure to run "Install-Package Microsoft.Net.Http" from your nuget command line.
using System;
using System.Net.Http;

var baseAddress = new Uri("https://apirest.3dcart.com/");

using (var httpClient = new HttpClient{ BaseAddress = baseAddress })
{

  
  httpClient.DefaultRequestHeaders.TryAddWithoutValidation("accept", "application/json");
  
  httpClient.DefaultRequestHeaders.TryAddWithoutValidation("secureurl", "");
  
  httpClient.DefaultRequestHeaders.TryAddWithoutValidation("privatekey", "");
  
  httpClient.DefaultRequestHeaders.TryAddWithoutValidation("token", "");
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Promotions/{id}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions/{id}', headers
puts response
```

```python
from urllib2 import Request, urlopen

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions/{id}', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#promotion-object) for more information on the Promotion object):

```json
[
  {
    "PromotionID": 1,
    "PromotionName": "sample string 1",
    "PromotionDescription": "sample string 2",
    "PromotionStart": "04/25/2019 15:43",
    "PromotionEnd": "04/25/2019 15:43",
    "PromotionEnabled": 5,
    "PromotionByAmount": 1,
    "PromotionCheckByAmount": 1,
    "PromotionByQuantity": 1,
    "PromotionCheckByQuantity": 1,
    "PromotionByProduct": 1,
    "PromotionByCategory": "sample string 6",
    "PromotionAmount": 1.1,
    "PromotionPercentage": 1,
    "PromotionPerItem": 1,
    "PromotionCategory": "sample string 7",
    "PromotionProduct": "sample string 8",
    "PromotionFreeShipping": 1,
    "PromotionFreeProduct": "sample string 9",
    "PromotionProduct1ID": 1,
    "PromotionProduct1Quantity": 1,
    "PromotionProduct2ID": 1,
    "PromotionProduct2Quantity": 1,
    "PromotionProduct3ID": 1,
    "PromotionProduct3Quantity": 1,
    "PromotionProductID": 1,
    "PromotionProduct4Quantity": 1,
    "PromotionCoupon": "sample string 10",
    "PromotionUses": 11,
    "PromotionMaxUses": 12,
    "PromotionUsesPerCustomer": 13,
    "PromotionGroupID": "sample string 14",
    "PromotionUserid": "sample string 15",
    "PromotionLastUpdate": "04/25/2019 15:43",
    "PromotionByAmount2": 1.0,
    "PromotionByQuantity2": 1.1,
    "PromotionCountry": "sample string 16",
    "PromotionState": "sample string 17",
    "PromotionNonStackable": 1,
    "PromotionRulesRetailPrice": 1,
    "PromotionExcludeManufacturers": "sample string 18",
    "PromotionFreeProductPrice": 1.1,
    "PromotionExcludePreorder": 1,
    "PromotionExcludeSpecialOrder": 1,
    "PromotionShippingDiscount": 1.1,
    "PromotionShippingOptions": "sample string 19",
    "PromotionRecurringOrders": 1,
    "PromotionBonusRewardPoints": 1
  }
]
```

See [Data Structures](#promotion-object) for more information on the Promotion object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions/{id}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
id | required | The id of the promotion to return.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No Promotions found.

### Update a list of promotions
> To update a list of promotions, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#promotion-object) for more information on the Promotion object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "[
  {
    \"PromotionID\": 84572412,
    \"PromotionName\": \"elit in\",
    \"PromotionDescription\": \"Lorem est\",
    \"PromotionStart\": \"1950-12-02T01:32:15.220Z\",
    \"PromotionEnd\": \"1959-01-10T12:18:15.038Z\",
    \"PromotionEnabled\": -35660845,
    \"PromotionByAmount\": 26669668,
    \"PromotionCheckByAmount\": -74782611,
    \"PromotionByQuantity\": 22504432,
    \"PromotionCheckByQuantity\": 76295897,
    \"PromotionByProduct\": -50076430,
    \"PromotionByCategory\": \"labore ullamco\",
    \"PromotionAmount\": 15103856.59193471,
    \"PromotionPercentage\": 71417322,
    \"PromotionPerItem\": -65625281,
    \"PromotionCategory\": \"dolor exercitation sed\",
    \"PromotionProduct\": \"Lorem in\",
    \"PromotionFreeShipping\": 53159455,
    \"PromotionFreeProduct\": \"anim non eu consequat nulla\",
    \"PromotionProduct1ID\": 5942376,
    \"PromotionProduct1Quantity\": 47745793,
    \"PromotionProduct2ID\": 41831401,
    \"PromotionProduct2Quantity\": -80699639,
    \"PromotionProduct3ID\": -77164807,
    \"PromotionProduct3Quantity\": -72305912,
    \"PromotionProductID\": -53250736,
    \"PromotionProduct4Quantity\": -52355130,
    \"PromotionCoupon\": \"dolor magna ullamco\",
    \"PromotionUses\": 18973047,
    \"PromotionMaxUses\": 51450993,
    \"PromotionUsesPerCustomer\": 46304025,
    \"PromotionGroupID\": \"id deserunt\",
    \"PromotionUserid\": \"ven\",
    \"PromotionLastUpdate\": \"2012-05-30T15:54:58.862Z\",
    \"PromotionByAmount2\": -35764254.194169,
    \"PromotionByQuantity2\": -78237712.51277041,
    \"PromotionCountry\": \"elit\",
    \"PromotionState\": \"ut nostrud \",
    \"PromotionNonStackable\": -37258610,
    \"PromotionRulesRetailPrice\": 99619775,
    \"PromotionExcludeManufacturers\": \"cillum enim\",
    \"PromotionFreeProductPrice\": -68363447.47887653,
    \"PromotionExcludePreorder\": 23571173,
    \"PromotionExcludeSpecialOrder\": -66715078,
    \"PromotionShippingDiscount\": 74516226.95270962,
    \"PromotionShippingOptions\": \"ad sint cupidatat\",
    \"PromotionRecurringOrders\": 62285238,
    \"PromotionBonusRewardPoints\": -13055592
  }
]");

curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "Content-Type: application/json",
  "Accept: application/json",
  "SecureURL: ",
  "PrivateKey: ",
  "Token: "
));

$response = curl_exec($ch);
curl_close($ch);

var_dump($response);
```

```csharp
//Common testing requirement. If you are consuming an API in a sandbox/test region, uncomment this line of code ONLY for non production uses.
//System.Net.ServicePointManager.ServerCertificateValidationCallback = delegate { return true; };

//Be sure to run "Install-Package Microsoft.Net.Http" from your nuget command line.
using System;
using System.Net.Http;

var baseAddress = new Uri("https://apirest.3dcart.com/");

using (var httpClient = new HttpClient{ BaseAddress = baseAddress })
{

  
  httpClient.DefaultRequestHeaders.TryAddWithoutValidation("accept", "application/json");
  
  httpClient.DefaultRequestHeaders.TryAddWithoutValidation("secureurl", "");
  
  httpClient.DefaultRequestHeaders.TryAddWithoutValidation("privatekey", "");
  
  httpClient.DefaultRequestHeaders.TryAddWithoutValidation("token", "");
  
    using (var content = new StringContent("[  {    \"PromotionID\": 84572412,    \"PromotionName\": \"elit in\",    \"PromotionDescription\": \"Lorem est\",    \"PromotionStart\": \"1950-12-02T01:32:15.220Z\",    \"PromotionEnd\": \"1959-01-10T12:18:15.038Z\",    \"PromotionEnabled\": -35660845,    \"PromotionByAmount\": 26669668,    \"PromotionCheckByAmount\": -74782611,    \"PromotionByQuantity\": 22504432,    \"PromotionCheckByQuantity\": 76295897,    \"PromotionByProduct\": -50076430,    \"PromotionByCategory\": \"labore ullamco\",    \"PromotionAmount\": 15103856.59193471,    \"PromotionPercentage\": 71417322,    \"PromotionPerItem\": -65625281,    \"PromotionCategory\": \"dolor exercitation sed\",    \"PromotionProduct\": \"Lorem in\",    \"PromotionFreeShipping\": 53159455,    \"PromotionFreeProduct\": \"anim non eu consequat nulla\",    \"PromotionProduct1ID\": 5942376,    \"PromotionProduct1Quantity\": 47745793,    \"PromotionProduct2ID\": 41831401,    \"PromotionProduct2Quantity\": -80699639,    \"PromotionProduct3ID\": -77164807,    \"PromotionProduct3Quantity\": -72305912,    \"PromotionProductID\": -53250736,    \"PromotionProduct4Quantity\": -52355130,    \"PromotionCoupon\": \"dolor magna ullamco\",    \"PromotionUses\": 18973047,    \"PromotionMaxUses\": 51450993,    \"PromotionUsesPerCustomer\": 46304025,    \"PromotionGroupID\": \"id deserunt\",    \"PromotionUserid\": \"ven\",    \"PromotionLastUpdate\": \"2012-05-30T15:54:58.862Z\",    \"PromotionByAmount2\": -35764254.194169,    \"PromotionByQuantity2\": -78237712.51277041,    \"PromotionCountry\": \"elit\",    \"PromotionState\": \"ut nostrud \",    \"PromotionNonStackable\": -37258610,    \"PromotionRulesRetailPrice\": 99619775,    \"PromotionExcludeManufacturers\": \"cillum enim\",    \"PromotionFreeProductPrice\": -68363447.47887653,    \"PromotionExcludePreorder\": 23571173,    \"PromotionExcludeSpecialOrder\": -66715078,    \"PromotionShippingDiscount\": 74516226.95270962,    \"PromotionShippingOptions\": \"ad sint cupidatat\",    \"PromotionRecurringOrders\": 62285238,    \"PromotionBonusRewardPoints\": -13055592  }]", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Promotions", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = [
  {
    'PromotionID': 84572412,
    'PromotionName': 'elit in',
    'PromotionDescription': 'Lorem est',
    'PromotionStart': '1950-12-02T01:32:15.220Z',
    'PromotionEnd': '1959-01-10T12:18:15.038Z',
    'PromotionEnabled': -35660845,
    'PromotionByAmount': 26669668,
    'PromotionCheckByAmount': -74782611,
    'PromotionByQuantity': 22504432,
    'PromotionCheckByQuantity': 76295897,
    'PromotionByProduct': -50076430,
    'PromotionByCategory': 'labore ullamco',
    'PromotionAmount': 15103856.59193471,
    'PromotionPercentage': 71417322,
    'PromotionPerItem': -65625281,
    'PromotionCategory': 'dolor exercitation sed',
    'PromotionProduct': 'Lorem in',
    'PromotionFreeShipping': 53159455,
    'PromotionFreeProduct': 'anim non eu consequat nulla',
    'PromotionProduct1ID': 5942376,
    'PromotionProduct1Quantity': 47745793,
    'PromotionProduct2ID': 41831401,
    'PromotionProduct2Quantity': -80699639,
    'PromotionProduct3ID': -77164807,
    'PromotionProduct3Quantity': -72305912,
    'PromotionProductID': -53250736,
    'PromotionProduct4Quantity': -52355130,
    'PromotionCoupon': 'dolor magna ullamco',
    'PromotionUses': 18973047,
    'PromotionMaxUses': 51450993,
    'PromotionUsesPerCustomer': 46304025,
    'PromotionGroupID': 'id deserunt',
    'PromotionUserid': 'ven',
    'PromotionLastUpdate': '2012-05-30T15:54:58.862Z',
    'PromotionByAmount2': -35764254.194169,
    'PromotionByQuantity2': -78237712.51277041,
    'PromotionCountry': 'elit',
    'PromotionState': 'ut nostrud ',
    'PromotionNonStackable': -37258610,
    'PromotionRulesRetailPrice': 99619775,
    'PromotionExcludeManufacturers': 'cillum enim',
    'PromotionFreeProductPrice': -68363447.47887653,
    'PromotionExcludePreorder': 23571173,
    'PromotionExcludeSpecialOrder': -66715078,
    'PromotionShippingDiscount': 74516226.95270962,
    'PromotionShippingOptions': 'ad sint cupidatat',
    'PromotionRecurringOrders': 62285238,
    'PromotionBonusRewardPoints': -13055592
  }
];

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '[
  {
    "PromotionID": 84572412,
    "PromotionName": "elit in",
    "PromotionDescription": "Lorem est",
    "PromotionStart": "1950-12-02T01:32:15.220Z",
    "PromotionEnd": "1959-01-10T12:18:15.038Z",
    "PromotionEnabled": -35660845,
    "PromotionByAmount": 26669668,
    "PromotionCheckByAmount": -74782611,
    "PromotionByQuantity": 22504432,
    "PromotionCheckByQuantity": 76295897,
    "PromotionByProduct": -50076430,
    "PromotionByCategory": "labore ullamco",
    "PromotionAmount": 15103856.59193471,
    "PromotionPercentage": 71417322,
    "PromotionPerItem": -65625281,
    "PromotionCategory": "dolor exercitation sed",
    "PromotionProduct": "Lorem in",
    "PromotionFreeShipping": 53159455,
    "PromotionFreeProduct": "anim non eu consequat nulla",
    "PromotionProduct1ID": 5942376,
    "PromotionProduct1Quantity": 47745793,
    "PromotionProduct2ID": 41831401,
    "PromotionProduct2Quantity": -80699639,
    "PromotionProduct3ID": -77164807,
    "PromotionProduct3Quantity": -72305912,
    "PromotionProductID": -53250736,
    "PromotionProduct4Quantity": -52355130,
    "PromotionCoupon": "dolor magna ullamco",
    "PromotionUses": 18973047,
    "PromotionMaxUses": 51450993,
    "PromotionUsesPerCustomer": 46304025,
    "PromotionGroupID": "id deserunt",
    "PromotionUserid": "ven",
    "PromotionLastUpdate": "2012-05-30T15:54:58.862Z",
    "PromotionByAmount2": -35764254.194169,
    "PromotionByQuantity2": -78237712.51277041,
    "PromotionCountry": "elit",
    "PromotionState": "ut nostrud ",
    "PromotionNonStackable": -37258610,
    "PromotionRulesRetailPrice": 99619775,
    "PromotionExcludeManufacturers": "cillum enim",
    "PromotionFreeProductPrice": -68363447.47887653,
    "PromotionExcludePreorder": 23571173,
    "PromotionExcludeSpecialOrder": -66715078,
    "PromotionShippingDiscount": 74516226.95270962,
    "PromotionShippingOptions": "ad sint cupidatat",
    "PromotionRecurringOrders": 62285238,
    "PromotionBonusRewardPoints": -13055592
  }
]'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  [
    {
      "PromotionID": 84572412,
      "PromotionName": "elit in",
      "PromotionDescription": "Lorem est",
      "PromotionStart": "1950-12-02T01:32:15.220Z",
      "PromotionEnd": "1959-01-10T12:18:15.038Z",
      "PromotionEnabled": -35660845,
      "PromotionByAmount": 26669668,
      "PromotionCheckByAmount": -74782611,
      "PromotionByQuantity": 22504432,
      "PromotionCheckByQuantity": 76295897,
      "PromotionByProduct": -50076430,
      "PromotionByCategory": "labore ullamco",
      "PromotionAmount": 15103856.59193471,
      "PromotionPercentage": 71417322,
      "PromotionPerItem": -65625281,
      "PromotionCategory": "dolor exercitation sed",
      "PromotionProduct": "Lorem in",
      "PromotionFreeShipping": 53159455,
      "PromotionFreeProduct": "anim non eu consequat nulla",
      "PromotionProduct1ID": 5942376,
      "PromotionProduct1Quantity": 47745793,
      "PromotionProduct2ID": 41831401,
      "PromotionProduct2Quantity": -80699639,
      "PromotionProduct3ID": -77164807,
      "PromotionProduct3Quantity": -72305912,
      "PromotionProductID": -53250736,
      "PromotionProduct4Quantity": -52355130,
      "PromotionCoupon": "dolor magna ullamco",
      "PromotionUses": 18973047,
      "PromotionMaxUses": 51450993,
      "PromotionUsesPerCustomer": 46304025,
      "PromotionGroupID": "id deserunt",
      "PromotionUserid": "ven",
      "PromotionLastUpdate": "2012-05-30T15:54:58.862Z",
      "PromotionByAmount2": -35764254.194169,
      "PromotionByQuantity2": -78237712.51277041,
      "PromotionCountry": "elit",
      "PromotionState": "ut nostrud ",
      "PromotionNonStackable": -37258610,
      "PromotionRulesRetailPrice": 99619775,
      "PromotionExcludeManufacturers": "cillum enim",
      "PromotionFreeProductPrice": -68363447.47887653,
      "PromotionExcludePreorder": 23571173,
      "PromotionExcludeSpecialOrder": -66715078,
      "PromotionShippingDiscount": 74516226.95270962,
      "PromotionShippingOptions": "ad sint cupidatat",
      "PromotionRecurringOrders": 62285238,
      "PromotionBonusRewardPoints": -13055592
    }
  ]
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"PromotionID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

See [Data Structures](#promotion-object) for more information on the Promotion object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions`

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No Promotions found.

### Update a specific promotion by id
> To update a specific promotion by id, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#promotion-object) for more information on the Promotion object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions/{promotionid}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"PromotionID\": -88250652,
  \"PromotionName\": \"et Ut\",
  \"PromotionDescription\": \"commodo\",
  \"PromotionStart\": \"1991-01-10T03:51:19.996Z\",
  \"PromotionEnd\": \"1956-05-27T13:59:18.111Z\",
  \"PromotionEnabled\": 25188756,
  \"PromotionByAmount\": -87519770,
  \"PromotionCheckByAmount\": -15661393,
  \"PromotionByQuantity\": 3452045,
  \"PromotionCheckByQuantity\": -20433887,
  \"PromotionByProduct\": 3288101,
  \"PromotionByCategory\": \"reprehenderit incididunt eiusmod aut\",
  \"PromotionAmount\": 90683940.57204324,
  \"PromotionPercentage\": -107843,
  \"PromotionPerItem\": 68938184,
  \"PromotionCategory\": \"enim fugiat reprehenderit deserunt\",
  \"PromotionProduct\": \"in et Duis\",
  \"PromotionFreeShipping\": 91514275,
  \"PromotionFreeProduct\": \"eu non laboris\",
  \"PromotionProduct1ID\": 46827571,
  \"PromotionProduct1Quantity\": 1409895,
  \"PromotionProduct2ID\": -64989936,
  \"PromotionProduct2Quantity\": 58521560,
  \"PromotionProduct3ID\": 19002524,
  \"PromotionProduct3Quantity\": -55845408,
  \"PromotionProductID\": -3563333,
  \"PromotionProduct4Quantity\": -14299322,
  \"PromotionCoupon\": \"ut\",
  \"PromotionUses\": 4887254,
  \"PromotionMaxUses\": 95543148,
  \"PromotionUsesPerCustomer\": -47256991,
  \"PromotionGroupID\": \"laborum\",
  \"PromotionUserid\": \"ut in \",
  \"PromotionLastUpdate\": \"1966-01-07T08:45:54.777Z\",
  \"PromotionByAmount2\": 45018990.85761097,
  \"PromotionByQuantity2\": 75990726.78788522,
  \"PromotionCountry\": \"voluptate et in anim veli\",
  \"PromotionState\": \"non aliqua\",
  \"PromotionNonStackable\": -23144645,
  \"PromotionRulesRetailPrice\": 4021593,
  \"PromotionExcludeManufacturers\": \"dolore quis\",
  \"PromotionFreeProductPrice\": 7831999.10927932,
  \"PromotionExcludePreorder\": -18402265,
  \"PromotionExcludeSpecialOrder\": 20306855,
  \"PromotionShippingDiscount\": 36634009.71140364,
  \"PromotionShippingOptions\": \"fugiat\",
  \"PromotionRecurringOrders\": 52987786,
  \"PromotionBonusRewardPoints\": -43965248
}");

curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "Content-Type: application/json",
  "Accept: application/json",
  "SecureURL: ",
  "PrivateKey: ",
  "Token: "
));

$response = curl_exec($ch);
curl_close($ch);

var_dump($response);
```

```csharp
//Common testing requirement. If you are consuming an API in a sandbox/test region, uncomment this line of code ONLY for non production uses.
//System.Net.ServicePointManager.ServerCertificateValidationCallback = delegate { return true; };

//Be sure to run "Install-Package Microsoft.Net.Http" from your nuget command line.
using System;
using System.Net.Http;

var baseAddress = new Uri("https://apirest.3dcart.com/");

using (var httpClient = new HttpClient{ BaseAddress = baseAddress })
{

  
  httpClient.DefaultRequestHeaders.TryAddWithoutValidation("accept", "application/json");
  
  httpClient.DefaultRequestHeaders.TryAddWithoutValidation("secureurl", "");
  
  httpClient.DefaultRequestHeaders.TryAddWithoutValidation("privatekey", "");
  
  httpClient.DefaultRequestHeaders.TryAddWithoutValidation("token", "");
  
    using (var content = new StringContent("{  \"PromotionID\": -88250652,  \"PromotionName\": \"et Ut\",  \"PromotionDescription\": \"commodo\",  \"PromotionStart\": \"1991-01-10T03:51:19.996Z\",  \"PromotionEnd\": \"1956-05-27T13:59:18.111Z\",  \"PromotionEnabled\": 25188756,  \"PromotionByAmount\": -87519770,  \"PromotionCheckByAmount\": -15661393,  \"PromotionByQuantity\": 3452045,  \"PromotionCheckByQuantity\": -20433887,  \"PromotionByProduct\": 3288101,  \"PromotionByCategory\": \"reprehenderit incididunt eiusmod aut\",  \"PromotionAmount\": 90683940.57204324,  \"PromotionPercentage\": -107843,  \"PromotionPerItem\": 68938184,  \"PromotionCategory\": \"enim fugiat reprehenderit deserunt\",  \"PromotionProduct\": \"in et Duis\",  \"PromotionFreeShipping\": 91514275,  \"PromotionFreeProduct\": \"eu non laboris\",  \"PromotionProduct1ID\": 46827571,  \"PromotionProduct1Quantity\": 1409895,  \"PromotionProduct2ID\": -64989936,  \"PromotionProduct2Quantity\": 58521560,  \"PromotionProduct3ID\": 19002524,  \"PromotionProduct3Quantity\": -55845408,  \"PromotionProductID\": -3563333,  \"PromotionProduct4Quantity\": -14299322,  \"PromotionCoupon\": \"ut\",  \"PromotionUses\": 4887254,  \"PromotionMaxUses\": 95543148,  \"PromotionUsesPerCustomer\": -47256991,  \"PromotionGroupID\": \"laborum\",  \"PromotionUserid\": \"ut in \",  \"PromotionLastUpdate\": \"1966-01-07T08:45:54.777Z\",  \"PromotionByAmount2\": 45018990.85761097,  \"PromotionByQuantity2\": 75990726.78788522,  \"PromotionCountry\": \"voluptate et in anim veli\",  \"PromotionState\": \"non aliqua\",  \"PromotionNonStackable\": -23144645,  \"PromotionRulesRetailPrice\": 4021593,  \"PromotionExcludeManufacturers\": \"dolore quis\",  \"PromotionFreeProductPrice\": 7831999.10927932,  \"PromotionExcludePreorder\": -18402265,  \"PromotionExcludeSpecialOrder\": 20306855,  \"PromotionShippingDiscount\": 36634009.71140364,  \"PromotionShippingOptions\": \"fugiat\",  \"PromotionRecurringOrders\": 52987786,  \"PromotionBonusRewardPoints\": -43965248}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Promotions/{promotionid}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions/{promotionid}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'PromotionID': -88250652,
  'PromotionName': 'et Ut',
  'PromotionDescription': 'commodo',
  'PromotionStart': '1991-01-10T03:51:19.996Z',
  'PromotionEnd': '1956-05-27T13:59:18.111Z',
  'PromotionEnabled': 25188756,
  'PromotionByAmount': -87519770,
  'PromotionCheckByAmount': -15661393,
  'PromotionByQuantity': 3452045,
  'PromotionCheckByQuantity': -20433887,
  'PromotionByProduct': 3288101,
  'PromotionByCategory': 'reprehenderit incididunt eiusmod aut',
  'PromotionAmount': 90683940.57204324,
  'PromotionPercentage': -107843,
  'PromotionPerItem': 68938184,
  'PromotionCategory': 'enim fugiat reprehenderit deserunt',
  'PromotionProduct': 'in et Duis',
  'PromotionFreeShipping': 91514275,
  'PromotionFreeProduct': 'eu non laboris',
  'PromotionProduct1ID': 46827571,
  'PromotionProduct1Quantity': 1409895,
  'PromotionProduct2ID': -64989936,
  'PromotionProduct2Quantity': 58521560,
  'PromotionProduct3ID': 19002524,
  'PromotionProduct3Quantity': -55845408,
  'PromotionProductID': -3563333,
  'PromotionProduct4Quantity': -14299322,
  'PromotionCoupon': 'ut',
  'PromotionUses': 4887254,
  'PromotionMaxUses': 95543148,
  'PromotionUsesPerCustomer': -47256991,
  'PromotionGroupID': 'laborum',
  'PromotionUserid': 'ut in ',
  'PromotionLastUpdate': '1966-01-07T08:45:54.777Z',
  'PromotionByAmount2': 45018990.85761097,
  'PromotionByQuantity2': 75990726.78788522,
  'PromotionCountry': 'voluptate et in anim veli',
  'PromotionState': 'non aliqua',
  'PromotionNonStackable': -23144645,
  'PromotionRulesRetailPrice': 4021593,
  'PromotionExcludeManufacturers': 'dolore quis',
  'PromotionFreeProductPrice': 7831999.10927932,
  'PromotionExcludePreorder': -18402265,
  'PromotionExcludeSpecialOrder': 20306855,
  'PromotionShippingDiscount': 36634009.71140364,
  'PromotionShippingOptions': 'fugiat',
  'PromotionRecurringOrders': 52987786,
  'PromotionBonusRewardPoints': -43965248
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "PromotionID": -88250652,
  "PromotionName": "et Ut",
  "PromotionDescription": "commodo",
  "PromotionStart": "1991-01-10T03:51:19.996Z",
  "PromotionEnd": "1956-05-27T13:59:18.111Z",
  "PromotionEnabled": 25188756,
  "PromotionByAmount": -87519770,
  "PromotionCheckByAmount": -15661393,
  "PromotionByQuantity": 3452045,
  "PromotionCheckByQuantity": -20433887,
  "PromotionByProduct": 3288101,
  "PromotionByCategory": "reprehenderit incididunt eiusmod aut",
  "PromotionAmount": 90683940.57204324,
  "PromotionPercentage": -107843,
  "PromotionPerItem": 68938184,
  "PromotionCategory": "enim fugiat reprehenderit deserunt",
  "PromotionProduct": "in et Duis",
  "PromotionFreeShipping": 91514275,
  "PromotionFreeProduct": "eu non laboris",
  "PromotionProduct1ID": 46827571,
  "PromotionProduct1Quantity": 1409895,
  "PromotionProduct2ID": -64989936,
  "PromotionProduct2Quantity": 58521560,
  "PromotionProduct3ID": 19002524,
  "PromotionProduct3Quantity": -55845408,
  "PromotionProductID": -3563333,
  "PromotionProduct4Quantity": -14299322,
  "PromotionCoupon": "ut",
  "PromotionUses": 4887254,
  "PromotionMaxUses": 95543148,
  "PromotionUsesPerCustomer": -47256991,
  "PromotionGroupID": "laborum",
  "PromotionUserid": "ut in ",
  "PromotionLastUpdate": "1966-01-07T08:45:54.777Z",
  "PromotionByAmount2": 45018990.85761097,
  "PromotionByQuantity2": 75990726.78788522,
  "PromotionCountry": "voluptate et in anim veli",
  "PromotionState": "non aliqua",
  "PromotionNonStackable": -23144645,
  "PromotionRulesRetailPrice": 4021593,
  "PromotionExcludeManufacturers": "dolore quis",
  "PromotionFreeProductPrice": 7831999.10927932,
  "PromotionExcludePreorder": -18402265,
  "PromotionExcludeSpecialOrder": 20306855,
  "PromotionShippingDiscount": 36634009.71140364,
  "PromotionShippingOptions": "fugiat",
  "PromotionRecurringOrders": 52987786,
  "PromotionBonusRewardPoints": -43965248
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions/{promotionid}', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "PromotionID": -88250652,
    "PromotionName": "et Ut",
    "PromotionDescription": "commodo",
    "PromotionStart": "1991-01-10T03:51:19.996Z",
    "PromotionEnd": "1956-05-27T13:59:18.111Z",
    "PromotionEnabled": 25188756,
    "PromotionByAmount": -87519770,
    "PromotionCheckByAmount": -15661393,
    "PromotionByQuantity": 3452045,
    "PromotionCheckByQuantity": -20433887,
    "PromotionByProduct": 3288101,
    "PromotionByCategory": "reprehenderit incididunt eiusmod aut",
    "PromotionAmount": 90683940.57204324,
    "PromotionPercentage": -107843,
    "PromotionPerItem": 68938184,
    "PromotionCategory": "enim fugiat reprehenderit deserunt",
    "PromotionProduct": "in et Duis",
    "PromotionFreeShipping": 91514275,
    "PromotionFreeProduct": "eu non laboris",
    "PromotionProduct1ID": 46827571,
    "PromotionProduct1Quantity": 1409895,
    "PromotionProduct2ID": -64989936,
    "PromotionProduct2Quantity": 58521560,
    "PromotionProduct3ID": 19002524,
    "PromotionProduct3Quantity": -55845408,
    "PromotionProductID": -3563333,
    "PromotionProduct4Quantity": -14299322,
    "PromotionCoupon": "ut",
    "PromotionUses": 4887254,
    "PromotionMaxUses": 95543148,
    "PromotionUsesPerCustomer": -47256991,
    "PromotionGroupID": "laborum",
    "PromotionUserid": "ut in ",
    "PromotionLastUpdate": "1966-01-07T08:45:54.777Z",
    "PromotionByAmount2": 45018990.85761097,
    "PromotionByQuantity2": 75990726.78788522,
    "PromotionCountry": "voluptate et in anim veli",
    "PromotionState": "non aliqua",
    "PromotionNonStackable": -23144645,
    "PromotionRulesRetailPrice": 4021593,
    "PromotionExcludeManufacturers": "dolore quis",
    "PromotionFreeProductPrice": 7831999.10927932,
    "PromotionExcludePreorder": -18402265,
    "PromotionExcludeSpecialOrder": 20306855,
    "PromotionShippingDiscount": 36634009.71140364,
    "PromotionShippingOptions": "fugiat",
    "PromotionRecurringOrders": 52987786,
    "PromotionBonusRewardPoints": -43965248
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions/{promotionid}', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"PromotionID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

See [Data Structures](#promotion-object) for more information on the Promotion object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions/{promotionid}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
promotionid | required | The id of the promotion to update.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No Promotions found.

### Delete a promotion
> To delete a promotion, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions/{id}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");

curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "Content-Type: application/json",
  "Accept: application/json",
  "SecureURL: ",
  "PrivateKey: ",
  "Token: "
));

$response = curl_exec($ch);
curl_close($ch);

var_dump($response);
```

```csharp
//Common testing requirement. If you are consuming an API in a sandbox/test region, uncomment this line of code ONLY for non production uses.
//System.Net.ServicePointManager.ServerCertificateValidationCallback = delegate { return true; };

//Be sure to run "Install-Package Microsoft.Net.Http" from your nuget command line.
using System;
using System.Net.Http;

var baseAddress = new Uri("https://apirest.3dcart.com/");

using (var httpClient = new HttpClient{ BaseAddress = baseAddress })
{

  
  httpClient.DefaultRequestHeaders.TryAddWithoutValidation("accept", "application/json");
  
  httpClient.DefaultRequestHeaders.TryAddWithoutValidation("secureurl", "");
  
  httpClient.DefaultRequestHeaders.TryAddWithoutValidation("privatekey", "");
  
  httpClient.DefaultRequestHeaders.TryAddWithoutValidation("token", "");
  
  using(var response = await httpClient.DeleteAsync("3dCartWebAPI/v1/Promotions/{id}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions/{id}');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');
request.setRequestHeader('SecureURL', '');
request.setRequestHeader('PrivateKey', '');
request.setRequestHeader('Token', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.delete 'https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions/{id}', headers
puts response
```

```python
from urllib2 import Request, urlopen

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions/{id}', headers=headers)
request.get_method = lambda: 'DELETE'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"PromotionID",
    "Value":"1234",
    "Status":"200",
    "Message":"Deleted successfully",
  }
]
```

#### HTTP Request
`DELETE https://apirest.3dcart.com/3dCartWebAPI/v1/Promotions/{id}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
id | required | The id of the promotion to delete.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No Promotions found.