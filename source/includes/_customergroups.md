#  CustomerGroups
The Customer Groups web service allows an application to create, retrieve, update and delete Customer Groups. 3dcart allows merchants to create different pricing levels and customer groups for their store. This is a method by which a merchant can offer a different pricing structure to their customers based on which customer group they belong to. A common example of customer groups is a retail/wholesale type of set up, where regular customers are able to purchase products at the regular price, but customers who purchase higher volumes of products are able to purchase those same products at reduced wholesale prices, provided they belong to that special pricing group. Please see our Knowledgebase article on [Customer Groups](https://support.3dcart.com/Knowledgebase/Article/view/406) for more information on their usage.

## Customer Groups 

### Create a new Customer Group
> To create a new Customer Group in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#customergroup-object) for more information on the CustomerGroup object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"CustomerGroupID\": -75462011,
  \"Name\": \"Excepteur reprehenderit mollit\",
  \"Description\": \"aliquip exer\",
  \"MinimumOrder\": 34158822.957761675,
  \"NonTaxable\": true,
  \"AllowRegistration\": false,
  \"DisableRewardPoints\": true,
  \"AutoApprove\": false,
  \"RegistrationMessage\": \"aute enim commodo eiusmod\",
  \"PriceLevel\": -48512740
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
  
    using (var content = new StringContent("{  \"CustomerGroupID\": -75462011,  \"Name\": \"Excepteur reprehenderit mollit\",  \"Description\": \"aliquip exer\",  \"MinimumOrder\": 34158822.957761675,  \"NonTaxable\": true,  \"AllowRegistration\": false,  \"DisableRewardPoints\": true,  \"AutoApprove\": false,  \"RegistrationMessage\": \"aute enim commodo eiusmod\",  \"PriceLevel\": -48512740}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("3dCartWebAPI/v1/CustomerGroups", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups');

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
  'CustomerGroupID': -75462011,
  'Name': 'Excepteur reprehenderit mollit',
  'Description': 'aliquip exer',
  'MinimumOrder': 34158822.957761675,
  'NonTaxable': true,
  'AllowRegistration': false,
  'DisableRewardPoints': true,
  'AutoApprove': false,
  'RegistrationMessage': 'aute enim commodo eiusmod',
  'PriceLevel': -48512740
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "CustomerGroupID": -75462011,
  "Name": "Excepteur reprehenderit mollit",
  "Description": "aliquip exer",
  "MinimumOrder": 34158822.957761675,
  "NonTaxable": true,
  "AllowRegistration": false,
  "DisableRewardPoints": true,
  "AutoApprove": false,
  "RegistrationMessage": "aute enim commodo eiusmod",
  "PriceLevel": -48512740
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.post 'https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "CustomerGroupID": -75462011,
    "Name": "Excepteur reprehenderit mollit",
    "Description": "aliquip exer",
    "MinimumOrder": 34158822.957761675,
    "NonTaxable": true,
    "AllowRegistration": false,
    "DisableRewardPoints": true,
    "AutoApprove": false,
    "RegistrationMessage": "aute enim commodo eiusmod",
    "PriceLevel": -48512740
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups', data=values, headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"CustomerGroupID",
    "Value":"29",
    "Status":"201",
    "Message":"Created successfully",
  }
]
```

This method adds a new customer group to the system. See [Data Structures](#customergroup-object) for more information on the CustomerGroup object.

#### HTTP Request
`POST https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups`

#### Responses and Errors

Response Code | Description
------------- | ---------
201 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.

### Retrieve a list of all Customer Groups
> To retrieve a list of all Customer Groups from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups?limit=&offset=&countonly=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/CustomerGroups"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups?limit=&offset=&countonly=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups?limit=&offset=&countonly=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups?limit=&offset=&countonly=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#customergroup-object) for more information on the CustomerGroup object):

```json
[
  {
    "CustomerGroupID": 1,
    "Name": "sample string 1",
    "Description": "sample string 2",
    "MinimumOrder": 1.0,
    "NonTaxable": true,
    "AllowRegistration": true,
    "DisableRewardPoints": true,
    "AutoApprove": true,
    "RegistrationMessage": "sample string 3",
    "PriceLevel": 1
  },
  {
    "CustomerGroupID": 1,
    "Name": "sample string 1",
    "Description": "sample string 2",
    "MinimumOrder": 1.0,
    "NonTaxable": true,
    "AllowRegistration": true,
    "DisableRewardPoints": true,
    "AutoApprove": true,
    "RegistrationMessage": "sample string 3",
    "PriceLevel": 1
  }
]
```

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups`

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
404 | There are no Customer Groups.

### Retrieve a specific Customer Group by id
> To retrieve a specific Customer Group from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups/{id}");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/CustomerGroups/{id}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups/{id}');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups/{id}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups/{id}', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#customergroup-object) for more information on the CustomerGroup object):

```json
[
  {
    "CustomerGroupID": 1,
    "Name": "sample string 1",
    "Description": "sample string 2",
    "MinimumOrder": 1.0,
    "NonTaxable": true,
    "AllowRegistration": true,
    "DisableRewardPoints": true,
    "AutoApprove": true,
    "RegistrationMessage": "sample string 3",
    "PriceLevel": 1
  },
  {
    "CustomerGroupID": 1,
    "Name": "sample string 1",
    "Description": "sample string 2",
    "MinimumOrder": 1.0,
    "NonTaxable": true,
    "AllowRegistration": true,
    "DisableRewardPoints": true,
    "AutoApprove": true,
    "RegistrationMessage": "sample string 3",
    "PriceLevel": 1
  }
]
```

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups/{id}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
id | required | The ID of the Customer Group

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified Customer Group does not exist.


### Update a list of Customer Groups
> To update a list of Cutsomer Groups in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#customergroup-object) for more information on the CustomerGroup object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "[
  {
    \"CustomerGroupID\": -16732397,
    \"Name\": \"dolore cupidatat adipisicing\",
    \"Description\": \"Lorem laboris\",
    \"MinimumOrder\": 2159148.3678348362,
    \"NonTaxable\": true,
    \"AllowRegistration\": false,
    \"DisableRewardPoints\": false,
    \"AutoApprove\": false,
    \"RegistrationMessage\": \"aliquip deserunt fugiat ad\",
    \"PriceLevel\": 2897868
  },
  {
    \"CustomerGroupID\": -60342449,
    \"Name\": \"enim adipisicing ut ea\",
    \"Description\": \"esse ullamco consectetur\",
    \"MinimumOrder\": -94982155.70143786,
    \"NonTaxable\": false,
    \"AllowRegistration\": false,
    \"DisableRewardPoints\": true,
    \"AutoApprove\": true,
    \"RegistrationMessage\": \"sint consequat qui\",
    \"PriceLevel\": -70139602
  },
  {
    \"CustomerGroupID\": -85007591,
    \"Name\": \"aute qui occae\",
    \"Description\": \"et magna est aliqua\",
    \"MinimumOrder\": -9184586.049891546,
    \"NonTaxable\": false,
    \"AllowRegistration\": false,
    \"DisableRewardPoints\": false,
    \"AutoApprove\": true,
    \"RegistrationMessage\": \"enim esse laboris\",
    \"PriceLevel\": -77983017
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
  
    using (var content = new StringContent("[  {    \"CustomerGroupID\": -16732397,    \"Name\": \"dolore cupidatat adipisicing\",    \"Description\": \"Lorem laboris\",    \"MinimumOrder\": 2159148.3678348362,    \"NonTaxable\": true,    \"AllowRegistration\": false,    \"DisableRewardPoints\": false,    \"AutoApprove\": false,    \"RegistrationMessage\": \"aliquip deserunt fugiat ad\",    \"PriceLevel\": 2897868  },  {    \"CustomerGroupID\": -60342449,    \"Name\": \"enim adipisicing ut ea\",    \"Description\": \"esse ullamco consectetur\",    \"MinimumOrder\": -94982155.70143786,    \"NonTaxable\": false,    \"AllowRegistration\": false,    \"DisableRewardPoints\": true,    \"AutoApprove\": true,    \"RegistrationMessage\": \"sint consequat qui\",    \"PriceLevel\": -70139602  },  {    \"CustomerGroupID\": -85007591,    \"Name\": \"aute qui occae\",    \"Description\": \"et magna est aliqua\",    \"MinimumOrder\": -9184586.049891546,    \"NonTaxable\": false,    \"AllowRegistration\": false,    \"DisableRewardPoints\": false,    \"AutoApprove\": true,    \"RegistrationMessage\": \"enim esse laboris\",    \"PriceLevel\": -77983017  }]", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/CustomerGroups", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups');

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
    'CustomerGroupID': -16732397,
    'Name': 'dolore cupidatat adipisicing',
    'Description': 'Lorem laboris',
    'MinimumOrder': 2159148.3678348362,
    'NonTaxable': true,
    'AllowRegistration': false,
    'DisableRewardPoints': false,
    'AutoApprove': false,
    'RegistrationMessage': 'aliquip deserunt fugiat ad',
    'PriceLevel': 2897868
  },
  {
    'CustomerGroupID': -60342449,
    'Name': 'enim adipisicing ut ea',
    'Description': 'esse ullamco consectetur',
    'MinimumOrder': -94982155.70143786,
    'NonTaxable': false,
    'AllowRegistration': false,
    'DisableRewardPoints': true,
    'AutoApprove': true,
    'RegistrationMessage': 'sint consequat qui',
    'PriceLevel': -70139602
  },
  {
    'CustomerGroupID': -85007591,
    'Name': 'aute qui occae',
    'Description': 'et magna est aliqua',
    'MinimumOrder': -9184586.049891546,
    'NonTaxable': false,
    'AllowRegistration': false,
    'DisableRewardPoints': false,
    'AutoApprove': true,
    'RegistrationMessage': 'enim esse laboris',
    'PriceLevel': -77983017
  }
];

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '[
  {
    "CustomerGroupID": -16732397,
    "Name": "dolore cupidatat adipisicing",
    "Description": "Lorem laboris",
    "MinimumOrder": 2159148.3678348362,
    "NonTaxable": true,
    "AllowRegistration": false,
    "DisableRewardPoints": false,
    "AutoApprove": false,
    "RegistrationMessage": "aliquip deserunt fugiat ad",
    "PriceLevel": 2897868
  },
  {
    "CustomerGroupID": -60342449,
    "Name": "enim adipisicing ut ea",
    "Description": "esse ullamco consectetur",
    "MinimumOrder": -94982155.70143786,
    "NonTaxable": false,
    "AllowRegistration": false,
    "DisableRewardPoints": true,
    "AutoApprove": true,
    "RegistrationMessage": "sint consequat qui",
    "PriceLevel": -70139602
  },
  {
    "CustomerGroupID": -85007591,
    "Name": "aute qui occae",
    "Description": "et magna est aliqua",
    "MinimumOrder": -9184586.049891546,
    "NonTaxable": false,
    "AllowRegistration": false,
    "DisableRewardPoints": false,
    "AutoApprove": true,
    "RegistrationMessage": "enim esse laboris",
    "PriceLevel": -77983017
  }
]'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  [
    {
      "CustomerGroupID": -16732397,
      "Name": "dolore cupidatat adipisicing",
      "Description": "Lorem laboris",
      "MinimumOrder": 2159148.3678348362,
      "NonTaxable": true,
      "AllowRegistration": false,
      "DisableRewardPoints": false,
      "AutoApprove": false,
      "RegistrationMessage": "aliquip deserunt fugiat ad",
      "PriceLevel": 2897868
    },
    {
      "CustomerGroupID": -60342449,
      "Name": "enim adipisicing ut ea",
      "Description": "esse ullamco consectetur",
      "MinimumOrder": -94982155.70143786,
      "NonTaxable": false,
      "AllowRegistration": false,
      "DisableRewardPoints": true,
      "AutoApprove": true,
      "RegistrationMessage": "sint consequat qui",
      "PriceLevel": -70139602
    },
    {
      "CustomerGroupID": -85007591,
      "Name": "aute qui occae",
      "Description": "et magna est aliqua",
      "MinimumOrder": -9184586.049891546,
      "NonTaxable": false,
      "AllowRegistration": false,
      "DisableRewardPoints": false,
      "AutoApprove": true,
      "RegistrationMessage": "enim esse laboris",
      "PriceLevel": -77983017
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"CustomerGroupID",
    "Value":"12",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

This method updates a collection of customer groups in the database. No URL parameters should be included. See [Data Structures](#customergroup-object) for more information on the CustomerGroup object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups`

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified Customer Group does not exist.

### Update a specific Customer Group by id
> To update a specific Customer Group in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#customergroup-object) for more information on the CustomerGroup object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups/{customergroupid}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"CustomerGroupID\": -91220762,
  \"Name\": \"veniam\",
  \"Description\": \"labore a\",
  \"MinimumOrder\": 94622207.44286153,
  \"NonTaxable\": true,
  \"AllowRegistration\": true,
  \"DisableRewardPoints\": false,
  \"AutoApprove\": true,
  \"RegistrationMessage\": \"labore u\",
  \"PriceLevel\": -9304683
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
  
    using (var content = new StringContent("{  \"CustomerGroupID\": -91220762,  \"Name\": \"veniam\",  \"Description\": \"labore a\",  \"MinimumOrder\": 94622207.44286153,  \"NonTaxable\": true,  \"AllowRegistration\": true,  \"DisableRewardPoints\": false,  \"AutoApprove\": true,  \"RegistrationMessage\": \"labore u\",  \"PriceLevel\": -9304683}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/CustomerGroups/{customergroupid}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups/{customergroupid}');

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
  'CustomerGroupID': -91220762,
  'Name': 'veniam',
  'Description': 'labore a',
  'MinimumOrder': 94622207.44286153,
  'NonTaxable': true,
  'AllowRegistration': true,
  'DisableRewardPoints': false,
  'AutoApprove': true,
  'RegistrationMessage': 'labore u',
  'PriceLevel': -9304683
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "CustomerGroupID": -91220762,
  "Name": "veniam",
  "Description": "labore a",
  "MinimumOrder": 94622207.44286153,
  "NonTaxable": true,
  "AllowRegistration": true,
  "DisableRewardPoints": false,
  "AutoApprove": true,
  "RegistrationMessage": "labore u",
  "PriceLevel": -9304683
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups/{customergroupid}', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "CustomerGroupID": -91220762,
    "Name": "veniam",
    "Description": "labore a",
    "MinimumOrder": 94622207.44286153,
    "NonTaxable": true,
    "AllowRegistration": true,
    "DisableRewardPoints": false,
    "AutoApprove": true,
    "RegistrationMessage": "labore u",
    "PriceLevel": -9304683
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups/{customergroupid}', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"CustomerGroupID",
    "Value":"12",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

This method updates a specific Customer Group. See [Data Structures](#customergroup-object) for more information on the CustomerGroup object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups/{customergroupid}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
customergroupid | required | The ID of the Customer Group

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified Customer Group does not exist.








### Delete a customer group by id
> To delete a Customer Group from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups/{id}");
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
  
  using(var response = await httpClient.DeleteAsync("3dCartWebAPI/v1/CustomerGroups/{id}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups/{id}');

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

response = RestClient.delete 'https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups/{id}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups/{id}', headers=headers)
request.get_method = lambda: 'DELETE'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"CustomerGroupID",
    "Value":"12",
    "Status":"200",
    "Message":"Deleted successfully",
  }
]
```

Deletes a customer group in the system.

#### HTTP Request
`DELETE https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups/{id}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
id | required | The ID of the Customer Group

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified Customer Group does not exist.