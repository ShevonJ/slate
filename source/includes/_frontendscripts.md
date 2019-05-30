# Frontend Scripts
The Frontend Scripts methods allow custom scripts to be injected into a store's HTML content. The `Placement` parameter of the FrontendScripts object (See [Data Structures](#frontendscripts-object) for more information on the FrontendScripts object) allows the script to be injected right before the `</head>` or `</body>` HTML tags before the page is served.

## Frontend Scripts

### Create a new frontend script
> To create a new frontend script, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#frontendscripts-object) for more information on the FrontendScripts object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"FrontendScriptID\": -50863168,
  \"Placement\": \"Ut sunt\",
  \"Code\": \"sit ipsum\",
  \"DateCreated\": \"2016-07-07T18:39:18.507Z\",
  \"LastUpdate\": \"1950-07-07T23:58:28.346Z\"
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
  
    using (var content = new StringContent("{  \"FrontendScriptID\": -50863168,  \"Placement\": \"Ut sunt\",  \"Code\": \"sit ipsum\",  \"DateCreated\": \"2016-07-07T18:39:18.507Z\",  \"LastUpdate\": \"1950-07-07T23:58:28.346Z\"}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("3dCartWebAPI/v1/FrontendScripts", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts');

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
  'FrontendScriptID': -50863168,
  'Placement': 'Ut sunt',
  'Code': 'sit ipsum',
  'DateCreated': '2016-07-07T18:39:18.507Z',
  'LastUpdate': '1950-07-07T23:58:28.346Z'
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "FrontendScriptID": -50863168,
  "Placement": "Ut sunt",
  "Code": "sit ipsum",
  "DateCreated": "2016-07-07T18:39:18.507Z",
  "LastUpdate": "1950-07-07T23:58:28.346Z"
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.post 'https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "FrontendScriptID": -50863168,
    "Placement": "Ut sunt",
    "Code": "sit ipsum",
    "DateCreated": "2016-07-07T18:39:18.507Z",
    "LastUpdate": "1950-07-07T23:58:28.346Z"
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts', data=values, headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"FrontendScriptID",
    "Value":"1234",
    "Status":"201",
    "Message":"Created successfully",
  }
]
```

This method is used to add a new Frontend Script to a store. See [Data Structures](#frontendscripts-object) for more information on the FrontendScripts object.

#### HTTP Request
`POST https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts`

#### Responses and Errors

Response Code | Description
------------- | ---------
201 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.

### Retrieve a list a of frontend scripts
> To retrieve a list a of frontend scripts, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts?limit=&offset=&countonly=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/FrontendScripts"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts?limit=&offset=&countonly=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts?limit=&offset=&countonly=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts?limit=&offset=&countonly=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#frontendscripts-object) for more information on the FrontendScripts object):

```json
[
  {
    "FrontendScriptID": 1,
    "Placement": "sample string 1",
    "Code": "sample string 2",
    "DateCreated": "04/18/2019 15:27",
    "LastUpdate": "04/18/2019 15:27"
  },
  {
    "FrontendScriptID": 1,
    "Placement": "sample string 1",
    "Code": "sample string 2",
    "DateCreated": "04/18/2019 15:27",
    "LastUpdate": "04/18/2019 15:27"
  }
]
```

This method can be used to retrieve a list of all Frontend Scripts being used by a store. See [Data Structures](#frontendscripts-object) for more information on the FrontendScripts object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
limit | optional | Maximum number of items that can be returned.
offset | optional | Starting point for the return data.
countonly | optional | Count the number of rows only.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No Frontend Scripts found.

### Retrieve a specific frontend script by id
> To retrieve a specific frontend script by id, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts/{id}");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/FrontendScripts/{id}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts/{id}');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts/{id}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts/{id}', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#frontendscripts-object) for more information on the FrontendScripts object):

```json
[
  {
    "FrontendScriptID": 1,
    "Placement": "sample string 1",
    "Code": "sample string 2",
    "DateCreated": "04/18/2019 15:38",
    "LastUpdate": "04/18/2019 15:38"
  },
  {
    "FrontendScriptID": 1,
    "Placement": "sample string 1",
    "Code": "sample string 2",
    "DateCreated": "04/18/2019 15:38",
    "LastUpdate": "04/18/2019 15:38"
  }
]
```

See [Data Structures](#frontendscripts-object) for more information on the FrontendScripts object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts/{id}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
id | required | The id of the Frontend Script to return.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No Frontend Script found.

### Update a list of frontend scripts
> To update a list of frontend scripts, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#frontendscripts-object) for more information on the FrontendScripts object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "[
  {
    \"FrontendScriptID\": -48056471,
    \"Placement\": \"of\",
    \"Code\": \"dolor tempor dolore\",
    \"DateCreated\": \"1975-07-05T10:54:30.331Z\",
    \"LastUpdate\": \"1942-03-27T17:45:37.456Z\"
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
  
    using (var content = new StringContent("[  {    \"FrontendScriptID\": -48056471,    \"Placement\": \"of\",    \"Code\": \"dolor tempor dolore\",    \"DateCreated\": \"1975-07-05T10:54:30.331Z\",    \"LastUpdate\": \"1942-03-27T17:45:37.456Z\"  }]", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/FrontendScripts", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts');

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
    'FrontendScriptID': -48056471,
    'Placement': 'of',
    'Code': 'dolor tempor dolore',
    'DateCreated': '1975-07-05T10:54:30.331Z',
    'LastUpdate': '1942-03-27T17:45:37.456Z'
  }
];

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '[
  {
    "FrontendScriptID": -48056471,
    "Placement": "of",
    "Code": "dolor tempor dolore",
    "DateCreated": "1975-07-05T10:54:30.331Z",
    "LastUpdate": "1942-03-27T17:45:37.456Z"
  }
]'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  [
    {
      "FrontendScriptID": -48056471,
      "Placement": "of",
      "Code": "dolor tempor dolore",
      "DateCreated": "1975-07-05T10:54:30.331Z",
      "LastUpdate": "1942-03-27T17:45:37.456Z"
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"FrontendScriptID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

See [Data Structures](#frontendscripts-object) for more information on the FrontendScripts object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts`

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No Frontend Script found.

### Update a specific frontend script by id
> To update a specific frontend script by id, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#frontendscripts-object) for more information on the FrontendScripts object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts/{frontendscriptid}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"FrontendScriptID\": 72592379,
  \"Placement\": \"lab\",
  \"Code\": \"est occaecat dolor amet commodo\",
  \"DateCreated\": \"1944-03-28T20:19:51.889Z\",
  \"LastUpdate\": \"1992-03-13T21:10:07.697Z\"
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
  
    using (var content = new StringContent("{  \"FrontendScriptID\": 72592379,  \"Placement\": \"lab\",  \"Code\": \"est occaecat dolor amet commodo\",  \"DateCreated\": \"1944-03-28T20:19:51.889Z\",  \"LastUpdate\": \"1992-03-13T21:10:07.697Z\"}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/FrontendScripts/{frontendscriptid}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts/{frontendscriptid}');

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
  'FrontendScriptID': 72592379,
  'Placement': 'lab',
  'Code': 'est occaecat dolor amet commodo',
  'DateCreated': '1944-03-28T20:19:51.889Z',
  'LastUpdate': '1992-03-13T21:10:07.697Z'
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "FrontendScriptID": 72592379,
  "Placement": "lab",
  "Code": "est occaecat dolor amet commodo",
  "DateCreated": "1944-03-28T20:19:51.889Z",
  "LastUpdate": "1992-03-13T21:10:07.697Z"
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts/{frontendscriptid}', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "FrontendScriptID": 72592379,
    "Placement": "lab",
    "Code": "est occaecat dolor amet commodo",
    "DateCreated": "1944-03-28T20:19:51.889Z",
    "LastUpdate": "1992-03-13T21:10:07.697Z"
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts/{frontendscriptid}', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"FrontendScriptID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

See [Data Structures](#frontendscripts-object) for more information on the FrontendScripts object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts/{frontendscriptid}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
frontendscriptid | required | The id of the Frontend Script to update.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No Frontend Script found.

### Delete a frontend script
> To delete a frontend script, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts/{id}");
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
  
  using(var response = await httpClient.DeleteAsync("3dCartWebAPI/v1/FrontendScripts/{id}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts/{id}');

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

response = RestClient.delete 'https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts/{id}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts/{id}', headers=headers)
request.get_method = lambda: 'DELETE'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"FrontendScriptID",
    "Value":"1234",
    "Status":"200",
    "Message":"Deleted successfully",
  }
]
```

This method is used to delete a Frontend Script.

#### HTTP Request
`DELETE https://apirest.3dcart.com/3dCartWebAPI/v1/FrontendScripts/{id}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
id | required | The id of the Frontend Script to update.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No Frontend Script found.