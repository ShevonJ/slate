# RMA
The RMA (Return Merchandise Authorization) methods allow you to retrieve RMA information. Create, Update, and Delete are not available at this time. The RMA feature allows a merchant to process returns/exchanges for customers. The RMA can be initiated by the customer, or can be initiated by the merchant at any time after an order has been placed. See our <a href="https://support.3dcart.com/Knowledgebase/Article/View/420/8/how-do-i-use-the-rma-feature" target="_blank">KB article</a> for more information on the RMA module.

## RMA

### Retrieve a list of RMAs.
> To retrieve a list of RMAs from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/RMA?rmastatusid=&rmareasonid=&rmamethodid=&catalogid=&sku=&datestart=&dateend=&limit=&offset=&countonly=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/RMA"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/RMA?rmastatusid=&rmareasonid=&rmamethodid=&catalogid=&sku=&datestart=&dateend=&limit=&offset=&countonly=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/RMA?rmastatusid=&rmareasonid=&rmamethodid=&catalogid=&sku=&datestart=&dateend=&limit=&offset=&countonly=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/RMA?rmastatusid=&rmareasonid=&rmamethodid=&catalogid=&sku=&datestart=&dateend=&limit=&offset=&countonly=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#rma-object) for more information on the RMA object):

```json
[
  {
    "RMAID": 1,
    "RmaDate": "03/28/2019 17:28",
    "OrderID": 1,
    "RMAReasonID": 1,
    "RMAMethodID": 1,
    "RMAStatusID": 1,
    "Comments": "sample string 1",
    "InternalComments": "sample string 2",
    "StaffComments": "sample string 3",
    "RMAItemList": [
      {
        "CatalogID": 1,
        "SKU": "sample string 1",
        "ItemName": "sample string 2",
        "ReturnQuantity": 1,
        "ReceivedQuantity": 1,
        "RestockQuantity": 1
      },
      {
        "CatalogID": 1,
        "SKU": "sample string 1",
        "ItemName": "sample string 2",
        "ReturnQuantity": 1,
        "ReceivedQuantity": 1,
        "RestockQuantity": 1
      }
    ]
  },
  {
    "RMAID": 1,
    "RmaDate": "03/28/2019 17:28",
    "OrderID": 1,
    "RMAReasonID": 1,
    "RMAMethodID": 1,
    "RMAStatusID": 1,
    "Comments": "sample string 1",
    "InternalComments": "sample string 2",
    "StaffComments": "sample string 3",
    "RMAItemList": [
      {
        "CatalogID": 1,
        "SKU": "sample string 1",
        "ItemName": "sample string 2",
        "ReturnQuantity": 1,
        "ReceivedQuantity": 1,
        "RestockQuantity": 1
      },
      {
        "CatalogID": 1,
        "SKU": "sample string 1",
        "ItemName": "sample string 2",
        "ReturnQuantity": 1,
        "ReceivedQuantity": 1,
        "RestockQuantity": 1
      }
    ]
  }
]
```

This method is used to retrieve a list of RMAs from the store. 

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/RMA`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
rmastatusid | optional | Status of the RMA.
rmareasonid | optional | Reason of the RMA.
rmamethodid | optional | Method of the RMA.
catalogid | optional | Catalogid of the product returned.
sku | optional | The SKU of the product returned.
datestart | optional | Retrieve all orders after this date (mm/dd/yyyy hh:mm:ss)
dateend | optional | Retrieve all orders before this date (mm/dd/yyyy hh:mm:ss)
limit | optional | Maximum number of items that can be returned
offset | optional | Starting point for the return data
countonly | optional | Count the number of rows only

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No RMAs found.

### Retrieve a specific RMA by id
> To retrieve a specific RMA from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/RMA/{rmaid}");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/RMA/{rmaid}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/RMA/{rmaid}');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/RMA/{rmaid}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/RMA/{rmaid}', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#rma-object) for more information on the RMA object):

```json
[
  {
    "RMAID": 1,
    "RmaDate": "03/28/2019 17:28",
    "OrderID": 1,
    "RMAReasonID": 1,
    "RMAMethodID": 1,
    "RMAStatusID": 1,
    "Comments": "sample string 1",
    "InternalComments": "sample string 2",
    "StaffComments": "sample string 3",
    "RMAItemList": [
      {
        "CatalogID": 1,
        "SKU": "sample string 1",
        "ItemName": "sample string 2",
        "ReturnQuantity": 1,
        "ReceivedQuantity": 1,
        "RestockQuantity": 1
      },
      {
        "CatalogID": 1,
        "SKU": "sample string 1",
        "ItemName": "sample string 2",
        "ReturnQuantity": 1,
        "ReceivedQuantity": 1,
        "RestockQuantity": 1
      }
    ]
  },
  {
    "RMAID": 1,
    "RmaDate": "03/28/2019 17:28",
    "OrderID": 1,
    "RMAReasonID": 1,
    "RMAMethodID": 1,
    "RMAStatusID": 1,
    "Comments": "sample string 1",
    "InternalComments": "sample string 2",
    "StaffComments": "sample string 3",
    "RMAItemList": [
      {
        "CatalogID": 1,
        "SKU": "sample string 1",
        "ItemName": "sample string 2",
        "ReturnQuantity": 1,
        "ReceivedQuantity": 1,
        "RestockQuantity": 1
      },
      {
        "CatalogID": 1,
        "SKU": "sample string 1",
        "ItemName": "sample string 2",
        "ReturnQuantity": 1,
        "ReceivedQuantity": 1,
        "RestockQuantity": 1
      }
    ]
  }
]
```



#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/RMA/{rmaid}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
rmaid | required | The unique id of the RMA to retrieve.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No RMAs found.

## RMA Items

### Get a list of items from a specific RMA
> To get a list of items from a specific RMA, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/RMA/{rmaid}/Items?limit=&offset=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/RMA/{rmaid}/Items"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/RMA/{rmaid}/Items?limit=&offset=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/RMA/{rmaid}/Items?limit=&offset=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/RMA/{rmaid}/Items?limit=&offset=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#rmaitem-object) for more information on the RMAItem object):

```json
[
  {
    "CatalogID": 1,
    "SKU": "sample string 1",
    "ItemName": "sample string 2",
    "ReturnQuantity": 1,
    "ReceivedQuantity": 1,
    "RestockQuantity": 1
  },
  {
    "CatalogID": 1,
    "SKU": "sample string 1",
    "ItemName": "sample string 2",
    "ReturnQuantity": 1,
    "ReceivedQuantity": 1,
    "RestockQuantity": 1
  }
]
```


#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/RMA/{rmaid}/Items{?limit,offset}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
rmaid | required | The unique id of the RMA to retrieve.
limit | optional | Maximum number of items that can be returned.
offset | optional | Starting point for the return data.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No RMAs found.
