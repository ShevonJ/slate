# Distributors

## Distributors

### Create a distributor
> To create a distributor in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#distributor-object) for more information on the Distributor object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"DistributorID\": -34424972,
  \"CompanyName\": \"exercitation quis ad minim\",
  \"ContactName\": \"elit nulla dolor\",
  \"Address\": \"nulla dolore\",
  \"Address2\": \"tempor sunt laboris\",
  \"City\": \"ad voluptate in qui\",
  \"State\": \"nostrud pariatur\",
  \"Zip\": \"exercitation sit pariatur\",
  \"Country\": \"adipisicing Duis nisi\",
  \"Phone\": \"ea dolore ex minim eu\",
  \"Fax\": \"v\",
  \"Email\": \"aliquip \",
  \"Comments\": \"ullamco ex eiusmod nulla ea\",
  \"NotifyOnNewOrder\": true,
  \"NotifyOnNewOrderEmailSubject\": \"do adipisicing\",
  \"NotifyOnNewOrderEmailMessage\": \"labore dolore Excepteur ex\",
  \"UserID\": \"deserunt cupidatat consectetur dolor in\",
  \"LastUpdate\": \"2016-09-28T17:46:27.136Z\",
  \"IsDropShipper\": true,
  \"NotifyOnCancelledOrder\": true,
  \"NotifyOnCancelledOrderEmailSubject\": \"consectetur sint\",
  \"NotifyOnCancelledOrderEmailMessage\": \"dolore voluptate anim commodo\",
  \"POStyle\": 82613922,
  \"POEmailNotification\": false,
  \"POShippingInfo\": \"Ut velit mollit in qui\",
  \"POPaymentInfo\": \"cillum mollit Duis\",
  \"POAdditionalNotes\": \"veniam sint quis minim\",
  \"POEmailSubject\": \"adipisicing dolore\"
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
  
    using (var content = new StringContent("{  \"DistributorID\": -34424972,  \"CompanyName\": \"exercitation quis ad minim\",  \"ContactName\": \"elit nulla dolor\",  \"Address\": \"nulla dolore\",  \"Address2\": \"tempor sunt laboris\",  \"City\": \"ad voluptate in qui\",  \"State\": \"nostrud pariatur\",  \"Zip\": \"exercitation sit pariatur\",  \"Country\": \"adipisicing Duis nisi\",  \"Phone\": \"ea dolore ex minim eu\",  \"Fax\": \"v\",  \"Email\": \"aliquip \",  \"Comments\": \"ullamco ex eiusmod nulla ea\",  \"NotifyOnNewOrder\": true,  \"NotifyOnNewOrderEmailSubject\": \"do adipisicing\",  \"NotifyOnNewOrderEmailMessage\": \"labore dolore Excepteur ex\",  \"UserID\": \"deserunt cupidatat consectetur dolor in\",  \"LastUpdate\": \"2016-09-28T17:46:27.136Z\",  \"IsDropShipper\": true,  \"NotifyOnCancelledOrder\": true,  \"NotifyOnCancelledOrderEmailSubject\": \"consectetur sint\",  \"NotifyOnCancelledOrderEmailMessage\": \"dolore voluptate anim commodo\",  \"POStyle\": 82613922,  \"POEmailNotification\": false,  \"POShippingInfo\": \"Ut velit mollit in qui\",  \"POPaymentInfo\": \"cillum mollit Duis\",  \"POAdditionalNotes\": \"veniam sint quis minim\",  \"POEmailSubject\": \"adipisicing dolore\"}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("3dCartWebAPI/v1/Distributors", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors');

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
  'DistributorID': -34424972,
  'CompanyName': 'exercitation quis ad minim',
  'ContactName': 'elit nulla dolor',
  'Address': 'nulla dolore',
  'Address2': 'tempor sunt laboris',
  'City': 'ad voluptate in qui',
  'State': 'nostrud pariatur',
  'Zip': 'exercitation sit pariatur',
  'Country': 'adipisicing Duis nisi',
  'Phone': 'ea dolore ex minim eu',
  'Fax': 'v',
  'Email': 'aliquip ',
  'Comments': 'ullamco ex eiusmod nulla ea',
  'NotifyOnNewOrder': true,
  'NotifyOnNewOrderEmailSubject': 'do adipisicing',
  'NotifyOnNewOrderEmailMessage': 'labore dolore Excepteur ex',
  'UserID': 'deserunt cupidatat consectetur dolor in',
  'LastUpdate': '2016-09-28T17:46:27.136Z',
  'IsDropShipper': true,
  'NotifyOnCancelledOrder': true,
  'NotifyOnCancelledOrderEmailSubject': 'consectetur sint',
  'NotifyOnCancelledOrderEmailMessage': 'dolore voluptate anim commodo',
  'POStyle': 82613922,
  'POEmailNotification': false,
  'POShippingInfo': 'Ut velit mollit in qui',
  'POPaymentInfo': 'cillum mollit Duis',
  'POAdditionalNotes': 'veniam sint quis minim',
  'POEmailSubject': 'adipisicing dolore'
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "DistributorID": -34424972,
  "CompanyName": "exercitation quis ad minim",
  "ContactName": "elit nulla dolor",
  "Address": "nulla dolore",
  "Address2": "tempor sunt laboris",
  "City": "ad voluptate in qui",
  "State": "nostrud pariatur",
  "Zip": "exercitation sit pariatur",
  "Country": "adipisicing Duis nisi",
  "Phone": "ea dolore ex minim eu",
  "Fax": "v",
  "Email": "aliquip ",
  "Comments": "ullamco ex eiusmod nulla ea",
  "NotifyOnNewOrder": true,
  "NotifyOnNewOrderEmailSubject": "do adipisicing",
  "NotifyOnNewOrderEmailMessage": "labore dolore Excepteur ex",
  "UserID": "deserunt cupidatat consectetur dolor in",
  "LastUpdate": "2016-09-28T17:46:27.136Z",
  "IsDropShipper": true,
  "NotifyOnCancelledOrder": true,
  "NotifyOnCancelledOrderEmailSubject": "consectetur sint",
  "NotifyOnCancelledOrderEmailMessage": "dolore voluptate anim commodo",
  "POStyle": 82613922,
  "POEmailNotification": false,
  "POShippingInfo": "Ut velit mollit in qui",
  "POPaymentInfo": "cillum mollit Duis",
  "POAdditionalNotes": "veniam sint quis minim",
  "POEmailSubject": "adipisicing dolore"
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.post 'https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "DistributorID": -34424972,
    "CompanyName": "exercitation quis ad minim",
    "ContactName": "elit nulla dolor",
    "Address": "nulla dolore",
    "Address2": "tempor sunt laboris",
    "City": "ad voluptate in qui",
    "State": "nostrud pariatur",
    "Zip": "exercitation sit pariatur",
    "Country": "adipisicing Duis nisi",
    "Phone": "ea dolore ex minim eu",
    "Fax": "v",
    "Email": "aliquip ",
    "Comments": "ullamco ex eiusmod nulla ea",
    "NotifyOnNewOrder": true,
    "NotifyOnNewOrderEmailSubject": "do adipisicing",
    "NotifyOnNewOrderEmailMessage": "labore dolore Excepteur ex",
    "UserID": "deserunt cupidatat consectetur dolor in",
    "LastUpdate": "2016-09-28T17:46:27.136Z",
    "IsDropShipper": true,
    "NotifyOnCancelledOrder": true,
    "NotifyOnCancelledOrderEmailSubject": "consectetur sint",
    "NotifyOnCancelledOrderEmailMessage": "dolore voluptate anim commodo",
    "POStyle": 82613922,
    "POEmailNotification": false,
    "POShippingInfo": "Ut velit mollit in qui",
    "POPaymentInfo": "cillum mollit Duis",
    "POAdditionalNotes": "veniam sint quis minim",
    "POEmailSubject": "adipisicing dolore"
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors', data=values, headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"DistributorID",
    "Value":"1234",
    "Status":"201", 
    "Message":"Created successfully",
  }
]
```

This method is used to create a distributor in the store. See [Data Structures](#distributor-object) for more information on the Distributor object.

#### HTTP Request
`POST https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors`

#### Responses and Errors

Response Code | Description
------------- | ---------
201 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.

### Retrieve a list of all distributors
> To retrieve a list of distributors from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors?limit=&offset=&company=&email=&country=&state=&city=&phone=&countonly=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Distributors"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors?limit=&offset=&company=&email=&country=&state=&city=&phone=&countonly=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors?limit=&offset=&company=&email=&country=&state=&city=&phone=&countonly=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors?limit=&offset=&company=&email=&country=&state=&city=&phone=&countonly=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#distributor-object) for more information on the Distributor object):

```json
[
  {
    "DistributorID": 1,
    "CompanyName": "sample string 1",
    "ContactName": "sample string 2",
    "Address": "sample string 3",
    "Address2": "sample string 4",
    "City": "sample string 5",
    "State": "sample string 6",
    "Zip": "sample string 7",
    "Country": "sample string 8",
    "Phone": "sample string 9",
    "Fax": "sample string 10",
    "Email": "sample string 11",
    "Comments": "sample string 12",
    "NotifyOnNewOrder": true,
    "NotifyOnNewOrderEmailSubject": "sample string 13",
    "NotifyOnNewOrderEmailMessage": "sample string 14",
    "UserID": "sample string 15",
    "LastUpdate": "03/06/2019 11:59",
    "IsDropShipper": true,
    "NotifyOnCancelledOrder": true,
    "NotifyOnCancelledOrderEmailSubject": "sample string 16",
    "NotifyOnCancelledOrderEmailMessage": "sample string 17",
    "POStyle": 1,
    "POEmailNotification": true,
    "POShippingInfo": "sample string 18",
    "POPaymentInfo": "sample string 19",
    "POAdditionalNotes": "sample string 20",
    "POEmailSubject": "sample string 21"
  },
  {
    "DistributorID": 1,
    "CompanyName": "sample string 1",
    "ContactName": "sample string 2",
    "Address": "sample string 3",
    "Address2": "sample string 4",
    "City": "sample string 5",
    "State": "sample string 6",
    "Zip": "sample string 7",
    "Country": "sample string 8",
    "Phone": "sample string 9",
    "Fax": "sample string 10",
    "Email": "sample string 11",
    "Comments": "sample string 12",
    "NotifyOnNewOrder": true,
    "NotifyOnNewOrderEmailSubject": "sample string 13",
    "NotifyOnNewOrderEmailMessage": "sample string 14",
    "UserID": "sample string 15",
    "LastUpdate": "03/06/2019 11:59",
    "IsDropShipper": true,
    "NotifyOnCancelledOrder": true,
    "NotifyOnCancelledOrderEmailSubject": "sample string 16",
    "NotifyOnCancelledOrderEmailMessage": "sample string 17",
    "POStyle": 1,
    "POEmailNotification": true,
    "POShippingInfo": "sample string 18",
    "POPaymentInfo": "sample string 19",
    "POAdditionalNotes": "sample string 20",
    "POEmailSubject": "sample string 21"
  }
]
```

This method is to retrieve a list of all distributors. See [Data Structures](#distributor-object) for more information on the Distributor object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors`

#### URL Parameters
Parameter | Required | Description
--------- | ------- | -----------
limit | optional | Maximum number of items that can be returned
offset | optional | Starting point for the return data
company | optional | Company Name of the Distributor
email | optional | Email of the Distributor
country | optional | Country name of the Distributor
state | optional | State of the Distributor
city | optional | City of the Distributor
phone | optional | Phone number of the Distributor
countonly | optional | Count the number of rows only

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No Distributors found.

### Retrieve a specific distributor
> To retrieve a specific distributor from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors/{id}");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Distributors/{id}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors/{id}');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors/{id}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors/{id}', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#distributor-object) for more information on the Distributor object):

```json
[
  {
    "DistributorID": 1,
    "CompanyName": "sample string 1",
    "ContactName": "sample string 2",
    "Address": "sample string 3",
    "Address2": "sample string 4",
    "City": "sample string 5",
    "State": "sample string 6",
    "Zip": "sample string 7",
    "Country": "sample string 8",
    "Phone": "sample string 9",
    "Fax": "sample string 10",
    "Email": "sample string 11",
    "Comments": "sample string 12",
    "NotifyOnNewOrder": true,
    "NotifyOnNewOrderEmailSubject": "sample string 13",
    "NotifyOnNewOrderEmailMessage": "sample string 14",
    "UserID": "sample string 15",
    "LastUpdate": "03/06/2019 14:01",
    "IsDropShipper": true,
    "NotifyOnCancelledOrder": true,
    "NotifyOnCancelledOrderEmailSubject": "sample string 16",
    "NotifyOnCancelledOrderEmailMessage": "sample string 17",
    "POStyle": 1,
    "POEmailNotification": true,
    "POShippingInfo": "sample string 18",
    "POPaymentInfo": "sample string 19",
    "POAdditionalNotes": "sample string 20",
    "POEmailSubject": "sample string 21"
  },
  {
    "DistributorID": 1,
    "CompanyName": "sample string 1",
    "ContactName": "sample string 2",
    "Address": "sample string 3",
    "Address2": "sample string 4",
    "City": "sample string 5",
    "State": "sample string 6",
    "Zip": "sample string 7",
    "Country": "sample string 8",
    "Phone": "sample string 9",
    "Fax": "sample string 10",
    "Email": "sample string 11",
    "Comments": "sample string 12",
    "NotifyOnNewOrder": true,
    "NotifyOnNewOrderEmailSubject": "sample string 13",
    "NotifyOnNewOrderEmailMessage": "sample string 14",
    "UserID": "sample string 15",
    "LastUpdate": "03/06/2019 14:01",
    "IsDropShipper": true,
    "NotifyOnCancelledOrder": true,
    "NotifyOnCancelledOrderEmailSubject": "sample string 16",
    "NotifyOnCancelledOrderEmailMessage": "sample string 17",
    "POStyle": 1,
    "POEmailNotification": true,
    "POShippingInfo": "sample string 18",
    "POPaymentInfo": "sample string 19",
    "POAdditionalNotes": "sample string 20",
    "POEmailSubject": "sample string 21"
  }
]
```

This method is used to retrieve a specific distributor. See [Data Structures](#distributor-object) for more information on the Distributor object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors/{id}`

#### URL Parameters
Parameter | Required | Description
--------- | ------- | -----------
id | required | The id of the distributor to retrieve

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No Distributor found.


### Update a list of distributors
> To update a list of distributors in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#distributor-object) for more information on the Distributor object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "[
  {
    \"DistributorID\": 83893738,
    \"CompanyName\": \"culpa es\",
    \"ContactName\": \"eiusmod magna dolore consectetur\",
    \"Address\": \"consequat a\",
    \"Address2\": \"anim occaecat eiusmod ut\",
    \"City\": \"ea nostrud cupidatat\",
    \"State\": \"Lorem laboris dolore minim\",
    \"Zip\": \"elit pariatur sed\",
    \"Country\": \"nisi veniam\",
    \"Phone\": \"deserunt ea officia\",
    \"Fax\": \"cillum nisi\",
    \"Email\": \"ut cillum\",
    \"Comments\": \"laborum eiusmod\",
    \"NotifyOnNewOrder\": false,
    \"NotifyOnNewOrderEmailSubject\": \"incididunt dolor\",
    \"NotifyOnNewOrderEmailMessage\": \"in aliquip\",
    \"UserID\": \"est ut ex quis\",
    \"LastUpdate\": \"1990-01-18T12:23:49.693Z\",
    \"IsDropShipper\": true,
    \"NotifyOnCancelledOrder\": false,
    \"NotifyOnCancelledOrderEmailSubject\": \"nostrud consectetur in\",
    \"NotifyOnCancelledOrderEmailMessage\": \"in\",
    \"POStyle\": 18585521,
    \"POEmailNotification\": false,
    \"POShippingInfo\": \"aliquip anim commodo\",
    \"POPaymentInfo\": \"voluptate irure Lorem\",
    \"POAdditionalNotes\": \"cupidatat ipsum sint dolore\",
    \"POEmailSubject\": \"cillum quis magna minim dolor\"
  },
  {
    \"DistributorID\": -21099663,
    \"CompanyName\": \"temp\",
    \"ContactName\": \"s\",
    \"Address\": \"Ut qui culpa\",
    \"Address2\": \"aute dolor non sed Excepte\",
    \"City\": \"consequat Ut commodo Excepteur minim\",
    \"State\": \"exercitation est sint fugiat deserunt\",
    \"Zip\": \"qui anim\",
    \"Country\": \"reprehenderit occaecat labore par\",
    \"Phone\": \"ipsum adipisicing do\",
    \"Fax\": \"qui\",
    \"Email\": \"minim a\",
    \"Comments\": \"dolore magna irure et\",
    \"NotifyOnNewOrder\": true,
    \"NotifyOnNewOrderEmailSubject\": \"Duis sit dolore proident laboris\",
    \"NotifyOnNewOrderEmailMessage\": \"in eiusmod qui\",
    \"UserID\": \"culpa proident ut Excepteur velit\",
    \"LastUpdate\": \"1997-12-19T20:47:00.731Z\",
    \"IsDropShipper\": true,
    \"NotifyOnCancelledOrder\": false,
    \"NotifyOnCancelledOrderEmailSubject\": \"ea cillum\",
    \"NotifyOnCancelledOrderEmailMessage\": \"sit do veniam ut dolore\",
    \"POStyle\": 39565019,
    \"POEmailNotification\": true,
    \"POShippingInfo\": \"ullamco ut\",
    \"POPaymentInfo\": \"deserunt Excepteur\",
    \"POAdditionalNotes\": \"amet in\",
    \"POEmailSubject\": \"non consequat\"
  },
  {
    \"DistributorID\": 34481800,
    \"CompanyName\": \"n\",
    \"ContactName\": \"dolore nisi \",
    \"Address\": \"nulla reprehende\",
    \"Address2\": \"eiusmod Duis aliqua ex\",
    \"City\": \"occaecat e\",
    \"State\": \"ut aliqua labore re\",
    \"Zip\": \"cillum Duis\",
    \"Country\": \"deserunt ullamco\",
    \"Phone\": \"\",
    \"Fax\": \"anim \",
    \"Email\": \"Duis dolor\",
    \"Comments\": \"non\",
    \"NotifyOnNewOrder\": true,
    \"NotifyOnNewOrderEmailSubject\": \"sunt ut dolor velit\",
    \"NotifyOnNewOrderEmailMessage\": \"ullamco\",
    \"UserID\": \"amet sed ea\",
    \"LastUpdate\": \"1966-10-04T09:08:37.694Z\",
    \"IsDropShipper\": false,
    \"NotifyOnCancelledOrder\": false,
    \"NotifyOnCancelledOrderEmailSubject\": \"eu in occaecat consequat\",
    \"NotifyOnCancelledOrderEmailMessage\": \"deserunt adipisicing qui et quis\",
    \"POStyle\": -93510217,
    \"POEmailNotification\": false,
    \"POShippingInfo\": \"sint est commodo\",
    \"POPaymentInfo\": \"laboris officia elit labore occaecat\",
    \"POAdditionalNotes\": \"in\",
    \"POEmailSubject\": \"laborum voluptate incididunt\"
  },
  {
    \"DistributorID\": -54174892,
    \"CompanyName\": \"eiusmod\",
    \"ContactName\": \"sed\",
    \"Address\": \"cillum pariatur\",
    \"Address2\": \"laboris\",
    \"City\": \"ad dolore\",
    \"State\": \"est\",
    \"Zip\": \"ad cupidatat minim dolo\",
    \"Country\": \"Lo\",
    \"Phone\": \"Duis ullamco officia\",
    \"Fax\": \"ut velit \",
    \"Email\": \"consequat commodo exerc\",
    \"Comments\": \"et nisi esse aliquip\",
    \"NotifyOnNewOrder\": true,
    \"NotifyOnNewOrderEmailSubject\": \"officia nulla\",
    \"NotifyOnNewOrderEmailMessage\": \"fugiat commodo in id\",
    \"UserID\": \"Duis ex incididunt\",
    \"LastUpdate\": \"1945-03-13T00:32:27.317Z\",
    \"IsDropShipper\": true,
    \"NotifyOnCancelledOrder\": false,
    \"NotifyOnCancelledOrderEmailSubject\": \"esse ut velit\",
    \"NotifyOnCancelledOrderEmailMessage\": \"ut\",
    \"POStyle\": 2053044,
    \"POEmailNotification\": true,
    \"POShippingInfo\": \"eu\",
    \"POPaymentInfo\": \"Ut dolor pariatur\",
    \"POAdditionalNotes\": \"eiusmod esse magna voluptate\",
    \"POEmailSubject\": \"qui fugiat\"
  },
  {
    \"DistributorID\": -91355787,
    \"CompanyName\": \"eu tempor adipisicing esse in\",
    \"ContactName\": \"irure ut deser\",
    \"Address\": \"dolor mollit labore\",
    \"Address2\": \"aliquip ut in in sint\",
    \"City\": \"aute \",
    \"State\": \"\",
    \"Zip\": \"nostrud aute p\",
    \"Country\": \"dolor consectetur Ut qui\",
    \"Phone\": \"Lorem nulla in ex\",
    \"Fax\": \"cillum consectetur pariatur\",
    \"Email\": \"ad voluptate\",
    \"Comments\": \"labore ut\",
    \"NotifyOnNewOrder\": true,
    \"NotifyOnNewOrderEmailSubject\": \"sint minim \",
    \"NotifyOnNewOrderEmailMessage\": \"elit occaecat incididunt nostrud\",
    \"UserID\": \"consectetur\",
    \"LastUpdate\": \"1946-10-06T01:34:09.874Z\",
    \"IsDropShipper\": true,
    \"NotifyOnCancelledOrder\": false,
    \"NotifyOnCancelledOrderEmailSubject\": \"dolore co\",
    \"NotifyOnCancelledOrderEmailMessage\": \"velit aute magna consectetur cillum\",
    \"POStyle\": 17935422,
    \"POEmailNotification\": false,
    \"POShippingInfo\": \"minim enim deserunt\",
    \"POPaymentInfo\": \"aute eu\",
    \"POAdditionalNotes\": \"id Lorem ad\",
    \"POEmailSubject\": \"aliquip eu ut\"
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
  
    using (var content = new StringContent("[  {    \"DistributorID\": 83893738,    \"CompanyName\": \"culpa es\",    \"ContactName\": \"eiusmod magna dolore consectetur\",    \"Address\": \"consequat a\",    \"Address2\": \"anim occaecat eiusmod ut\",    \"City\": \"ea nostrud cupidatat\",    \"State\": \"Lorem laboris dolore minim\",    \"Zip\": \"elit pariatur sed\",    \"Country\": \"nisi veniam\",    \"Phone\": \"deserunt ea officia\",    \"Fax\": \"cillum nisi\",    \"Email\": \"ut cillum\",    \"Comments\": \"laborum eiusmod\",    \"NotifyOnNewOrder\": false,    \"NotifyOnNewOrderEmailSubject\": \"incididunt dolor\",    \"NotifyOnNewOrderEmailMessage\": \"in aliquip\",    \"UserID\": \"est ut ex quis\",    \"LastUpdate\": \"1990-01-18T12:23:49.693Z\",    \"IsDropShipper\": true,    \"NotifyOnCancelledOrder\": false,    \"NotifyOnCancelledOrderEmailSubject\": \"nostrud consectetur in\",    \"NotifyOnCancelledOrderEmailMessage\": \"in\",    \"POStyle\": 18585521,    \"POEmailNotification\": false,    \"POShippingInfo\": \"aliquip anim commodo\",    \"POPaymentInfo\": \"voluptate irure Lorem\",    \"POAdditionalNotes\": \"cupidatat ipsum sint dolore\",    \"POEmailSubject\": \"cillum quis magna minim dolor\"  },  {    \"DistributorID\": -21099663,    \"CompanyName\": \"temp\",    \"ContactName\": \"s\",    \"Address\": \"Ut qui culpa\",    \"Address2\": \"aute dolor non sed Excepte\",    \"City\": \"consequat Ut commodo Excepteur minim\",    \"State\": \"exercitation est sint fugiat deserunt\",    \"Zip\": \"qui anim\",    \"Country\": \"reprehenderit occaecat labore par\",    \"Phone\": \"ipsum adipisicing do\",    \"Fax\": \"qui\",    \"Email\": \"minim a\",    \"Comments\": \"dolore magna irure et\",    \"NotifyOnNewOrder\": true,    \"NotifyOnNewOrderEmailSubject\": \"Duis sit dolore proident laboris\",    \"NotifyOnNewOrderEmailMessage\": \"in eiusmod qui\",    \"UserID\": \"culpa proident ut Excepteur velit\",    \"LastUpdate\": \"1997-12-19T20:47:00.731Z\",    \"IsDropShipper\": true,    \"NotifyOnCancelledOrder\": false,    \"NotifyOnCancelledOrderEmailSubject\": \"ea cillum\",    \"NotifyOnCancelledOrderEmailMessage\": \"sit do veniam ut dolore\",    \"POStyle\": 39565019,    \"POEmailNotification\": true,    \"POShippingInfo\": \"ullamco ut\",    \"POPaymentInfo\": \"deserunt Excepteur\",    \"POAdditionalNotes\": \"amet in\",    \"POEmailSubject\": \"non consequat\"  },  {    \"DistributorID\": 34481800,    \"CompanyName\": \"n\",    \"ContactName\": \"dolore nisi \",    \"Address\": \"nulla reprehende\",    \"Address2\": \"eiusmod Duis aliqua ex\",    \"City\": \"occaecat e\",    \"State\": \"ut aliqua labore re\",    \"Zip\": \"cillum Duis\",    \"Country\": \"deserunt ullamco\",    \"Phone\": \"\",    \"Fax\": \"anim \",    \"Email\": \"Duis dolor\",    \"Comments\": \"non\",    \"NotifyOnNewOrder\": true,    \"NotifyOnNewOrderEmailSubject\": \"sunt ut dolor velit\",    \"NotifyOnNewOrderEmailMessage\": \"ullamco\",    \"UserID\": \"amet sed ea\",    \"LastUpdate\": \"1966-10-04T09:08:37.694Z\",    \"IsDropShipper\": false,    \"NotifyOnCancelledOrder\": false,    \"NotifyOnCancelledOrderEmailSubject\": \"eu in occaecat consequat\",    \"NotifyOnCancelledOrderEmailMessage\": \"deserunt adipisicing qui et quis\",    \"POStyle\": -93510217,    \"POEmailNotification\": false,    \"POShippingInfo\": \"sint est commodo\",    \"POPaymentInfo\": \"laboris officia elit labore occaecat\",    \"POAdditionalNotes\": \"in\",    \"POEmailSubject\": \"laborum voluptate incididunt\"  },  {    \"DistributorID\": -54174892,    \"CompanyName\": \"eiusmod\",    \"ContactName\": \"sed\",    \"Address\": \"cillum pariatur\",    \"Address2\": \"laboris\",    \"City\": \"ad dolore\",    \"State\": \"est\",    \"Zip\": \"ad cupidatat minim dolo\",    \"Country\": \"Lo\",    \"Phone\": \"Duis ullamco officia\",    \"Fax\": \"ut velit \",    \"Email\": \"consequat commodo exerc\",    \"Comments\": \"et nisi esse aliquip\",    \"NotifyOnNewOrder\": true,    \"NotifyOnNewOrderEmailSubject\": \"officia nulla\",    \"NotifyOnNewOrderEmailMessage\": \"fugiat commodo in id\",    \"UserID\": \"Duis ex incididunt\",    \"LastUpdate\": \"1945-03-13T00:32:27.317Z\",    \"IsDropShipper\": true,    \"NotifyOnCancelledOrder\": false,    \"NotifyOnCancelledOrderEmailSubject\": \"esse ut velit\",    \"NotifyOnCancelledOrderEmailMessage\": \"ut\",    \"POStyle\": 2053044,    \"POEmailNotification\": true,    \"POShippingInfo\": \"eu\",    \"POPaymentInfo\": \"Ut dolor pariatur\",    \"POAdditionalNotes\": \"eiusmod esse magna voluptate\",    \"POEmailSubject\": \"qui fugiat\"  },  {    \"DistributorID\": -91355787,    \"CompanyName\": \"eu tempor adipisicing esse in\",    \"ContactName\": \"irure ut deser\",    \"Address\": \"dolor mollit labore\",    \"Address2\": \"aliquip ut in in sint\",    \"City\": \"aute \",    \"State\": \"\",    \"Zip\": \"nostrud aute p\",    \"Country\": \"dolor consectetur Ut qui\",    \"Phone\": \"Lorem nulla in ex\",    \"Fax\": \"cillum consectetur pariatur\",    \"Email\": \"ad voluptate\",    \"Comments\": \"labore ut\",    \"NotifyOnNewOrder\": true,    \"NotifyOnNewOrderEmailSubject\": \"sint minim \",    \"NotifyOnNewOrderEmailMessage\": \"elit occaecat incididunt nostrud\",    \"UserID\": \"consectetur\",    \"LastUpdate\": \"1946-10-06T01:34:09.874Z\",    \"IsDropShipper\": true,    \"NotifyOnCancelledOrder\": false,    \"NotifyOnCancelledOrderEmailSubject\": \"dolore co\",    \"NotifyOnCancelledOrderEmailMessage\": \"velit aute magna consectetur cillum\",    \"POStyle\": 17935422,    \"POEmailNotification\": false,    \"POShippingInfo\": \"minim enim deserunt\",    \"POPaymentInfo\": \"aute eu\",    \"POAdditionalNotes\": \"id Lorem ad\",    \"POEmailSubject\": \"aliquip eu ut\"  }]", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Distributors", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors');

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
    'DistributorID': 83893738,
    'CompanyName': 'culpa es',
    'ContactName': 'eiusmod magna dolore consectetur',
    'Address': 'consequat a',
    'Address2': 'anim occaecat eiusmod ut',
    'City': 'ea nostrud cupidatat',
    'State': 'Lorem laboris dolore minim',
    'Zip': 'elit pariatur sed',
    'Country': 'nisi veniam',
    'Phone': 'deserunt ea officia',
    'Fax': 'cillum nisi',
    'Email': 'ut cillum',
    'Comments': 'laborum eiusmod',
    'NotifyOnNewOrder': false,
    'NotifyOnNewOrderEmailSubject': 'incididunt dolor',
    'NotifyOnNewOrderEmailMessage': 'in aliquip',
    'UserID': 'est ut ex quis',
    'LastUpdate': '1990-01-18T12:23:49.693Z',
    'IsDropShipper': true,
    'NotifyOnCancelledOrder': false,
    'NotifyOnCancelledOrderEmailSubject': 'nostrud consectetur in',
    'NotifyOnCancelledOrderEmailMessage': 'in',
    'POStyle': 18585521,
    'POEmailNotification': false,
    'POShippingInfo': 'aliquip anim commodo',
    'POPaymentInfo': 'voluptate irure Lorem',
    'POAdditionalNotes': 'cupidatat ipsum sint dolore',
    'POEmailSubject': 'cillum quis magna minim dolor'
  },
  {
    'DistributorID': -21099663,
    'CompanyName': 'temp',
    'ContactName': 's',
    'Address': 'Ut qui culpa',
    'Address2': 'aute dolor non sed Excepte',
    'City': 'consequat Ut commodo Excepteur minim',
    'State': 'exercitation est sint fugiat deserunt',
    'Zip': 'qui anim',
    'Country': 'reprehenderit occaecat labore par',
    'Phone': 'ipsum adipisicing do',
    'Fax': 'qui',
    'Email': 'minim a',
    'Comments': 'dolore magna irure et',
    'NotifyOnNewOrder': true,
    'NotifyOnNewOrderEmailSubject': 'Duis sit dolore proident laboris',
    'NotifyOnNewOrderEmailMessage': 'in eiusmod qui',
    'UserID': 'culpa proident ut Excepteur velit',
    'LastUpdate': '1997-12-19T20:47:00.731Z',
    'IsDropShipper': true,
    'NotifyOnCancelledOrder': false,
    'NotifyOnCancelledOrderEmailSubject': 'ea cillum',
    'NotifyOnCancelledOrderEmailMessage': 'sit do veniam ut dolore',
    'POStyle': 39565019,
    'POEmailNotification': true,
    'POShippingInfo': 'ullamco ut',
    'POPaymentInfo': 'deserunt Excepteur',
    'POAdditionalNotes': 'amet in',
    'POEmailSubject': 'non consequat'
  },
  {
    'DistributorID': 34481800,
    'CompanyName': 'n',
    'ContactName': 'dolore nisi ',
    'Address': 'nulla reprehende',
    'Address2': 'eiusmod Duis aliqua ex',
    'City': 'occaecat e',
    'State': 'ut aliqua labore re',
    'Zip': 'cillum Duis',
    'Country': 'deserunt ullamco',
    'Phone': '',
    'Fax': 'anim ',
    'Email': 'Duis dolor',
    'Comments': 'non',
    'NotifyOnNewOrder': true,
    'NotifyOnNewOrderEmailSubject': 'sunt ut dolor velit',
    'NotifyOnNewOrderEmailMessage': 'ullamco',
    'UserID': 'amet sed ea',
    'LastUpdate': '1966-10-04T09:08:37.694Z',
    'IsDropShipper': false,
    'NotifyOnCancelledOrder': false,
    'NotifyOnCancelledOrderEmailSubject': 'eu in occaecat consequat',
    'NotifyOnCancelledOrderEmailMessage': 'deserunt adipisicing qui et quis',
    'POStyle': -93510217,
    'POEmailNotification': false,
    'POShippingInfo': 'sint est commodo',
    'POPaymentInfo': 'laboris officia elit labore occaecat',
    'POAdditionalNotes': 'in',
    'POEmailSubject': 'laborum voluptate incididunt'
  },
  {
    'DistributorID': -54174892,
    'CompanyName': 'eiusmod',
    'ContactName': 'sed',
    'Address': 'cillum pariatur',
    'Address2': 'laboris',
    'City': 'ad dolore',
    'State': 'est',
    'Zip': 'ad cupidatat minim dolo',
    'Country': 'Lo',
    'Phone': 'Duis ullamco officia',
    'Fax': 'ut velit ',
    'Email': 'consequat commodo exerc',
    'Comments': 'et nisi esse aliquip',
    'NotifyOnNewOrder': true,
    'NotifyOnNewOrderEmailSubject': 'officia nulla',
    'NotifyOnNewOrderEmailMessage': 'fugiat commodo in id',
    'UserID': 'Duis ex incididunt',
    'LastUpdate': '1945-03-13T00:32:27.317Z',
    'IsDropShipper': true,
    'NotifyOnCancelledOrder': false,
    'NotifyOnCancelledOrderEmailSubject': 'esse ut velit',
    'NotifyOnCancelledOrderEmailMessage': 'ut',
    'POStyle': 2053044,
    'POEmailNotification': true,
    'POShippingInfo': 'eu',
    'POPaymentInfo': 'Ut dolor pariatur',
    'POAdditionalNotes': 'eiusmod esse magna voluptate',
    'POEmailSubject': 'qui fugiat'
  },
  {
    'DistributorID': -91355787,
    'CompanyName': 'eu tempor adipisicing esse in',
    'ContactName': 'irure ut deser',
    'Address': 'dolor mollit labore',
    'Address2': 'aliquip ut in in sint',
    'City': 'aute ',
    'State': '',
    'Zip': 'nostrud aute p',
    'Country': 'dolor consectetur Ut qui',
    'Phone': 'Lorem nulla in ex',
    'Fax': 'cillum consectetur pariatur',
    'Email': 'ad voluptate',
    'Comments': 'labore ut',
    'NotifyOnNewOrder': true,
    'NotifyOnNewOrderEmailSubject': 'sint minim ',
    'NotifyOnNewOrderEmailMessage': 'elit occaecat incididunt nostrud',
    'UserID': 'consectetur',
    'LastUpdate': '1946-10-06T01:34:09.874Z',
    'IsDropShipper': true,
    'NotifyOnCancelledOrder': false,
    'NotifyOnCancelledOrderEmailSubject': 'dolore co',
    'NotifyOnCancelledOrderEmailMessage': 'velit aute magna consectetur cillum',
    'POStyle': 17935422,
    'POEmailNotification': false,
    'POShippingInfo': 'minim enim deserunt',
    'POPaymentInfo': 'aute eu',
    'POAdditionalNotes': 'id Lorem ad',
    'POEmailSubject': 'aliquip eu ut'
  }
];

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '[
  {
    "DistributorID": 83893738,
    "CompanyName": "culpa es",
    "ContactName": "eiusmod magna dolore consectetur",
    "Address": "consequat a",
    "Address2": "anim occaecat eiusmod ut",
    "City": "ea nostrud cupidatat",
    "State": "Lorem laboris dolore minim",
    "Zip": "elit pariatur sed",
    "Country": "nisi veniam",
    "Phone": "deserunt ea officia",
    "Fax": "cillum nisi",
    "Email": "ut cillum",
    "Comments": "laborum eiusmod",
    "NotifyOnNewOrder": false,
    "NotifyOnNewOrderEmailSubject": "incididunt dolor",
    "NotifyOnNewOrderEmailMessage": "in aliquip",
    "UserID": "est ut ex quis",
    "LastUpdate": "1990-01-18T12:23:49.693Z",
    "IsDropShipper": true,
    "NotifyOnCancelledOrder": false,
    "NotifyOnCancelledOrderEmailSubject": "nostrud consectetur in",
    "NotifyOnCancelledOrderEmailMessage": "in",
    "POStyle": 18585521,
    "POEmailNotification": false,
    "POShippingInfo": "aliquip anim commodo",
    "POPaymentInfo": "voluptate irure Lorem",
    "POAdditionalNotes": "cupidatat ipsum sint dolore",
    "POEmailSubject": "cillum quis magna minim dolor"
  },
  {
    "DistributorID": -21099663,
    "CompanyName": "temp",
    "ContactName": "s",
    "Address": "Ut qui culpa",
    "Address2": "aute dolor non sed Excepte",
    "City": "consequat Ut commodo Excepteur minim",
    "State": "exercitation est sint fugiat deserunt",
    "Zip": "qui anim",
    "Country": "reprehenderit occaecat labore par",
    "Phone": "ipsum adipisicing do",
    "Fax": "qui",
    "Email": "minim a",
    "Comments": "dolore magna irure et",
    "NotifyOnNewOrder": true,
    "NotifyOnNewOrderEmailSubject": "Duis sit dolore proident laboris",
    "NotifyOnNewOrderEmailMessage": "in eiusmod qui",
    "UserID": "culpa proident ut Excepteur velit",
    "LastUpdate": "1997-12-19T20:47:00.731Z",
    "IsDropShipper": true,
    "NotifyOnCancelledOrder": false,
    "NotifyOnCancelledOrderEmailSubject": "ea cillum",
    "NotifyOnCancelledOrderEmailMessage": "sit do veniam ut dolore",
    "POStyle": 39565019,
    "POEmailNotification": true,
    "POShippingInfo": "ullamco ut",
    "POPaymentInfo": "deserunt Excepteur",
    "POAdditionalNotes": "amet in",
    "POEmailSubject": "non consequat"
  },
  {
    "DistributorID": 34481800,
    "CompanyName": "n",
    "ContactName": "dolore nisi ",
    "Address": "nulla reprehende",
    "Address2": "eiusmod Duis aliqua ex",
    "City": "occaecat e",
    "State": "ut aliqua labore re",
    "Zip": "cillum Duis",
    "Country": "deserunt ullamco",
    "Phone": "",
    "Fax": "anim ",
    "Email": "Duis dolor",
    "Comments": "non",
    "NotifyOnNewOrder": true,
    "NotifyOnNewOrderEmailSubject": "sunt ut dolor velit",
    "NotifyOnNewOrderEmailMessage": "ullamco",
    "UserID": "amet sed ea",
    "LastUpdate": "1966-10-04T09:08:37.694Z",
    "IsDropShipper": false,
    "NotifyOnCancelledOrder": false,
    "NotifyOnCancelledOrderEmailSubject": "eu in occaecat consequat",
    "NotifyOnCancelledOrderEmailMessage": "deserunt adipisicing qui et quis",
    "POStyle": -93510217,
    "POEmailNotification": false,
    "POShippingInfo": "sint est commodo",
    "POPaymentInfo": "laboris officia elit labore occaecat",
    "POAdditionalNotes": "in",
    "POEmailSubject": "laborum voluptate incididunt"
  },
  {
    "DistributorID": -54174892,
    "CompanyName": "eiusmod",
    "ContactName": "sed",
    "Address": "cillum pariatur",
    "Address2": "laboris",
    "City": "ad dolore",
    "State": "est",
    "Zip": "ad cupidatat minim dolo",
    "Country": "Lo",
    "Phone": "Duis ullamco officia",
    "Fax": "ut velit ",
    "Email": "consequat commodo exerc",
    "Comments": "et nisi esse aliquip",
    "NotifyOnNewOrder": true,
    "NotifyOnNewOrderEmailSubject": "officia nulla",
    "NotifyOnNewOrderEmailMessage": "fugiat commodo in id",
    "UserID": "Duis ex incididunt",
    "LastUpdate": "1945-03-13T00:32:27.317Z",
    "IsDropShipper": true,
    "NotifyOnCancelledOrder": false,
    "NotifyOnCancelledOrderEmailSubject": "esse ut velit",
    "NotifyOnCancelledOrderEmailMessage": "ut",
    "POStyle": 2053044,
    "POEmailNotification": true,
    "POShippingInfo": "eu",
    "POPaymentInfo": "Ut dolor pariatur",
    "POAdditionalNotes": "eiusmod esse magna voluptate",
    "POEmailSubject": "qui fugiat"
  },
  {
    "DistributorID": -91355787,
    "CompanyName": "eu tempor adipisicing esse in",
    "ContactName": "irure ut deser",
    "Address": "dolor mollit labore",
    "Address2": "aliquip ut in in sint",
    "City": "aute ",
    "State": "",
    "Zip": "nostrud aute p",
    "Country": "dolor consectetur Ut qui",
    "Phone": "Lorem nulla in ex",
    "Fax": "cillum consectetur pariatur",
    "Email": "ad voluptate",
    "Comments": "labore ut",
    "NotifyOnNewOrder": true,
    "NotifyOnNewOrderEmailSubject": "sint minim ",
    "NotifyOnNewOrderEmailMessage": "elit occaecat incididunt nostrud",
    "UserID": "consectetur",
    "LastUpdate": "1946-10-06T01:34:09.874Z",
    "IsDropShipper": true,
    "NotifyOnCancelledOrder": false,
    "NotifyOnCancelledOrderEmailSubject": "dolore co",
    "NotifyOnCancelledOrderEmailMessage": "velit aute magna consectetur cillum",
    "POStyle": 17935422,
    "POEmailNotification": false,
    "POShippingInfo": "minim enim deserunt",
    "POPaymentInfo": "aute eu",
    "POAdditionalNotes": "id Lorem ad",
    "POEmailSubject": "aliquip eu ut"
  }
]'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  [
    {
      "DistributorID": 83893738,
      "CompanyName": "culpa es",
      "ContactName": "eiusmod magna dolore consectetur",
      "Address": "consequat a",
      "Address2": "anim occaecat eiusmod ut",
      "City": "ea nostrud cupidatat",
      "State": "Lorem laboris dolore minim",
      "Zip": "elit pariatur sed",
      "Country": "nisi veniam",
      "Phone": "deserunt ea officia",
      "Fax": "cillum nisi",
      "Email": "ut cillum",
      "Comments": "laborum eiusmod",
      "NotifyOnNewOrder": false,
      "NotifyOnNewOrderEmailSubject": "incididunt dolor",
      "NotifyOnNewOrderEmailMessage": "in aliquip",
      "UserID": "est ut ex quis",
      "LastUpdate": "1990-01-18T12:23:49.693Z",
      "IsDropShipper": true,
      "NotifyOnCancelledOrder": false,
      "NotifyOnCancelledOrderEmailSubject": "nostrud consectetur in",
      "NotifyOnCancelledOrderEmailMessage": "in",
      "POStyle": 18585521,
      "POEmailNotification": false,
      "POShippingInfo": "aliquip anim commodo",
      "POPaymentInfo": "voluptate irure Lorem",
      "POAdditionalNotes": "cupidatat ipsum sint dolore",
      "POEmailSubject": "cillum quis magna minim dolor"
    },
    {
      "DistributorID": -21099663,
      "CompanyName": "temp",
      "ContactName": "s",
      "Address": "Ut qui culpa",
      "Address2": "aute dolor non sed Excepte",
      "City": "consequat Ut commodo Excepteur minim",
      "State": "exercitation est sint fugiat deserunt",
      "Zip": "qui anim",
      "Country": "reprehenderit occaecat labore par",
      "Phone": "ipsum adipisicing do",
      "Fax": "qui",
      "Email": "minim a",
      "Comments": "dolore magna irure et",
      "NotifyOnNewOrder": true,
      "NotifyOnNewOrderEmailSubject": "Duis sit dolore proident laboris",
      "NotifyOnNewOrderEmailMessage": "in eiusmod qui",
      "UserID": "culpa proident ut Excepteur velit",
      "LastUpdate": "1997-12-19T20:47:00.731Z",
      "IsDropShipper": true,
      "NotifyOnCancelledOrder": false,
      "NotifyOnCancelledOrderEmailSubject": "ea cillum",
      "NotifyOnCancelledOrderEmailMessage": "sit do veniam ut dolore",
      "POStyle": 39565019,
      "POEmailNotification": true,
      "POShippingInfo": "ullamco ut",
      "POPaymentInfo": "deserunt Excepteur",
      "POAdditionalNotes": "amet in",
      "POEmailSubject": "non consequat"
    },
    {
      "DistributorID": 34481800,
      "CompanyName": "n",
      "ContactName": "dolore nisi ",
      "Address": "nulla reprehende",
      "Address2": "eiusmod Duis aliqua ex",
      "City": "occaecat e",
      "State": "ut aliqua labore re",
      "Zip": "cillum Duis",
      "Country": "deserunt ullamco",
      "Phone": "",
      "Fax": "anim ",
      "Email": "Duis dolor",
      "Comments": "non",
      "NotifyOnNewOrder": true,
      "NotifyOnNewOrderEmailSubject": "sunt ut dolor velit",
      "NotifyOnNewOrderEmailMessage": "ullamco",
      "UserID": "amet sed ea",
      "LastUpdate": "1966-10-04T09:08:37.694Z",
      "IsDropShipper": false,
      "NotifyOnCancelledOrder": false,
      "NotifyOnCancelledOrderEmailSubject": "eu in occaecat consequat",
      "NotifyOnCancelledOrderEmailMessage": "deserunt adipisicing qui et quis",
      "POStyle": -93510217,
      "POEmailNotification": false,
      "POShippingInfo": "sint est commodo",
      "POPaymentInfo": "laboris officia elit labore occaecat",
      "POAdditionalNotes": "in",
      "POEmailSubject": "laborum voluptate incididunt"
    },
    {
      "DistributorID": -54174892,
      "CompanyName": "eiusmod",
      "ContactName": "sed",
      "Address": "cillum pariatur",
      "Address2": "laboris",
      "City": "ad dolore",
      "State": "est",
      "Zip": "ad cupidatat minim dolo",
      "Country": "Lo",
      "Phone": "Duis ullamco officia",
      "Fax": "ut velit ",
      "Email": "consequat commodo exerc",
      "Comments": "et nisi esse aliquip",
      "NotifyOnNewOrder": true,
      "NotifyOnNewOrderEmailSubject": "officia nulla",
      "NotifyOnNewOrderEmailMessage": "fugiat commodo in id",
      "UserID": "Duis ex incididunt",
      "LastUpdate": "1945-03-13T00:32:27.317Z",
      "IsDropShipper": true,
      "NotifyOnCancelledOrder": false,
      "NotifyOnCancelledOrderEmailSubject": "esse ut velit",
      "NotifyOnCancelledOrderEmailMessage": "ut",
      "POStyle": 2053044,
      "POEmailNotification": true,
      "POShippingInfo": "eu",
      "POPaymentInfo": "Ut dolor pariatur",
      "POAdditionalNotes": "eiusmod esse magna voluptate",
      "POEmailSubject": "qui fugiat"
    },
    {
      "DistributorID": -91355787,
      "CompanyName": "eu tempor adipisicing esse in",
      "ContactName": "irure ut deser",
      "Address": "dolor mollit labore",
      "Address2": "aliquip ut in in sint",
      "City": "aute ",
      "State": "",
      "Zip": "nostrud aute p",
      "Country": "dolor consectetur Ut qui",
      "Phone": "Lorem nulla in ex",
      "Fax": "cillum consectetur pariatur",
      "Email": "ad voluptate",
      "Comments": "labore ut",
      "NotifyOnNewOrder": true,
      "NotifyOnNewOrderEmailSubject": "sint minim ",
      "NotifyOnNewOrderEmailMessage": "elit occaecat incididunt nostrud",
      "UserID": "consectetur",
      "LastUpdate": "1946-10-06T01:34:09.874Z",
      "IsDropShipper": true,
      "NotifyOnCancelledOrder": false,
      "NotifyOnCancelledOrderEmailSubject": "dolore co",
      "NotifyOnCancelledOrderEmailMessage": "velit aute magna consectetur cillum",
      "POStyle": 17935422,
      "POEmailNotification": false,
      "POShippingInfo": "minim enim deserunt",
      "POPaymentInfo": "aute eu",
      "POAdditionalNotes": "id Lorem ad",
      "POEmailSubject": "aliquip eu ut"
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"DistributorID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

This method is used to update multiple distributor records in the database. No {distributorid} parameters should be included. See [Data Structures](#distributor-object) for more information on the Distributor object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors`

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No Distributor found.

### Update a specific distributor
> To update a specific distributor in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#distributor-object) for more information on the Distributor object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors/{distributorid}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"DistributorID\": 56984833,
  \"CompanyName\": \"u\",
  \"ContactName\": \"dolor pariatur deserunt in\",
  \"Address\": \"mollit ut Ut eiusmod elit\",
  \"Address2\": \"id in ullamco anim\",
  \"City\": \"do tempor amet\",
  \"State\": \"exercitation enim\",
  \"Zip\": \"pro\",
  \"Country\": \"dolor laboris\",
  \"Phone\": \"nostrud\",
  \"Fax\": \"o\",
  \"Email\": \"quis\",
  \"Comments\": \"adipisicing culpa in\",
  \"NotifyOnNewOrder\": true,
  \"NotifyOnNewOrderEmailSubject\": \"incididunt\",
  \"NotifyOnNewOrderEmailMessage\": \"nostrud aliquip officia\",
  \"UserID\": \"enim consequat culpa eiusmod quis\",
  \"LastUpdate\": \"1976-11-11T08:02:17.995Z\",
  \"IsDropShipper\": false,
  \"NotifyOnCancelledOrder\": false,
  \"NotifyOnCancelledOrderEmailSubject\": \"commodo pariatur reprehenderit\",
  \"NotifyOnCancelledOrderEmailMessage\": \"in ad\",
  \"POStyle\": -90904862,
  \"POEmailNotification\": true,
  \"POShippingInfo\": \"nulla enim minim\",
  \"POPaymentInfo\": \"amet dolore aliqua sunt\",
  \"POAdditionalNotes\": \"irure eu\",
  \"POEmailSubject\": \"occaecat\"
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
  
    using (var content = new StringContent("{  \"DistributorID\": 56984833,  \"CompanyName\": \"u\",  \"ContactName\": \"dolor pariatur deserunt in\",  \"Address\": \"mollit ut Ut eiusmod elit\",  \"Address2\": \"id in ullamco anim\",  \"City\": \"do tempor amet\",  \"State\": \"exercitation enim\",  \"Zip\": \"pro\",  \"Country\": \"dolor laboris\",  \"Phone\": \"nostrud\",  \"Fax\": \"o\",  \"Email\": \"quis\",  \"Comments\": \"adipisicing culpa in\",  \"NotifyOnNewOrder\": true,  \"NotifyOnNewOrderEmailSubject\": \"incididunt\",  \"NotifyOnNewOrderEmailMessage\": \"nostrud aliquip officia\",  \"UserID\": \"enim consequat culpa eiusmod quis\",  \"LastUpdate\": \"1976-11-11T08:02:17.995Z\",  \"IsDropShipper\": false,  \"NotifyOnCancelledOrder\": false,  \"NotifyOnCancelledOrderEmailSubject\": \"commodo pariatur reprehenderit\",  \"NotifyOnCancelledOrderEmailMessage\": \"in ad\",  \"POStyle\": -90904862,  \"POEmailNotification\": true,  \"POShippingInfo\": \"nulla enim minim\",  \"POPaymentInfo\": \"amet dolore aliqua sunt\",  \"POAdditionalNotes\": \"irure eu\",  \"POEmailSubject\": \"occaecat\"}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Distributors/{distributorid}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors/{distributorid}');

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
  'DistributorID': 56984833,
  'CompanyName': 'u',
  'ContactName': 'dolor pariatur deserunt in',
  'Address': 'mollit ut Ut eiusmod elit',
  'Address2': 'id in ullamco anim',
  'City': 'do tempor amet',
  'State': 'exercitation enim',
  'Zip': 'pro',
  'Country': 'dolor laboris',
  'Phone': 'nostrud',
  'Fax': 'o',
  'Email': 'quis',
  'Comments': 'adipisicing culpa in',
  'NotifyOnNewOrder': true,
  'NotifyOnNewOrderEmailSubject': 'incididunt',
  'NotifyOnNewOrderEmailMessage': 'nostrud aliquip officia',
  'UserID': 'enim consequat culpa eiusmod quis',
  'LastUpdate': '1976-11-11T08:02:17.995Z',
  'IsDropShipper': false,
  'NotifyOnCancelledOrder': false,
  'NotifyOnCancelledOrderEmailSubject': 'commodo pariatur reprehenderit',
  'NotifyOnCancelledOrderEmailMessage': 'in ad',
  'POStyle': -90904862,
  'POEmailNotification': true,
  'POShippingInfo': 'nulla enim minim',
  'POPaymentInfo': 'amet dolore aliqua sunt',
  'POAdditionalNotes': 'irure eu',
  'POEmailSubject': 'occaecat'
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "DistributorID": 56984833,
  "CompanyName": "u",
  "ContactName": "dolor pariatur deserunt in",
  "Address": "mollit ut Ut eiusmod elit",
  "Address2": "id in ullamco anim",
  "City": "do tempor amet",
  "State": "exercitation enim",
  "Zip": "pro",
  "Country": "dolor laboris",
  "Phone": "nostrud",
  "Fax": "o",
  "Email": "quis",
  "Comments": "adipisicing culpa in",
  "NotifyOnNewOrder": true,
  "NotifyOnNewOrderEmailSubject": "incididunt",
  "NotifyOnNewOrderEmailMessage": "nostrud aliquip officia",
  "UserID": "enim consequat culpa eiusmod quis",
  "LastUpdate": "1976-11-11T08:02:17.995Z",
  "IsDropShipper": false,
  "NotifyOnCancelledOrder": false,
  "NotifyOnCancelledOrderEmailSubject": "commodo pariatur reprehenderit",
  "NotifyOnCancelledOrderEmailMessage": "in ad",
  "POStyle": -90904862,
  "POEmailNotification": true,
  "POShippingInfo": "nulla enim minim",
  "POPaymentInfo": "amet dolore aliqua sunt",
  "POAdditionalNotes": "irure eu",
  "POEmailSubject": "occaecat"
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors/{distributorid}', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "DistributorID": 56984833,
    "CompanyName": "u",
    "ContactName": "dolor pariatur deserunt in",
    "Address": "mollit ut Ut eiusmod elit",
    "Address2": "id in ullamco anim",
    "City": "do tempor amet",
    "State": "exercitation enim",
    "Zip": "pro",
    "Country": "dolor laboris",
    "Phone": "nostrud",
    "Fax": "o",
    "Email": "quis",
    "Comments": "adipisicing culpa in",
    "NotifyOnNewOrder": true,
    "NotifyOnNewOrderEmailSubject": "incididunt",
    "NotifyOnNewOrderEmailMessage": "nostrud aliquip officia",
    "UserID": "enim consequat culpa eiusmod quis",
    "LastUpdate": "1976-11-11T08:02:17.995Z",
    "IsDropShipper": false,
    "NotifyOnCancelledOrder": false,
    "NotifyOnCancelledOrderEmailSubject": "commodo pariatur reprehenderit",
    "NotifyOnCancelledOrderEmailMessage": "in ad",
    "POStyle": -90904862,
    "POEmailNotification": true,
    "POShippingInfo": "nulla enim minim",
    "POPaymentInfo": "amet dolore aliqua sunt",
    "POAdditionalNotes": "irure eu",
    "POEmailSubject": "occaecat"
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors/{distributorid}', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"DistributorID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

This method is used to update a single distributor record in the database. See [Data Structures](#distributor-object) for more information on the Distributor object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors/{id}`

#### URL Parameters
Parameter | Required | Description
--------- | ------- | -----------
id | required | The id of the distributor to update

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No Distributor found.


### Delete a Distributor
> To delete a Distributor from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors/{id}");
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
  
  using(var response = await httpClient.DeleteAsync("3dCartWebAPI/v1/Distributors/{id}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors/{id}');

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

response = RestClient.delete 'https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors/{id}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors/{id}', headers=headers)
request.get_method = lambda: 'DELETE'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"DistributorID",
    "Value":"1234",
    "Status":"200",
    "Message":"Deleted successfully",
  }
]
```

This method is used to delete a Distributor from the store.

#### HTTP Request
`DELETE https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors/{id}`

#### URL Parameters
Parameter | Required | Description
--------- | ------- | -----------
id | required | The id of the distributor to delete

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No Distributor found.