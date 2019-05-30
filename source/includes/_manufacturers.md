# Manufacturer
Manufacturer details can be added to a 3dcart store and essentially create an added level of navigation to the store. Along with being able to browse the store by category and price ranges, Manufacturer listings also give customers the advantage of browsing items based on brand names!

## Manufacturer

### Create a manufacturer
> To create a Manufacturer in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#manufacturer-object) for more information on the Manufacturer object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"ManufacturerID\": -16446886,
  \"ManufacturerName\": \"e\",
  \"Logo\": \"quis dese\",
  \"Sorting\": -20672828,
  \"Header\": \"laboris deserunt in minim mollit\",
  \"Website\": \"reprehenderit proident amet Duis\",
  \"UserID\": \"qui laborum su\",
  \"LastUpdate\": \"1982-05-02T09:20:10.518Z\",
  \"PageTitle\": \"magna cupidatat nisi do\",
  \"MetaTags\": \"aliquip consequat ea dolore\",
  \"RedirectURL\": \"consectetur adipisicing Lorem Excepteur\",
  \"FileName\": \"inci\"
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
  
    using (var content = new StringContent("{  \"ManufacturerID\": -16446886,  \"ManufacturerName\": \"e\",  \"Logo\": \"quis dese\",  \"Sorting\": -20672828,  \"Header\": \"laboris deserunt in minim mollit\",  \"Website\": \"reprehenderit proident amet Duis\",  \"UserID\": \"qui laborum su\",  \"LastUpdate\": \"1982-05-02T09:20:10.518Z\",  \"PageTitle\": \"magna cupidatat nisi do\",  \"MetaTags\": \"aliquip consequat ea dolore\",  \"RedirectURL\": \"consectetur adipisicing Lorem Excepteur\",  \"FileName\": \"inci\"}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("3dCartWebAPI/v1/Manufacturers", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers');

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
  'ManufacturerID': -16446886,
  'ManufacturerName': 'e',
  'Logo': 'quis dese',
  'Sorting': -20672828,
  'Header': 'laboris deserunt in minim mollit',
  'Website': 'reprehenderit proident amet Duis',
  'UserID': 'qui laborum su',
  'LastUpdate': '1982-05-02T09:20:10.518Z',
  'PageTitle': 'magna cupidatat nisi do',
  'MetaTags': 'aliquip consequat ea dolore',
  'RedirectURL': 'consectetur adipisicing Lorem Excepteur',
  'FileName': 'inci'
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "ManufacturerID": -16446886,
  "ManufacturerName": "e",
  "Logo": "quis dese",
  "Sorting": -20672828,
  "Header": "laboris deserunt in minim mollit",
  "Website": "reprehenderit proident amet Duis",
  "UserID": "qui laborum su",
  "LastUpdate": "1982-05-02T09:20:10.518Z",
  "PageTitle": "magna cupidatat nisi do",
  "MetaTags": "aliquip consequat ea dolore",
  "RedirectURL": "consectetur adipisicing Lorem Excepteur",
  "FileName": "inci"
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.post 'https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "ManufacturerID": -16446886,
    "ManufacturerName": "e",
    "Logo": "quis dese",
    "Sorting": -20672828,
    "Header": "laboris deserunt in minim mollit",
    "Website": "reprehenderit proident amet Duis",
    "UserID": "qui laborum su",
    "LastUpdate": "1982-05-02T09:20:10.518Z",
    "PageTitle": "magna cupidatat nisi do",
    "MetaTags": "aliquip consequat ea dolore",
    "RedirectURL": "consectetur adipisicing Lorem Excepteur",
    "FileName": "inci"
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers', data=values, headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"ManufacturerID",
    "Value":"1234",
    "Status":"201",
    "Message":"Created successfully",
  }
]
```

This method is used to create a Manufacturer in the store. See [Data Structures](#manufacturer-object) for more information on the Manufacturer object.

#### HTTP Request
`POST https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers`

#### Responses and Errors

Response Code | Description
------------- | ---------
201 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.

### Retrieve a list of all Manufacturers
> To retrieve a list of all Manufacturers from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers?limit=&offset=&manufacturer=&countonly=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Manufacturers"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers?limit=&offset=&manufacturer=&countonly=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers?limit=&offset=&manufacturer=&countonly=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers?limit=&offset=&manufacturer=&countonly=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#manufacturer-object) for more information on the Manufacturer object):

```json
[
  {
    "ManufacturerID": 1,
    "ManufacturerName": "sample string 1",
    "Logo": "sample string 2",
    "Sorting": 1,
    "Header": "sample string 3",
    "Website": "sample string 4",
    "UserID": "sample string 5",
    "LastUpdate": "03/12/2019 15:31",
    "PageTitle": "sample string 6",
    "MetaTags": "sample string 7",
    "RedirectURL": "sample string 8",
    "FileName": "sample string 9"
  },
  {
    "ManufacturerID": 1,
    "ManufacturerName": "sample string 1",
    "Logo": "sample string 2",
    "Sorting": 1,
    "Header": "sample string 3",
    "Website": "sample string 4",
    "UserID": "sample string 5",
    "LastUpdate": "03/12/2019 15:31",
    "PageTitle": "sample string 6",
    "MetaTags": "sample string 7",
    "RedirectURL": "sample string 8",
    "FileName": "sample string 9"
  }
]
```


#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
limit | optional | Maximum number of items that can be returned
offset | optional | Starting point for the return data
manufacturer | optional | The manufacturer name
countonly | optional | Count the number of rows only

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No manufacturers found.

### Retrieve a specific manufacturer by id
> To retrieve a Manufacturer from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers/{id}");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Manufacturers/{id}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers/{id}');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers/{id}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers/{id}', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#manufacturer-object) for more information on the Manufacturer object):

```json
[
  {
    "ManufacturerID": 1,
    "ManufacturerName": "sample string 1",
    "Logo": "sample string 2",
    "Sorting": 1,
    "Header": "sample string 3",
    "Website": "sample string 4",
    "UserID": "sample string 5",
    "LastUpdate": "03/12/2019 15:31",
    "PageTitle": "sample string 6",
    "MetaTags": "sample string 7",
    "RedirectURL": "sample string 8",
    "FileName": "sample string 9"
  },
  {
    "ManufacturerID": 1,
    "ManufacturerName": "sample string 1",
    "Logo": "sample string 2",
    "Sorting": 1,
    "Header": "sample string 3",
    "Website": "sample string 4",
    "UserID": "sample string 5",
    "LastUpdate": "03/12/2019 15:31",
    "PageTitle": "sample string 6",
    "MetaTags": "sample string 7",
    "RedirectURL": "sample string 8",
    "FileName": "sample string 9"
  }
]
```

This method is used to retrieve a specific Manufacturer by id. See [Data Structures](#manufacturer-object) for more information on the Manufacturer object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers/{id}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
id | required | The id of the manufacturer to retrieve


#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No manufacturers found.


### Update a list of manufacturers
> To update a list of manufacturers in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#manufacturer-object) for more information on the Manufacturer object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "[
  {
    \"ManufacturerID\": -5312624,
    \"ManufacturerName\": \"in\",
    \"Logo\": \"dolore incididunt\",
    \"Sorting\": -56740698,
    \"Header\": \"nisi tempor ut\",
    \"Website\": \"ad d\",
    \"UserID\": \"nulla exercitation reprehende\",
    \"LastUpdate\": \"2003-08-25T01:18:29.858Z\",
    \"PageTitle\": \"dolore occaecat Duis\",
    \"MetaTags\": \"enim veniam\",
    \"RedirectURL\": \"Lorem sint dolore veniam\",
    \"FileName\": \"eu et in amet\"
  },
  {
    \"ManufacturerID\": 86159187,
    \"ManufacturerName\": \"magna cupidatat Lo\",
    \"Logo\": \"culpa nostrud cupidatat Excepteur\",
    \"Sorting\": 16604071,
    \"Header\": \"non in nisi minim\",
    \"Website\": \"sint qui in consectetu\",
    \"UserID\": \"U\",
    \"LastUpdate\": \"2009-11-22T20:57:29.073Z\",
    \"PageTitle\": \"labore laborum laboris Lorem\",
    \"MetaTags\": \"voluptate eu\",
    \"RedirectURL\": \"laboris Ut et commodo\",
    \"FileName\": \"Lorem veniam Ut velit in\"
  },
  {
    \"ManufacturerID\": -35267962,
    \"ManufacturerName\": \"officia\",
    \"Logo\": \"sed sunt in nostrud\",
    \"Sorting\": -78508198,
    \"Header\": \"exercitation\",
    \"Website\": \"in do\",
    \"UserID\": \"aute in\",
    \"LastUpdate\": \"1987-06-13T06:59:17.614Z\",
    \"PageTitle\": \"sit commodo sint\",
    \"MetaTags\": \"proident ipsum\",
    \"RedirectURL\": \"dolore ea\",
    \"FileName\": \"in eu consectet\"
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
  
    using (var content = new StringContent("[  {    \"ManufacturerID\": -5312624,    \"ManufacturerName\": \"in\",    \"Logo\": \"dolore incididunt\",    \"Sorting\": -56740698,    \"Header\": \"nisi tempor ut\",    \"Website\": \"ad d\",    \"UserID\": \"nulla exercitation reprehende\",    \"LastUpdate\": \"2003-08-25T01:18:29.858Z\",    \"PageTitle\": \"dolore occaecat Duis\",    \"MetaTags\": \"enim veniam\",    \"RedirectURL\": \"Lorem sint dolore veniam\",    \"FileName\": \"eu et in amet\"  },  {    \"ManufacturerID\": 86159187,    \"ManufacturerName\": \"magna cupidatat Lo\",    \"Logo\": \"culpa nostrud cupidatat Excepteur\",    \"Sorting\": 16604071,    \"Header\": \"non in nisi minim\",    \"Website\": \"sint qui in consectetu\",    \"UserID\": \"U\",    \"LastUpdate\": \"2009-11-22T20:57:29.073Z\",    \"PageTitle\": \"labore laborum laboris Lorem\",    \"MetaTags\": \"voluptate eu\",    \"RedirectURL\": \"laboris Ut et commodo\",    \"FileName\": \"Lorem veniam Ut velit in\"  },  {    \"ManufacturerID\": -35267962,    \"ManufacturerName\": \"officia\",    \"Logo\": \"sed sunt in nostrud\",    \"Sorting\": -78508198,    \"Header\": \"exercitation\",    \"Website\": \"in do\",    \"UserID\": \"aute in\",    \"LastUpdate\": \"1987-06-13T06:59:17.614Z\",    \"PageTitle\": \"sit commodo sint\",    \"MetaTags\": \"proident ipsum\",    \"RedirectURL\": \"dolore ea\",    \"FileName\": \"in eu consectet\"  }]", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Manufacturers", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers');

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
    'ManufacturerID': -5312624,
    'ManufacturerName': 'in',
    'Logo': 'dolore incididunt',
    'Sorting': -56740698,
    'Header': 'nisi tempor ut',
    'Website': 'ad d',
    'UserID': 'nulla exercitation reprehende',
    'LastUpdate': '2003-08-25T01:18:29.858Z',
    'PageTitle': 'dolore occaecat Duis',
    'MetaTags': 'enim veniam',
    'RedirectURL': 'Lorem sint dolore veniam',
    'FileName': 'eu et in amet'
  },
  {
    'ManufacturerID': 86159187,
    'ManufacturerName': 'magna cupidatat Lo',
    'Logo': 'culpa nostrud cupidatat Excepteur',
    'Sorting': 16604071,
    'Header': 'non in nisi minim',
    'Website': 'sint qui in consectetu',
    'UserID': 'U',
    'LastUpdate': '2009-11-22T20:57:29.073Z',
    'PageTitle': 'labore laborum laboris Lorem',
    'MetaTags': 'voluptate eu',
    'RedirectURL': 'laboris Ut et commodo',
    'FileName': 'Lorem veniam Ut velit in'
  },
  {
    'ManufacturerID': -35267962,
    'ManufacturerName': 'officia',
    'Logo': 'sed sunt in nostrud',
    'Sorting': -78508198,
    'Header': 'exercitation',
    'Website': 'in do',
    'UserID': 'aute in',
    'LastUpdate': '1987-06-13T06:59:17.614Z',
    'PageTitle': 'sit commodo sint',
    'MetaTags': 'proident ipsum',
    'RedirectURL': 'dolore ea',
    'FileName': 'in eu consectet'
  }
];

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '[
  {
    "ManufacturerID": -5312624,
    "ManufacturerName": "in",
    "Logo": "dolore incididunt",
    "Sorting": -56740698,
    "Header": "nisi tempor ut",
    "Website": "ad d",
    "UserID": "nulla exercitation reprehende",
    "LastUpdate": "2003-08-25T01:18:29.858Z",
    "PageTitle": "dolore occaecat Duis",
    "MetaTags": "enim veniam",
    "RedirectURL": "Lorem sint dolore veniam",
    "FileName": "eu et in amet"
  },
  {
    "ManufacturerID": 86159187,
    "ManufacturerName": "magna cupidatat Lo",
    "Logo": "culpa nostrud cupidatat Excepteur",
    "Sorting": 16604071,
    "Header": "non in nisi minim",
    "Website": "sint qui in consectetu",
    "UserID": "U",
    "LastUpdate": "2009-11-22T20:57:29.073Z",
    "PageTitle": "labore laborum laboris Lorem",
    "MetaTags": "voluptate eu",
    "RedirectURL": "laboris Ut et commodo",
    "FileName": "Lorem veniam Ut velit in"
  },
  {
    "ManufacturerID": -35267962,
    "ManufacturerName": "officia",
    "Logo": "sed sunt in nostrud",
    "Sorting": -78508198,
    "Header": "exercitation",
    "Website": "in do",
    "UserID": "aute in",
    "LastUpdate": "1987-06-13T06:59:17.614Z",
    "PageTitle": "sit commodo sint",
    "MetaTags": "proident ipsum",
    "RedirectURL": "dolore ea",
    "FileName": "in eu consectet"
  }
]'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  [
    {
      "ManufacturerID": -5312624,
      "ManufacturerName": "in",
      "Logo": "dolore incididunt",
      "Sorting": -56740698,
      "Header": "nisi tempor ut",
      "Website": "ad d",
      "UserID": "nulla exercitation reprehende",
      "LastUpdate": "2003-08-25T01:18:29.858Z",
      "PageTitle": "dolore occaecat Duis",
      "MetaTags": "enim veniam",
      "RedirectURL": "Lorem sint dolore veniam",
      "FileName": "eu et in amet"
    },
    {
      "ManufacturerID": 86159187,
      "ManufacturerName": "magna cupidatat Lo",
      "Logo": "culpa nostrud cupidatat Excepteur",
      "Sorting": 16604071,
      "Header": "non in nisi minim",
      "Website": "sint qui in consectetu",
      "UserID": "U",
      "LastUpdate": "2009-11-22T20:57:29.073Z",
      "PageTitle": "labore laborum laboris Lorem",
      "MetaTags": "voluptate eu",
      "RedirectURL": "laboris Ut et commodo",
      "FileName": "Lorem veniam Ut velit in"
    },
    {
      "ManufacturerID": -35267962,
      "ManufacturerName": "officia",
      "Logo": "sed sunt in nostrud",
      "Sorting": -78508198,
      "Header": "exercitation",
      "Website": "in do",
      "UserID": "aute in",
      "LastUpdate": "1987-06-13T06:59:17.614Z",
      "PageTitle": "sit commodo sint",
      "MetaTags": "proident ipsum",
      "RedirectURL": "dolore ea",
      "FileName": "in eu consectet"
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"ManufacturerID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```


This method is used to update multiple manufacturers in the database. No URL parameters should be included. See [Data Structures](#manufacturer-object) for more information on the Manufacturer object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers`

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No manufacturers found.


### Update a specific manufacturer by id
> To update a specific manufacturer in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#manufacturer-object) for more information on the Manufacturer object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers/{manufacturerid}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"ManufacturerID\": -24120948,
  \"ManufacturerName\": \"occaecat exercitation\",
  \"Logo\": \"qui occaecat consequat\",
  \"Sorting\": -83386874,
  \"Header\": \"pariatur nostrud magna id\",
  \"Website\": \"nostrud irure\",
  \"UserID\": \"Excepteur tempor amet ad\",
  \"LastUpdate\": \"2003-05-16T07:00:30.411Z\",
  \"PageTitle\": \"minim\",
  \"MetaTags\": \"adipisicing\",
  \"RedirectURL\": \"eiusmod est Excepteur\",
  \"FileName\": \"reprehenderit laborum\"
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
  
    using (var content = new StringContent("{  \"ManufacturerID\": -24120948,  \"ManufacturerName\": \"occaecat exercitation\",  \"Logo\": \"qui occaecat consequat\",  \"Sorting\": -83386874,  \"Header\": \"pariatur nostrud magna id\",  \"Website\": \"nostrud irure\",  \"UserID\": \"Excepteur tempor amet ad\",  \"LastUpdate\": \"2003-05-16T07:00:30.411Z\",  \"PageTitle\": \"minim\",  \"MetaTags\": \"adipisicing\",  \"RedirectURL\": \"eiusmod est Excepteur\",  \"FileName\": \"reprehenderit laborum\"}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Manufacturers/{manufacturerid}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers/{manufacturerid}');

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
  'ManufacturerID': -24120948,
  'ManufacturerName': 'occaecat exercitation',
  'Logo': 'qui occaecat consequat',
  'Sorting': -83386874,
  'Header': 'pariatur nostrud magna id',
  'Website': 'nostrud irure',
  'UserID': 'Excepteur tempor amet ad',
  'LastUpdate': '2003-05-16T07:00:30.411Z',
  'PageTitle': 'minim',
  'MetaTags': 'adipisicing',
  'RedirectURL': 'eiusmod est Excepteur',
  'FileName': 'reprehenderit laborum'
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "ManufacturerID": -24120948,
  "ManufacturerName": "occaecat exercitation",
  "Logo": "qui occaecat consequat",
  "Sorting": -83386874,
  "Header": "pariatur nostrud magna id",
  "Website": "nostrud irure",
  "UserID": "Excepteur tempor amet ad",
  "LastUpdate": "2003-05-16T07:00:30.411Z",
  "PageTitle": "minim",
  "MetaTags": "adipisicing",
  "RedirectURL": "eiusmod est Excepteur",
  "FileName": "reprehenderit laborum"
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers/{manufacturerid}', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "ManufacturerID": -24120948,
    "ManufacturerName": "occaecat exercitation",
    "Logo": "qui occaecat consequat",
    "Sorting": -83386874,
    "Header": "pariatur nostrud magna id",
    "Website": "nostrud irure",
    "UserID": "Excepteur tempor amet ad",
    "LastUpdate": "2003-05-16T07:00:30.411Z",
    "PageTitle": "minim",
    "MetaTags": "adipisicing",
    "RedirectURL": "eiusmod est Excepteur",
    "FileName": "reprehenderit laborum"
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers/{manufacturerid}', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"ManufacturerID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

This method is used to update a single manufacturer record in the database. The {manufacturerid} parameter specifies which manufacturer record to update. See [Data Structures](#manufacturer-object) for more information on the Manufacturer object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers/{manufacturerid}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
manufacturerid | required | The id of the manufacturer to update


#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No manufacturers found.


### Delete a manufacturer
> To delete a manufacturer from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers/{id}");
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
  
  using(var response = await httpClient.DeleteAsync("3dCartWebAPI/v1/Manufacturers/{id}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript

var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers/{id}');

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
  :content_type => 'application/xml',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.delete 'https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers/{id}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers/{id}', headers=headers)
request.get_method = lambda: 'DELETE'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"ManufacturerID",
    "Value":"1234",
    "Status":"200",
    "Message":"Deleted successfully",
  }
]
```

#### HTTP Request
`DELETE https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers/{id}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
id | required | The id of the manufacturer to delete

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No manufacturers found.

