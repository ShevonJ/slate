#  CRM
The CRM (Customer Relationship Manager) module allows merchants to correspond with their customers through a managed ticket system. Customers can contact the merchant through a contact form on their website and their 3dcart store's software will automatically keep a record of all interactions.

The 3dcart REST API allows applications to access a store's CRM module to Create, Retrieve, Update, and Delete CRM tickets/interactions, messages, statuses, saved replies and departments.

See our Knowledgebase article on the [CRM Module](https://support.3dcart.com/Knowledgebase/Article/View/433/7/how-do-i-use-my-3dcart-stores-crm-module) for more information.

## CRM 

### Create a CRM ticket
> To create a CRM ticket in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#crm-object) for more information on the CRM object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/CRM");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"CrmID\": -96719196,
  \"DateOpened\": \"1965-10-13T18:57:26.841Z\",
  \"DateLastAction\": \"1993-02-20T22:22:18.158Z\",
  \"Subject\": \"aliquip culpa cupida\",
  \"DepartmentID\": -45898072,
  \"StatusID\": 42907803,
  \"CustomerName\": \"nulla magna voluptate\",
  \"CustomerEmail\": \"irure dolore nostrud\",
  \"CustomerPhone\": \"reprehenderit irure velit\",
  \"CustomerIpAddress\": \"nisi et eu\",
  \"OrderID\": 62167845,
  \"CustomerID\": -1683604,
  \"ProductId\": -50664090,
  \"CrmMessageList\": [
    {
      \"MessageId\": -32067752,
      \"DateCreated\": \"1960-01-03T09:31:12.907Z\",
      \"Message\": \"eu aliquip\",
      \"Sender\": -93057008,
      \"SenderName\": \"consectetur nulla in dolore\",
      \"SenderEmail\": \"sed\",
      \"CustomerIPAddress\": \"i\",
      \"CrmFileList\": [
        {
          \"FileId\": -62732864,
          \"FileName\": \"deserunt\",
          \"DateCreated\": \"2013-12-25T04:30:44.996Z\",
          \"IsAdminUploaded\": true
        },
        {
          \"FileId\": -42095705,
          \"FileName\": \"pariatur cupidatat veniam\",
          \"DateCreated\": \"2009-01-31T18:53:32.300Z\",
          \"IsAdminUploaded\": true
        }
      ]
    },
    {
      \"MessageId\": -93125579,
      \"DateCreated\": \"1961-10-19T22:27:33.227Z\",
      \"Message\": \"mollit non culpa\",
      \"Sender\": -59662916,
      \"SenderName\": \"tempor cillum elit sit\",
      \"SenderEmail\": \"laboris do ut pariatur irure\",
      \"CustomerIPAddress\": \"ess\",
      \"CrmFileList\": [
        {
          \"FileId\": 84436169,
          \"FileName\": \"non qui\",
          \"DateCreated\": \"2011-08-24T23:22:47.869Z\",
          \"IsAdminUploaded\": true
        },
        {
          \"FileId\": 37915868,
          \"FileName\": \"ea\",
          \"DateCreated\": \"2011-01-11T09:38:41.670Z\",
          \"IsAdminUploaded\": false
        },
        {
          \"FileId\": -82440936,
          \"FileName\": \"amet in tempor\",
          \"DateCreated\": \"1979-03-25T00:26:59.719Z\",
          \"IsAdminUploaded\": true
        },
        {
          \"FileId\": 86997525,
          \"FileName\": \"cupidatat cillum sint pariatur\",
          \"DateCreated\": \"1967-03-14T19:24:16.226Z\",
          \"IsAdminUploaded\": false
        }
      ]
    },
    {
      \"MessageId\": -74067042,
      \"DateCreated\": \"1971-05-25T15:16:34.220Z\",
      \"Message\": \"nisi qu\",
      \"Sender\": 71647899,
      \"SenderName\": \"commodo \",
      \"SenderEmail\": \"Excepteur\",
      \"CustomerIPAddress\": \"esse nul\",
      \"CrmFileList\": [
        {
          \"FileId\": 35885510,
          \"FileName\": \"dolore eu anim\",
          \"DateCreated\": \"2004-06-13T10:12:11.684Z\",
          \"IsAdminUploaded\": true
        },
        {
          \"FileId\": -21259561,
          \"FileName\": \"proident laboris Lorem sint\",
          \"DateCreated\": \"1970-06-20T08:27:33.721Z\",
          \"IsAdminUploaded\": true
        }
      ]
    },
    {
      \"MessageId\": 44658796,
      \"DateCreated\": \"1953-07-26T23:26:11.335Z\",
      \"Message\": \"ea incididunt mollit id ut\",
      \"Sender\": 723745,
      \"SenderName\": \"reprehenderit ut\",
      \"SenderEmail\": \"Duis est consequat\",
      \"CustomerIPAddress\": \"dolor venia\",
      \"CrmFileList\": [
        {
          \"FileId\": -87569586,
          \"FileName\": \"veniam dolor\",
          \"DateCreated\": \"1948-07-13T05:06:01.141Z\",
          \"IsAdminUploaded\": false
        },
        {
          \"FileId\": 6134085,
          \"FileName\": \"est proident in qui\",
          \"DateCreated\": \"1990-08-16T01:03:44.959Z\",
          \"IsAdminUploaded\": false
        },
        {
          \"FileId\": 68599238,
          \"FileName\": \"eu\",
          \"DateCreated\": \"1985-05-13T22:17:33.553Z\",
          \"IsAdminUploaded\": true
        }
      ]
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
  
    using (var content = new StringContent("{  \"CrmID\": -96719196,  \"DateOpened\": \"1965-10-13T18:57:26.841Z\",  \"DateLastAction\": \"1993-02-20T22:22:18.158Z\",  \"Subject\": \"aliquip culpa cupida\",  \"DepartmentID\": -45898072,  \"StatusID\": 42907803,  \"CustomerName\": \"nulla magna voluptate\",  \"CustomerEmail\": \"irure dolore nostrud\",  \"CustomerPhone\": \"reprehenderit irure velit\",  \"CustomerIpAddress\": \"nisi et eu\",  \"OrderID\": 62167845,  \"CustomerID\": -1683604,  \"ProductId\": -50664090,  \"CrmMessageList\": [    {      \"MessageId\": -32067752,      \"DateCreated\": \"1960-01-03T09:31:12.907Z\",      \"Message\": \"eu aliquip\",      \"Sender\": -93057008,      \"SenderName\": \"consectetur nulla in dolore\",      \"SenderEmail\": \"sed\",      \"CustomerIPAddress\": \"i\",      \"CrmFileList\": [        {          \"FileId\": -62732864,          \"FileName\": \"deserunt\",          \"DateCreated\": \"2013-12-25T04:30:44.996Z\",          \"IsAdminUploaded\": true        },        {          \"FileId\": -42095705,          \"FileName\": \"pariatur cupidatat veniam\",          \"DateCreated\": \"2009-01-31T18:53:32.300Z\",          \"IsAdminUploaded\": true        }      ]    },    {      \"MessageId\": -93125579,      \"DateCreated\": \"1961-10-19T22:27:33.227Z\",      \"Message\": \"mollit non culpa\",      \"Sender\": -59662916,      \"SenderName\": \"tempor cillum elit sit\",      \"SenderEmail\": \"laboris do ut pariatur irure\",      \"CustomerIPAddress\": \"ess\",      \"CrmFileList\": [        {          \"FileId\": 84436169,          \"FileName\": \"non qui\",          \"DateCreated\": \"2011-08-24T23:22:47.869Z\",          \"IsAdminUploaded\": true        },        {          \"FileId\": 37915868,          \"FileName\": \"ea\",          \"DateCreated\": \"2011-01-11T09:38:41.670Z\",          \"IsAdminUploaded\": false        },        {          \"FileId\": -82440936,          \"FileName\": \"amet in tempor\",          \"DateCreated\": \"1979-03-25T00:26:59.719Z\",          \"IsAdminUploaded\": true        },        {          \"FileId\": 86997525,          \"FileName\": \"cupidatat cillum sint pariatur\",          \"DateCreated\": \"1967-03-14T19:24:16.226Z\",          \"IsAdminUploaded\": false        }      ]    },    {      \"MessageId\": -74067042,      \"DateCreated\": \"1971-05-25T15:16:34.220Z\",      \"Message\": \"nisi qu\",      \"Sender\": 71647899,      \"SenderName\": \"commodo \",      \"SenderEmail\": \"Excepteur\",      \"CustomerIPAddress\": \"esse nul\",      \"CrmFileList\": [        {          \"FileId\": 35885510,          \"FileName\": \"dolore eu anim\",          \"DateCreated\": \"2004-06-13T10:12:11.684Z\",          \"IsAdminUploaded\": true        },        {          \"FileId\": -21259561,          \"FileName\": \"proident laboris Lorem sint\",          \"DateCreated\": \"1970-06-20T08:27:33.721Z\",          \"IsAdminUploaded\": true        }      ]    },    {      \"MessageId\": 44658796,      \"DateCreated\": \"1953-07-26T23:26:11.335Z\",      \"Message\": \"ea incididunt mollit id ut\",      \"Sender\": 723745,      \"SenderName\": \"reprehenderit ut\",      \"SenderEmail\": \"Duis est consequat\",      \"CustomerIPAddress\": \"dolor venia\",      \"CrmFileList\": [        {          \"FileId\": -87569586,          \"FileName\": \"veniam dolor\",          \"DateCreated\": \"1948-07-13T05:06:01.141Z\",          \"IsAdminUploaded\": false        },        {          \"FileId\": 6134085,          \"FileName\": \"est proident in qui\",          \"DateCreated\": \"1990-08-16T01:03:44.959Z\",          \"IsAdminUploaded\": false        },        {          \"FileId\": 68599238,          \"FileName\": \"eu\",          \"DateCreated\": \"1985-05-13T22:17:33.553Z\",          \"IsAdminUploaded\": true        }      ]    }  ]}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("3dCartWebAPI/v1/CRM", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM');

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
  'CrmID': -96719196,
  'DateOpened': '1965-10-13T18:57:26.841Z',
  'DateLastAction': '1993-02-20T22:22:18.158Z',
  'Subject': 'aliquip culpa cupida',
  'DepartmentID': -45898072,
  'StatusID': 42907803,
  'CustomerName': 'nulla magna voluptate',
  'CustomerEmail': 'irure dolore nostrud',
  'CustomerPhone': 'reprehenderit irure velit',
  'CustomerIpAddress': 'nisi et eu',
  'OrderID': 62167845,
  'CustomerID': -1683604,
  'ProductId': -50664090,
  'CrmMessageList': [
    {
      'MessageId': -32067752,
      'DateCreated': '1960-01-03T09:31:12.907Z',
      'Message': 'eu aliquip',
      'Sender': -93057008,
      'SenderName': 'consectetur nulla in dolore',
      'SenderEmail': 'sed',
      'CustomerIPAddress': 'i',
      'CrmFileList': [
        {
          'FileId': -62732864,
          'FileName': 'deserunt',
          'DateCreated': '2013-12-25T04:30:44.996Z',
          'IsAdminUploaded': true
        },
        {
          'FileId': -42095705,
          'FileName': 'pariatur cupidatat veniam',
          'DateCreated': '2009-01-31T18:53:32.300Z',
          'IsAdminUploaded': true
        }
      ]
    },
    {
      'MessageId': -93125579,
      'DateCreated': '1961-10-19T22:27:33.227Z',
      'Message': 'mollit non culpa',
      'Sender': -59662916,
      'SenderName': 'tempor cillum elit sit',
      'SenderEmail': 'laboris do ut pariatur irure',
      'CustomerIPAddress': 'ess',
      'CrmFileList': [
        {
          'FileId': 84436169,
          'FileName': 'non qui',
          'DateCreated': '2011-08-24T23:22:47.869Z',
          'IsAdminUploaded': true
        },
        {
          'FileId': 37915868,
          'FileName': 'ea',
          'DateCreated': '2011-01-11T09:38:41.670Z',
          'IsAdminUploaded': false
        },
        {
          'FileId': -82440936,
          'FileName': 'amet in tempor',
          'DateCreated': '1979-03-25T00:26:59.719Z',
          'IsAdminUploaded': true
        },
        {
          'FileId': 86997525,
          'FileName': 'cupidatat cillum sint pariatur',
          'DateCreated': '1967-03-14T19:24:16.226Z',
          'IsAdminUploaded': false
        }
      ]
    },
    {
      'MessageId': -74067042,
      'DateCreated': '1971-05-25T15:16:34.220Z',
      'Message': 'nisi qu',
      'Sender': 71647899,
      'SenderName': 'commodo ',
      'SenderEmail': 'Excepteur',
      'CustomerIPAddress': 'esse nul',
      'CrmFileList': [
        {
          'FileId': 35885510,
          'FileName': 'dolore eu anim',
          'DateCreated': '2004-06-13T10:12:11.684Z',
          'IsAdminUploaded': true
        },
        {
          'FileId': -21259561,
          'FileName': 'proident laboris Lorem sint',
          'DateCreated': '1970-06-20T08:27:33.721Z',
          'IsAdminUploaded': true
        }
      ]
    },
    {
      'MessageId': 44658796,
      'DateCreated': '1953-07-26T23:26:11.335Z',
      'Message': 'ea incididunt mollit id ut',
      'Sender': 723745,
      'SenderName': 'reprehenderit ut',
      'SenderEmail': 'Duis est consequat',
      'CustomerIPAddress': 'dolor venia',
      'CrmFileList': [
        {
          'FileId': -87569586,
          'FileName': 'veniam dolor',
          'DateCreated': '1948-07-13T05:06:01.141Z',
          'IsAdminUploaded': false
        },
        {
          'FileId': 6134085,
          'FileName': 'est proident in qui',
          'DateCreated': '1990-08-16T01:03:44.959Z',
          'IsAdminUploaded': false
        },
        {
          'FileId': 68599238,
          'FileName': 'eu',
          'DateCreated': '1985-05-13T22:17:33.553Z',
          'IsAdminUploaded': true
        }
      ]
    }
  ]
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "CrmID": -96719196,
  "DateOpened": "1965-10-13T18:57:26.841Z",
  "DateLastAction": "1993-02-20T22:22:18.158Z",
  "Subject": "aliquip culpa cupida",
  "DepartmentID": -45898072,
  "StatusID": 42907803,
  "CustomerName": "nulla magna voluptate",
  "CustomerEmail": "irure dolore nostrud",
  "CustomerPhone": "reprehenderit irure velit",
  "CustomerIpAddress": "nisi et eu",
  "OrderID": 62167845,
  "CustomerID": -1683604,
  "ProductId": -50664090,
  "CrmMessageList": [
    {
      "MessageId": -32067752,
      "DateCreated": "1960-01-03T09:31:12.907Z",
      "Message": "eu aliquip",
      "Sender": -93057008,
      "SenderName": "consectetur nulla in dolore",
      "SenderEmail": "sed",
      "CustomerIPAddress": "i",
      "CrmFileList": [
        {
          "FileId": -62732864,
          "FileName": "deserunt",
          "DateCreated": "2013-12-25T04:30:44.996Z",
          "IsAdminUploaded": true
        },
        {
          "FileId": -42095705,
          "FileName": "pariatur cupidatat veniam",
          "DateCreated": "2009-01-31T18:53:32.300Z",
          "IsAdminUploaded": true
        }
      ]
    },
    {
      "MessageId": -93125579,
      "DateCreated": "1961-10-19T22:27:33.227Z",
      "Message": "mollit non culpa",
      "Sender": -59662916,
      "SenderName": "tempor cillum elit sit",
      "SenderEmail": "laboris do ut pariatur irure",
      "CustomerIPAddress": "ess",
      "CrmFileList": [
        {
          "FileId": 84436169,
          "FileName": "non qui",
          "DateCreated": "2011-08-24T23:22:47.869Z",
          "IsAdminUploaded": true
        },
        {
          "FileId": 37915868,
          "FileName": "ea",
          "DateCreated": "2011-01-11T09:38:41.670Z",
          "IsAdminUploaded": false
        },
        {
          "FileId": -82440936,
          "FileName": "amet in tempor",
          "DateCreated": "1979-03-25T00:26:59.719Z",
          "IsAdminUploaded": true
        },
        {
          "FileId": 86997525,
          "FileName": "cupidatat cillum sint pariatur",
          "DateCreated": "1967-03-14T19:24:16.226Z",
          "IsAdminUploaded": false
        }
      ]
    },
    {
      "MessageId": -74067042,
      "DateCreated": "1971-05-25T15:16:34.220Z",
      "Message": "nisi qu",
      "Sender": 71647899,
      "SenderName": "commodo ",
      "SenderEmail": "Excepteur",
      "CustomerIPAddress": "esse nul",
      "CrmFileList": [
        {
          "FileId": 35885510,
          "FileName": "dolore eu anim",
          "DateCreated": "2004-06-13T10:12:11.684Z",
          "IsAdminUploaded": true
        },
        {
          "FileId": -21259561,
          "FileName": "proident laboris Lorem sint",
          "DateCreated": "1970-06-20T08:27:33.721Z",
          "IsAdminUploaded": true
        }
      ]
    },
    {
      "MessageId": 44658796,
      "DateCreated": "1953-07-26T23:26:11.335Z",
      "Message": "ea incididunt mollit id ut",
      "Sender": 723745,
      "SenderName": "reprehenderit ut",
      "SenderEmail": "Duis est consequat",
      "CustomerIPAddress": "dolor venia",
      "CrmFileList": [
        {
          "FileId": -87569586,
          "FileName": "veniam dolor",
          "DateCreated": "1948-07-13T05:06:01.141Z",
          "IsAdminUploaded": false
        },
        {
          "FileId": 6134085,
          "FileName": "est proident in qui",
          "DateCreated": "1990-08-16T01:03:44.959Z",
          "IsAdminUploaded": false
        },
        {
          "FileId": 68599238,
          "FileName": "eu",
          "DateCreated": "1985-05-13T22:17:33.553Z",
          "IsAdminUploaded": true
        }
      ]
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

response = RestClient.post 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "CrmID": -96719196,
    "DateOpened": "1965-10-13T18:57:26.841Z",
    "DateLastAction": "1993-02-20T22:22:18.158Z",
    "Subject": "aliquip culpa cupida",
    "DepartmentID": -45898072,
    "StatusID": 42907803,
    "CustomerName": "nulla magna voluptate",
    "CustomerEmail": "irure dolore nostrud",
    "CustomerPhone": "reprehenderit irure velit",
    "CustomerIpAddress": "nisi et eu",
    "OrderID": 62167845,
    "CustomerID": -1683604,
    "ProductId": -50664090,
    "CrmMessageList": [
      {
        "MessageId": -32067752,
        "DateCreated": "1960-01-03T09:31:12.907Z",
        "Message": "eu aliquip",
        "Sender": -93057008,
        "SenderName": "consectetur nulla in dolore",
        "SenderEmail": "sed",
        "CustomerIPAddress": "i",
        "CrmFileList": [
          {
            "FileId": -62732864,
            "FileName": "deserunt",
            "DateCreated": "2013-12-25T04:30:44.996Z",
            "IsAdminUploaded": true
          },
          {
            "FileId": -42095705,
            "FileName": "pariatur cupidatat veniam",
            "DateCreated": "2009-01-31T18:53:32.300Z",
            "IsAdminUploaded": true
          }
        ]
      },
      {
        "MessageId": -93125579,
        "DateCreated": "1961-10-19T22:27:33.227Z",
        "Message": "mollit non culpa",
        "Sender": -59662916,
        "SenderName": "tempor cillum elit sit",
        "SenderEmail": "laboris do ut pariatur irure",
        "CustomerIPAddress": "ess",
        "CrmFileList": [
          {
            "FileId": 84436169,
            "FileName": "non qui",
            "DateCreated": "2011-08-24T23:22:47.869Z",
            "IsAdminUploaded": true
          },
          {
            "FileId": 37915868,
            "FileName": "ea",
            "DateCreated": "2011-01-11T09:38:41.670Z",
            "IsAdminUploaded": false
          },
          {
            "FileId": -82440936,
            "FileName": "amet in tempor",
            "DateCreated": "1979-03-25T00:26:59.719Z",
            "IsAdminUploaded": true
          },
          {
            "FileId": 86997525,
            "FileName": "cupidatat cillum sint pariatur",
            "DateCreated": "1967-03-14T19:24:16.226Z",
            "IsAdminUploaded": false
          }
        ]
      },
      {
        "MessageId": -74067042,
        "DateCreated": "1971-05-25T15:16:34.220Z",
        "Message": "nisi qu",
        "Sender": 71647899,
        "SenderName": "commodo ",
        "SenderEmail": "Excepteur",
        "CustomerIPAddress": "esse nul",
        "CrmFileList": [
          {
            "FileId": 35885510,
            "FileName": "dolore eu anim",
            "DateCreated": "2004-06-13T10:12:11.684Z",
            "IsAdminUploaded": true
          },
          {
            "FileId": -21259561,
            "FileName": "proident laboris Lorem sint",
            "DateCreated": "1970-06-20T08:27:33.721Z",
            "IsAdminUploaded": true
          }
        ]
      },
      {
        "MessageId": 44658796,
        "DateCreated": "1953-07-26T23:26:11.335Z",
        "Message": "ea incididunt mollit id ut",
        "Sender": 723745,
        "SenderName": "reprehenderit ut",
        "SenderEmail": "Duis est consequat",
        "CustomerIPAddress": "dolor venia",
        "CrmFileList": [
          {
            "FileId": -87569586,
            "FileName": "veniam dolor",
            "DateCreated": "1948-07-13T05:06:01.141Z",
            "IsAdminUploaded": false
          },
          {
            "FileId": 6134085,
            "FileName": "est proident in qui",
            "DateCreated": "1990-08-16T01:03:44.959Z",
            "IsAdminUploaded": false
          },
          {
            "FileId": 68599238,
            "FileName": "eu",
            "DateCreated": "1985-05-13T22:17:33.553Z",
            "IsAdminUploaded": true
          }
        ]
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/CRM', data=values, headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"CrmID",
    "Value":"1234",
    "Status":"201",
    "Message":"Created successfully",
  }
]
```

Adds a new CRM ticket to the store. See [Data Structures](#crm-object) for more information on the CRM object.

#### HTTP Request
`POST https://apirest.3dcart.com/3dCartWebAPI/v1/CRM`

#### Responses and Errors

Response Code | Description
------------- | ---------
201 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.

### Retrieve a list of CRM tickets
> To retrieve a list of CRM tickets from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/CRM?subject=&departmentid=&statusid=&openedstartdate=&openedenddate=&lastactionstartdate=&lastactionenddate=&customername=&customeremail=&customerphone=&customeripaddress=&orderid=&custid=&productid=&limit=&offset=&countonly=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/CRM"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM?subject=&departmentid=&statusid=&openedstartdate=&openedenddate=&lastactionstartdate=&lastactionenddate=&customername=&customeremail=&customerphone=&customeripaddress=&orderid=&custid=&productid=&limit=&offset=&countonly=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM?subject=&departmentid=&statusid=&openedstartdate=&openedenddate=&lastactionstartdate=&lastactionenddate=&customername=&customeremail=&customerphone=&customeripaddress=&orderid=&custid=&productid=&limit=&offset=&countonly=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/CRM?subject=&departmentid=&statusid=&openedstartdate=&openedenddate=&lastactionstartdate=&lastactionenddate=&customername=&customeremail=&customerphone=&customeripaddress=&orderid=&custid=&productid=&limit=&offset=&countonly=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#crm-object) for more information on the CRM object):

```json
[
  {
    "CrmID": 1,
    "DateOpened": "02/26/2019 17:01",
    "DateLastAction": "02/26/2019 17:01",
    "Subject": "sample string 1",
    "DepartmentID": 1,
    "StatusID": 1,
    "CustomerName": "sample string 2",
    "CustomerEmail": "sample string 3",
    "CustomerPhone": "sample string 4",
    "CustomerIpAddress": "sample string 5",
    "OrderID": 1,
    "CustomerID": 1,
    "ProductId": 1,
    "CrmMessageList": [
      {
        "MessageId": 1,
        "DateCreated": "02/26/2019 17:01",
        "Message": "sample string 1",
        "Sender": 1,
        "SenderName": "sample string 2",
        "SenderEmail": "sample string 3",
        "CustomerIPAddress": "sample string 4",
        "CrmFileList": [
          {
            "FileId": 1,
            "FileName": "sample string 1",
            "DateCreated": "02/26/2019 17:01",
            "IsAdminUploaded": true
          },
          {
            "FileId": 1,
            "FileName": "sample string 1",
            "DateCreated": "02/26/2019 17:01",
            "IsAdminUploaded": true
          }
        ]
      },
      {
        "MessageId": 1,
        "DateCreated": "02/26/2019 17:01",
        "Message": "sample string 1",
        "Sender": 1,
        "SenderName": "sample string 2",
        "SenderEmail": "sample string 3",
        "CustomerIPAddress": "sample string 4",
        "CrmFileList": [
          {
            "FileId": 1,
            "FileName": "sample string 1",
            "DateCreated": "02/26/2019 17:01",
            "IsAdminUploaded": true
          },
          {
            "FileId": 1,
            "FileName": "sample string 1",
            "DateCreated": "02/26/2019 17:01",
            "IsAdminUploaded": true
          }
        ]
      }
    ]
  },
  {
    "CrmID": 1,
    "DateOpened": "02/26/2019 17:01",
    "DateLastAction": "02/26/2019 17:01",
    "Subject": "sample string 1",
    "DepartmentID": 1,
    "StatusID": 1,
    "CustomerName": "sample string 2",
    "CustomerEmail": "sample string 3",
    "CustomerPhone": "sample string 4",
    "CustomerIpAddress": "sample string 5",
    "OrderID": 1,
    "CustomerID": 1,
    "ProductId": 1,
    "CrmMessageList": [
      {
        "MessageId": 1,
        "DateCreated": "02/26/2019 17:01",
        "Message": "sample string 1",
        "Sender": 1,
        "SenderName": "sample string 2",
        "SenderEmail": "sample string 3",
        "CustomerIPAddress": "sample string 4",
        "CrmFileList": [
          {
            "FileId": 1,
            "FileName": "sample string 1",
            "DateCreated": "02/26/2019 17:01",
            "IsAdminUploaded": true
          },
          {
            "FileId": 1,
            "FileName": "sample string 1",
            "DateCreated": "02/26/2019 17:01",
            "IsAdminUploaded": true
          }
        ]
      },
      {
        "MessageId": 1,
        "DateCreated": "02/26/2019 17:01",
        "Message": "sample string 1",
        "Sender": 1,
        "SenderName": "sample string 2",
        "SenderEmail": "sample string 3",
        "CustomerIPAddress": "sample string 4",
        "CrmFileList": [
          {
            "FileId": 1,
            "FileName": "sample string 1",
            "DateCreated": "02/26/2019 17:01",
            "IsAdminUploaded": true
          },
          {
            "FileId": 1,
            "FileName": "sample string 1",
            "DateCreated": "02/26/2019 17:01",
            "IsAdminUploaded": true
          }
        ]
      }
    ]
  }
]
```
Retrieve a list of all CRM tickets in the store.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/CRM`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
limit | optional | Maximum number of items that can be returned
offset | optional | Starting point for the return data
subject | optional | Subject of the CRM
departmentid | optional | Department of the CRM
statusid | optional | Status of the CRM
openedstartdate | optional | Search tickets opened after this date (mm/dd/yyyy hh:mm:ss)
openedenddate | optional | Search tickets opened before this date (mm/dd/yyyy hh:mm:ss)
lastactionstartdate | optional | Search tickets with last action occurring after this date (mm/dd/yyyy hh:mm:ss)
lastactionenddate | optional | Search tickets with last action occurring before this date (mm/dd/yyyy hh:mm:ss)
customername | optional | Search tickets by customer name
customeremail | optional | Search tickets by customer email
customerphone | optional | Search tickets by customer phone
customeripaddress | optional | Search tickets by the customer's IP address
orderid | optional | Search tickets by orderid
custid | optional | Search tickets by customerid
productid | optional | Search tickets by productid
countonly | optional | Count the number of rows only

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified CRM does not exist.

### Retrieve a specific CRM by id 
> To retrieve a CRM from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#crm-object) for more information on the CRM object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{id}");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/CRM/{id}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{id}');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{id}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{id}', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#crm-object) for more information on the CRM object):

```json
{
    "CrmID": 1,
    "DateOpened": "02/26/2019 17:07",
    "DateLastAction": "02/26/2019 17:07",
    "Subject": "sample string 1",
    "DepartmentID": 1,
    "StatusID": 1,
    "CustomerName": "sample string 2",
    "CustomerEmail": "sample string 3",
    "CustomerPhone": "sample string 4",
    "CustomerIpAddress": "sample string 5",
    "OrderID": 1,
    "CustomerID": 1,
    "ProductId": 1,
    "CrmMessageList": [
      {
        "MessageId": 1,
        "DateCreated": "02/26/2019 17:07",
        "Message": "sample string 1",
        "Sender": 1,
        "SenderName": "sample string 2",
        "SenderEmail": "sample string 3",
        "CustomerIPAddress": "sample string 4",
        "CrmFileList": [
          {
            "FileId": 1,
            "FileName": "sample string 1",
            "DateCreated": "02/26/2019 17:07",
            "IsAdminUploaded": true
          },
          {
            "FileId": 1,
            "FileName": "sample string 1",
            "DateCreated": "02/26/2019 17:07",
            "IsAdminUploaded": true
          }
        ]
      },
      {
        "MessageId": 1,
        "DateCreated": "02/26/2019 17:07",
        "Message": "sample string 1",
        "Sender": 1,
        "SenderName": "sample string 2",
        "SenderEmail": "sample string 3",
        "CustomerIPAddress": "sample string 4",
        "CrmFileList": [
          {
            "FileId": 1,
            "FileName": "sample string 1",
            "DateCreated": "02/26/2019 17:07",
            "IsAdminUploaded": true
          },
          {
            "FileId": 1,
            "FileName": "sample string 1",
            "DateCreated": "02/26/2019 17:07",
            "IsAdminUploaded": true
          }
        ]
      }
    ]
  }
```
Retrieves a CRM ticket by the specified id. See [Data Structures](#crm-object) for more information on the CRM object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{id}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
id | required | The ID of the CRM ticket

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified CRM does not exist.

### Update a specific CRM ticket by id
This method is used to update a single CRM record in the database. The {id} parameter specifies which CRM record to update. See [Data Structures](#crm-object) for more information on the CRM object.
> To update a specific CRM ticket in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#crm-object) for more information on the CRM object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/department/{id}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"DepartmentId\": -99961439,
  \"Name\": \"adipisicing nulla qui magna enim\",
  \"Visible\": true
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
  
    using (var content = new StringContent("{  \"DepartmentId\": -99961439,  \"Name\": \"adipisicing nulla qui magna enim\",  \"Visible\": true}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/CRM/department/{id}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/department/{id}');

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
  'DepartmentId': -99961439,
  'Name': 'adipisicing nulla qui magna enim',
  'Visible': true
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "DepartmentId": -99961439,
  "Name": "adipisicing nulla qui magna enim",
  "Visible": true
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/department/{id}', values, headers
puts response
```

```python
ATTRIBUTES
DepartmentId
number
Primary key. Auto-incremented. database reference = CRM_Department.id

Name
string
database reference = CRM_Department.department

Visible
boolean
database reference = CRM_Department.visible

from urllib2 import Request, urlopen

values = """
  {
    "DepartmentId": -99961439,
    "Name": "adipisicing nulla qui magna enim",
    "Visible": true
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/department/{id}', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"CrmID",
    "Value":"1234",
    "Status":"200",
    "Message":"Updated successfully",
  }
]
```

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{id}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
id | required | The ID of the CRM ticket

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified CRM does not exist.

### Delete a specific CRM ticket by id
Delete a CRM in the system.
> To delete a specific CRM ticket from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{id}");
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
  
  using(var response = await httpClient.DeleteAsync("3dCartWebAPI/v1/CRM/{id}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{id}');

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

response = RestClient.delete 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{id}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{id}', headers=headers)
request.get_method = lambda: 'DELETE'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"CrmID",
    "Value":"1234",
    "Status":"200",
    "Message":"Deleted successfully",
  }
]
```

#### HTTP Request
`DELETE https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{id}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
id | required | The ID of the CRM ticket

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified CRM does not exist.

## CRM Messages
The CRM Messages web service allows an application to Create, Retrieve, and Delete CRM Messages to and from the customer (Updating a message is not available, as an email is sent once the message is created).

### Create a message in a specific CRM ticket
> To create a message in a specific CRM ticket, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#crmmessage-object) for more information on the CrmMessage object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{id}/message");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"MessageId\": 9725714,
  \"DateCreated\": \"1991-05-24T03:47:48.232Z\",
  \"Message\": \"commodo in sed\",
  \"Sender\": 80134704,
  \"SenderName\": \"tempor\",
  \"SenderEmail\": \"qui mollit\",
  \"CustomerIPAddress\": \"dolore cupidata\",
  \"CrmFileList\": [
    {
      \"FileId\": -43806323,
      \"FileName\": \"elit sed dolore cupidatat enim\",
      \"DateCreated\": \"2013-06-16T22:55:49.227Z\",
      \"IsAdminUploaded\": false
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
  
    using (var content = new StringContent("{  \"MessageId\": 9725714,  \"DateCreated\": \"1991-05-24T03:47:48.232Z\",  \"Message\": \"commodo in sed\",  \"Sender\": 80134704,  \"SenderName\": \"tempor\",  \"SenderEmail\": \"qui mollit\",  \"CustomerIPAddress\": \"dolore cupidata\",  \"CrmFileList\": [    {      \"FileId\": -43806323,      \"FileName\": \"elit sed dolore cupidatat enim\",      \"DateCreated\": \"2013-06-16T22:55:49.227Z\",      \"IsAdminUploaded\": false    }  ]}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("3dCartWebAPI/v1/CRM/{id}/message", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{id}/message');

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
  'MessageId': 9725714,
  'DateCreated': '1991-05-24T03:47:48.232Z',
  'Message': 'commodo in sed',
  'Sender': 80134704,
  'SenderName': 'tempor',
  'SenderEmail': 'qui mollit',
  'CustomerIPAddress': 'dolore cupidata',
  'CrmFileList': [
    {
      'FileId': -43806323,
      'FileName': 'elit sed dolore cupidatat enim',
      'DateCreated': '2013-06-16T22:55:49.227Z',
      'IsAdminUploaded': false
    }
  ]
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "MessageId": 9725714,
  "DateCreated": "1991-05-24T03:47:48.232Z",
  "Message": "commodo in sed",
  "Sender": 80134704,
  "SenderName": "tempor",
  "SenderEmail": "qui mollit",
  "CustomerIPAddress": "dolore cupidata",
  "CrmFileList": [
    {
      "FileId": -43806323,
      "FileName": "elit sed dolore cupidatat enim",
      "DateCreated": "2013-06-16T22:55:49.227Z",
      "IsAdminUploaded": false
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

response = RestClient.post 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{id}/message', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "MessageId": 9725714,
    "DateCreated": "1991-05-24T03:47:48.232Z",
    "Message": "commodo in sed",
    "Sender": 80134704,
    "SenderName": "tempor",
    "SenderEmail": "qui mollit",
    "CustomerIPAddress": "dolore cupidata",
    "CrmFileList": [
      {
        "FileId": -43806323,
        "FileName": "elit sed dolore cupidatat enim",
        "DateCreated": "2013-06-16T22:55:49.227Z",
        "IsAdminUploaded": false
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{id}/message', data=values, headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"MessageId",
    "Value":"1234",
    "Status":"201",
    "Message":"Created successfully",
  }
]
```

Adds a new message to a specific CRM ticket. See [Data Structures](#crmmessage-object) for more information on the CrmMessage object.

<aside class="notice">Please note that adding a message sends an email to the customer's email address.</aside>

#### HTTP Request
`POST https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{id}/message`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
id | required | The ID of the CRM ticket where the message will be added

#### Responses and Errors

Response Code | Description
------------- | ---------
201 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified CRM does not exist.

### Retrieve all the messages from a specific CRM
> To retrieve all messages from a specific CRM ticket in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#crmmessage-object) for more information on the CrmMessage object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{crmid}/message?limit=&offset=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/CRM/{crmid}/message"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{crmid}/message?limit=&offset=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{crmid}/message?limit=&offset=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{crmid}/message?limit=&offset=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#crmmessage-object) for more information on the CrmMessage object):

```json
[
  {
    "MessageId": 1,
    "DateCreated": "02/27/2019 10:56",
    "Message": "sample string 1",
    "Sender": 1,
    "SenderName": "sample string 2",
    "SenderEmail": "sample string 3",
    "CustomerIPAddress": "sample string 4",
    "CrmFileList": [
      {
        "FileId": 1,
        "FileName": "sample string 1",
        "DateCreated": "02/27/2019 10:56",
        "IsAdminUploaded": true
      },
      {
        "FileId": 1,
        "FileName": "sample string 1",
        "DateCreated": "02/27/2019 10:56",
        "IsAdminUploaded": true
      }
    ]
  },
  {
    "MessageId": 1,
    "DateCreated": "02/27/2019 10:56",
    "Message": "sample string 1",
    "Sender": 1,
    "SenderName": "sample string 2",
    "SenderEmail": "sample string 3",
    "CustomerIPAddress": "sample string 4",
    "CrmFileList": [
      {
        "FileId": 1,
        "FileName": "sample string 1",
        "DateCreated": "02/27/2019 10:56",
        "IsAdminUploaded": true
      },
      {
        "FileId": 1,
        "FileName": "sample string 1",
        "DateCreated": "02/27/2019 10:56",
        "IsAdminUploaded": true
      }
    ]
  }
]
```
This method retrieves a list of all messages from a specific CRM ticket. See [Data Structures](#crmmessage-object) for more information on the CrmMessage object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{id}/message`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
crmid | required | The ID of the CRM ticket

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified CRM does not exist, or has no messages.

### Retrieve a specific CRM message
> To retrieve a specific message from a specific CRM ticket in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#crmmessage-object) for more information on the CrmMessage object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{crmid}/message/{msgid}");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/CRM/{crmid}/message/{msgid}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{crmid}/message/{msgid}');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{crmid}/message/{msgid}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{crmid}/message/{msgid}', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#crmmessage-object) for more information on the CrmMessage object):

```json
[
  {
    "MessageId": 1,
    "DateCreated": "02/27/2019 10:56",
    "Message": "sample string 1",
    "Sender": 1,
    "SenderName": "sample string 2",
    "SenderEmail": "sample string 3",
    "CustomerIPAddress": "sample string 4",
    "CrmFileList": [
      {
        "FileId": 1,
        "FileName": "sample string 1",
        "DateCreated": "02/27/2019 10:56",
        "IsAdminUploaded": true
      },
      {
        "FileId": 1,
        "FileName": "sample string 1",
        "DateCreated": "02/27/2019 10:56",
        "IsAdminUploaded": true
      }
    ]
  },
  {
    "MessageId": 1,
    "DateCreated": "02/27/2019 10:56",
    "Message": "sample string 1",
    "Sender": 1,
    "SenderName": "sample string 2",
    "SenderEmail": "sample string 3",
    "CustomerIPAddress": "sample string 4",
    "CrmFileList": [
      {
        "FileId": 1,
        "FileName": "sample string 1",
        "DateCreated": "02/27/2019 10:56",
        "IsAdminUploaded": true
      },
      {
        "FileId": 1,
        "FileName": "sample string 1",
        "DateCreated": "02/27/2019 10:56",
        "IsAdminUploaded": true
      }
    ]
  }
]
```
This method is used to retrieve a specific message from a specific CRM ticket. See [Data Structures](#crmmessage-object) for more information on the CrmMessage object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{crmid}/message/{msgid}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
crmid | required | The ID of the CRM ticket
msgid | required | The ID of the message

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified CRM and/or message does not exist.

### Delete a CRM Message
> To delete a message from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{crmid}/message/{msgid}");
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
  
  using(var response = await httpClient.DeleteAsync("3dCartWebAPI/v1/CRM/{crmid}/message/{msgid}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{crmid}/message/{msgid}');

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

response = RestClient.delete 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{crmid}/message/{msgid}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{crmid}/message/{msgid}', headers=headers)
request.get_method = lambda: 'DELETE'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"MessageId",
    "Value":"1234",
    "Status":"200",
    "Message":"Deleted successfully",
  }
]
```

This method is used to delete a specific message from a specific CRM ticket.

#### HTTP Request
`DELETE https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/{crmid}/message/{msgid}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
crmid | required | The ID of the CRM ticket
msgid | required | The ID of the message

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified CRM and/or message does not exist.

## CRM Departments
CRM "Departments" are selectable items from the store's "Contact Us" page that allows the form submission to be pre-sorted within the CRM module. For example, you might have a "Billing" and "Shipping" Department. These Departments will be available for the customer to select when using the Contact Us page. The CRM Departments web service allows an application to retrieve and update the list of Departments within the CRM Module (Create and Delete methods are not available).

### Retrieve a list of all CRM Departments
> To retrieve a list of all CRM departments from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#crmdepartment-object) for more information on the CrmDepartment object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/department?limit=&offset=&countonly=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/CRM/department"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/department?limit=&offset=&countonly=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/department?limit=&offset=&countonly=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/department?limit=&offset=&countonly=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "DepartmentId": 1,
    "Name": "sample string 1",
    "Visible": true
  },
  {
    "DepartmentId": 1,
    "Name": "sample string 1",
    "Visible": true
  }
]
```

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/department`

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
404 | There are no departments.

### Update a specific CRM department by id
> To update a specific CRM department, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#crmdepartment-object) for more information on the CrmDepartment object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/department/{id}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"DepartmentId\": -99961439,
  \"Name\": \"adipisicing nulla qui magna enim\",
  \"Visible\": true
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
  
    using (var content = new StringContent("{  \"DepartmentId\": -99961439,  \"Name\": \"adipisicing nulla qui magna enim\",  \"Visible\": true}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/CRM/department/{id}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/department/{id}');

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
  'DepartmentId': -99961439,
  'Name': 'adipisicing nulla qui magna enim',
  'Visible': true
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "DepartmentId": -99961439,
  "Name": "adipisicing nulla qui magna enim",
  "Visible": true
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/department/{id}', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "DepartmentId": -99961439,
    "Name": "adipisicing nulla qui magna enim",
    "Visible": true
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/department/{id}', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"DepartmentId",
    "Value":"1234",
    "Status":"200",
    "Message":"Updated successfully",
  }
]
```

This method is used to update a single CRM Department record in the database. The {id} parameter specifies which CRM Department record to update. See [Data Structures](#crmdepartment-object) for more information on the CrmDepartment object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/department/{id}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
id | required | The id of the CRM department to update

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified department does not exist.

## CRM Saved Reply
Beginning with version 7.2.2 of the 3dcart platform, a store's CRM functionality can now be set up with "Saved Replies" which can be used when replying to the CRM tickets. This can be useful when replying to multiple tickets that contain essentially the same message over and over again.

### Create a Saved Reply
> To add a new Saved Reply to the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#crmsavedreply-object) for more information on the CrmSavedReply object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/savedreply");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"Id\": -19067482,
  \"Title\": \"amet exercitation\",
  \"Message\": \"nulla commodo Excepteur\"
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
  
    using (var content = new StringContent("{  \"Id\": -19067482,  \"Title\": \"amet exercitation\",  \"Message\": \"nulla commodo Excepteur\"}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("3dCartWebAPI/v1/CRM/savedreply", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/savedreply');

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
  'Id': -19067482,
  'Title': 'amet exercitation',
  'Message': 'nulla commodo Excepteur'
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "Id": -19067482,
  "Title": "amet exercitation",
  "Message": "nulla commodo Excepteur"
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.post 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/savedreply', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "Id": -19067482,
    "Title": "amet exercitation",
    "Message": "nulla commodo Excepteur"
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/savedreply', data=values, headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"SavedReplyID",
    "Value":"1234",
    "Status":"201",
    "Message":"Created successfully",
  }
]
```

This method is used to add a new CRM SaveReply to the system. See [Data Structures](#crmsavedreply-object) for more information on the CrmSavedReply object.

#### HTTP Request
`POST https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/savedreply`

#### Responses and Errors

Response Code | Description
------------- | ---------
201 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.


### Retrieve a list of all Saved Replies
> To retrieve a list of all Saved Replies from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). 

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/savedreply?title=&limit=&offset=&countonly=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/CRM/savedreply"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/savedreply?title=&limit=&offset=&countonly=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/savedreply?title=&limit=&offset=&countonly=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/savedreply?title=&limit=&offset=&countonly=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#crmsavedreply-object) for more information on the CrmSavedReply object):

```json
[
  {
    "Id": 1,
    "Title": "sample string 1",
    "Message": "sample string 2"
  },
  {
    "Id": 1,
    "Title": "sample string 1",
    "Message": "sample string 2"
  }
]
```
This method is used to retrieve a list of all Saved Replies in the system. See [Data Structures](#crmsavedreply-object) for more information on the CrmSavedReply object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/savedreply{?title,limit,offset,countonly}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
title | optional | Filter results by the title of the saved reply
limit | optional | Maximum number of items that can be returned
offset | optional | Starting point for the return data
countonly | optional | Count the number of rows only

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified saved reply does not exist.

### Retrieve a specific Saved Reply by id
> To retrieve a Saved Reply from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/savedreply/{id}");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/CRM/savedreply/{id}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/savedreply/{id}');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/savedreply/{id}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/savedreply/{id}', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#crmsavedreply-object) for more information on the CrmSavedReply object):

```json
[
  {
    "Id": 1,
    "Title": "sample string 1",
    "Message": "sample string 2"
  },
  {
    "Id": 1,
    "Title": "sample string 1",
    "Message": "sample string 2"
  }
]
```

This method is used to retrieve a specific Saved Reply in the system. See [Data Structures](#crmsavedreply-object) for more information on the CrmSavedReply object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/savedreply{id}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
id | required | The ID of Saved Reply you want to retrieve.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified saved reply does not exist.

### Update a specific Saved Reply
> To update a specific Saved Reply in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#crmsavedreply-object) for more information on the CrmSavedReply object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/savedreply/{id}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"Id\": 42533140,
  \"Title\": \"eu mollit cup\",
  \"Message\": \"dolore est dolor\"
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
  
    using (var content = new StringContent("{  \"Id\": 42533140,  \"Title\": \"eu mollit cup\",  \"Message\": \"dolore est dolor\"}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/CRM/savedreply/{id}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/savedreply/{id}');

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
  'Id': 42533140,
  'Title': 'eu mollit cup',
  'Message': 'dolore est dolor'
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "Id": 42533140,
  "Title": "eu mollit cup",
  "Message": "dolore est dolor"
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/savedreply/{id}', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "Id": 42533140,
    "Title": "eu mollit cup",
    "Message": "dolore est dolor"
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/savedreply/{id}', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"SavedReplyID",
    "Value":"1234",
    "Status":"200",
    "Message":"Updated successfully",
  }
]
```

This method is used to update a single CRM SavedReply record in the database. The {id} parameter specifies which CRM SavedReply record to update. See [Data Structures](#crmsavedreply-object) for more information on the CrmSavedReply object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/savedreply{id}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
id | required | The ID of Saved Reply you want to update.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified saved reply does not exist.


### Delete a CRM SavedReply in the system
> To delete a Saved Reply from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/savedreply/{id}");
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
  
  using(var response = await httpClient.DeleteAsync("3dCartWebAPI/v1/CRM/savedreply/{id}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/savedreply/{id}');

request.setRequestHeader('Content-Type', 'application/xml');
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

response = RestClient.delete 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/savedreply/{id}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/savedreply/{id}', headers=headers)
request.get_method = lambda: 'DELETE'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"SavedReplyID",
    "Value":"1234",
    "Status":"200",
    "Message":"Deleted successfully",
  }
]
```

#### HTTP Request
`DELETE https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/savedreply{id}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
id | required | The ID of Saved Reply you want to delete.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified saved reply does not exist.

## CRM Status 

### Retrieve a list of all CRM Statuses
> To retrieve a list of CRM Statuses from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/status?limit=&offset=&countonly=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/CRM/status"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/status?limit=&offset=&countonly=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/status?limit=&offset=&countonly=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/status?limit=&offset=&countonly=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#crmstatus-object) for more information on the CrmStatus object):

```json
[
  {
    "Id": 1,
    "StatusId": 1,
    "StatusName": "sample string 1"
  },
  {
    "Id": 1,
    "StatusId": 1,
    "StatusName": "sample string 1"
  }
]
```

This method is used to retrieve a list of all CRM statuses in the store. See [Data Structures](#crmstatus-object) for more information on the CrmStatus object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/status{?limit,offset,countonly}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
limit | optional | The maximum number of records to return.
offset | optional | The starting point of the data to return.
countonly | optional | Count the number of rows only.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | There are no Statuses.

### Retrieve a specific Status by id
> To retrieve a CRM Status from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/status/{id}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"Id\": 51620653,
  \"StatusId\": 21695314,
  \"StatusName\": \"sunt ea Excepteur\"
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
  
    using (var content = new StringContent("{  \"Id\": 51620653,  \"StatusId\": 21695314,  \"StatusName\": \"sunt ea Excepteur\"}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/CRM/status/{id}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/status/{id}');

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
  'Id': 51620653,
  'StatusId': 21695314,
  'StatusName': 'sunt ea Excepteur'
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "Id": 51620653,
  "StatusId": 21695314,
  "StatusName": "sunt ea Excepteur"
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/status/{id}', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "Id": 51620653,
    "StatusId": 21695314,
    "StatusName": "sunt ea Excepteur"
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/status/{id}', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#crmstatus-object) for more information on the CrmStatus object):

```json
[
  {
    "Id": 1,
    "StatusId": 1,
    "StatusName": "sample string 1"
  },
  {
    "Id": 1,
    "StatusId": 1,
    "StatusName": "sample string 1"
  }
]
```

This method is used to retrieve a specific Status by the id. See [Data Structures](#crmstatus-object) for more information on the CrmStatus object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/status{id}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
id | required | The ID of the Status to return.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The status does not exist.


### Update a specific CRM Status by id
> To update a specific CRM Status in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#crmstatus-object) for more information on the CrmStatus object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/status/{id}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"Id\": 51620653,
  \"StatusId\": 21695314,
  \"StatusName\": \"sunt ea Excepteur\"
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
  
    using (var content = new StringContent("{  \"Id\": 51620653,  \"StatusId\": 21695314,  \"StatusName\": \"sunt ea Excepteur\"}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/CRM/status/{id}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/status/{id}');

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
  'Id': 51620653,
  'StatusId': 21695314,
  'StatusName': 'sunt ea Excepteur'
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "Id": 51620653,
  "StatusId": 21695314,
  "StatusName": "sunt ea Excepteur"
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/status/{id}', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "Id": 51620653,
    "StatusId": 21695314,
    "StatusName": "sunt ea Excepteur"
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/status/{id}', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"StatusId",
    "Value":"1234",
    "Status":"200",
    "Message":"Updated successfully",
  }
]
```

This method is used to update a single CRM Status record in the database. The {id} parameter specifies which CRM Status record to update.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/CRM/status{id}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
id | required | The ID of the Status to update.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The status does not exist.