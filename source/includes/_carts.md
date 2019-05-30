# Carts
The Carts web service allows an application to interact with the 3dcart Shopping Cart platform in order Create, Retrieve, Update, and Delete "shopping carts" (i.e. orders). The application is able to create and modify the basic components of an order, such as billing address, shipping address, and the items and their quantities being purchased. The `CheckoutURL` value can be used to redirect the end user to a secure checkout page to complete their purchase.

## Cart

### Create a cart

> To add a new Cart to the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Cart");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"CustomerId\": -80365023,
  \"BillingFirstName\": \"culpa ut\",
  \"BillingLastName\": \"esse tempor ut\",
  \"BillingCompany\": \"id\",
  \"BillingAddress\": \"laborum veniam in\",
  \"BillingAddress2\": \"ipsum e\",
  \"BillingCity\": \"labore do sint\",
  \"BillingState\": \"ni\",
  \"BillingZipCode\": \"dolo\",
  \"BillingCountry\": \"qui culpa\",
  \"BillingPhoneNumber\": \"eu\",
  \"BillingEmail\": \"laboris veniam sed aliquip Ut\",
  \"ShipmentFirstName\": \"dolore Excepteur\",
  \"ShipmentLastName\": \"aliquip ipsum cillum culpa tempor\",
  \"ShipmentCompany\": \"in velit magna est\",
  \"ShipmentAddress\": \"proident sunt adipisicing minim id\",
  \"ShipmentAddress2\": \"cupidatat commodo\",
  \"ShipmentCity\": \"incididunt \",
  \"ShipmentState\": \"consequat d\",
  \"ShipmentZipCode\": \"Ut voluptate et pr\",
  \"ShipmentCountry\": \"aute \",
  \"ShipmentPhone\": \"aliquip exercitation qui deserunt\",
  \"ShipmentEmail\": \"fugiat sint\"
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
  
    using (var content = new StringContent("{  \"CustomerId\": -80365023,  \"BillingFirstName\": \"culpa ut\",  \"BillingLastName\": \"esse tempor ut\",  \"BillingCompany\": \"id\",  \"BillingAddress\": \"laborum veniam in\",  \"BillingAddress2\": \"ipsum e\",  \"BillingCity\": \"labore do sint\",  \"BillingState\": \"ni\",  \"BillingZipCode\": \"dolo\",  \"BillingCountry\": \"qui culpa\",  \"BillingPhoneNumber\": \"eu\",  \"BillingEmail\": \"laboris veniam sed aliquip Ut\",  \"ShipmentFirstName\": \"dolore Excepteur\",  \"ShipmentLastName\": \"aliquip ipsum cillum culpa tempor\",  \"ShipmentCompany\": \"in velit magna est\",  \"ShipmentAddress\": \"proident sunt adipisicing minim id\",  \"ShipmentAddress2\": \"cupidatat commodo\",  \"ShipmentCity\": \"incididunt \",  \"ShipmentState\": \"consequat d\",  \"ShipmentZipCode\": \"Ut voluptate et pr\",  \"ShipmentCountry\": \"aute \",  \"ShipmentPhone\": \"aliquip exercitation qui deserunt\",  \"ShipmentEmail\": \"fugiat sint\"}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("3dCartWebAPI/v1/Cart", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Cart');

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
  'CustomerId': -80365023,
  'BillingFirstName': 'culpa ut',
  'BillingLastName': 'esse tempor ut',
  'BillingCompany': 'id',
  'BillingAddress': 'laborum veniam in',
  'BillingAddress2': 'ipsum e',
  'BillingCity': 'labore do sint',
  'BillingState': 'ni',
  'BillingZipCode': 'dolo',
  'BillingCountry': 'qui culpa',
  'BillingPhoneNumber': 'eu',
  'BillingEmail': 'laboris veniam sed aliquip Ut',
  'ShipmentFirstName': 'dolore Excepteur',
  'ShipmentLastName': 'aliquip ipsum cillum culpa tempor',
  'ShipmentCompany': 'in velit magna est',
  'ShipmentAddress': 'proident sunt adipisicing minim id',
  'ShipmentAddress2': 'cupidatat commodo',
  'ShipmentCity': 'incididunt ',
  'ShipmentState': 'consequat d',
  'ShipmentZipCode': 'Ut voluptate et pr',
  'ShipmentCountry': 'aute ',
  'ShipmentPhone': 'aliquip exercitation qui deserunt',
  'ShipmentEmail': 'fugiat sint'
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "CustomerId": -80365023,
  "BillingFirstName": "culpa ut",
  "BillingLastName": "esse tempor ut",
  "BillingCompany": "id",
  "BillingAddress": "laborum veniam in",
  "BillingAddress2": "ipsum e",
  "BillingCity": "labore do sint",
  "BillingState": "ni",
  "BillingZipCode": "dolo",
  "BillingCountry": "qui culpa",
  "BillingPhoneNumber": "eu",
  "BillingEmail": "laboris veniam sed aliquip Ut",
  "ShipmentFirstName": "dolore Excepteur",
  "ShipmentLastName": "aliquip ipsum cillum culpa tempor",
  "ShipmentCompany": "in velit magna est",
  "ShipmentAddress": "proident sunt adipisicing minim id",
  "ShipmentAddress2": "cupidatat commodo",
  "ShipmentCity": "incididunt ",
  "ShipmentState": "consequat d",
  "ShipmentZipCode": "Ut voluptate et pr",
  "ShipmentCountry": "aute ",
  "ShipmentPhone": "aliquip exercitation qui deserunt",
  "ShipmentEmail": "fugiat sint"
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.post 'https://apirest.3dcart.com/3dCartWebAPI/v1/Cart', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "CustomerId": -80365023,
    "BillingFirstName": "culpa ut",
    "BillingLastName": "esse tempor ut",
    "BillingCompany": "id",
    "BillingAddress": "laborum veniam in",
    "BillingAddress2": "ipsum e",
    "BillingCity": "labore do sint",
    "BillingState": "ni",
    "BillingZipCode": "dolo",
    "BillingCountry": "qui culpa",
    "BillingPhoneNumber": "eu",
    "BillingEmail": "laboris veniam sed aliquip Ut",
    "ShipmentFirstName": "dolore Excepteur",
    "ShipmentLastName": "aliquip ipsum cillum culpa tempor",
    "ShipmentCompany": "in velit magna est",
    "ShipmentAddress": "proident sunt adipisicing minim id",
    "ShipmentAddress2": "cupidatat commodo",
    "ShipmentCity": "incididunt ",
    "ShipmentState": "consequat d",
    "ShipmentZipCode": "Ut voluptate et pr",
    "ShipmentCountry": "aute ",
    "ShipmentPhone": "aliquip exercitation qui deserunt",
    "ShipmentEmail": "fugiat sint"
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Cart', data=values, headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"OrderKey",
    "Value":"6F027F81ggx48to",
    "Status":"201",
    "Message":"Created successfully",
  }
]
```

This method allows you to create a new Cart on the merchant's store. A successful request will return a response with JSON in the body:

<code>
[
  {
    "Key":"OrderKey",
    "Value":"6F027F81ggx48to",
    "Status":"201",
    "Message":"Created successfully",
  }
]
</code>

The OrderKey Value (e.g. `6F027F81ggx48to`) is then used to retrieve, update, or delete the Cart on the merchant's store.

<aside class="notice">The OrderKey value is a required parameter for all other Cart methods, so make sure to retain this value.</aside>

#### HTTP Request
`POST https://apirest.3dcart.com/3dCartWebAPI/v1/Cart`

#### Responses and Errors

Response Code | Description
------------- | ---------
201 | Successful response code. The Cart has been created.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.

### Retrieve a cart 

> To retrieve a Cart from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Cart/{orderkey}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
{
  "CustomerId": 1,
  "BillingFirstName": "sample string 1",
  "BillingLastName": "sample string 2",
  "BillingCompany": "sample string 3",
  "BillingAddress": "sample string 4",
  "BillingAddress2": "sample string 5",
  "BillingCity": "sample string 6",
  "BillingState": "sample string 7",
  "BillingZipCode": "sample string 8",
  "BillingCountry": "sample string 9",
  "BillingPhoneNumber": "sample string 10",
  "BillingEmail": "sample string 11",
  "ShipmentFirstName": "sample string 12",
  "ShipmentLastName": "sample string 13",
  "ShipmentCompany": "sample string 14",
  "ShipmentAddress": "sample string 15",
  "ShipmentAddress2": "sample string 16",
  "ShipmentCity": "sample string 17",
  "ShipmentState": "sample string 18",
  "ShipmentZipCode": "sample string 19",
  "ShipmentCountry": "sample string 20",
  "ShipmentPhone": "sample string 21",
  "ShipmentEmail": "sample string 22"
}
```

#### HTTP Request 
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
orderkey | Required | The orderkey associated with the Cart you wish to retrieve.

#### Responses and Errors

Response Code | Description
------------- | ---------
201 | Successful response code
400 | Bad request. Check request headers/parameters for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The requested Cart does not exist.

### Update a cart 

> To update a Cart in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"CustomerId\": -80365023,
  \"BillingFirstName\": \"culpa ut\",
  \"BillingLastName\": \"esse tempor ut\",
  \"BillingCompany\": \"id\",
  \"BillingAddress\": \"laborum veniam in\",
  \"BillingAddress2\": \"ipsum e\",
  \"BillingCity\": \"labore do sint\",
  \"BillingState\": \"ni\",
  \"BillingZipCode\": \"dolo\",
  \"BillingCountry\": \"qui culpa\",
  \"BillingPhoneNumber\": \"eu\",
  \"BillingEmail\": \"laboris veniam sed aliquip Ut\",
  \"ShipmentFirstName\": \"dolore Excepteur\",
  \"ShipmentLastName\": \"aliquip ipsum cillum culpa tempor\",
  \"ShipmentCompany\": \"in velit magna est\",
  \"ShipmentAddress\": \"proident sunt adipisicing minim id\",
  \"ShipmentAddress2\": \"cupidatat commodo\",
  \"ShipmentCity\": \"incididunt \",
  \"ShipmentState\": \"consequat d\",
  \"ShipmentZipCode\": \"Ut voluptate et pr\",
  \"ShipmentCountry\": \"aute \",
  \"ShipmentPhone\": \"aliquip exercitation qui deserunt\",
  \"ShipmentEmail\": \"fugiat sint\"
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
  
    using (var content = new StringContent("{  \"CustomerId\": -80365023,  \"BillingFirstName\": \"culpa ut\",  \"BillingLastName\": \"esse tempor ut\",  \"BillingCompany\": \"id\",  \"BillingAddress\": \"laborum veniam in\",  \"BillingAddress2\": \"ipsum e\",  \"BillingCity\": \"labore do sint\",  \"BillingState\": \"ni\",  \"BillingZipCode\": \"dolo\",  \"BillingCountry\": \"qui culpa\",  \"BillingPhoneNumber\": \"eu\",  \"BillingEmail\": \"laboris veniam sed aliquip Ut\",  \"ShipmentFirstName\": \"dolore Excepteur\",  \"ShipmentLastName\": \"aliquip ipsum cillum culpa tempor\",  \"ShipmentCompany\": \"in velit magna est\",  \"ShipmentAddress\": \"proident sunt adipisicing minim id\",  \"ShipmentAddress2\": \"cupidatat commodo\",  \"ShipmentCity\": \"incididunt \",  \"ShipmentState\": \"consequat d\",  \"ShipmentZipCode\": \"Ut voluptate et pr\",  \"ShipmentCountry\": \"aute \",  \"ShipmentPhone\": \"aliquip exercitation qui deserunt\",  \"ShipmentEmail\": \"fugiat sint\"}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Cart/{orderkey}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}');

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
  'CustomerId': -80365023,
  'BillingFirstName': 'culpa ut',
  'BillingLastName': 'esse tempor ut',
  'BillingCompany': 'id',
  'BillingAddress': 'laborum veniam in',
  'BillingAddress2': 'ipsum e',
  'BillingCity': 'labore do sint',
  'BillingState': 'ni',
  'BillingZipCode': 'dolo',
  'BillingCountry': 'qui culpa',
  'BillingPhoneNumber': 'eu',
  'BillingEmail': 'laboris veniam sed aliquip Ut',
  'ShipmentFirstName': 'dolore Excepteur',
  'ShipmentLastName': 'aliquip ipsum cillum culpa tempor',
  'ShipmentCompany': 'in velit magna est',
  'ShipmentAddress': 'proident sunt adipisicing minim id',
  'ShipmentAddress2': 'cupidatat commodo',
  'ShipmentCity': 'incididunt ',
  'ShipmentState': 'consequat d',
  'ShipmentZipCode': 'Ut voluptate et pr',
  'ShipmentCountry': 'aute ',
  'ShipmentPhone': 'aliquip exercitation qui deserunt',
  'ShipmentEmail': 'fugiat sint'
};

request.send(JSON.stringify(body));
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

values = '{
  "CustomerId": -80365023,
  "BillingFirstName": "culpa ut",
  "BillingLastName": "esse tempor ut",
  "BillingCompany": "id",
  "BillingAddress": "laborum veniam in",
  "BillingAddress2": "ipsum e",
  "BillingCity": "labore do sint",
  "BillingState": "ni",
  "BillingZipCode": "dolo",
  "BillingCountry": "qui culpa",
  "BillingPhoneNumber": "eu",
  "BillingEmail": "laboris veniam sed aliquip Ut",
  "ShipmentFirstName": "dolore Excepteur",
  "ShipmentLastName": "aliquip ipsum cillum culpa tempor",
  "ShipmentCompany": "in velit magna est",
  "ShipmentAddress": "proident sunt adipisicing minim id",
  "ShipmentAddress2": "cupidatat commodo",
  "ShipmentCity": "incididunt ",
  "ShipmentState": "consequat d",
  "ShipmentZipCode": "Ut voluptate et pr",
  "ShipmentCountry": "aute ",
  "ShipmentPhone": "aliquip exercitation qui deserunt",
  "ShipmentEmail": "fugiat sint"
}'

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Cart', values, headers
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

values = """
  {
    "CustomerId": -80365023,
    "BillingFirstName": "culpa ut",
    "BillingLastName": "esse tempor ut",
    "BillingCompany": "id",
    "BillingAddress": "laborum veniam in",
    "BillingAddress2": "ipsum e",
    "BillingCity": "labore do sint",
    "BillingState": "ni",
    "BillingZipCode": "dolo",
    "BillingCountry": "qui culpa",
    "BillingPhoneNumber": "eu",
    "BillingEmail": "laboris veniam sed aliquip Ut",
    "ShipmentFirstName": "dolore Excepteur",
    "ShipmentLastName": "aliquip ipsum cillum culpa tempor",
    "ShipmentCompany": "in velit magna est",
    "ShipmentAddress": "proident sunt adipisicing minim id",
    "ShipmentAddress2": "cupidatat commodo",
    "ShipmentCity": "incididunt ",
    "ShipmentState": "consequat d",
    "ShipmentZipCode": "Ut voluptate et pr",
    "ShipmentCountry": "aute ",
    "ShipmentPhone": "aliquip exercitation qui deserunt",
    "ShipmentEmail": "fugiat sint"
  }
"""

request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Cart', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"OrderKey",
    "Value":"6F027F81ggx48to",
    "Status":"200",
    "Message":"Updated successfully",
  }
]
							
```

This method is used to update a single cart record in the database. The {orderkey} parameter is required and specifies which cart record to update.

#### HTTP Request 
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
orderkey | Required | The orderkey associated with the Cart you wish to update.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified Cart does not exist.


### Delete a cart

> To delete a Cart from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}");
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
  
  using(var response = await httpClient.DeleteAsync("3dCartWebAPI/v1/Cart/{orderkey}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}');

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

response = RestClient.delete 'https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}', headers=headers)
request.get_method = lambda: 'DELETE'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"OrderKey",
    "Value":"6F027F81ggx48to",
    "Status":"201",
    "Message":"Deleted successfully",
  }
]
```

Delete a specific Cart in the merchant's store.

<aside class="warning">Deletions are permanent, so be careful!</aside>

#### HTTP Request 
`DELETE https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
orderkey | Required | The orderkey associated with the Cart you wish to update.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified Cart does not exist.

## Cart Items

### Create a cart item

> To add an item to a Cart, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}/Item");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"CatalogID\": 79295989,
  \"ItemQuantity\": 74216946.47779638,
  \"ItemOptions\": [
    {
      \"OptionSetID\": 15820261,
      \"OptionID\": 47597762,
      \"OptionValue\": \"dolore fugiat\"
    },
    {
      \"OptionSetID\": 99572501,
      \"OptionID\": 91126905,
      \"OptionValue\": \"deserunt\"
    }
  ]
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
  
    using (var content = new StringContent("{  \"CatalogID\": 79295989,  \"ItemQuantity\": 74216946.47779638,  \"ItemOptions\": [    {      \"OptionSetID\": 15820261,      \"OptionID\": 47597762,      \"OptionValue\": \"dolore fugiat\"    },    {      \"OptionSetID\": 99572501,      \"OptionID\": 91126905,      \"OptionValue\": \"deserunt\"    }  ]}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("3dCartWebAPI/v1/Cart/{orderkey}/Item", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}/Item');

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
  'CatalogID': 79295989,
  'ItemQuantity': 74216946.47779638,
  'ItemOptions': [
    {
      'OptionSetID': 15820261,
      'OptionID': 47597762,
      'OptionValue': 'dolore fugiat'
    },
    {
      'OptionSetID': 99572501,
      'OptionID': 91126905,
      'OptionValue': 'deserunt'
    }
  ]
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "CatalogID": 79295989,
  "ItemQuantity": 74216946.47779638,
  "ItemOptions": [
    {
      "OptionSetID": 15820261,
      "OptionID": 47597762,
      "OptionValue": "dolore fugiat"
    },
    {
      "OptionSetID": 99572501,
      "OptionID": 91126905,
      "OptionValue": "deserunt"
    }
  ]
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.post 'https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}/Item', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "CatalogID": 79295989,
    "ItemQuantity": 74216946.47779638,
    "ItemOptions": [
      {
        "OptionSetID": 15820261,
        "OptionID": 47597762,
        "OptionValue": "dolore fugiat"
      },
      {
        "OptionSetID": 99572501,
        "OptionID": 91126905,
        "OptionValue": "deserunt"
      }
    ]
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}/Item', data=values, headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"CartItemID",
    "Value":"123",
    "Status":"201",
    "Message":"Created successfully",
  }
]
```

Adds a new item to a cart.

#### HTTP Request
`POST https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}/Item`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
orderkey | Required | The orderkey associated with the Cart you wish to update.

#### Responses and Errors

Response Code | Description
------------- | ---------
201 | Successful response code. The cart item has been added.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.

### Update a cart item

> To update a cart item in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}/Item/{cartitemid}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"ItemQuantity\": 8748205.447808474
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
  
    using (var content = new StringContent("{  \"ItemQuantity\": 8748205.447808474}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Cart/{orderkey}/Item/{cartitemid}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}/Item/{cartitemid}');

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
  'ItemQuantity': 8748205.447808474
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "ItemQuantity": 8748205.447808474
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}/Item/{cartitemid}', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "ItemQuantity": 8748205.447808474
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}/Item/{cartitemid}', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"CartItemID",
    "Value":"123",
    "Status":"200",
    "Message":"Updated successfully",
  }
]
```

Updates a specific item within a specific Cart.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}/Item{cartitemid}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
orderkey | Required | The orderkey associated with the Cart you wish to update.
cartitemid | Required | The cartitemid of the item you wish to update. 

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code. Cart item has been updated.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified Cart/Item does not exist.

### Delete a cart item

> To retrieve a Cart from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}/Item/{cartitemid}");
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
  
  using(var response = await httpClient.DeleteAsync("3dCartWebAPI/v1/Cart/{orderkey}/Item/{cartitemid}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}/Item/{cartitemid}');

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

response = RestClient.delete 'https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}/Item/{cartitemid}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}/Item/{cartitemid}', headers=headers)
request.get_method = lambda: 'DELETE'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"CartItemId",
    "Value":"123",
    "Status":"200",
    "Message":"Deleted successfully",
  }
]
```

Deletes an Item from a specific Cart in the merchant's store.

<aside class="warning">Deletions are permanent, so be careful!</aside>

#### HTTP Request
`DELETE https://apirest.3dcart.com/3dCartWebAPI/v1/Cart/{orderkey}/{cartitemid}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
orderkey | Required | The orderkey associated with the Cart where you wish to delete the item.
cartitemid | Required | The cartitemid of the item you wish to delete.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code. Cart item has been deleted.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified Cart and/or Item does not exist.