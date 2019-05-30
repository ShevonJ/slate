# Store Settings
The StoreSettings methods allows a store's settings and information to be managed. Retrieve and Update are the available methods. Create and Delete are not available. The StoreSettings object is a collection of 3 other objects; [StoreInformation](#storeinformation-object), [MerchantInformation](#merchantinformation-object), and [StoreStandards](#storestandards-object).

## Store Settings

### Retrieve store settings
> To retrieve a Cart from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/StoreSettings");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/StoreSettings"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/StoreSettings');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/StoreSettings', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/StoreSettings', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#storesettings-object) for more information on the StoreSettings object):

```json
{
  "StoreInformation": {
    "StoreName": "sample string 1",
    "StoreSlogan": "sample string 2",
    "StoreLogo": "sample string 3",
    "StoreEmail": "sample string 4",
    "StoreURL": "sample string 5",
    "StoreSecureURL": "sample string 6"
  },
  "MerchantInformation": {
    "Company": "sample string 1",
    "Address1": "sample string 2",
    "Address2": "sample string 3",
    "City": "sample string 4",
    "State": "sample string 5",
    "Country": "sample string 6",
    "ZipCode": "sample string 7",
    "Phone": "sample string 8",
    "AlternatePhone": "sample string 9",
    "Fax": "sample string 10",
    "InvoiceLogo": "sample string 11",
    "InvoiceTerms": "sample string 12"
  },
  "StoreStandards": {
    "StoreTimeZone": "sample string 1",
    "CurrencySymbol": "sample string 2",
    "DecimalPlacesOnPrice": "sample string 3",
    "CurrencyCode": "sample string 4"
  }
}
```

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/StoreSettings`

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No payment tokens found.

### Update store settings
> To retrieve a Cart from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#storesettings-object) for more information on the StoreSettings object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/StoreSettings");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"StoreInformation\": {
    \"StoreName\": \"eiusmod sed consequat in\",
    \"StoreSlogan\": \"voluptate eu dolore ut pariatur\",
    \"StoreLogo\": \"minim ex\",
    \"StoreEmail\": \"sunt quis aute dolore\",
    \"StoreURL\": \"minim\",
    \"StoreSecureURL\": \"non\"
  },
  \"MerchantInformation\": {
    \"Company\": \"non Ut culpa\",
    \"Address1\": \"culpa exercitatio\",
    \"Address2\": \"consequat eu\",
    \"City\": \"amet irure\",
    \"State\": \"ex sunt\",
    \"Country\": \"anim sit ipsum Ut eli\",
    \"ZipCode\": \"pariatur irure Duis\",
    \"Phone\": \"aute elit\",
    \"AlternatePhone\": \"exercitation ali\",
    \"Fax\": \"incididunt qui\",
    \"InvoiceLogo\": \"non tempor minim enim\",
    \"InvoiceTerms\": \"consequat est dolor co\"
  },
  \"StoreStandards\": {
    \"StoreTimeZone\": \"et ex in laborum ea\",
    \"CurrencySymbol\": \"velit i\",
    \"DecimalPlacesOnPrice\": \"magna minim velit laboris r\",
    \"CurrencyCode\": \"\"
  }
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
  
    using (var content = new StringContent("{  \"StoreInformation\": {    \"StoreName\": \"eiusmod sed consequat in\",    \"StoreSlogan\": \"voluptate eu dolore ut pariatur\",    \"StoreLogo\": \"minim ex\",    \"StoreEmail\": \"sunt quis aute dolore\",    \"StoreURL\": \"minim\",    \"StoreSecureURL\": \"non\"  },  \"MerchantInformation\": {    \"Company\": \"non Ut culpa\",    \"Address1\": \"culpa exercitatio\",    \"Address2\": \"consequat eu\",    \"City\": \"amet irure\",    \"State\": \"ex sunt\",    \"Country\": \"anim sit ipsum Ut eli\",    \"ZipCode\": \"pariatur irure Duis\",    \"Phone\": \"aute elit\",    \"AlternatePhone\": \"exercitation ali\",    \"Fax\": \"incididunt qui\",    \"InvoiceLogo\": \"non tempor minim enim\",    \"InvoiceTerms\": \"consequat est dolor co\"  },  \"StoreStandards\": {    \"StoreTimeZone\": \"et ex in laborum ea\",    \"CurrencySymbol\": \"velit i\",    \"DecimalPlacesOnPrice\": \"magna minim velit laboris r\",    \"CurrencyCode\": \"\"  }}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/StoreSettings", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/StoreSettings');

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
  'StoreInformation': {
    'StoreName': 'eiusmod sed consequat in',
    'StoreSlogan': 'voluptate eu dolore ut pariatur',
    'StoreLogo': 'minim ex',
    'StoreEmail': 'sunt quis aute dolore',
    'StoreURL': 'minim',
    'StoreSecureURL': 'non'
  },
  'MerchantInformation': {
    'Company': 'non Ut culpa',
    'Address1': 'culpa exercitatio',
    'Address2': 'consequat eu',
    'City': 'amet irure',
    'State': 'ex sunt',
    'Country': 'anim sit ipsum Ut eli',
    'ZipCode': 'pariatur irure Duis',
    'Phone': 'aute elit',
    'AlternatePhone': 'exercitation ali',
    'Fax': 'incididunt qui',
    'InvoiceLogo': 'non tempor minim enim',
    'InvoiceTerms': 'consequat est dolor co'
  },
  'StoreStandards': {
    'StoreTimeZone': 'et ex in laborum ea',
    'CurrencySymbol': 'velit i',
    'DecimalPlacesOnPrice': 'magna minim velit laboris r',
    'CurrencyCode': ''
  }
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "StoreInformation": {
    "StoreName": "eiusmod sed consequat in",
    "StoreSlogan": "voluptate eu dolore ut pariatur",
    "StoreLogo": "minim ex",
    "StoreEmail": "sunt quis aute dolore",
    "StoreURL": "minim",
    "StoreSecureURL": "non"
  },
  "MerchantInformation": {
    "Company": "non Ut culpa",
    "Address1": "culpa exercitatio",
    "Address2": "consequat eu",
    "City": "amet irure",
    "State": "ex sunt",
    "Country": "anim sit ipsum Ut eli",
    "ZipCode": "pariatur irure Duis",
    "Phone": "aute elit",
    "AlternatePhone": "exercitation ali",
    "Fax": "incididunt qui",
    "InvoiceLogo": "non tempor minim enim",
    "InvoiceTerms": "consequat est dolor co"
  },
  "StoreStandards": {
    "StoreTimeZone": "et ex in laborum ea",
    "CurrencySymbol": "velit i",
    "DecimalPlacesOnPrice": "magna minim velit laboris r",
    "CurrencyCode": ""
  }
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/StoreSettings', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "StoreInformation": {
      "StoreName": "eiusmod sed consequat in",
      "StoreSlogan": "voluptate eu dolore ut pariatur",
      "StoreLogo": "minim ex",
      "StoreEmail": "sunt quis aute dolore",
      "StoreURL": "minim",
      "StoreSecureURL": "non"
    },
    "MerchantInformation": {
      "Company": "non Ut culpa",
      "Address1": "culpa exercitatio",
      "Address2": "consequat eu",
      "City": "amet irure",
      "State": "ex sunt",
      "Country": "anim sit ipsum Ut eli",
      "ZipCode": "pariatur irure Duis",
      "Phone": "aute elit",
      "AlternatePhone": "exercitation ali",
      "Fax": "incididunt qui",
      "InvoiceLogo": "non tempor minim enim",
      "InvoiceTerms": "consequat est dolor co"
    },
    "StoreStandards": {
      "StoreTimeZone": "et ex in laborum ea",
      "CurrencySymbol": "velit i",
      "DecimalPlacesOnPrice": "magna minim velit laboris r",
      "CurrencyCode": ""
    }
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/StoreSettings', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json

```


#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/StoreSettings`

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No payment tokens found.

