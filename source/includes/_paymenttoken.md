# Payment Tokens
The PaymentTokens methods allow the management of "tokenized" payment gateways. A tokenized payment gateway returns a token during the credit card authorization process that can be stored and used at a later time in lieu of a credit card number. This is required in order to offer Recurring Order/subscription products. See our <a href="https://support.3dcart.com/Knowledgebase/Article/View/628/14/can-i-have-recurring-orders-on-my-store" target="_blank">KB article</a> for more information on our Recurring Order module. The PaymentToken methods allow an application to Create, Retrieve, Update, and Delete payment tokens.

This can be useful for businesses who charge and process credit cards using an external system, or have physical sales locations in addition to online sales. This can also be used when migrating data from another shopping cart in order to not lose customer payment token data.

## Payment Tokens

### Create a payment token
> To create a payment token in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#paymenttoken-object) for more information on the PaymentToken object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"PaymentTokenID\": -58914564,
  \"CustomerID\": -40647657,
  \"OrderID\": 14857998,
  \"CustomerProfileID\": \"non magna\",
  \"PaymentProfileID\": \"in occaecat labore consequat\",
  \"CardLast4\": -56901638,
  \"CardExpMonth\": -58633376,
  \"CardExpYear\": 29669257,
  \"BillingPaymentMethodID\": 68433439,
  \"LastUpdate\": \"1987-09-27T20:30:15.838Z\",
  \"GatewayName\": \"labor\",
  \"GatewayID\": 2756726
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
  
    using (var content = new StringContent("{  \"PaymentTokenID\": -58914564,  \"CustomerID\": -40647657,  \"OrderID\": 14857998,  \"CustomerProfileID\": \"non magna\",  \"PaymentProfileID\": \"in occaecat labore consequat\",  \"CardLast4\": -56901638,  \"CardExpMonth\": -58633376,  \"CardExpYear\": 29669257,  \"BillingPaymentMethodID\": 68433439,  \"LastUpdate\": \"1987-09-27T20:30:15.838Z\",  \"GatewayName\": \"labor\",  \"GatewayID\": 2756726}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("3dCartWebAPI/v1/PaymentTokens", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens');

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
  'PaymentTokenID': -58914564,
  'CustomerID': -40647657,
  'OrderID': 14857998,
  'CustomerProfileID': 'non magna',
  'PaymentProfileID': 'in occaecat labore consequat',
  'CardLast4': -56901638,
  'CardExpMonth': -58633376,
  'CardExpYear': 29669257,
  'BillingPaymentMethodID': 68433439,
  'LastUpdate': '1987-09-27T20:30:15.838Z',
  'GatewayName': 'labor',
  'GatewayID': 2756726
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "PaymentTokenID": -58914564,
  "CustomerID": -40647657,
  "OrderID": 14857998,
  "CustomerProfileID": "non magna",
  "PaymentProfileID": "in occaecat labore consequat",
  "CardLast4": -56901638,
  "CardExpMonth": -58633376,
  "CardExpYear": 29669257,
  "BillingPaymentMethodID": 68433439,
  "LastUpdate": "1987-09-27T20:30:15.838Z",
  "GatewayName": "labor",
  "GatewayID": 2756726
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.post 'https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "PaymentTokenID": -58914564,
    "CustomerID": -40647657,
    "OrderID": 14857998,
    "CustomerProfileID": "non magna",
    "PaymentProfileID": "in occaecat labore consequat",
    "CardLast4": -56901638,
    "CardExpMonth": -58633376,
    "CardExpYear": 29669257,
    "BillingPaymentMethodID": 68433439,
    "LastUpdate": "1987-09-27T20:30:15.838Z",
    "GatewayName": "labor",
    "GatewayID": 2756726
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens', data=values, headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"PaymentTokenID",
    "Value":"1234",
    "Status":"201",
    "Message":"Created successfully",
  }
]
```

#### HTTP Request
`POST https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens`

#### Responses and Errors

Response Code | Description
------------- | ---------
201 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.

### Retrieve a list of payment tokens
> To retrieve a list of payment tokens from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens?limit=&offset=&countonly=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/PaymentTokens"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens?limit=&offset=&countonly=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens?limit=&offset=&countonly=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens?limit=&offset=&countonly=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#paymenttoken-object) for more information on the PaymentToken object):

```json
[
  {
    "PaymentTokenID": 1,
    "CustomerID": 1,
    "OrderID": 1,
    "CustomerProfileID": "sample string 1",
    "PaymentProfileID": "sample string 2",
    "CardLast4": 1,
    "CardExpMonth": 1,
    "CardExpYear": 1,
    "BillingPaymentMethodID": 1,
    "LastUpdate": "03/28/2019 14:37",
    "GatewayName": "sample string 3",
    "GatewayID": 1
  },
  {
    "PaymentTokenID": 1,
    "CustomerID": 1,
    "OrderID": 1,
    "CustomerProfileID": "sample string 1",
    "PaymentProfileID": "sample string 2",
    "CardLast4": 1,
    "CardExpMonth": 1,
    "CardExpYear": 1,
    "BillingPaymentMethodID": 1,
    "LastUpdate": "03/28/2019 14:37",
    "GatewayName": "sample string 3",
    "GatewayID": 1
  }
]
```

This method is used to retrieve a list payment tokens from the store. See [Data Structures](#paymenttoken-object) for more information on the PaymentToken object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
limit | optional | Maximum number of items that can be returned
offset | optional | Starting point for the return data
countonly | optional | Count the number of rows only

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No payment tokens found.

### Retrieve a specific payment token by id
> To retrieve a specific payment token from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens/{id}");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/PaymentTokens/{id}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens/{id}');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens/{id}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens/{id}', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#paymenttoken-object) for more information on the PaymentToken object):

```json
[
  {
    "PaymentTokenID": 1,
    "CustomerID": 1,
    "OrderID": 1,
    "CustomerProfileID": "sample string 1",
    "PaymentProfileID": "sample string 2",
    "CardLast4": 1,
    "CardExpMonth": 1,
    "CardExpYear": 1,
    "BillingPaymentMethodID": 1,
    "LastUpdate": "03/28/2019 14:41",
    "GatewayName": "sample string 3",
    "GatewayID": 1
  },
  {
    "PaymentTokenID": 1,
    "CustomerID": 1,
    "OrderID": 1,
    "CustomerProfileID": "sample string 1",
    "PaymentProfileID": "sample string 2",
    "CardLast4": 1,
    "CardExpMonth": 1,
    "CardExpYear": 1,
    "BillingPaymentMethodID": 1,
    "LastUpdate": "03/28/2019 14:41",
    "GatewayName": "sample string 3",
    "GatewayID": 1
  }
]
```

This method is used to retrieve a specific payment token from the store. See [Data Structures](#paymenttoken-object) for more information on the PaymentToken object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens/{id}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
id | required | The unique id of the payment token to retrieve.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No payment tokens found.

### Update a list of payment tokens
> To update a list of payment tokens in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#paymenttoken-object) for more information on the PaymentToken object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "[
  {
    \"PaymentTokenID\": 17816051,
    \"CustomerID\": 49497818,
    \"OrderID\": -50559992,
    \"CustomerProfileID\": \"amet adipisicing sit\",
    \"PaymentProfileID\": \"velit commodo nostrud quis elit\",
    \"CardLast4\": -48719931,
    \"CardExpMonth\": -34642676,
    \"CardExpYear\": -85376219,
    \"BillingPaymentMethodID\": 56801308,
    \"LastUpdate\": \"1980-03-17T12:27:54.637Z\",
    \"GatewayName\": \"exercitation do ullamco\",
    \"GatewayID\": -7914764
  },
  {
    \"PaymentTokenID\": 27211024,
    \"CustomerID\": 56298965,
    \"OrderID\": 18671837,
    \"CustomerProfileID\": \"tempor mollit et ut eu\",
    \"PaymentProfileID\": \"id in\",
    \"CardLast4\": 1665606,
    \"CardExpMonth\": -95879477,
    \"CardExpYear\": -40651874,
    \"BillingPaymentMethodID\": 60205769,
    \"LastUpdate\": \"1962-01-07T02:55:51.497Z\",
    \"GatewayName\": \"pariatur commodo \",
    \"GatewayID\": 39802226
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
  
    using (var content = new StringContent("[  {    \"PaymentTokenID\": 17816051,    \"CustomerID\": 49497818,    \"OrderID\": -50559992,    \"CustomerProfileID\": \"amet adipisicing sit\",    \"PaymentProfileID\": \"velit commodo nostrud quis elit\",    \"CardLast4\": -48719931,    \"CardExpMonth\": -34642676,    \"CardExpYear\": -85376219,    \"BillingPaymentMethodID\": 56801308,    \"LastUpdate\": \"1980-03-17T12:27:54.637Z\",    \"GatewayName\": \"exercitation do ullamco\",    \"GatewayID\": -7914764  },  {    \"PaymentTokenID\": 27211024,    \"CustomerID\": 56298965,    \"OrderID\": 18671837,    \"CustomerProfileID\": \"tempor mollit et ut eu\",    \"PaymentProfileID\": \"id in\",    \"CardLast4\": 1665606,    \"CardExpMonth\": -95879477,    \"CardExpYear\": -40651874,    \"BillingPaymentMethodID\": 60205769,    \"LastUpdate\": \"1962-01-07T02:55:51.497Z\",    \"GatewayName\": \"pariatur commodo \",    \"GatewayID\": 39802226  }]", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/PaymentTokens", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens');

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
    'PaymentTokenID': 17816051,
    'CustomerID': 49497818,
    'OrderID': -50559992,
    'CustomerProfileID': 'amet adipisicing sit',
    'PaymentProfileID': 'velit commodo nostrud quis elit',
    'CardLast4': -48719931,
    'CardExpMonth': -34642676,
    'CardExpYear': -85376219,
    'BillingPaymentMethodID': 56801308,
    'LastUpdate': '1980-03-17T12:27:54.637Z',
    'GatewayName': 'exercitation do ullamco',
    'GatewayID': -7914764
  },
  {
    'PaymentTokenID': 27211024,
    'CustomerID': 56298965,
    'OrderID': 18671837,
    'CustomerProfileID': 'tempor mollit et ut eu',
    'PaymentProfileID': 'id in',
    'CardLast4': 1665606,
    'CardExpMonth': -95879477,
    'CardExpYear': -40651874,
    'BillingPaymentMethodID': 60205769,
    'LastUpdate': '1962-01-07T02:55:51.497Z',
    'GatewayName': 'pariatur commodo ',
    'GatewayID': 39802226
  }
];

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '[
  {
    "PaymentTokenID": 17816051,
    "CustomerID": 49497818,
    "OrderID": -50559992,
    "CustomerProfileID": "amet adipisicing sit",
    "PaymentProfileID": "velit commodo nostrud quis elit",
    "CardLast4": -48719931,
    "CardExpMonth": -34642676,
    "CardExpYear": -85376219,
    "BillingPaymentMethodID": 56801308,
    "LastUpdate": "1980-03-17T12:27:54.637Z",
    "GatewayName": "exercitation do ullamco",
    "GatewayID": -7914764
  },
  {
    "PaymentTokenID": 27211024,
    "CustomerID": 56298965,
    "OrderID": 18671837,
    "CustomerProfileID": "tempor mollit et ut eu",
    "PaymentProfileID": "id in",
    "CardLast4": 1665606,
    "CardExpMonth": -95879477,
    "CardExpYear": -40651874,
    "BillingPaymentMethodID": 60205769,
    "LastUpdate": "1962-01-07T02:55:51.497Z",
    "GatewayName": "pariatur commodo ",
    "GatewayID": 39802226
  }
]'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  [
    {
      "PaymentTokenID": 17816051,
      "CustomerID": 49497818,
      "OrderID": -50559992,
      "CustomerProfileID": "amet adipisicing sit",
      "PaymentProfileID": "velit commodo nostrud quis elit",
      "CardLast4": -48719931,
      "CardExpMonth": -34642676,
      "CardExpYear": -85376219,
      "BillingPaymentMethodID": 56801308,
      "LastUpdate": "1980-03-17T12:27:54.637Z",
      "GatewayName": "exercitation do ullamco",
      "GatewayID": -7914764
    },
    {
      "PaymentTokenID": 27211024,
      "CustomerID": 56298965,
      "OrderID": 18671837,
      "CustomerProfileID": "tempor mollit et ut eu",
      "PaymentProfileID": "id in",
      "CardLast4": 1665606,
      "CardExpMonth": -95879477,
      "CardExpYear": -40651874,
      "BillingPaymentMethodID": 60205769,
      "LastUpdate": "1962-01-07T02:55:51.497Z",
      "GatewayName": "pariatur commodo ",
      "GatewayID": 39802226
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"PaymentTokenID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

This method is used to update multiple payment tokens in the database. No URL parameters should be included. See [Data Structures](#paymenttoken-object) for more information on the PaymentToken object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens`

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No payment tokens found.

### Update a specific payment token by id
> To update a specific payment token in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#paymenttoken-object) for more information on the PaymentToken object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens/{paymenttokenid}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"PaymentTokenID\": -38013142,
  \"CustomerID\": 48730608,
  \"OrderID\": 72245007,
  \"CustomerProfileID\": \"est fugiat nisi sint \",
  \"PaymentProfileID\": \"do deserunt ma\",
  \"CardLast4\": 90653397,
  \"CardExpMonth\": -29381953,
  \"CardExpYear\": -88288300,
  \"BillingPaymentMethodID\": -92152947,
  \"LastUpdate\": \"1953-05-09T23:37:14.153Z\",
  \"GatewayName\": \"cillum\",
  \"GatewayID\": 98226985
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
  
    using (var content = new StringContent("{  \"PaymentTokenID\": -38013142,  \"CustomerID\": 48730608,  \"OrderID\": 72245007,  \"CustomerProfileID\": \"est fugiat nisi sint \",  \"PaymentProfileID\": \"do deserunt ma\",  \"CardLast4\": 90653397,  \"CardExpMonth\": -29381953,  \"CardExpYear\": -88288300,  \"BillingPaymentMethodID\": -92152947,  \"LastUpdate\": \"1953-05-09T23:37:14.153Z\",  \"GatewayName\": \"cillum\",  \"GatewayID\": 98226985}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/PaymentTokens/{paymenttokenid}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens/{paymenttokenid}');

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
  'PaymentTokenID': -38013142,
  'CustomerID': 48730608,
  'OrderID': 72245007,
  'CustomerProfileID': 'est fugiat nisi sint ',
  'PaymentProfileID': 'do deserunt ma',
  'CardLast4': 90653397,
  'CardExpMonth': -29381953,
  'CardExpYear': -88288300,
  'BillingPaymentMethodID': -92152947,
  'LastUpdate': '1953-05-09T23:37:14.153Z',
  'GatewayName': 'cillum',
  'GatewayID': 98226985
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "PaymentTokenID": -38013142,
  "CustomerID": 48730608,
  "OrderID": 72245007,
  "CustomerProfileID": "est fugiat nisi sint ",
  "PaymentProfileID": "do deserunt ma",
  "CardLast4": 90653397,
  "CardExpMonth": -29381953,
  "CardExpYear": -88288300,
  "BillingPaymentMethodID": -92152947,
  "LastUpdate": "1953-05-09T23:37:14.153Z",
  "GatewayName": "cillum",
  "GatewayID": 98226985
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens/{paymenttokenid}', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "PaymentTokenID": -38013142,
    "CustomerID": 48730608,
    "OrderID": 72245007,
    "CustomerProfileID": "est fugiat nisi sint ",
    "PaymentProfileID": "do deserunt ma",
    "CardLast4": 90653397,
    "CardExpMonth": -29381953,
    "CardExpYear": -88288300,
    "BillingPaymentMethodID": -92152947,
    "LastUpdate": "1953-05-09T23:37:14.153Z",
    "GatewayName": "cillum",
    "GatewayID": 98226985
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens/{paymenttokenid}', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"PaymentTokenID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

This method is used to update a specific payment token in the database. See [Data Structures](#paymenttoken-object) for more information on the PaymentToken object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens/{paymenttokenid}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
paymenttokenid | required | The unique id of the payment token to update.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No payment tokens found.

### Delete a specific payment token by id
> To delete a specific payment token from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens/{id}");
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
  
  using(var response = await httpClient.DeleteAsync("3dCartWebAPI/v1/PaymentTokens/{id}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens/{id}');

request.setRequestHeader('Content-Type', 'application/xml');
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
  :content_type => 'application/xml',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.delete 'https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens/{id}', headers
puts response
```

```python
from urllib2 import Request, urlopen

headers = {
  'Content-Type': 'application/xml',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens/{id}', headers=headers)
request.get_method = lambda: 'DELETE'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"PaymentTokenID",
    "Value":"1234",
    "Status":"200",
    "Message":"deleted successfully",
  }
]
```

This method is used to delete a specific payment token in the database.

#### HTTP Request
`DELETE https://apirest.3dcart.com/3dCartWebAPI/v1/PaymentTokens/{id}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
id | required | The unique id of the payment token to delete.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No payment tokens found.