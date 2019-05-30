# Customers

## Customers

### Create a customer
> To create a Customer in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#customer-object) for more information on the Customer object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Customers");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"CustomerID\": 96318450,
  \"Email\": \"laborum velit aliquip\",
  \"Password\": \"\",
  \"BillingCompany\": \"dolore amet cillum\",
  \"BillingFirstName\": \"officia veniam\",
  \"BillingLastName\": \"in nulla tempor\",
  \"BillingAddress1\": \"aliqua sunt adipisicing mollit\",
  \"BillingAddress2\": \"ullamco cill\",
  \"BillingCity\": \"reprehenderit laboris ullamco \",
  \"BillingState\": \"aute tempor dolor\",
  \"BillingZipCode\": \"es\",
  \"BillingCountry\": \"cupidatat sint qui\",
  \"BillingPhoneNumber\": \"esse fugiat\",
  \"BillingTaxID\": \"proident\",
  \"ShippingCompany\": \"ea in sunt aute\",
  \"ShippingFirstName\": \"fugiat\",
  \"ShippingLastName\": \"ad venia\",
  \"ShippingAddress1\": \"esse sed\",
  \"ShippingAddress2\": \"commodo moll\",
  \"ShippingCity\": \"proident ipsum eiusmod cillum aute\",
  \"ShippingState\": \"commodo aliquip\",
  \"ShippingZipCode\": \"deseru\",
  \"ShippingCountry\": \"ut mollit minim\",
  \"ShippingPhoneNumber\": \"do n\",
  \"ShippingAddressType\": -44788774,
  \"CustomerGroupID\": 50520008,
  \"Enabled\": true,
  \"MailList\": false,
  \"NonTaxable\": true,
  \"DisableBillingSameAsShipping\": true,
  \"Comments\": \"eu\",
  \"AdditionalField1\": \"dolor sed adip\",
  \"AdditionalField2\": \"laboris elit Lorem minim\",
  \"AdditionalField3\": \"Duis ut enim eiusmod\",
  \"TotalStoreCredit\": -15431326.976344898,
  \"ResetPassword\": true
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
  
    using (var content = new StringContent("{  \"CustomerID\": 96318450,  \"Email\": \"laborum velit aliquip\",  \"Password\": \"\",  \"BillingCompany\": \"dolore amet cillum\",  \"BillingFirstName\": \"officia veniam\",  \"BillingLastName\": \"in nulla tempor\",  \"BillingAddress1\": \"aliqua sunt adipisicing mollit\",  \"BillingAddress2\": \"ullamco cill\",  \"BillingCity\": \"reprehenderit laboris ullamco \",  \"BillingState\": \"aute tempor dolor\",  \"BillingZipCode\": \"es\",  \"BillingCountry\": \"cupidatat sint qui\",  \"BillingPhoneNumber\": \"esse fugiat\",  \"BillingTaxID\": \"proident\",  \"ShippingCompany\": \"ea in sunt aute\",  \"ShippingFirstName\": \"fugiat\",  \"ShippingLastName\": \"ad venia\",  \"ShippingAddress1\": \"esse sed\",  \"ShippingAddress2\": \"commodo moll\",  \"ShippingCity\": \"proident ipsum eiusmod cillum aute\",  \"ShippingState\": \"commodo aliquip\",  \"ShippingZipCode\": \"deseru\",  \"ShippingCountry\": \"ut mollit minim\",  \"ShippingPhoneNumber\": \"do n\",  \"ShippingAddressType\": -44788774,  \"CustomerGroupID\": 50520008,  \"Enabled\": true,  \"MailList\": false,  \"NonTaxable\": true,  \"DisableBillingSameAsShipping\": true,  \"Comments\": \"eu\",  \"AdditionalField1\": \"dolor sed adip\",  \"AdditionalField2\": \"laboris elit Lorem minim\",  \"AdditionalField3\": \"Duis ut enim eiusmod\",  \"TotalStoreCredit\": -15431326.976344898,  \"ResetPassword\": true}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("3dCartWebAPI/v1/Customers", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Customers');

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
  'CustomerID': 96318450,
  'Email': 'laborum velit aliquip',
  'Password': '',
  'BillingCompany': 'dolore amet cillum',
  'BillingFirstName': 'officia veniam',
  'BillingLastName': 'in nulla tempor',
  'BillingAddress1': 'aliqua sunt adipisicing mollit',
  'BillingAddress2': 'ullamco cill',
  'BillingCity': 'reprehenderit laboris ullamco ',
  'BillingState': 'aute tempor dolor',
  'BillingZipCode': 'es',
  'BillingCountry': 'cupidatat sint qui',
  'BillingPhoneNumber': 'esse fugiat',
  'BillingTaxID': 'proident',
  'ShippingCompany': 'ea in sunt aute',
  'ShippingFirstName': 'fugiat',
  'ShippingLastName': 'ad venia',
  'ShippingAddress1': 'esse sed',
  'ShippingAddress2': 'commodo moll',
  'ShippingCity': 'proident ipsum eiusmod cillum aute',
  'ShippingState': 'commodo aliquip',
  'ShippingZipCode': 'deseru',
  'ShippingCountry': 'ut mollit minim',
  'ShippingPhoneNumber': 'do n',
  'ShippingAddressType': -44788774,
  'CustomerGroupID': 50520008,
  'Enabled': true,
  'MailList': false,
  'NonTaxable': true,
  'DisableBillingSameAsShipping': true,
  'Comments': 'eu',
  'AdditionalField1': 'dolor sed adip',
  'AdditionalField2': 'laboris elit Lorem minim',
  'AdditionalField3': 'Duis ut enim eiusmod',
  'TotalStoreCredit': -15431326.976344898,
  'ResetPassword': true
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "CustomerID": 96318450,
  "Email": "laborum velit aliquip",
  "Password": "",
  "BillingCompany": "dolore amet cillum",
  "BillingFirstName": "officia veniam",
  "BillingLastName": "in nulla tempor",
  "BillingAddress1": "aliqua sunt adipisicing mollit",
  "BillingAddress2": "ullamco cill",
  "BillingCity": "reprehenderit laboris ullamco ",
  "BillingState": "aute tempor dolor",
  "BillingZipCode": "es",
  "BillingCountry": "cupidatat sint qui",
  "BillingPhoneNumber": "esse fugiat",
  "BillingTaxID": "proident",
  "ShippingCompany": "ea in sunt aute",
  "ShippingFirstName": "fugiat",
  "ShippingLastName": "ad venia",
  "ShippingAddress1": "esse sed",
  "ShippingAddress2": "commodo moll",
  "ShippingCity": "proident ipsum eiusmod cillum aute",
  "ShippingState": "commodo aliquip",
  "ShippingZipCode": "deseru",
  "ShippingCountry": "ut mollit minim",
  "ShippingPhoneNumber": "do n",
  "ShippingAddressType": -44788774,
  "CustomerGroupID": 50520008,
  "Enabled": true,
  "MailList": false,
  "NonTaxable": true,
  "DisableBillingSameAsShipping": true,
  "Comments": "eu",
  "AdditionalField1": "dolor sed adip",
  "AdditionalField2": "laboris elit Lorem minim",
  "AdditionalField3": "Duis ut enim eiusmod",
  "TotalStoreCredit": -15431326.976344898,
  "ResetPassword": true
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.post 'https://apirest.3dcart.com/3dCartWebAPI/v1/Customers', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "CustomerID": 96318450,
    "Email": "laborum velit aliquip",
    "Password": "",
    "BillingCompany": "dolore amet cillum",
    "BillingFirstName": "officia veniam",
    "BillingLastName": "in nulla tempor",
    "BillingAddress1": "aliqua sunt adipisicing mollit",
    "BillingAddress2": "ullamco cill",
    "BillingCity": "reprehenderit laboris ullamco ",
    "BillingState": "aute tempor dolor",
    "BillingZipCode": "es",
    "BillingCountry": "cupidatat sint qui",
    "BillingPhoneNumber": "esse fugiat",
    "BillingTaxID": "proident",
    "ShippingCompany": "ea in sunt aute",
    "ShippingFirstName": "fugiat",
    "ShippingLastName": "ad venia",
    "ShippingAddress1": "esse sed",
    "ShippingAddress2": "commodo moll",
    "ShippingCity": "proident ipsum eiusmod cillum aute",
    "ShippingState": "commodo aliquip",
    "ShippingZipCode": "deseru",
    "ShippingCountry": "ut mollit minim",
    "ShippingPhoneNumber": "do n",
    "ShippingAddressType": -44788774,
    "CustomerGroupID": 50520008,
    "Enabled": true,
    "MailList": false,
    "NonTaxable": true,
    "DisableBillingSameAsShipping": true,
    "Comments": "eu",
    "AdditionalField1": "dolor sed adip",
    "AdditionalField2": "laboris elit Lorem minim",
    "AdditionalField3": "Duis ut enim eiusmod",
    "TotalStoreCredit": -15431326.976344898,
    "ResetPassword": true
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Customers', data=values, headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"CustomerID",
    "Value":"1234",
    "Status":"201",
    "Message":"Created successfully",
  }
]
```

This method is used to create a new Customer record in the system. See [Data Structures](#customer-object) for more information on the Customer object.

#### HTTP Request
`POST https://apirest.3dcart.com/3dCartWebAPI/v1/Customers`

#### Responses and Errors

Response Code | Description
------------- | ---------
201 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.

### Retrieve a list of customers from a specific customer group
> To retrieve a list of customers from a specific customer group, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups/{id}/Customers?limit=&offset=&email=&firstname=&lastname=&country=&state=&city=&phone=&countonly=&lastupdatestart=&lastupdateend=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/CustomerGroups/{id}/Customers"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups/{id}/Customers?limit=&offset=&email=&firstname=&lastname=&country=&state=&city=&phone=&countonly=&lastupdatestart=&lastupdateend=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups/{id}/Customers?limit=&offset=&email=&firstname=&lastname=&country=&state=&city=&phone=&countonly=&lastupdatestart=&lastupdateend=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups/{id}/Customers?limit=&offset=&email=&firstname=&lastname=&country=&state=&city=&phone=&countonly=&lastupdatestart=&lastupdateend=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#customer-object) for more information on the Customer object):

```json
[
  {
    "CustomerID": 1,
    "Email": "sample string 1",
    "Password": "sample string 2",
    "BillingCompany": "sample string 3",
    "BillingFirstName": "sample string 4",
    "BillingLastName": "sample string 5",
    "BillingAddress1": "sample string 6",
    "BillingAddress2": "sample string 7",
    "BillingCity": "sample string 8",
    "BillingState": "sample string 9",
    "BillingZipCode": "sample string 10",
    "BillingCountry": "sample string 11",
    "BillingPhoneNumber": "sample string 12",
    "BillingTaxID": "sample string 13",
    "ShippingCompany": "sample string 14",
    "ShippingFirstName": "sample string 15",
    "ShippingLastName": "sample string 16",
    "ShippingAddress1": "sample string 17",
    "ShippingAddress2": "sample string 18",
    "ShippingCity": "sample string 19",
    "ShippingState": "sample string 20",
    "ShippingZipCode": "sample string 21",
    "ShippingCountry": "sample string 22",
    "ShippingPhoneNumber": "sample string 23",
    "ShippingAddressType": 1,
    "CustomerGroupID": 1,
    "Enabled": true,
    "MailList": true,
    "NonTaxable": true,
    "DisableBillingSameAsShipping": true,
    "Comments": "sample string 24",
    "AdditionalField1": "sample string 25",
    "AdditionalField2": "sample string 26",
    "AdditionalField3": "sample string 27",
    "TotalStoreCredit": 1.1,
    "ResetPassword": true
  },
  {
    "CustomerID": 1,
    "Email": "sample string 1",
    "Password": "sample string 2",
    "BillingCompany": "sample string 3",
    "BillingFirstName": "sample string 4",
    "BillingLastName": "sample string 5",
    "BillingAddress1": "sample string 6",
    "BillingAddress2": "sample string 7",
    "BillingCity": "sample string 8",
    "BillingState": "sample string 9",
    "BillingZipCode": "sample string 10",
    "BillingCountry": "sample string 11",
    "BillingPhoneNumber": "sample string 12",
    "BillingTaxID": "sample string 13",
    "ShippingCompany": "sample string 14",
    "ShippingFirstName": "sample string 15",
    "ShippingLastName": "sample string 16",
    "ShippingAddress1": "sample string 17",
    "ShippingAddress2": "sample string 18",
    "ShippingCity": "sample string 19",
    "ShippingState": "sample string 20",
    "ShippingZipCode": "sample string 21",
    "ShippingCountry": "sample string 22",
    "ShippingPhoneNumber": "sample string 23",
    "ShippingAddressType": 1,
    "CustomerGroupID": 1,
    "Enabled": true,
    "MailList": true,
    "NonTaxable": true,
    "DisableBillingSameAsShipping": true,
    "Comments": "sample string 24",
    "AdditionalField1": "sample string 25",
    "AdditionalField2": "sample string 26",
    "AdditionalField3": "sample string 27",
    "TotalStoreCredit": 1.1,
    "ResetPassword": true
  }
]
```

This method can be used to retrieve a list of customers that belong to a specific customer group. See [Data Structures](#customer-object) for more information on the Customer object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/CustomerGroups/{id}/Customers`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
id | required | The id of the Customer Group you wish to retrieve customers from
limit | optional | Maximum number of items that can be returned
offset | optional | Starting point for the return data
email | optional | Email of the Customer
firstname | optional | Firstname of the Customer
lastname | optional | Lastname of the Customer
country | optional | Country name of the Customer
state | optional | State of the Customer
city | optional | City of the Customer
phone | optional | Phone number of the Customer
countonly | optional | Count the number of rows only
lastupdatestart | optional | Start Date that the customer was last updated (mm/dd/yyyy hh:mm:ss)
lastupdateend | optional | End Date that the customer was last updated (mm/dd/yyyy hh:mm:ss)

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The Customer Group was not found and/or contains no customer records.

### Retrieve a list of all customers
> To retrieve a list of all customers from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Customers?limit=&offset=&email=&firstname=&lastname=&country=&state=&city=&phone=&countonly=&lastupdatestart=&lastupdateend=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Customers"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Customers?limit=&offset=&email=&firstname=&lastname=&country=&state=&city=&phone=&countonly=&lastupdatestart=&lastupdateend=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Customers?limit=&offset=&email=&firstname=&lastname=&country=&state=&city=&phone=&countonly=&lastupdatestart=&lastupdateend=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Customers?limit=&offset=&email=&firstname=&lastname=&country=&state=&city=&phone=&countonly=&lastupdatestart=&lastupdateend=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#customer-object) for more information on the Customer object):

```json
[
  {
    "CustomerID": 1,
    "Email": "sample string 1",
    "Password": "sample string 2",
    "BillingCompany": "sample string 3",
    "BillingFirstName": "sample string 4",
    "BillingLastName": "sample string 5",
    "BillingAddress1": "sample string 6",
    "BillingAddress2": "sample string 7",
    "BillingCity": "sample string 8",
    "BillingState": "sample string 9",
    "BillingZipCode": "sample string 10",
    "BillingCountry": "sample string 11",
    "BillingPhoneNumber": "sample string 12",
    "BillingTaxID": "sample string 13",
    "ShippingCompany": "sample string 14",
    "ShippingFirstName": "sample string 15",
    "ShippingLastName": "sample string 16",
    "ShippingAddress1": "sample string 17",
    "ShippingAddress2": "sample string 18",
    "ShippingCity": "sample string 19",
    "ShippingState": "sample string 20",
    "ShippingZipCode": "sample string 21",
    "ShippingCountry": "sample string 22",
    "ShippingPhoneNumber": "sample string 23",
    "ShippingAddressType": 1,
    "CustomerGroupID": 1,
    "Enabled": true,
    "MailList": true,
    "NonTaxable": true,
    "DisableBillingSameAsShipping": true,
    "Comments": "sample string 24",
    "AdditionalField1": "sample string 25",
    "AdditionalField2": "sample string 26",
    "AdditionalField3": "sample string 27",
    "TotalStoreCredit": 1.1,
    "ResetPassword": true
  },
  {
    "CustomerID": 1,
    "Email": "sample string 1",
    "Password": "sample string 2",
    "BillingCompany": "sample string 3",
    "BillingFirstName": "sample string 4",
    "BillingLastName": "sample string 5",
    "BillingAddress1": "sample string 6",
    "BillingAddress2": "sample string 7",
    "BillingCity": "sample string 8",
    "BillingState": "sample string 9",
    "BillingZipCode": "sample string 10",
    "BillingCountry": "sample string 11",
    "BillingPhoneNumber": "sample string 12",
    "BillingTaxID": "sample string 13",
    "ShippingCompany": "sample string 14",
    "ShippingFirstName": "sample string 15",
    "ShippingLastName": "sample string 16",
    "ShippingAddress1": "sample string 17",
    "ShippingAddress2": "sample string 18",
    "ShippingCity": "sample string 19",
    "ShippingState": "sample string 20",
    "ShippingZipCode": "sample string 21",
    "ShippingCountry": "sample string 22",
    "ShippingPhoneNumber": "sample string 23",
    "ShippingAddressType": 1,
    "CustomerGroupID": 1,
    "Enabled": true,
    "MailList": true,
    "NonTaxable": true,
    "DisableBillingSameAsShipping": true,
    "Comments": "sample string 24",
    "AdditionalField1": "sample string 25",
    "AdditionalField2": "sample string 26",
    "AdditionalField3": "sample string 27",
    "TotalStoreCredit": 1.1,
    "ResetPassword": true
  }
]
```

This method is used to retrieve a list of all customers in the store. See [Data Structures](#customer-object) for more information on the Customer object.

#### HTTP REQUEST
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Customers`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
limit | optional | Maximum number of items that can be returned
offset | optional | Starting point for the return data
email | optional | Email of the Customer
firstname | optional | Firstname of the Customer
lastname | optional | Lastname of the Customer
country | optional | Country name of the Customer
state | optional | State of the Customer
city | optional | City of the Customer
phone | optional | Phone number of the Customer
countonly | optional | Count the number of rows only
lastupdatestart | optional | Start Date that the customer was last updated (mm/dd/yyyy hh:mm:ss)
lastupdateend | optional | End Date that the customer was last updated (mm/dd/yyyy hh:mm:ss)

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No Customer records found.

### Retrieve a specific customer by id 
> To retrieve a specific customer by id, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Customers/{id}");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Customers/{id}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Customers/{id}');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Customers/{id}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Customers/{id}', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#customer-object) for more information on the Customer object):

```json
[
  {
    "CustomerID": 1,
    "Email": "sample string 1",
    "Password": "sample string 2",
    "BillingCompany": "sample string 3",
    "BillingFirstName": "sample string 4",
    "BillingLastName": "sample string 5",
    "BillingAddress1": "sample string 6",
    "BillingAddress2": "sample string 7",
    "BillingCity": "sample string 8",
    "BillingState": "sample string 9",
    "BillingZipCode": "sample string 10",
    "BillingCountry": "sample string 11",
    "BillingPhoneNumber": "sample string 12",
    "BillingTaxID": "sample string 13",
    "ShippingCompany": "sample string 14",
    "ShippingFirstName": "sample string 15",
    "ShippingLastName": "sample string 16",
    "ShippingAddress1": "sample string 17",
    "ShippingAddress2": "sample string 18",
    "ShippingCity": "sample string 19",
    "ShippingState": "sample string 20",
    "ShippingZipCode": "sample string 21",
    "ShippingCountry": "sample string 22",
    "ShippingPhoneNumber": "sample string 23",
    "ShippingAddressType": 1,
    "CustomerGroupID": 1,
    "Enabled": true,
    "MailList": true,
    "NonTaxable": true,
    "DisableBillingSameAsShipping": true,
    "Comments": "sample string 24",
    "AdditionalField1": "sample string 25",
    "AdditionalField2": "sample string 26",
    "AdditionalField3": "sample string 27",
    "TotalStoreCredit": 1.1,
    "ResetPassword": true
  },
  {
    "CustomerID": 1,
    "Email": "sample string 1",
    "Password": "sample string 2",
    "BillingCompany": "sample string 3",
    "BillingFirstName": "sample string 4",
    "BillingLastName": "sample string 5",
    "BillingAddress1": "sample string 6",
    "BillingAddress2": "sample string 7",
    "BillingCity": "sample string 8",
    "BillingState": "sample string 9",
    "BillingZipCode": "sample string 10",
    "BillingCountry": "sample string 11",
    "BillingPhoneNumber": "sample string 12",
    "BillingTaxID": "sample string 13",
    "ShippingCompany": "sample string 14",
    "ShippingFirstName": "sample string 15",
    "ShippingLastName": "sample string 16",
    "ShippingAddress1": "sample string 17",
    "ShippingAddress2": "sample string 18",
    "ShippingCity": "sample string 19",
    "ShippingState": "sample string 20",
    "ShippingZipCode": "sample string 21",
    "ShippingCountry": "sample string 22",
    "ShippingPhoneNumber": "sample string 23",
    "ShippingAddressType": 1,
    "CustomerGroupID": 1,
    "Enabled": true,
    "MailList": true,
    "NonTaxable": true,
    "DisableBillingSameAsShipping": true,
    "Comments": "sample string 24",
    "AdditionalField1": "sample string 25",
    "AdditionalField2": "sample string 26",
    "AdditionalField3": "sample string 27",
    "TotalStoreCredit": 1.1,
    "ResetPassword": true
  }
]
```

This method is used to retrieve a specific customer record. See [Data Structures](#customer-object) for more information on the Customer object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Customers/{id}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
id | required | The id of the customer to retrieve

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | Customer record found.


### Update a list of customers
> To update a list of customers, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#customer-object) for more information on the Customer object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Customers");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "[
  {
    \"CustomerID\": 64338676,
    \"Email\": \"amet veniam nulla dolor\",
    \"Password\": \"cupidata\",
    \"BillingCompany\": \"Excepteu\",
    \"BillingFirstName\": \"nisi Excepteur voluptate sunt qui\",
    \"BillingLastName\": \"velit incididunt sunt cupidatat\",
    \"BillingAddress1\": \"laboris nulla consectetur et ut\",
    \"BillingAddress2\": \"es\",
    \"BillingCity\": \"id in\",
    \"BillingState\": \"esse in ullamco\",
    \"BillingZipCode\": \"ut dolor\",
    \"BillingCountry\": \"sed non proident et\",
    \"BillingPhoneNumber\": \"aliqua magna\",
    \"BillingTaxID\": \"eiusmod labore\",
    \"ShippingCompany\": \"sint nostrud\",
    \"ShippingFirstName\": \"aliquip Ut\",
    \"ShippingLastName\": \"ut pariatur elit\",
    \"ShippingAddress1\": \"tempor ullamco consectetur ven\",
    \"ShippingAddress2\": \"elit laborum\",
    \"ShippingCity\": \"in eu dolore\",
    \"ShippingState\": \"elit exercitation est sed\",
    \"ShippingZipCode\": \"aute elit u\",
    \"ShippingCountry\": \"dolore pariatur\",
    \"ShippingPhoneNumber\": \"esse est nulla\",
    \"ShippingAddressType\": -92146158,
    \"CustomerGroupID\": -9534380,
    \"Enabled\": true,
    \"MailList\": true,
    \"NonTaxable\": true,
    \"DisableBillingSameAsShipping\": false,
    \"Comments\": \"reprehenderit id esse\",
    \"AdditionalField1\": \"in reprehenderit\",
    \"AdditionalField2\": \"sit in pariatur magna Ut\",
    \"AdditionalField3\": \"ut nostrud Excepteur\",
    \"TotalStoreCredit\": -53539283.98542496,
    \"ResetPassword\": true
  },
  {
    \"CustomerID\": -55733958,
    \"Email\": \"dolore id adipisicing \",
    \"Password\": \"magna sint esse\",
    \"BillingCompany\": \"ad\",
    \"BillingFirstName\": \"irure\",
    \"BillingLastName\": \"veniam\",
    \"BillingAddress1\": \"enim proident\",
    \"BillingAddress2\": \"id sunt Excepteur magna\",
    \"BillingCity\": \"Lorem ipsum ea\",
    \"BillingState\": \"incididunt commodo\",
    \"BillingZipCode\": \"ex off\",
    \"BillingCountry\": \"ad laboris mollit am\",
    \"BillingPhoneNumber\": \"dolor ipsum nisi\",
    \"BillingTaxID\": \"consequat\",
    \"ShippingCompany\": \"id irure\",
    \"ShippingFirstName\": \"proident cupidatat\",
    \"ShippingLastName\": \"culpa minim\",
    \"ShippingAddress1\": \"Excepteur ea dolor commodo\",
    \"ShippingAddress2\": \"quis ut eiusmod do\",
    \"ShippingCity\": \"ad in eiusmod incididunt\",
    \"ShippingState\": \"aliquip aliqua\",
    \"ShippingZipCode\": \"do i\",
    \"ShippingCountry\": \"sint Duis in deserunt laboris\",
    \"ShippingPhoneNumber\": \"deserunt esse labore quis\",
    \"ShippingAddressType\": -91255990,
    \"CustomerGroupID\": 51189974,
    \"Enabled\": true,
    \"MailList\": false,
    \"NonTaxable\": false,
    \"DisableBillingSameAsShipping\": true,
    \"Comments\": \"amet in ad\",
    \"AdditionalField1\": \"qui sint quis anim consectetur\",
    \"AdditionalField2\": \"cillum consectetur\",
    \"AdditionalField3\": \"proident reprehenderit sit\",
    \"TotalStoreCredit\": 73592504.18052551,
    \"ResetPassword\": true
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
  
    using (var content = new StringContent("[  {    \"CustomerID\": 64338676,    \"Email\": \"amet veniam nulla dolor\",    \"Password\": \"cupidata\",    \"BillingCompany\": \"Excepteu\",    \"BillingFirstName\": \"nisi Excepteur voluptate sunt qui\",    \"BillingLastName\": \"velit incididunt sunt cupidatat\",    \"BillingAddress1\": \"laboris nulla consectetur et ut\",    \"BillingAddress2\": \"es\",    \"BillingCity\": \"id in\",    \"BillingState\": \"esse in ullamco\",    \"BillingZipCode\": \"ut dolor\",    \"BillingCountry\": \"sed non proident et\",    \"BillingPhoneNumber\": \"aliqua magna\",    \"BillingTaxID\": \"eiusmod labore\",    \"ShippingCompany\": \"sint nostrud\",    \"ShippingFirstName\": \"aliquip Ut\",    \"ShippingLastName\": \"ut pariatur elit\",    \"ShippingAddress1\": \"tempor ullamco consectetur ven\",    \"ShippingAddress2\": \"elit laborum\",    \"ShippingCity\": \"in eu dolore\",    \"ShippingState\": \"elit exercitation est sed\",    \"ShippingZipCode\": \"aute elit u\",    \"ShippingCountry\": \"dolore pariatur\",    \"ShippingPhoneNumber\": \"esse est nulla\",    \"ShippingAddressType\": -92146158,    \"CustomerGroupID\": -9534380,    \"Enabled\": true,    \"MailList\": true,    \"NonTaxable\": true,    \"DisableBillingSameAsShipping\": false,    \"Comments\": \"reprehenderit id esse\",    \"AdditionalField1\": \"in reprehenderit\",    \"AdditionalField2\": \"sit in pariatur magna Ut\",    \"AdditionalField3\": \"ut nostrud Excepteur\",    \"TotalStoreCredit\": -53539283.98542496,    \"ResetPassword\": true  },  {    \"CustomerID\": -55733958,    \"Email\": \"dolore id adipisicing \",    \"Password\": \"magna sint esse\",    \"BillingCompany\": \"ad\",    \"BillingFirstName\": \"irure\",    \"BillingLastName\": \"veniam\",    \"BillingAddress1\": \"enim proident\",    \"BillingAddress2\": \"id sunt Excepteur magna\",    \"BillingCity\": \"Lorem ipsum ea\",    \"BillingState\": \"incididunt commodo\",    \"BillingZipCode\": \"ex off\",    \"BillingCountry\": \"ad laboris mollit am\",    \"BillingPhoneNumber\": \"dolor ipsum nisi\",    \"BillingTaxID\": \"consequat\",    \"ShippingCompany\": \"id irure\",    \"ShippingFirstName\": \"proident cupidatat\",    \"ShippingLastName\": \"culpa minim\",    \"ShippingAddress1\": \"Excepteur ea dolor commodo\",    \"ShippingAddress2\": \"quis ut eiusmod do\",    \"ShippingCity\": \"ad in eiusmod incididunt\",    \"ShippingState\": \"aliquip aliqua\",    \"ShippingZipCode\": \"do i\",    \"ShippingCountry\": \"sint Duis in deserunt laboris\",    \"ShippingPhoneNumber\": \"deserunt esse labore quis\",    \"ShippingAddressType\": -91255990,    \"CustomerGroupID\": 51189974,    \"Enabled\": true,    \"MailList\": false,    \"NonTaxable\": false,    \"DisableBillingSameAsShipping\": true,    \"Comments\": \"amet in ad\",    \"AdditionalField1\": \"qui sint quis anim consectetur\",    \"AdditionalField2\": \"cillum consectetur\",    \"AdditionalField3\": \"proident reprehenderit sit\",    \"TotalStoreCredit\": 73592504.18052551,    \"ResetPassword\": true  }]", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Customers", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Customers');

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
    'CustomerID': 64338676,
    'Email': 'amet veniam nulla dolor',
    'Password': 'cupidata',
    'BillingCompany': 'Excepteu',
    'BillingFirstName': 'nisi Excepteur voluptate sunt qui',
    'BillingLastName': 'velit incididunt sunt cupidatat',
    'BillingAddress1': 'laboris nulla consectetur et ut',
    'BillingAddress2': 'es',
    'BillingCity': 'id in',
    'BillingState': 'esse in ullamco',
    'BillingZipCode': 'ut dolor',
    'BillingCountry': 'sed non proident et',
    'BillingPhoneNumber': 'aliqua magna',
    'BillingTaxID': 'eiusmod labore',
    'ShippingCompany': 'sint nostrud',
    'ShippingFirstName': 'aliquip Ut',
    'ShippingLastName': 'ut pariatur elit',
    'ShippingAddress1': 'tempor ullamco consectetur ven',
    'ShippingAddress2': 'elit laborum',
    'ShippingCity': 'in eu dolore',
    'ShippingState': 'elit exercitation est sed',
    'ShippingZipCode': 'aute elit u',
    'ShippingCountry': 'dolore pariatur',
    'ShippingPhoneNumber': 'esse est nulla',
    'ShippingAddressType': -92146158,
    'CustomerGroupID': -9534380,
    'Enabled': true,
    'MailList': true,
    'NonTaxable': true,
    'DisableBillingSameAsShipping': false,
    'Comments': 'reprehenderit id esse',
    'AdditionalField1': 'in reprehenderit',
    'AdditionalField2': 'sit in pariatur magna Ut',
    'AdditionalField3': 'ut nostrud Excepteur',
    'TotalStoreCredit': -53539283.98542496,
    'ResetPassword': true
  },
  {
    'CustomerID': -55733958,
    'Email': 'dolore id adipisicing ',
    'Password': 'magna sint esse',
    'BillingCompany': 'ad',
    'BillingFirstName': 'irure',
    'BillingLastName': 'veniam',
    'BillingAddress1': 'enim proident',
    'BillingAddress2': 'id sunt Excepteur magna',
    'BillingCity': 'Lorem ipsum ea',
    'BillingState': 'incididunt commodo',
    'BillingZipCode': 'ex off',
    'BillingCountry': 'ad laboris mollit am',
    'BillingPhoneNumber': 'dolor ipsum nisi',
    'BillingTaxID': 'consequat',
    'ShippingCompany': 'id irure',
    'ShippingFirstName': 'proident cupidatat',
    'ShippingLastName': 'culpa minim',
    'ShippingAddress1': 'Excepteur ea dolor commodo',
    'ShippingAddress2': 'quis ut eiusmod do',
    'ShippingCity': 'ad in eiusmod incididunt',
    'ShippingState': 'aliquip aliqua',
    'ShippingZipCode': 'do i',
    'ShippingCountry': 'sint Duis in deserunt laboris',
    'ShippingPhoneNumber': 'deserunt esse labore quis',
    'ShippingAddressType': -91255990,
    'CustomerGroupID': 51189974,
    'Enabled': true,
    'MailList': false,
    'NonTaxable': false,
    'DisableBillingSameAsShipping': true,
    'Comments': 'amet in ad',
    'AdditionalField1': 'qui sint quis anim consectetur',
    'AdditionalField2': 'cillum consectetur',
    'AdditionalField3': 'proident reprehenderit sit',
    'TotalStoreCredit': 73592504.18052551,
    'ResetPassword': true
  }
];

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '[
  {
    "CustomerID": 64338676,
    "Email": "amet veniam nulla dolor",
    "Password": "cupidata",
    "BillingCompany": "Excepteu",
    "BillingFirstName": "nisi Excepteur voluptate sunt qui",
    "BillingLastName": "velit incididunt sunt cupidatat",
    "BillingAddress1": "laboris nulla consectetur et ut",
    "BillingAddress2": "es",
    "BillingCity": "id in",
    "BillingState": "esse in ullamco",
    "BillingZipCode": "ut dolor",
    "BillingCountry": "sed non proident et",
    "BillingPhoneNumber": "aliqua magna",
    "BillingTaxID": "eiusmod labore",
    "ShippingCompany": "sint nostrud",
    "ShippingFirstName": "aliquip Ut",
    "ShippingLastName": "ut pariatur elit",
    "ShippingAddress1": "tempor ullamco consectetur ven",
    "ShippingAddress2": "elit laborum",
    "ShippingCity": "in eu dolore",
    "ShippingState": "elit exercitation est sed",
    "ShippingZipCode": "aute elit u",
    "ShippingCountry": "dolore pariatur",
    "ShippingPhoneNumber": "esse est nulla",
    "ShippingAddressType": -92146158,
    "CustomerGroupID": -9534380,
    "Enabled": true,
    "MailList": true,
    "NonTaxable": true,
    "DisableBillingSameAsShipping": false,
    "Comments": "reprehenderit id esse",
    "AdditionalField1": "in reprehenderit",
    "AdditionalField2": "sit in pariatur magna Ut",
    "AdditionalField3": "ut nostrud Excepteur",
    "TotalStoreCredit": -53539283.98542496,
    "ResetPassword": true
  },
  {
    "CustomerID": -55733958,
    "Email": "dolore id adipisicing ",
    "Password": "magna sint esse",
    "BillingCompany": "ad",
    "BillingFirstName": "irure",
    "BillingLastName": "veniam",
    "BillingAddress1": "enim proident",
    "BillingAddress2": "id sunt Excepteur magna",
    "BillingCity": "Lorem ipsum ea",
    "BillingState": "incididunt commodo",
    "BillingZipCode": "ex off",
    "BillingCountry": "ad laboris mollit am",
    "BillingPhoneNumber": "dolor ipsum nisi",
    "BillingTaxID": "consequat",
    "ShippingCompany": "id irure",
    "ShippingFirstName": "proident cupidatat",
    "ShippingLastName": "culpa minim",
    "ShippingAddress1": "Excepteur ea dolor commodo",
    "ShippingAddress2": "quis ut eiusmod do",
    "ShippingCity": "ad in eiusmod incididunt",
    "ShippingState": "aliquip aliqua",
    "ShippingZipCode": "do i",
    "ShippingCountry": "sint Duis in deserunt laboris",
    "ShippingPhoneNumber": "deserunt esse labore quis",
    "ShippingAddressType": -91255990,
    "CustomerGroupID": 51189974,
    "Enabled": true,
    "MailList": false,
    "NonTaxable": false,
    "DisableBillingSameAsShipping": true,
    "Comments": "amet in ad",
    "AdditionalField1": "qui sint quis anim consectetur",
    "AdditionalField2": "cillum consectetur",
    "AdditionalField3": "proident reprehenderit sit",
    "TotalStoreCredit": 73592504.18052551,
    "ResetPassword": true
  }
]'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Customers', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  [
    {
      "CustomerID": 64338676,
      "Email": "amet veniam nulla dolor",
      "Password": "cupidata",
      "BillingCompany": "Excepteu",
      "BillingFirstName": "nisi Excepteur voluptate sunt qui",
      "BillingLastName": "velit incididunt sunt cupidatat",
      "BillingAddress1": "laboris nulla consectetur et ut",
      "BillingAddress2": "es",
      "BillingCity": "id in",
      "BillingState": "esse in ullamco",
      "BillingZipCode": "ut dolor",
      "BillingCountry": "sed non proident et",
      "BillingPhoneNumber": "aliqua magna",
      "BillingTaxID": "eiusmod labore",
      "ShippingCompany": "sint nostrud",
      "ShippingFirstName": "aliquip Ut",
      "ShippingLastName": "ut pariatur elit",
      "ShippingAddress1": "tempor ullamco consectetur ven",
      "ShippingAddress2": "elit laborum",
      "ShippingCity": "in eu dolore",
      "ShippingState": "elit exercitation est sed",
      "ShippingZipCode": "aute elit u",
      "ShippingCountry": "dolore pariatur",
      "ShippingPhoneNumber": "esse est nulla",
      "ShippingAddressType": -92146158,
      "CustomerGroupID": -9534380,
      "Enabled": true,
      "MailList": true,
      "NonTaxable": true,
      "DisableBillingSameAsShipping": false,
      "Comments": "reprehenderit id esse",
      "AdditionalField1": "in reprehenderit",
      "AdditionalField2": "sit in pariatur magna Ut",
      "AdditionalField3": "ut nostrud Excepteur",
      "TotalStoreCredit": -53539283.98542496,
      "ResetPassword": true
    },
    {
      "CustomerID": -55733958,
      "Email": "dolore id adipisicing ",
      "Password": "magna sint esse",
      "BillingCompany": "ad",
      "BillingFirstName": "irure",
      "BillingLastName": "veniam",
      "BillingAddress1": "enim proident",
      "BillingAddress2": "id sunt Excepteur magna",
      "BillingCity": "Lorem ipsum ea",
      "BillingState": "incididunt commodo",
      "BillingZipCode": "ex off",
      "BillingCountry": "ad laboris mollit am",
      "BillingPhoneNumber": "dolor ipsum nisi",
      "BillingTaxID": "consequat",
      "ShippingCompany": "id irure",
      "ShippingFirstName": "proident cupidatat",
      "ShippingLastName": "culpa minim",
      "ShippingAddress1": "Excepteur ea dolor commodo",
      "ShippingAddress2": "quis ut eiusmod do",
      "ShippingCity": "ad in eiusmod incididunt",
      "ShippingState": "aliquip aliqua",
      "ShippingZipCode": "do i",
      "ShippingCountry": "sint Duis in deserunt laboris",
      "ShippingPhoneNumber": "deserunt esse labore quis",
      "ShippingAddressType": -91255990,
      "CustomerGroupID": 51189974,
      "Enabled": true,
      "MailList": false,
      "NonTaxable": false,
      "DisableBillingSameAsShipping": true,
      "Comments": "amet in ad",
      "AdditionalField1": "qui sint quis anim consectetur",
      "AdditionalField2": "cillum consectetur",
      "AdditionalField3": "proident reprehenderit sit",
      "TotalStoreCredit": 73592504.18052551,
      "ResetPassword": true
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Customers', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"CustomerID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

This method is used to update multiple customers in the system. No URL parameters should be included. See [Data Structures](#customer-object) for more information on the Customer object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Customers`

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | One or more Customer records were not found.

### Update a specific customer by id
> To update a specific customer, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#customer-object) for more information on the Customer object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Customers/{customerid}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"CustomerID\": 97613232,
  \"Email\": \"incididunt exercitation in labore\",
  \"Password\": \"Ut ve\",
  \"BillingCompany\": \"id mollit aute\",
  \"BillingFirstName\": \"et magna in e\",
  \"BillingLastName\": \"nulla non anim est\",
  \"BillingAddress1\": \"velit reprehend\",
  \"BillingAddress2\": \"pariatur cupidatat dolore\",
  \"BillingCity\": \"dolor\",
  \"BillingState\": \"fugiat adipisicing\",
  \"BillingZipCode\": \"paria\",
  \"BillingCountry\": \"Lorem consequat laborum\",
  \"BillingPhoneNumber\": \"adipisicing id anim non ut\",
  \"BillingTaxID\": \"eiusmod nisi\",
  \"ShippingCompany\": \"irure\",
  \"ShippingFirstName\": \"ad fugiat\",
  \"ShippingLastName\": \"sunt minim id\",
  \"ShippingAddress1\": \"elit Excepteur\",
  \"ShippingAddress2\": \"adipisicing Excepteur labore\",
  \"ShippingCity\": \"eu\",
  \"ShippingState\": \"et fugiat laborum irure labore\",
  \"ShippingZipCode\": \"ad\",
  \"ShippingCountry\": \"non eu\",
  \"ShippingPhoneNumber\": \"laborum aliquip\",
  \"ShippingAddressType\": -32447465,
  \"CustomerGroupID\": -83671539,
  \"Enabled\": false,
  \"MailList\": true,
  \"NonTaxable\": false,
  \"DisableBillingSameAsShipping\": true,
  \"Comments\": \"dolor quis nostrud aliquip\",
  \"AdditionalField1\": \"proident cillum sed\",
  \"AdditionalField2\": \"ullamco irure consectetur aliquip\",
  \"AdditionalField3\": \"reprehenderit adipisicing ipsum aliqua nulla\",
  \"TotalStoreCredit\": 44268536.64587903,
  \"ResetPassword\": true
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
  
    using (var content = new StringContent("{  \"CustomerID\": 97613232,  \"Email\": \"incididunt exercitation in labore\",  \"Password\": \"Ut ve\",  \"BillingCompany\": \"id mollit aute\",  \"BillingFirstName\": \"et magna in e\",  \"BillingLastName\": \"nulla non anim est\",  \"BillingAddress1\": \"velit reprehend\",  \"BillingAddress2\": \"pariatur cupidatat dolore\",  \"BillingCity\": \"dolor\",  \"BillingState\": \"fugiat adipisicing\",  \"BillingZipCode\": \"paria\",  \"BillingCountry\": \"Lorem consequat laborum\",  \"BillingPhoneNumber\": \"adipisicing id anim non ut\",  \"BillingTaxID\": \"eiusmod nisi\",  \"ShippingCompany\": \"irure\",  \"ShippingFirstName\": \"ad fugiat\",  \"ShippingLastName\": \"sunt minim id\",  \"ShippingAddress1\": \"elit Excepteur\",  \"ShippingAddress2\": \"adipisicing Excepteur labore\",  \"ShippingCity\": \"eu\",  \"ShippingState\": \"et fugiat laborum irure labore\",  \"ShippingZipCode\": \"ad\",  \"ShippingCountry\": \"non eu\",  \"ShippingPhoneNumber\": \"laborum aliquip\",  \"ShippingAddressType\": -32447465,  \"CustomerGroupID\": -83671539,  \"Enabled\": false,  \"MailList\": true,  \"NonTaxable\": false,  \"DisableBillingSameAsShipping\": true,  \"Comments\": \"dolor quis nostrud aliquip\",  \"AdditionalField1\": \"proident cillum sed\",  \"AdditionalField2\": \"ullamco irure consectetur aliquip\",  \"AdditionalField3\": \"reprehenderit adipisicing ipsum aliqua nulla\",  \"TotalStoreCredit\": 44268536.64587903,  \"ResetPassword\": true}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Customers/{customerid}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Customers/{customerid}');

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
  'CustomerID': 97613232,
  'Email': 'incididunt exercitation in labore',
  'Password': 'Ut ve',
  'BillingCompany': 'id mollit aute',
  'BillingFirstName': 'et magna in e',
  'BillingLastName': 'nulla non anim est',
  'BillingAddress1': 'velit reprehend',
  'BillingAddress2': 'pariatur cupidatat dolore',
  'BillingCity': 'dolor',
  'BillingState': 'fugiat adipisicing',
  'BillingZipCode': 'paria',
  'BillingCountry': 'Lorem consequat laborum',
  'BillingPhoneNumber': 'adipisicing id anim non ut',
  'BillingTaxID': 'eiusmod nisi',
  'ShippingCompany': 'irure',
  'ShippingFirstName': 'ad fugiat',
  'ShippingLastName': 'sunt minim id',
  'ShippingAddress1': 'elit Excepteur',
  'ShippingAddress2': 'adipisicing Excepteur labore',
  'ShippingCity': 'eu',
  'ShippingState': 'et fugiat laborum irure labore',
  'ShippingZipCode': 'ad',
  'ShippingCountry': 'non eu',
  'ShippingPhoneNumber': 'laborum aliquip',
  'ShippingAddressType': -32447465,
  'CustomerGroupID': -83671539,
  'Enabled': false,
  'MailList': true,
  'NonTaxable': false,
  'DisableBillingSameAsShipping': true,
  'Comments': 'dolor quis nostrud aliquip',
  'AdditionalField1': 'proident cillum sed',
  'AdditionalField2': 'ullamco irure consectetur aliquip',
  'AdditionalField3': 'reprehenderit adipisicing ipsum aliqua nulla',
  'TotalStoreCredit': 44268536.64587903,
  'ResetPassword': true
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "CustomerID": 97613232,
  "Email": "incididunt exercitation in labore",
  "Password": "Ut ve",
  "BillingCompany": "id mollit aute",
  "BillingFirstName": "et magna in e",
  "BillingLastName": "nulla non anim est",
  "BillingAddress1": "velit reprehend",
  "BillingAddress2": "pariatur cupidatat dolore",
  "BillingCity": "dolor",
  "BillingState": "fugiat adipisicing",
  "BillingZipCode": "paria",
  "BillingCountry": "Lorem consequat laborum",
  "BillingPhoneNumber": "adipisicing id anim non ut",
  "BillingTaxID": "eiusmod nisi",
  "ShippingCompany": "irure",
  "ShippingFirstName": "ad fugiat",
  "ShippingLastName": "sunt minim id",
  "ShippingAddress1": "elit Excepteur",
  "ShippingAddress2": "adipisicing Excepteur labore",
  "ShippingCity": "eu",
  "ShippingState": "et fugiat laborum irure labore",
  "ShippingZipCode": "ad",
  "ShippingCountry": "non eu",
  "ShippingPhoneNumber": "laborum aliquip",
  "ShippingAddressType": -32447465,
  "CustomerGroupID": -83671539,
  "Enabled": false,
  "MailList": true,
  "NonTaxable": false,
  "DisableBillingSameAsShipping": true,
  "Comments": "dolor quis nostrud aliquip",
  "AdditionalField1": "proident cillum sed",
  "AdditionalField2": "ullamco irure consectetur aliquip",
  "AdditionalField3": "reprehenderit adipisicing ipsum aliqua nulla",
  "TotalStoreCredit": 44268536.64587903,
  "ResetPassword": true
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Customers/{customerid}', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "CustomerID": 97613232,
    "Email": "incididunt exercitation in labore",
    "Password": "Ut ve",
    "BillingCompany": "id mollit aute",
    "BillingFirstName": "et magna in e",
    "BillingLastName": "nulla non anim est",
    "BillingAddress1": "velit reprehend",
    "BillingAddress2": "pariatur cupidatat dolore",
    "BillingCity": "dolor",
    "BillingState": "fugiat adipisicing",
    "BillingZipCode": "paria",
    "BillingCountry": "Lorem consequat laborum",
    "BillingPhoneNumber": "adipisicing id anim non ut",
    "BillingTaxID": "eiusmod nisi",
    "ShippingCompany": "irure",
    "ShippingFirstName": "ad fugiat",
    "ShippingLastName": "sunt minim id",
    "ShippingAddress1": "elit Excepteur",
    "ShippingAddress2": "adipisicing Excepteur labore",
    "ShippingCity": "eu",
    "ShippingState": "et fugiat laborum irure labore",
    "ShippingZipCode": "ad",
    "ShippingCountry": "non eu",
    "ShippingPhoneNumber": "laborum aliquip",
    "ShippingAddressType": -32447465,
    "CustomerGroupID": -83671539,
    "Enabled": false,
    "MailList": true,
    "NonTaxable": false,
    "DisableBillingSameAsShipping": true,
    "Comments": "dolor quis nostrud aliquip",
    "AdditionalField1": "proident cillum sed",
    "AdditionalField2": "ullamco irure consectetur aliquip",
    "AdditionalField3": "reprehenderit adipisicing ipsum aliqua nulla",
    "TotalStoreCredit": 44268536.64587903,
    "ResetPassword": true
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Customers/{customerid}', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"CustomerID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

This method is used to update a single customer record in the database. The {customerid} parameter specifies which customer record to update. See [Data Structures](#customer-object) for more information on the Customer object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Customers/{customerid}`

#### URL Parameters
Parameter | Required | Description
--------- | ------- | -----------
customerid | required | The customer ID of the customer to update

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The Customer record was not found.

### Delete a Customer in the system
> To delete a customer from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Customers/{id}");
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
  
  using(var response = await httpClient.DeleteAsync("3dCartWebAPI/v1/Customers/{id}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Customers/{id}');

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

response = RestClient.delete 'https://apirest.3dcart.com/3dCartWebAPI/v1/Customers/{id}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Customers/{id}', headers=headers)
request.get_method = lambda: 'DELETE'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"CustomerID",
    "Value":"1234",
    "Status":"200",
    "Message":"Deleted successfully",
  }
]
```

This method is used to delete customer records.

#### HTTP Request
`DELETE https://apirest.3dcart.com/3dCartWebAPI/v1/Customers/{id}`

#### URL Parameters
Parameter | Required | Description
--------- | ------- | -----------
id | required | The customer ID of the customer to delete

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The Customer record was not found.