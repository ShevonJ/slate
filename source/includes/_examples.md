# Examples

## Importing orders from a 3rd party system

### Warnings

<aside class="warning">
When importing orders from a 3rd party system you may or may not want certain store functions to occur, such as sending notification emails or updating inventory. For these scenarios, we've made the following URL query parameters available:
<ul>
<li>bypassorderprocessing - Setting this query parameter to 1 (true) will will bypass/ignore stock updates, gift certificates generation, reward points accumulation/redemption, etc.</li>
<li>bypassorderemail - Setting this query parameter to 1 (true) will bypass sending the customer status notification emails if normally applicable</li>
</ul>
If these parameters are excluded or set to 0, notification emails and after order processing will occur.
</aside>

### Prerequisites

<aside class="notice">
When importing orders from a 3rd party system there are some prerequisites that must be considered:
<ol>
<li>The CustomerID field is a required field, so Customer records should be imported first using the POST method to <a href="#create-a-customer" target="_blank">create a customer</a> and the new CustomerID value returned should be saved for the order import.</li>
<li>The BillingPaymentMethodID field is a required field. Since the order is being imported from another system, the source ID will not match the BillingPaymentMethodID on the 3dcart side, or this may not match with any available payment methods configured within the store if the order is old and used a method no longer available. An "Offline" payment method(s) should be created for these cases, and the ID of the new payment method(s) used as the BillingPaymentMethodID.</li>
<li>In the OrderItemList, the CatalogID field is required, so Products should be imported first using the POST method to <a href="#create-a-product" target="_blank">create a product</a> and the new CatalogID value returned should be saved for the order import.</li>
</ol>
</aside>

### Importing orders
> Order example 1

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Orders?bypassorderprocessing=&bypassorderemail=");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"InvoiceNumberPrefix\": \"ABC-\",
  \"InvoiceNumber\": 123456,
  \"CustomerID\": 1,
  \"OrderDate\": \"05/01/2019 09:49\",
  \"OrderStatusID\": 4, // Most likely the Shipped status id
  \"BillingFirstName\": \"John\",
  \"BillingLastName\": \"Smith\",
  \"BillingCompany\": \"ACME, Inc.\",
  \"BillingAddress\": \"123 Main St.\",
  \"BillingAddress2\": \"Suite 100\",
  \"BillingCity\": \"Tamarac\",
  \"BillingState\": \"FL\",
  \"BillingZipCode\": \"33321\",
  \"BillingCountry\": \"US\",
  \"BillingPhoneNumber\": \"8008286650\",
  \"BillingEmail\": \"john.smith@acme.com\",
  \"BillingPaymentMethod\": \"Payment Processor\",
  \"BillingOnLinePayment\": false,
  \"BillingPaymentMethodID\": \"123\",
  \"ShipmentList\": [
    {
      \"ShipmentBoxes\": 1,
      \"ShipmentInternalComment\": \"Extra packing material\",
      \"ShipmentOrderStatus\": 1, // Most likely the Shipped status id
      \"ShipmentAddress\": \"123 Main St.\",
      \"ShipmentAddress2\": \"Suite 100\",
      \"ShipmentAlias\": \"Alias\",
      \"ShipmentCity\": \"Tamarac\",
      \"ShipmentCompany\": \"ACME, Inc.\",
      \"ShipmentCost\": 10.00,
      \"ShipmentCountry\": \"US\",
      \"ShipmentEmail\": \"john.smith@acme.com\",
      \"ShipmentFirstName\": \"John\",
      \"ShipmentLastName\": \"Smith\",
      \"ShipmentMethodName\": \"UPS Ground\",
      \"ShipmentShippedDate\": \"05/01/2019 09:49\",
      \"ShipmentPhone\": \"8008286650\",
      \"ShipmentState\": \"FL\",
      \"ShipmentZipCode\": \"33321\",
      \"ShipmentTax\": 0.00,
      \"ShipmentWeight\": 1.50,
      \"ShipmentTrackingCode\": \"ABC12345678901234567890\",
      \"ShipmentNumber\": 1,
    }
  ],
  \"OrderItemList\": [
    {
      \"CatalogID\": 123456,
      \"ItemID\": \"SKU-SAMPLE\",
      \"ItemQuantity\": 1,
      \"ItemUnitPrice\": 9.99,
      \"ItemWeight\": 2.5,
      \"ItemDateAdded\": \"05/01/2019 09:49\",
    }
  ],
  \"SalesTax\": 0.60,
  \"OrderAmount\": 20.59,
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
  
    using (var content = new StringContent("{  \"InvoiceNumberPrefix\": \"ut ex\",  \"InvoiceNumber\": -76055332,  \"OrderID\": 7966749,  \"CustomerID\": -42238041,  \"OrderDate\": \"1969-08-06T11:55:32.817Z\",  \"OrderStatusID\": 25219641,  \"LastUpdate\": \"2008-06-25T13:15:44.846Z\",  \"UserID\": \"ex sit v\",  \"SalesPerson\": \"ea sed Du\",  \"ContinueURL\": \"elit do exer\",  \"AlternateOrderID\": \"enim ullamco\",  \"OrderType\": \"deserunt p\",  \"PaymentTokenID\": -7486438,  \"BillingFirstName\": \"officia qui\",  \"BillingLastName\": \"occaecat ut amet dolore Duis\",  \"BillingCompany\": \"sunt\",  \"BillingAddress\": \"Ut consectetur\",  \"BillingAddress2\": \"nostrud\",  \"BillingCity\": \"anim est\",  \"BillingState\": \"anim in\",  \"BillingZipCode\": \"sed dolor\",  \"BillingCountry\": \"consectetur in ullamco conse\",  \"BillingPhoneNumber\": \"est\",  \"BillingEmail\": \"occaecat pariatur\",  \"BillingPaymentMethod\": \"dolor pariatur est fugiat\",  \"BillingOnLinePayment\": false,  \"BillingPaymentMethodID\": \"magna\",  \"ShipmentList\": [],  \"OrderItemList\": [],  \"PromotionList\": [],  \"OrderDiscount\": 4072847.2678701133,  \"OrderDiscountCoupon\": -1204504.207070917,  \"OrderDiscountPromotion\": 24800753.42261432,  \"SalesTax\": -45697427.65446514,  \"SalesTax2\": -52287509.961289614,  \"SalesTax3\": 17945973.26794225,  \"OrderAmount\": 78906000.10147098,  \"AffiliateCommission\": -7090869.111720011,  \"TransactionList\": [],  \"CardType\": \"enim officia\",  \"CardNumber\": \"tempor\",  \"CardName\": \"nulla nisi\",  \"CardExpirationMonth\": \"dolor i\",  \"CardExpirationYear\": \"ipsu\",  \"CardIssueNumber\": \"proident \",  \"CardStartMonth\": \"D\",  \"CardStartYear\": \"ipsu\",  \"CardAddress\": \"dolor et nisi\",  \"CardVerification\": \"incidi\",  \"RewardPoints\": \"sint\",  \"QuestionList\": [],  \"Referer\": \"esse dolore et non\",  \"IP\": \"exercit\",  \"CustomerComments\": \"enim nostrud ipsum la\",  \"InternalComments\": \"dolor\",  \"ExternalComments\": \"et id sunt ut Ut\"}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("3dCartWebAPI/v1/Orders", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Orders?bypassorderprocessing=&bypassorderemail=');

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
  'InvoiceNumberPrefix': 'ABC-',
  'InvoiceNumber': 123456,
  'CustomerID': 1,
  'OrderDate': '05/01/2019 09:49',
  'OrderStatusID': 4, // Most likely the Shipped status id
  'BillingFirstName': 'John',
  'BillingLastName': 'Smith',
  'BillingCompany': 'ACME, Inc.',
  'BillingAddress': '123 Main St.',
  'BillingAddress2': 'Suite 100',
  'BillingCity': 'Tamarac',
  'BillingState': 'FL',
  'BillingZipCode': '33321',
  'BillingCountry': 'US',
  'BillingPhoneNumber': '8008286650',
  'BillingEmail': 'john.smith@acme.com',
  'BillingPaymentMethod': 'Payment Processor',
  'BillingOnLinePayment': false,
  'BillingPaymentMethodID': '123',
  'ShipmentList': [
    {
      'ShipmentBoxes': 1,
      'ShipmentInternalComment': 'Extra packing material',
      'ShipmentOrderStatus': 1, // Most likely the Shipped status id
      'ShipmentAddress': '123 Main St.',
      'ShipmentAddress2': 'Suite 100',
      'ShipmentAlias': 'Alias',
      'ShipmentCity': 'Tamarac',
      'ShipmentCompany': 'ACME, Inc.',
      'ShipmentCost': 10.00,
      'ShipmentCountry': 'US',
      'ShipmentEmail': 'john.smith@acme.com',
      'ShipmentFirstName': 'John',
      'ShipmentLastName': 'Smith',
      'ShipmentMethodName': 'UPS Ground',
      'ShipmentShippedDate': '05/01/2019 09:49',
      'ShipmentPhone': '8008286650',
      'ShipmentState': 'FL',
      'ShipmentZipCode': '33321',
      'ShipmentTax': 0.00,
      'ShipmentWeight': 1.50,
      'ShipmentTrackingCode': 'ABC12345678901234567890',
      'ShipmentNumber': 1,
    }
  ],
  'OrderItemList': [
    {
      'CatalogID': 123456,
      'ItemID': 'SKU-SAMPLE',
      'ItemQuantity': 1,
      'ItemUnitPrice': 9.99,
      'ItemWeight': 2.5,
      'ItemDateAdded': '05/01/2019 09:49',
    }
  ],
  'SalesTax': 0.60,
  'OrderAmount': 20.59,
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "InvoiceNumberPrefix": "ABC-",
  "InvoiceNumber": 123456,
  "CustomerID": 1,
  "OrderDate": "05/01/2019 09:49",
  "OrderStatusID": 4, // Most likely the Shipped status id
  "BillingFirstName": "John",
  "BillingLastName": "Smith",
  "BillingCompany": "ACME, Inc.",
  "BillingAddress": "123 Main St.",
  "BillingAddress2": "Suite 100",
  "BillingCity": "Tamarac",
  "BillingState": "FL",
  "BillingZipCode": "33321",
  "BillingCountry": "US",
  "BillingPhoneNumber": "8008286650",
  "BillingEmail": "john.smith@acme.com",
  "BillingPaymentMethod": "Payment Processor",
  "BillingOnLinePayment": false,
  "BillingPaymentMethodID": "123",
  "ShipmentList": [
    {
      "ShipmentBoxes": 1,
      "ShipmentInternalComment": "Extra packing material",
      "ShipmentOrderStatus": 1, // Most likely the Shipped status id
      "ShipmentAddress": "123 Main St.",
      "ShipmentAddress2": "Suite 100",
      "ShipmentAlias": "Alias",
      "ShipmentCity": "Tamarac",
      "ShipmentCompany": "ACME, Inc.",
      "ShipmentCost": 10.00,
      "ShipmentCountry": "US",
      "ShipmentEmail": "john.smith@acme.com",
      "ShipmentFirstName": "John",
      "ShipmentLastName": "Smith",
      "ShipmentMethodName": "UPS Ground",
      "ShipmentShippedDate": "05/01/2019 09:49",
      "ShipmentPhone": "8008286650",
      "ShipmentState": "FL",
      "ShipmentZipCode": "33321",
      "ShipmentTax": 0.00,
      "ShipmentWeight": 1.50,
      "ShipmentTrackingCode": "ABC12345678901234567890",
      "ShipmentNumber": 1,
    }
  ],
  "OrderItemList": [
    {
      "CatalogID": 123456,
      "ItemID": "SKU-SAMPLE",
      "ItemQuantity": 1,
      "ItemUnitPrice": 9.99,
      "ItemWeight": 2.5,
      "ItemDateAdded": "05/01/2019 09:49",
    }
  ],
  "SalesTax": 0.60,
  "OrderAmount": 20.59,
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.post 'https://apirest.3dcart.com/3dCartWebAPI/v1/Orders?bypassorderprocessing=&bypassorderemail=', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
{
  "InvoiceNumberPrefix": "ABC-",
  "InvoiceNumber": 123456,
  "CustomerID": 1,
  "OrderDate": "05/01/2019 09:49",
  "OrderStatusID": 4, // Most likely the Shipped status id
  "BillingFirstName": "John",
  "BillingLastName": "Smith",
  "BillingCompany": "ACME, Inc.",
  "BillingAddress": "123 Main St.",
  "BillingAddress2": "Suite 100",
  "BillingCity": "Tamarac",
  "BillingState": "FL",
  "BillingZipCode": "33321",
  "BillingCountry": "US",
  "BillingPhoneNumber": "8008286650",
  "BillingEmail": "john.smith@acme.com",
  "BillingPaymentMethod": "Payment Processor",
  "BillingOnLinePayment": false,
  "BillingPaymentMethodID": "123",
  "ShipmentList": [
    {
      "ShipmentBoxes": 1,
      "ShipmentInternalComment": "Extra packing material",
      "ShipmentOrderStatus": 1, // Most likely the Shipped status id
      "ShipmentAddress": "123 Main St.",
      "ShipmentAddress2": "Suite 100",
      "ShipmentAlias": "Alias",
      "ShipmentCity": "Tamarac",
      "ShipmentCompany": "ACME, Inc.",
      "ShipmentCost": 10.00,
      "ShipmentCountry": "US",
      "ShipmentEmail": "john.smith@acme.com",
      "ShipmentFirstName": "John",
      "ShipmentLastName": "Smith",
      "ShipmentMethodName": "UPS Ground",
      "ShipmentShippedDate": "05/01/2019 09:49",
      "ShipmentPhone": "8008286650",
      "ShipmentState": "FL",
      "ShipmentZipCode": "33321",
      "ShipmentTax": 0.00,
      "ShipmentWeight": 1.50,
      "ShipmentTrackingCode": "ABC12345678901234567890",
      "ShipmentNumber": 1,
    }
  ],
  "OrderItemList": [
    {
      "CatalogID": 123456,
      "ItemID": "SKU-SAMPLE",
      "ItemQuantity": 1,
      "ItemUnitPrice": 9.99,
      "ItemWeight": 2.5,
      "ItemDateAdded": "05/01/2019 09:49",
    }
  ],
  "SalesTax": 0.60,
  "OrderAmount": 20.59,
}
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Orders?bypassorderprocessing=&bypassorderemail=', data=values, headers=headers)

response_body = urlopen(request).read()
print response_body
```

Once the prerequisites are taken care of, orders can be imported using the POST method to <a href="#create-an-order" target="_blank">create an order</a>. In order example 1 to the right, you can see the most basic elements necessary to create a new order. In addition to the CustomerID, BillingPaymentMethodID, and CatalogID mention previously, it contains the invoice number, billing address, shipping address and cost, and the list of items ordered. 

## Managing shipments

Not every order has one shipment with one item. There are cases where the order will have multiple shipments, each containing multiple items. While we can't cover every scenario, the following is an example of tracking two separate shipments, each with one item.

### 1. Add the needed number of shipments when creating the order
> Managing shipments example 1 <a name="shipments1"></a>

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Orders?bypassorderprocessing=&bypassorderemail=");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"InvoiceNumberPrefix\": \"ABC-\",
  \"InvoiceNumber\": 123456,
  \"CustomerID\": 1,
  \"OrderDate\": \"05/01/2019 09:49\",
  \"OrderStatusID\": 4, // Most likely the Shipped status id
  \"BillingFirstName\": \"John\",
  \"BillingLastName\": \"Smith\",
  \"BillingCompany\": \"ACME, Inc.\",
  \"BillingAddress\": \"123 Main St.\",
  \"BillingAddress2\": \"Suite 100\",
  \"BillingCity\": \"Tamarac\",
  \"BillingState\": \"FL\",
  \"BillingZipCode\": \"33321\",
  \"BillingCountry\": \"US\",
  \"BillingPhoneNumber\": \"8008286650\",
  \"BillingEmail\": \"john.smith@acme.com\",
  \"BillingPaymentMethod\": \"Payment Processor\",
  \"BillingOnLinePayment\": false,
  \"BillingPaymentMethodID\": \"123\",
  \"ShipmentList\": [
    {
      \"ShipmentBoxes\": 1,
      \"ShipmentInternalComment\": \"Extra packing material\",
      \"ShipmentOrderStatus\": 4,
      \"ShipmentAddress\": \"123 Main St.\",
      \"ShipmentAddress2\": \"Suite 100\",
      \"ShipmentAlias\": \"Alias\",
      \"ShipmentCity\": \"Tamarac\",
      \"ShipmentCompany\": \"ACME, Inc.\",
      \"ShipmentCost\": 10.00,
      \"ShipmentCountry\": \"US\",
      \"ShipmentEmail\": \"john.smith@acme.com\",
      \"ShipmentFirstName\": \"John\",
      \"ShipmentLastName\": \"Smith\",
      \"ShipmentMethodName\": \"UPS Ground\",
      \"ShipmentShippedDate\": \"05/01/2019 09:49\",
      \"ShipmentPhone\": \"8008286650\",
      \"ShipmentState\": \"FL\",
      \"ShipmentZipCode\": \"33321\",
      \"ShipmentTax\": 0.00,
      \"ShipmentWeight\": 1.50,
      \"ShipmentTrackingCode\": \"ABC12345678901234567890\",
      \"ShipmentNumber\": 1,
    },
    {
      \"ShipmentBoxes\": 1,
      \"ShipmentInternalComment\": \"\",
      \"ShipmentOrderStatus\": 4,
      \"ShipmentAddress\": \"112 1/2 Beacon Street\",
      \"ShipmentAddress2\": \"c/o Cheers\",
      \"ShipmentCity\": \"Boston\",
      \"ShipmentCompany\": \"Cheers\",
      \"ShipmentCost\": 10.00,
      \"ShipmentCountry\": \"US\",
      \"ShipmentEmail\": \"cliff.claven@cheers.com\",
      \"ShipmentFirstName\": \"Cliff\",
      \"ShipmentLastName\": \"Clavin\",
      \"ShipmentMethodName\": \"UPS Ground\",
      \"ShipmentShippedDate\": \"05/01/2019 09:49\",
      \"ShipmentPhone\": \"6172279605\",
      \"ShipmentState\": \"FL\",
      \"ShipmentZipCode\": \"02108\",
      \"ShipmentTax\": 0.00,
      \"ShipmentWeight\": 1.50,
      \"ShipmentTrackingCode\": \"XYZ987654321987654321\",
      \"ShipmentNumber\": 2,
    }
  ],
  \"OrderItemList\": [
    {
      \"CatalogID\": 123456,
      \"ItemID\": \"SKU-SAMPLE\",
      \"ItemQuantity\": 1,
      \"ItemUnitPrice\": 9.99,
      \"ItemWeight\": 2.5,
      \"ItemDateAdded\": \"05/01/2019 09:49\",
    }
	{
      \"CatalogID\": 123456,
      \"ItemID\": \"SKU-SAMPLE\",
      \"ItemQuantity\": 1,
      \"ItemUnitPrice\": 9.99,
      \"ItemWeight\": 2.5,
      \"ItemDateAdded\": \"05/01/2019 09:49\",
    }
  ],
  \"SalesTax\": 0.60,
  \"OrderAmount\": 31.18,
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
  
    using (var content = new StringContent("{  \"InvoiceNumberPrefix\": \"ut ex\",  \"InvoiceNumber\": -76055332,  \"OrderID\": 7966749,  \"CustomerID\": -42238041,  \"OrderDate\": \"1969-08-06T11:55:32.817Z\",  \"OrderStatusID\": 25219641,  \"LastUpdate\": \"2008-06-25T13:15:44.846Z\",  \"UserID\": \"ex sit v\",  \"SalesPerson\": \"ea sed Du\",  \"ContinueURL\": \"elit do exer\",  \"AlternateOrderID\": \"enim ullamco\",  \"OrderType\": \"deserunt p\",  \"PaymentTokenID\": -7486438,  \"BillingFirstName\": \"officia qui\",  \"BillingLastName\": \"occaecat ut amet dolore Duis\",  \"BillingCompany\": \"sunt\",  \"BillingAddress\": \"Ut consectetur\",  \"BillingAddress2\": \"nostrud\",  \"BillingCity\": \"anim est\",  \"BillingState\": \"anim in\",  \"BillingZipCode\": \"sed dolor\",  \"BillingCountry\": \"consectetur in ullamco conse\",  \"BillingPhoneNumber\": \"est\",  \"BillingEmail\": \"occaecat pariatur\",  \"BillingPaymentMethod\": \"dolor pariatur est fugiat\",  \"BillingOnLinePayment\": false,  \"BillingPaymentMethodID\": \"magna\",  \"ShipmentList\": [],  \"OrderItemList\": [],  \"PromotionList\": [],  \"OrderDiscount\": 4072847.2678701133,  \"OrderDiscountCoupon\": -1204504.207070917,  \"OrderDiscountPromotion\": 24800753.42261432,  \"SalesTax\": -45697427.65446514,  \"SalesTax2\": -52287509.961289614,  \"SalesTax3\": 17945973.26794225,  \"OrderAmount\": 78906000.10147098,  \"AffiliateCommission\": -7090869.111720011,  \"TransactionList\": [],  \"CardType\": \"enim officia\",  \"CardNumber\": \"tempor\",  \"CardName\": \"nulla nisi\",  \"CardExpirationMonth\": \"dolor i\",  \"CardExpirationYear\": \"ipsu\",  \"CardIssueNumber\": \"proident \",  \"CardStartMonth\": \"D\",  \"CardStartYear\": \"ipsu\",  \"CardAddress\": \"dolor et nisi\",  \"CardVerification\": \"incidi\",  \"RewardPoints\": \"sint\",  \"QuestionList\": [],  \"Referer\": \"esse dolore et non\",  \"IP\": \"exercit\",  \"CustomerComments\": \"enim nostrud ipsum la\",  \"InternalComments\": \"dolor\",  \"ExternalComments\": \"et id sunt ut Ut\"}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("3dCartWebAPI/v1/Orders", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Orders?bypassorderprocessing=&bypassorderemail=');

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
  'InvoiceNumberPrefix': 'ABC-',
  'InvoiceNumber': 123456,
  'CustomerID': 1,
  'OrderDate': '05/01/2019 09:49',
  'OrderStatusID': 4, // Most likely the Shipped status id
  'BillingFirstName': 'John',
  'BillingLastName': 'Smith',
  'BillingCompany': 'ACME, Inc.',
  'BillingAddress': '123 Main St.',
  'BillingAddress2': 'Suite 100',
  'BillingCity': 'Tamarac',
  'BillingState': 'FL',
  'BillingZipCode': '33321',
  'BillingCountry': 'US',
  'BillingPhoneNumber': '8008286650',
  'BillingEmail': 'john.smith@acme.com',
  'BillingPaymentMethod': 'Payment Processor',
  'BillingOnLinePayment': false,
  'BillingPaymentMethodID': '123',
  'ShipmentList': [
    {
      'ShipmentBoxes': 1,
      'ShipmentInternalComment': 'Extra packing material',
      'ShipmentOrderStatus': 4,
      'ShipmentAddress': '123 Main St.',
      'ShipmentAddress2': 'Suite 100',
      'ShipmentAlias': 'Alias',
      'ShipmentCity': 'Tamarac',
      'ShipmentCompany': 'ACME, Inc.',
      'ShipmentCost': 10.00,
      'ShipmentCountry': 'US',
      'ShipmentEmail': 'john.smith@acme.com',
      'ShipmentFirstName': 'John',
      'ShipmentLastName': 'Smith',
      'ShipmentMethodName': 'UPS Ground',
      'ShipmentShippedDate': '05/01/2019 09:49',
      'ShipmentPhone': '8008286650',
      'ShipmentState': 'FL',
      'ShipmentZipCode': '33321',
      'ShipmentTax': 0.00,
      'ShipmentWeight': 1.50,
      'ShipmentTrackingCode': 'ABC12345678901234567890',
      'ShipmentNumber': 1,
    },
    {
      'ShipmentBoxes': 1,
      'ShipmentInternalComment': '',
      'ShipmentOrderStatus': 4,
      'ShipmentAddress': '112 1/2 Beacon Street',
      'ShipmentAddress2': 'c/o Cheers',
      'ShipmentCity': 'Boston',
      'ShipmentCompany': 'Cheers',
      'ShipmentCost': 10.00,
      'ShipmentCountry': 'US',
      'ShipmentEmail': 'cliff.claven@cheers.com',
      'ShipmentFirstName': 'Cliff',
      'ShipmentLastName': 'Clavin',
      'ShipmentMethodName': 'UPS Ground',
      'ShipmentShippedDate': '05/01/2019 09:49',
      'ShipmentPhone': '6172279605',
      'ShipmentState': 'FL',
      'ShipmentZipCode': '02108',
      'ShipmentTax': 0.00,
      'ShipmentWeight': 1.50,
      'ShipmentTrackingCode': 'XYZ987654321987654321',
      'ShipmentNumber': 2,
    }
  ],
  'OrderItemList': [
    {
      'CatalogID': 123456,
      'ItemID': 'SKU-SAMPLE',
      'ItemQuantity': 1,
      'ItemUnitPrice': 9.99,
      'ItemWeight': 2.5,
      'ItemDateAdded': '05/01/2019 09:49',
    }
	{
      'CatalogID': 123456,
      'ItemID': 'SKU-SAMPLE',
      'ItemQuantity': 1,
      'ItemUnitPrice': 9.99,
      'ItemWeight': 2.5,
      'ItemDateAdded': '05/01/2019 09:49',
    }
  ],
  'SalesTax': 0.60,
  'OrderAmount': 31.18,
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "InvoiceNumberPrefix": "ABC-",
  "InvoiceNumber": 123456,
  "CustomerID": 1,
  "OrderDate": "05/01/2019 09:49",
  "OrderStatusID": 4, // Most likely the Shipped status id
  "BillingFirstName": "John",
  "BillingLastName": "Smith",
  "BillingCompany": "ACME, Inc.",
  "BillingAddress": "123 Main St.",
  "BillingAddress2": "Suite 100",
  "BillingCity": "Tamarac",
  "BillingState": "FL",
  "BillingZipCode": "33321",
  "BillingCountry": "US",
  "BillingPhoneNumber": "8008286650",
  "BillingEmail": "john.smith@acme.com",
  "BillingPaymentMethod": "Payment Processor",
  "BillingOnLinePayment": false,
  "BillingPaymentMethodID": "123",
  "ShipmentList": [
    {
      "ShipmentBoxes": 1,
      "ShipmentInternalComment": "Extra packing material",
      "ShipmentOrderStatus": 4,
      "ShipmentAddress": "123 Main St.",
      "ShipmentAddress2": "Suite 100",
      "ShipmentAlias": "Alias",
      "ShipmentCity": "Tamarac",
      "ShipmentCompany": "ACME, Inc.",
      "ShipmentCost": 10.00,
      "ShipmentCountry": "US",
      "ShipmentEmail": "john.smith@acme.com",
      "ShipmentFirstName": "John",
      "ShipmentLastName": "Smith",
      "ShipmentMethodName": "UPS Ground",
      "ShipmentShippedDate": "05/01/2019 09:49",
      "ShipmentPhone": "8008286650",
      "ShipmentState": "FL",
      "ShipmentZipCode": "33321",
      "ShipmentTax": 0.00,
      "ShipmentWeight": 1.50,
      "ShipmentTrackingCode": "ABC12345678901234567890",
      "ShipmentNumber": 1,
    },
    {
      "ShipmentBoxes": 1,
      "ShipmentInternalComment": "",
      "ShipmentOrderStatus": 4,
      "ShipmentAddress": "112 1/2 Beacon Street",
      "ShipmentAddress2": "c/o Cheers",
      "ShipmentCity": "Boston",
      "ShipmentCompany": "Cheers",
      "ShipmentCost": 10.00,
      "ShipmentCountry": "US",
      "ShipmentEmail": "cliff.claven@cheers.com",
      "ShipmentFirstName": "Cliff",
      "ShipmentLastName": "Clavin",
      "ShipmentMethodName": "UPS Ground",
      "ShipmentShippedDate": "05/01/2019 09:49",
      "ShipmentPhone": "6172279605",
      "ShipmentState": "FL",
      "ShipmentZipCode": "02108",
      "ShipmentTax": 0.00,
      "ShipmentWeight": 1.50,
      "ShipmentTrackingCode": "XYZ987654321987654321",
      "ShipmentNumber": 2,
    }
  ],
  "OrderItemList": [
    {
      "CatalogID": 123456,
      "ItemID": "SKU-SAMPLE",
      "ItemQuantity": 1,
      "ItemUnitPrice": 9.99,
      "ItemWeight": 2.5,
      "ItemDateAdded": "05/01/2019 09:49",
    }
	{
      "CatalogID": 123456,
      "ItemID": "SKU-SAMPLE",
      "ItemQuantity": 1,
      "ItemUnitPrice": 9.99,
      "ItemWeight": 2.5,
      "ItemDateAdded": "05/01/2019 09:49",
    }
  ],
  "SalesTax": 0.60,
  "OrderAmount": 31.18,
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.post 'https://apirest.3dcart.com/3dCartWebAPI/v1/Orders?bypassorderprocessing=&bypassorderemail=', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
{
  "InvoiceNumberPrefix": "ABC-",
  "InvoiceNumber": 123456,
  "CustomerID": 1,
  "OrderDate": "05/01/2019 09:49",
  "OrderStatusID": 4, // Most likely the Shipped status id
  "BillingFirstName": "John",
  "BillingLastName": "Smith",
  "BillingCompany": "ACME, Inc.",
  "BillingAddress": "123 Main St.",
  "BillingAddress2": "Suite 100",
  "BillingCity": "Tamarac",
  "BillingState": "FL",
  "BillingZipCode": "33321",
  "BillingCountry": "US",
  "BillingPhoneNumber": "8008286650",
  "BillingEmail": "john.smith@acme.com",
  "BillingPaymentMethod": "Payment Processor",
  "BillingOnLinePayment": false,
  "BillingPaymentMethodID": "123",
  "ShipmentList": [
    {
      "ShipmentBoxes": 1,
      "ShipmentInternalComment": "Extra packing material",
      "ShipmentOrderStatus": 4,
      "ShipmentAddress": "123 Main St.",
      "ShipmentAddress2": "Suite 100",
      "ShipmentAlias": "Alias",
      "ShipmentCity": "Tamarac",
      "ShipmentCompany": "ACME, Inc.",
      "ShipmentCost": 10.00,
      "ShipmentCountry": "US",
      "ShipmentEmail": "john.smith@acme.com",
      "ShipmentFirstName": "John",
      "ShipmentLastName": "Smith",
      "ShipmentMethodName": "UPS Ground",
      "ShipmentShippedDate": "05/01/2019 09:49",
      "ShipmentPhone": "8008286650",
      "ShipmentState": "FL",
      "ShipmentZipCode": "33321",
      "ShipmentTax": 0.00,
      "ShipmentWeight": 1.50,
      "ShipmentTrackingCode": "ABC12345678901234567890",
      "ShipmentNumber": 1,
    },
    {
      "ShipmentBoxes": 1,
      "ShipmentInternalComment": "",
      "ShipmentOrderStatus": 4,
      "ShipmentAddress": "112 1/2 Beacon Street",
      "ShipmentAddress2": "c/o Cheers",
      "ShipmentCity": "Boston",
      "ShipmentCompany": "Cheers",
      "ShipmentCost": 10.00,
      "ShipmentCountry": "US",
      "ShipmentEmail": "cliff.claven@cheers.com",
      "ShipmentFirstName": "Cliff",
      "ShipmentLastName": "Clavin",
      "ShipmentMethodName": "UPS Ground",
      "ShipmentShippedDate": "05/01/2019 09:49",
      "ShipmentPhone": "6172279605",
      "ShipmentState": "FL",
      "ShipmentZipCode": "02108",
      "ShipmentTax": 0.00,
      "ShipmentWeight": 1.50,
      "ShipmentTrackingCode": "XYZ987654321987654321",
      "ShipmentNumber": 2,
    }
  ],
  "OrderItemList": [
    {
      "CatalogID": 123456,
      "ItemID": "SKU-SAMPLE",
      "ItemQuantity": 1,
      "ItemUnitPrice": 9.99,
      "ItemWeight": 2.5,
      "ItemDateAdded": "05/01/2019 09:49",
    }
	{
      "CatalogID": 123456,
      "ItemID": "SKU-SAMPLE",
      "ItemQuantity": 1,
      "ItemUnitPrice": 9.99,
      "ItemWeight": 2.5,
      "ItemDateAdded": "05/01/2019 09:49",
    }
  ],
  "SalesTax": 0.60,
  "OrderAmount": 31.18,
}
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Orders?bypassorderprocessing=&bypassorderemail=', data=values, headers=headers)

response_body = urlopen(request).read()
print response_body
```

```json
"ShipmentList": [
    {
      "ShipmentBoxes": 1,
      "ShipmentInternalComment": "Extra packing material",
      "ShipmentOrderStatus": 4,
      "ShipmentAddress": "123 Main St.",
      "ShipmentAddress2": "Suite 100",
      "ShipmentAlias": "Alias",
      "ShipmentCity": "Tamarac",
      "ShipmentCompany": "ACME, Inc.",
      "ShipmentCost": 10.00,
      "ShipmentCountry": "US",
      "ShipmentEmail": "john.smith@acme.com",
      "ShipmentFirstName": "John",
      "ShipmentLastName": "Smith",
      "ShipmentMethodName": "UPS Ground",
      "ShipmentShippedDate": "05/01/2019 09:49",
      "ShipmentPhone": "8008286650",
      "ShipmentState": "FL",
      "ShipmentZipCode": "33321",
      "ShipmentTax": 0.00,
      "ShipmentWeight": 1.50,
      "ShipmentTrackingCode": "ABC12345678901234567890",
      "ShipmentNumber": 1,
    },
    {
      "ShipmentBoxes": 1,
      "ShipmentInternalComment": "",
      "ShipmentOrderStatus": 4,
      "ShipmentAddress": "112 1/2 Beacon Street",
      "ShipmentAddress2": "c/o Cheers",
      "ShipmentCity": "Boston",
      "ShipmentCompany": "Cheers",
      "ShipmentCost": 10.00,
      "ShipmentCountry": "US",
      "ShipmentEmail": "cliff.claven@cheers.com",
      "ShipmentFirstName": "Cliff",
      "ShipmentLastName": "Clavin",
      "ShipmentMethodName": "UPS Ground",
      "ShipmentShippedDate": "05/01/2019 09:49",
      "ShipmentPhone": "6172279605",
      "ShipmentState": "FL",
      "ShipmentZipCode": "02108",
      "ShipmentTax": 0.00,
      "ShipmentWeight": 1.50,
      "ShipmentTrackingCode": "XYZ987654321987654321",
      "ShipmentNumber": 2,
    }
  ],
```

The <a href="#shipments1">shipment example 1</a> to the right shows a "ShipmentList" collection with 2 shipments having separate addresses and tracking information. The ShipmentID field is not included, since we're creating a new order and the ShipmentID's will be automatically generated by the 3dcart software. When the order is created, the response will contain the OrderID value (see [Create an order](#create-an-order) for more information). This will be needed for the next step. [Next](#2-retrieve-the-order)

### 2. Retrieve the order 
```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Orders/{orderid}");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Orders/{orderid}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Orders/{orderid}');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Orders/{orderid}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Orders/{orderid}', headers=headers)

response_body = urlopen(request).read()
print response_body
```
<a name="shipments2"></a>
Using the OrderId from the previous step, use the Orders method to [retrieve an order by id](#retrieve-a-specific-order-by-id), or the Order Shipments method to [retrieve the list of shipments](#retrieve-a-list-of-shipments). This will contain the ShipmentID you will need in order to assign the items within the order to the individual shipments. 

In most scenarios, using the Order Shipments method is the easiest method, however, if two of the same item is purchased with 1 in each shipment, you will need to use the Orders method. The orders method will contain the full OrderItemList. The OrderItemList will contain the ItemIndexID for each item (See the [OrderItem](#orderitem-object) object for more information on the OrderItem object). This is the unique ID value each item has in the cart. You will need the ItemIndexID value to update the items in the next step. [Prev](#1-add-the-needed-number-of-shipments-when-creating-the-order) [Next](#3-update-the-items)

### 3. Update the items
```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Orders/{orderid}/Items");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "[
  {
    \"CatalogID\": -51009885,
    \"ItemIndexID\": -38091580,
    \"ItemID\": \"adipisicing do ut officia in\",
    \"ItemShipmentID\": 11031062,
    \"ItemQuantity\": 59015700.77777743,
    \"ItemWarehouseID\": 69759704,
    \"ItemDescription\": \"irure nisi proident est\",
    \"ItemUnitPrice\": -30084251.563731313,
    \"ItemWeight\": 12090001.066257238,
    \"ItemOptionPrice\": -68498097.38445307,
    \"ItemAdditionalField1\": \"est mollit aute\",
    \"ItemAdditionalField2\": \"aute exercitation ex\",
    \"ItemAdditionalField3\": \"ad minim ea incididunt\",
    \"ItemPageAdded\": \"sunt nisi adipisicing do Duis\",
    \"ItemAvailability\": \"dolore\",
    \"ItemDateAdded\": \"2003-04-05T08:48:08.259Z\",
    \"ItemUnitCost\": -23455627.019790664,
    \"ItemUnitStock\": -7821036.362208262,
    \"ItemOptions\": \"aute\",
    \"ItemCatalogIDOptions\": \"ipsum esse cillum\",
    \"ItemSerial\": \"labore\",
    \"ItemImage1\": \"laboris elit in amet\",
    \"ItemImage2\": \"cillum\",
    \"ItemImage3\": \"aliquip\",
    \"ItemImage4\": \"adipisicing ipsum\",
    \"ItemWarehouseLocation\": \"occaecat ullamco\",
    \"ItemWarehouseBin\": \"dolore proident eu occaecat\",
    \"ItemWarehouseAisle\": \"nulla ut velit\",
    \"ItemWarehouseCustom\": \"sit Lorem\",
    \"RecurringOrderFrequency\": 73743421
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
  
    using (var content = new StringContent("[  {    \"CatalogID\": -51009885,    \"ItemIndexID\": -38091580,    \"ItemID\": \"adipisicing do ut officia in\",    \"ItemShipmentID\": 11031062,    \"ItemQuantity\": 59015700.77777743,    \"ItemWarehouseID\": 69759704,    \"ItemDescription\": \"irure nisi proident est\",    \"ItemUnitPrice\": -30084251.563731313,    \"ItemWeight\": 12090001.066257238,    \"ItemOptionPrice\": -68498097.38445307,    \"ItemAdditionalField1\": \"est mollit aute\",    \"ItemAdditionalField2\": \"aute exercitation ex\",    \"ItemAdditionalField3\": \"ad minim ea incididunt\",    \"ItemPageAdded\": \"sunt nisi adipisicing do Duis\",    \"ItemAvailability\": \"dolore\",    \"ItemDateAdded\": \"2003-04-05T08:48:08.259Z\",    \"ItemUnitCost\": -23455627.019790664,    \"ItemUnitStock\": -7821036.362208262,    \"ItemOptions\": \"aute\",    \"ItemCatalogIDOptions\": \"ipsum esse cillum\",    \"ItemSerial\": \"labore\",    \"ItemImage1\": \"laboris elit in amet\",    \"ItemImage2\": \"cillum\",    \"ItemImage3\": \"aliquip\",    \"ItemImage4\": \"adipisicing ipsum\",    \"ItemWarehouseLocation\": \"occaecat ullamco\",    \"ItemWarehouseBin\": \"dolore proident eu occaecat\",    \"ItemWarehouseAisle\": \"nulla ut velit\",    \"ItemWarehouseCustom\": \"sit Lorem\",    \"RecurringOrderFrequency\": 73743421  }]", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Orders/{orderid}/Items", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Orders/{orderid}/Items');

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
    'CatalogID': -51009885,
    'ItemIndexID': -38091580,
    'ItemID': 'adipisicing do ut officia in',
    'ItemShipmentID': 11031062,
    'ItemQuantity': 59015700.77777743,
    'ItemWarehouseID': 69759704,
    'ItemDescription': 'irure nisi proident est',
    'ItemUnitPrice': -30084251.563731313,
    'ItemWeight': 12090001.066257238,
    'ItemOptionPrice': -68498097.38445307,
    'ItemAdditionalField1': 'est mollit aute',
    'ItemAdditionalField2': 'aute exercitation ex',
    'ItemAdditionalField3': 'ad minim ea incididunt',
    'ItemPageAdded': 'sunt nisi adipisicing do Duis',
    'ItemAvailability': 'dolore',
    'ItemDateAdded': '2003-04-05T08:48:08.259Z',
    'ItemUnitCost': -23455627.019790664,
    'ItemUnitStock': -7821036.362208262,
    'ItemOptions': 'aute',
    'ItemCatalogIDOptions': 'ipsum esse cillum',
    'ItemSerial': 'labore',
    'ItemImage1': 'laboris elit in amet',
    'ItemImage2': 'cillum',
    'ItemImage3': 'aliquip',
    'ItemImage4': 'adipisicing ipsum',
    'ItemWarehouseLocation': 'occaecat ullamco',
    'ItemWarehouseBin': 'dolore proident eu occaecat',
    'ItemWarehouseAisle': 'nulla ut velit',
    'ItemWarehouseCustom': 'sit Lorem',
    'RecurringOrderFrequency': 73743421
  }
];

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '[
  {
    "CatalogID": -51009885,
    "ItemIndexID": -38091580,
    "ItemID": "adipisicing do ut officia in",
    "ItemShipmentID": 11031062,
    "ItemQuantity": 59015700.77777743,
    "ItemWarehouseID": 69759704,
    "ItemDescription": "irure nisi proident est",
    "ItemUnitPrice": -30084251.563731313,
    "ItemWeight": 12090001.066257238,
    "ItemOptionPrice": -68498097.38445307,
    "ItemAdditionalField1": "est mollit aute",
    "ItemAdditionalField2": "aute exercitation ex",
    "ItemAdditionalField3": "ad minim ea incididunt",
    "ItemPageAdded": "sunt nisi adipisicing do Duis",
    "ItemAvailability": "dolore",
    "ItemDateAdded": "2003-04-05T08:48:08.259Z",
    "ItemUnitCost": -23455627.019790664,
    "ItemUnitStock": -7821036.362208262,
    "ItemOptions": "aute",
    "ItemCatalogIDOptions": "ipsum esse cillum",
    "ItemSerial": "labore",
    "ItemImage1": "laboris elit in amet",
    "ItemImage2": "cillum",
    "ItemImage3": "aliquip",
    "ItemImage4": "adipisicing ipsum",
    "ItemWarehouseLocation": "occaecat ullamco",
    "ItemWarehouseBin": "dolore proident eu occaecat",
    "ItemWarehouseAisle": "nulla ut velit",
    "ItemWarehouseCustom": "sit Lorem",
    "RecurringOrderFrequency": 73743421
  }
]'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Orders/{orderid}/Items', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  [
    {
      "CatalogID": -51009885,
      "ItemIndexID": -38091580,
      "ItemID": "adipisicing do ut officia in",
      "ItemShipmentID": 11031062,
      "ItemQuantity": 59015700.77777743,
      "ItemWarehouseID": 69759704,
      "ItemDescription": "irure nisi proident est",
      "ItemUnitPrice": -30084251.563731313,
      "ItemWeight": 12090001.066257238,
      "ItemOptionPrice": -68498097.38445307,
      "ItemAdditionalField1": "est mollit aute",
      "ItemAdditionalField2": "aute exercitation ex",
      "ItemAdditionalField3": "ad minim ea incididunt",
      "ItemPageAdded": "sunt nisi adipisicing do Duis",
      "ItemAvailability": "dolore",
      "ItemDateAdded": "2003-04-05T08:48:08.259Z",
      "ItemUnitCost": -23455627.019790664,
      "ItemUnitStock": -7821036.362208262,
      "ItemOptions": "aute",
      "ItemCatalogIDOptions": "ipsum esse cillum",
      "ItemSerial": "labore",
      "ItemImage1": "laboris elit in amet",
      "ItemImage2": "cillum",
      "ItemImage3": "aliquip",
      "ItemImage4": "adipisicing ipsum",
      "ItemWarehouseLocation": "occaecat ullamco",
      "ItemWarehouseBin": "dolore proident eu occaecat",
      "ItemWarehouseAisle": "nulla ut velit",
      "ItemWarehouseCustom": "sit Lorem",
      "RecurringOrderFrequency": 73743421
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Orders/{orderid}/Items', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

Using the Order Items method to [update a list of items](#update-a-list-of-items), match the item CatalogID or ItemIndexID with its' corresponding ItemShipmentID in order to assign the items to a specific shipment. This will allow the order to be split into multiple shipments with their own tracking information. [Prev](#2-retrieve-the-order)

## Update tracking for shipped orders

### Update shipment tracking
```json
[
  {
    "ShipmentID": 1,
    "ShipmentTrackingCode": "abc1234567890"
  },
  {
    "ShipmentID": 2,
    "ShipmentTrackingCode": "zyx0987654321"
  }
]
```

Updating shipment tracking information can be done using one of the PUT methods to update order shipments: [Update a list of shipments](#update-a-list-of-shipments) or by [specific shipment id](#update-a-specific-shipment-by-id). Since you're only updating the tracking information, only the ShipmentID and ShipmentTrackingCode values need to be included in the request, as seen in the example on the right.

## Creating new carts from a 3rd party system

The Carts methods allow you to create carts (orders) from external systems (e.g. an external website or blog), that can then allow the external user to be redirected into the store's secure checkout page.

### Creating a cart
```json
{
	"BillingFirstName": "",
	"BillingLastName": "",
	"BillingCompany": "",
	"BillingAddress": "",
	"BillingAddress2": "",
	"BillingCity": "",
	"BillingState": "",
	"BillingZipCode": "",
	"BillingCountry": "",
	"BillingPhoneNumber": "",
	"BillingEmail": "",
	"ShipmentAddress": "",
	"ShipmentAddress2": "",
	"ShipmentCity": "",
	"ShipmentCompany": "",
	"ShipmentCountry": "",
	"ShipmentEmail": "",
	"ShipmentFirstName": "",
	"ShipmentLastName": "",
	"ShipmentPhone": "",
	"ShipmentState": "",
	"ShipmentZipCode": ""
}
```

When creating the initial cart from an external system, you usually would not have any of the user's personal billing or shipping information at this point (if you do, great! You can add it in this step.). Normally, the user would have only have clicked an "Add to cart" button, for example, so you would [create a new order](#create-a-cart) with an empty POST request. The response will contain an OrderKey value. This is needed in subsequent steps, so hold onto it.

### Adding items to the order
```json
{
	"CatalogID": 3828,
	"ItemQuantity": 1.1,
	"ItemOptions": [
		{
			"OptionSetID": 1882,
			"OptionID": 12396,
			"OptionValue": "Small"
		}
	]
}
```

Now that you've created the new cart and have the new OrderKey value, using the method to [create a cart item](#create-a-cart-item) can be done as shown with the example on the right. After the item has been added, a GET request to retrieve

### Updating item quantity
```json
{
	"ItemQuantity": 2
}
```

Updating the item quantity is easy, as well. Using the method to [update a cart item](#update-a-cart-item), only the new adjusted item quantity needs to be sent.

### Deleting items and/or orders

Items or orders can be deleted using their respective delete methods.

## Adding a Frontend Script

The FrontendScripts methods can be used to inject a script into a store's web page. This can be used to supplement the functionality a 3rd party application, such as a chat/service desk or CRM ticketing application.

### Inserting the Frontend Script
```json
{
  "Placement": "HEAD",
  "Code": "<script type=\"text/javascript\" src=\"https://www.example.com/path/to/script.js\"><\/script>",
  "DateCreated": "05/02/2019 13:23",
  "LastUpdate": "05/02/2019 13:23"
}
```

When inserting the script, the Placement value will determine where the script is placed. The two options are HEAD and BODY. This will inject the script just before the closing HTML head or body tag (e.g. `</head>` or `</body>`).

## Importing products



## Webhooks



## Admin Login Tokens - SSO



## CRM