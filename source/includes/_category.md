#  Category

## Category

### Create a category

> To add a category to the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#category-object) for more information on the category object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Categories");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"CategoryID\": -67557159,
  \"CategoryName\": \"nulla ad\",
  \"Link\": \"dolore non\",
  \"CategoryDescription\": \"est ea id\",
  \"CategoryIcon\": \"proident nisi\",
  \"CategoryMain\": true,
  \"CategoryParent\": -72269965,
  \"Sorting\": 56501169,
  \"Hide\": true,
  \"UserID\": \"Ut et\",
  \"LastUpdate\": \"1965-05-13T11:18:12.747Z\",
  \"CategoryMenuGroup\": -82853280,
  \"HomeSpecialCategory\": false,
  \"FilterCategory\": true,
  \"TemplateCategoryPage\": 53690528,
  \"DefaultProductsSorting\": 89501843,
  \"SubcategoryColumnsCategorySpecials\": 70854169,
  \"ProductColumnsCategorySpecials\": -7941458,
  \"ProductColumnsCategoryGeneralItems\": 39622744,
  \"ItemsPerPageCategorySpecialItems\": 4012094,
  \"ItemsPerPageCategoryGeneralItems\": -80875337,
  \"DisplayTypeCategorySpecialItems\": 84659598,
  \"DisplayTypeCategoryGeneralProducts\": 61161615,
  \"AllowAccess\": \"officia \",
  \"OnFailRedirectTo\": \"minim\",
  \"HideLeftBar\": true,
  \"HideRightBar\": true,
  \"HideTopMenu\": false,
  \"SmartCategories\": -88149128,
  \"SmartCategoriesSearchKeyword\": \"laborum officia\",
  \"SmartCategoriesLinkTarget\": \"incididunt eiusmod \",
  \"TemplateProductPage\": -3376213,
  \"ProductColumnsRelatedProducts\": 84148240,
  \"ProductColumnsUpsellProducts\": 9573080,
  \"DisplayTypeRelatedItems\": 95433922,
  \"DisplayTypeUpsellItems\": -24609856,
  \"OptionSetList\": [
    {
      \"OptionSetID\": -61902981,
      \"OptionSetName\": \"fugiat\",
      \"OptionSorting\": -1292591.7864389867,
      \"OptionRequired\": true,
      \"OptionType\": \"mo\",
      \"OptionURL\": \"ipsum ut voluptate\",
      \"OptionAdditionalInformation\": \"officia pariatur velit eiusmod ullamco\",
      \"OptionSizeLimit\": 87628114,
      \"OptionList\": [
        {
          \"OptionID\": 11480194,
          \"OptionName\": \"ad Lorem\",
          \"OptionSelected\": false,
          \"OptionHide\": false,
          \"OptionValue\": -48016879.41722226,
          \"OptionPartNumber\": \"pariatur reprehenderit tempor ad\",
          \"OptionSorting\": -64312345.4802585,
          \"OptionImagePath\": \"laborum deserunt\",
          \"OptionBundleCatalogId\": -76645580,
          \"OptionBundleQuantity\": 86468048
        },
        {
          \"OptionID\": 8861248,
          \"OptionName\": \"ad adipisicing\",
          \"OptionSelected\": true,
          \"OptionHide\": false,
          \"OptionValue\": -57687975.04047156,
          \"OptionPartNumber\": \"fugiat ex\",
          \"OptionSorting\": -62179365.28394232,
          \"OptionImagePath\": \"esse elit nostrud enim eu\",
          \"OptionBundleCatalogId\": -86423189,
          \"OptionBundleQuantity\": -78764220
        }
      ]
    },
    {
      \"OptionSetID\": 23891114,
      \"OptionSetName\": \"aute\",
      \"OptionSorting\": 37821766.63776654,
      \"OptionRequired\": false,
      \"OptionType\": \"Lo\",
      \"OptionURL\": \"amet ea non\",
      \"OptionAdditionalInformation\": \"dolore\",
      \"OptionSizeLimit\": 77367386,
      \"OptionList\": [
        {
          \"OptionID\": 50141412,
          \"OptionName\": \"sit in cupidatat et\",
          \"OptionSelected\": false,
          \"OptionHide\": false,
          \"OptionValue\": -12360782.211385548,
          \"OptionPartNumber\": \"commodo\",
          \"OptionSorting\": 15546518.396177739,
          \"OptionImagePath\": \"laboris anim laborum\",
          \"OptionBundleCatalogId\": 33874973,
          \"OptionBundleQuantity\": -3418620
        },
        {
          \"OptionID\": 26389454,
          \"OptionName\": \"adipisicing tempor ut irure quis\",
          \"OptionSelected\": false,
          \"OptionHide\": false,
          \"OptionValue\": 67157952.88318315,
          \"OptionPartNumber\": \"nulla cu\",
          \"OptionSorting\": 29150772.753243536,
          \"OptionImagePath\": \"aute sed laboris\",
          \"OptionBundleCatalogId\": 98032983,
          \"OptionBundleQuantity\": 73331717
        },
        {
          \"OptionID\": -15583349,
          \"OptionName\": \"voluptate aute ex in\",
          \"OptionSelected\": false,
          \"OptionHide\": true,
          \"OptionValue\": 13691939.410343498,
          \"OptionPartNumber\": \"Excepteur sit veniam ex\",
          \"OptionSorting\": 11873942.539606601,
          \"OptionImagePath\": \"Lorem\",
          \"OptionBundleCatalogId\": -16396892,
          \"OptionBundleQuantity\": -90964417
        }
      ]
    }
  ],
  \"Title\": \"laboris\",
  \"CustomFileName\": \"Excepteur est nisi nulla tempor\",
  \"MetaTags\": \"ipsum ullamco labore sed\",
  \"CategoryHeader\": \"consequat veniam ullamco nisi\",
  \"CategoryFooter\": \"consectetur deserunt et\",
  \"AdditionalKeywords\": \"incididunt\",
  \"CategoryExternalIdsList\": [
    {
      \"ID\": -86097882,
      \"CategoryID\": -9938274,
      \"ExternalId1\": \"labore occaecat amet laboris\",
      \"ExternalIdType\": \"non velit pariatur Lorem\"
    },
    {
      \"ID\": 68936496,
      \"CategoryID\": -24351766,
      \"ExternalId1\": \"elit\",
      \"ExternalIdType\": \"fugiat irure incididunt\"
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
  
    using (var content = new StringContent("{  \"CategoryID\": -67557159,  \"CategoryName\": \"nulla ad\",  \"Link\": \"dolore non\",  \"CategoryDescription\": \"est ea id\",  \"CategoryIcon\": \"proident nisi\",  \"CategoryMain\": true,  \"CategoryParent\": -72269965,  \"Sorting\": 56501169,  \"Hide\": true,  \"UserID\": \"Ut et\",  \"LastUpdate\": \"1965-05-13T11:18:12.747Z\",  \"CategoryMenuGroup\": -82853280,  \"HomeSpecialCategory\": false,  \"FilterCategory\": true,  \"TemplateCategoryPage\": 53690528,  \"DefaultProductsSorting\": 89501843,  \"SubcategoryColumnsCategorySpecials\": 70854169,  \"ProductColumnsCategorySpecials\": -7941458,  \"ProductColumnsCategoryGeneralItems\": 39622744,  \"ItemsPerPageCategorySpecialItems\": 4012094,  \"ItemsPerPageCategoryGeneralItems\": -80875337,  \"DisplayTypeCategorySpecialItems\": 84659598,  \"DisplayTypeCategoryGeneralProducts\": 61161615,  \"AllowAccess\": \"officia \",  \"OnFailRedirectTo\": \"minim\",  \"HideLeftBar\": true,  \"HideRightBar\": true,  \"HideTopMenu\": false,  \"SmartCategories\": -88149128,  \"SmartCategoriesSearchKeyword\": \"laborum officia\",  \"SmartCategoriesLinkTarget\": \"incididunt eiusmod \",  \"TemplateProductPage\": -3376213,  \"ProductColumnsRelatedProducts\": 84148240,  \"ProductColumnsUpsellProducts\": 9573080,  \"DisplayTypeRelatedItems\": 95433922,  \"DisplayTypeUpsellItems\": -24609856,  \"OptionSetList\": [    {      \"OptionSetID\": -61902981,      \"OptionSetName\": \"fugiat\",      \"OptionSorting\": -1292591.7864389867,      \"OptionRequired\": true,      \"OptionType\": \"mo\",      \"OptionURL\": \"ipsum ut voluptate\",      \"OptionAdditionalInformation\": \"officia pariatur velit eiusmod ullamco\",      \"OptionSizeLimit\": 87628114,      \"OptionList\": [        {          \"OptionID\": 11480194,          \"OptionName\": \"ad Lorem\",          \"OptionSelected\": false,          \"OptionHide\": false,          \"OptionValue\": -48016879.41722226,          \"OptionPartNumber\": \"pariatur reprehenderit tempor ad\",          \"OptionSorting\": -64312345.4802585,          \"OptionImagePath\": \"laborum deserunt\",          \"OptionBundleCatalogId\": -76645580,          \"OptionBundleQuantity\": 86468048        },        {          \"OptionID\": 8861248,          \"OptionName\": \"ad adipisicing\",          \"OptionSelected\": true,          \"OptionHide\": false,          \"OptionValue\": -57687975.04047156,          \"OptionPartNumber\": \"fugiat ex\",          \"OptionSorting\": -62179365.28394232,          \"OptionImagePath\": \"esse elit nostrud enim eu\",          \"OptionBundleCatalogId\": -86423189,          \"OptionBundleQuantity\": -78764220        }      ]    },    {      \"OptionSetID\": 23891114,      \"OptionSetName\": \"aute\",      \"OptionSorting\": 37821766.63776654,      \"OptionRequired\": false,      \"OptionType\": \"Lo\",      \"OptionURL\": \"amet ea non\",      \"OptionAdditionalInformation\": \"dolore\",      \"OptionSizeLimit\": 77367386,      \"OptionList\": [        {          \"OptionID\": 50141412,          \"OptionName\": \"sit in cupidatat et\",          \"OptionSelected\": false,          \"OptionHide\": false,          \"OptionValue\": -12360782.211385548,          \"OptionPartNumber\": \"commodo\",          \"OptionSorting\": 15546518.396177739,          \"OptionImagePath\": \"laboris anim laborum\",          \"OptionBundleCatalogId\": 33874973,          \"OptionBundleQuantity\": -3418620        },        {          \"OptionID\": 26389454,          \"OptionName\": \"adipisicing tempor ut irure quis\",          \"OptionSelected\": false,          \"OptionHide\": false,          \"OptionValue\": 67157952.88318315,          \"OptionPartNumber\": \"nulla cu\",          \"OptionSorting\": 29150772.753243536,          \"OptionImagePath\": \"aute sed laboris\",          \"OptionBundleCatalogId\": 98032983,          \"OptionBundleQuantity\": 73331717        },        {          \"OptionID\": -15583349,          \"OptionName\": \"voluptate aute ex in\",          \"OptionSelected\": false,          \"OptionHide\": true,          \"OptionValue\": 13691939.410343498,          \"OptionPartNumber\": \"Excepteur sit veniam ex\",          \"OptionSorting\": 11873942.539606601,          \"OptionImagePath\": \"Lorem\",          \"OptionBundleCatalogId\": -16396892,          \"OptionBundleQuantity\": -90964417        }      ]    }  ],  \"Title\": \"laboris\",  \"CustomFileName\": \"Excepteur est nisi nulla tempor\",  \"MetaTags\": \"ipsum ullamco labore sed\",  \"CategoryHeader\": \"consequat veniam ullamco nisi\",  \"CategoryFooter\": \"consectetur deserunt et\",  \"AdditionalKeywords\": \"incididunt\",  \"CategoryExternalIdsList\": [    {      \"ID\": -86097882,      \"CategoryID\": -9938274,      \"ExternalId1\": \"labore occaecat amet laboris\",      \"ExternalIdType\": \"non velit pariatur Lorem\"    },    {      \"ID\": 68936496,      \"CategoryID\": -24351766,      \"ExternalId1\": \"elit\",      \"ExternalIdType\": \"fugiat irure incididunt\"    }  ]}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("3dCartWebAPI/v1/Categories", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Categories');

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
  'CategoryID': -67557159,
  'CategoryName': 'nulla ad',
  'Link': 'dolore non',
  'CategoryDescription': 'est ea id',
  'CategoryIcon': 'proident nisi',
  'CategoryMain': true,
  'CategoryParent': -72269965,
  'Sorting': 56501169,
  'Hide': true,
  'UserID': 'Ut et',
  'LastUpdate': '1965-05-13T11:18:12.747Z',
  'CategoryMenuGroup': -82853280,
  'HomeSpecialCategory': false,
  'FilterCategory': true,
  'TemplateCategoryPage': 53690528,
  'DefaultProductsSorting': 89501843,
  'SubcategoryColumnsCategorySpecials': 70854169,
  'ProductColumnsCategorySpecials': -7941458,
  'ProductColumnsCategoryGeneralItems': 39622744,
  'ItemsPerPageCategorySpecialItems': 4012094,
  'ItemsPerPageCategoryGeneralItems': -80875337,
  'DisplayTypeCategorySpecialItems': 84659598,
  'DisplayTypeCategoryGeneralProducts': 61161615,
  'AllowAccess': 'officia ',
  'OnFailRedirectTo': 'minim',
  'HideLeftBar': true,
  'HideRightBar': true,
  'HideTopMenu': false,
  'SmartCategories': -88149128,
  'SmartCategoriesSearchKeyword': 'laborum officia',
  'SmartCategoriesLinkTarget': 'incididunt eiusmod ',
  'TemplateProductPage': -3376213,
  'ProductColumnsRelatedProducts': 84148240,
  'ProductColumnsUpsellProducts': 9573080,
  'DisplayTypeRelatedItems': 95433922,
  'DisplayTypeUpsellItems': -24609856,
  'OptionSetList': [
    {
      'OptionSetID': -61902981,
      'OptionSetName': 'fugiat',
      'OptionSorting': -1292591.7864389867,
      'OptionRequired': true,
      'OptionType': 'mo',
      'OptionURL': 'ipsum ut voluptate',
      'OptionAdditionalInformation': 'officia pariatur velit eiusmod ullamco',
      'OptionSizeLimit': 87628114,
      'OptionList': [
        {
          'OptionID': 11480194,
          'OptionName': 'ad Lorem',
          'OptionSelected': false,
          'OptionHide': false,
          'OptionValue': -48016879.41722226,
          'OptionPartNumber': 'pariatur reprehenderit tempor ad',
          'OptionSorting': -64312345.4802585,
          'OptionImagePath': 'laborum deserunt',
          'OptionBundleCatalogId': -76645580,
          'OptionBundleQuantity': 86468048
        },
        {
          'OptionID': 8861248,
          'OptionName': 'ad adipisicing',
          'OptionSelected': true,
          'OptionHide': false,
          'OptionValue': -57687975.04047156,
          'OptionPartNumber': 'fugiat ex',
          'OptionSorting': -62179365.28394232,
          'OptionImagePath': 'esse elit nostrud enim eu',
          'OptionBundleCatalogId': -86423189,
          'OptionBundleQuantity': -78764220
        }
      ]
    },
    {
      'OptionSetID': 23891114,
      'OptionSetName': 'aute',
      'OptionSorting': 37821766.63776654,
      'OptionRequired': false,
      'OptionType': 'Lo',
      'OptionURL': 'amet ea non',
      'OptionAdditionalInformation': 'dolore',
      'OptionSizeLimit': 77367386,
      'OptionList': [
        {
          'OptionID': 50141412,
          'OptionName': 'sit in cupidatat et',
          'OptionSelected': false,
          'OptionHide': false,
          'OptionValue': -12360782.211385548,
          'OptionPartNumber': 'commodo',
          'OptionSorting': 15546518.396177739,
          'OptionImagePath': 'laboris anim laborum',
          'OptionBundleCatalogId': 33874973,
          'OptionBundleQuantity': -3418620
        },
        {
          'OptionID': 26389454,
          'OptionName': 'adipisicing tempor ut irure quis',
          'OptionSelected': false,
          'OptionHide': false,
          'OptionValue': 67157952.88318315,
          'OptionPartNumber': 'nulla cu',
          'OptionSorting': 29150772.753243536,
          'OptionImagePath': 'aute sed laboris',
          'OptionBundleCatalogId': 98032983,
          'OptionBundleQuantity': 73331717
        },
        {
          'OptionID': -15583349,
          'OptionName': 'voluptate aute ex in',
          'OptionSelected': false,
          'OptionHide': true,
          'OptionValue': 13691939.410343498,
          'OptionPartNumber': 'Excepteur sit veniam ex',
          'OptionSorting': 11873942.539606601,
          'OptionImagePath': 'Lorem',
          'OptionBundleCatalogId': -16396892,
          'OptionBundleQuantity': -90964417
        }
      ]
    }
  ],
  'Title': 'laboris',
  'CustomFileName': 'Excepteur est nisi nulla tempor',
  'MetaTags': 'ipsum ullamco labore sed',
  'CategoryHeader': 'consequat veniam ullamco nisi',
  'CategoryFooter': 'consectetur deserunt et',
  'AdditionalKeywords': 'incididunt',
  'CategoryExternalIdsList': [
    {
      'ID': -86097882,
      'CategoryID': -9938274,
      'ExternalId1': 'labore occaecat amet laboris',
      'ExternalIdType': 'non velit pariatur Lorem'
    },
    {
      'ID': 68936496,
      'CategoryID': -24351766,
      'ExternalId1': 'elit',
      'ExternalIdType': 'fugiat irure incididunt'
    }
  ]
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "CategoryID": -67557159,
  "CategoryName": "nulla ad",
  "Link": "dolore non",
  "CategoryDescription": "est ea id",
  "CategoryIcon": "proident nisi",
  "CategoryMain": true,
  "CategoryParent": -72269965,
  "Sorting": 56501169,
  "Hide": true,
  "UserID": "Ut et",
  "LastUpdate": "1965-05-13T11:18:12.747Z",
  "CategoryMenuGroup": -82853280,
  "HomeSpecialCategory": false,
  "FilterCategory": true,
  "TemplateCategoryPage": 53690528,
  "DefaultProductsSorting": 89501843,
  "SubcategoryColumnsCategorySpecials": 70854169,
  "ProductColumnsCategorySpecials": -7941458,
  "ProductColumnsCategoryGeneralItems": 39622744,
  "ItemsPerPageCategorySpecialItems": 4012094,
  "ItemsPerPageCategoryGeneralItems": -80875337,
  "DisplayTypeCategorySpecialItems": 84659598,
  "DisplayTypeCategoryGeneralProducts": 61161615,
  "AllowAccess": "officia ",
  "OnFailRedirectTo": "minim",
  "HideLeftBar": true,
  "HideRightBar": true,
  "HideTopMenu": false,
  "SmartCategories": -88149128,
  "SmartCategoriesSearchKeyword": "laborum officia",
  "SmartCategoriesLinkTarget": "incididunt eiusmod ",
  "TemplateProductPage": -3376213,
  "ProductColumnsRelatedProducts": 84148240,
  "ProductColumnsUpsellProducts": 9573080,
  "DisplayTypeRelatedItems": 95433922,
  "DisplayTypeUpsellItems": -24609856,
  "OptionSetList": [
    {
      "OptionSetID": -61902981,
      "OptionSetName": "fugiat",
      "OptionSorting": -1292591.7864389867,
      "OptionRequired": true,
      "OptionType": "mo",
      "OptionURL": "ipsum ut voluptate",
      "OptionAdditionalInformation": "officia pariatur velit eiusmod ullamco",
      "OptionSizeLimit": 87628114,
      "OptionList": [
        {
          "OptionID": 11480194,
          "OptionName": "ad Lorem",
          "OptionSelected": false,
          "OptionHide": false,
          "OptionValue": -48016879.41722226,
          "OptionPartNumber": "pariatur reprehenderit tempor ad",
          "OptionSorting": -64312345.4802585,
          "OptionImagePath": "laborum deserunt",
          "OptionBundleCatalogId": -76645580,
          "OptionBundleQuantity": 86468048
        },
        {
          "OptionID": 8861248,
          "OptionName": "ad adipisicing",
          "OptionSelected": true,
          "OptionHide": false,
          "OptionValue": -57687975.04047156,
          "OptionPartNumber": "fugiat ex",
          "OptionSorting": -62179365.28394232,
          "OptionImagePath": "esse elit nostrud enim eu",
          "OptionBundleCatalogId": -86423189,
          "OptionBundleQuantity": -78764220
        }
      ]
    },
    {
      "OptionSetID": 23891114,
      "OptionSetName": "aute",
      "OptionSorting": 37821766.63776654,
      "OptionRequired": false,
      "OptionType": "Lo",
      "OptionURL": "amet ea non",
      "OptionAdditionalInformation": "dolore",
      "OptionSizeLimit": 77367386,
      "OptionList": [
        {
          "OptionID": 50141412,
          "OptionName": "sit in cupidatat et",
          "OptionSelected": false,
          "OptionHide": false,
          "OptionValue": -12360782.211385548,
          "OptionPartNumber": "commodo",
          "OptionSorting": 15546518.396177739,
          "OptionImagePath": "laboris anim laborum",
          "OptionBundleCatalogId": 33874973,
          "OptionBundleQuantity": -3418620
        },
        {
          "OptionID": 26389454,
          "OptionName": "adipisicing tempor ut irure quis",
          "OptionSelected": false,
          "OptionHide": false,
          "OptionValue": 67157952.88318315,
          "OptionPartNumber": "nulla cu",
          "OptionSorting": 29150772.753243536,
          "OptionImagePath": "aute sed laboris",
          "OptionBundleCatalogId": 98032983,
          "OptionBundleQuantity": 73331717
        },
        {
          "OptionID": -15583349,
          "OptionName": "voluptate aute ex in",
          "OptionSelected": false,
          "OptionHide": true,
          "OptionValue": 13691939.410343498,
          "OptionPartNumber": "Excepteur sit veniam ex",
          "OptionSorting": 11873942.539606601,
          "OptionImagePath": "Lorem",
          "OptionBundleCatalogId": -16396892,
          "OptionBundleQuantity": -90964417
        }
      ]
    }
  ],
  "Title": "laboris",
  "CustomFileName": "Excepteur est nisi nulla tempor",
  "MetaTags": "ipsum ullamco labore sed",
  "CategoryHeader": "consequat veniam ullamco nisi",
  "CategoryFooter": "consectetur deserunt et",
  "AdditionalKeywords": "incididunt",
  "CategoryExternalIdsList": [
    {
      "ID": -86097882,
      "CategoryID": -9938274,
      "ExternalId1": "labore occaecat amet laboris",
      "ExternalIdType": "non velit pariatur Lorem"
    },
    {
      "ID": 68936496,
      "CategoryID": -24351766,
      "ExternalId1": "elit",
      "ExternalIdType": "fugiat irure incididunt"
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

response = RestClient.post 'https://apirest.3dcart.com/3dCartWebAPI/v1/Categories', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "CategoryID": -67557159,
    "CategoryName": "nulla ad",
    "Link": "dolore non",
    "CategoryDescription": "est ea id",
    "CategoryIcon": "proident nisi",
    "CategoryMain": true,
    "CategoryParent": -72269965,
    "Sorting": 56501169,
    "Hide": true,
    "UserID": "Ut et",
    "LastUpdate": "1965-05-13T11:18:12.747Z",
    "CategoryMenuGroup": -82853280,
    "HomeSpecialCategory": false,
    "FilterCategory": true,
    "TemplateCategoryPage": 53690528,
    "DefaultProductsSorting": 89501843,
    "SubcategoryColumnsCategorySpecials": 70854169,
    "ProductColumnsCategorySpecials": -7941458,
    "ProductColumnsCategoryGeneralItems": 39622744,
    "ItemsPerPageCategorySpecialItems": 4012094,
    "ItemsPerPageCategoryGeneralItems": -80875337,
    "DisplayTypeCategorySpecialItems": 84659598,
    "DisplayTypeCategoryGeneralProducts": 61161615,
    "AllowAccess": "officia ",
    "OnFailRedirectTo": "minim",
    "HideLeftBar": true,
    "HideRightBar": true,
    "HideTopMenu": false,
    "SmartCategories": -88149128,
    "SmartCategoriesSearchKeyword": "laborum officia",
    "SmartCategoriesLinkTarget": "incididunt eiusmod ",
    "TemplateProductPage": -3376213,
    "ProductColumnsRelatedProducts": 84148240,
    "ProductColumnsUpsellProducts": 9573080,
    "DisplayTypeRelatedItems": 95433922,
    "DisplayTypeUpsellItems": -24609856,
    "OptionSetList": [
      {
        "OptionSetID": -61902981,
        "OptionSetName": "fugiat",
        "OptionSorting": -1292591.7864389867,
        "OptionRequired": true,
        "OptionType": "mo",
        "OptionURL": "ipsum ut voluptate",
        "OptionAdditionalInformation": "officia pariatur velit eiusmod ullamco",
        "OptionSizeLimit": 87628114,
        "OptionList": [
          {
            "OptionID": 11480194,
            "OptionName": "ad Lorem",
            "OptionSelected": false,
            "OptionHide": false,
            "OptionValue": -48016879.41722226,
            "OptionPartNumber": "pariatur reprehenderit tempor ad",
            "OptionSorting": -64312345.4802585,
            "OptionImagePath": "laborum deserunt",
            "OptionBundleCatalogId": -76645580,
            "OptionBundleQuantity": 86468048
          },
          {
            "OptionID": 8861248,
            "OptionName": "ad adipisicing",
            "OptionSelected": true,
            "OptionHide": false,
            "OptionValue": -57687975.04047156,
            "OptionPartNumber": "fugiat ex",
            "OptionSorting": -62179365.28394232,
            "OptionImagePath": "esse elit nostrud enim eu",
            "OptionBundleCatalogId": -86423189,
            "OptionBundleQuantity": -78764220
          }
        ]
      },
      {
        "OptionSetID": 23891114,
        "OptionSetName": "aute",
        "OptionSorting": 37821766.63776654,
        "OptionRequired": false,
        "OptionType": "Lo",
        "OptionURL": "amet ea non",
        "OptionAdditionalInformation": "dolore",
        "OptionSizeLimit": 77367386,
        "OptionList": [
          {
            "OptionID": 50141412,
            "OptionName": "sit in cupidatat et",
            "OptionSelected": false,
            "OptionHide": false,
            "OptionValue": -12360782.211385548,
            "OptionPartNumber": "commodo",
            "OptionSorting": 15546518.396177739,
            "OptionImagePath": "laboris anim laborum",
            "OptionBundleCatalogId": 33874973,
            "OptionBundleQuantity": -3418620
          },
          {
            "OptionID": 26389454,
            "OptionName": "adipisicing tempor ut irure quis",
            "OptionSelected": false,
            "OptionHide": false,
            "OptionValue": 67157952.88318315,
            "OptionPartNumber": "nulla cu",
            "OptionSorting": 29150772.753243536,
            "OptionImagePath": "aute sed laboris",
            "OptionBundleCatalogId": 98032983,
            "OptionBundleQuantity": 73331717
          },
          {
            "OptionID": -15583349,
            "OptionName": "voluptate aute ex in",
            "OptionSelected": false,
            "OptionHide": true,
            "OptionValue": 13691939.410343498,
            "OptionPartNumber": "Excepteur sit veniam ex",
            "OptionSorting": 11873942.539606601,
            "OptionImagePath": "Lorem",
            "OptionBundleCatalogId": -16396892,
            "OptionBundleQuantity": -90964417
          }
        ]
      }
    ],
    "Title": "laboris",
    "CustomFileName": "Excepteur est nisi nulla tempor",
    "MetaTags": "ipsum ullamco labore sed",
    "CategoryHeader": "consequat veniam ullamco nisi",
    "CategoryFooter": "consectetur deserunt et",
    "AdditionalKeywords": "incididunt",
    "CategoryExternalIdsList": [
      {
        "ID": -86097882,
        "CategoryID": -9938274,
        "ExternalId1": "labore occaecat amet laboris",
        "ExternalIdType": "non velit pariatur Lorem"
      },
      {
        "ID": 68936496,
        "CategoryID": -24351766,
        "ExternalId1": "elit",
        "ExternalIdType": "fugiat irure incididunt"
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Categories', data=values, headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"CategoryID",
    "Value":"1234",
    "Status":"201",
    "Message":"Created successfully",
  }
]
```

Adds a new category to the system. See [Data Structures](#category-object) for more information on the category object.

#### HTTP Request
`POST https://apirest.3dcart.com/3dCartWebAPI/v1/Categories`

#### Responses and errors

Response Code | Description
------------- | ---------
200 | Successful response code. Category has been added.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.


### Retrieve a list of all categories

> To retrieve a list of Categories from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). 

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Categories?limit=&offset=&category=&countonly=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Categories"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Categories?limit=&offset=&category=&countonly=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Categories?limit=&offset=&category=&countonly=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Categories?limit=&offset=&category=&countonly=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#category-object) for more information on the category object):

```json
[
  {
    "CategoryID": 1,
    "CategoryName": "sample string 1",
    "Link": "sample string 2",
    "CategoryDescription": "sample string 3",
    "CategoryIcon": "sample string 4",
    "CategoryMain": true,
    "CategoryParent": 1,
    "Sorting": 1,
    "Hide": true,
    "UserID": "sample string 5",
    "LastUpdate": "02/05/2019 13:08",
    "CategoryMenuGroup": 1,
    "HomeSpecialCategory": true,
    "FilterCategory": true,
    "TemplateCategoryPage": 1,
    "DefaultProductsSorting": 1,
    "SubcategoryColumnsCategorySpecials": 1,
    "ProductColumnsCategorySpecials": 1,
    "ProductColumnsCategoryGeneralItems": 1,
    "ItemsPerPageCategorySpecialItems": 1,
    "ItemsPerPageCategoryGeneralItems": 1,
    "DisplayTypeCategorySpecialItems": 1,
    "DisplayTypeCategoryGeneralProducts": 1,
    "AllowAccess": "sample string 6",
    "OnFailRedirectTo": "sample string 7",
    "HideLeftBar": true,
    "HideRightBar": true,
    "HideTopMenu": true,
    "SmartCategories": 1,
    "SmartCategoriesSearchKeyword": "sample string 8",
    "SmartCategoriesLinkTarget": "sample string 9",
    "TemplateProductPage": 1,
    "ProductColumnsRelatedProducts": 1,
    "ProductColumnsUpsellProducts": 1,
    "DisplayTypeRelatedItems": 1,
    "DisplayTypeUpsellItems": 1,
    "OptionSetList": [
      {
        "OptionSetID": 1,
        "OptionSetName": "sample string 1",
        "OptionSorting": 1.1,
        "OptionRequired": true,
        "OptionType": "sample string 2",
        "OptionURL": "sample string 3",
        "OptionAdditionalInformation": "sample string 4",
        "OptionSizeLimit": 1,
        "OptionList": [
          {
            "OptionID": 1,
            "OptionName": "sample string 1",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": 1.1,
            "OptionPartNumber": "sample string 2",
            "OptionSorting": 1.1,
            "OptionImagePath": "sample string 3",
            "OptionBundleCatalogId": 1,
            "OptionBundleQuantity": 1
          },
          {
            "OptionID": 1,
            "OptionName": "sample string 1",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": 1.1,
            "OptionPartNumber": "sample string 2",
            "OptionSorting": 1.1,
            "OptionImagePath": "sample string 3",
            "OptionBundleCatalogId": 1,
            "OptionBundleQuantity": 1
          }
        ]
      },
      {
        "OptionSetID": 1,
        "OptionSetName": "sample string 1",
        "OptionSorting": 1.1,
        "OptionRequired": true,
        "OptionType": "sample string 2",
        "OptionURL": "sample string 3",
        "OptionAdditionalInformation": "sample string 4",
        "OptionSizeLimit": 1,
        "OptionList": [
          {
            "OptionID": 1,
            "OptionName": "sample string 1",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": 1.1,
            "OptionPartNumber": "sample string 2",
            "OptionSorting": 1.1,
            "OptionImagePath": "sample string 3",
            "OptionBundleCatalogId": 1,
            "OptionBundleQuantity": 1
          },
          {
            "OptionID": 1,
            "OptionName": "sample string 1",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": 1.1,
            "OptionPartNumber": "sample string 2",
            "OptionSorting": 1.1,
            "OptionImagePath": "sample string 3",
            "OptionBundleCatalogId": 1,
            "OptionBundleQuantity": 1
          }
        ]
      }
    ],
    "Title": "sample string 10",
    "CustomFileName": "sample string 11",
    "MetaTags": "sample string 12",
    "CategoryHeader": "sample string 13",
    "CategoryFooter": "sample string 14",
    "AdditionalKeywords": "sample string 15",
    "CategoryExternalIdsList": [
      {
        "ID": 1,
        "CategoryID": 1,
        "ExternalId1": "sample string 1",
        "ExternalIdType": "sample string 2"
      },
      {
        "ID": 1,
        "CategoryID": 1,
        "ExternalId1": "sample string 1",
        "ExternalIdType": "sample string 2"
      }
    ]
  },
  {
    "CategoryID": 1,
    "CategoryName": "sample string 1",
    "Link": "sample string 2",
    "CategoryDescription": "sample string 3",
    "CategoryIcon": "sample string 4",
    "CategoryMain": true,
    "CategoryParent": 1,
    "Sorting": 1,
    "Hide": true,
    "UserID": "sample string 5",
    "LastUpdate": "02/05/2019 13:08",
    "CategoryMenuGroup": 1,
    "HomeSpecialCategory": true,
    "FilterCategory": true,
    "TemplateCategoryPage": 1,
    "DefaultProductsSorting": 1,
    "SubcategoryColumnsCategorySpecials": 1,
    "ProductColumnsCategorySpecials": 1,
    "ProductColumnsCategoryGeneralItems": 1,
    "ItemsPerPageCategorySpecialItems": 1,
    "ItemsPerPageCategoryGeneralItems": 1,
    "DisplayTypeCategorySpecialItems": 1,
    "DisplayTypeCategoryGeneralProducts": 1,
    "AllowAccess": "sample string 6",
    "OnFailRedirectTo": "sample string 7",
    "HideLeftBar": true,
    "HideRightBar": true,
    "HideTopMenu": true,
    "SmartCategories": 1,
    "SmartCategoriesSearchKeyword": "sample string 8",
    "SmartCategoriesLinkTarget": "sample string 9",
    "TemplateProductPage": 1,
    "ProductColumnsRelatedProducts": 1,
    "ProductColumnsUpsellProducts": 1,
    "DisplayTypeRelatedItems": 1,
    "DisplayTypeUpsellItems": 1,
    "OptionSetList": [
      {
        "OptionSetID": 1,
        "OptionSetName": "sample string 1",
        "OptionSorting": 1.1,
        "OptionRequired": true,
        "OptionType": "sample string 2",
        "OptionURL": "sample string 3",
        "OptionAdditionalInformation": "sample string 4",
        "OptionSizeLimit": 1,
        "OptionList": [
          {
            "OptionID": 1,
            "OptionName": "sample string 1",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": 1.1,
            "OptionPartNumber": "sample string 2",
            "OptionSorting": 1.1,
            "OptionImagePath": "sample string 3",
            "OptionBundleCatalogId": 1,
            "OptionBundleQuantity": 1
          },
          {
            "OptionID": 1,
            "OptionName": "sample string 1",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": 1.1,
            "OptionPartNumber": "sample string 2",
            "OptionSorting": 1.1,
            "OptionImagePath": "sample string 3",
            "OptionBundleCatalogId": 1,
            "OptionBundleQuantity": 1
          }
        ]
      },
      {
        "OptionSetID": 1,
        "OptionSetName": "sample string 1",
        "OptionSorting": 1.1,
        "OptionRequired": true,
        "OptionType": "sample string 2",
        "OptionURL": "sample string 3",
        "OptionAdditionalInformation": "sample string 4",
        "OptionSizeLimit": 1,
        "OptionList": [
          {
            "OptionID": 1,
            "OptionName": "sample string 1",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": 1.1,
            "OptionPartNumber": "sample string 2",
            "OptionSorting": 1.1,
            "OptionImagePath": "sample string 3",
            "OptionBundleCatalogId": 1,
            "OptionBundleQuantity": 1
          },
          {
            "OptionID": 1,
            "OptionName": "sample string 1",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": 1.1,
            "OptionPartNumber": "sample string 2",
            "OptionSorting": 1.1,
            "OptionImagePath": "sample string 3",
            "OptionBundleCatalogId": 1,
            "OptionBundleQuantity": 1
          }
        ]
      }
    ],
    "Title": "sample string 10",
    "CustomFileName": "sample string 11",
    "MetaTags": "sample string 12",
    "CategoryHeader": "sample string 13",
    "CategoryFooter": "sample string 14",
    "AdditionalKeywords": "sample string 15",
    "CategoryExternalIdsList": [
      {
        "ID": 1,
        "CategoryID": 1,
        "ExternalId1": "sample string 1",
        "ExternalIdType": "sample string 2"
      },
      {
        "ID": 1,
        "CategoryID": 1,
        "ExternalId1": "sample string 1",
        "ExternalIdType": "sample string 2"
      }
    ]
  }
]
```

This method is used to retrieve a list of all categories from the store. See [Data Structures](#category-object) for more information on the category object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Categories`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
limit | Optional | The number of records you wish returned (Max. 500).
offset | Optional | The record you to start with.
countonly | Optional | Returns the number of records.
category | Optional | Retrieve a category by it's name.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code. Category has been deleted.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified category does not exist.

### Retrieve a specific category by id

> To retrieve a category from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{id}");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Categories/{id}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{id}');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{id}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{id}', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#category-object) for more information on the category object.):

```json
[
  {
    "CategoryID": 1,
    "CategoryName": "sample string 1",
    "Link": "sample string 2",
    "CategoryDescription": "sample string 3",
    "CategoryIcon": "sample string 4",
    "CategoryMain": true,
    "CategoryParent": 1,
    "Sorting": 1,
    "Hide": true,
    "UserID": "sample string 5",
    "LastUpdate": "02/05/2019 14:30",
    "CategoryMenuGroup": 1,
    "HomeSpecialCategory": true,
    "FilterCategory": true,
    "TemplateCategoryPage": 1,
    "DefaultProductsSorting": 1,
    "SubcategoryColumnsCategorySpecials": 1,
    "ProductColumnsCategorySpecials": 1,
    "ProductColumnsCategoryGeneralItems": 1,
    "ItemsPerPageCategorySpecialItems": 1,
    "ItemsPerPageCategoryGeneralItems": 1,
    "DisplayTypeCategorySpecialItems": 1,
    "DisplayTypeCategoryGeneralProducts": 1,
    "AllowAccess": "sample string 6",
    "OnFailRedirectTo": "sample string 7",
    "HideLeftBar": true,
    "HideRightBar": true,
    "HideTopMenu": true,
    "SmartCategories": 1,
    "SmartCategoriesSearchKeyword": "sample string 8",
    "SmartCategoriesLinkTarget": "sample string 9",
    "TemplateProductPage": 1,
    "ProductColumnsRelatedProducts": 1,
    "ProductColumnsUpsellProducts": 1,
    "DisplayTypeRelatedItems": 1,
    "DisplayTypeUpsellItems": 1,
    "OptionSetList": [
      {
        "OptionSetID": 1,
        "OptionSetName": "sample string 1",
        "OptionSorting": 1.1,
        "OptionRequired": true,
        "OptionType": "sample string 2",
        "OptionURL": "sample string 3",
        "OptionAdditionalInformation": "sample string 4",
        "OptionSizeLimit": 1,
        "OptionList": [
          {
            "OptionID": 1,
            "OptionName": "sample string 1",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": 1.1,
            "OptionPartNumber": "sample string 2",
            "OptionSorting": 1.1,
            "OptionImagePath": "sample string 3",
            "OptionBundleCatalogId": 1,
            "OptionBundleQuantity": 1
          },
          {
            "OptionID": 1,
            "OptionName": "sample string 1",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": 1.1,
            "OptionPartNumber": "sample string 2",
            "OptionSorting": 1.1,
            "OptionImagePath": "sample string 3",
            "OptionBundleCatalogId": 1,
            "OptionBundleQuantity": 1
          }
        ]
      },
      {
        "OptionSetID": 1,
        "OptionSetName": "sample string 1",
        "OptionSorting": 1.1,
        "OptionRequired": true,
        "OptionType": "sample string 2",
        "OptionURL": "sample string 3",
        "OptionAdditionalInformation": "sample string 4",
        "OptionSizeLimit": 1,
        "OptionList": [
          {
            "OptionID": 1,
            "OptionName": "sample string 1",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": 1.1,
            "OptionPartNumber": "sample string 2",
            "OptionSorting": 1.1,
            "OptionImagePath": "sample string 3",
            "OptionBundleCatalogId": 1,
            "OptionBundleQuantity": 1
          },
          {
            "OptionID": 1,
            "OptionName": "sample string 1",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": 1.1,
            "OptionPartNumber": "sample string 2",
            "OptionSorting": 1.1,
            "OptionImagePath": "sample string 3",
            "OptionBundleCatalogId": 1,
            "OptionBundleQuantity": 1
          }
        ]
      }
    ],
    "Title": "sample string 10",
    "CustomFileName": "sample string 11",
    "MetaTags": "sample string 12",
    "CategoryHeader": "sample string 13",
    "CategoryFooter": "sample string 14",
    "AdditionalKeywords": "sample string 15",
    "CategoryExternalIdsList": [
      {
        "ID": 1,
        "CategoryID": 1,
        "ExternalId1": "sample string 1",
        "ExternalIdType": "sample string 2"
      },
      {
        "ID": 1,
        "CategoryID": 1,
        "ExternalId1": "sample string 1",
        "ExternalIdType": "sample string 2"
      }
    ]
  },
  {
    "CategoryID": 1,
    "CategoryName": "sample string 1",
    "Link": "sample string 2",
    "CategoryDescription": "sample string 3",
    "CategoryIcon": "sample string 4",
    "CategoryMain": true,
    "CategoryParent": 1,
    "Sorting": 1,
    "Hide": true,
    "UserID": "sample string 5",
    "LastUpdate": "02/05/2019 14:30",
    "CategoryMenuGroup": 1,
    "HomeSpecialCategory": true,
    "FilterCategory": true,
    "TemplateCategoryPage": 1,
    "DefaultProductsSorting": 1,
    "SubcategoryColumnsCategorySpecials": 1,
    "ProductColumnsCategorySpecials": 1,
    "ProductColumnsCategoryGeneralItems": 1,
    "ItemsPerPageCategorySpecialItems": 1,
    "ItemsPerPageCategoryGeneralItems": 1,
    "DisplayTypeCategorySpecialItems": 1,
    "DisplayTypeCategoryGeneralProducts": 1,
    "AllowAccess": "sample string 6",
    "OnFailRedirectTo": "sample string 7",
    "HideLeftBar": true,
    "HideRightBar": true,
    "HideTopMenu": true,
    "SmartCategories": 1,
    "SmartCategoriesSearchKeyword": "sample string 8",
    "SmartCategoriesLinkTarget": "sample string 9",
    "TemplateProductPage": 1,
    "ProductColumnsRelatedProducts": 1,
    "ProductColumnsUpsellProducts": 1,
    "DisplayTypeRelatedItems": 1,
    "DisplayTypeUpsellItems": 1,
    "OptionSetList": [
      {
        "OptionSetID": 1,
        "OptionSetName": "sample string 1",
        "OptionSorting": 1.1,
        "OptionRequired": true,
        "OptionType": "sample string 2",
        "OptionURL": "sample string 3",
        "OptionAdditionalInformation": "sample string 4",
        "OptionSizeLimit": 1,
        "OptionList": [
          {
            "OptionID": 1,
            "OptionName": "sample string 1",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": 1.1,
            "OptionPartNumber": "sample string 2",
            "OptionSorting": 1.1,
            "OptionImagePath": "sample string 3",
            "OptionBundleCatalogId": 1,
            "OptionBundleQuantity": 1
          },
          {
            "OptionID": 1,
            "OptionName": "sample string 1",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": 1.1,
            "OptionPartNumber": "sample string 2",
            "OptionSorting": 1.1,
            "OptionImagePath": "sample string 3",
            "OptionBundleCatalogId": 1,
            "OptionBundleQuantity": 1
          }
        ]
      },
      {
        "OptionSetID": 1,
        "OptionSetName": "sample string 1",
        "OptionSorting": 1.1,
        "OptionRequired": true,
        "OptionType": "sample string 2",
        "OptionURL": "sample string 3",
        "OptionAdditionalInformation": "sample string 4",
        "OptionSizeLimit": 1,
        "OptionList": [
          {
            "OptionID": 1,
            "OptionName": "sample string 1",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": 1.1,
            "OptionPartNumber": "sample string 2",
            "OptionSorting": 1.1,
            "OptionImagePath": "sample string 3",
            "OptionBundleCatalogId": 1,
            "OptionBundleQuantity": 1
          },
          {
            "OptionID": 1,
            "OptionName": "sample string 1",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": 1.1,
            "OptionPartNumber": "sample string 2",
            "OptionSorting": 1.1,
            "OptionImagePath": "sample string 3",
            "OptionBundleCatalogId": 1,
            "OptionBundleQuantity": 1
          }
        ]
      }
    ],
    "Title": "sample string 10",
    "CustomFileName": "sample string 11",
    "MetaTags": "sample string 12",
    "CategoryHeader": "sample string 13",
    "CategoryFooter": "sample string 14",
    "AdditionalKeywords": "sample string 15",
    "CategoryExternalIdsList": [
      {
        "ID": 1,
        "CategoryID": 1,
        "ExternalId1": "sample string 1",
        "ExternalIdType": "sample string 2"
      },
      {
        "ID": 1,
        "CategoryID": 1,
        "ExternalId1": "sample string 1",
        "ExternalIdType": "sample string 2"
      }
    ]
  }
]
```

Use this method to update a specific category. See [Data Structures](#category-object) for more information on the category object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}`

#### Responses and errors

Response Code | Description
------------- | ---------
200 | Successful response code. Category has been returned.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified category was not found.


### Update multiple category records

> To update a category in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#category-object) for more information on the category object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Categories");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "[
  {
    \"CategoryID\": 20568772,
    \"CategoryName\": \"nostrud officia laboris commodo sit\",
    \"Link\": \"sunt velit\",
    \"CategoryDescription\": \"adipisicing commodo incididunt eu irure\",
    \"CategoryIcon\": \"commodo dolor irure\",
    \"CategoryMain\": true,
    \"CategoryParent\": -40250046,
    \"Sorting\": -4347994,
    \"Hide\": true,
    \"UserID\": \"laborum reprehenderit minim\",
    \"LastUpdate\": \"1977-03-25T23:14:41.941Z\",
    \"CategoryMenuGroup\": 67688871,
    \"HomeSpecialCategory\": false,
    \"FilterCategory\": true,
    \"TemplateCategoryPage\": 8611143,
    \"DefaultProductsSorting\": 10991548,
    \"SubcategoryColumnsCategorySpecials\": -10753710,
    \"ProductColumnsCategorySpecials\": -26970234,
    \"ProductColumnsCategoryGeneralItems\": 86802777,
    \"ItemsPerPageCategorySpecialItems\": 88544527,
    \"ItemsPerPageCategoryGeneralItems\": 24167595,
    \"DisplayTypeCategorySpecialItems\": -32263812,
    \"DisplayTypeCategoryGeneralProducts\": 47126883,
    \"AllowAccess\": \"ut velit aliquip sint ea\",
    \"OnFailRedirectTo\": \"et sed\",
    \"HideLeftBar\": false,
    \"HideRightBar\": false,
    \"HideTopMenu\": false,
    \"SmartCategories\": -55392261,
    \"SmartCategoriesSearchKeyword\": \"et do ut quis\",
    \"SmartCategoriesLinkTarget\": \"do veniam labor\",
    \"TemplateProductPage\": 11334197,
    \"ProductColumnsRelatedProducts\": 17546575,
    \"ProductColumnsUpsellProducts\": 70149168,
    \"DisplayTypeRelatedItems\": -88273472,
    \"DisplayTypeUpsellItems\": 34052311,
    \"OptionSetList\": [
      {
        \"OptionSetID\": -75731084,
        \"OptionSetName\": \"voluptate sed quis et\",
        \"OptionSorting\": -96539508.41777772,
        \"OptionRequired\": true,
        \"OptionType\": \"\",
        \"OptionURL\": \"do amet\",
        \"OptionAdditionalInformation\": \"occaecat\",
        \"OptionSizeLimit\": 5672833,
        \"OptionList\": [
          {
            \"OptionID\": -75887427,
            \"OptionName\": \"labore deserunt laborum Duis\",
            \"OptionSelected\": false,
            \"OptionHide\": true,
            \"OptionValue\": -59937182.77688549,
            \"OptionPartNumber\": \"eiusmod ad nostrud labore cupidatat\",
            \"OptionSorting\": 86071948.6004144,
            \"OptionImagePath\": \"pariatur Excepteur\",
            \"OptionBundleCatalogId\": -60711731,
            \"OptionBundleQuantity\": 30673284
          }
        ]
      },
      {
        \"OptionSetID\": -31955416,
        \"OptionSetName\": \"quis eiusmod\",
        \"OptionSorting\": -66348953.76952237,
        \"OptionRequired\": false,
        \"OptionType\": \"aliquip i\",
        \"OptionURL\": \"elit do\",
        \"OptionAdditionalInformation\": \"sit pariatur\",
        \"OptionSizeLimit\": -41589887,
        \"OptionList\": [
          {
            \"OptionID\": 25015635,
            \"OptionName\": \"dolore ut nulla\",
            \"OptionSelected\": false,
            \"OptionHide\": false,
            \"OptionValue\": -33072882.332152046,
            \"OptionPartNumber\": \"commodo ut\",
            \"OptionSorting\": 90530102.89804876,
            \"OptionImagePath\": \"deserunt ullamco aute\",
            \"OptionBundleCatalogId\": -89959324,
            \"OptionBundleQuantity\": -22023584
          },
          {
            \"OptionID\": 97324761,
            \"OptionName\": \"ex voluptate pariatur elit\",
            \"OptionSelected\": false,
            \"OptionHide\": false,
            \"OptionValue\": 72722283.53238845,
            \"OptionPartNumber\": \"ad tempor\",
            \"OptionSorting\": 23016543.367841795,
            \"OptionImagePath\": \"ad cupidatat eiusmod aute\",
            \"OptionBundleCatalogId\": -69043452,
            \"OptionBundleQuantity\": 43822225
          }
        ]
      }
    ],
    \"Title\": \"in cupidatat fugiat\",
    \"CustomFileName\": \"Excepteur Lorem ut officia\",
    \"MetaTags\": \"officia ullamco sit ut\",
    \"CategoryHeader\": \"sunt labore in aliquip dolore\",
    \"CategoryFooter\": \"culpa id reprehenderit in\",
    \"AdditionalKeywords\": \"cillum culpa\",
    \"CategoryExternalIdsList\": [
      {
        \"ID\": 67730448,
        \"CategoryID\": -16074942,
        \"ExternalId1\": \"et commodo\",
        \"ExternalIdType\": \"laboris ut ea proident id\"
      },
      {
        \"ID\": 27537116,
        \"CategoryID\": -51137858,
        \"ExternalId1\": \"est in mollit enim\",
        \"ExternalIdType\": \"consectetur Ut\"
      },
      {
        \"ID\": -85502322,
        \"CategoryID\": -60783293,
        \"ExternalId1\": \"eu pariatur\",
        \"ExternalIdType\": \"mollit incididunt\"
      }
    ]
  },
  {
    \"CategoryID\": -38231792,
    \"CategoryName\": \"mollit dolore dolor labore\",
    \"Link\": \"nostrud pariatur\",
    \"CategoryDescription\": \"non fugiat magna n\",
    \"CategoryIcon\": \"ut\",
    \"CategoryMain\": false,
    \"CategoryParent\": 22678387,
    \"Sorting\": 26006029,
    \"Hide\": true,
    \"UserID\": \"labore f\",
    \"LastUpdate\": \"1993-03-12T03:37:23.828Z\",
    \"CategoryMenuGroup\": 39662559,
    \"HomeSpecialCategory\": false,
    \"FilterCategory\": true,
    \"TemplateCategoryPage\": 17571355,
    \"DefaultProductsSorting\": 8628776,
    \"SubcategoryColumnsCategorySpecials\": 61765045,
    \"ProductColumnsCategorySpecials\": 2901356,
    \"ProductColumnsCategoryGeneralItems\": 65491452,
    \"ItemsPerPageCategorySpecialItems\": 44148399,
    \"ItemsPerPageCategoryGeneralItems\": 74711849,
    \"DisplayTypeCategorySpecialItems\": -80748538,
    \"DisplayTypeCategoryGeneralProducts\": 7803513,
    \"AllowAccess\": \"cillum laborum minim\",
    \"OnFailRedirectTo\": \"ad dolore\",
    \"HideLeftBar\": false,
    \"HideRightBar\": false,
    \"HideTopMenu\": false,
    \"SmartCategories\": -31939948,
    \"SmartCategoriesSearchKeyword\": \"dolor officia laborum\",
    \"SmartCategoriesLinkTarget\": \"magna adipisicing id\",
    \"TemplateProductPage\": -77171173,
    \"ProductColumnsRelatedProducts\": 7898074,
    \"ProductColumnsUpsellProducts\": 28531767,
    \"DisplayTypeRelatedItems\": -4169152,
    \"DisplayTypeUpsellItems\": 88298725,
    \"OptionSetList\": [
      {
        \"OptionSetID\": 74837456,
        \"OptionSetName\": \"labore dolor exercitation\",
        \"OptionSorting\": 48091622.23854077,
        \"OptionRequired\": false,
        \"OptionType\": \"nostr\",
        \"OptionURL\": \"quis non dolor\",
        \"OptionAdditionalInformation\": \"aute laborum reprehenderit\",
        \"OptionSizeLimit\": 72129784,
        \"OptionList\": [
          {
            \"OptionID\": 60722654,
            \"OptionName\": \"dolor ni\",
            \"OptionSelected\": true,
            \"OptionHide\": true,
            \"OptionValue\": -67262445.84641537,
            \"OptionPartNumber\": \"sint consectetur consequat \",
            \"OptionSorting\": 99928287.40942946,
            \"OptionImagePath\": \"ea\",
            \"OptionBundleCatalogId\": 73879382,
            \"OptionBundleQuantity\": -7396796
          },
          {
            \"OptionID\": 83228897,
            \"OptionName\": \"non et tempor elit\",
            \"OptionSelected\": false,
            \"OptionHide\": true,
            \"OptionValue\": -7083094.560462117,
            \"OptionPartNumber\": \"officia irure null\",
            \"OptionSorting\": -80081827.88170063,
            \"OptionImagePath\": \"non\",
            \"OptionBundleCatalogId\": -59869594,
            \"OptionBundleQuantity\": 9703570
          },
          {
            \"OptionID\": -92350055,
            \"OptionName\": \"nisi pariatur\",
            \"OptionSelected\": false,
            \"OptionHide\": false,
            \"OptionValue\": -90332628.25495316,
            \"OptionPartNumber\": \"tempor Duis aliquip eiusmod\",
            \"OptionSorting\": -62219206.823874585,
            \"OptionImagePath\": \"nostrud\",
            \"OptionBundleCatalogId\": -51145970,
            \"OptionBundleQuantity\": 96302810
          }
        ]
      },
      {
        \"OptionSetID\": 46761863,
        \"OptionSetName\": \"nisi incididunt\",
        \"OptionSorting\": -70396605.13459216,
        \"OptionRequired\": true,
        \"OptionType\": \"consequ\",
        \"OptionURL\": \"occaecat laborum exercitation\",
        \"OptionAdditionalInformation\": \"Ut ipsum\",
        \"OptionSizeLimit\": -602532,
        \"OptionList\": [
          {
            \"OptionID\": 31182779,
            \"OptionName\": \"anim tempor amet eiusmod reprehenderit\",
            \"OptionSelected\": true,
            \"OptionHide\": false,
            \"OptionValue\": -56774730.08607312,
            \"OptionPartNumber\": \"Duis sunt dolor irure dolor\",
            \"OptionSorting\": 91280165.61374578,
            \"OptionImagePath\": \"incididunt\",
            \"OptionBundleCatalogId\": -47920121,
            \"OptionBundleQuantity\": -79760433
          },
          {
            \"OptionID\": 72655906,
            \"OptionName\": \"ipsum enim\",
            \"OptionSelected\": true,
            \"OptionHide\": false,
            \"OptionValue\": 47679301.041104525,
            \"OptionPartNumber\": \"laboris officia \",
            \"OptionSorting\": -25101021.47573021,
            \"OptionImagePath\": \"enim magna elit qui veniam\",
            \"OptionBundleCatalogId\": -19385029,
            \"OptionBundleQuantity\": -5099530
          }
        ]
      },
      {
        \"OptionSetID\": -45541705,
        \"OptionSetName\": \"ut commodo\",
        \"OptionSorting\": 59545650.19917911,
        \"OptionRequired\": true,
        \"OptionType\": \"qu\",
        \"OptionURL\": \"occaecat nostrud sunt incididunt\",
        \"OptionAdditionalInformation\": \"quis aliqua cupidatat nostrud\",
        \"OptionSizeLimit\": -84707790,
        \"OptionList\": [
          {
            \"OptionID\": -42423158,
            \"OptionName\": \"Lorem tempor elit labore\",
            \"OptionSelected\": true,
            \"OptionHide\": false,
            \"OptionValue\": 41695245.98499611,
            \"OptionPartNumber\": \"laborum Duis velit et\",
            \"OptionSorting\": -25473139.41574055,
            \"OptionImagePath\": \"pariatur\",
            \"OptionBundleCatalogId\": 68685275,
            \"OptionBundleQuantity\": -45761768
          },
          {
            \"OptionID\": -80021263,
            \"OptionName\": \"dolore eu tempor occaecat\",
            \"OptionSelected\": false,
            \"OptionHide\": true,
            \"OptionValue\": 65276237.620652765,
            \"OptionPartNumber\": \"in consequat non eiusm\",
            \"OptionSorting\": -67075692.390820764,
            \"OptionImagePath\": \"eiusmod in irure\",
            \"OptionBundleCatalogId\": -31815606,
            \"OptionBundleQuantity\": -30526227
          },
          {
            \"OptionID\": 30644454,
            \"OptionName\": \"ut quis esse\",
            \"OptionSelected\": true,
            \"OptionHide\": true,
            \"OptionValue\": 91381760.92553037,
            \"OptionPartNumber\": \"sunt Ut et anim\",
            \"OptionSorting\": -14140415.486470565,
            \"OptionImagePath\": \"consequat anim reprehenderit id non\",
            \"OptionBundleCatalogId\": 71435497,
            \"OptionBundleQuantity\": 92049760
          }
        ]
      },
      {
        \"OptionSetID\": -26151559,
        \"OptionSetName\": \"et Ut ullamco esse nulla\",
        \"OptionSorting\": -17582981.37645018,
        \"OptionRequired\": true,
        \"OptionType\": \"sunt\",
        \"OptionURL\": \"velit anim et\",
        \"OptionAdditionalInformation\": \"elit laborum ad\",
        \"OptionSizeLimit\": -67079179,
        \"OptionList\": [
          {
            \"OptionID\": -3143279,
            \"OptionName\": \"cupidatat nostrud incididunt\",
            \"OptionSelected\": false,
            \"OptionHide\": true,
            \"OptionValue\": 1738681.0807540417,
            \"OptionPartNumber\": \"incididunt proident\",
            \"OptionSorting\": 40740370.32994321,
            \"OptionImagePath\": \"aute in aliqua in\",
            \"OptionBundleCatalogId\": 45223386,
            \"OptionBundleQuantity\": 2530208
          },
          {
            \"OptionID\": -42300898,
            \"OptionName\": \"aliqua sint tempor\",
            \"OptionSelected\": false,
            \"OptionHide\": false,
            \"OptionValue\": -25188059.688181758,
            \"OptionPartNumber\": \"veniam velit dolor et\",
            \"OptionSorting\": -98699714.38869634,
            \"OptionImagePath\": \"sed proident pariatur\",
            \"OptionBundleCatalogId\": 74974750,
            \"OptionBundleQuantity\": -60848785
          },
          {
            \"OptionID\": -89184301,
            \"OptionName\": \"sunt est\",
            \"OptionSelected\": true,
            \"OptionHide\": false,
            \"OptionValue\": 27388935.985263303,
            \"OptionPartNumber\": \"aute in\",
            \"OptionSorting\": -27452174.924212262,
            \"OptionImagePath\": \"esse officia Duis incididunt\",
            \"OptionBundleCatalogId\": 54716178,
            \"OptionBundleQuantity\": 63860042
          }
        ]
      },
      {
        \"OptionSetID\": -12791947,
        \"OptionSetName\": \"do minim\",
        \"OptionSorting\": 18885884.753000945,
        \"OptionRequired\": true,
        \"OptionType\": \"ut sint p\",
        \"OptionURL\": \"sint consequat\",
        \"OptionAdditionalInformation\": \"cupidatat velit\",
        \"OptionSizeLimit\": -22184438,
        \"OptionList\": [
          {
            \"OptionID\": 21064730,
            \"OptionName\": \"voluptate cupidatat reprehenderit aute proident\",
            \"OptionSelected\": true,
            \"OptionHide\": true,
            \"OptionValue\": 77350367.07517052,
            \"OptionPartNumber\": \"laborum dolore\",
            \"OptionSorting\": -34955118.2123907,
            \"OptionImagePath\": \"labore id adipisicing\",
            \"OptionBundleCatalogId\": 21992519,
            \"OptionBundleQuantity\": -84122959
          },
          {
            \"OptionID\": 74872942,
            \"OptionName\": \"incididunt in fugiat\",
            \"OptionSelected\": false,
            \"OptionHide\": false,
            \"OptionValue\": 42897099.61011207,
            \"OptionPartNumber\": \"pariatur esse dolore do\",
            \"OptionSorting\": 5766181.224910393,
            \"OptionImagePath\": \"mollit \",
            \"OptionBundleCatalogId\": -29015869,
            \"OptionBundleQuantity\": -83486689
          },
          {
            \"OptionID\": -71714227,
            \"OptionName\": \"aliqua dolore Ut non\",
            \"OptionSelected\": false,
            \"OptionHide\": true,
            \"OptionValue\": 62015711.11286688,
            \"OptionPartNumber\": \"commodo dolor fugiat eu\",
            \"OptionSorting\": 68522351.24806389,
            \"OptionImagePath\": \"adipisicing sed dolor\",
            \"OptionBundleCatalogId\": 97557516,
            \"OptionBundleQuantity\": -43039536
          },
          {
            \"OptionID\": -67195843,
            \"OptionName\": \"elit cillum in incididunt reprehenderit\",
            \"OptionSelected\": true,
            \"OptionHide\": true,
            \"OptionValue\": -8456211.184706047,
            \"OptionPartNumber\": \"sed qui in dolore\",
            \"OptionSorting\": 28988692.003649727,
            \"OptionImagePath\": \"incididunt minim\",
            \"OptionBundleCatalogId\": -13553697,
            \"OptionBundleQuantity\": -49906785
          }
        ]
      }
    ],
    \"Title\": \"minim cupidatat ipsum nisi\",
    \"CustomFileName\": \"ut deserunt\",
    \"MetaTags\": \"nulla ut culpa\",
    \"CategoryHeader\": \"cillum\",
    \"CategoryFooter\": \"consectetur nulla do sunt\",
    \"AdditionalKeywords\": \"ex esse cupidatat\",
    \"CategoryExternalIdsList\": [
      {
        \"ID\": -48905284,
        \"CategoryID\": 65508538,
        \"ExternalId1\": \"ea\",
        \"ExternalIdType\": \"ut cupidatat\"
      }
    ]
  },
  {
    \"CategoryID\": 3242417,
    \"CategoryName\": \"nostrud officia nisi\",
    \"Link\": \"Lorem minim fugiat\",
    \"CategoryDescription\": \"consectetur laborum amet sed\",
    \"CategoryIcon\": \"dolore voluptate cupidatat in\",
    \"CategoryMain\": false,
    \"CategoryParent\": 17984540,
    \"Sorting\": 5752348,
    \"Hide\": true,
    \"UserID\": \"sint elit Ut\",
    \"LastUpdate\": \"1993-09-25T05:44:37.159Z\",
    \"CategoryMenuGroup\": 84461561,
    \"HomeSpecialCategory\": true,
    \"FilterCategory\": false,
    \"TemplateCategoryPage\": -13141093,
    \"DefaultProductsSorting\": -49122385,
    \"SubcategoryColumnsCategorySpecials\": 21172699,
    \"ProductColumnsCategorySpecials\": 3672582,
    \"ProductColumnsCategoryGeneralItems\": -93345850,
    \"ItemsPerPageCategorySpecialItems\": 24775260,
    \"ItemsPerPageCategoryGeneralItems\": -46950751,
    \"DisplayTypeCategorySpecialItems\": -32369927,
    \"DisplayTypeCategoryGeneralProducts\": 1183740,
    \"AllowAccess\": \"labore esse mollit tempor\",
    \"OnFailRedirectTo\": \"do Lorem dolore nulla\",
    \"HideLeftBar\": true,
    \"HideRightBar\": true,
    \"HideTopMenu\": false,
    \"SmartCategories\": 63407332,
    \"SmartCategoriesSearchKeyword\": \"eu velit\",
    \"SmartCategoriesLinkTarget\": \"anim \",
    \"TemplateProductPage\": 18547652,
    \"ProductColumnsRelatedProducts\": -91453517,
    \"ProductColumnsUpsellProducts\": 87697311,
    \"DisplayTypeRelatedItems\": 36829773,
    \"DisplayTypeUpsellItems\": -39874858,
    \"OptionSetList\": [
      {
        \"OptionSetID\": 6657161,
        \"OptionSetName\": \"n\",
        \"OptionSorting\": 58223432.29291743,
        \"OptionRequired\": false,
        \"OptionType\": \"si\",
        \"OptionURL\": \"Ut dolore amet\",
        \"OptionAdditionalInformation\": \"nulla in\",
        \"OptionSizeLimit\": 9281594,
        \"OptionList\": [
          {
            \"OptionID\": -21999234,
            \"OptionName\": \"ipsum esse tempor quis in\",
            \"OptionSelected\": true,
            \"OptionHide\": true,
            \"OptionValue\": -94257794.26250757,
            \"OptionPartNumber\": \"velit consectetur dolor elit aut\",
            \"OptionSorting\": -47884164.807351135,
            \"OptionImagePath\": \"in pariatur\",
            \"OptionBundleCatalogId\": -59682969,
            \"OptionBundleQuantity\": 39968379
          },
          {
            \"OptionID\": -41599054,
            \"OptionName\": \"Excepteur in\",
            \"OptionSelected\": true,
            \"OptionHide\": true,
            \"OptionValue\": 88460500.03025067,
            \"OptionPartNumber\": \"ex\",
            \"OptionSorting\": -60799611.630514994,
            \"OptionImagePath\": \"Ut labore consequat Excepteur pariatur\",
            \"OptionBundleCatalogId\": 26044585,
            \"OptionBundleQuantity\": -61396903
          }
        ]
      },
      {
        \"OptionSetID\": -2612978,
        \"OptionSetName\": \"elit sunt deserunt aliquip ea\",
        \"OptionSorting\": -75889360.33887927,
        \"OptionRequired\": true,
        \"OptionType\": \"id Exce\",
        \"OptionURL\": \"qui\",
        \"OptionAdditionalInformation\": \"tem\",
        \"OptionSizeLimit\": 75732732,
        \"OptionList\": [
          {
            \"OptionID\": 13353699,
            \"OptionName\": \"officia incididunt nisi\",
            \"OptionSelected\": false,
            \"OptionHide\": false,
            \"OptionValue\": 34447909.855547994,
            \"OptionPartNumber\": \"velit veniam\",
            \"OptionSorting\": 78162270.74954227,
            \"OptionImagePath\": \"in c\",
            \"OptionBundleCatalogId\": -71651929,
            \"OptionBundleQuantity\": 51939266
          },
          {
            \"OptionID\": 53356018,
            \"OptionName\": \"cillum officia eiusmod\",
            \"OptionSelected\": false,
            \"OptionHide\": false,
            \"OptionValue\": 18957100.081903234,
            \"OptionPartNumber\": \"ea et\",
            \"OptionSorting\": -47754403.98882509,
            \"OptionImagePath\": \"anim labore ut\",
            \"OptionBundleCatalogId\": -25170081,
            \"OptionBundleQuantity\": 39947065
          },
          {
            \"OptionID\": -51797199,
            \"OptionName\": \"consectetur mollit dolore\",
            \"OptionSelected\": false,
            \"OptionHide\": true,
            \"OptionValue\": -65184861.41719211,
            \"OptionPartNumber\": \"ut labore amet culpa\",
            \"OptionSorting\": -47972148.37624497,
            \"OptionImagePath\": \"non nostrud ipsum\",
            \"OptionBundleCatalogId\": 60457392,
            \"OptionBundleQuantity\": -93173967
          },
          {
            \"OptionID\": -22995896,
            \"OptionName\": \"pariatur Excepteur\",
            \"OptionSelected\": true,
            \"OptionHide\": false,
            \"OptionValue\": -7901532.5541561395,
            \"OptionPartNumber\": \"voluptate dolore sunt\",
            \"OptionSorting\": -69735210.66052553,
            \"OptionImagePath\": \"labore fugiat\",
            \"OptionBundleCatalogId\": 88728383,
            \"OptionBundleQuantity\": -38887245
          },
          {
            \"OptionID\": 96907822,
            \"OptionName\": \"do laborum\",
            \"OptionSelected\": true,
            \"OptionHide\": true,
            \"OptionValue\": -39720514.71177855,
            \"OptionPartNumber\": \"eiusmod ipsum dolor aute esse\",
            \"OptionSorting\": 73978711.2845327,
            \"OptionImagePath\": \"ad enim esse\",
            \"OptionBundleCatalogId\": 84775025,
            \"OptionBundleQuantity\": -38487117
          }
        ]
      },
      {
        \"OptionSetID\": -10277117,
        \"OptionSetName\": \"nulla ea ad aliquip Ut\",
        \"OptionSorting\": 57219273.85353941,
        \"OptionRequired\": false,
        \"OptionType\": \"ni\",
        \"OptionURL\": \"sint\",
        \"OptionAdditionalInformation\": \"nisi Lorem fugiat\",
        \"OptionSizeLimit\": 32849644,
        \"OptionList\": [
          {
            \"OptionID\": -253227,
            \"OptionName\": \"labore cillum cupidatat\",
            \"OptionSelected\": true,
            \"OptionHide\": true,
            \"OptionValue\": 83843550.03509429,
            \"OptionPartNumber\": \"Excepteur e\",
            \"OptionSorting\": -65213580.39029486,
            \"OptionImagePath\": \"cupidatat\",
            \"OptionBundleCatalogId\": -25499690,
            \"OptionBundleQuantity\": 23387213
          },
          {
            \"OptionID\": 98496861,
            \"OptionName\": \"in ullamco\",
            \"OptionSelected\": true,
            \"OptionHide\": true,
            \"OptionValue\": -58826484.70863989,
            \"OptionPartNumber\": \"consectetur nostrud do\",
            \"OptionSorting\": -88084823.3866431,
            \"OptionImagePath\": \"dolor mollit dolore\",
            \"OptionBundleCatalogId\": -71423397,
            \"OptionBundleQuantity\": -13269372
          },
          {
            \"OptionID\": -68930299,
            \"OptionName\": \"ut pariatur Duis\",
            \"OptionSelected\": false,
            \"OptionHide\": false,
            \"OptionValue\": -42229190.09528532,
            \"OptionPartNumber\": \"Lorem minim in\",
            \"OptionSorting\": -18335575.258460328,
            \"OptionImagePath\": \"voluptate elit ea nostrud anim\",
            \"OptionBundleCatalogId\": 22487598,
            \"OptionBundleQuantity\": 61337346
          },
          {
            \"OptionID\": 12064789,
            \"OptionName\": \"mollit in\",
            \"OptionSelected\": true,
            \"OptionHide\": false,
            \"OptionValue\": 44082106.65290761,
            \"OptionPartNumber\": \"aute cillum consequat\",
            \"OptionSorting\": -72382902.38076086,
            \"OptionImagePath\": \"Excepteur\",
            \"OptionBundleCatalogId\": 54785887,
            \"OptionBundleQuantity\": 66991923
          }
        ]
      }
    ],
    \"Title\": \"occaecat laborum Excepteur ut\",
    \"CustomFileName\": \"in minim\",
    \"MetaTags\": \"tempor fugiat laborum nulla in\",
    \"CategoryHeader\": \"voluptate reprehenderit\",
    \"CategoryFooter\": \"ad in\",
    \"AdditionalKeywords\": \"qui sed sit\",
    \"CategoryExternalIdsList\": [
      {
        \"ID\": 21740349,
        \"CategoryID\": -93114626,
        \"ExternalId1\": \"aliquip non deserunt reprehenderit\",
        \"ExternalIdType\": \"in amet pariatur exercitation dolor\"
      },
      {
        \"ID\": 65972065,
        \"CategoryID\": -88569652,
        \"ExternalId1\": \"ipsum ad nostrud mollit\",
        \"ExternalIdType\": \"ullamco Duis exercitation\"
      },
      {
        \"ID\": -64571079,
        \"CategoryID\": 21800531,
        \"ExternalId1\": \"Excepteur incididunt dolore ullamco\",
        \"ExternalIdType\": \"\"
      }
    ]
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
  
    using (var content = new StringContent("[  {    \"CategoryID\": 20568772,    \"CategoryName\": \"nostrud officia laboris commodo sit\",    \"Link\": \"sunt velit\",    \"CategoryDescription\": \"adipisicing commodo incididunt eu irure\",    \"CategoryIcon\": \"commodo dolor irure\",    \"CategoryMain\": true,    \"CategoryParent\": -40250046,    \"Sorting\": -4347994,    \"Hide\": true,    \"UserID\": \"laborum reprehenderit minim\",    \"LastUpdate\": \"1977-03-25T23:14:41.941Z\",    \"CategoryMenuGroup\": 67688871,    \"HomeSpecialCategory\": false,    \"FilterCategory\": true,    \"TemplateCategoryPage\": 8611143,    \"DefaultProductsSorting\": 10991548,    \"SubcategoryColumnsCategorySpecials\": -10753710,    \"ProductColumnsCategorySpecials\": -26970234,    \"ProductColumnsCategoryGeneralItems\": 86802777,    \"ItemsPerPageCategorySpecialItems\": 88544527,    \"ItemsPerPageCategoryGeneralItems\": 24167595,    \"DisplayTypeCategorySpecialItems\": -32263812,    \"DisplayTypeCategoryGeneralProducts\": 47126883,    \"AllowAccess\": \"ut velit aliquip sint ea\",    \"OnFailRedirectTo\": \"et sed\",    \"HideLeftBar\": false,    \"HideRightBar\": false,    \"HideTopMenu\": false,    \"SmartCategories\": -55392261,    \"SmartCategoriesSearchKeyword\": \"et do ut quis\",    \"SmartCategoriesLinkTarget\": \"do veniam labor\",    \"TemplateProductPage\": 11334197,    \"ProductColumnsRelatedProducts\": 17546575,    \"ProductColumnsUpsellProducts\": 70149168,    \"DisplayTypeRelatedItems\": -88273472,    \"DisplayTypeUpsellItems\": 34052311,    \"OptionSetList\": [      {        \"OptionSetID\": -75731084,        \"OptionSetName\": \"voluptate sed quis et\",        \"OptionSorting\": -96539508.41777772,        \"OptionRequired\": true,        \"OptionType\": \"\",        \"OptionURL\": \"do amet\",        \"OptionAdditionalInformation\": \"occaecat\",        \"OptionSizeLimit\": 5672833,        \"OptionList\": [          {            \"OptionID\": -75887427,            \"OptionName\": \"labore deserunt laborum Duis\",            \"OptionSelected\": false,            \"OptionHide\": true,            \"OptionValue\": -59937182.77688549,            \"OptionPartNumber\": \"eiusmod ad nostrud labore cupidatat\",            \"OptionSorting\": 86071948.6004144,            \"OptionImagePath\": \"pariatur Excepteur\",            \"OptionBundleCatalogId\": -60711731,            \"OptionBundleQuantity\": 30673284          }        ]      },      {        \"OptionSetID\": -31955416,        \"OptionSetName\": \"quis eiusmod\",        \"OptionSorting\": -66348953.76952237,        \"OptionRequired\": false,        \"OptionType\": \"aliquip i\",        \"OptionURL\": \"elit do\",        \"OptionAdditionalInformation\": \"sit pariatur\",        \"OptionSizeLimit\": -41589887,        \"OptionList\": [          {            \"OptionID\": 25015635,            \"OptionName\": \"dolore ut nulla\",            \"OptionSelected\": false,            \"OptionHide\": false,            \"OptionValue\": -33072882.332152046,            \"OptionPartNumber\": \"commodo ut\",            \"OptionSorting\": 90530102.89804876,            \"OptionImagePath\": \"deserunt ullamco aute\",            \"OptionBundleCatalogId\": -89959324,            \"OptionBundleQuantity\": -22023584          },          {            \"OptionID\": 97324761,            \"OptionName\": \"ex voluptate pariatur elit\",            \"OptionSelected\": false,            \"OptionHide\": false,            \"OptionValue\": 72722283.53238845,            \"OptionPartNumber\": \"ad tempor\",            \"OptionSorting\": 23016543.367841795,            \"OptionImagePath\": \"ad cupidatat eiusmod aute\",            \"OptionBundleCatalogId\": -69043452,            \"OptionBundleQuantity\": 43822225          }        ]      }    ],    \"Title\": \"in cupidatat fugiat\",    \"CustomFileName\": \"Excepteur Lorem ut officia\",    \"MetaTags\": \"officia ullamco sit ut\",    \"CategoryHeader\": \"sunt labore in aliquip dolore\",    \"CategoryFooter\": \"culpa id reprehenderit in\",    \"AdditionalKeywords\": \"cillum culpa\",    \"CategoryExternalIdsList\": [      {        \"ID\": 67730448,        \"CategoryID\": -16074942,        \"ExternalId1\": \"et commodo\",        \"ExternalIdType\": \"laboris ut ea proident id\"      },      {        \"ID\": 27537116,        \"CategoryID\": -51137858,        \"ExternalId1\": \"est in mollit enim\",        \"ExternalIdType\": \"consectetur Ut\"      },      {        \"ID\": -85502322,        \"CategoryID\": -60783293,        \"ExternalId1\": \"eu pariatur\",        \"ExternalIdType\": \"mollit incididunt\"      }    ]  },  {    \"CategoryID\": -38231792,    \"CategoryName\": \"mollit dolore dolor labore\",    \"Link\": \"nostrud pariatur\",    \"CategoryDescription\": \"non fugiat magna n\",    \"CategoryIcon\": \"ut\",    \"CategoryMain\": false,    \"CategoryParent\": 22678387,    \"Sorting\": 26006029,    \"Hide\": true,    \"UserID\": \"labore f\",    \"LastUpdate\": \"1993-03-12T03:37:23.828Z\",    \"CategoryMenuGroup\": 39662559,    \"HomeSpecialCategory\": false,    \"FilterCategory\": true,    \"TemplateCategoryPage\": 17571355,    \"DefaultProductsSorting\": 8628776,    \"SubcategoryColumnsCategorySpecials\": 61765045,    \"ProductColumnsCategorySpecials\": 2901356,    \"ProductColumnsCategoryGeneralItems\": 65491452,    \"ItemsPerPageCategorySpecialItems\": 44148399,    \"ItemsPerPageCategoryGeneralItems\": 74711849,    \"DisplayTypeCategorySpecialItems\": -80748538,    \"DisplayTypeCategoryGeneralProducts\": 7803513,    \"AllowAccess\": \"cillum laborum minim\",    \"OnFailRedirectTo\": \"ad dolore\",    \"HideLeftBar\": false,    \"HideRightBar\": false,    \"HideTopMenu\": false,    \"SmartCategories\": -31939948,    \"SmartCategoriesSearchKeyword\": \"dolor officia laborum\",    \"SmartCategoriesLinkTarget\": \"magna adipisicing id\",    \"TemplateProductPage\": -77171173,    \"ProductColumnsRelatedProducts\": 7898074,    \"ProductColumnsUpsellProducts\": 28531767,    \"DisplayTypeRelatedItems\": -4169152,    \"DisplayTypeUpsellItems\": 88298725,    \"OptionSetList\": [      {        \"OptionSetID\": 74837456,        \"OptionSetName\": \"labore dolor exercitation\",        \"OptionSorting\": 48091622.23854077,        \"OptionRequired\": false,        \"OptionType\": \"nostr\",        \"OptionURL\": \"quis non dolor\",        \"OptionAdditionalInformation\": \"aute laborum reprehenderit\",        \"OptionSizeLimit\": 72129784,        \"OptionList\": [          {            \"OptionID\": 60722654,            \"OptionName\": \"dolor ni\",            \"OptionSelected\": true,            \"OptionHide\": true,            \"OptionValue\": -67262445.84641537,            \"OptionPartNumber\": \"sint consectetur consequat \",            \"OptionSorting\": 99928287.40942946,            \"OptionImagePath\": \"ea\",            \"OptionBundleCatalogId\": 73879382,            \"OptionBundleQuantity\": -7396796          },          {            \"OptionID\": 83228897,            \"OptionName\": \"non et tempor elit\",            \"OptionSelected\": false,            \"OptionHide\": true,            \"OptionValue\": -7083094.560462117,            \"OptionPartNumber\": \"officia irure null\",            \"OptionSorting\": -80081827.88170063,            \"OptionImagePath\": \"non\",            \"OptionBundleCatalogId\": -59869594,            \"OptionBundleQuantity\": 9703570          },          {            \"OptionID\": -92350055,            \"OptionName\": \"nisi pariatur\",            \"OptionSelected\": false,            \"OptionHide\": false,            \"OptionValue\": -90332628.25495316,            \"OptionPartNumber\": \"tempor Duis aliquip eiusmod\",            \"OptionSorting\": -62219206.823874585,            \"OptionImagePath\": \"nostrud\",            \"OptionBundleCatalogId\": -51145970,            \"OptionBundleQuantity\": 96302810          }        ]      },      {        \"OptionSetID\": 46761863,        \"OptionSetName\": \"nisi incididunt\",        \"OptionSorting\": -70396605.13459216,        \"OptionRequired\": true,        \"OptionType\": \"consequ\",        \"OptionURL\": \"occaecat laborum exercitation\",        \"OptionAdditionalInformation\": \"Ut ipsum\",        \"OptionSizeLimit\": -602532,        \"OptionList\": [          {            \"OptionID\": 31182779,            \"OptionName\": \"anim tempor amet eiusmod reprehenderit\",            \"OptionSelected\": true,            \"OptionHide\": false,            \"OptionValue\": -56774730.08607312,            \"OptionPartNumber\": \"Duis sunt dolor irure dolor\",            \"OptionSorting\": 91280165.61374578,            \"OptionImagePath\": \"incididunt\",            \"OptionBundleCatalogId\": -47920121,            \"OptionBundleQuantity\": -79760433          },          {            \"OptionID\": 72655906,            \"OptionName\": \"ipsum enim\",            \"OptionSelected\": true,            \"OptionHide\": false,            \"OptionValue\": 47679301.041104525,            \"OptionPartNumber\": \"laboris officia \",            \"OptionSorting\": -25101021.47573021,            \"OptionImagePath\": \"enim magna elit qui veniam\",            \"OptionBundleCatalogId\": -19385029,            \"OptionBundleQuantity\": -5099530          }        ]      },      {        \"OptionSetID\": -45541705,        \"OptionSetName\": \"ut commodo\",        \"OptionSorting\": 59545650.19917911,        \"OptionRequired\": true,        \"OptionType\": \"qu\",        \"OptionURL\": \"occaecat nostrud sunt incididunt\",        \"OptionAdditionalInformation\": \"quis aliqua cupidatat nostrud\",        \"OptionSizeLimit\": -84707790,        \"OptionList\": [          {            \"OptionID\": -42423158,            \"OptionName\": \"Lorem tempor elit labore\",            \"OptionSelected\": true,            \"OptionHide\": false,            \"OptionValue\": 41695245.98499611,            \"OptionPartNumber\": \"laborum Duis velit et\",            \"OptionSorting\": -25473139.41574055,            \"OptionImagePath\": \"pariatur\",            \"OptionBundleCatalogId\": 68685275,            \"OptionBundleQuantity\": -45761768          },          {            \"OptionID\": -80021263,            \"OptionName\": \"dolore eu tempor occaecat\",            \"OptionSelected\": false,            \"OptionHide\": true,            \"OptionValue\": 65276237.620652765,            \"OptionPartNumber\": \"in consequat non eiusm\",            \"OptionSorting\": -67075692.390820764,            \"OptionImagePath\": \"eiusmod in irure\",            \"OptionBundleCatalogId\": -31815606,            \"OptionBundleQuantity\": -30526227          },          {            \"OptionID\": 30644454,            \"OptionName\": \"ut quis esse\",            \"OptionSelected\": true,            \"OptionHide\": true,            \"OptionValue\": 91381760.92553037,            \"OptionPartNumber\": \"sunt Ut et anim\",            \"OptionSorting\": -14140415.486470565,            \"OptionImagePath\": \"consequat anim reprehenderit id non\",            \"OptionBundleCatalogId\": 71435497,            \"OptionBundleQuantity\": 92049760          }        ]      },      {        \"OptionSetID\": -26151559,        \"OptionSetName\": \"et Ut ullamco esse nulla\",        \"OptionSorting\": -17582981.37645018,        \"OptionRequired\": true,        \"OptionType\": \"sunt\",        \"OptionURL\": \"velit anim et\",        \"OptionAdditionalInformation\": \"elit laborum ad\",        \"OptionSizeLimit\": -67079179,        \"OptionList\": [          {            \"OptionID\": -3143279,            \"OptionName\": \"cupidatat nostrud incididunt\",            \"OptionSelected\": false,            \"OptionHide\": true,            \"OptionValue\": 1738681.0807540417,            \"OptionPartNumber\": \"incididunt proident\",            \"OptionSorting\": 40740370.32994321,            \"OptionImagePath\": \"aute in aliqua in\",            \"OptionBundleCatalogId\": 45223386,            \"OptionBundleQuantity\": 2530208          },          {            \"OptionID\": -42300898,            \"OptionName\": \"aliqua sint tempor\",            \"OptionSelected\": false,            \"OptionHide\": false,            \"OptionValue\": -25188059.688181758,            \"OptionPartNumber\": \"veniam velit dolor et\",            \"OptionSorting\": -98699714.38869634,            \"OptionImagePath\": \"sed proident pariatur\",            \"OptionBundleCatalogId\": 74974750,            \"OptionBundleQuantity\": -60848785          },          {            \"OptionID\": -89184301,            \"OptionName\": \"sunt est\",            \"OptionSelected\": true,            \"OptionHide\": false,            \"OptionValue\": 27388935.985263303,            \"OptionPartNumber\": \"aute in\",            \"OptionSorting\": -27452174.924212262,            \"OptionImagePath\": \"esse officia Duis incididunt\",            \"OptionBundleCatalogId\": 54716178,            \"OptionBundleQuantity\": 63860042          }        ]      },      {        \"OptionSetID\": -12791947,        \"OptionSetName\": \"do minim\",        \"OptionSorting\": 18885884.753000945,        \"OptionRequired\": true,        \"OptionType\": \"ut sint p\",        \"OptionURL\": \"sint consequat\",        \"OptionAdditionalInformation\": \"cupidatat velit\",        \"OptionSizeLimit\": -22184438,        \"OptionList\": [          {            \"OptionID\": 21064730,            \"OptionName\": \"voluptate cupidatat reprehenderit aute proident\",            \"OptionSelected\": true,            \"OptionHide\": true,            \"OptionValue\": 77350367.07517052,            \"OptionPartNumber\": \"laborum dolore\",            \"OptionSorting\": -34955118.2123907,            \"OptionImagePath\": \"labore id adipisicing\",            \"OptionBundleCatalogId\": 21992519,            \"OptionBundleQuantity\": -84122959          },          {            \"OptionID\": 74872942,            \"OptionName\": \"incididunt in fugiat\",            \"OptionSelected\": false,            \"OptionHide\": false,            \"OptionValue\": 42897099.61011207,            \"OptionPartNumber\": \"pariatur esse dolore do\",            \"OptionSorting\": 5766181.224910393,            \"OptionImagePath\": \"mollit \",            \"OptionBundleCatalogId\": -29015869,            \"OptionBundleQuantity\": -83486689          },          {            \"OptionID\": -71714227,            \"OptionName\": \"aliqua dolore Ut non\",            \"OptionSelected\": false,            \"OptionHide\": true,            \"OptionValue\": 62015711.11286688,            \"OptionPartNumber\": \"commodo dolor fugiat eu\",            \"OptionSorting\": 68522351.24806389,            \"OptionImagePath\": \"adipisicing sed dolor\",            \"OptionBundleCatalogId\": 97557516,            \"OptionBundleQuantity\": -43039536          },          {            \"OptionID\": -67195843,            \"OptionName\": \"elit cillum in incididunt reprehenderit\",            \"OptionSelected\": true,            \"OptionHide\": true,            \"OptionValue\": -8456211.184706047,            \"OptionPartNumber\": \"sed qui in dolore\",            \"OptionSorting\": 28988692.003649727,            \"OptionImagePath\": \"incididunt minim\",            \"OptionBundleCatalogId\": -13553697,            \"OptionBundleQuantity\": -49906785          }        ]      }    ],    \"Title\": \"minim cupidatat ipsum nisi\",    \"CustomFileName\": \"ut deserunt\",    \"MetaTags\": \"nulla ut culpa\",    \"CategoryHeader\": \"cillum\",    \"CategoryFooter\": \"consectetur nulla do sunt\",    \"AdditionalKeywords\": \"ex esse cupidatat\",    \"CategoryExternalIdsList\": [      {        \"ID\": -48905284,        \"CategoryID\": 65508538,        \"ExternalId1\": \"ea\",        \"ExternalIdType\": \"ut cupidatat\"      }    ]  },  {    \"CategoryID\": 3242417,    \"CategoryName\": \"nostrud officia nisi\",    \"Link\": \"Lorem minim fugiat\",    \"CategoryDescription\": \"consectetur laborum amet sed\",    \"CategoryIcon\": \"dolore voluptate cupidatat in\",    \"CategoryMain\": false,    \"CategoryParent\": 17984540,    \"Sorting\": 5752348,    \"Hide\": true,    \"UserID\": \"sint elit Ut\",    \"LastUpdate\": \"1993-09-25T05:44:37.159Z\",    \"CategoryMenuGroup\": 84461561,    \"HomeSpecialCategory\": true,    \"FilterCategory\": false,    \"TemplateCategoryPage\": -13141093,    \"DefaultProductsSorting\": -49122385,    \"SubcategoryColumnsCategorySpecials\": 21172699,    \"ProductColumnsCategorySpecials\": 3672582,    \"ProductColumnsCategoryGeneralItems\": -93345850,    \"ItemsPerPageCategorySpecialItems\": 24775260,    \"ItemsPerPageCategoryGeneralItems\": -46950751,    \"DisplayTypeCategorySpecialItems\": -32369927,    \"DisplayTypeCategoryGeneralProducts\": 1183740,    \"AllowAccess\": \"labore esse mollit tempor\",    \"OnFailRedirectTo\": \"do Lorem dolore nulla\",    \"HideLeftBar\": true,    \"HideRightBar\": true,    \"HideTopMenu\": false,    \"SmartCategories\": 63407332,    \"SmartCategoriesSearchKeyword\": \"eu velit\",    \"SmartCategoriesLinkTarget\": \"anim \",    \"TemplateProductPage\": 18547652,    \"ProductColumnsRelatedProducts\": -91453517,    \"ProductColumnsUpsellProducts\": 87697311,    \"DisplayTypeRelatedItems\": 36829773,    \"DisplayTypeUpsellItems\": -39874858,    \"OptionSetList\": [      {        \"OptionSetID\": 6657161,        \"OptionSetName\": \"n\",        \"OptionSorting\": 58223432.29291743,        \"OptionRequired\": false,        \"OptionType\": \"si\",        \"OptionURL\": \"Ut dolore amet\",        \"OptionAdditionalInformation\": \"nulla in\",        \"OptionSizeLimit\": 9281594,        \"OptionList\": [          {            \"OptionID\": -21999234,            \"OptionName\": \"ipsum esse tempor quis in\",            \"OptionSelected\": true,            \"OptionHide\": true,            \"OptionValue\": -94257794.26250757,            \"OptionPartNumber\": \"velit consectetur dolor elit aut\",            \"OptionSorting\": -47884164.807351135,            \"OptionImagePath\": \"in pariatur\",            \"OptionBundleCatalogId\": -59682969,            \"OptionBundleQuantity\": 39968379          },          {            \"OptionID\": -41599054,            \"OptionName\": \"Excepteur in\",            \"OptionSelected\": true,            \"OptionHide\": true,            \"OptionValue\": 88460500.03025067,            \"OptionPartNumber\": \"ex\",            \"OptionSorting\": -60799611.630514994,            \"OptionImagePath\": \"Ut labore consequat Excepteur pariatur\",            \"OptionBundleCatalogId\": 26044585,            \"OptionBundleQuantity\": -61396903          }        ]      },      {        \"OptionSetID\": -2612978,        \"OptionSetName\": \"elit sunt deserunt aliquip ea\",        \"OptionSorting\": -75889360.33887927,        \"OptionRequired\": true,        \"OptionType\": \"id Exce\",        \"OptionURL\": \"qui\",        \"OptionAdditionalInformation\": \"tem\",        \"OptionSizeLimit\": 75732732,        \"OptionList\": [          {            \"OptionID\": 13353699,            \"OptionName\": \"officia incididunt nisi\",            \"OptionSelected\": false,            \"OptionHide\": false,            \"OptionValue\": 34447909.855547994,            \"OptionPartNumber\": \"velit veniam\",            \"OptionSorting\": 78162270.74954227,            \"OptionImagePath\": \"in c\",            \"OptionBundleCatalogId\": -71651929,            \"OptionBundleQuantity\": 51939266          },          {            \"OptionID\": 53356018,            \"OptionName\": \"cillum officia eiusmod\",            \"OptionSelected\": false,            \"OptionHide\": false,            \"OptionValue\": 18957100.081903234,            \"OptionPartNumber\": \"ea et\",            \"OptionSorting\": -47754403.98882509,            \"OptionImagePath\": \"anim labore ut\",            \"OptionBundleCatalogId\": -25170081,            \"OptionBundleQuantity\": 39947065          },          {            \"OptionID\": -51797199,            \"OptionName\": \"consectetur mollit dolore\",            \"OptionSelected\": false,            \"OptionHide\": true,            \"OptionValue\": -65184861.41719211,            \"OptionPartNumber\": \"ut labore amet culpa\",            \"OptionSorting\": -47972148.37624497,            \"OptionImagePath\": \"non nostrud ipsum\",            \"OptionBundleCatalogId\": 60457392,            \"OptionBundleQuantity\": -93173967          },          {            \"OptionID\": -22995896,            \"OptionName\": \"pariatur Excepteur\",            \"OptionSelected\": true,            \"OptionHide\": false,            \"OptionValue\": -7901532.5541561395,            \"OptionPartNumber\": \"voluptate dolore sunt\",            \"OptionSorting\": -69735210.66052553,            \"OptionImagePath\": \"labore fugiat\",            \"OptionBundleCatalogId\": 88728383,            \"OptionBundleQuantity\": -38887245          },          {            \"OptionID\": 96907822,            \"OptionName\": \"do laborum\",            \"OptionSelected\": true,            \"OptionHide\": true,            \"OptionValue\": -39720514.71177855,            \"OptionPartNumber\": \"eiusmod ipsum dolor aute esse\",            \"OptionSorting\": 73978711.2845327,            \"OptionImagePath\": \"ad enim esse\",            \"OptionBundleCatalogId\": 84775025,            \"OptionBundleQuantity\": -38487117          }        ]      },      {        \"OptionSetID\": -10277117,        \"OptionSetName\": \"nulla ea ad aliquip Ut\",        \"OptionSorting\": 57219273.85353941,        \"OptionRequired\": false,        \"OptionType\": \"ni\",        \"OptionURL\": \"sint\",        \"OptionAdditionalInformation\": \"nisi Lorem fugiat\",        \"OptionSizeLimit\": 32849644,        \"OptionList\": [          {            \"OptionID\": -253227,            \"OptionName\": \"labore cillum cupidatat\",            \"OptionSelected\": true,            \"OptionHide\": true,            \"OptionValue\": 83843550.03509429,            \"OptionPartNumber\": \"Excepteur e\",            \"OptionSorting\": -65213580.39029486,            \"OptionImagePath\": \"cupidatat\",            \"OptionBundleCatalogId\": -25499690,            \"OptionBundleQuantity\": 23387213          },          {            \"OptionID\": 98496861,            \"OptionName\": \"in ullamco\",            \"OptionSelected\": true,            \"OptionHide\": true,            \"OptionValue\": -58826484.70863989,            \"OptionPartNumber\": \"consectetur nostrud do\",            \"OptionSorting\": -88084823.3866431,            \"OptionImagePath\": \"dolor mollit dolore\",            \"OptionBundleCatalogId\": -71423397,            \"OptionBundleQuantity\": -13269372          },          {            \"OptionID\": -68930299,            \"OptionName\": \"ut pariatur Duis\",            \"OptionSelected\": false,            \"OptionHide\": false,            \"OptionValue\": -42229190.09528532,            \"OptionPartNumber\": \"Lorem minim in\",            \"OptionSorting\": -18335575.258460328,            \"OptionImagePath\": \"voluptate elit ea nostrud anim\",            \"OptionBundleCatalogId\": 22487598,            \"OptionBundleQuantity\": 61337346          },          {            \"OptionID\": 12064789,            \"OptionName\": \"mollit in\",            \"OptionSelected\": true,            \"OptionHide\": false,            \"OptionValue\": 44082106.65290761,            \"OptionPartNumber\": \"aute cillum consequat\",            \"OptionSorting\": -72382902.38076086,            \"OptionImagePath\": \"Excepteur\",            \"OptionBundleCatalogId\": 54785887,            \"OptionBundleQuantity\": 66991923          }        ]      }    ],    \"Title\": \"occaecat laborum Excepteur ut\",    \"CustomFileName\": \"in minim\",    \"MetaTags\": \"tempor fugiat laborum nulla in\",    \"CategoryHeader\": \"voluptate reprehenderit\",    \"CategoryFooter\": \"ad in\",    \"AdditionalKeywords\": \"qui sed sit\",    \"CategoryExternalIdsList\": [      {        \"ID\": 21740349,        \"CategoryID\": -93114626,        \"ExternalId1\": \"aliquip non deserunt reprehenderit\",        \"ExternalIdType\": \"in amet pariatur exercitation dolor\"      },      {        \"ID\": 65972065,        \"CategoryID\": -88569652,        \"ExternalId1\": \"ipsum ad nostrud mollit\",        \"ExternalIdType\": \"ullamco Duis exercitation\"      },      {        \"ID\": -64571079,        \"CategoryID\": 21800531,        \"ExternalId1\": \"Excepteur incididunt dolore ullamco\",        \"ExternalIdType\": \"\"      }    ]  }]", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Categories", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Categories');

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
    'CategoryID': 20568772,
    'CategoryName': 'nostrud officia laboris commodo sit',
    'Link': 'sunt velit',
    'CategoryDescription': 'adipisicing commodo incididunt eu irure',
    'CategoryIcon': 'commodo dolor irure',
    'CategoryMain': true,
    'CategoryParent': -40250046,
    'Sorting': -4347994,
    'Hide': true,
    'UserID': 'laborum reprehenderit minim',
    'LastUpdate': '1977-03-25T23:14:41.941Z',
    'CategoryMenuGroup': 67688871,
    'HomeSpecialCategory': false,
    'FilterCategory': true,
    'TemplateCategoryPage': 8611143,
    'DefaultProductsSorting': 10991548,
    'SubcategoryColumnsCategorySpecials': -10753710,
    'ProductColumnsCategorySpecials': -26970234,
    'ProductColumnsCategoryGeneralItems': 86802777,
    'ItemsPerPageCategorySpecialItems': 88544527,
    'ItemsPerPageCategoryGeneralItems': 24167595,
    'DisplayTypeCategorySpecialItems': -32263812,
    'DisplayTypeCategoryGeneralProducts': 47126883,
    'AllowAccess': 'ut velit aliquip sint ea',
    'OnFailRedirectTo': 'et sed',
    'HideLeftBar': false,
    'HideRightBar': false,
    'HideTopMenu': false,
    'SmartCategories': -55392261,
    'SmartCategoriesSearchKeyword': 'et do ut quis',
    'SmartCategoriesLinkTarget': 'do veniam labor',
    'TemplateProductPage': 11334197,
    'ProductColumnsRelatedProducts': 17546575,
    'ProductColumnsUpsellProducts': 70149168,
    'DisplayTypeRelatedItems': -88273472,
    'DisplayTypeUpsellItems': 34052311,
    'OptionSetList': [
      {
        'OptionSetID': -75731084,
        'OptionSetName': 'voluptate sed quis et',
        'OptionSorting': -96539508.41777772,
        'OptionRequired': true,
        'OptionType': '',
        'OptionURL': 'do amet',
        'OptionAdditionalInformation': 'occaecat',
        'OptionSizeLimit': 5672833,
        'OptionList': [
          {
            'OptionID': -75887427,
            'OptionName': 'labore deserunt laborum Duis',
            'OptionSelected': false,
            'OptionHide': true,
            'OptionValue': -59937182.77688549,
            'OptionPartNumber': 'eiusmod ad nostrud labore cupidatat',
            'OptionSorting': 86071948.6004144,
            'OptionImagePath': 'pariatur Excepteur',
            'OptionBundleCatalogId': -60711731,
            'OptionBundleQuantity': 30673284
          }
        ]
      },
      {
        'OptionSetID': -31955416,
        'OptionSetName': 'quis eiusmod',
        'OptionSorting': -66348953.76952237,
        'OptionRequired': false,
        'OptionType': 'aliquip i',
        'OptionURL': 'elit do',
        'OptionAdditionalInformation': 'sit pariatur',
        'OptionSizeLimit': -41589887,
        'OptionList': [
          {
            'OptionID': 25015635,
            'OptionName': 'dolore ut nulla',
            'OptionSelected': false,
            'OptionHide': false,
            'OptionValue': -33072882.332152046,
            'OptionPartNumber': 'commodo ut',
            'OptionSorting': 90530102.89804876,
            'OptionImagePath': 'deserunt ullamco aute',
            'OptionBundleCatalogId': -89959324,
            'OptionBundleQuantity': -22023584
          },
          {
            'OptionID': 97324761,
            'OptionName': 'ex voluptate pariatur elit',
            'OptionSelected': false,
            'OptionHide': false,
            'OptionValue': 72722283.53238845,
            'OptionPartNumber': 'ad tempor',
            'OptionSorting': 23016543.367841795,
            'OptionImagePath': 'ad cupidatat eiusmod aute',
            'OptionBundleCatalogId': -69043452,
            'OptionBundleQuantity': 43822225
          }
        ]
      }
    ],
    'Title': 'in cupidatat fugiat',
    'CustomFileName': 'Excepteur Lorem ut officia',
    'MetaTags': 'officia ullamco sit ut',
    'CategoryHeader': 'sunt labore in aliquip dolore',
    'CategoryFooter': 'culpa id reprehenderit in',
    'AdditionalKeywords': 'cillum culpa',
    'CategoryExternalIdsList': [
      {
        'ID': 67730448,
        'CategoryID': -16074942,
        'ExternalId1': 'et commodo',
        'ExternalIdType': 'laboris ut ea proident id'
      },
      {
        'ID': 27537116,
        'CategoryID': -51137858,
        'ExternalId1': 'est in mollit enim',
        'ExternalIdType': 'consectetur Ut'
      },
      {
        'ID': -85502322,
        'CategoryID': -60783293,
        'ExternalId1': 'eu pariatur',
        'ExternalIdType': 'mollit incididunt'
      }
    ]
  },
  {
    'CategoryID': -38231792,
    'CategoryName': 'mollit dolore dolor labore',
    'Link': 'nostrud pariatur',
    'CategoryDescription': 'non fugiat magna n',
    'CategoryIcon': 'ut',
    'CategoryMain': false,
    'CategoryParent': 22678387,
    'Sorting': 26006029,
    'Hide': true,
    'UserID': 'labore f',
    'LastUpdate': '1993-03-12T03:37:23.828Z',
    'CategoryMenuGroup': 39662559,
    'HomeSpecialCategory': false,
    'FilterCategory': true,
    'TemplateCategoryPage': 17571355,
    'DefaultProductsSorting': 8628776,
    'SubcategoryColumnsCategorySpecials': 61765045,
    'ProductColumnsCategorySpecials': 2901356,
    'ProductColumnsCategoryGeneralItems': 65491452,
    'ItemsPerPageCategorySpecialItems': 44148399,
    'ItemsPerPageCategoryGeneralItems': 74711849,
    'DisplayTypeCategorySpecialItems': -80748538,
    'DisplayTypeCategoryGeneralProducts': 7803513,
    'AllowAccess': 'cillum laborum minim',
    'OnFailRedirectTo': 'ad dolore',
    'HideLeftBar': false,
    'HideRightBar': false,
    'HideTopMenu': false,
    'SmartCategories': -31939948,
    'SmartCategoriesSearchKeyword': 'dolor officia laborum',
    'SmartCategoriesLinkTarget': 'magna adipisicing id',
    'TemplateProductPage': -77171173,
    'ProductColumnsRelatedProducts': 7898074,
    'ProductColumnsUpsellProducts': 28531767,
    'DisplayTypeRelatedItems': -4169152,
    'DisplayTypeUpsellItems': 88298725,
    'OptionSetList': [
      {
        'OptionSetID': 74837456,
        'OptionSetName': 'labore dolor exercitation',
        'OptionSorting': 48091622.23854077,
        'OptionRequired': false,
        'OptionType': 'nostr',
        'OptionURL': 'quis non dolor',
        'OptionAdditionalInformation': 'aute laborum reprehenderit',
        'OptionSizeLimit': 72129784,
        'OptionList': [
          {
            'OptionID': 60722654,
            'OptionName': 'dolor ni',
            'OptionSelected': true,
            'OptionHide': true,
            'OptionValue': -67262445.84641537,
            'OptionPartNumber': 'sint consectetur consequat ',
            'OptionSorting': 99928287.40942946,
            'OptionImagePath': 'ea',
            'OptionBundleCatalogId': 73879382,
            'OptionBundleQuantity': -7396796
          },
          {
            'OptionID': 83228897,
            'OptionName': 'non et tempor elit',
            'OptionSelected': false,
            'OptionHide': true,
            'OptionValue': -7083094.560462117,
            'OptionPartNumber': 'officia irure null',
            'OptionSorting': -80081827.88170063,
            'OptionImagePath': 'non',
            'OptionBundleCatalogId': -59869594,
            'OptionBundleQuantity': 9703570
          },
          {
            'OptionID': -92350055,
            'OptionName': 'nisi pariatur',
            'OptionSelected': false,
            'OptionHide': false,
            'OptionValue': -90332628.25495316,
            'OptionPartNumber': 'tempor Duis aliquip eiusmod',
            'OptionSorting': -62219206.823874585,
            'OptionImagePath': 'nostrud',
            'OptionBundleCatalogId': -51145970,
            'OptionBundleQuantity': 96302810
          }
        ]
      },
      {
        'OptionSetID': 46761863,
        'OptionSetName': 'nisi incididunt',
        'OptionSorting': -70396605.13459216,
        'OptionRequired': true,
        'OptionType': 'consequ',
        'OptionURL': 'occaecat laborum exercitation',
        'OptionAdditionalInformation': 'Ut ipsum',
        'OptionSizeLimit': -602532,
        'OptionList': [
          {
            'OptionID': 31182779,
            'OptionName': 'anim tempor amet eiusmod reprehenderit',
            'OptionSelected': true,
            'OptionHide': false,
            'OptionValue': -56774730.08607312,
            'OptionPartNumber': 'Duis sunt dolor irure dolor',
            'OptionSorting': 91280165.61374578,
            'OptionImagePath': 'incididunt',
            'OptionBundleCatalogId': -47920121,
            'OptionBundleQuantity': -79760433
          },
          {
            'OptionID': 72655906,
            'OptionName': 'ipsum enim',
            'OptionSelected': true,
            'OptionHide': false,
            'OptionValue': 47679301.041104525,
            'OptionPartNumber': 'laboris officia ',
            'OptionSorting': -25101021.47573021,
            'OptionImagePath': 'enim magna elit qui veniam',
            'OptionBundleCatalogId': -19385029,
            'OptionBundleQuantity': -5099530
          }
        ]
      },
      {
        'OptionSetID': -45541705,
        'OptionSetName': 'ut commodo',
        'OptionSorting': 59545650.19917911,
        'OptionRequired': true,
        'OptionType': 'qu',
        'OptionURL': 'occaecat nostrud sunt incididunt',
        'OptionAdditionalInformation': 'quis aliqua cupidatat nostrud',
        'OptionSizeLimit': -84707790,
        'OptionList': [
          {
            'OptionID': -42423158,
            'OptionName': 'Lorem tempor elit labore',
            'OptionSelected': true,
            'OptionHide': false,
            'OptionValue': 41695245.98499611,
            'OptionPartNumber': 'laborum Duis velit et',
            'OptionSorting': -25473139.41574055,
            'OptionImagePath': 'pariatur',
            'OptionBundleCatalogId': 68685275,
            'OptionBundleQuantity': -45761768
          },
          {
            'OptionID': -80021263,
            'OptionName': 'dolore eu tempor occaecat',
            'OptionSelected': false,
            'OptionHide': true,
            'OptionValue': 65276237.620652765,
            'OptionPartNumber': 'in consequat non eiusm',
            'OptionSorting': -67075692.390820764,
            'OptionImagePath': 'eiusmod in irure',
            'OptionBundleCatalogId': -31815606,
            'OptionBundleQuantity': -30526227
          },
          {
            'OptionID': 30644454,
            'OptionName': 'ut quis esse',
            'OptionSelected': true,
            'OptionHide': true,
            'OptionValue': 91381760.92553037,
            'OptionPartNumber': 'sunt Ut et anim',
            'OptionSorting': -14140415.486470565,
            'OptionImagePath': 'consequat anim reprehenderit id non',
            'OptionBundleCatalogId': 71435497,
            'OptionBundleQuantity': 92049760
          }
        ]
      },
      {
        'OptionSetID': -26151559,
        'OptionSetName': 'et Ut ullamco esse nulla',
        'OptionSorting': -17582981.37645018,
        'OptionRequired': true,
        'OptionType': 'sunt',
        'OptionURL': 'velit anim et',
        'OptionAdditionalInformation': 'elit laborum ad',
        'OptionSizeLimit': -67079179,
        'OptionList': [
          {
            'OptionID': -3143279,
            'OptionName': 'cupidatat nostrud incididunt',
            'OptionSelected': false,
            'OptionHide': true,
            'OptionValue': 1738681.0807540417,
            'OptionPartNumber': 'incididunt proident',
            'OptionSorting': 40740370.32994321,
            'OptionImagePath': 'aute in aliqua in',
            'OptionBundleCatalogId': 45223386,
            'OptionBundleQuantity': 2530208
          },
          {
            'OptionID': -42300898,
            'OptionName': 'aliqua sint tempor',
            'OptionSelected': false,
            'OptionHide': false,
            'OptionValue': -25188059.688181758,
            'OptionPartNumber': 'veniam velit dolor et',
            'OptionSorting': -98699714.38869634,
            'OptionImagePath': 'sed proident pariatur',
            'OptionBundleCatalogId': 74974750,
            'OptionBundleQuantity': -60848785
          },
          {
            'OptionID': -89184301,
            'OptionName': 'sunt est',
            'OptionSelected': true,
            'OptionHide': false,
            'OptionValue': 27388935.985263303,
            'OptionPartNumber': 'aute in',
            'OptionSorting': -27452174.924212262,
            'OptionImagePath': 'esse officia Duis incididunt',
            'OptionBundleCatalogId': 54716178,
            'OptionBundleQuantity': 63860042
          }
        ]
      },
      {
        'OptionSetID': -12791947,
        'OptionSetName': 'do minim',
        'OptionSorting': 18885884.753000945,
        'OptionRequired': true,
        'OptionType': 'ut sint p',
        'OptionURL': 'sint consequat',
        'OptionAdditionalInformation': 'cupidatat velit',
        'OptionSizeLimit': -22184438,
        'OptionList': [
          {
            'OptionID': 21064730,
            'OptionName': 'voluptate cupidatat reprehenderit aute proident',
            'OptionSelected': true,
            'OptionHide': true,
            'OptionValue': 77350367.07517052,
            'OptionPartNumber': 'laborum dolore',
            'OptionSorting': -34955118.2123907,
            'OptionImagePath': 'labore id adipisicing',
            'OptionBundleCatalogId': 21992519,
            'OptionBundleQuantity': -84122959
          },
          {
            'OptionID': 74872942,
            'OptionName': 'incididunt in fugiat',
            'OptionSelected': false,
            'OptionHide': false,
            'OptionValue': 42897099.61011207,
            'OptionPartNumber': 'pariatur esse dolore do',
            'OptionSorting': 5766181.224910393,
            'OptionImagePath': 'mollit ',
            'OptionBundleCatalogId': -29015869,
            'OptionBundleQuantity': -83486689
          },
          {
            'OptionID': -71714227,
            'OptionName': 'aliqua dolore Ut non',
            'OptionSelected': false,
            'OptionHide': true,
            'OptionValue': 62015711.11286688,
            'OptionPartNumber': 'commodo dolor fugiat eu',
            'OptionSorting': 68522351.24806389,
            'OptionImagePath': 'adipisicing sed dolor',
            'OptionBundleCatalogId': 97557516,
            'OptionBundleQuantity': -43039536
          },
          {
            'OptionID': -67195843,
            'OptionName': 'elit cillum in incididunt reprehenderit',
            'OptionSelected': true,
            'OptionHide': true,
            'OptionValue': -8456211.184706047,
            'OptionPartNumber': 'sed qui in dolore',
            'OptionSorting': 28988692.003649727,
            'OptionImagePath': 'incididunt minim',
            'OptionBundleCatalogId': -13553697,
            'OptionBundleQuantity': -49906785
          }
        ]
      }
    ],
    'Title': 'minim cupidatat ipsum nisi',
    'CustomFileName': 'ut deserunt',
    'MetaTags': 'nulla ut culpa',
    'CategoryHeader': 'cillum',
    'CategoryFooter': 'consectetur nulla do sunt',
    'AdditionalKeywords': 'ex esse cupidatat',
    'CategoryExternalIdsList': [
      {
        'ID': -48905284,
        'CategoryID': 65508538,
        'ExternalId1': 'ea',
        'ExternalIdType': 'ut cupidatat'
      }
    ]
  },
  {
    'CategoryID': 3242417,
    'CategoryName': 'nostrud officia nisi',
    'Link': 'Lorem minim fugiat',
    'CategoryDescription': 'consectetur laborum amet sed',
    'CategoryIcon': 'dolore voluptate cupidatat in',
    'CategoryMain': false,
    'CategoryParent': 17984540,
    'Sorting': 5752348,
    'Hide': true,
    'UserID': 'sint elit Ut',
    'LastUpdate': '1993-09-25T05:44:37.159Z',
    'CategoryMenuGroup': 84461561,
    'HomeSpecialCategory': true,
    'FilterCategory': false,
    'TemplateCategoryPage': -13141093,
    'DefaultProductsSorting': -49122385,
    'SubcategoryColumnsCategorySpecials': 21172699,
    'ProductColumnsCategorySpecials': 3672582,
    'ProductColumnsCategoryGeneralItems': -93345850,
    'ItemsPerPageCategorySpecialItems': 24775260,
    'ItemsPerPageCategoryGeneralItems': -46950751,
    'DisplayTypeCategorySpecialItems': -32369927,
    'DisplayTypeCategoryGeneralProducts': 1183740,
    'AllowAccess': 'labore esse mollit tempor',
    'OnFailRedirectTo': 'do Lorem dolore nulla',
    'HideLeftBar': true,
    'HideRightBar': true,
    'HideTopMenu': false,
    'SmartCategories': 63407332,
    'SmartCategoriesSearchKeyword': 'eu velit',
    'SmartCategoriesLinkTarget': 'anim ',
    'TemplateProductPage': 18547652,
    'ProductColumnsRelatedProducts': -91453517,
    'ProductColumnsUpsellProducts': 87697311,
    'DisplayTypeRelatedItems': 36829773,
    'DisplayTypeUpsellItems': -39874858,
    'OptionSetList': [
      {
        'OptionSetID': 6657161,
        'OptionSetName': 'n',
        'OptionSorting': 58223432.29291743,
        'OptionRequired': false,
        'OptionType': 'si',
        'OptionURL': 'Ut dolore amet',
        'OptionAdditionalInformation': 'nulla in',
        'OptionSizeLimit': 9281594,
        'OptionList': [
          {
            'OptionID': -21999234,
            'OptionName': 'ipsum esse tempor quis in',
            'OptionSelected': true,
            'OptionHide': true,
            'OptionValue': -94257794.26250757,
            'OptionPartNumber': 'velit consectetur dolor elit aut',
            'OptionSorting': -47884164.807351135,
            'OptionImagePath': 'in pariatur',
            'OptionBundleCatalogId': -59682969,
            'OptionBundleQuantity': 39968379
          },
          {
            'OptionID': -41599054,
            'OptionName': 'Excepteur in',
            'OptionSelected': true,
            'OptionHide': true,
            'OptionValue': 88460500.03025067,
            'OptionPartNumber': 'ex',
            'OptionSorting': -60799611.630514994,
            'OptionImagePath': 'Ut labore consequat Excepteur pariatur',
            'OptionBundleCatalogId': 26044585,
            'OptionBundleQuantity': -61396903
          }
        ]
      },
      {
        'OptionSetID': -2612978,
        'OptionSetName': 'elit sunt deserunt aliquip ea',
        'OptionSorting': -75889360.33887927,
        'OptionRequired': true,
        'OptionType': 'id Exce',
        'OptionURL': 'qui',
        'OptionAdditionalInformation': 'tem',
        'OptionSizeLimit': 75732732,
        'OptionList': [
          {
            'OptionID': 13353699,
            'OptionName': 'officia incididunt nisi',
            'OptionSelected': false,
            'OptionHide': false,
            'OptionValue': 34447909.855547994,
            'OptionPartNumber': 'velit veniam',
            'OptionSorting': 78162270.74954227,
            'OptionImagePath': 'in c',
            'OptionBundleCatalogId': -71651929,
            'OptionBundleQuantity': 51939266
          },
          {
            'OptionID': 53356018,
            'OptionName': 'cillum officia eiusmod',
            'OptionSelected': false,
            'OptionHide': false,
            'OptionValue': 18957100.081903234,
            'OptionPartNumber': 'ea et',
            'OptionSorting': -47754403.98882509,
            'OptionImagePath': 'anim labore ut',
            'OptionBundleCatalogId': -25170081,
            'OptionBundleQuantity': 39947065
          },
          {
            'OptionID': -51797199,
            'OptionName': 'consectetur mollit dolore',
            'OptionSelected': false,
            'OptionHide': true,
            'OptionValue': -65184861.41719211,
            'OptionPartNumber': 'ut labore amet culpa',
            'OptionSorting': -47972148.37624497,
            'OptionImagePath': 'non nostrud ipsum',
            'OptionBundleCatalogId': 60457392,
            'OptionBundleQuantity': -93173967
          },
          {
            'OptionID': -22995896,
            'OptionName': 'pariatur Excepteur',
            'OptionSelected': true,
            'OptionHide': false,
            'OptionValue': -7901532.5541561395,
            'OptionPartNumber': 'voluptate dolore sunt',
            'OptionSorting': -69735210.66052553,
            'OptionImagePath': 'labore fugiat',
            'OptionBundleCatalogId': 88728383,
            'OptionBundleQuantity': -38887245
          },
          {
            'OptionID': 96907822,
            'OptionName': 'do laborum',
            'OptionSelected': true,
            'OptionHide': true,
            'OptionValue': -39720514.71177855,
            'OptionPartNumber': 'eiusmod ipsum dolor aute esse',
            'OptionSorting': 73978711.2845327,
            'OptionImagePath': 'ad enim esse',
            'OptionBundleCatalogId': 84775025,
            'OptionBundleQuantity': -38487117
          }
        ]
      },
      {
        'OptionSetID': -10277117,
        'OptionSetName': 'nulla ea ad aliquip Ut',
        'OptionSorting': 57219273.85353941,
        'OptionRequired': false,
        'OptionType': 'ni',
        'OptionURL': 'sint',
        'OptionAdditionalInformation': 'nisi Lorem fugiat',
        'OptionSizeLimit': 32849644,
        'OptionList': [
          {
            'OptionID': -253227,
            'OptionName': 'labore cillum cupidatat',
            'OptionSelected': true,
            'OptionHide': true,
            'OptionValue': 83843550.03509429,
            'OptionPartNumber': 'Excepteur e',
            'OptionSorting': -65213580.39029486,
            'OptionImagePath': 'cupidatat',
            'OptionBundleCatalogId': -25499690,
            'OptionBundleQuantity': 23387213
          },
          {
            'OptionID': 98496861,
            'OptionName': 'in ullamco',
            'OptionSelected': true,
            'OptionHide': true,
            'OptionValue': -58826484.70863989,
            'OptionPartNumber': 'consectetur nostrud do',
            'OptionSorting': -88084823.3866431,
            'OptionImagePath': 'dolor mollit dolore',
            'OptionBundleCatalogId': -71423397,
            'OptionBundleQuantity': -13269372
          },
          {
            'OptionID': -68930299,
            'OptionName': 'ut pariatur Duis',
            'OptionSelected': false,
            'OptionHide': false,
            'OptionValue': -42229190.09528532,
            'OptionPartNumber': 'Lorem minim in',
            'OptionSorting': -18335575.258460328,
            'OptionImagePath': 'voluptate elit ea nostrud anim',
            'OptionBundleCatalogId': 22487598,
            'OptionBundleQuantity': 61337346
          },
          {
            'OptionID': 12064789,
            'OptionName': 'mollit in',
            'OptionSelected': true,
            'OptionHide': false,
            'OptionValue': 44082106.65290761,
            'OptionPartNumber': 'aute cillum consequat',
            'OptionSorting': -72382902.38076086,
            'OptionImagePath': 'Excepteur',
            'OptionBundleCatalogId': 54785887,
            'OptionBundleQuantity': 66991923
          }
        ]
      }
    ],
    'Title': 'occaecat laborum Excepteur ut',
    'CustomFileName': 'in minim',
    'MetaTags': 'tempor fugiat laborum nulla in',
    'CategoryHeader': 'voluptate reprehenderit',
    'CategoryFooter': 'ad in',
    'AdditionalKeywords': 'qui sed sit',
    'CategoryExternalIdsList': [
      {
        'ID': 21740349,
        'CategoryID': -93114626,
        'ExternalId1': 'aliquip non deserunt reprehenderit',
        'ExternalIdType': 'in amet pariatur exercitation dolor'
      },
      {
        'ID': 65972065,
        'CategoryID': -88569652,
        'ExternalId1': 'ipsum ad nostrud mollit',
        'ExternalIdType': 'ullamco Duis exercitation'
      },
      {
        'ID': -64571079,
        'CategoryID': 21800531,
        'ExternalId1': 'Excepteur incididunt dolore ullamco',
        'ExternalIdType': ''
      }
    ]
  }
];

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '[
  {
    "CategoryID": 20568772,
    "CategoryName": "nostrud officia laboris commodo sit",
    "Link": "sunt velit",
    "CategoryDescription": "adipisicing commodo incididunt eu irure",
    "CategoryIcon": "commodo dolor irure",
    "CategoryMain": true,
    "CategoryParent": -40250046,
    "Sorting": -4347994,
    "Hide": true,
    "UserID": "laborum reprehenderit minim",
    "LastUpdate": "1977-03-25T23:14:41.941Z",
    "CategoryMenuGroup": 67688871,
    "HomeSpecialCategory": false,
    "FilterCategory": true,
    "TemplateCategoryPage": 8611143,
    "DefaultProductsSorting": 10991548,
    "SubcategoryColumnsCategorySpecials": -10753710,
    "ProductColumnsCategorySpecials": -26970234,
    "ProductColumnsCategoryGeneralItems": 86802777,
    "ItemsPerPageCategorySpecialItems": 88544527,
    "ItemsPerPageCategoryGeneralItems": 24167595,
    "DisplayTypeCategorySpecialItems": -32263812,
    "DisplayTypeCategoryGeneralProducts": 47126883,
    "AllowAccess": "ut velit aliquip sint ea",
    "OnFailRedirectTo": "et sed",
    "HideLeftBar": false,
    "HideRightBar": false,
    "HideTopMenu": false,
    "SmartCategories": -55392261,
    "SmartCategoriesSearchKeyword": "et do ut quis",
    "SmartCategoriesLinkTarget": "do veniam labor",
    "TemplateProductPage": 11334197,
    "ProductColumnsRelatedProducts": 17546575,
    "ProductColumnsUpsellProducts": 70149168,
    "DisplayTypeRelatedItems": -88273472,
    "DisplayTypeUpsellItems": 34052311,
    "OptionSetList": [
      {
        "OptionSetID": -75731084,
        "OptionSetName": "voluptate sed quis et",
        "OptionSorting": -96539508.41777772,
        "OptionRequired": true,
        "OptionType": "",
        "OptionURL": "do amet",
        "OptionAdditionalInformation": "occaecat",
        "OptionSizeLimit": 5672833,
        "OptionList": [
          {
            "OptionID": -75887427,
            "OptionName": "labore deserunt laborum Duis",
            "OptionSelected": false,
            "OptionHide": true,
            "OptionValue": -59937182.77688549,
            "OptionPartNumber": "eiusmod ad nostrud labore cupidatat",
            "OptionSorting": 86071948.6004144,
            "OptionImagePath": "pariatur Excepteur",
            "OptionBundleCatalogId": -60711731,
            "OptionBundleQuantity": 30673284
          }
        ]
      },
      {
        "OptionSetID": -31955416,
        "OptionSetName": "quis eiusmod",
        "OptionSorting": -66348953.76952237,
        "OptionRequired": false,
        "OptionType": "aliquip i",
        "OptionURL": "elit do",
        "OptionAdditionalInformation": "sit pariatur",
        "OptionSizeLimit": -41589887,
        "OptionList": [
          {
            "OptionID": 25015635,
            "OptionName": "dolore ut nulla",
            "OptionSelected": false,
            "OptionHide": false,
            "OptionValue": -33072882.332152046,
            "OptionPartNumber": "commodo ut",
            "OptionSorting": 90530102.89804876,
            "OptionImagePath": "deserunt ullamco aute",
            "OptionBundleCatalogId": -89959324,
            "OptionBundleQuantity": -22023584
          },
          {
            "OptionID": 97324761,
            "OptionName": "ex voluptate pariatur elit",
            "OptionSelected": false,
            "OptionHide": false,
            "OptionValue": 72722283.53238845,
            "OptionPartNumber": "ad tempor",
            "OptionSorting": 23016543.367841795,
            "OptionImagePath": "ad cupidatat eiusmod aute",
            "OptionBundleCatalogId": -69043452,
            "OptionBundleQuantity": 43822225
          }
        ]
      }
    ],
    "Title": "in cupidatat fugiat",
    "CustomFileName": "Excepteur Lorem ut officia",
    "MetaTags": "officia ullamco sit ut",
    "CategoryHeader": "sunt labore in aliquip dolore",
    "CategoryFooter": "culpa id reprehenderit in",
    "AdditionalKeywords": "cillum culpa",
    "CategoryExternalIdsList": [
      {
        "ID": 67730448,
        "CategoryID": -16074942,
        "ExternalId1": "et commodo",
        "ExternalIdType": "laboris ut ea proident id"
      },
      {
        "ID": 27537116,
        "CategoryID": -51137858,
        "ExternalId1": "est in mollit enim",
        "ExternalIdType": "consectetur Ut"
      },
      {
        "ID": -85502322,
        "CategoryID": -60783293,
        "ExternalId1": "eu pariatur",
        "ExternalIdType": "mollit incididunt"
      }
    ]
  },
  {
    "CategoryID": -38231792,
    "CategoryName": "mollit dolore dolor labore",
    "Link": "nostrud pariatur",
    "CategoryDescription": "non fugiat magna n",
    "CategoryIcon": "ut",
    "CategoryMain": false,
    "CategoryParent": 22678387,
    "Sorting": 26006029,
    "Hide": true,
    "UserID": "labore f",
    "LastUpdate": "1993-03-12T03:37:23.828Z",
    "CategoryMenuGroup": 39662559,
    "HomeSpecialCategory": false,
    "FilterCategory": true,
    "TemplateCategoryPage": 17571355,
    "DefaultProductsSorting": 8628776,
    "SubcategoryColumnsCategorySpecials": 61765045,
    "ProductColumnsCategorySpecials": 2901356,
    "ProductColumnsCategoryGeneralItems": 65491452,
    "ItemsPerPageCategorySpecialItems": 44148399,
    "ItemsPerPageCategoryGeneralItems": 74711849,
    "DisplayTypeCategorySpecialItems": -80748538,
    "DisplayTypeCategoryGeneralProducts": 7803513,
    "AllowAccess": "cillum laborum minim",
    "OnFailRedirectTo": "ad dolore",
    "HideLeftBar": false,
    "HideRightBar": false,
    "HideTopMenu": false,
    "SmartCategories": -31939948,
    "SmartCategoriesSearchKeyword": "dolor officia laborum",
    "SmartCategoriesLinkTarget": "magna adipisicing id",
    "TemplateProductPage": -77171173,
    "ProductColumnsRelatedProducts": 7898074,
    "ProductColumnsUpsellProducts": 28531767,
    "DisplayTypeRelatedItems": -4169152,
    "DisplayTypeUpsellItems": 88298725,
    "OptionSetList": [
      {
        "OptionSetID": 74837456,
        "OptionSetName": "labore dolor exercitation",
        "OptionSorting": 48091622.23854077,
        "OptionRequired": false,
        "OptionType": "nostr",
        "OptionURL": "quis non dolor",
        "OptionAdditionalInformation": "aute laborum reprehenderit",
        "OptionSizeLimit": 72129784,
        "OptionList": [
          {
            "OptionID": 60722654,
            "OptionName": "dolor ni",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": -67262445.84641537,
            "OptionPartNumber": "sint consectetur consequat ",
            "OptionSorting": 99928287.40942946,
            "OptionImagePath": "ea",
            "OptionBundleCatalogId": 73879382,
            "OptionBundleQuantity": -7396796
          },
          {
            "OptionID": 83228897,
            "OptionName": "non et tempor elit",
            "OptionSelected": false,
            "OptionHide": true,
            "OptionValue": -7083094.560462117,
            "OptionPartNumber": "officia irure null",
            "OptionSorting": -80081827.88170063,
            "OptionImagePath": "non",
            "OptionBundleCatalogId": -59869594,
            "OptionBundleQuantity": 9703570
          },
          {
            "OptionID": -92350055,
            "OptionName": "nisi pariatur",
            "OptionSelected": false,
            "OptionHide": false,
            "OptionValue": -90332628.25495316,
            "OptionPartNumber": "tempor Duis aliquip eiusmod",
            "OptionSorting": -62219206.823874585,
            "OptionImagePath": "nostrud",
            "OptionBundleCatalogId": -51145970,
            "OptionBundleQuantity": 96302810
          }
        ]
      },
      {
        "OptionSetID": 46761863,
        "OptionSetName": "nisi incididunt",
        "OptionSorting": -70396605.13459216,
        "OptionRequired": true,
        "OptionType": "consequ",
        "OptionURL": "occaecat laborum exercitation",
        "OptionAdditionalInformation": "Ut ipsum",
        "OptionSizeLimit": -602532,
        "OptionList": [
          {
            "OptionID": 31182779,
            "OptionName": "anim tempor amet eiusmod reprehenderit",
            "OptionSelected": true,
            "OptionHide": false,
            "OptionValue": -56774730.08607312,
            "OptionPartNumber": "Duis sunt dolor irure dolor",
            "OptionSorting": 91280165.61374578,
            "OptionImagePath": "incididunt",
            "OptionBundleCatalogId": -47920121,
            "OptionBundleQuantity": -79760433
          },
          {
            "OptionID": 72655906,
            "OptionName": "ipsum enim",
            "OptionSelected": true,
            "OptionHide": false,
            "OptionValue": 47679301.041104525,
            "OptionPartNumber": "laboris officia ",
            "OptionSorting": -25101021.47573021,
            "OptionImagePath": "enim magna elit qui veniam",
            "OptionBundleCatalogId": -19385029,
            "OptionBundleQuantity": -5099530
          }
        ]
      },
      {
        "OptionSetID": -45541705,
        "OptionSetName": "ut commodo",
        "OptionSorting": 59545650.19917911,
        "OptionRequired": true,
        "OptionType": "qu",
        "OptionURL": "occaecat nostrud sunt incididunt",
        "OptionAdditionalInformation": "quis aliqua cupidatat nostrud",
        "OptionSizeLimit": -84707790,
        "OptionList": [
          {
            "OptionID": -42423158,
            "OptionName": "Lorem tempor elit labore",
            "OptionSelected": true,
            "OptionHide": false,
            "OptionValue": 41695245.98499611,
            "OptionPartNumber": "laborum Duis velit et",
            "OptionSorting": -25473139.41574055,
            "OptionImagePath": "pariatur",
            "OptionBundleCatalogId": 68685275,
            "OptionBundleQuantity": -45761768
          },
          {
            "OptionID": -80021263,
            "OptionName": "dolore eu tempor occaecat",
            "OptionSelected": false,
            "OptionHide": true,
            "OptionValue": 65276237.620652765,
            "OptionPartNumber": "in consequat non eiusm",
            "OptionSorting": -67075692.390820764,
            "OptionImagePath": "eiusmod in irure",
            "OptionBundleCatalogId": -31815606,
            "OptionBundleQuantity": -30526227
          },
          {
            "OptionID": 30644454,
            "OptionName": "ut quis esse",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": 91381760.92553037,
            "OptionPartNumber": "sunt Ut et anim",
            "OptionSorting": -14140415.486470565,
            "OptionImagePath": "consequat anim reprehenderit id non",
            "OptionBundleCatalogId": 71435497,
            "OptionBundleQuantity": 92049760
          }
        ]
      },
      {
        "OptionSetID": -26151559,
        "OptionSetName": "et Ut ullamco esse nulla",
        "OptionSorting": -17582981.37645018,
        "OptionRequired": true,
        "OptionType": "sunt",
        "OptionURL": "velit anim et",
        "OptionAdditionalInformation": "elit laborum ad",
        "OptionSizeLimit": -67079179,
        "OptionList": [
          {
            "OptionID": -3143279,
            "OptionName": "cupidatat nostrud incididunt",
            "OptionSelected": false,
            "OptionHide": true,
            "OptionValue": 1738681.0807540417,
            "OptionPartNumber": "incididunt proident",
            "OptionSorting": 40740370.32994321,
            "OptionImagePath": "aute in aliqua in",
            "OptionBundleCatalogId": 45223386,
            "OptionBundleQuantity": 2530208
          },
          {
            "OptionID": -42300898,
            "OptionName": "aliqua sint tempor",
            "OptionSelected": false,
            "OptionHide": false,
            "OptionValue": -25188059.688181758,
            "OptionPartNumber": "veniam velit dolor et",
            "OptionSorting": -98699714.38869634,
            "OptionImagePath": "sed proident pariatur",
            "OptionBundleCatalogId": 74974750,
            "OptionBundleQuantity": -60848785
          },
          {
            "OptionID": -89184301,
            "OptionName": "sunt est",
            "OptionSelected": true,
            "OptionHide": false,
            "OptionValue": 27388935.985263303,
            "OptionPartNumber": "aute in",
            "OptionSorting": -27452174.924212262,
            "OptionImagePath": "esse officia Duis incididunt",
            "OptionBundleCatalogId": 54716178,
            "OptionBundleQuantity": 63860042
          }
        ]
      },
      {
        "OptionSetID": -12791947,
        "OptionSetName": "do minim",
        "OptionSorting": 18885884.753000945,
        "OptionRequired": true,
        "OptionType": "ut sint p",
        "OptionURL": "sint consequat",
        "OptionAdditionalInformation": "cupidatat velit",
        "OptionSizeLimit": -22184438,
        "OptionList": [
          {
            "OptionID": 21064730,
            "OptionName": "voluptate cupidatat reprehenderit aute proident",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": 77350367.07517052,
            "OptionPartNumber": "laborum dolore",
            "OptionSorting": -34955118.2123907,
            "OptionImagePath": "labore id adipisicing",
            "OptionBundleCatalogId": 21992519,
            "OptionBundleQuantity": -84122959
          },
          {
            "OptionID": 74872942,
            "OptionName": "incididunt in fugiat",
            "OptionSelected": false,
            "OptionHide": false,
            "OptionValue": 42897099.61011207,
            "OptionPartNumber": "pariatur esse dolore do",
            "OptionSorting": 5766181.224910393,
            "OptionImagePath": "mollit ",
            "OptionBundleCatalogId": -29015869,
            "OptionBundleQuantity": -83486689
          },
          {
            "OptionID": -71714227,
            "OptionName": "aliqua dolore Ut non",
            "OptionSelected": false,
            "OptionHide": true,
            "OptionValue": 62015711.11286688,
            "OptionPartNumber": "commodo dolor fugiat eu",
            "OptionSorting": 68522351.24806389,
            "OptionImagePath": "adipisicing sed dolor",
            "OptionBundleCatalogId": 97557516,
            "OptionBundleQuantity": -43039536
          },
          {
            "OptionID": -67195843,
            "OptionName": "elit cillum in incididunt reprehenderit",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": -8456211.184706047,
            "OptionPartNumber": "sed qui in dolore",
            "OptionSorting": 28988692.003649727,
            "OptionImagePath": "incididunt minim",
            "OptionBundleCatalogId": -13553697,
            "OptionBundleQuantity": -49906785
          }
        ]
      }
    ],
    "Title": "minim cupidatat ipsum nisi",
    "CustomFileName": "ut deserunt",
    "MetaTags": "nulla ut culpa",
    "CategoryHeader": "cillum",
    "CategoryFooter": "consectetur nulla do sunt",
    "AdditionalKeywords": "ex esse cupidatat",
    "CategoryExternalIdsList": [
      {
        "ID": -48905284,
        "CategoryID": 65508538,
        "ExternalId1": "ea",
        "ExternalIdType": "ut cupidatat"
      }
    ]
  },
  {
    "CategoryID": 3242417,
    "CategoryName": "nostrud officia nisi",
    "Link": "Lorem minim fugiat",
    "CategoryDescription": "consectetur laborum amet sed",
    "CategoryIcon": "dolore voluptate cupidatat in",
    "CategoryMain": false,
    "CategoryParent": 17984540,
    "Sorting": 5752348,
    "Hide": true,
    "UserID": "sint elit Ut",
    "LastUpdate": "1993-09-25T05:44:37.159Z",
    "CategoryMenuGroup": 84461561,
    "HomeSpecialCategory": true,
    "FilterCategory": false,
    "TemplateCategoryPage": -13141093,
    "DefaultProductsSorting": -49122385,
    "SubcategoryColumnsCategorySpecials": 21172699,
    "ProductColumnsCategorySpecials": 3672582,
    "ProductColumnsCategoryGeneralItems": -93345850,
    "ItemsPerPageCategorySpecialItems": 24775260,
    "ItemsPerPageCategoryGeneralItems": -46950751,
    "DisplayTypeCategorySpecialItems": -32369927,
    "DisplayTypeCategoryGeneralProducts": 1183740,
    "AllowAccess": "labore esse mollit tempor",
    "OnFailRedirectTo": "do Lorem dolore nulla",
    "HideLeftBar": true,
    "HideRightBar": true,
    "HideTopMenu": false,
    "SmartCategories": 63407332,
    "SmartCategoriesSearchKeyword": "eu velit",
    "SmartCategoriesLinkTarget": "anim ",
    "TemplateProductPage": 18547652,
    "ProductColumnsRelatedProducts": -91453517,
    "ProductColumnsUpsellProducts": 87697311,
    "DisplayTypeRelatedItems": 36829773,
    "DisplayTypeUpsellItems": -39874858,
    "OptionSetList": [
      {
        "OptionSetID": 6657161,
        "OptionSetName": "n",
        "OptionSorting": 58223432.29291743,
        "OptionRequired": false,
        "OptionType": "si",
        "OptionURL": "Ut dolore amet",
        "OptionAdditionalInformation": "nulla in",
        "OptionSizeLimit": 9281594,
        "OptionList": [
          {
            "OptionID": -21999234,
            "OptionName": "ipsum esse tempor quis in",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": -94257794.26250757,
            "OptionPartNumber": "velit consectetur dolor elit aut",
            "OptionSorting": -47884164.807351135,
            "OptionImagePath": "in pariatur",
            "OptionBundleCatalogId": -59682969,
            "OptionBundleQuantity": 39968379
          },
          {
            "OptionID": -41599054,
            "OptionName": "Excepteur in",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": 88460500.03025067,
            "OptionPartNumber": "ex",
            "OptionSorting": -60799611.630514994,
            "OptionImagePath": "Ut labore consequat Excepteur pariatur",
            "OptionBundleCatalogId": 26044585,
            "OptionBundleQuantity": -61396903
          }
        ]
      },
      {
        "OptionSetID": -2612978,
        "OptionSetName": "elit sunt deserunt aliquip ea",
        "OptionSorting": -75889360.33887927,
        "OptionRequired": true,
        "OptionType": "id Exce",
        "OptionURL": "qui",
        "OptionAdditionalInformation": "tem",
        "OptionSizeLimit": 75732732,
        "OptionList": [
          {
            "OptionID": 13353699,
            "OptionName": "officia incididunt nisi",
            "OptionSelected": false,
            "OptionHide": false,
            "OptionValue": 34447909.855547994,
            "OptionPartNumber": "velit veniam",
            "OptionSorting": 78162270.74954227,
            "OptionImagePath": "in c",
            "OptionBundleCatalogId": -71651929,
            "OptionBundleQuantity": 51939266
          },
          {
            "OptionID": 53356018,
            "OptionName": "cillum officia eiusmod",
            "OptionSelected": false,
            "OptionHide": false,
            "OptionValue": 18957100.081903234,
            "OptionPartNumber": "ea et",
            "OptionSorting": -47754403.98882509,
            "OptionImagePath": "anim labore ut",
            "OptionBundleCatalogId": -25170081,
            "OptionBundleQuantity": 39947065
          },
          {
            "OptionID": -51797199,
            "OptionName": "consectetur mollit dolore",
            "OptionSelected": false,
            "OptionHide": true,
            "OptionValue": -65184861.41719211,
            "OptionPartNumber": "ut labore amet culpa",
            "OptionSorting": -47972148.37624497,
            "OptionImagePath": "non nostrud ipsum",
            "OptionBundleCatalogId": 60457392,
            "OptionBundleQuantity": -93173967
          },
          {
            "OptionID": -22995896,
            "OptionName": "pariatur Excepteur",
            "OptionSelected": true,
            "OptionHide": false,
            "OptionValue": -7901532.5541561395,
            "OptionPartNumber": "voluptate dolore sunt",
            "OptionSorting": -69735210.66052553,
            "OptionImagePath": "labore fugiat",
            "OptionBundleCatalogId": 88728383,
            "OptionBundleQuantity": -38887245
          },
          {
            "OptionID": 96907822,
            "OptionName": "do laborum",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": -39720514.71177855,
            "OptionPartNumber": "eiusmod ipsum dolor aute esse",
            "OptionSorting": 73978711.2845327,
            "OptionImagePath": "ad enim esse",
            "OptionBundleCatalogId": 84775025,
            "OptionBundleQuantity": -38487117
          }
        ]
      },
      {
        "OptionSetID": -10277117,
        "OptionSetName": "nulla ea ad aliquip Ut",
        "OptionSorting": 57219273.85353941,
        "OptionRequired": false,
        "OptionType": "ni",
        "OptionURL": "sint",
        "OptionAdditionalInformation": "nisi Lorem fugiat",
        "OptionSizeLimit": 32849644,
        "OptionList": [
          {
            "OptionID": -253227,
            "OptionName": "labore cillum cupidatat",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": 83843550.03509429,
            "OptionPartNumber": "Excepteur e",
            "OptionSorting": -65213580.39029486,
            "OptionImagePath": "cupidatat",
            "OptionBundleCatalogId": -25499690,
            "OptionBundleQuantity": 23387213
          },
          {
            "OptionID": 98496861,
            "OptionName": "in ullamco",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": -58826484.70863989,
            "OptionPartNumber": "consectetur nostrud do",
            "OptionSorting": -88084823.3866431,
            "OptionImagePath": "dolor mollit dolore",
            "OptionBundleCatalogId": -71423397,
            "OptionBundleQuantity": -13269372
          },
          {
            "OptionID": -68930299,
            "OptionName": "ut pariatur Duis",
            "OptionSelected": false,
            "OptionHide": false,
            "OptionValue": -42229190.09528532,
            "OptionPartNumber": "Lorem minim in",
            "OptionSorting": -18335575.258460328,
            "OptionImagePath": "voluptate elit ea nostrud anim",
            "OptionBundleCatalogId": 22487598,
            "OptionBundleQuantity": 61337346
          },
          {
            "OptionID": 12064789,
            "OptionName": "mollit in",
            "OptionSelected": true,
            "OptionHide": false,
            "OptionValue": 44082106.65290761,
            "OptionPartNumber": "aute cillum consequat",
            "OptionSorting": -72382902.38076086,
            "OptionImagePath": "Excepteur",
            "OptionBundleCatalogId": 54785887,
            "OptionBundleQuantity": 66991923
          }
        ]
      }
    ],
    "Title": "occaecat laborum Excepteur ut",
    "CustomFileName": "in minim",
    "MetaTags": "tempor fugiat laborum nulla in",
    "CategoryHeader": "voluptate reprehenderit",
    "CategoryFooter": "ad in",
    "AdditionalKeywords": "qui sed sit",
    "CategoryExternalIdsList": [
      {
        "ID": 21740349,
        "CategoryID": -93114626,
        "ExternalId1": "aliquip non deserunt reprehenderit",
        "ExternalIdType": "in amet pariatur exercitation dolor"
      },
      {
        "ID": 65972065,
        "CategoryID": -88569652,
        "ExternalId1": "ipsum ad nostrud mollit",
        "ExternalIdType": "ullamco Duis exercitation"
      },
      {
        "ID": -64571079,
        "CategoryID": 21800531,
        "ExternalId1": "Excepteur incididunt dolore ullamco",
        "ExternalIdType": ""
      }
    ]
  }
]'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Categories', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  [
    {
      "CategoryID": 20568772,
      "CategoryName": "nostrud officia laboris commodo sit",
      "Link": "sunt velit",
      "CategoryDescription": "adipisicing commodo incididunt eu irure",
      "CategoryIcon": "commodo dolor irure",
      "CategoryMain": true,
      "CategoryParent": -40250046,
      "Sorting": -4347994,
      "Hide": true,
      "UserID": "laborum reprehenderit minim",
      "LastUpdate": "1977-03-25T23:14:41.941Z",
      "CategoryMenuGroup": 67688871,
      "HomeSpecialCategory": false,
      "FilterCategory": true,
      "TemplateCategoryPage": 8611143,
      "DefaultProductsSorting": 10991548,
      "SubcategoryColumnsCategorySpecials": -10753710,
      "ProductColumnsCategorySpecials": -26970234,
      "ProductColumnsCategoryGeneralItems": 86802777,
      "ItemsPerPageCategorySpecialItems": 88544527,
      "ItemsPerPageCategoryGeneralItems": 24167595,
      "DisplayTypeCategorySpecialItems": -32263812,
      "DisplayTypeCategoryGeneralProducts": 47126883,
      "AllowAccess": "ut velit aliquip sint ea",
      "OnFailRedirectTo": "et sed",
      "HideLeftBar": false,
      "HideRightBar": false,
      "HideTopMenu": false,
      "SmartCategories": -55392261,
      "SmartCategoriesSearchKeyword": "et do ut quis",
      "SmartCategoriesLinkTarget": "do veniam labor",
      "TemplateProductPage": 11334197,
      "ProductColumnsRelatedProducts": 17546575,
      "ProductColumnsUpsellProducts": 70149168,
      "DisplayTypeRelatedItems": -88273472,
      "DisplayTypeUpsellItems": 34052311,
      "OptionSetList": [
        {
          "OptionSetID": -75731084,
          "OptionSetName": "voluptate sed quis et",
          "OptionSorting": -96539508.41777772,
          "OptionRequired": true,
          "OptionType": "",
          "OptionURL": "do amet",
          "OptionAdditionalInformation": "occaecat",
          "OptionSizeLimit": 5672833,
          "OptionList": [
            {
              "OptionID": -75887427,
              "OptionName": "labore deserunt laborum Duis",
              "OptionSelected": false,
              "OptionHide": true,
              "OptionValue": -59937182.77688549,
              "OptionPartNumber": "eiusmod ad nostrud labore cupidatat",
              "OptionSorting": 86071948.6004144,
              "OptionImagePath": "pariatur Excepteur",
              "OptionBundleCatalogId": -60711731,
              "OptionBundleQuantity": 30673284
            }
          ]
        },
        {
          "OptionSetID": -31955416,
          "OptionSetName": "quis eiusmod",
          "OptionSorting": -66348953.76952237,
          "OptionRequired": false,
          "OptionType": "aliquip i",
          "OptionURL": "elit do",
          "OptionAdditionalInformation": "sit pariatur",
          "OptionSizeLimit": -41589887,
          "OptionList": [
            {
              "OptionID": 25015635,
              "OptionName": "dolore ut nulla",
              "OptionSelected": false,
              "OptionHide": false,
              "OptionValue": -33072882.332152046,
              "OptionPartNumber": "commodo ut",
              "OptionSorting": 90530102.89804876,
              "OptionImagePath": "deserunt ullamco aute",
              "OptionBundleCatalogId": -89959324,
              "OptionBundleQuantity": -22023584
            },
            {
              "OptionID": 97324761,
              "OptionName": "ex voluptate pariatur elit",
              "OptionSelected": false,
              "OptionHide": false,
              "OptionValue": 72722283.53238845,
              "OptionPartNumber": "ad tempor",
              "OptionSorting": 23016543.367841795,
              "OptionImagePath": "ad cupidatat eiusmod aute",
              "OptionBundleCatalogId": -69043452,
              "OptionBundleQuantity": 43822225
            }
          ]
        }
      ],
      "Title": "in cupidatat fugiat",
      "CustomFileName": "Excepteur Lorem ut officia",
      "MetaTags": "officia ullamco sit ut",
      "CategoryHeader": "sunt labore in aliquip dolore",
      "CategoryFooter": "culpa id reprehenderit in",
      "AdditionalKeywords": "cillum culpa",
      "CategoryExternalIdsList": [
        {
          "ID": 67730448,
          "CategoryID": -16074942,
          "ExternalId1": "et commodo",
          "ExternalIdType": "laboris ut ea proident id"
        },
        {
          "ID": 27537116,
          "CategoryID": -51137858,
          "ExternalId1": "est in mollit enim",
          "ExternalIdType": "consectetur Ut"
        },
        {
          "ID": -85502322,
          "CategoryID": -60783293,
          "ExternalId1": "eu pariatur",
          "ExternalIdType": "mollit incididunt"
        }
      ]
    },
    {
      "CategoryID": -38231792,
      "CategoryName": "mollit dolore dolor labore",
      "Link": "nostrud pariatur",
      "CategoryDescription": "non fugiat magna n",
      "CategoryIcon": "ut",
      "CategoryMain": false,
      "CategoryParent": 22678387,
      "Sorting": 26006029,
      "Hide": true,
      "UserID": "labore f",
      "LastUpdate": "1993-03-12T03:37:23.828Z",
      "CategoryMenuGroup": 39662559,
      "HomeSpecialCategory": false,
      "FilterCategory": true,
      "TemplateCategoryPage": 17571355,
      "DefaultProductsSorting": 8628776,
      "SubcategoryColumnsCategorySpecials": 61765045,
      "ProductColumnsCategorySpecials": 2901356,
      "ProductColumnsCategoryGeneralItems": 65491452,
      "ItemsPerPageCategorySpecialItems": 44148399,
      "ItemsPerPageCategoryGeneralItems": 74711849,
      "DisplayTypeCategorySpecialItems": -80748538,
      "DisplayTypeCategoryGeneralProducts": 7803513,
      "AllowAccess": "cillum laborum minim",
      "OnFailRedirectTo": "ad dolore",
      "HideLeftBar": false,
      "HideRightBar": false,
      "HideTopMenu": false,
      "SmartCategories": -31939948,
      "SmartCategoriesSearchKeyword": "dolor officia laborum",
      "SmartCategoriesLinkTarget": "magna adipisicing id",
      "TemplateProductPage": -77171173,
      "ProductColumnsRelatedProducts": 7898074,
      "ProductColumnsUpsellProducts": 28531767,
      "DisplayTypeRelatedItems": -4169152,
      "DisplayTypeUpsellItems": 88298725,
      "OptionSetList": [
        {
          "OptionSetID": 74837456,
          "OptionSetName": "labore dolor exercitation",
          "OptionSorting": 48091622.23854077,
          "OptionRequired": false,
          "OptionType": "nostr",
          "OptionURL": "quis non dolor",
          "OptionAdditionalInformation": "aute laborum reprehenderit",
          "OptionSizeLimit": 72129784,
          "OptionList": [
            {
              "OptionID": 60722654,
              "OptionName": "dolor ni",
              "OptionSelected": true,
              "OptionHide": true,
              "OptionValue": -67262445.84641537,
              "OptionPartNumber": "sint consectetur consequat ",
              "OptionSorting": 99928287.40942946,
              "OptionImagePath": "ea",
              "OptionBundleCatalogId": 73879382,
              "OptionBundleQuantity": -7396796
            },
            {
              "OptionID": 83228897,
              "OptionName": "non et tempor elit",
              "OptionSelected": false,
              "OptionHide": true,
              "OptionValue": -7083094.560462117,
              "OptionPartNumber": "officia irure null",
              "OptionSorting": -80081827.88170063,
              "OptionImagePath": "non",
              "OptionBundleCatalogId": -59869594,
              "OptionBundleQuantity": 9703570
            },
            {
              "OptionID": -92350055,
              "OptionName": "nisi pariatur",
              "OptionSelected": false,
              "OptionHide": false,
              "OptionValue": -90332628.25495316,
              "OptionPartNumber": "tempor Duis aliquip eiusmod",
              "OptionSorting": -62219206.823874585,
              "OptionImagePath": "nostrud",
              "OptionBundleCatalogId": -51145970,
              "OptionBundleQuantity": 96302810
            }
          ]
        },
        {
          "OptionSetID": 46761863,
          "OptionSetName": "nisi incididunt",
          "OptionSorting": -70396605.13459216,
          "OptionRequired": true,
          "OptionType": "consequ",
          "OptionURL": "occaecat laborum exercitation",
          "OptionAdditionalInformation": "Ut ipsum",
          "OptionSizeLimit": -602532,
          "OptionList": [
            {
              "OptionID": 31182779,
              "OptionName": "anim tempor amet eiusmod reprehenderit",
              "OptionSelected": true,
              "OptionHide": false,
              "OptionValue": -56774730.08607312,
              "OptionPartNumber": "Duis sunt dolor irure dolor",
              "OptionSorting": 91280165.61374578,
              "OptionImagePath": "incididunt",
              "OptionBundleCatalogId": -47920121,
              "OptionBundleQuantity": -79760433
            },
            {
              "OptionID": 72655906,
              "OptionName": "ipsum enim",
              "OptionSelected": true,
              "OptionHide": false,
              "OptionValue": 47679301.041104525,
              "OptionPartNumber": "laboris officia ",
              "OptionSorting": -25101021.47573021,
              "OptionImagePath": "enim magna elit qui veniam",
              "OptionBundleCatalogId": -19385029,
              "OptionBundleQuantity": -5099530
            }
          ]
        },
        {
          "OptionSetID": -45541705,
          "OptionSetName": "ut commodo",
          "OptionSorting": 59545650.19917911,
          "OptionRequired": true,
          "OptionType": "qu",
          "OptionURL": "occaecat nostrud sunt incididunt",
          "OptionAdditionalInformation": "quis aliqua cupidatat nostrud",
          "OptionSizeLimit": -84707790,
          "OptionList": [
            {
              "OptionID": -42423158,
              "OptionName": "Lorem tempor elit labore",
              "OptionSelected": true,
              "OptionHide": false,
              "OptionValue": 41695245.98499611,
              "OptionPartNumber": "laborum Duis velit et",
              "OptionSorting": -25473139.41574055,
              "OptionImagePath": "pariatur",
              "OptionBundleCatalogId": 68685275,
              "OptionBundleQuantity": -45761768
            },
            {
              "OptionID": -80021263,
              "OptionName": "dolore eu tempor occaecat",
              "OptionSelected": false,
              "OptionHide": true,
              "OptionValue": 65276237.620652765,
              "OptionPartNumber": "in consequat non eiusm",
              "OptionSorting": -67075692.390820764,
              "OptionImagePath": "eiusmod in irure",
              "OptionBundleCatalogId": -31815606,
              "OptionBundleQuantity": -30526227
            },
            {
              "OptionID": 30644454,
              "OptionName": "ut quis esse",
              "OptionSelected": true,
              "OptionHide": true,
              "OptionValue": 91381760.92553037,
              "OptionPartNumber": "sunt Ut et anim",
              "OptionSorting": -14140415.486470565,
              "OptionImagePath": "consequat anim reprehenderit id non",
              "OptionBundleCatalogId": 71435497,
              "OptionBundleQuantity": 92049760
            }
          ]
        },
        {
          "OptionSetID": -26151559,
          "OptionSetName": "et Ut ullamco esse nulla",
          "OptionSorting": -17582981.37645018,
          "OptionRequired": true,
          "OptionType": "sunt",
          "OptionURL": "velit anim et",
          "OptionAdditionalInformation": "elit laborum ad",
          "OptionSizeLimit": -67079179,
          "OptionList": [
            {
              "OptionID": -3143279,
              "OptionName": "cupidatat nostrud incididunt",
              "OptionSelected": false,
              "OptionHide": true,
              "OptionValue": 1738681.0807540417,
              "OptionPartNumber": "incididunt proident",
              "OptionSorting": 40740370.32994321,
              "OptionImagePath": "aute in aliqua in",
              "OptionBundleCatalogId": 45223386,
              "OptionBundleQuantity": 2530208
            },
            {
              "OptionID": -42300898,
              "OptionName": "aliqua sint tempor",
              "OptionSelected": false,
              "OptionHide": false,
              "OptionValue": -25188059.688181758,
              "OptionPartNumber": "veniam velit dolor et",
              "OptionSorting": -98699714.38869634,
              "OptionImagePath": "sed proident pariatur",
              "OptionBundleCatalogId": 74974750,
              "OptionBundleQuantity": -60848785
            },
            {
              "OptionID": -89184301,
              "OptionName": "sunt est",
              "OptionSelected": true,
              "OptionHide": false,
              "OptionValue": 27388935.985263303,
              "OptionPartNumber": "aute in",
              "OptionSorting": -27452174.924212262,
              "OptionImagePath": "esse officia Duis incididunt",
              "OptionBundleCatalogId": 54716178,
              "OptionBundleQuantity": 63860042
            }
          ]
        },
        {
          "OptionSetID": -12791947,
          "OptionSetName": "do minim",
          "OptionSorting": 18885884.753000945,
          "OptionRequired": true,
          "OptionType": "ut sint p",
          "OptionURL": "sint consequat",
          "OptionAdditionalInformation": "cupidatat velit",
          "OptionSizeLimit": -22184438,
          "OptionList": [
            {
              "OptionID": 21064730,
              "OptionName": "voluptate cupidatat reprehenderit aute proident",
              "OptionSelected": true,
              "OptionHide": true,
              "OptionValue": 77350367.07517052,
              "OptionPartNumber": "laborum dolore",
              "OptionSorting": -34955118.2123907,
              "OptionImagePath": "labore id adipisicing",
              "OptionBundleCatalogId": 21992519,
              "OptionBundleQuantity": -84122959
            },
            {
              "OptionID": 74872942,
              "OptionName": "incididunt in fugiat",
              "OptionSelected": false,
              "OptionHide": false,
              "OptionValue": 42897099.61011207,
              "OptionPartNumber": "pariatur esse dolore do",
              "OptionSorting": 5766181.224910393,
              "OptionImagePath": "mollit ",
              "OptionBundleCatalogId": -29015869,
              "OptionBundleQuantity": -83486689
            },
            {
              "OptionID": -71714227,
              "OptionName": "aliqua dolore Ut non",
              "OptionSelected": false,
              "OptionHide": true,
              "OptionValue": 62015711.11286688,
              "OptionPartNumber": "commodo dolor fugiat eu",
              "OptionSorting": 68522351.24806389,
              "OptionImagePath": "adipisicing sed dolor",
              "OptionBundleCatalogId": 97557516,
              "OptionBundleQuantity": -43039536
            },
            {
              "OptionID": -67195843,
              "OptionName": "elit cillum in incididunt reprehenderit",
              "OptionSelected": true,
              "OptionHide": true,
              "OptionValue": -8456211.184706047,
              "OptionPartNumber": "sed qui in dolore",
              "OptionSorting": 28988692.003649727,
              "OptionImagePath": "incididunt minim",
              "OptionBundleCatalogId": -13553697,
              "OptionBundleQuantity": -49906785
            }
          ]
        }
      ],
      "Title": "minim cupidatat ipsum nisi",
      "CustomFileName": "ut deserunt",
      "MetaTags": "nulla ut culpa",
      "CategoryHeader": "cillum",
      "CategoryFooter": "consectetur nulla do sunt",
      "AdditionalKeywords": "ex esse cupidatat",
      "CategoryExternalIdsList": [
        {
          "ID": -48905284,
          "CategoryID": 65508538,
          "ExternalId1": "ea",
          "ExternalIdType": "ut cupidatat"
        }
      ]
    },
    {
      "CategoryID": 3242417,
      "CategoryName": "nostrud officia nisi",
      "Link": "Lorem minim fugiat",
      "CategoryDescription": "consectetur laborum amet sed",
      "CategoryIcon": "dolore voluptate cupidatat in",
      "CategoryMain": false,
      "CategoryParent": 17984540,
      "Sorting": 5752348,
      "Hide": true,
      "UserID": "sint elit Ut",
      "LastUpdate": "1993-09-25T05:44:37.159Z",
      "CategoryMenuGroup": 84461561,
      "HomeSpecialCategory": true,
      "FilterCategory": false,
      "TemplateCategoryPage": -13141093,
      "DefaultProductsSorting": -49122385,
      "SubcategoryColumnsCategorySpecials": 21172699,
      "ProductColumnsCategorySpecials": 3672582,
      "ProductColumnsCategoryGeneralItems": -93345850,
      "ItemsPerPageCategorySpecialItems": 24775260,
      "ItemsPerPageCategoryGeneralItems": -46950751,
      "DisplayTypeCategorySpecialItems": -32369927,
      "DisplayTypeCategoryGeneralProducts": 1183740,
      "AllowAccess": "labore esse mollit tempor",
      "OnFailRedirectTo": "do Lorem dolore nulla",
      "HideLeftBar": true,
      "HideRightBar": true,
      "HideTopMenu": false,
      "SmartCategories": 63407332,
      "SmartCategoriesSearchKeyword": "eu velit",
      "SmartCategoriesLinkTarget": "anim ",
      "TemplateProductPage": 18547652,
      "ProductColumnsRelatedProducts": -91453517,
      "ProductColumnsUpsellProducts": 87697311,
      "DisplayTypeRelatedItems": 36829773,
      "DisplayTypeUpsellItems": -39874858,
      "OptionSetList": [
        {
          "OptionSetID": 6657161,
          "OptionSetName": "n",
          "OptionSorting": 58223432.29291743,
          "OptionRequired": false,
          "OptionType": "si",
          "OptionURL": "Ut dolore amet",
          "OptionAdditionalInformation": "nulla in",
          "OptionSizeLimit": 9281594,
          "OptionList": [
            {
              "OptionID": -21999234,
              "OptionName": "ipsum esse tempor quis in",
              "OptionSelected": true,
              "OptionHide": true,
              "OptionValue": -94257794.26250757,
              "OptionPartNumber": "velit consectetur dolor elit aut",
              "OptionSorting": -47884164.807351135,
              "OptionImagePath": "in pariatur",
              "OptionBundleCatalogId": -59682969,
              "OptionBundleQuantity": 39968379
            },
            {
              "OptionID": -41599054,
              "OptionName": "Excepteur in",
              "OptionSelected": true,
              "OptionHide": true,
              "OptionValue": 88460500.03025067,
              "OptionPartNumber": "ex",
              "OptionSorting": -60799611.630514994,
              "OptionImagePath": "Ut labore consequat Excepteur pariatur",
              "OptionBundleCatalogId": 26044585,
              "OptionBundleQuantity": -61396903
            }
          ]
        },
        {
          "OptionSetID": -2612978,
          "OptionSetName": "elit sunt deserunt aliquip ea",
          "OptionSorting": -75889360.33887927,
          "OptionRequired": true,
          "OptionType": "id Exce",
          "OptionURL": "qui",
          "OptionAdditionalInformation": "tem",
          "OptionSizeLimit": 75732732,
          "OptionList": [
            {
              "OptionID": 13353699,
              "OptionName": "officia incididunt nisi",
              "OptionSelected": false,
              "OptionHide": false,
              "OptionValue": 34447909.855547994,
              "OptionPartNumber": "velit veniam",
              "OptionSorting": 78162270.74954227,
              "OptionImagePath": "in c",
              "OptionBundleCatalogId": -71651929,
              "OptionBundleQuantity": 51939266
            },
            {
              "OptionID": 53356018,
              "OptionName": "cillum officia eiusmod",
              "OptionSelected": false,
              "OptionHide": false,
              "OptionValue": 18957100.081903234,
              "OptionPartNumber": "ea et",
              "OptionSorting": -47754403.98882509,
              "OptionImagePath": "anim labore ut",
              "OptionBundleCatalogId": -25170081,
              "OptionBundleQuantity": 39947065
            },
            {
              "OptionID": -51797199,
              "OptionName": "consectetur mollit dolore",
              "OptionSelected": false,
              "OptionHide": true,
              "OptionValue": -65184861.41719211,
              "OptionPartNumber": "ut labore amet culpa",
              "OptionSorting": -47972148.37624497,
              "OptionImagePath": "non nostrud ipsum",
              "OptionBundleCatalogId": 60457392,
              "OptionBundleQuantity": -93173967
            },
            {
              "OptionID": -22995896,
              "OptionName": "pariatur Excepteur",
              "OptionSelected": true,
              "OptionHide": false,
              "OptionValue": -7901532.5541561395,
              "OptionPartNumber": "voluptate dolore sunt",
              "OptionSorting": -69735210.66052553,
              "OptionImagePath": "labore fugiat",
              "OptionBundleCatalogId": 88728383,
              "OptionBundleQuantity": -38887245
            },
            {
              "OptionID": 96907822,
              "OptionName": "do laborum",
              "OptionSelected": true,
              "OptionHide": true,
              "OptionValue": -39720514.71177855,
              "OptionPartNumber": "eiusmod ipsum dolor aute esse",
              "OptionSorting": 73978711.2845327,
              "OptionImagePath": "ad enim esse",
              "OptionBundleCatalogId": 84775025,
              "OptionBundleQuantity": -38487117
            }
          ]
        },
        {
          "OptionSetID": -10277117,
          "OptionSetName": "nulla ea ad aliquip Ut",
          "OptionSorting": 57219273.85353941,
          "OptionRequired": false,
          "OptionType": "ni",
          "OptionURL": "sint",
          "OptionAdditionalInformation": "nisi Lorem fugiat",
          "OptionSizeLimit": 32849644,
          "OptionList": [
            {
              "OptionID": -253227,
              "OptionName": "labore cillum cupidatat",
              "OptionSelected": true,
              "OptionHide": true,
              "OptionValue": 83843550.03509429,
              "OptionPartNumber": "Excepteur e",
              "OptionSorting": -65213580.39029486,
              "OptionImagePath": "cupidatat",
              "OptionBundleCatalogId": -25499690,
              "OptionBundleQuantity": 23387213
            },
            {
              "OptionID": 98496861,
              "OptionName": "in ullamco",
              "OptionSelected": true,
              "OptionHide": true,
              "OptionValue": -58826484.70863989,
              "OptionPartNumber": "consectetur nostrud do",
              "OptionSorting": -88084823.3866431,
              "OptionImagePath": "dolor mollit dolore",
              "OptionBundleCatalogId": -71423397,
              "OptionBundleQuantity": -13269372
            },
            {
              "OptionID": -68930299,
              "OptionName": "ut pariatur Duis",
              "OptionSelected": false,
              "OptionHide": false,
              "OptionValue": -42229190.09528532,
              "OptionPartNumber": "Lorem minim in",
              "OptionSorting": -18335575.258460328,
              "OptionImagePath": "voluptate elit ea nostrud anim",
              "OptionBundleCatalogId": 22487598,
              "OptionBundleQuantity": 61337346
            },
            {
              "OptionID": 12064789,
              "OptionName": "mollit in",
              "OptionSelected": true,
              "OptionHide": false,
              "OptionValue": 44082106.65290761,
              "OptionPartNumber": "aute cillum consequat",
              "OptionSorting": -72382902.38076086,
              "OptionImagePath": "Excepteur",
              "OptionBundleCatalogId": 54785887,
              "OptionBundleQuantity": 66991923
            }
          ]
        }
      ],
      "Title": "occaecat laborum Excepteur ut",
      "CustomFileName": "in minim",
      "MetaTags": "tempor fugiat laborum nulla in",
      "CategoryHeader": "voluptate reprehenderit",
      "CategoryFooter": "ad in",
      "AdditionalKeywords": "qui sed sit",
      "CategoryExternalIdsList": [
        {
          "ID": 21740349,
          "CategoryID": -93114626,
          "ExternalId1": "aliquip non deserunt reprehenderit",
          "ExternalIdType": "in amet pariatur exercitation dolor"
        },
        {
          "ID": 65972065,
          "CategoryID": -88569652,
          "ExternalId1": "ipsum ad nostrud mollit",
          "ExternalIdType": "ullamco Duis exercitation"
        },
        {
          "ID": -64571079,
          "CategoryID": 21800531,
          "ExternalId1": "Excepteur incididunt dolore ullamco",
          "ExternalIdType": ""
        }
      ]
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Categories', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"CategoryID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

This method is used to update multiple category records in the database. No `{categoryid}` parameters should be included in the URL. See [Data Structures](#category-object) for more information on the category object.

<aside class="warning">
Please note: when sending information in any of the following keys of the category array, the information contained in these keys will REPLACE the existing information, and not update it. To update information within these keys without replacing existing information, use the specific web service for those items (e.g. /Category/{categoryid}/Options):
</aside>

* OptionSetList - If you do not want to replace all options, use [/Category/{categoryid}/Options](#put-update-options-in-a-specific-category) instead.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Categories`

#### Responses and errors

Response Code | Description
------------- | ---------
200 | Successful response code. Category has been updated.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified category does not exist.

### Update a single category record

> To update a category in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#category-object) for more information on the category object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"CategoryID\": 69175899,
  \"CategoryName\": \"ut qui\",
  \"Link\": \"sed adipisicing esse\",
  \"CategoryDescription\": \"aliqua dolore id adipisicing\",
  \"CategoryIcon\": \"ea culpa voluptate dolor minim\",
  \"CategoryMain\": true,
  \"CategoryParent\": -27199819,
  \"Sorting\": -53529014,
  \"Hide\": false,
  \"UserID\": \"Ut i\",
  \"LastUpdate\": \"1990-10-01T11:44:56.624Z\",
  \"CategoryMenuGroup\": -31505679,
  \"HomeSpecialCategory\": false,
  \"FilterCategory\": true,
  \"TemplateCategoryPage\": 77953865,
  \"DefaultProductsSorting\": 35723360,
  \"SubcategoryColumnsCategorySpecials\": 87180518,
  \"ProductColumnsCategorySpecials\": -14365567,
  \"ProductColumnsCategoryGeneralItems\": 27200238,
  \"ItemsPerPageCategorySpecialItems\": 5936891,
  \"ItemsPerPageCategoryGeneralItems\": -79854373,
  \"DisplayTypeCategorySpecialItems\": 30267588,
  \"DisplayTypeCategoryGeneralProducts\": -22059936,
  \"AllowAccess\": \"sed pariatur cupidatat\",
  \"OnFailRedirectTo\": \"ipsum ut quis Ut\",
  \"HideLeftBar\": true,
  \"HideRightBar\": true,
  \"HideTopMenu\": false,
  \"SmartCategories\": 66738734,
  \"SmartCategoriesSearchKeyword\": \"ullamco mollit cupidatat Duis\",
  \"SmartCategoriesLinkTarget\": \"sint ut id\",
  \"TemplateProductPage\": 2009477,
  \"ProductColumnsRelatedProducts\": -96301429,
  \"ProductColumnsUpsellProducts\": 12334877,
  \"DisplayTypeRelatedItems\": 77617180,
  \"DisplayTypeUpsellItems\": -45598650,
  \"OptionSetList\": [
    {
      \"OptionSetID\": 70088967,
      \"OptionSetName\": \"mollit quis\",
      \"OptionSorting\": 11749573.000524908,
      \"OptionRequired\": true,
      \"OptionType\": \"a\",
      \"OptionURL\": \"labore tempor ea\",
      \"OptionAdditionalInformation\": \"cillum Excepteur in dolor\",
      \"OptionSizeLimit\": 50613888,
      \"OptionList\": [
        {
          \"OptionID\": -97494152,
          \"OptionName\": \"pariatur voluptate irure officia\",
          \"OptionSelected\": true,
          \"OptionHide\": false,
          \"OptionValue\": 88859978.17521805,
          \"OptionPartNumber\": \"s\",
          \"OptionSorting\": -84965145.30915457,
          \"OptionImagePath\": \"aliquip off\",
          \"OptionBundleCatalogId\": 3078766,
          \"OptionBundleQuantity\": 40969279
        },
        {
          \"OptionID\": 23476575,
          \"OptionName\": \"voluptate su\",
          \"OptionSelected\": false,
          \"OptionHide\": false,
          \"OptionValue\": -49265243.95810627,
          \"OptionPartNumber\": \"esse nisi ut eiusmod\",
          \"OptionSorting\": 47327456.09600505,
          \"OptionImagePath\": \"consequat veniam in cupidatat in\",
          \"OptionBundleCatalogId\": -37926045,
          \"OptionBundleQuantity\": -31843513
        }
      ]
    }
  ],
  \"Title\": \"sunt laboris\",
  \"CustomFileName\": \"sit sunt amet cupidat\",
  \"MetaTags\": \"sed irure laboris\",
  \"CategoryHeader\": \"cupidatat nostrud ad\",
  \"CategoryFooter\": \"qui proident magna elit\",
  \"AdditionalKeywords\": \"anim dolore cillum consequat\",
  \"CategoryExternalIdsList\": [
    {
      \"ID\": 45485065,
      \"CategoryID\": 88550296,
      \"ExternalId1\": \"dolore fugiat in quis\",
      \"ExternalIdType\": \"sit aliquip\"
    },
    {
      \"ID\": -17542385,
      \"CategoryID\": -20301673,
      \"ExternalId1\": \"sint fugiat non pariatur\",
      \"ExternalIdType\": \"ad iru\"
    },
    {
      \"ID\": -35489151,
      \"CategoryID\": 74393641,
      \"ExternalId1\": \"pariatur incididunt\",
      \"ExternalIdType\": \"cupidatat\"
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
  
    using (var content = new StringContent("{  \"CategoryID\": 69175899,  \"CategoryName\": \"ut qui\",  \"Link\": \"sed adipisicing esse\",  \"CategoryDescription\": \"aliqua dolore id adipisicing\",  \"CategoryIcon\": \"ea culpa voluptate dolor minim\",  \"CategoryMain\": true,  \"CategoryParent\": -27199819,  \"Sorting\": -53529014,  \"Hide\": false,  \"UserID\": \"Ut i\",  \"LastUpdate\": \"1990-10-01T11:44:56.624Z\",  \"CategoryMenuGroup\": -31505679,  \"HomeSpecialCategory\": false,  \"FilterCategory\": true,  \"TemplateCategoryPage\": 77953865,  \"DefaultProductsSorting\": 35723360,  \"SubcategoryColumnsCategorySpecials\": 87180518,  \"ProductColumnsCategorySpecials\": -14365567,  \"ProductColumnsCategoryGeneralItems\": 27200238,  \"ItemsPerPageCategorySpecialItems\": 5936891,  \"ItemsPerPageCategoryGeneralItems\": -79854373,  \"DisplayTypeCategorySpecialItems\": 30267588,  \"DisplayTypeCategoryGeneralProducts\": -22059936,  \"AllowAccess\": \"sed pariatur cupidatat\",  \"OnFailRedirectTo\": \"ipsum ut quis Ut\",  \"HideLeftBar\": true,  \"HideRightBar\": true,  \"HideTopMenu\": false,  \"SmartCategories\": 66738734,  \"SmartCategoriesSearchKeyword\": \"ullamco mollit cupidatat Duis\",  \"SmartCategoriesLinkTarget\": \"sint ut id\",  \"TemplateProductPage\": 2009477,  \"ProductColumnsRelatedProducts\": -96301429,  \"ProductColumnsUpsellProducts\": 12334877,  \"DisplayTypeRelatedItems\": 77617180,  \"DisplayTypeUpsellItems\": -45598650,  \"OptionSetList\": [    {      \"OptionSetID\": 70088967,      \"OptionSetName\": \"mollit quis\",      \"OptionSorting\": 11749573.000524908,      \"OptionRequired\": true,      \"OptionType\": \"a\",      \"OptionURL\": \"labore tempor ea\",      \"OptionAdditionalInformation\": \"cillum Excepteur in dolor\",      \"OptionSizeLimit\": 50613888,      \"OptionList\": [        {          \"OptionID\": -97494152,          \"OptionName\": \"pariatur voluptate irure officia\",          \"OptionSelected\": true,          \"OptionHide\": false,          \"OptionValue\": 88859978.17521805,          \"OptionPartNumber\": \"s\",          \"OptionSorting\": -84965145.30915457,          \"OptionImagePath\": \"aliquip off\",          \"OptionBundleCatalogId\": 3078766,          \"OptionBundleQuantity\": 40969279        },        {          \"OptionID\": 23476575,          \"OptionName\": \"voluptate su\",          \"OptionSelected\": false,          \"OptionHide\": false,          \"OptionValue\": -49265243.95810627,          \"OptionPartNumber\": \"esse nisi ut eiusmod\",          \"OptionSorting\": 47327456.09600505,          \"OptionImagePath\": \"consequat veniam in cupidatat in\",          \"OptionBundleCatalogId\": -37926045,          \"OptionBundleQuantity\": -31843513        }      ]    }  ],  \"Title\": \"sunt laboris\",  \"CustomFileName\": \"sit sunt amet cupidat\",  \"MetaTags\": \"sed irure laboris\",  \"CategoryHeader\": \"cupidatat nostrud ad\",  \"CategoryFooter\": \"qui proident magna elit\",  \"AdditionalKeywords\": \"anim dolore cillum consequat\",  \"CategoryExternalIdsList\": [    {      \"ID\": 45485065,      \"CategoryID\": 88550296,      \"ExternalId1\": \"dolore fugiat in quis\",      \"ExternalIdType\": \"sit aliquip\"    },    {      \"ID\": -17542385,      \"CategoryID\": -20301673,      \"ExternalId1\": \"sint fugiat non pariatur\",      \"ExternalIdType\": \"ad iru\"    },    {      \"ID\": -35489151,      \"CategoryID\": 74393641,      \"ExternalId1\": \"pariatur incididunt\",      \"ExternalIdType\": \"cupidatat\"    }  ]}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Categories/{categoryid}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}');

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
  'CategoryID': 69175899,
  'CategoryName': 'ut qui',
  'Link': 'sed adipisicing esse',
  'CategoryDescription': 'aliqua dolore id adipisicing',
  'CategoryIcon': 'ea culpa voluptate dolor minim',
  'CategoryMain': true,
  'CategoryParent': -27199819,
  'Sorting': -53529014,
  'Hide': false,
  'UserID': 'Ut i',
  'LastUpdate': '1990-10-01T11:44:56.624Z',
  'CategoryMenuGroup': -31505679,
  'HomeSpecialCategory': false,
  'FilterCategory': true,
  'TemplateCategoryPage': 77953865,
  'DefaultProductsSorting': 35723360,
  'SubcategoryColumnsCategorySpecials': 87180518,
  'ProductColumnsCategorySpecials': -14365567,
  'ProductColumnsCategoryGeneralItems': 27200238,
  'ItemsPerPageCategorySpecialItems': 5936891,
  'ItemsPerPageCategoryGeneralItems': -79854373,
  'DisplayTypeCategorySpecialItems': 30267588,
  'DisplayTypeCategoryGeneralProducts': -22059936,
  'AllowAccess': 'sed pariatur cupidatat',
  'OnFailRedirectTo': 'ipsum ut quis Ut',
  'HideLeftBar': true,
  'HideRightBar': true,
  'HideTopMenu': false,
  'SmartCategories': 66738734,
  'SmartCategoriesSearchKeyword': 'ullamco mollit cupidatat Duis',
  'SmartCategoriesLinkTarget': 'sint ut id',
  'TemplateProductPage': 2009477,
  'ProductColumnsRelatedProducts': -96301429,
  'ProductColumnsUpsellProducts': 12334877,
  'DisplayTypeRelatedItems': 77617180,
  'DisplayTypeUpsellItems': -45598650,
  'OptionSetList': [
    {
      'OptionSetID': 70088967,
      'OptionSetName': 'mollit quis',
      'OptionSorting': 11749573.000524908,
      'OptionRequired': true,
      'OptionType': 'a',
      'OptionURL': 'labore tempor ea',
      'OptionAdditionalInformation': 'cillum Excepteur in dolor',
      'OptionSizeLimit': 50613888,
      'OptionList': [
        {
          'OptionID': -97494152,
          'OptionName': 'pariatur voluptate irure officia',
          'OptionSelected': true,
          'OptionHide': false,
          'OptionValue': 88859978.17521805,
          'OptionPartNumber': 's',
          'OptionSorting': -84965145.30915457,
          'OptionImagePath': 'aliquip off',
          'OptionBundleCatalogId': 3078766,
          'OptionBundleQuantity': 40969279
        },
        {
          'OptionID': 23476575,
          'OptionName': 'voluptate su',
          'OptionSelected': false,
          'OptionHide': false,
          'OptionValue': -49265243.95810627,
          'OptionPartNumber': 'esse nisi ut eiusmod',
          'OptionSorting': 47327456.09600505,
          'OptionImagePath': 'consequat veniam in cupidatat in',
          'OptionBundleCatalogId': -37926045,
          'OptionBundleQuantity': -31843513
        }
      ]
    }
  ],
  'Title': 'sunt laboris',
  'CustomFileName': 'sit sunt amet cupidat',
  'MetaTags': 'sed irure laboris',
  'CategoryHeader': 'cupidatat nostrud ad',
  'CategoryFooter': 'qui proident magna elit',
  'AdditionalKeywords': 'anim dolore cillum consequat',
  'CategoryExternalIdsList': [
    {
      'ID': 45485065,
      'CategoryID': 88550296,
      'ExternalId1': 'dolore fugiat in quis',
      'ExternalIdType': 'sit aliquip'
    },
    {
      'ID': -17542385,
      'CategoryID': -20301673,
      'ExternalId1': 'sint fugiat non pariatur',
      'ExternalIdType': 'ad iru'
    },
    {
      'ID': -35489151,
      'CategoryID': 74393641,
      'ExternalId1': 'pariatur incididunt',
      'ExternalIdType': 'cupidatat'
    }
  ]
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "CategoryID": 69175899,
  "CategoryName": "ut qui",
  "Link": "sed adipisicing esse",
  "CategoryDescription": "aliqua dolore id adipisicing",
  "CategoryIcon": "ea culpa voluptate dolor minim",
  "CategoryMain": true,
  "CategoryParent": -27199819,
  "Sorting": -53529014,
  "Hide": false,
  "UserID": "Ut i",
  "LastUpdate": "1990-10-01T11:44:56.624Z",
  "CategoryMenuGroup": -31505679,
  "HomeSpecialCategory": false,
  "FilterCategory": true,
  "TemplateCategoryPage": 77953865,
  "DefaultProductsSorting": 35723360,
  "SubcategoryColumnsCategorySpecials": 87180518,
  "ProductColumnsCategorySpecials": -14365567,
  "ProductColumnsCategoryGeneralItems": 27200238,
  "ItemsPerPageCategorySpecialItems": 5936891,
  "ItemsPerPageCategoryGeneralItems": -79854373,
  "DisplayTypeCategorySpecialItems": 30267588,
  "DisplayTypeCategoryGeneralProducts": -22059936,
  "AllowAccess": "sed pariatur cupidatat",
  "OnFailRedirectTo": "ipsum ut quis Ut",
  "HideLeftBar": true,
  "HideRightBar": true,
  "HideTopMenu": false,
  "SmartCategories": 66738734,
  "SmartCategoriesSearchKeyword": "ullamco mollit cupidatat Duis",
  "SmartCategoriesLinkTarget": "sint ut id",
  "TemplateProductPage": 2009477,
  "ProductColumnsRelatedProducts": -96301429,
  "ProductColumnsUpsellProducts": 12334877,
  "DisplayTypeRelatedItems": 77617180,
  "DisplayTypeUpsellItems": -45598650,
  "OptionSetList": [
    {
      "OptionSetID": 70088967,
      "OptionSetName": "mollit quis",
      "OptionSorting": 11749573.000524908,
      "OptionRequired": true,
      "OptionType": "a",
      "OptionURL": "labore tempor ea",
      "OptionAdditionalInformation": "cillum Excepteur in dolor",
      "OptionSizeLimit": 50613888,
      "OptionList": [
        {
          "OptionID": -97494152,
          "OptionName": "pariatur voluptate irure officia",
          "OptionSelected": true,
          "OptionHide": false,
          "OptionValue": 88859978.17521805,
          "OptionPartNumber": "s",
          "OptionSorting": -84965145.30915457,
          "OptionImagePath": "aliquip off",
          "OptionBundleCatalogId": 3078766,
          "OptionBundleQuantity": 40969279
        },
        {
          "OptionID": 23476575,
          "OptionName": "voluptate su",
          "OptionSelected": false,
          "OptionHide": false,
          "OptionValue": -49265243.95810627,
          "OptionPartNumber": "esse nisi ut eiusmod",
          "OptionSorting": 47327456.09600505,
          "OptionImagePath": "consequat veniam in cupidatat in",
          "OptionBundleCatalogId": -37926045,
          "OptionBundleQuantity": -31843513
        }
      ]
    }
  ],
  "Title": "sunt laboris",
  "CustomFileName": "sit sunt amet cupidat",
  "MetaTags": "sed irure laboris",
  "CategoryHeader": "cupidatat nostrud ad",
  "CategoryFooter": "qui proident magna elit",
  "AdditionalKeywords": "anim dolore cillum consequat",
  "CategoryExternalIdsList": [
    {
      "ID": 45485065,
      "CategoryID": 88550296,
      "ExternalId1": "dolore fugiat in quis",
      "ExternalIdType": "sit aliquip"
    },
    {
      "ID": -17542385,
      "CategoryID": -20301673,
      "ExternalId1": "sint fugiat non pariatur",
      "ExternalIdType": "ad iru"
    },
    {
      "ID": -35489151,
      "CategoryID": 74393641,
      "ExternalId1": "pariatur incididunt",
      "ExternalIdType": "cupidatat"
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

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "CategoryID": 69175899,
    "CategoryName": "ut qui",
    "Link": "sed adipisicing esse",
    "CategoryDescription": "aliqua dolore id adipisicing",
    "CategoryIcon": "ea culpa voluptate dolor minim",
    "CategoryMain": true,
    "CategoryParent": -27199819,
    "Sorting": -53529014,
    "Hide": false,
    "UserID": "Ut i",
    "LastUpdate": "1990-10-01T11:44:56.624Z",
    "CategoryMenuGroup": -31505679,
    "HomeSpecialCategory": false,
    "FilterCategory": true,
    "TemplateCategoryPage": 77953865,
    "DefaultProductsSorting": 35723360,
    "SubcategoryColumnsCategorySpecials": 87180518,
    "ProductColumnsCategorySpecials": -14365567,
    "ProductColumnsCategoryGeneralItems": 27200238,
    "ItemsPerPageCategorySpecialItems": 5936891,
    "ItemsPerPageCategoryGeneralItems": -79854373,
    "DisplayTypeCategorySpecialItems": 30267588,
    "DisplayTypeCategoryGeneralProducts": -22059936,
    "AllowAccess": "sed pariatur cupidatat",
    "OnFailRedirectTo": "ipsum ut quis Ut",
    "HideLeftBar": true,
    "HideRightBar": true,
    "HideTopMenu": false,
    "SmartCategories": 66738734,
    "SmartCategoriesSearchKeyword": "ullamco mollit cupidatat Duis",
    "SmartCategoriesLinkTarget": "sint ut id",
    "TemplateProductPage": 2009477,
    "ProductColumnsRelatedProducts": -96301429,
    "ProductColumnsUpsellProducts": 12334877,
    "DisplayTypeRelatedItems": 77617180,
    "DisplayTypeUpsellItems": -45598650,
    "OptionSetList": [
      {
        "OptionSetID": 70088967,
        "OptionSetName": "mollit quis",
        "OptionSorting": 11749573.000524908,
        "OptionRequired": true,
        "OptionType": "a",
        "OptionURL": "labore tempor ea",
        "OptionAdditionalInformation": "cillum Excepteur in dolor",
        "OptionSizeLimit": 50613888,
        "OptionList": [
          {
            "OptionID": -97494152,
            "OptionName": "pariatur voluptate irure officia",
            "OptionSelected": true,
            "OptionHide": false,
            "OptionValue": 88859978.17521805,
            "OptionPartNumber": "s",
            "OptionSorting": -84965145.30915457,
            "OptionImagePath": "aliquip off",
            "OptionBundleCatalogId": 3078766,
            "OptionBundleQuantity": 40969279
          },
          {
            "OptionID": 23476575,
            "OptionName": "voluptate su",
            "OptionSelected": false,
            "OptionHide": false,
            "OptionValue": -49265243.95810627,
            "OptionPartNumber": "esse nisi ut eiusmod",
            "OptionSorting": 47327456.09600505,
            "OptionImagePath": "consequat veniam in cupidatat in",
            "OptionBundleCatalogId": -37926045,
            "OptionBundleQuantity": -31843513
          }
        ]
      }
    ],
    "Title": "sunt laboris",
    "CustomFileName": "sit sunt amet cupidat",
    "MetaTags": "sed irure laboris",
    "CategoryHeader": "cupidatat nostrud ad",
    "CategoryFooter": "qui proident magna elit",
    "AdditionalKeywords": "anim dolore cillum consequat",
    "CategoryExternalIdsList": [
      {
        "ID": 45485065,
        "CategoryID": 88550296,
        "ExternalId1": "dolore fugiat in quis",
        "ExternalIdType": "sit aliquip"
      },
      {
        "ID": -17542385,
        "CategoryID": -20301673,
        "ExternalId1": "sint fugiat non pariatur",
        "ExternalIdType": "ad iru"
      },
      {
        "ID": -35489151,
        "CategoryID": 74393641,
        "ExternalId1": "pariatur incididunt",
        "ExternalIdType": "cupidatat"
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"CategoryID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

This method is used to update a single category record in the database. The `{categoryid}` parameter specifies which category to update. See [Data Structures](#category-object) for more information on the category object.

<aside class="warning">
Please note: when sending information in any of the following keys of the category array, the information contained in these keys will REPLACE the existing information, and not update it. To update information within these keys without replacing existing information, use the specific web service for those items (e.g. /Category/{categoryid}/Options):
</aside>

* OptionSetList - If you do not want to replace all options, use [/Category/{categoryid}/Options](#put-update-options-in-a-specific-category) instead.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}`

#### URL Parameters
Parameter | Required | Description
--------- | -------- | ----------
categoryid | Required | The categoryid of the category you wish to update.

#### Responses and errors

Response Code | Description
------------- | ---------
200 | Successful response code. Category has been updated.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified category was not found.

### Delete a category

> To delete a category from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php

<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{id}");
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
  
  using(var response = await httpClient.DeleteAsync("3dCartWebAPI/v1/Categories/{id}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{id}');

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
  :content_type => 'application/xml',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.delete 'https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{id}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{id}', headers=headers)
request.get_method = lambda: 'DELETE'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"CategoryID",
    "Value":"1234",
    "Status":"200",
    "Message":"Deleted successfully",
  }
]
```

Deletes a Category in the system.

<aside class="warning">
Deletions are permanent, so be careful!
</aside>

#### HTTP Request
`DELETE https://apirest.3dcart.com3dCartWebAPI/v1/Categories/{id}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
id | Required | The id of the category you are deleting.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code. Category has been deleted.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified Category does not exist.

## Category Options
Category options are a set of options that will be applied to all products within that category. For example, shoes or clothing will all share the same size options (e.g. Small, Medium, Large, etc.). Please see our knowledgebase article on [Category Options](https://support.3dcart.com/Knowledgebase/Article/View/160/9/can-i-create-category-wide-product-options) for more information. 

### Create category options

> To add a new option set to a category, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#optionset-object) for more information on the option set object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}/Options");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"OptionSetID\": 73113723,
  \"OptionSetName\": \"sit exercitation ad\",
  \"OptionSorting\": 22347082.95848131,
  \"OptionRequired\": true,
  \"OptionType\": \"minim \",
  \"OptionURL\": \"in occaecat qui cillum\",
  \"OptionAdditionalInformation\": \"dolore irure in mollit\",
  \"OptionSizeLimit\": 99512271,
  \"OptionList\": [
    {
      \"OptionID\": -59575190,
      \"OptionName\": \"officia Duis dolor voluptate\",
      \"OptionSelected\": false,
      \"OptionHide\": true,
      \"OptionValue\": -59637210.79346147,
      \"OptionPartNumber\": \"fugiat ut pariatur in\",
      \"OptionSorting\": 45216077.64446229,
      \"OptionImagePath\": \"adipisicing aute minim culpa\",
      \"OptionBundleCatalogId\": -22107103,
      \"OptionBundleQuantity\": -63927394
    },
    {
      \"OptionID\": 44949924,
      \"OptionName\": \"anim eu\",
      \"OptionSelected\": true,
      \"OptionHide\": true,
      \"OptionValue\": -64439189.47241176,
      \"OptionPartNumber\": \"aliquip sed\",
      \"OptionSorting\": 41958648.282512635,
      \"OptionImagePath\": \"veniam non esse cupidatat \",
      \"OptionBundleCatalogId\": 26161628,
      \"OptionBundleQuantity\": -48029905
    },
    {
      \"OptionID\": 39880683,
      \"OptionName\": \"occaecat\",
      \"OptionSelected\": true,
      \"OptionHide\": true,
      \"OptionValue\": -92148641.80505575,
      \"OptionPartNumber\": \"pariatur elit Lorem est ut\",
      \"OptionSorting\": 1191256.1264771223,
      \"OptionImagePath\": \"sed veniam aute\",
      \"OptionBundleCatalogId\": -30369440,
      \"OptionBundleQuantity\": -43304317
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
  
    using (var content = new StringContent("{  \"OptionSetID\": 73113723,  \"OptionSetName\": \"sit exercitation ad\",  \"OptionSorting\": 22347082.95848131,  \"OptionRequired\": true,  \"OptionType\": \"minim \",  \"OptionURL\": \"in occaecat qui cillum\",  \"OptionAdditionalInformation\": \"dolore irure in mollit\",  \"OptionSizeLimit\": 99512271,  \"OptionList\": [    {      \"OptionID\": -59575190,      \"OptionName\": \"officia Duis dolor voluptate\",      \"OptionSelected\": false,      \"OptionHide\": true,      \"OptionValue\": -59637210.79346147,      \"OptionPartNumber\": \"fugiat ut pariatur in\",      \"OptionSorting\": 45216077.64446229,      \"OptionImagePath\": \"adipisicing aute minim culpa\",      \"OptionBundleCatalogId\": -22107103,      \"OptionBundleQuantity\": -63927394    },    {      \"OptionID\": 44949924,      \"OptionName\": \"anim eu\",      \"OptionSelected\": true,      \"OptionHide\": true,      \"OptionValue\": -64439189.47241176,      \"OptionPartNumber\": \"aliquip sed\",      \"OptionSorting\": 41958648.282512635,      \"OptionImagePath\": \"veniam non esse cupidatat \",      \"OptionBundleCatalogId\": 26161628,      \"OptionBundleQuantity\": -48029905    },    {      \"OptionID\": 39880683,      \"OptionName\": \"occaecat\",      \"OptionSelected\": true,      \"OptionHide\": true,      \"OptionValue\": -92148641.80505575,      \"OptionPartNumber\": \"pariatur elit Lorem est ut\",      \"OptionSorting\": 1191256.1264771223,      \"OptionImagePath\": \"sed veniam aute\",      \"OptionBundleCatalogId\": -30369440,      \"OptionBundleQuantity\": -43304317    }  ]}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("3dCartWebAPI/v1/Categories/{categoryid}/Options", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}/Options');

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
  'OptionSetID': 73113723,
  'OptionSetName': 'sit exercitation ad',
  'OptionSorting': 22347082.95848131,
  'OptionRequired': true,
  'OptionType': 'minim ',
  'OptionURL': 'in occaecat qui cillum',
  'OptionAdditionalInformation': 'dolore irure in mollit',
  'OptionSizeLimit': 99512271,
  'OptionList': [
    {
      'OptionID': -59575190,
      'OptionName': 'officia Duis dolor voluptate',
      'OptionSelected': false,
      'OptionHide': true,
      'OptionValue': -59637210.79346147,
      'OptionPartNumber': 'fugiat ut pariatur in',
      'OptionSorting': 45216077.64446229,
      'OptionImagePath': 'adipisicing aute minim culpa',
      'OptionBundleCatalogId': -22107103,
      'OptionBundleQuantity': -63927394
    },
    {
      'OptionID': 44949924,
      'OptionName': 'anim eu',
      'OptionSelected': true,
      'OptionHide': true,
      'OptionValue': -64439189.47241176,
      'OptionPartNumber': 'aliquip sed',
      'OptionSorting': 41958648.282512635,
      'OptionImagePath': 'veniam non esse cupidatat ',
      'OptionBundleCatalogId': 26161628,
      'OptionBundleQuantity': -48029905
    },
    {
      'OptionID': 39880683,
      'OptionName': 'occaecat',
      'OptionSelected': true,
      'OptionHide': true,
      'OptionValue': -92148641.80505575,
      'OptionPartNumber': 'pariatur elit Lorem est ut',
      'OptionSorting': 1191256.1264771223,
      'OptionImagePath': 'sed veniam aute',
      'OptionBundleCatalogId': -30369440,
      'OptionBundleQuantity': -43304317
    }
  ]
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "OptionSetID": 73113723,
  "OptionSetName": "sit exercitation ad",
  "OptionSorting": 22347082.95848131,
  "OptionRequired": true,
  "OptionType": "minim ",
  "OptionURL": "in occaecat qui cillum",
  "OptionAdditionalInformation": "dolore irure in mollit",
  "OptionSizeLimit": 99512271,
  "OptionList": [
    {
      "OptionID": -59575190,
      "OptionName": "officia Duis dolor voluptate",
      "OptionSelected": false,
      "OptionHide": true,
      "OptionValue": -59637210.79346147,
      "OptionPartNumber": "fugiat ut pariatur in",
      "OptionSorting": 45216077.64446229,
      "OptionImagePath": "adipisicing aute minim culpa",
      "OptionBundleCatalogId": -22107103,
      "OptionBundleQuantity": -63927394
    },
    {
      "OptionID": 44949924,
      "OptionName": "anim eu",
      "OptionSelected": true,
      "OptionHide": true,
      "OptionValue": -64439189.47241176,
      "OptionPartNumber": "aliquip sed",
      "OptionSorting": 41958648.282512635,
      "OptionImagePath": "veniam non esse cupidatat ",
      "OptionBundleCatalogId": 26161628,
      "OptionBundleQuantity": -48029905
    },
    {
      "OptionID": 39880683,
      "OptionName": "occaecat",
      "OptionSelected": true,
      "OptionHide": true,
      "OptionValue": -92148641.80505575,
      "OptionPartNumber": "pariatur elit Lorem est ut",
      "OptionSorting": 1191256.1264771223,
      "OptionImagePath": "sed veniam aute",
      "OptionBundleCatalogId": -30369440,
      "OptionBundleQuantity": -43304317
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

response = RestClient.post 'https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}/Options', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "OptionSetID": 73113723,
    "OptionSetName": "sit exercitation ad",
    "OptionSorting": 22347082.95848131,
    "OptionRequired": true,
    "OptionType": "minim ",
    "OptionURL": "in occaecat qui cillum",
    "OptionAdditionalInformation": "dolore irure in mollit",
    "OptionSizeLimit": 99512271,
    "OptionList": [
      {
        "OptionID": -59575190,
        "OptionName": "officia Duis dolor voluptate",
        "OptionSelected": false,
        "OptionHide": true,
        "OptionValue": -59637210.79346147,
        "OptionPartNumber": "fugiat ut pariatur in",
        "OptionSorting": 45216077.64446229,
        "OptionImagePath": "adipisicing aute minim culpa",
        "OptionBundleCatalogId": -22107103,
        "OptionBundleQuantity": -63927394
      },
      {
        "OptionID": 44949924,
        "OptionName": "anim eu",
        "OptionSelected": true,
        "OptionHide": true,
        "OptionValue": -64439189.47241176,
        "OptionPartNumber": "aliquip sed",
        "OptionSorting": 41958648.282512635,
        "OptionImagePath": "veniam non esse cupidatat ",
        "OptionBundleCatalogId": 26161628,
        "OptionBundleQuantity": -48029905
      },
      {
        "OptionID": 39880683,
        "OptionName": "occaecat",
        "OptionSelected": true,
        "OptionHide": true,
        "OptionValue": -92148641.80505575,
        "OptionPartNumber": "pariatur elit Lorem est ut",
        "OptionSorting": 1191256.1264771223,
        "OptionImagePath": "sed veniam aute",
        "OptionBundleCatalogId": -30369440,
        "OptionBundleQuantity": -43304317
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}/Options', data=values, headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"OptionSetID",
    "Value":"1234",
    "Status":"201",
    "Message":"Created successfully",
  }
]
```

Adds a new Option set to the specified category. See [Data Structures](#optionset-object) for more information on the option set object.

#### HTTP Request
`POST https://apirest.3dcart.com3dCartWebAPI/v1/Categories/{categoryid}/Options`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
categoryid | Required | The categoryid of the category you are adding the options to.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code. Category has been added.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified Category does not exist.

### Retrieve a list of category options 

> To retrieve category options from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}/Options?limit=&offset=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Categories/{categoryid}/Options"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript

var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}/Options?limit=&offset=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}/Options?limit=&offset=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}/Options?limit=&offset=', headers=headers)

response_body = urlopen(request).read()
print response_body
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#optionset-object) for more information on the option set object):

```json
[
  {
    "OptionSetID": 1,
    "OptionSetName": "sample string 1",
    "OptionSorting": 1.1,
    "OptionRequired": true,
    "OptionType": "sample string 2",
    "OptionURL": "sample string 3",
    "OptionAdditionalInformation": "sample string 4",
    "OptionSizeLimit": 1,
    "OptionList": [
      {
        "OptionID": 1,
        "OptionName": "sample string 1",
        "OptionSelected": true,
        "OptionHide": true,
        "OptionValue": 1.1,
        "OptionPartNumber": "sample string 2",
        "OptionSorting": 1.1,
        "OptionImagePath": "sample string 3",
        "OptionBundleCatalogId": 1,
        "OptionBundleQuantity": 1
      },
      {
        "OptionID": 1,
        "OptionName": "sample string 1",
        "OptionSelected": true,
        "OptionHide": true,
        "OptionValue": 1.1,
        "OptionPartNumber": "sample string 2",
        "OptionSorting": 1.1,
        "OptionImagePath": "sample string 3",
        "OptionBundleCatalogId": 1,
        "OptionBundleQuantity": 1
      }
    ]
  },
  {
    "OptionSetID": 1,
    "OptionSetName": "sample string 1",
    "OptionSorting": 1.1,
    "OptionRequired": true,
    "OptionType": "sample string 2",
    "OptionURL": "sample string 3",
    "OptionAdditionalInformation": "sample string 4",
    "OptionSizeLimit": 1,
    "OptionList": [
      {
        "OptionID": 1,
        "OptionName": "sample string 1",
        "OptionSelected": true,
        "OptionHide": true,
        "OptionValue": 1.1,
        "OptionPartNumber": "sample string 2",
        "OptionSorting": 1.1,
        "OptionImagePath": "sample string 3",
        "OptionBundleCatalogId": 1,
        "OptionBundleQuantity": 1
      },
      {
        "OptionID": 1,
        "OptionName": "sample string 1",
        "OptionSelected": true,
        "OptionHide": true,
        "OptionValue": 1.1,
        "OptionPartNumber": "sample string 2",
        "OptionSorting": 1.1,
        "OptionImagePath": "sample string 3",
        "OptionBundleCatalogId": 1,
        "OptionBundleQuantity": 1
      }
    ]
  }
]
```

Returns the options configured for the specified category. See [Data Structures](#optionset-object) for more information on the option set object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}/Options{?limit,offset}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
categoryid | Required | The categoryid you are retrieving the options for.
limit | Optional | The number of options to return (Max. 500).
offset | Optional | The starting record for the return data.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code. Category options have been returned.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified Category does not exist, or there are no options.

### Update category options in a specific category

> To update category options in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#optionset-object) for more information on the option set object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}/Options");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "[
  {
    \"OptionSetID\": 91548643,
    \"OptionSetName\": \"Lorem eiusmod laboris et esse\",
    \"OptionSorting\": 14555651.326110512,
    \"OptionRequired\": false,
    \"OptionType\": \"labore\",
    \"OptionURL\": \"aliquip enim dolore est\",
    \"OptionAdditionalInformation\": \"ea culpa mollit nulla consectetur\",
    \"OptionSizeLimit\": -48558338,
    \"OptionList\": [
      {
        \"OptionID\": -30534891,
        \"OptionName\": \"voluptate\",
        \"OptionSelected\": false,
        \"OptionHide\": true,
        \"OptionValue\": 86260517.9542757,
        \"OptionPartNumber\": \"nostrud dolor\",
        \"OptionSorting\": 79478325.41066417,
        \"OptionImagePath\": \"tempor non Ut\",
        \"OptionBundleCatalogId\": 83503176,
        \"OptionBundleQuantity\": -29280347
      },
      {
        \"OptionID\": 16775821,
        \"OptionName\": \"voluptate dolore veniam eiusmod\",
        \"OptionSelected\": true,
        \"OptionHide\": true,
        \"OptionValue\": 75184451.61101887,
        \"OptionPartNumber\": \"laborum ut\",
        \"OptionSorting\": -95051816.13479583,
        \"OptionImagePath\": \"tempor aliquip\",
        \"OptionBundleCatalogId\": -31296936,
        \"OptionBundleQuantity\": 82243354
      },
      {
        \"OptionID\": 73668208,
        \"OptionName\": \"magna in\",
        \"OptionSelected\": false,
        \"OptionHide\": true,
        \"OptionValue\": -77152697.8440896,
        \"OptionPartNumber\": \"do et eiusmod\",
        \"OptionSorting\": -19973662.292746395,
        \"OptionImagePath\": \"exercitation\",
        \"OptionBundleCatalogId\": 73994702,
        \"OptionBundleQuantity\": 62181718
      },
      {
        \"OptionID\": 77391837,
        \"OptionName\": \"cillum sit\",
        \"OptionSelected\": false,
        \"OptionHide\": false,
        \"OptionValue\": 86061702.87486088,
        \"OptionPartNumber\": \"sit\",
        \"OptionSorting\": 63454382.71696508,
        \"OptionImagePath\": \"ut irure pariatur\",
        \"OptionBundleCatalogId\": 82530302,
        \"OptionBundleQuantity\": -38396374
      }
    ]
  },
  {
    \"OptionSetID\": 69207447,
    \"OptionSetName\": \"in qui amet\",
    \"OptionSorting\": 79952394.36658013,
    \"OptionRequired\": true,
    \"OptionType\": \"c\",
    \"OptionURL\": \"irure adipisicing\",
    \"OptionAdditionalInformation\": \"ut tempor\",
    \"OptionSizeLimit\": -62258778,
    \"OptionList\": [
      {
        \"OptionID\": 89317837,
        \"OptionName\": \"exercitation Excepteur id\",
        \"OptionSelected\": true,
        \"OptionHide\": true,
        \"OptionValue\": 43982727.49820933,
        \"OptionPartNumber\": \"esse est\",
        \"OptionSorting\": -51448692.578659564,
        \"OptionImagePath\": \"esse mollit\",
        \"OptionBundleCatalogId\": -83469410,
        \"OptionBundleQuantity\": 68849121
      }
    ]
  },
  {
    \"OptionSetID\": 9380065,
    \"OptionSetName\": \"est consectetur\",
    \"OptionSorting\": 2741226.4664500505,
    \"OptionRequired\": true,
    \"OptionType\": \"minim\",
    \"OptionURL\": \"tempor\",
    \"OptionAdditionalInformation\": \"exercitation nulla dolore\",
    \"OptionSizeLimit\": -59175847,
    \"OptionList\": [
      {
        \"OptionID\": 75328051,
        \"OptionName\": \"incididunt Duis\",
        \"OptionSelected\": true,
        \"OptionHide\": false,
        \"OptionValue\": -45596444.99724955,
        \"OptionPartNumber\": \"enim sint deserunt mollit laborum\",
        \"OptionSorting\": -54241323.48295547,
        \"OptionImagePath\": \"ut adipisicing Excepteur\",
        \"OptionBundleCatalogId\": 3861929,
        \"OptionBundleQuantity\": -56992808
      }
    ]
  },
  {
    \"OptionSetID\": 49282889,
    \"OptionSetName\": \"fugiat velit\",
    \"OptionSorting\": 13914628.45214124,
    \"OptionRequired\": false,
    \"OptionType\": \"cupidata\",
    \"OptionURL\": \"magna incididunt Lorem minim\",
    \"OptionAdditionalInformation\": \"dolor nisi enim in\",
    \"OptionSizeLimit\": 16144803,
    \"OptionList\": [
      {
        \"OptionID\": 72893323,
        \"OptionName\": \"occaecat reprehenderit do\",
        \"OptionSelected\": false,
        \"OptionHide\": true,
        \"OptionValue\": -65022294.546476014,
        \"OptionPartNumber\": \"et\",
        \"OptionSorting\": -60222557.263801016,
        \"OptionImagePath\": \"sunt id\",
        \"OptionBundleCatalogId\": -81847179,
        \"OptionBundleQuantity\": -55721851
      }
    ]
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
  
    using (var content = new StringContent("[  {    \"OptionSetID\": 91548643,    \"OptionSetName\": \"Lorem eiusmod laboris et esse\",    \"OptionSorting\": 14555651.326110512,    \"OptionRequired\": false,    \"OptionType\": \"labore\",    \"OptionURL\": \"aliquip enim dolore est\",    \"OptionAdditionalInformation\": \"ea culpa mollit nulla consectetur\",    \"OptionSizeLimit\": -48558338,    \"OptionList\": [      {        \"OptionID\": -30534891,        \"OptionName\": \"voluptate\",        \"OptionSelected\": false,        \"OptionHide\": true,        \"OptionValue\": 86260517.9542757,        \"OptionPartNumber\": \"nostrud dolor\",        \"OptionSorting\": 79478325.41066417,        \"OptionImagePath\": \"tempor non Ut\",        \"OptionBundleCatalogId\": 83503176,        \"OptionBundleQuantity\": -29280347      },      {        \"OptionID\": 16775821,        \"OptionName\": \"voluptate dolore veniam eiusmod\",        \"OptionSelected\": true,        \"OptionHide\": true,        \"OptionValue\": 75184451.61101887,        \"OptionPartNumber\": \"laborum ut\",        \"OptionSorting\": -95051816.13479583,        \"OptionImagePath\": \"tempor aliquip\",        \"OptionBundleCatalogId\": -31296936,        \"OptionBundleQuantity\": 82243354      },      {        \"OptionID\": 73668208,        \"OptionName\": \"magna in\",        \"OptionSelected\": false,        \"OptionHide\": true,        \"OptionValue\": -77152697.8440896,        \"OptionPartNumber\": \"do et eiusmod\",        \"OptionSorting\": -19973662.292746395,        \"OptionImagePath\": \"exercitation\",        \"OptionBundleCatalogId\": 73994702,        \"OptionBundleQuantity\": 62181718      },      {        \"OptionID\": 77391837,        \"OptionName\": \"cillum sit\",        \"OptionSelected\": false,        \"OptionHide\": false,        \"OptionValue\": 86061702.87486088,        \"OptionPartNumber\": \"sit\",        \"OptionSorting\": 63454382.71696508,        \"OptionImagePath\": \"ut irure pariatur\",        \"OptionBundleCatalogId\": 82530302,        \"OptionBundleQuantity\": -38396374      }    ]  },  {    \"OptionSetID\": 69207447,    \"OptionSetName\": \"in qui amet\",    \"OptionSorting\": 79952394.36658013,    \"OptionRequired\": true,    \"OptionType\": \"c\",    \"OptionURL\": \"irure adipisicing\",    \"OptionAdditionalInformation\": \"ut tempor\",    \"OptionSizeLimit\": -62258778,    \"OptionList\": [      {        \"OptionID\": 89317837,        \"OptionName\": \"exercitation Excepteur id\",        \"OptionSelected\": true,        \"OptionHide\": true,        \"OptionValue\": 43982727.49820933,        \"OptionPartNumber\": \"esse est\",        \"OptionSorting\": -51448692.578659564,        \"OptionImagePath\": \"esse mollit\",        \"OptionBundleCatalogId\": -83469410,        \"OptionBundleQuantity\": 68849121      }    ]  },  {    \"OptionSetID\": 9380065,    \"OptionSetName\": \"est consectetur\",    \"OptionSorting\": 2741226.4664500505,    \"OptionRequired\": true,    \"OptionType\": \"minim\",    \"OptionURL\": \"tempor\",    \"OptionAdditionalInformation\": \"exercitation nulla dolore\",    \"OptionSizeLimit\": -59175847,    \"OptionList\": [      {        \"OptionID\": 75328051,        \"OptionName\": \"incididunt Duis\",        \"OptionSelected\": true,        \"OptionHide\": false,        \"OptionValue\": -45596444.99724955,        \"OptionPartNumber\": \"enim sint deserunt mollit laborum\",        \"OptionSorting\": -54241323.48295547,        \"OptionImagePath\": \"ut adipisicing Excepteur\",        \"OptionBundleCatalogId\": 3861929,        \"OptionBundleQuantity\": -56992808      }    ]  },  {    \"OptionSetID\": 49282889,    \"OptionSetName\": \"fugiat velit\",    \"OptionSorting\": 13914628.45214124,    \"OptionRequired\": false,    \"OptionType\": \"cupidata\",    \"OptionURL\": \"magna incididunt Lorem minim\",    \"OptionAdditionalInformation\": \"dolor nisi enim in\",    \"OptionSizeLimit\": 16144803,    \"OptionList\": [      {        \"OptionID\": 72893323,        \"OptionName\": \"occaecat reprehenderit do\",        \"OptionSelected\": false,        \"OptionHide\": true,        \"OptionValue\": -65022294.546476014,        \"OptionPartNumber\": \"et\",        \"OptionSorting\": -60222557.263801016,        \"OptionImagePath\": \"sunt id\",        \"OptionBundleCatalogId\": -81847179,        \"OptionBundleQuantity\": -55721851      }    ]  }]", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Categories/{categoryid}/Options", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}/Options');

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
    'OptionSetID': 91548643,
    'OptionSetName': 'Lorem eiusmod laboris et esse',
    'OptionSorting': 14555651.326110512,
    'OptionRequired': false,
    'OptionType': 'labore',
    'OptionURL': 'aliquip enim dolore est',
    'OptionAdditionalInformation': 'ea culpa mollit nulla consectetur',
    'OptionSizeLimit': -48558338,
    'OptionList': [
      {
        'OptionID': -30534891,
        'OptionName': 'voluptate',
        'OptionSelected': false,
        'OptionHide': true,
        'OptionValue': 86260517.9542757,
        'OptionPartNumber': 'nostrud dolor',
        'OptionSorting': 79478325.41066417,
        'OptionImagePath': 'tempor non Ut',
        'OptionBundleCatalogId': 83503176,
        'OptionBundleQuantity': -29280347
      },
      {
        'OptionID': 16775821,
        'OptionName': 'voluptate dolore veniam eiusmod',
        'OptionSelected': true,
        'OptionHide': true,
        'OptionValue': 75184451.61101887,
        'OptionPartNumber': 'laborum ut',
        'OptionSorting': -95051816.13479583,
        'OptionImagePath': 'tempor aliquip',
        'OptionBundleCatalogId': -31296936,
        'OptionBundleQuantity': 82243354
      },
      {
        'OptionID': 73668208,
        'OptionName': 'magna in',
        'OptionSelected': false,
        'OptionHide': true,
        'OptionValue': -77152697.8440896,
        'OptionPartNumber': 'do et eiusmod',
        'OptionSorting': -19973662.292746395,
        'OptionImagePath': 'exercitation',
        'OptionBundleCatalogId': 73994702,
        'OptionBundleQuantity': 62181718
      },
      {
        'OptionID': 77391837,
        'OptionName': 'cillum sit',
        'OptionSelected': false,
        'OptionHide': false,
        'OptionValue': 86061702.87486088,
        'OptionPartNumber': 'sit',
        'OptionSorting': 63454382.71696508,
        'OptionImagePath': 'ut irure pariatur',
        'OptionBundleCatalogId': 82530302,
        'OptionBundleQuantity': -38396374
      }
    ]
  },
  {
    'OptionSetID': 69207447,
    'OptionSetName': 'in qui amet',
    'OptionSorting': 79952394.36658013,
    'OptionRequired': true,
    'OptionType': 'c',
    'OptionURL': 'irure adipisicing',
    'OptionAdditionalInformation': 'ut tempor',
    'OptionSizeLimit': -62258778,
    'OptionList': [
      {
        'OptionID': 89317837,
        'OptionName': 'exercitation Excepteur id',
        'OptionSelected': true,
        'OptionHide': true,
        'OptionValue': 43982727.49820933,
        'OptionPartNumber': 'esse est',
        'OptionSorting': -51448692.578659564,
        'OptionImagePath': 'esse mollit',
        'OptionBundleCatalogId': -83469410,
        'OptionBundleQuantity': 68849121
      }
    ]
  },
  {
    'OptionSetID': 9380065,
    'OptionSetName': 'est consectetur',
    'OptionSorting': 2741226.4664500505,
    'OptionRequired': true,
    'OptionType': 'minim',
    'OptionURL': 'tempor',
    'OptionAdditionalInformation': 'exercitation nulla dolore',
    'OptionSizeLimit': -59175847,
    'OptionList': [
      {
        'OptionID': 75328051,
        'OptionName': 'incididunt Duis',
        'OptionSelected': true,
        'OptionHide': false,
        'OptionValue': -45596444.99724955,
        'OptionPartNumber': 'enim sint deserunt mollit laborum',
        'OptionSorting': -54241323.48295547,
        'OptionImagePath': 'ut adipisicing Excepteur',
        'OptionBundleCatalogId': 3861929,
        'OptionBundleQuantity': -56992808
      }
    ]
  },
  {
    'OptionSetID': 49282889,
    'OptionSetName': 'fugiat velit',
    'OptionSorting': 13914628.45214124,
    'OptionRequired': false,
    'OptionType': 'cupidata',
    'OptionURL': 'magna incididunt Lorem minim',
    'OptionAdditionalInformation': 'dolor nisi enim in',
    'OptionSizeLimit': 16144803,
    'OptionList': [
      {
        'OptionID': 72893323,
        'OptionName': 'occaecat reprehenderit do',
        'OptionSelected': false,
        'OptionHide': true,
        'OptionValue': -65022294.546476014,
        'OptionPartNumber': 'et',
        'OptionSorting': -60222557.263801016,
        'OptionImagePath': 'sunt id',
        'OptionBundleCatalogId': -81847179,
        'OptionBundleQuantity': -55721851
      }
    ]
  }
];

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '[
  {
    "OptionSetID": 91548643,
    "OptionSetName": "Lorem eiusmod laboris et esse",
    "OptionSorting": 14555651.326110512,
    "OptionRequired": false,
    "OptionType": "labore",
    "OptionURL": "aliquip enim dolore est",
    "OptionAdditionalInformation": "ea culpa mollit nulla consectetur",
    "OptionSizeLimit": -48558338,
    "OptionList": [
      {
        "OptionID": -30534891,
        "OptionName": "voluptate",
        "OptionSelected": false,
        "OptionHide": true,
        "OptionValue": 86260517.9542757,
        "OptionPartNumber": "nostrud dolor",
        "OptionSorting": 79478325.41066417,
        "OptionImagePath": "tempor non Ut",
        "OptionBundleCatalogId": 83503176,
        "OptionBundleQuantity": -29280347
      },
      {
        "OptionID": 16775821,
        "OptionName": "voluptate dolore veniam eiusmod",
        "OptionSelected": true,
        "OptionHide": true,
        "OptionValue": 75184451.61101887,
        "OptionPartNumber": "laborum ut",
        "OptionSorting": -95051816.13479583,
        "OptionImagePath": "tempor aliquip",
        "OptionBundleCatalogId": -31296936,
        "OptionBundleQuantity": 82243354
      },
      {
        "OptionID": 73668208,
        "OptionName": "magna in",
        "OptionSelected": false,
        "OptionHide": true,
        "OptionValue": -77152697.8440896,
        "OptionPartNumber": "do et eiusmod",
        "OptionSorting": -19973662.292746395,
        "OptionImagePath": "exercitation",
        "OptionBundleCatalogId": 73994702,
        "OptionBundleQuantity": 62181718
      },
      {
        "OptionID": 77391837,
        "OptionName": "cillum sit",
        "OptionSelected": false,
        "OptionHide": false,
        "OptionValue": 86061702.87486088,
        "OptionPartNumber": "sit",
        "OptionSorting": 63454382.71696508,
        "OptionImagePath": "ut irure pariatur",
        "OptionBundleCatalogId": 82530302,
        "OptionBundleQuantity": -38396374
      }
    ]
  },
  {
    "OptionSetID": 69207447,
    "OptionSetName": "in qui amet",
    "OptionSorting": 79952394.36658013,
    "OptionRequired": true,
    "OptionType": "c",
    "OptionURL": "irure adipisicing",
    "OptionAdditionalInformation": "ut tempor",
    "OptionSizeLimit": -62258778,
    "OptionList": [
      {
        "OptionID": 89317837,
        "OptionName": "exercitation Excepteur id",
        "OptionSelected": true,
        "OptionHide": true,
        "OptionValue": 43982727.49820933,
        "OptionPartNumber": "esse est",
        "OptionSorting": -51448692.578659564,
        "OptionImagePath": "esse mollit",
        "OptionBundleCatalogId": -83469410,
        "OptionBundleQuantity": 68849121
      }
    ]
  },
  {
    "OptionSetID": 9380065,
    "OptionSetName": "est consectetur",
    "OptionSorting": 2741226.4664500505,
    "OptionRequired": true,
    "OptionType": "minim",
    "OptionURL": "tempor",
    "OptionAdditionalInformation": "exercitation nulla dolore",
    "OptionSizeLimit": -59175847,
    "OptionList": [
      {
        "OptionID": 75328051,
        "OptionName": "incididunt Duis",
        "OptionSelected": true,
        "OptionHide": false,
        "OptionValue": -45596444.99724955,
        "OptionPartNumber": "enim sint deserunt mollit laborum",
        "OptionSorting": -54241323.48295547,
        "OptionImagePath": "ut adipisicing Excepteur",
        "OptionBundleCatalogId": 3861929,
        "OptionBundleQuantity": -56992808
      }
    ]
  },
  {
    "OptionSetID": 49282889,
    "OptionSetName": "fugiat velit",
    "OptionSorting": 13914628.45214124,
    "OptionRequired": false,
    "OptionType": "cupidata",
    "OptionURL": "magna incididunt Lorem minim",
    "OptionAdditionalInformation": "dolor nisi enim in",
    "OptionSizeLimit": 16144803,
    "OptionList": [
      {
        "OptionID": 72893323,
        "OptionName": "occaecat reprehenderit do",
        "OptionSelected": false,
        "OptionHide": true,
        "OptionValue": -65022294.546476014,
        "OptionPartNumber": "et",
        "OptionSorting": -60222557.263801016,
        "OptionImagePath": "sunt id",
        "OptionBundleCatalogId": -81847179,
        "OptionBundleQuantity": -55721851
      }
    ]
  }
]'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}/Options', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  [
    {
      "OptionSetID": 91548643,
      "OptionSetName": "Lorem eiusmod laboris et esse",
      "OptionSorting": 14555651.326110512,
      "OptionRequired": false,
      "OptionType": "labore",
      "OptionURL": "aliquip enim dolore est",
      "OptionAdditionalInformation": "ea culpa mollit nulla consectetur",
      "OptionSizeLimit": -48558338,
      "OptionList": [
        {
          "OptionID": -30534891,
          "OptionName": "voluptate",
          "OptionSelected": false,
          "OptionHide": true,
          "OptionValue": 86260517.9542757,
          "OptionPartNumber": "nostrud dolor",
          "OptionSorting": 79478325.41066417,
          "OptionImagePath": "tempor non Ut",
          "OptionBundleCatalogId": 83503176,
          "OptionBundleQuantity": -29280347
        },
        {
          "OptionID": 16775821,
          "OptionName": "voluptate dolore veniam eiusmod",
          "OptionSelected": true,
          "OptionHide": true,
          "OptionValue": 75184451.61101887,
          "OptionPartNumber": "laborum ut",
          "OptionSorting": -95051816.13479583,
          "OptionImagePath": "tempor aliquip",
          "OptionBundleCatalogId": -31296936,
          "OptionBundleQuantity": 82243354
        },
        {
          "OptionID": 73668208,
          "OptionName": "magna in",
          "OptionSelected": false,
          "OptionHide": true,
          "OptionValue": -77152697.8440896,
          "OptionPartNumber": "do et eiusmod",
          "OptionSorting": -19973662.292746395,
          "OptionImagePath": "exercitation",
          "OptionBundleCatalogId": 73994702,
          "OptionBundleQuantity": 62181718
        },
        {
          "OptionID": 77391837,
          "OptionName": "cillum sit",
          "OptionSelected": false,
          "OptionHide": false,
          "OptionValue": 86061702.87486088,
          "OptionPartNumber": "sit",
          "OptionSorting": 63454382.71696508,
          "OptionImagePath": "ut irure pariatur",
          "OptionBundleCatalogId": 82530302,
          "OptionBundleQuantity": -38396374
        }
      ]
    },
    {
      "OptionSetID": 69207447,
      "OptionSetName": "in qui amet",
      "OptionSorting": 79952394.36658013,
      "OptionRequired": true,
      "OptionType": "c",
      "OptionURL": "irure adipisicing",
      "OptionAdditionalInformation": "ut tempor",
      "OptionSizeLimit": -62258778,
      "OptionList": [
        {
          "OptionID": 89317837,
          "OptionName": "exercitation Excepteur id",
          "OptionSelected": true,
          "OptionHide": true,
          "OptionValue": 43982727.49820933,
          "OptionPartNumber": "esse est",
          "OptionSorting": -51448692.578659564,
          "OptionImagePath": "esse mollit",
          "OptionBundleCatalogId": -83469410,
          "OptionBundleQuantity": 68849121
        }
      ]
    },
    {
      "OptionSetID": 9380065,
      "OptionSetName": "est consectetur",
      "OptionSorting": 2741226.4664500505,
      "OptionRequired": true,
      "OptionType": "minim",
      "OptionURL": "tempor",
      "OptionAdditionalInformation": "exercitation nulla dolore",
      "OptionSizeLimit": -59175847,
      "OptionList": [
        {
          "OptionID": 75328051,
          "OptionName": "incididunt Duis",
          "OptionSelected": true,
          "OptionHide": false,
          "OptionValue": -45596444.99724955,
          "OptionPartNumber": "enim sint deserunt mollit laborum",
          "OptionSorting": -54241323.48295547,
          "OptionImagePath": "ut adipisicing Excepteur",
          "OptionBundleCatalogId": 3861929,
          "OptionBundleQuantity": -56992808
        }
      ]
    },
    {
      "OptionSetID": 49282889,
      "OptionSetName": "fugiat velit",
      "OptionSorting": 13914628.45214124,
      "OptionRequired": false,
      "OptionType": "cupidata",
      "OptionURL": "magna incididunt Lorem minim",
      "OptionAdditionalInformation": "dolor nisi enim in",
      "OptionSizeLimit": 16144803,
      "OptionList": [
        {
          "OptionID": 72893323,
          "OptionName": "occaecat reprehenderit do",
          "OptionSelected": false,
          "OptionHide": true,
          "OptionValue": -65022294.546476014,
          "OptionPartNumber": "et",
          "OptionSorting": -60222557.263801016,
          "OptionImagePath": "sunt id",
          "OptionBundleCatalogId": -81847179,
          "OptionBundleQuantity": -55721851
        }
      ]
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}/Options', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"OptionSetID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

Updates a collection of options from a specific Category. See [Data Structures](#optionset-object) for more information on the option set object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}/Options`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
categoryid | Required | The categoryid you are updating the options for.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code. Category options have been updated.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified Category does not exist, or there are no options.

### Update a specific category option 

> To update a specific category option set in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#optionset-object) for more information on the option set object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}/Options/{optionsetid}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"OptionSetID\": 61749609,
  \"OptionSetName\": \"in ut\",
  \"OptionSorting\": 99748271.1512287,
  \"OptionRequired\": true,
  \"OptionType\": \"\",
  \"OptionURL\": \"labore do enim\",
  \"OptionAdditionalInformation\": \"sit Ut\",
  \"OptionSizeLimit\": -82871852,
  \"OptionList\": [
    {
      \"OptionID\": -18062579,
      \"OptionName\": \"minim do dolor\",
      \"OptionSelected\": false,
      \"OptionHide\": false,
      \"OptionValue\": 46397503.16362211,
      \"OptionPartNumber\": \"fugiat a\",
      \"OptionSorting\": 14203979.922338039,
      \"OptionImagePath\": \"sunt cillum\",
      \"OptionBundleCatalogId\": 40637061,
      \"OptionBundleQuantity\": 47976905
    },
    {
      \"OptionID\": -16295391,
      \"OptionName\": \"nisi consequat nostrud irure minim\",
      \"OptionSelected\": false,
      \"OptionHide\": true,
      \"OptionValue\": 24691945.605411723,
      \"OptionPartNumber\": \"dolor consequat sit anim et\",
      \"OptionSorting\": 16855888.216545805,
      \"OptionImagePath\": \"dolore velit dolor\",
      \"OptionBundleCatalogId\": -39243530,
      \"OptionBundleQuantity\": -28650322
    },
    {
      \"OptionID\": -7500509,
      \"OptionName\": \"reprehenderit esse Lorem\",
      \"OptionSelected\": false,
      \"OptionHide\": false,
      \"OptionValue\": -88911676.58292814,
      \"OptionPartNumber\": \"\",
      \"OptionSorting\": 84212378.33072266,
      \"OptionImagePath\": \"ex tempor laboris\",
      \"OptionBundleCatalogId\": -3108226,
      \"OptionBundleQuantity\": -30463137
    },
    {
      \"OptionID\": 17934010,
      \"OptionName\": \"nisi cupidatat aliqua\",
      \"OptionSelected\": true,
      \"OptionHide\": true,
      \"OptionValue\": 16359264.555789024,
      \"OptionPartNumber\": \"laborum eu Duis molli\",
      \"OptionSorting\": 42528932.61861771,
      \"OptionImagePath\": \"in et magna laboris\",
      \"OptionBundleCatalogId\": -15747524,
      \"OptionBundleQuantity\": 74704082
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
  
    using (var content = new StringContent("{  \"OptionSetID\": 61749609,  \"OptionSetName\": \"in ut\",  \"OptionSorting\": 99748271.1512287,  \"OptionRequired\": true,  \"OptionType\": \"\",  \"OptionURL\": \"labore do enim\",  \"OptionAdditionalInformation\": \"sit Ut\",  \"OptionSizeLimit\": -82871852,  \"OptionList\": [    {      \"OptionID\": -18062579,      \"OptionName\": \"minim do dolor\",      \"OptionSelected\": false,      \"OptionHide\": false,      \"OptionValue\": 46397503.16362211,      \"OptionPartNumber\": \"fugiat a\",      \"OptionSorting\": 14203979.922338039,      \"OptionImagePath\": \"sunt cillum\",      \"OptionBundleCatalogId\": 40637061,      \"OptionBundleQuantity\": 47976905    },    {      \"OptionID\": -16295391,      \"OptionName\": \"nisi consequat nostrud irure minim\",      \"OptionSelected\": false,      \"OptionHide\": true,      \"OptionValue\": 24691945.605411723,      \"OptionPartNumber\": \"dolor consequat sit anim et\",      \"OptionSorting\": 16855888.216545805,      \"OptionImagePath\": \"dolore velit dolor\",      \"OptionBundleCatalogId\": -39243530,      \"OptionBundleQuantity\": -28650322    },    {      \"OptionID\": -7500509,      \"OptionName\": \"reprehenderit esse Lorem\",      \"OptionSelected\": false,      \"OptionHide\": false,      \"OptionValue\": -88911676.58292814,      \"OptionPartNumber\": \"\",      \"OptionSorting\": 84212378.33072266,      \"OptionImagePath\": \"ex tempor laboris\",      \"OptionBundleCatalogId\": -3108226,      \"OptionBundleQuantity\": -30463137    },    {      \"OptionID\": 17934010,      \"OptionName\": \"nisi cupidatat aliqua\",      \"OptionSelected\": true,      \"OptionHide\": true,      \"OptionValue\": 16359264.555789024,      \"OptionPartNumber\": \"laborum eu Duis molli\",      \"OptionSorting\": 42528932.61861771,      \"OptionImagePath\": \"in et magna laboris\",      \"OptionBundleCatalogId\": -15747524,      \"OptionBundleQuantity\": 74704082    }  ]}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Categories/{categoryid}/Options/{optionsetid}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}/Options/{optionsetid}');

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
  'OptionSetID': 61749609,
  'OptionSetName': 'in ut',
  'OptionSorting': 99748271.1512287,
  'OptionRequired': true,
  'OptionType': '',
  'OptionURL': 'labore do enim',
  'OptionAdditionalInformation': 'sit Ut',
  'OptionSizeLimit': -82871852,
  'OptionList': [
    {
      'OptionID': -18062579,
      'OptionName': 'minim do dolor',
      'OptionSelected': false,
      'OptionHide': false,
      'OptionValue': 46397503.16362211,
      'OptionPartNumber': 'fugiat a',
      'OptionSorting': 14203979.922338039,
      'OptionImagePath': 'sunt cillum',
      'OptionBundleCatalogId': 40637061,
      'OptionBundleQuantity': 47976905
    },
    {
      'OptionID': -16295391,
      'OptionName': 'nisi consequat nostrud irure minim',
      'OptionSelected': false,
      'OptionHide': true,
      'OptionValue': 24691945.605411723,
      'OptionPartNumber': 'dolor consequat sit anim et',
      'OptionSorting': 16855888.216545805,
      'OptionImagePath': 'dolore velit dolor',
      'OptionBundleCatalogId': -39243530,
      'OptionBundleQuantity': -28650322
    },
    {
      'OptionID': -7500509,
      'OptionName': 'reprehenderit esse Lorem',
      'OptionSelected': false,
      'OptionHide': false,
      'OptionValue': -88911676.58292814,
      'OptionPartNumber': '',
      'OptionSorting': 84212378.33072266,
      'OptionImagePath': 'ex tempor laboris',
      'OptionBundleCatalogId': -3108226,
      'OptionBundleQuantity': -30463137
    },
    {
      'OptionID': 17934010,
      'OptionName': 'nisi cupidatat aliqua',
      'OptionSelected': true,
      'OptionHide': true,
      'OptionValue': 16359264.555789024,
      'OptionPartNumber': 'laborum eu Duis molli',
      'OptionSorting': 42528932.61861771,
      'OptionImagePath': 'in et magna laboris',
      'OptionBundleCatalogId': -15747524,
      'OptionBundleQuantity': 74704082
    }
  ]
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "OptionSetID": 61749609,
  "OptionSetName": "in ut",
  "OptionSorting": 99748271.1512287,
  "OptionRequired": true,
  "OptionType": "",
  "OptionURL": "labore do enim",
  "OptionAdditionalInformation": "sit Ut",
  "OptionSizeLimit": -82871852,
  "OptionList": [
    {
      "OptionID": -18062579,
      "OptionName": "minim do dolor",
      "OptionSelected": false,
      "OptionHide": false,
      "OptionValue": 46397503.16362211,
      "OptionPartNumber": "fugiat a",
      "OptionSorting": 14203979.922338039,
      "OptionImagePath": "sunt cillum",
      "OptionBundleCatalogId": 40637061,
      "OptionBundleQuantity": 47976905
    },
    {
      "OptionID": -16295391,
      "OptionName": "nisi consequat nostrud irure minim",
      "OptionSelected": false,
      "OptionHide": true,
      "OptionValue": 24691945.605411723,
      "OptionPartNumber": "dolor consequat sit anim et",
      "OptionSorting": 16855888.216545805,
      "OptionImagePath": "dolore velit dolor",
      "OptionBundleCatalogId": -39243530,
      "OptionBundleQuantity": -28650322
    },
    {
      "OptionID": -7500509,
      "OptionName": "reprehenderit esse Lorem",
      "OptionSelected": false,
      "OptionHide": false,
      "OptionValue": -88911676.58292814,
      "OptionPartNumber": "",
      "OptionSorting": 84212378.33072266,
      "OptionImagePath": "ex tempor laboris",
      "OptionBundleCatalogId": -3108226,
      "OptionBundleQuantity": -30463137
    },
    {
      "OptionID": 17934010,
      "OptionName": "nisi cupidatat aliqua",
      "OptionSelected": true,
      "OptionHide": true,
      "OptionValue": 16359264.555789024,
      "OptionPartNumber": "laborum eu Duis molli",
      "OptionSorting": 42528932.61861771,
      "OptionImagePath": "in et magna laboris",
      "OptionBundleCatalogId": -15747524,
      "OptionBundleQuantity": 74704082
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

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}/Options/{optionsetid}', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "OptionSetID": 61749609,
    "OptionSetName": "in ut",
    "OptionSorting": 99748271.1512287,
    "OptionRequired": true,
    "OptionType": "",
    "OptionURL": "labore do enim",
    "OptionAdditionalInformation": "sit Ut",
    "OptionSizeLimit": -82871852,
    "OptionList": [
      {
        "OptionID": -18062579,
        "OptionName": "minim do dolor",
        "OptionSelected": false,
        "OptionHide": false,
        "OptionValue": 46397503.16362211,
        "OptionPartNumber": "fugiat a",
        "OptionSorting": 14203979.922338039,
        "OptionImagePath": "sunt cillum",
        "OptionBundleCatalogId": 40637061,
        "OptionBundleQuantity": 47976905
      },
      {
        "OptionID": -16295391,
        "OptionName": "nisi consequat nostrud irure minim",
        "OptionSelected": false,
        "OptionHide": true,
        "OptionValue": 24691945.605411723,
        "OptionPartNumber": "dolor consequat sit anim et",
        "OptionSorting": 16855888.216545805,
        "OptionImagePath": "dolore velit dolor",
        "OptionBundleCatalogId": -39243530,
        "OptionBundleQuantity": -28650322
      },
      {
        "OptionID": -7500509,
        "OptionName": "reprehenderit esse Lorem",
        "OptionSelected": false,
        "OptionHide": false,
        "OptionValue": -88911676.58292814,
        "OptionPartNumber": "",
        "OptionSorting": 84212378.33072266,
        "OptionImagePath": "ex tempor laboris",
        "OptionBundleCatalogId": -3108226,
        "OptionBundleQuantity": -30463137
      },
      {
        "OptionID": 17934010,
        "OptionName": "nisi cupidatat aliqua",
        "OptionSelected": true,
        "OptionHide": true,
        "OptionValue": 16359264.555789024,
        "OptionPartNumber": "laborum eu Duis molli",
        "OptionSorting": 42528932.61861771,
        "OptionImagePath": "in et magna laboris",
        "OptionBundleCatalogId": -15747524,
        "OptionBundleQuantity": 74704082
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}/Options/{optionsetid}', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"OptionSetID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

Updates the specified Option Set in the specified Category. See [Data Structures](#optionset-object) for more information on the option set object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}/Options/{optionsetid}`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
categoryid | Required | The categoryid you are updating the options for.
optionsetid | Required | The optionsetid you are updating the options for.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code. Category options have been updated.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified Category does not exist, or there are no options.