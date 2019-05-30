# Webhooks
A webhook is a notification that can be posted from a website to another when certain actions are taken/events occur on the originating website. For example, let's say you have an online service for managing orders that accepts webhooks. Using 3dcart's specific webhooks you can trigger a notification to that online service that will send the applicable information from your 3dcart store to the service when an order is placed. The webhook methods allow you to manage webhooks using the REST API.

## Webhooks

### Create a new webhook
> To create a new webhook, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#webhook-object) for more information on the Webhook object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"Name\": \"ex \",
  \"Url\": \"ex nostrud\",
  \"EventType\": 19757695,
  \"Enabled\": false,
  \"Format\": \"cupidatat aliquip in \"
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
  
    using (var content = new StringContent("{  \"Name\": \"ex \",  \"Url\": \"ex nostrud\",  \"EventType\": 19757695,  \"Enabled\": false,  \"Format\": \"cupidatat aliquip in \"}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("3dCartWebAPI/v1/Webhooks", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks');

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
  'Name': 'ex ',
  'Url': 'ex nostrud',
  'EventType': 19757695,
  'Enabled': false,
  'Format': 'cupidatat aliquip in '
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "Name": "ex ",
  "Url": "ex nostrud",
  "EventType": 19757695,
  "Enabled": false,
  "Format": "cupidatat aliquip in "
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.post 'https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "Name": "ex ",
    "Url": "ex nostrud",
    "EventType": 19757695,
    "Enabled": false,
    "Format": "cupidatat aliquip in "
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks', data=values, headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
    {
    "Key":"Id",
    "Value":"1234",
    "Status":"201",
    "Message":"Created successfully",
    }
]
```

See [Data Structures](#webhook-object) for more information on the Webhook object.

#### HTTP Request
`POST https://apirest.3dcart.com/3dCartWebAPI/v1/Webhook`

#### Responses and Errors

Response Code | Description
------------- | ---------
201 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.

### Retrieve a list of webhooks
> To retrieve a list of webhooks, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks?limit=&offset=&name=&url=&enabled=&format=&datecreatedstart=&datecreatedend=&dateupdatedstart=&dateupdatedend=&countonly=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Webhooks"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks?limit=&offset=&name=&url=&enabled=&format=&datecreatedstart=&datecreatedend=&dateupdatedstart=&dateupdatedend=&countonly=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks?limit=&offset=&name=&url=&enabled=&format=&datecreatedstart=&datecreatedend=&dateupdatedstart=&dateupdatedend=&countonly=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks?limit=&offset=&name=&url=&enabled=&format=&datecreatedstart=&datecreatedend=&dateupdatedstart=&dateupdatedend=&countonly=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#webhook-object) for more information on the Webhook object):

```json
[
  {
    "Id": 1,
    "Name": "sample string 1",
    "Url": "sample string 2",
    "EventType": 64,
    "DateCreated": "04/25/2019 16:24",
    "DateUpdated": "04/25/2019 16:24",
    "Format": "sample string 4",
    "Enabled": true
  },
  {
    "Id": 1,
    "Name": "sample string 1",
    "Url": "sample string 2",
    "EventType": 64,
    "DateCreated": "04/25/2019 16:24",
    "DateUpdated": "04/25/2019 16:24",
    "Format": "sample string 4",
    "Enabled": true
  }
]
```

See [Data Structures](#webhook-object) for more information on the Webhook object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
limit | optional | Maximum number of items that can be returned.
offset | optional | Starting point for the return data.
countonly | optional | Count the number of rows only.
name | optional | The name of the webhook to return.
url | optional | Webhook URL.
enabled | optional | Webhook enabled flag.
format | optional | Webhook format (JSON | XML).
datecreatedstart | optional | Start date that the webhook was created (mm/dd/yyyy hh:mm:ss).
datecreatedend | optional | End date that the webhook was created (mm/dd/yyyy hh:mm:ss).
dateupdatedstart | optional | Start date that the webhook was updated last time (mm/dd/yyyy hh:mm:ss).
dateupdatedend | optional | End date that the webhook was updated last time (mm/dd/yyyy hh:mm:ss).

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No Webhooks found.


### Retrieve a specific webhook by id
> To retrieve a specific webhook by id, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks/{id}");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Webhooks/{id}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks/{id}');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks/{id}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks/{id}', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Id": 1,
    "Name": "sample string 1",
    "Url": "sample string 2",
    "EventType": 64,
    "DateCreated": "04/25/2019 16:24",
    "DateUpdated": "04/25/2019 16:24",
    "Format": "sample string 4",
    "Enabled": true
  }
]
```

See [Data Structures](#webhook-object) for more information on the Webhook object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks/{id}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
id | required | The id of the webhook to be returned.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No Webhooks found.

### Update a specific webhook by id
> To update a specific webhook by id, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#webhook-object) for more information on the Webhook object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks/{id}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"Id\": -45814576,
  \"Name\": \"mollit ullamco magna qui velit\",
  \"Url\": \"cupidatat labore\",
  \"Enabled\": true,
  \"Format\": \"et ut proident minim deserunt\"
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
  
    using (var content = new StringContent("{  \"Id\": -45814576,  \"Name\": \"mollit ullamco magna qui velit\",  \"Url\": \"cupidatat labore\",  \"Enabled\": true,  \"Format\": \"et ut proident minim deserunt\"}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Webhooks/{id}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks/{id}');

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
  'Id': -45814576,
  'Name': 'mollit ullamco magna qui velit',
  'Url': 'cupidatat labore',
  'Enabled': true,
  'Format': 'et ut proident minim deserunt'
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "Id": -45814576,
  "Name": "mollit ullamco magna qui velit",
  "Url": "cupidatat labore",
  "Enabled": true,
  "Format": "et ut proident minim deserunt"
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks/{id}', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "Id": -45814576,
    "Name": "mollit ullamco magna qui velit",
    "Url": "cupidatat labore",
    "Enabled": true,
    "Format": "et ut proident minim deserunt"
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks/{id}', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
    {
    "Key":"Id",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
    }
]
```

See [Data Structures](#webhook-object) for more information on the Webhook object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks/{id}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
id | required | The id of the webhook to be updated.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No Webhooks found.

### Delete a webhook
> To delete a webhook, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks/{id}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");

curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "Content-Type: application/xml",
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
  
  using(var response = await httpClient.DeleteAsync("3dCartWebAPI/v1/Webhooks/{id}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks/{id}');

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

response = RestClient.delete 'https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks/{id}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks/{id}', headers=headers)
request.get_method = lambda: 'DELETE'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
    {
    "Key":"Id",
    "Value":"1234",
    "Status":"200",
    "Message":"Deleted successfully",
    }
]
```

#### HTTP Request
`DELETE https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks/{id}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
id | required | The id of the webhook to be deleted.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No Webhooks found.

## Webhook Events

### Retrieve a list of webhook events
> To retrieve a list of webhook events, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks/Events?limit=&offset=&name=&countonly=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Webhooks/Events"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks/Events?limit=&offset=&name=&countonly=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks/Events?limit=&offset=&name=&countonly=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks/Events?limit=&offset=&name=&countonly=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#event-object) for more information on the Event object):

```json
[
  {
    "EventType": 64,
    "EventName": "sample string 2"
  },
  {
    "EventType": 64,
    "EventName": "sample string 2"
  }
]
```

See [Data Structures](#event-object) for more information on the Event object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Webhooks/Events`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
limit | optional | Maximum number of items that can be returned.
offset | optional | Starting point for the return data.
countonly | optional | Count the number of rows only.
name | optional | The name of the webhook to return.