# Gift Registries
The gift registry feature allows customers to create a registry of products for their family and friends to view. Once a customer has registered, their friends can purchase the products selected for the registry and ship them directly to the registrant's address. The registry will automatically keep track of which products have been purchased and which ones are still available. 

## Gift Registries

### Retrieve a list of all gift registries
> To retrieve a list of all gift registries from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/GiftRegistries?catalogid=&sku=&datestartcreated=&dateendcreated=&datestartevent=&dateendevent=&datestartexpiration=&dateendexpiration=&limit=&offset=&countonly=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/GiftRegistries"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/GiftRegistries?catalogid=&sku=&datestartcreated=&dateendcreated=&datestartevent=&dateendevent=&datestartexpiration=&dateendexpiration=&limit=&offset=&countonly=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/GiftRegistries?catalogid=&sku=&datestartcreated=&dateendcreated=&datestartevent=&dateendevent=&datestartexpiration=&dateendexpiration=&limit=&offset=&countonly=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/GiftRegistries?catalogid=&sku=&datestartcreated=&dateendcreated=&datestartevent=&dateendevent=&datestartexpiration=&dateendexpiration=&limit=&offset=&countonly=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#giftregistry-object) for more information on the GiftRegistry object):

```json
[
  {
    "CustomerAddressBook": {
      "CustomerAddressId": 1,
      "FirstName": "sample string 1",
      "LastName": "sample string 2",
      "Address1": "sample string 3",
      "Address2": "sample string 4",
      "City": "sample string 5",
      "State": "sample string 6",
      "ZipCode": "sample string 7",
      "Country": "sample string 8",
      "Company": "sample string 9",
      "PhoneNumber": "sample string 10"
    },
    "GiftRegistryID": 1,
    "Name": "sample string 1",
    "Created": "03/06/2019 14:36",
    "LastUpdate": "03/06/2019 14:36",
    "Expires": "03/06/2019 14:36",
    "Event": "03/06/2019 14:36",
    "Message": "sample string 2",
    "ShipToAddress": true,
    "Sold": 1,
    "Items": 1,
    "GiftRegistryItemList": [
      {
        "CatalogID": 1,
        "SKU": "sample string 1",
        "ItemName": "sample string 2",
        "Listed": 1,
        "Price": 1.1,
        "Subtotal": 1.1,
        "Sold": 1,
        "SoldOffline": 1
      },
      {
        "CatalogID": 1,
        "SKU": "sample string 1",
        "ItemName": "sample string 2",
        "Listed": 1,
        "Price": 1.1,
        "Subtotal": 1.1,
        "Sold": 1,
        "SoldOffline": 1
      }
    ]
  },
  {
    "CustomerAddressBook": {
      "CustomerAddressId": 1,
      "FirstName": "sample string 1",
      "LastName": "sample string 2",
      "Address1": "sample string 3",
      "Address2": "sample string 4",
      "City": "sample string 5",
      "State": "sample string 6",
      "ZipCode": "sample string 7",
      "Country": "sample string 8",
      "Company": "sample string 9",
      "PhoneNumber": "sample string 10"
    },
    "GiftRegistryID": 1,
    "Name": "sample string 1",
    "Created": "03/06/2019 14:36",
    "LastUpdate": "03/06/2019 14:36",
    "Expires": "03/06/2019 14:36",
    "Event": "03/06/2019 14:36",
    "Message": "sample string 2",
    "ShipToAddress": true,
    "Sold": 1,
    "Items": 1,
    "GiftRegistryItemList": [
      {
        "CatalogID": 1,
        "SKU": "sample string 1",
        "ItemName": "sample string 2",
        "Listed": 1,
        "Price": 1.1,
        "Subtotal": 1.1,
        "Sold": 1,
        "SoldOffline": 1
      },
      {
        "CatalogID": 1,
        "SKU": "sample string 1",
        "ItemName": "sample string 2",
        "Listed": 1,
        "Price": 1.1,
        "Subtotal": 1.1,
        "Sold": 1,
        "SoldOffline": 1
      }
    ]
  }
]
```

This method is used to retrieve a list of Gift Registries from the store. See [Data Structures](#giftregistry-object) for more information on the GiftRegistry object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/GiftRegistries`

#### URL Parameters
Parameter | Required | Description
--------- | ------- | -----------
catalogid | optional | Catalog ID
sku | optional | SKU Code of the product
datestartcreated | optional | Created Date Start (mm/dd/yyyy hh:mm:ss)
dateendcreated | optional | Created Date End (mm/dd/yyyy hh:mm:ss)
datestartevent | optional | Event Date Start (mm/dd/yyyy hh:mm:ss)
dateendevent | optional | Event Date End (mm/dd/yyyy hh:mm:ss)
datestartexpiration | optional | Expiration Date Start (mm/dd/yyyy hh:mm:ss)
dateendexpiration | optional | Expiration Date End (mm/dd/yyyy hh:mm:ss)
limit | optional | Maximum number of items that can be returned
offset | optional | Starting point for the return data
countonly | optional | Count the number of rows only

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No Gift Registry record(s) found.

### Retrieve a specific Gift Registry by id
> To retrieve a Gift Registry from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/GiftRegistries/{giftregistryid}");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/GiftRegistries/{giftregistryid}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/GiftRegistries/{giftregistryid}');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/GiftRegistries/{giftregistryid}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/GiftRegistries/{giftregistryid}', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#giftregistry-object) for more information on the GiftRegistry object):

```json
[
  {
    "CustomerAddressBook": {
      "CustomerAddressId": 1,
      "FirstName": "sample string 1",
      "LastName": "sample string 2",
      "Address1": "sample string 3",
      "Address2": "sample string 4",
      "City": "sample string 5",
      "State": "sample string 6",
      "ZipCode": "sample string 7",
      "Country": "sample string 8",
      "Company": "sample string 9",
      "PhoneNumber": "sample string 10"
    },
    "GiftRegistryID": 1,
    "Name": "sample string 1",
    "Created": "03/06/2019 14:36",
    "LastUpdate": "03/06/2019 14:36",
    "Expires": "03/06/2019 14:36",
    "Event": "03/06/2019 14:36",
    "Message": "sample string 2",
    "ShipToAddress": true,
    "Sold": 1,
    "Items": 1,
    "GiftRegistryItemList": [
      {
        "CatalogID": 1,
        "SKU": "sample string 1",
        "ItemName": "sample string 2",
        "Listed": 1,
        "Price": 1.1,
        "Subtotal": 1.1,
        "Sold": 1,
        "SoldOffline": 1
      },
      {
        "CatalogID": 1,
        "SKU": "sample string 1",
        "ItemName": "sample string 2",
        "Listed": 1,
        "Price": 1.1,
        "Subtotal": 1.1,
        "Sold": 1,
        "SoldOffline": 1
      }
    ]
  },
  {
    "CustomerAddressBook": {
      "CustomerAddressId": 1,
      "FirstName": "sample string 1",
      "LastName": "sample string 2",
      "Address1": "sample string 3",
      "Address2": "sample string 4",
      "City": "sample string 5",
      "State": "sample string 6",
      "ZipCode": "sample string 7",
      "Country": "sample string 8",
      "Company": "sample string 9",
      "PhoneNumber": "sample string 10"
    },
    "GiftRegistryID": 1,
    "Name": "sample string 1",
    "Created": "03/06/2019 14:36",
    "LastUpdate": "03/06/2019 14:36",
    "Expires": "03/06/2019 14:36",
    "Event": "03/06/2019 14:36",
    "Message": "sample string 2",
    "ShipToAddress": true,
    "Sold": 1,
    "Items": 1,
    "GiftRegistryItemList": [
      {
        "CatalogID": 1,
        "SKU": "sample string 1",
        "ItemName": "sample string 2",
        "Listed": 1,
        "Price": 1.1,
        "Subtotal": 1.1,
        "Sold": 1,
        "SoldOffline": 1
      },
      {
        "CatalogID": 1,
        "SKU": "sample string 1",
        "ItemName": "sample string 2",
        "Listed": 1,
        "Price": 1.1,
        "Subtotal": 1.1,
        "Sold": 1,
        "SoldOffline": 1
      }
    ]
  }
]
```

This method is used to retrieve a specific Gift Registry by ID. See [Data Structures](#giftregistry-object) for more information on the GiftRegistry object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/GiftRegistries/{giftregistryid}`

#### URL Parameters
Parameter | Required | Description
--------- | ------- | -----------
giftregistryid | required | The ID of the Gift Registry to retrieve

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No Gift Registry record(s) found.

## Gift Registry Items

### Retrieve the items from a specific Gift Registry
> To retrieve a list of items from a Gift Registry, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/GiftRegistries/{giftregistryid}/Items?limit=&offset=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/GiftRegistries/{giftregistryid}/Items"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/GiftRegistries/{giftregistryid}/Items?limit=&offset=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/GiftRegistries/{giftregistryid}/Items?limit=&offset=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/GiftRegistries/{giftregistryid}/Items?limit=&offset=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#giftregistryitem-object) for more information on the GiftRegistryItem object.):

```json
[
  {
    "CatalogID": 1,
    "SKU": "sample string 1",
    "ItemName": "sample string 2",
    "Listed": 1,
    "Price": 1.1,
    "Subtotal": 1.1,
    "Sold": 1,
    "SoldOffline": 1
  },
  {
    "CatalogID": 1,
    "SKU": "sample string 1",
    "ItemName": "sample string 2",
    "Listed": 1,
    "Price": 1.1,
    "Subtotal": 1.1,
    "Sold": 1,
    "SoldOffline": 1
  }
]
```

This method is used to retrieve a list of items from a specific Gift Registry. See [Data Structures](#giftregistryitem-object) for more information on the GiftRegistryItem object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/GiftRegistries/{giftregistryid}/Items{?limit,offset}`

#### URL Parameters
Parameter | Required | Description
--------- | ------- | -----------
giftregistryid | required | The ID of the Gift Registry to retrieve
limit | optional | Maximum number of items that can be returned
offset | optional | Starting point for the return data

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No Gift Registry record(s) found, or the Gift Registry has no items.