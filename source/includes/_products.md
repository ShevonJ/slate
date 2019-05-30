#  Products

## Products

### Create a product

> To add a product to the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#product-object) for more information on the product object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"SKUInfo\": {
    \"CatalogID\": 5549196,
    \"SKU\": \"dolore occaecat\",
    \"Name\": \"ad officia reprehenderit\",
    \"Cost\": -18128193.441653237,
    \"Price\": -12795496.485453308,
    \"Currency\": \"aute cillum incididunt reprehenderit\",
    \"RetailPrice\": -85064725.10132354,
    \"SalePrice\": 4346297.001677439,
    \"OnSale\": true,
    \"Stock\": -9294195.30395341
  },
  \"MFGID\": \"labore in laborum anim aliqua\",
  \"ShortDescription\": \"in mollit\",
  \"ManufacturerID\": -93434278,
  \"ManufacturerName\": \"magna sit id non\",
  \"DistributorList\": [
    {
      \"DistributorID\": 73796011,
      \"DistributorName\": \"culpa Lorem tempor\",
      \"DistributorItemCost\": -30000679.212933123,
      \"DistributorItemID\": \"\",
      \"DistributorStockID\": \"sit sunt\"
    },
    {
      \"DistributorID\": 65749597,
      \"DistributorName\": \"ut in sit in est\",
      \"DistributorItemCost\": 59802814.13794315,
      \"DistributorItemID\": \"ut\",
      \"DistributorStockID\": \"anim elit\"
    },
    {
      \"DistributorID\": 67615115,
      \"DistributorName\": \"in deserunt nos\",
      \"DistributorItemCost\": -5776140.381086051,
      \"DistributorItemID\": \"id incididunt velit\",
      \"DistributorStockID\": \"esse Duis laboris id mag\"
    },
    {
      \"DistributorID\": 73091730,
      \"DistributorName\": \"ut laborum sint\",
      \"DistributorItemCost\": 63208139.29649508,
      \"DistributorItemID\": \"sit nostru\",
      \"DistributorStockID\": \"\"
    }
  ],
  \"LastUpdate\": \"1964-12-13T13:30:50.688Z\",
  \"UserID\": \"e\",
  \"GTIN\": \"anim pariatur\",
  \"CategoryList\": [
    {
      \"CategoryID\": 25813126,
      \"CategoryName\": \"voluptate est sint\"
    }
  ],
  \"ExternalIdsList\": [
    {
      \"ID\": 29177988,
      \"AdvancedOptionSufix\": \"nostrud\",
      \"ExternalId1\": \"anim\",
      \"ExternalId2\": \"in ea\",
      \"ExternalIdType\": \"in aliqua\"
    },
    {
      \"ID\": 29386574,
      \"AdvancedOptionSufix\": \"dolor inc\",
      \"ExternalId1\": \"adipisici\",
      \"ExternalId2\": \"quis in occaecat\",
      \"ExternalIdType\": \"repr\"
    },
    {
      \"ID\": 73611044,
      \"AdvancedOptionSufix\": \"laboris\",
      \"ExternalId1\": \"irure non amet\",
      \"ExternalId2\": \"nostrud in\",
      \"ExternalIdType\": \"a\"
    },
    {
      \"ID\": 18470631,
      \"AdvancedOptionSufix\": \"ex dolore cupidatat\",
      \"ExternalId1\": \"voluptate dolore\",
      \"ExternalId2\": \"eiusmod\",
      \"ExternalIdType\": \"qui cup\"
    },
    {
      \"ID\": -58285467,
      \"AdvancedOptionSufix\": \"occae\",
      \"ExternalId1\": \"et nostrud qui enim\",
      \"ExternalId2\": \"ve\",
      \"ExternalIdType\": \"conseq\"
    }
  ],
  \"CategoryExternalIdsList\": [
    {
      \"ID\": -88729174,
      \"CategoryID\": 19969439,
      \"ExternalId1\": \"pariatur\",
      \"ExternalIdType\": \"consectetur eu\"
    },
    {
      \"ID\": 6827252,
      \"CategoryID\": -21147158,
      \"ExternalId1\": \"quis mollit ad voluptate nul\",
      \"ExternalIdType\": \"ullamco aute\"
    }
  ],
  \"NonTaxable\": false,
  \"NotForSale\": false,
  \"Hide\": true,
  \"GiftCertificate\": true,
  \"HomeSpecial\": true,
  \"CategorySpecial\": false,
  \"NonSearchable\": true,
  \"GiftWrapItem\": true,
  \"ShipCost\": 46055464.42598286,
  \"Weight\": 56622458.94856936,
  \"Height\": 39066038.03513399,
  \"Width\": -89917587.21531373,
  \"Depth\": 24223234.719419777,
  \"SelfShip\": true,
  \"FreeShipping\": false,
  \"RewardPoints\": -31229290,
  \"RedeemPoints\": 50604682,
  \"DisableRewards\": false,
  \"StockAlert\": 70440709,
  \"ReorderQuantity\": -4915645,
  \"InStockMessage\": \"irure qui dolor\",
  \"OutOfStockMessage\": \"deserunt labore\",
  \"BackOrderMessage\": \"repr\",
  \"InventoryControl\": 42231344,
  \"WarehouseLocation\": \"labore\",
  \"WarehouseBin\": \"elit ut\",
  \"WarehouseAisle\": \"ullamco\",
  \"WarehouseCustom\": \"dolore minim dolore labore\",
  \"Description\": \"ex ipsum\",
  \"Keywords\": \"nisi aliqua do dolore\",
  \"ExtraField1\": \"aliquip occaecat\",
  \"ExtraField2\": \"in Ut culpa\",
  \"ExtraField3\": \"amet fugiat ad velit minim\",
  \"ExtraField4\": \"adipisicing Excepteur i\",
  \"ExtraField5\": \"veniam eu\",
  \"ExtraField6\": \"incididunt Lorem dolore\",
  \"ExtraField7\": \"qui nisi sint\",
  \"ExtraField8\": \"non commodo nisi ut\",
  \"ExtraField9\": \"Ut\",
  \"ExtraField10\": \"culpa sit proident\",
  \"ExtraField11\": \"nulla do ad\",
  \"ExtraField12\": \"aute\",
  \"ExtraField13\": \"dolore\",
  \"FeatureList\": [
    {
      \"FeatureID\": -80732131,
      \"FeatureTitle\": \"tempor\",
      \"FeatureDescription\": \"consectetur id\"
    },
    {
      \"FeatureID\": -64719241,
      \"FeatureTitle\": \"sed aute anim\",
      \"FeatureDescription\": \"aliqua labore Lorem dolore laboris\"
    }
  ],
  \"PluginList\": {},
  \"SampleEnable\": false,
  \"SampleName\": \"consequat mollit cillum\",
  \"SampleSKUPrefix\": \"elit do\",
  \"SamplePrice\": 52647107.36979863,
  \"SampleWeight\": -39993658.90971256,
  \"ReviewAverage\": -84993379.01474324,
  \"ReviewCount\": -29309690,
  \"MainImageFile\": \"fugiat esse consectetur minim dolore\",
  \"MainImageCaption\": \"in esse\",
  \"ThumbnailFile\": \"deserunt labore\",
  \"MediaFile\": \"dolore sunt\",
  \"AdditionalImageFile2\": \"qui magna voluptate eu dolore\",
  \"AdditionalImageCaption2\": \"pariatur esse Duis et occaecat\",
  \"AdditionalImageFile3\": \"cupidatat officia anim irure\",
  \"AdditionalImageCaption3\": \"dese\",
  \"AdditionalImageFile4\": \"magna anim aliqua\",
  \"AdditionalImageCaption4\": \"sed\",
  \"ImageGalleryList\": [
    {
      \"ImageGalleryID\": 93947868,
      \"ImageGalleryFile\": \"ipsum ull\",
      \"ImageGalleryCaption\": \"fugiat Lorem elit\",
      \"ImageGallerySorting\": 46014781
    },
    {
      \"ImageGalleryID\": -27694772,
      \"ImageGalleryFile\": \"Duis amet pariatur\",
      \"ImageGalleryCaption\": \"nostrud mollit ad\",
      \"ImageGallerySorting\": 78691755
    }
  ],
  \"OptionSetList\": [
    {
      \"OptionSetID\": -69646334,
      \"OptionSetName\": \"reprehenderit in do\",
      \"OptionSorting\": 92270875.2891916,
      \"OptionRequired\": false,
      \"OptionType\": \"ut\",
      \"OptionURL\": \"amet\",
      \"OptionAdditionalInformation\": \"labore sit nulla sint\",
      \"OptionSizeLimit\": 36794527,
      \"OptionList\": [
        {
          \"OptionID\": 80228796,
          \"OptionName\": \"et\",
          \"OptionSelected\": false,
          \"OptionHide\": false,
          \"OptionValue\": 55623049.8987332,
          \"OptionPartNumber\": \"veniam laboris dolor\",
          \"OptionSorting\": -74392566.58937156,
          \"OptionImagePath\": \"voluptate officia ex\",
          \"OptionBundleCatalogId\": 10158804,
          \"OptionBundleQuantity\": -90825041
        },
        {
          \"OptionID\": -45446246,
          \"OptionName\": \"eu Duis nisi culpa\",
          \"OptionSelected\": true,
          \"OptionHide\": false,
          \"OptionValue\": 14593052.83329311,
          \"OptionPartNumber\": \"dolor quis labore sed\",
          \"OptionSorting\": 28915023.612949178,
          \"OptionImagePath\": \"aute in\",
          \"OptionBundleCatalogId\": -10332725,
          \"OptionBundleQuantity\": -64422940
        },
        {
          \"OptionID\": 76220317,
          \"OptionName\": \"dolore occaecat\",
          \"OptionSelected\": false,
          \"OptionHide\": true,
          \"OptionValue\": 81824817.61989307,
          \"OptionPartNumber\": \"cillum pariat\",
          \"OptionSorting\": -49748803.67471037,
          \"OptionImagePath\": \"eu\",
          \"OptionBundleCatalogId\": -92912523,
          \"OptionBundleQuantity\": -51165587
        },
        {
          \"OptionID\": 93721851,
          \"OptionName\": \"qui in\",
          \"OptionSelected\": false,
          \"OptionHide\": true,
          \"OptionValue\": -50322378.31519586,
          \"OptionPartNumber\": \"non adipis\",
          \"OptionSorting\": -91328384.81549959,
          \"OptionImagePath\": \"in reprehenderit ad dol\",
          \"OptionBundleCatalogId\": -79304784,
          \"OptionBundleQuantity\": -63553726
        }
      ]
    },
    {
      \"OptionSetID\": -35572675,
      \"OptionSetName\": \"amet sed aliqua ullamco\",
      \"OptionSorting\": 99700339.09028658,
      \"OptionRequired\": false,
      \"OptionType\": \"Ex\",
      \"OptionURL\": \"officia eu\",
      \"OptionAdditionalInformation\": \"ullamco est voluptate Ut in\",
      \"OptionSizeLimit\": 55369931,
      \"OptionList\": [
        {
          \"OptionID\": 13148668,
          \"OptionName\": \"ea nostrud\",
          \"OptionSelected\": true,
          \"OptionHide\": true,
          \"OptionValue\": -16631925.454355657,
          \"OptionPartNumber\": \"ali\",
          \"OptionSorting\": 54900867.54881421,
          \"OptionImagePath\": \"dolor magna\",
          \"OptionBundleCatalogId\": -50460761,
          \"OptionBundleQuantity\": 31123265
        },
        {
          \"OptionID\": -23701556,
          \"OptionName\": \"Excepteur aliqua\",
          \"OptionSelected\": false,
          \"OptionHide\": false,
          \"OptionValue\": 80544652.12607923,
          \"OptionPartNumber\": \"officia dolor sint fugiat\",
          \"OptionSorting\": 57703487.021828085,
          \"OptionImagePath\": \"do mollit\",
          \"OptionBundleCatalogId\": -25664217,
          \"OptionBundleQuantity\": 54667003
        }
      ]
    },
    {
      \"OptionSetID\": 51838031,
      \"OptionSetName\": \"magna ad fugiat ex exerci\",
      \"OptionSorting\": -14619305.27911593,
      \"OptionRequired\": false,
      \"OptionType\": \"Duis sun\",
      \"OptionURL\": \"occaecat Duis\",
      \"OptionAdditionalInformation\": \"elit mollit\",
      \"OptionSizeLimit\": 27273001,
      \"OptionList\": [
        {
          \"OptionID\": -29052683,
          \"OptionName\": \"in\",
          \"OptionSelected\": false,
          \"OptionHide\": true,
          \"OptionValue\": 23357387.488409027,
          \"OptionPartNumber\": \"Duis ipsum reprehenderit minim\",
          \"OptionSorting\": -21419531.206009164,
          \"OptionImagePath\": \"proident dolor\",
          \"OptionBundleCatalogId\": -45693313,
          \"OptionBundleQuantity\": 50527721
        },
        {
          \"OptionID\": 34411609,
          \"OptionName\": \"anim elit ut\",
          \"OptionSelected\": false,
          \"OptionHide\": false,
          \"OptionValue\": -72458641.55404288,
          \"OptionPartNumber\": \"in\",
          \"OptionSorting\": -97197595.95417297,
          \"OptionImagePath\": \"temp\",
          \"OptionBundleCatalogId\": -95889149,
          \"OptionBundleQuantity\": 70695356
        },
        {
          \"OptionID\": 79374564,
          \"OptionName\": \"commodo magna laborum reprehenderit\",
          \"OptionSelected\": true,
          \"OptionHide\": false,
          \"OptionValue\": 77296505.63058707,
          \"OptionPartNumber\": \"adipisicing\",
          \"OptionSorting\": -60879486.36640106,
          \"OptionImagePath\": \"adipis\",
          \"OptionBundleCatalogId\": 69711902,
          \"OptionBundleQuantity\": 79341092
        },
        {
          \"OptionID\": -89976635,
          \"OptionName\": \"voluptate Excepteur velit anim labore\",
          \"OptionSelected\": false,
          \"OptionHide\": true,
          \"OptionValue\": 84938596.4000287,
          \"OptionPartNumber\": \"labore sed in\",
          \"OptionSorting\": 72345152.10477185,
          \"OptionImagePath\": \"labore irure\",
          \"OptionBundleCatalogId\": -35456939,
          \"OptionBundleQuantity\": 76322969
        },
        {
          \"OptionID\": 83860928,
          \"OptionName\": \"elit pariatur nostrud\",
          \"OptionSelected\": true,
          \"OptionHide\": true,
          \"OptionValue\": -20602419.857833937,
          \"OptionPartNumber\": \"in ipsum co\",
          \"OptionSorting\": 38738756.258484125,
          \"OptionImagePath\": \"anim proident\",
          \"OptionBundleCatalogId\": -72068641,
          \"OptionBundleQuantity\": 88579345
        }
      ]
    },
    {
      \"OptionSetID\": 4271602,
      \"OptionSetName\": \"cupidatat veniam consequat irure\",
      \"OptionSorting\": -14739479.974589825,
      \"OptionRequired\": true,
      \"OptionType\": \"dolor\",
      \"OptionURL\": \"ullamco ut\",
      \"OptionAdditionalInformation\": \"dolore exercitation adipisicing\",
      \"OptionSizeLimit\": 17919262,
      \"OptionList\": [
        {
          \"OptionID\": -81112253,
          \"OptionName\": \"tempor mollit non anim\",
          \"OptionSelected\": true,
          \"OptionHide\": false,
          \"OptionValue\": 60977280.72535828,
          \"OptionPartNumber\": \"consequat et id tempor\",
          \"OptionSorting\": -25409869.928072527,
          \"OptionImagePath\": \"officia ad non proident\",
          \"OptionBundleCatalogId\": -31107751,
          \"OptionBundleQuantity\": -19845982
        },
        {
          \"OptionID\": -93858758,
          \"OptionName\": \"est\",
          \"OptionSelected\": false,
          \"OptionHide\": true,
          \"OptionValue\": -10270598.928671107,
          \"OptionPartNumber\": \"Lorem proident dolor nisi\",
          \"OptionSorting\": 68113055.15652534,
          \"OptionImagePath\": \"in enim\",
          \"OptionBundleCatalogId\": 24942271,
          \"OptionBundleQuantity\": -52934623
        }
      ]
    }
  ],
  \"AdvancedOptionList\": [
    {
      \"AdvancedOptionCode\": \"id ut\",
      \"AdvancedOptionSufix\": \"minim deserunt velit ad\",
      \"AdvancedOptionName\": \"velit anim\",
      \"AdvancedOptionCost\": 39084681.60161328,
      \"AdvancedOptionStock\": 34222726,
      \"AdvancedOptionWeight\": -88006732.64687298,
      \"AdvancedOptionPrice\": -88239040.15319215,
      \"AdvancedOptionGTIN\": \"cupidatat magna et\"
    }
  ],
  \"RelatedProductList\": [
    {
      \"RelatedIndexID\": 27968629,
      \"RelatedProductID\": -95525200,
      \"RelatedProductSorting\": 85427066
    },
    {
      \"RelatedIndexID\": 15656045,
      \"RelatedProductID\": 52941563,
      \"RelatedProductSorting\": -41967109
    },
    {
      \"RelatedIndexID\": -89150145,
      \"RelatedProductID\": -4937041,
      \"RelatedProductSorting\": -48278087
    },
    {
      \"RelatedIndexID\": 918987,
      \"RelatedProductID\": -51817314,
      \"RelatedProductSorting\": 73219839
    }
  ],
  \"UpSellingItemList\": [
    {
      \"UpSellingIndexID\": 18218798,
      \"UpSellingItemID\": -3621930,
      \"UpSellingItemSorting\": 76454676
    },
    {
      \"UpSellingIndexID\": -67777224,
      \"UpSellingItemID\": -54042324,
      \"UpSellingItemSorting\": 3363291
    },
    {
      \"UpSellingIndexID\": 77578887,
      \"UpSellingItemID\": -57428973,
      \"UpSellingItemSorting\": -95864799
    },
    {
      \"UpSellingIndexID\": 83383775,
      \"UpSellingItemID\": 57368463,
      \"UpSellingItemSorting\": 25004901
    }
  ],
  \"DiscountList\": [
    {
      \"DiscountID\": 74384927,
      \"DiscountPriceLevel\": 67653514,
      \"DiscountLowbound\": -12290631,
      \"DiscountUpbound\": 94279777,
      \"DiscountPrice\": 73940160.9020344,
      \"DiscountPercentage\": false
    },
    {
      \"DiscountID\": -63898723,
      \"DiscountPriceLevel\": -17197711,
      \"DiscountLowbound\": -92759546,
      \"DiscountUpbound\": -29938018,
      \"DiscountPrice\": 81190229.41320094,
      \"DiscountPercentage\": true
    }
  ],
  \"DoNotUseCategoryOptions\": false,
  \"DateCreated\": \"1978-08-01T07:11:34.147Z\",
  \"ListingTemplateID\": -72972336,
  \"ListingTemplateName\": \"consequat pariatur qui\",
  \"LoginRequiredOptionID\": -68205568,
  \"LoginRequiredOptionName\": \"dolor anim sed amet consectetur\",
  \"LoginRequiredOptionRedirectTo\": \"ex ut commodo non\",
  \"AllowAccessCustomerGroupID\": 89982562,
  \"AllowAccessCustomerGroupName\": \"ea anim\",
  \"RMAMaxPeriod\": \"velit aliquip\",
  \"CanonicalUrl\": \"enim et aliqua\",
  \"TaxCode\": \"{`Zt\",
  \"DisplayText\": \"eu incididunt est sint\",
  \"MinimumQuantity\": 69571765.83819914,
  \"MaximumQuantity\": 74826307.09530026,
  \"AllowOnlyMultiples\": false,
  \"AllowFractionalQuantity\": true,
  \"QuantityOptions\": \"esse non incididunt aliquip\",
  \"GroupOptionsForQuantityPricing\": false,
  \"ApplyQuantityDiscountToOptions\": true,
  \"EnableMakeAnOfferFeature\": false,
  \"MinimumAcceptableOffer\": \"irure \",
  \"PriceLevel1\": 95063005.54670578,
  \"PriceLevel1Hide\": true,
  \"PriceLevel2\": 37967218.97883853,
  \"PriceLevel2Hide\": false,
  \"PriceLevel3\": 52483464.42231068,
  \"PriceLevel3Hide\": false,
  \"PriceLevel4\": 50607069.99263239,
  \"PriceLevel4Hide\": true,
  \"PriceLevel5\": -24448642.54785566,
  \"PriceLevel5Hide\": false,
  \"PriceLevel6\": -78375262.60727637,
  \"PriceLevel6Hide\": false,
  \"PriceLevel7\": 590307.7130752504,
  \"PriceLevel7Hide\": false,
  \"PriceLevel8\": 52722533.036241174,
  \"PriceLevel8Hide\": true,
  \"PriceLevel9\": -1128578.2064807117,
  \"PriceLevel9Hide\": false,
  \"PriceLevel10\": 72821811.21485594,
  \"PriceLevel10Hide\": false,
  \"BuyButtonLink\": \"veniam non Ut\",
  \"ProductLink\": \"minim incididunt et esse\",
  \"Title\": \"consectetur dolore\",
  \"CustomFileName\": \"qui dolore veniam mollit ad\",
  \"RedirectLink\": \"fugiat dolore proident\",
  \"MetaTags\": \"aute Excepteur sed\",
  \"SpecialInstructions\": \"enim\",
  \"AssignKey\": true,
  \"ReUseKeys\": true,
  \"SerialList\": [
    {
      \"SerialID\": -406765,
      \"SerialUses\": 81297686,
      \"SerialCode\": \"in officia sed\"
    }
  ],
  \"EProductList\": [
    {
      \"FileNumber\": 8788339,
      \"FilePath\": \"consequat ut dolore\"
    },
    {
      \"FileNumber\": 31017703,
      \"FilePath\": \"mollit nostrud aliquip\"
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
  
    using (var content = new StringContent("{  \"SKUInfo\": {    \"CatalogID\": 5549196,    \"SKU\": \"dolore occaecat\",    \"Name\": \"ad officia reprehenderit\",    \"Cost\": -18128193.441653237,    \"Price\": -12795496.485453308,    \"Currency\": \"aute cillum incididunt reprehenderit\",    \"RetailPrice\": -85064725.10132354,    \"SalePrice\": 4346297.001677439,    \"OnSale\": true,    \"Stock\": -9294195.30395341  },  \"MFGID\": \"labore in laborum anim aliqua\",  \"ShortDescription\": \"in mollit\",  \"ManufacturerID\": -93434278,  \"ManufacturerName\": \"magna sit id non\",  \"DistributorList\": [    {      \"DistributorID\": 73796011,      \"DistributorName\": \"culpa Lorem tempor\",      \"DistributorItemCost\": -30000679.212933123,      \"DistributorItemID\": \"\",      \"DistributorStockID\": \"sit sunt\"    },    {      \"DistributorID\": 65749597,      \"DistributorName\": \"ut in sit in est\",      \"DistributorItemCost\": 59802814.13794315,      \"DistributorItemID\": \"ut\",      \"DistributorStockID\": \"anim elit\"    },    {      \"DistributorID\": 67615115,      \"DistributorName\": \"in deserunt nos\",      \"DistributorItemCost\": -5776140.381086051,      \"DistributorItemID\": \"id incididunt velit\",      \"DistributorStockID\": \"esse Duis laboris id mag\"    },    {      \"DistributorID\": 73091730,      \"DistributorName\": \"ut laborum sint\",      \"DistributorItemCost\": 63208139.29649508,      \"DistributorItemID\": \"sit nostru\",      \"DistributorStockID\": \"\"    }  ],  \"LastUpdate\": \"1964-12-13T13:30:50.688Z\",  \"UserID\": \"e\",  \"GTIN\": \"anim pariatur\",  \"CategoryList\": [    {      \"CategoryID\": 25813126,      \"CategoryName\": \"voluptate est sint\"    }  ],  \"ExternalIdsList\": [    {      \"ID\": 29177988,      \"AdvancedOptionSufix\": \"nostrud\",      \"ExternalId1\": \"anim\",      \"ExternalId2\": \"in ea\",      \"ExternalIdType\": \"in aliqua\"    },    {      \"ID\": 29386574,      \"AdvancedOptionSufix\": \"dolor inc\",      \"ExternalId1\": \"adipisici\",      \"ExternalId2\": \"quis in occaecat\",      \"ExternalIdType\": \"repr\"    },    {      \"ID\": 73611044,      \"AdvancedOptionSufix\": \"laboris\",      \"ExternalId1\": \"irure non amet\",      \"ExternalId2\": \"nostrud in\",      \"ExternalIdType\": \"a\"    },    {      \"ID\": 18470631,      \"AdvancedOptionSufix\": \"ex dolore cupidatat\",      \"ExternalId1\": \"voluptate dolore\",      \"ExternalId2\": \"eiusmod\",      \"ExternalIdType\": \"qui cup\"    },    {      \"ID\": -58285467,      \"AdvancedOptionSufix\": \"occae\",      \"ExternalId1\": \"et nostrud qui enim\",      \"ExternalId2\": \"ve\",      \"ExternalIdType\": \"conseq\"    }  ],  \"CategoryExternalIdsList\": [    {      \"ID\": -88729174,      \"CategoryID\": 19969439,      \"ExternalId1\": \"pariatur\",      \"ExternalIdType\": \"consectetur eu\"    },    {      \"ID\": 6827252,      \"CategoryID\": -21147158,      \"ExternalId1\": \"quis mollit ad voluptate nul\",      \"ExternalIdType\": \"ullamco aute\"    }  ],  \"NonTaxable\": false,  \"NotForSale\": false,  \"Hide\": true,  \"GiftCertificate\": true,  \"HomeSpecial\": true,  \"CategorySpecial\": false,  \"NonSearchable\": true,  \"GiftWrapItem\": true,  \"ShipCost\": 46055464.42598286,  \"Weight\": 56622458.94856936,  \"Height\": 39066038.03513399,  \"Width\": -89917587.21531373,  \"Depth\": 24223234.719419777,  \"SelfShip\": true,  \"FreeShipping\": false,  \"RewardPoints\": -31229290,  \"RedeemPoints\": 50604682,  \"DisableRewards\": false,  \"StockAlert\": 70440709,  \"ReorderQuantity\": -4915645,  \"InStockMessage\": \"irure qui dolor\",  \"OutOfStockMessage\": \"deserunt labore\",  \"BackOrderMessage\": \"repr\",  \"InventoryControl\": 42231344,  \"WarehouseLocation\": \"labore\",  \"WarehouseBin\": \"elit ut\",  \"WarehouseAisle\": \"ullamco\",  \"WarehouseCustom\": \"dolore minim dolore labore\",  \"Description\": \"ex ipsum\",  \"Keywords\": \"nisi aliqua do dolore\",  \"ExtraField1\": \"aliquip occaecat\",  \"ExtraField2\": \"in Ut culpa\",  \"ExtraField3\": \"amet fugiat ad velit minim\",  \"ExtraField4\": \"adipisicing Excepteur i\",  \"ExtraField5\": \"veniam eu\",  \"ExtraField6\": \"incididunt Lorem dolore\",  \"ExtraField7\": \"qui nisi sint\",  \"ExtraField8\": \"non commodo nisi ut\",  \"ExtraField9\": \"Ut\",  \"ExtraField10\": \"culpa sit proident\",  \"ExtraField11\": \"nulla do ad\",  \"ExtraField12\": \"aute\",  \"ExtraField13\": \"dolore\",  \"FeatureList\": [    {      \"FeatureID\": -80732131,      \"FeatureTitle\": \"tempor\",      \"FeatureDescription\": \"consectetur id\"    },    {      \"FeatureID\": -64719241,      \"FeatureTitle\": \"sed aute anim\",      \"FeatureDescription\": \"aliqua labore Lorem dolore laboris\"    }  ],  \"PluginList\": {},  \"SampleEnable\": false,  \"SampleName\": \"consequat mollit cillum\",  \"SampleSKUPrefix\": \"elit do\",  \"SamplePrice\": 52647107.36979863,  \"SampleWeight\": -39993658.90971256,  \"ReviewAverage\": -84993379.01474324,  \"ReviewCount\": -29309690,  \"MainImageFile\": \"fugiat esse consectetur minim dolore\",  \"MainImageCaption\": \"in esse\",  \"ThumbnailFile\": \"deserunt labore\",  \"MediaFile\": \"dolore sunt\",  \"AdditionalImageFile2\": \"qui magna voluptate eu dolore\",  \"AdditionalImageCaption2\": \"pariatur esse Duis et occaecat\",  \"AdditionalImageFile3\": \"cupidatat officia anim irure\",  \"AdditionalImageCaption3\": \"dese\",  \"AdditionalImageFile4\": \"magna anim aliqua\",  \"AdditionalImageCaption4\": \"sed\",  \"ImageGalleryList\": [    {      \"ImageGalleryID\": 93947868,      \"ImageGalleryFile\": \"ipsum ull\",      \"ImageGalleryCaption\": \"fugiat Lorem elit\",      \"ImageGallerySorting\": 46014781    },    {      \"ImageGalleryID\": -27694772,      \"ImageGalleryFile\": \"Duis amet pariatur\",      \"ImageGalleryCaption\": \"nostrud mollit ad\",      \"ImageGallerySorting\": 78691755    }  ],  \"OptionSetList\": [    {      \"OptionSetID\": -69646334,      \"OptionSetName\": \"reprehenderit in do\",      \"OptionSorting\": 92270875.2891916,      \"OptionRequired\": false,      \"OptionType\": \"ut\",      \"OptionURL\": \"amet\",      \"OptionAdditionalInformation\": \"labore sit nulla sint\",      \"OptionSizeLimit\": 36794527,      \"OptionList\": [        {          \"OptionID\": 80228796,          \"OptionName\": \"et\",          \"OptionSelected\": false,          \"OptionHide\": false,          \"OptionValue\": 55623049.8987332,          \"OptionPartNumber\": \"veniam laboris dolor\",          \"OptionSorting\": -74392566.58937156,          \"OptionImagePath\": \"voluptate officia ex\",          \"OptionBundleCatalogId\": 10158804,          \"OptionBundleQuantity\": -90825041        },        {          \"OptionID\": -45446246,          \"OptionName\": \"eu Duis nisi culpa\",          \"OptionSelected\": true,          \"OptionHide\": false,          \"OptionValue\": 14593052.83329311,          \"OptionPartNumber\": \"dolor quis labore sed\",          \"OptionSorting\": 28915023.612949178,          \"OptionImagePath\": \"aute in\",          \"OptionBundleCatalogId\": -10332725,          \"OptionBundleQuantity\": -64422940        },        {          \"OptionID\": 76220317,          \"OptionName\": \"dolore occaecat\",          \"OptionSelected\": false,          \"OptionHide\": true,          \"OptionValue\": 81824817.61989307,          \"OptionPartNumber\": \"cillum pariat\",          \"OptionSorting\": -49748803.67471037,          \"OptionImagePath\": \"eu\",          \"OptionBundleCatalogId\": -92912523,          \"OptionBundleQuantity\": -51165587        },        {          \"OptionID\": 93721851,          \"OptionName\": \"qui in\",          \"OptionSelected\": false,          \"OptionHide\": true,          \"OptionValue\": -50322378.31519586,          \"OptionPartNumber\": \"non adipis\",          \"OptionSorting\": -91328384.81549959,          \"OptionImagePath\": \"in reprehenderit ad dol\",          \"OptionBundleCatalogId\": -79304784,          \"OptionBundleQuantity\": -63553726        }      ]    },    {      \"OptionSetID\": -35572675,      \"OptionSetName\": \"amet sed aliqua ullamco\",      \"OptionSorting\": 99700339.09028658,      \"OptionRequired\": false,      \"OptionType\": \"Ex\",      \"OptionURL\": \"officia eu\",      \"OptionAdditionalInformation\": \"ullamco est voluptate Ut in\",      \"OptionSizeLimit\": 55369931,      \"OptionList\": [        {          \"OptionID\": 13148668,          \"OptionName\": \"ea nostrud\",          \"OptionSelected\": true,          \"OptionHide\": true,          \"OptionValue\": -16631925.454355657,          \"OptionPartNumber\": \"ali\",          \"OptionSorting\": 54900867.54881421,          \"OptionImagePath\": \"dolor magna\",          \"OptionBundleCatalogId\": -50460761,          \"OptionBundleQuantity\": 31123265        },        {          \"OptionID\": -23701556,          \"OptionName\": \"Excepteur aliqua\",          \"OptionSelected\": false,          \"OptionHide\": false,          \"OptionValue\": 80544652.12607923,          \"OptionPartNumber\": \"officia dolor sint fugiat\",          \"OptionSorting\": 57703487.021828085,          \"OptionImagePath\": \"do mollit\",          \"OptionBundleCatalogId\": -25664217,          \"OptionBundleQuantity\": 54667003        }      ]    },    {      \"OptionSetID\": 51838031,      \"OptionSetName\": \"magna ad fugiat ex exerci\",      \"OptionSorting\": -14619305.27911593,      \"OptionRequired\": false,      \"OptionType\": \"Duis sun\",      \"OptionURL\": \"occaecat Duis\",      \"OptionAdditionalInformation\": \"elit mollit\",      \"OptionSizeLimit\": 27273001,      \"OptionList\": [        {          \"OptionID\": -29052683,          \"OptionName\": \"in\",          \"OptionSelected\": false,          \"OptionHide\": true,          \"OptionValue\": 23357387.488409027,          \"OptionPartNumber\": \"Duis ipsum reprehenderit minim\",          \"OptionSorting\": -21419531.206009164,          \"OptionImagePath\": \"proident dolor\",          \"OptionBundleCatalogId\": -45693313,          \"OptionBundleQuantity\": 50527721        },        {          \"OptionID\": 34411609,          \"OptionName\": \"anim elit ut\",          \"OptionSelected\": false,          \"OptionHide\": false,          \"OptionValue\": -72458641.55404288,          \"OptionPartNumber\": \"in\",          \"OptionSorting\": -97197595.95417297,          \"OptionImagePath\": \"temp\",          \"OptionBundleCatalogId\": -95889149,          \"OptionBundleQuantity\": 70695356        },        {          \"OptionID\": 79374564,          \"OptionName\": \"commodo magna laborum reprehenderit\",          \"OptionSelected\": true,          \"OptionHide\": false,          \"OptionValue\": 77296505.63058707,          \"OptionPartNumber\": \"adipisicing\",          \"OptionSorting\": -60879486.36640106,          \"OptionImagePath\": \"adipis\",          \"OptionBundleCatalogId\": 69711902,          \"OptionBundleQuantity\": 79341092        },        {          \"OptionID\": -89976635,          \"OptionName\": \"voluptate Excepteur velit anim labore\",          \"OptionSelected\": false,          \"OptionHide\": true,          \"OptionValue\": 84938596.4000287,          \"OptionPartNumber\": \"labore sed in\",          \"OptionSorting\": 72345152.10477185,          \"OptionImagePath\": \"labore irure\",          \"OptionBundleCatalogId\": -35456939,          \"OptionBundleQuantity\": 76322969        },        {          \"OptionID\": 83860928,          \"OptionName\": \"elit pariatur nostrud\",          \"OptionSelected\": true,          \"OptionHide\": true,          \"OptionValue\": -20602419.857833937,          \"OptionPartNumber\": \"in ipsum co\",          \"OptionSorting\": 38738756.258484125,          \"OptionImagePath\": \"anim proident\",          \"OptionBundleCatalogId\": -72068641,          \"OptionBundleQuantity\": 88579345        }      ]    },    {      \"OptionSetID\": 4271602,      \"OptionSetName\": \"cupidatat veniam consequat irure\",      \"OptionSorting\": -14739479.974589825,      \"OptionRequired\": true,      \"OptionType\": \"dolor\",      \"OptionURL\": \"ullamco ut\",      \"OptionAdditionalInformation\": \"dolore exercitation adipisicing\",      \"OptionSizeLimit\": 17919262,      \"OptionList\": [        {          \"OptionID\": -81112253,          \"OptionName\": \"tempor mollit non anim\",          \"OptionSelected\": true,          \"OptionHide\": false,          \"OptionValue\": 60977280.72535828,          \"OptionPartNumber\": \"consequat et id tempor\",          \"OptionSorting\": -25409869.928072527,          \"OptionImagePath\": \"officia ad non proident\",          \"OptionBundleCatalogId\": -31107751,          \"OptionBundleQuantity\": -19845982        },        {          \"OptionID\": -93858758,          \"OptionName\": \"est\",          \"OptionSelected\": false,          \"OptionHide\": true,          \"OptionValue\": -10270598.928671107,          \"OptionPartNumber\": \"Lorem proident dolor nisi\",          \"OptionSorting\": 68113055.15652534,          \"OptionImagePath\": \"in enim\",          \"OptionBundleCatalogId\": 24942271,          \"OptionBundleQuantity\": -52934623        }      ]    }  ],  \"AdvancedOptionList\": [    {      \"AdvancedOptionCode\": \"id ut\",      \"AdvancedOptionSufix\": \"minim deserunt velit ad\",      \"AdvancedOptionName\": \"velit anim\",      \"AdvancedOptionCost\": 39084681.60161328,      \"AdvancedOptionStock\": 34222726,      \"AdvancedOptionWeight\": -88006732.64687298,      \"AdvancedOptionPrice\": -88239040.15319215,      \"AdvancedOptionGTIN\": \"cupidatat magna et\"    }  ],  \"RelatedProductList\": [    {      \"RelatedIndexID\": 27968629,      \"RelatedProductID\": -95525200,      \"RelatedProductSorting\": 85427066    },    {      \"RelatedIndexID\": 15656045,      \"RelatedProductID\": 52941563,      \"RelatedProductSorting\": -41967109    },    {      \"RelatedIndexID\": -89150145,      \"RelatedProductID\": -4937041,      \"RelatedProductSorting\": -48278087    },    {      \"RelatedIndexID\": 918987,      \"RelatedProductID\": -51817314,      \"RelatedProductSorting\": 73219839    }  ],  \"UpSellingItemList\": [    {      \"UpSellingIndexID\": 18218798,      \"UpSellingItemID\": -3621930,      \"UpSellingItemSorting\": 76454676    },    {      \"UpSellingIndexID\": -67777224,      \"UpSellingItemID\": -54042324,      \"UpSellingItemSorting\": 3363291    },    {      \"UpSellingIndexID\": 77578887,      \"UpSellingItemID\": -57428973,      \"UpSellingItemSorting\": -95864799    },    {      \"UpSellingIndexID\": 83383775,      \"UpSellingItemID\": 57368463,      \"UpSellingItemSorting\": 25004901    }  ],  \"DiscountList\": [    {      \"DiscountID\": 74384927,      \"DiscountPriceLevel\": 67653514,      \"DiscountLowbound\": -12290631,      \"DiscountUpbound\": 94279777,      \"DiscountPrice\": 73940160.9020344,      \"DiscountPercentage\": false    },    {      \"DiscountID\": -63898723,      \"DiscountPriceLevel\": -17197711,      \"DiscountLowbound\": -92759546,      \"DiscountUpbound\": -29938018,      \"DiscountPrice\": 81190229.41320094,      \"DiscountPercentage\": true    }  ],  \"DoNotUseCategoryOptions\": false,  \"DateCreated\": \"1978-08-01T07:11:34.147Z\",  \"ListingTemplateID\": -72972336,  \"ListingTemplateName\": \"consequat pariatur qui\",  \"LoginRequiredOptionID\": -68205568,  \"LoginRequiredOptionName\": \"dolor anim sed amet consectetur\",  \"LoginRequiredOptionRedirectTo\": \"ex ut commodo non\",  \"AllowAccessCustomerGroupID\": 89982562,  \"AllowAccessCustomerGroupName\": \"ea anim\",  \"RMAMaxPeriod\": \"velit aliquip\",  \"CanonicalUrl\": \"enim et aliqua\",  \"TaxCode\": \"{`Zt\",  \"DisplayText\": \"eu incididunt est sint\",  \"MinimumQuantity\": 69571765.83819914,  \"MaximumQuantity\": 74826307.09530026,  \"AllowOnlyMultiples\": false,  \"AllowFractionalQuantity\": true,  \"QuantityOptions\": \"esse non incididunt aliquip\",  \"GroupOptionsForQuantityPricing\": false,  \"ApplyQuantityDiscountToOptions\": true,  \"EnableMakeAnOfferFeature\": false,  \"MinimumAcceptableOffer\": \"irure \",  \"PriceLevel1\": 95063005.54670578,  \"PriceLevel1Hide\": true,  \"PriceLevel2\": 37967218.97883853,  \"PriceLevel2Hide\": false,  \"PriceLevel3\": 52483464.42231068,  \"PriceLevel3Hide\": false,  \"PriceLevel4\": 50607069.99263239,  \"PriceLevel4Hide\": true,  \"PriceLevel5\": -24448642.54785566,  \"PriceLevel5Hide\": false,  \"PriceLevel6\": -78375262.60727637,  \"PriceLevel6Hide\": false,  \"PriceLevel7\": 590307.7130752504,  \"PriceLevel7Hide\": false,  \"PriceLevel8\": 52722533.036241174,  \"PriceLevel8Hide\": true,  \"PriceLevel9\": -1128578.2064807117,  \"PriceLevel9Hide\": false,  \"PriceLevel10\": 72821811.21485594,  \"PriceLevel10Hide\": false,  \"BuyButtonLink\": \"veniam non Ut\",  \"ProductLink\": \"minim incididunt et esse\",  \"Title\": \"consectetur dolore\",  \"CustomFileName\": \"qui dolore veniam mollit ad\",  \"RedirectLink\": \"fugiat dolore proident\",  \"MetaTags\": \"aute Excepteur sed\",  \"SpecialInstructions\": \"enim\",  \"AssignKey\": true,  \"ReUseKeys\": true,  \"SerialList\": [    {      \"SerialID\": -406765,      \"SerialUses\": 81297686,      \"SerialCode\": \"in officia sed\"    }  ],  \"EProductList\": [    {      \"FileNumber\": 8788339,      \"FilePath\": \"consequat ut dolore\"    },    {      \"FileNumber\": 31017703,      \"FilePath\": \"mollit nostrud aliquip\"    }  ]}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("3dCartWebAPI/v1/Products", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products');

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
  'SKUInfo': {
    'CatalogID': 5549196,
    'SKU': 'dolore occaecat',
    'Name': 'ad officia reprehenderit',
    'Cost': -18128193.441653237,
    'Price': -12795496.485453308,
    'Currency': 'aute cillum incididunt reprehenderit',
    'RetailPrice': -85064725.10132354,
    'SalePrice': 4346297.001677439,
    'OnSale': true,
    'Stock': -9294195.30395341
  },
  'MFGID': 'labore in laborum anim aliqua',
  'ShortDescription': 'in mollit',
  'ManufacturerID': -93434278,
  'ManufacturerName': 'magna sit id non',
  'DistributorList': [
    {
      'DistributorID': 73796011,
      'DistributorName': 'culpa Lorem tempor',
      'DistributorItemCost': -30000679.212933123,
      'DistributorItemID': '',
      'DistributorStockID': 'sit sunt'
    },
    {
      'DistributorID': 65749597,
      'DistributorName': 'ut in sit in est',
      'DistributorItemCost': 59802814.13794315,
      'DistributorItemID': 'ut',
      'DistributorStockID': 'anim elit'
    },
    {
      'DistributorID': 67615115,
      'DistributorName': 'in deserunt nos',
      'DistributorItemCost': -5776140.381086051,
      'DistributorItemID': 'id incididunt velit',
      'DistributorStockID': 'esse Duis laboris id mag'
    },
    {
      'DistributorID': 73091730,
      'DistributorName': 'ut laborum sint',
      'DistributorItemCost': 63208139.29649508,
      'DistributorItemID': 'sit nostru',
      'DistributorStockID': ''
    }
  ],
  'LastUpdate': '1964-12-13T13:30:50.688Z',
  'UserID': 'e',
  'GTIN': 'anim pariatur',
  'CategoryList': [
    {
      'CategoryID': 25813126,
      'CategoryName': 'voluptate est sint'
    }
  ],
  'ExternalIdsList': [
    {
      'ID': 29177988,
      'AdvancedOptionSufix': 'nostrud',
      'ExternalId1': 'anim',
      'ExternalId2': 'in ea',
      'ExternalIdType': 'in aliqua'
    },
    {
      'ID': 29386574,
      'AdvancedOptionSufix': 'dolor inc',
      'ExternalId1': 'adipisici',
      'ExternalId2': 'quis in occaecat',
      'ExternalIdType': 'repr'
    },
    {
      'ID': 73611044,
      'AdvancedOptionSufix': 'laboris',
      'ExternalId1': 'irure non amet',
      'ExternalId2': 'nostrud in',
      'ExternalIdType': 'a'
    },
    {
      'ID': 18470631,
      'AdvancedOptionSufix': 'ex dolore cupidatat',
      'ExternalId1': 'voluptate dolore',
      'ExternalId2': 'eiusmod',
      'ExternalIdType': 'qui cup'
    },
    {
      'ID': -58285467,
      'AdvancedOptionSufix': 'occae',
      'ExternalId1': 'et nostrud qui enim',
      'ExternalId2': 've',
      'ExternalIdType': 'conseq'
    }
  ],
  'CategoryExternalIdsList': [
    {
      'ID': -88729174,
      'CategoryID': 19969439,
      'ExternalId1': 'pariatur',
      'ExternalIdType': 'consectetur eu'
    },
    {
      'ID': 6827252,
      'CategoryID': -21147158,
      'ExternalId1': 'quis mollit ad voluptate nul',
      'ExternalIdType': 'ullamco aute'
    }
  ],
  'NonTaxable': false,
  'NotForSale': false,
  'Hide': true,
  'GiftCertificate': true,
  'HomeSpecial': true,
  'CategorySpecial': false,
  'NonSearchable': true,
  'GiftWrapItem': true,
  'ShipCost': 46055464.42598286,
  'Weight': 56622458.94856936,
  'Height': 39066038.03513399,
  'Width': -89917587.21531373,
  'Depth': 24223234.719419777,
  'SelfShip': true,
  'FreeShipping': false,
  'RewardPoints': -31229290,
  'RedeemPoints': 50604682,
  'DisableRewards': false,
  'StockAlert': 70440709,
  'ReorderQuantity': -4915645,
  'InStockMessage': 'irure qui dolor',
  'OutOfStockMessage': 'deserunt labore',
  'BackOrderMessage': 'repr',
  'InventoryControl': 42231344,
  'WarehouseLocation': 'labore',
  'WarehouseBin': 'elit ut',
  'WarehouseAisle': 'ullamco',
  'WarehouseCustom': 'dolore minim dolore labore',
  'Description': 'ex ipsum',
  'Keywords': 'nisi aliqua do dolore',
  'ExtraField1': 'aliquip occaecat',
  'ExtraField2': 'in Ut culpa',
  'ExtraField3': 'amet fugiat ad velit minim',
  'ExtraField4': 'adipisicing Excepteur i',
  'ExtraField5': 'veniam eu',
  'ExtraField6': 'incididunt Lorem dolore',
  'ExtraField7': 'qui nisi sint',
  'ExtraField8': 'non commodo nisi ut',
  'ExtraField9': 'Ut',
  'ExtraField10': 'culpa sit proident',
  'ExtraField11': 'nulla do ad',
  'ExtraField12': 'aute',
  'ExtraField13': 'dolore',
  'FeatureList': [
    {
      'FeatureID': -80732131,
      'FeatureTitle': 'tempor',
      'FeatureDescription': 'consectetur id'
    },
    {
      'FeatureID': -64719241,
      'FeatureTitle': 'sed aute anim',
      'FeatureDescription': 'aliqua labore Lorem dolore laboris'
    }
  ],
  'PluginList': {},
  'SampleEnable': false,
  'SampleName': 'consequat mollit cillum',
  'SampleSKUPrefix': 'elit do',
  'SamplePrice': 52647107.36979863,
  'SampleWeight': -39993658.90971256,
  'ReviewAverage': -84993379.01474324,
  'ReviewCount': -29309690,
  'MainImageFile': 'fugiat esse consectetur minim dolore',
  'MainImageCaption': 'in esse',
  'ThumbnailFile': 'deserunt labore',
  'MediaFile': 'dolore sunt',
  'AdditionalImageFile2': 'qui magna voluptate eu dolore',
  'AdditionalImageCaption2': 'pariatur esse Duis et occaecat',
  'AdditionalImageFile3': 'cupidatat officia anim irure',
  'AdditionalImageCaption3': 'dese',
  'AdditionalImageFile4': 'magna anim aliqua',
  'AdditionalImageCaption4': 'sed',
  'ImageGalleryList': [
    {
      'ImageGalleryID': 93947868,
      'ImageGalleryFile': 'ipsum ull',
      'ImageGalleryCaption': 'fugiat Lorem elit',
      'ImageGallerySorting': 46014781
    },
    {
      'ImageGalleryID': -27694772,
      'ImageGalleryFile': 'Duis amet pariatur',
      'ImageGalleryCaption': 'nostrud mollit ad',
      'ImageGallerySorting': 78691755
    }
  ],
  'OptionSetList': [
    {
      'OptionSetID': -69646334,
      'OptionSetName': 'reprehenderit in do',
      'OptionSorting': 92270875.2891916,
      'OptionRequired': false,
      'OptionType': 'ut',
      'OptionURL': 'amet',
      'OptionAdditionalInformation': 'labore sit nulla sint',
      'OptionSizeLimit': 36794527,
      'OptionList': [
        {
          'OptionID': 80228796,
          'OptionName': 'et',
          'OptionSelected': false,
          'OptionHide': false,
          'OptionValue': 55623049.8987332,
          'OptionPartNumber': 'veniam laboris dolor',
          'OptionSorting': -74392566.58937156,
          'OptionImagePath': 'voluptate officia ex',
          'OptionBundleCatalogId': 10158804,
          'OptionBundleQuantity': -90825041
        },
        {
          'OptionID': -45446246,
          'OptionName': 'eu Duis nisi culpa',
          'OptionSelected': true,
          'OptionHide': false,
          'OptionValue': 14593052.83329311,
          'OptionPartNumber': 'dolor quis labore sed',
          'OptionSorting': 28915023.612949178,
          'OptionImagePath': 'aute in',
          'OptionBundleCatalogId': -10332725,
          'OptionBundleQuantity': -64422940
        },
        {
          'OptionID': 76220317,
          'OptionName': 'dolore occaecat',
          'OptionSelected': false,
          'OptionHide': true,
          'OptionValue': 81824817.61989307,
          'OptionPartNumber': 'cillum pariat',
          'OptionSorting': -49748803.67471037,
          'OptionImagePath': 'eu',
          'OptionBundleCatalogId': -92912523,
          'OptionBundleQuantity': -51165587
        },
        {
          'OptionID': 93721851,
          'OptionName': 'qui in',
          'OptionSelected': false,
          'OptionHide': true,
          'OptionValue': -50322378.31519586,
          'OptionPartNumber': 'non adipis',
          'OptionSorting': -91328384.81549959,
          'OptionImagePath': 'in reprehenderit ad dol',
          'OptionBundleCatalogId': -79304784,
          'OptionBundleQuantity': -63553726
        }
      ]
    },
    {
      'OptionSetID': -35572675,
      'OptionSetName': 'amet sed aliqua ullamco',
      'OptionSorting': 99700339.09028658,
      'OptionRequired': false,
      'OptionType': 'Ex',
      'OptionURL': 'officia eu',
      'OptionAdditionalInformation': 'ullamco est voluptate Ut in',
      'OptionSizeLimit': 55369931,
      'OptionList': [
        {
          'OptionID': 13148668,
          'OptionName': 'ea nostrud',
          'OptionSelected': true,
          'OptionHide': true,
          'OptionValue': -16631925.454355657,
          'OptionPartNumber': 'ali',
          'OptionSorting': 54900867.54881421,
          'OptionImagePath': 'dolor magna',
          'OptionBundleCatalogId': -50460761,
          'OptionBundleQuantity': 31123265
        },
        {
          'OptionID': -23701556,
          'OptionName': 'Excepteur aliqua',
          'OptionSelected': false,
          'OptionHide': false,
          'OptionValue': 80544652.12607923,
          'OptionPartNumber': 'officia dolor sint fugiat',
          'OptionSorting': 57703487.021828085,
          'OptionImagePath': 'do mollit',
          'OptionBundleCatalogId': -25664217,
          'OptionBundleQuantity': 54667003
        }
      ]
    },
    {
      'OptionSetID': 51838031,
      'OptionSetName': 'magna ad fugiat ex exerci',
      'OptionSorting': -14619305.27911593,
      'OptionRequired': false,
      'OptionType': 'Duis sun',
      'OptionURL': 'occaecat Duis',
      'OptionAdditionalInformation': 'elit mollit',
      'OptionSizeLimit': 27273001,
      'OptionList': [
        {
          'OptionID': -29052683,
          'OptionName': 'in',
          'OptionSelected': false,
          'OptionHide': true,
          'OptionValue': 23357387.488409027,
          'OptionPartNumber': 'Duis ipsum reprehenderit minim',
          'OptionSorting': -21419531.206009164,
          'OptionImagePath': 'proident dolor',
          'OptionBundleCatalogId': -45693313,
          'OptionBundleQuantity': 50527721
        },
        {
          'OptionID': 34411609,
          'OptionName': 'anim elit ut',
          'OptionSelected': false,
          'OptionHide': false,
          'OptionValue': -72458641.55404288,
          'OptionPartNumber': 'in',
          'OptionSorting': -97197595.95417297,
          'OptionImagePath': 'temp',
          'OptionBundleCatalogId': -95889149,
          'OptionBundleQuantity': 70695356
        },
        {
          'OptionID': 79374564,
          'OptionName': 'commodo magna laborum reprehenderit',
          'OptionSelected': true,
          'OptionHide': false,
          'OptionValue': 77296505.63058707,
          'OptionPartNumber': 'adipisicing',
          'OptionSorting': -60879486.36640106,
          'OptionImagePath': 'adipis',
          'OptionBundleCatalogId': 69711902,
          'OptionBundleQuantity': 79341092
        },
        {
          'OptionID': -89976635,
          'OptionName': 'voluptate Excepteur velit anim labore',
          'OptionSelected': false,
          'OptionHide': true,
          'OptionValue': 84938596.4000287,
          'OptionPartNumber': 'labore sed in',
          'OptionSorting': 72345152.10477185,
          'OptionImagePath': 'labore irure',
          'OptionBundleCatalogId': -35456939,
          'OptionBundleQuantity': 76322969
        },
        {
          'OptionID': 83860928,
          'OptionName': 'elit pariatur nostrud',
          'OptionSelected': true,
          'OptionHide': true,
          'OptionValue': -20602419.857833937,
          'OptionPartNumber': 'in ipsum co',
          'OptionSorting': 38738756.258484125,
          'OptionImagePath': 'anim proident',
          'OptionBundleCatalogId': -72068641,
          'OptionBundleQuantity': 88579345
        }
      ]
    },
    {
      'OptionSetID': 4271602,
      'OptionSetName': 'cupidatat veniam consequat irure',
      'OptionSorting': -14739479.974589825,
      'OptionRequired': true,
      'OptionType': 'dolor',
      'OptionURL': 'ullamco ut',
      'OptionAdditionalInformation': 'dolore exercitation adipisicing',
      'OptionSizeLimit': 17919262,
      'OptionList': [
        {
          'OptionID': -81112253,
          'OptionName': 'tempor mollit non anim',
          'OptionSelected': true,
          'OptionHide': false,
          'OptionValue': 60977280.72535828,
          'OptionPartNumber': 'consequat et id tempor',
          'OptionSorting': -25409869.928072527,
          'OptionImagePath': 'officia ad non proident',
          'OptionBundleCatalogId': -31107751,
          'OptionBundleQuantity': -19845982
        },
        {
          'OptionID': -93858758,
          'OptionName': 'est',
          'OptionSelected': false,
          'OptionHide': true,
          'OptionValue': -10270598.928671107,
          'OptionPartNumber': 'Lorem proident dolor nisi',
          'OptionSorting': 68113055.15652534,
          'OptionImagePath': 'in enim',
          'OptionBundleCatalogId': 24942271,
          'OptionBundleQuantity': -52934623
        }
      ]
    }
  ],
  'AdvancedOptionList': [
    {
      'AdvancedOptionCode': 'id ut',
      'AdvancedOptionSufix': 'minim deserunt velit ad',
      'AdvancedOptionName': 'velit anim',
      'AdvancedOptionCost': 39084681.60161328,
      'AdvancedOptionStock': 34222726,
      'AdvancedOptionWeight': -88006732.64687298,
      'AdvancedOptionPrice': -88239040.15319215,
      'AdvancedOptionGTIN': 'cupidatat magna et'
    }
  ],
  'RelatedProductList': [
    {
      'RelatedIndexID': 27968629,
      'RelatedProductID': -95525200,
      'RelatedProductSorting': 85427066
    },
    {
      'RelatedIndexID': 15656045,
      'RelatedProductID': 52941563,
      'RelatedProductSorting': -41967109
    },
    {
      'RelatedIndexID': -89150145,
      'RelatedProductID': -4937041,
      'RelatedProductSorting': -48278087
    },
    {
      'RelatedIndexID': 918987,
      'RelatedProductID': -51817314,
      'RelatedProductSorting': 73219839
    }
  ],
  'UpSellingItemList': [
    {
      'UpSellingIndexID': 18218798,
      'UpSellingItemID': -3621930,
      'UpSellingItemSorting': 76454676
    },
    {
      'UpSellingIndexID': -67777224,
      'UpSellingItemID': -54042324,
      'UpSellingItemSorting': 3363291
    },
    {
      'UpSellingIndexID': 77578887,
      'UpSellingItemID': -57428973,
      'UpSellingItemSorting': -95864799
    },
    {
      'UpSellingIndexID': 83383775,
      'UpSellingItemID': 57368463,
      'UpSellingItemSorting': 25004901
    }
  ],
  'DiscountList': [
    {
      'DiscountID': 74384927,
      'DiscountPriceLevel': 67653514,
      'DiscountLowbound': -12290631,
      'DiscountUpbound': 94279777,
      'DiscountPrice': 73940160.9020344,
      'DiscountPercentage': false
    },
    {
      'DiscountID': -63898723,
      'DiscountPriceLevel': -17197711,
      'DiscountLowbound': -92759546,
      'DiscountUpbound': -29938018,
      'DiscountPrice': 81190229.41320094,
      'DiscountPercentage': true
    }
  ],
  'DoNotUseCategoryOptions': false,
  'DateCreated': '1978-08-01T07:11:34.147Z',
  'ListingTemplateID': -72972336,
  'ListingTemplateName': 'consequat pariatur qui',
  'LoginRequiredOptionID': -68205568,
  'LoginRequiredOptionName': 'dolor anim sed amet consectetur',
  'LoginRequiredOptionRedirectTo': 'ex ut commodo non',
  'AllowAccessCustomerGroupID': 89982562,
  'AllowAccessCustomerGroupName': 'ea anim',
  'RMAMaxPeriod': 'velit aliquip',
  'CanonicalUrl': 'enim et aliqua',
  'TaxCode': '{`Zt',
  'DisplayText': 'eu incididunt est sint',
  'MinimumQuantity': 69571765.83819914,
  'MaximumQuantity': 74826307.09530026,
  'AllowOnlyMultiples': false,
  'AllowFractionalQuantity': true,
  'QuantityOptions': 'esse non incididunt aliquip',
  'GroupOptionsForQuantityPricing': false,
  'ApplyQuantityDiscountToOptions': true,
  'EnableMakeAnOfferFeature': false,
  'MinimumAcceptableOffer': 'irure ',
  'PriceLevel1': 95063005.54670578,
  'PriceLevel1Hide': true,
  'PriceLevel2': 37967218.97883853,
  'PriceLevel2Hide': false,
  'PriceLevel3': 52483464.42231068,
  'PriceLevel3Hide': false,
  'PriceLevel4': 50607069.99263239,
  'PriceLevel4Hide': true,
  'PriceLevel5': -24448642.54785566,
  'PriceLevel5Hide': false,
  'PriceLevel6': -78375262.60727637,
  'PriceLevel6Hide': false,
  'PriceLevel7': 590307.7130752504,
  'PriceLevel7Hide': false,
  'PriceLevel8': 52722533.036241174,
  'PriceLevel8Hide': true,
  'PriceLevel9': -1128578.2064807117,
  'PriceLevel9Hide': false,
  'PriceLevel10': 72821811.21485594,
  'PriceLevel10Hide': false,
  'BuyButtonLink': 'veniam non Ut',
  'ProductLink': 'minim incididunt et esse',
  'Title': 'consectetur dolore',
  'CustomFileName': 'qui dolore veniam mollit ad',
  'RedirectLink': 'fugiat dolore proident',
  'MetaTags': 'aute Excepteur sed',
  'SpecialInstructions': 'enim',
  'AssignKey': true,
  'ReUseKeys': true,
  'SerialList': [
    {
      'SerialID': -406765,
      'SerialUses': 81297686,
      'SerialCode': 'in officia sed'
    }
  ],
  'EProductList': [
    {
      'FileNumber': 8788339,
      'FilePath': 'consequat ut dolore'
    },
    {
      'FileNumber': 31017703,
      'FilePath': 'mollit nostrud aliquip'
    }
  ]
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "SKUInfo": {
    "CatalogID": 5549196,
    "SKU": "dolore occaecat",
    "Name": "ad officia reprehenderit",
    "Cost": -18128193.441653237,
    "Price": -12795496.485453308,
    "Currency": "aute cillum incididunt reprehenderit",
    "RetailPrice": -85064725.10132354,
    "SalePrice": 4346297.001677439,
    "OnSale": true,
    "Stock": -9294195.30395341
  },
  "MFGID": "labore in laborum anim aliqua",
  "ShortDescription": "in mollit",
  "ManufacturerID": -93434278,
  "ManufacturerName": "magna sit id non",
  "DistributorList": [
    {
      "DistributorID": 73796011,
      "DistributorName": "culpa Lorem tempor",
      "DistributorItemCost": -30000679.212933123,
      "DistributorItemID": "",
      "DistributorStockID": "sit sunt"
    },
    {
      "DistributorID": 65749597,
      "DistributorName": "ut in sit in est",
      "DistributorItemCost": 59802814.13794315,
      "DistributorItemID": "ut",
      "DistributorStockID": "anim elit"
    },
    {
      "DistributorID": 67615115,
      "DistributorName": "in deserunt nos",
      "DistributorItemCost": -5776140.381086051,
      "DistributorItemID": "id incididunt velit",
      "DistributorStockID": "esse Duis laboris id mag"
    },
    {
      "DistributorID": 73091730,
      "DistributorName": "ut laborum sint",
      "DistributorItemCost": 63208139.29649508,
      "DistributorItemID": "sit nostru",
      "DistributorStockID": ""
    }
  ],
  "LastUpdate": "1964-12-13T13:30:50.688Z",
  "UserID": "e",
  "GTIN": "anim pariatur",
  "CategoryList": [
    {
      "CategoryID": 25813126,
      "CategoryName": "voluptate est sint"
    }
  ],
  "ExternalIdsList": [
    {
      "ID": 29177988,
      "AdvancedOptionSufix": "nostrud",
      "ExternalId1": "anim",
      "ExternalId2": "in ea",
      "ExternalIdType": "in aliqua"
    },
    {
      "ID": 29386574,
      "AdvancedOptionSufix": "dolor inc",
      "ExternalId1": "adipisici",
      "ExternalId2": "quis in occaecat",
      "ExternalIdType": "repr"
    },
    {
      "ID": 73611044,
      "AdvancedOptionSufix": "laboris",
      "ExternalId1": "irure non amet",
      "ExternalId2": "nostrud in",
      "ExternalIdType": "a"
    },
    {
      "ID": 18470631,
      "AdvancedOptionSufix": "ex dolore cupidatat",
      "ExternalId1": "voluptate dolore",
      "ExternalId2": "eiusmod",
      "ExternalIdType": "qui cup"
    },
    {
      "ID": -58285467,
      "AdvancedOptionSufix": "occae",
      "ExternalId1": "et nostrud qui enim",
      "ExternalId2": "ve",
      "ExternalIdType": "conseq"
    }
  ],
  "CategoryExternalIdsList": [
    {
      "ID": -88729174,
      "CategoryID": 19969439,
      "ExternalId1": "pariatur",
      "ExternalIdType": "consectetur eu"
    },
    {
      "ID": 6827252,
      "CategoryID": -21147158,
      "ExternalId1": "quis mollit ad voluptate nul",
      "ExternalIdType": "ullamco aute"
    }
  ],
  "NonTaxable": false,
  "NotForSale": false,
  "Hide": true,
  "GiftCertificate": true,
  "HomeSpecial": true,
  "CategorySpecial": false,
  "NonSearchable": true,
  "GiftWrapItem": true,
  "ShipCost": 46055464.42598286,
  "Weight": 56622458.94856936,
  "Height": 39066038.03513399,
  "Width": -89917587.21531373,
  "Depth": 24223234.719419777,
  "SelfShip": true,
  "FreeShipping": false,
  "RewardPoints": -31229290,
  "RedeemPoints": 50604682,
  "DisableRewards": false,
  "StockAlert": 70440709,
  "ReorderQuantity": -4915645,
  "InStockMessage": "irure qui dolor",
  "OutOfStockMessage": "deserunt labore",
  "BackOrderMessage": "repr",
  "InventoryControl": 42231344,
  "WarehouseLocation": "labore",
  "WarehouseBin": "elit ut",
  "WarehouseAisle": "ullamco",
  "WarehouseCustom": "dolore minim dolore labore",
  "Description": "ex ipsum",
  "Keywords": "nisi aliqua do dolore",
  "ExtraField1": "aliquip occaecat",
  "ExtraField2": "in Ut culpa",
  "ExtraField3": "amet fugiat ad velit minim",
  "ExtraField4": "adipisicing Excepteur i",
  "ExtraField5": "veniam eu",
  "ExtraField6": "incididunt Lorem dolore",
  "ExtraField7": "qui nisi sint",
  "ExtraField8": "non commodo nisi ut",
  "ExtraField9": "Ut",
  "ExtraField10": "culpa sit proident",
  "ExtraField11": "nulla do ad",
  "ExtraField12": "aute",
  "ExtraField13": "dolore",
  "FeatureList": [
    {
      "FeatureID": -80732131,
      "FeatureTitle": "tempor",
      "FeatureDescription": "consectetur id"
    },
    {
      "FeatureID": -64719241,
      "FeatureTitle": "sed aute anim",
      "FeatureDescription": "aliqua labore Lorem dolore laboris"
    }
  ],
  "PluginList": {},
  "SampleEnable": false,
  "SampleName": "consequat mollit cillum",
  "SampleSKUPrefix": "elit do",
  "SamplePrice": 52647107.36979863,
  "SampleWeight": -39993658.90971256,
  "ReviewAverage": -84993379.01474324,
  "ReviewCount": -29309690,
  "MainImageFile": "fugiat esse consectetur minim dolore",
  "MainImageCaption": "in esse",
  "ThumbnailFile": "deserunt labore",
  "MediaFile": "dolore sunt",
  "AdditionalImageFile2": "qui magna voluptate eu dolore",
  "AdditionalImageCaption2": "pariatur esse Duis et occaecat",
  "AdditionalImageFile3": "cupidatat officia anim irure",
  "AdditionalImageCaption3": "dese",
  "AdditionalImageFile4": "magna anim aliqua",
  "AdditionalImageCaption4": "sed",
  "ImageGalleryList": [
    {
      "ImageGalleryID": 93947868,
      "ImageGalleryFile": "ipsum ull",
      "ImageGalleryCaption": "fugiat Lorem elit",
      "ImageGallerySorting": 46014781
    },
    {
      "ImageGalleryID": -27694772,
      "ImageGalleryFile": "Duis amet pariatur",
      "ImageGalleryCaption": "nostrud mollit ad",
      "ImageGallerySorting": 78691755
    }
  ],
  "OptionSetList": [
    {
      "OptionSetID": -69646334,
      "OptionSetName": "reprehenderit in do",
      "OptionSorting": 92270875.2891916,
      "OptionRequired": false,
      "OptionType": "ut",
      "OptionURL": "amet",
      "OptionAdditionalInformation": "labore sit nulla sint",
      "OptionSizeLimit": 36794527,
      "OptionList": [
        {
          "OptionID": 80228796,
          "OptionName": "et",
          "OptionSelected": false,
          "OptionHide": false,
          "OptionValue": 55623049.8987332,
          "OptionPartNumber": "veniam laboris dolor",
          "OptionSorting": -74392566.58937156,
          "OptionImagePath": "voluptate officia ex",
          "OptionBundleCatalogId": 10158804,
          "OptionBundleQuantity": -90825041
        },
        {
          "OptionID": -45446246,
          "OptionName": "eu Duis nisi culpa",
          "OptionSelected": true,
          "OptionHide": false,
          "OptionValue": 14593052.83329311,
          "OptionPartNumber": "dolor quis labore sed",
          "OptionSorting": 28915023.612949178,
          "OptionImagePath": "aute in",
          "OptionBundleCatalogId": -10332725,
          "OptionBundleQuantity": -64422940
        },
        {
          "OptionID": 76220317,
          "OptionName": "dolore occaecat",
          "OptionSelected": false,
          "OptionHide": true,
          "OptionValue": 81824817.61989307,
          "OptionPartNumber": "cillum pariat",
          "OptionSorting": -49748803.67471037,
          "OptionImagePath": "eu",
          "OptionBundleCatalogId": -92912523,
          "OptionBundleQuantity": -51165587
        },
        {
          "OptionID": 93721851,
          "OptionName": "qui in",
          "OptionSelected": false,
          "OptionHide": true,
          "OptionValue": -50322378.31519586,
          "OptionPartNumber": "non adipis",
          "OptionSorting": -91328384.81549959,
          "OptionImagePath": "in reprehenderit ad dol",
          "OptionBundleCatalogId": -79304784,
          "OptionBundleQuantity": -63553726
        }
      ]
    },
    {
      "OptionSetID": -35572675,
      "OptionSetName": "amet sed aliqua ullamco",
      "OptionSorting": 99700339.09028658,
      "OptionRequired": false,
      "OptionType": "Ex",
      "OptionURL": "officia eu",
      "OptionAdditionalInformation": "ullamco est voluptate Ut in",
      "OptionSizeLimit": 55369931,
      "OptionList": [
        {
          "OptionID": 13148668,
          "OptionName": "ea nostrud",
          "OptionSelected": true,
          "OptionHide": true,
          "OptionValue": -16631925.454355657,
          "OptionPartNumber": "ali",
          "OptionSorting": 54900867.54881421,
          "OptionImagePath": "dolor magna",
          "OptionBundleCatalogId": -50460761,
          "OptionBundleQuantity": 31123265
        },
        {
          "OptionID": -23701556,
          "OptionName": "Excepteur aliqua",
          "OptionSelected": false,
          "OptionHide": false,
          "OptionValue": 80544652.12607923,
          "OptionPartNumber": "officia dolor sint fugiat",
          "OptionSorting": 57703487.021828085,
          "OptionImagePath": "do mollit",
          "OptionBundleCatalogId": -25664217,
          "OptionBundleQuantity": 54667003
        }
      ]
    },
    {
      "OptionSetID": 51838031,
      "OptionSetName": "magna ad fugiat ex exerci",
      "OptionSorting": -14619305.27911593,
      "OptionRequired": false,
      "OptionType": "Duis sun",
      "OptionURL": "occaecat Duis",
      "OptionAdditionalInformation": "elit mollit",
      "OptionSizeLimit": 27273001,
      "OptionList": [
        {
          "OptionID": -29052683,
          "OptionName": "in",
          "OptionSelected": false,
          "OptionHide": true,
          "OptionValue": 23357387.488409027,
          "OptionPartNumber": "Duis ipsum reprehenderit minim",
          "OptionSorting": -21419531.206009164,
          "OptionImagePath": "proident dolor",
          "OptionBundleCatalogId": -45693313,
          "OptionBundleQuantity": 50527721
        },
        {
          "OptionID": 34411609,
          "OptionName": "anim elit ut",
          "OptionSelected": false,
          "OptionHide": false,
          "OptionValue": -72458641.55404288,
          "OptionPartNumber": "in",
          "OptionSorting": -97197595.95417297,
          "OptionImagePath": "temp",
          "OptionBundleCatalogId": -95889149,
          "OptionBundleQuantity": 70695356
        },
        {
          "OptionID": 79374564,
          "OptionName": "commodo magna laborum reprehenderit",
          "OptionSelected": true,
          "OptionHide": false,
          "OptionValue": 77296505.63058707,
          "OptionPartNumber": "adipisicing",
          "OptionSorting": -60879486.36640106,
          "OptionImagePath": "adipis",
          "OptionBundleCatalogId": 69711902,
          "OptionBundleQuantity": 79341092
        },
        {
          "OptionID": -89976635,
          "OptionName": "voluptate Excepteur velit anim labore",
          "OptionSelected": false,
          "OptionHide": true,
          "OptionValue": 84938596.4000287,
          "OptionPartNumber": "labore sed in",
          "OptionSorting": 72345152.10477185,
          "OptionImagePath": "labore irure",
          "OptionBundleCatalogId": -35456939,
          "OptionBundleQuantity": 76322969
        },
        {
          "OptionID": 83860928,
          "OptionName": "elit pariatur nostrud",
          "OptionSelected": true,
          "OptionHide": true,
          "OptionValue": -20602419.857833937,
          "OptionPartNumber": "in ipsum co",
          "OptionSorting": 38738756.258484125,
          "OptionImagePath": "anim proident",
          "OptionBundleCatalogId": -72068641,
          "OptionBundleQuantity": 88579345
        }
      ]
    },
    {
      "OptionSetID": 4271602,
      "OptionSetName": "cupidatat veniam consequat irure",
      "OptionSorting": -14739479.974589825,
      "OptionRequired": true,
      "OptionType": "dolor",
      "OptionURL": "ullamco ut",
      "OptionAdditionalInformation": "dolore exercitation adipisicing",
      "OptionSizeLimit": 17919262,
      "OptionList": [
        {
          "OptionID": -81112253,
          "OptionName": "tempor mollit non anim",
          "OptionSelected": true,
          "OptionHide": false,
          "OptionValue": 60977280.72535828,
          "OptionPartNumber": "consequat et id tempor",
          "OptionSorting": -25409869.928072527,
          "OptionImagePath": "officia ad non proident",
          "OptionBundleCatalogId": -31107751,
          "OptionBundleQuantity": -19845982
        },
        {
          "OptionID": -93858758,
          "OptionName": "est",
          "OptionSelected": false,
          "OptionHide": true,
          "OptionValue": -10270598.928671107,
          "OptionPartNumber": "Lorem proident dolor nisi",
          "OptionSorting": 68113055.15652534,
          "OptionImagePath": "in enim",
          "OptionBundleCatalogId": 24942271,
          "OptionBundleQuantity": -52934623
        }
      ]
    }
  ],
  "AdvancedOptionList": [
    {
      "AdvancedOptionCode": "id ut",
      "AdvancedOptionSufix": "minim deserunt velit ad",
      "AdvancedOptionName": "velit anim",
      "AdvancedOptionCost": 39084681.60161328,
      "AdvancedOptionStock": 34222726,
      "AdvancedOptionWeight": -88006732.64687298,
      "AdvancedOptionPrice": -88239040.15319215,
      "AdvancedOptionGTIN": "cupidatat magna et"
    }
  ],
  "RelatedProductList": [
    {
      "RelatedIndexID": 27968629,
      "RelatedProductID": -95525200,
      "RelatedProductSorting": 85427066
    },
    {
      "RelatedIndexID": 15656045,
      "RelatedProductID": 52941563,
      "RelatedProductSorting": -41967109
    },
    {
      "RelatedIndexID": -89150145,
      "RelatedProductID": -4937041,
      "RelatedProductSorting": -48278087
    },
    {
      "RelatedIndexID": 918987,
      "RelatedProductID": -51817314,
      "RelatedProductSorting": 73219839
    }
  ],
  "UpSellingItemList": [
    {
      "UpSellingIndexID": 18218798,
      "UpSellingItemID": -3621930,
      "UpSellingItemSorting": 76454676
    },
    {
      "UpSellingIndexID": -67777224,
      "UpSellingItemID": -54042324,
      "UpSellingItemSorting": 3363291
    },
    {
      "UpSellingIndexID": 77578887,
      "UpSellingItemID": -57428973,
      "UpSellingItemSorting": -95864799
    },
    {
      "UpSellingIndexID": 83383775,
      "UpSellingItemID": 57368463,
      "UpSellingItemSorting": 25004901
    }
  ],
  "DiscountList": [
    {
      "DiscountID": 74384927,
      "DiscountPriceLevel": 67653514,
      "DiscountLowbound": -12290631,
      "DiscountUpbound": 94279777,
      "DiscountPrice": 73940160.9020344,
      "DiscountPercentage": false
    },
    {
      "DiscountID": -63898723,
      "DiscountPriceLevel": -17197711,
      "DiscountLowbound": -92759546,
      "DiscountUpbound": -29938018,
      "DiscountPrice": 81190229.41320094,
      "DiscountPercentage": true
    }
  ],
  "DoNotUseCategoryOptions": false,
  "DateCreated": "1978-08-01T07:11:34.147Z",
  "ListingTemplateID": -72972336,
  "ListingTemplateName": "consequat pariatur qui",
  "LoginRequiredOptionID": -68205568,
  "LoginRequiredOptionName": "dolor anim sed amet consectetur",
  "LoginRequiredOptionRedirectTo": "ex ut commodo non",
  "AllowAccessCustomerGroupID": 89982562,
  "AllowAccessCustomerGroupName": "ea anim",
  "RMAMaxPeriod": "velit aliquip",
  "CanonicalUrl": "enim et aliqua",
  "TaxCode": "{`Zt",
  "DisplayText": "eu incididunt est sint",
  "MinimumQuantity": 69571765.83819914,
  "MaximumQuantity": 74826307.09530026,
  "AllowOnlyMultiples": false,
  "AllowFractionalQuantity": true,
  "QuantityOptions": "esse non incididunt aliquip",
  "GroupOptionsForQuantityPricing": false,
  "ApplyQuantityDiscountToOptions": true,
  "EnableMakeAnOfferFeature": false,
  "MinimumAcceptableOffer": "irure ",
  "PriceLevel1": 95063005.54670578,
  "PriceLevel1Hide": true,
  "PriceLevel2": 37967218.97883853,
  "PriceLevel2Hide": false,
  "PriceLevel3": 52483464.42231068,
  "PriceLevel3Hide": false,
  "PriceLevel4": 50607069.99263239,
  "PriceLevel4Hide": true,
  "PriceLevel5": -24448642.54785566,
  "PriceLevel5Hide": false,
  "PriceLevel6": -78375262.60727637,
  "PriceLevel6Hide": false,
  "PriceLevel7": 590307.7130752504,
  "PriceLevel7Hide": false,
  "PriceLevel8": 52722533.036241174,
  "PriceLevel8Hide": true,
  "PriceLevel9": -1128578.2064807117,
  "PriceLevel9Hide": false,
  "PriceLevel10": 72821811.21485594,
  "PriceLevel10Hide": false,
  "BuyButtonLink": "veniam non Ut",
  "ProductLink": "minim incididunt et esse",
  "Title": "consectetur dolore",
  "CustomFileName": "qui dolore veniam mollit ad",
  "RedirectLink": "fugiat dolore proident",
  "MetaTags": "aute Excepteur sed",
  "SpecialInstructions": "enim",
  "AssignKey": true,
  "ReUseKeys": true,
  "SerialList": [
    {
      "SerialID": -406765,
      "SerialUses": 81297686,
      "SerialCode": "in officia sed"
    }
  ],
  "EProductList": [
    {
      "FileNumber": 8788339,
      "FilePath": "consequat ut dolore"
    },
    {
      "FileNumber": 31017703,
      "FilePath": "mollit nostrud aliquip"
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

response = RestClient.post 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "SKUInfo": {
      "CatalogID": 5549196,
      "SKU": "dolore occaecat",
      "Name": "ad officia reprehenderit",
      "Cost": -18128193.441653237,
      "Price": -12795496.485453308,
      "Currency": "aute cillum incididunt reprehenderit",
      "RetailPrice": -85064725.10132354,
      "SalePrice": 4346297.001677439,
      "OnSale": true,
      "Stock": -9294195.30395341
    },
    "MFGID": "labore in laborum anim aliqua",
    "ShortDescription": "in mollit",
    "ManufacturerID": -93434278,
    "ManufacturerName": "magna sit id non",
    "DistributorList": [
      {
        "DistributorID": 73796011,
        "DistributorName": "culpa Lorem tempor",
        "DistributorItemCost": -30000679.212933123,
        "DistributorItemID": "",
        "DistributorStockID": "sit sunt"
      },
      {
        "DistributorID": 65749597,
        "DistributorName": "ut in sit in est",
        "DistributorItemCost": 59802814.13794315,
        "DistributorItemID": "ut",
        "DistributorStockID": "anim elit"
      },
      {
        "DistributorID": 67615115,
        "DistributorName": "in deserunt nos",
        "DistributorItemCost": -5776140.381086051,
        "DistributorItemID": "id incididunt velit",
        "DistributorStockID": "esse Duis laboris id mag"
      },
      {
        "DistributorID": 73091730,
        "DistributorName": "ut laborum sint",
        "DistributorItemCost": 63208139.29649508,
        "DistributorItemID": "sit nostru",
        "DistributorStockID": ""
      }
    ],
    "LastUpdate": "1964-12-13T13:30:50.688Z",
    "UserID": "e",
    "GTIN": "anim pariatur",
    "CategoryList": [
      {
        "CategoryID": 25813126,
        "CategoryName": "voluptate est sint"
      }
    ],
    "ExternalIdsList": [
      {
        "ID": 29177988,
        "AdvancedOptionSufix": "nostrud",
        "ExternalId1": "anim",
        "ExternalId2": "in ea",
        "ExternalIdType": "in aliqua"
      },
      {
        "ID": 29386574,
        "AdvancedOptionSufix": "dolor inc",
        "ExternalId1": "adipisici",
        "ExternalId2": "quis in occaecat",
        "ExternalIdType": "repr"
      },
      {
        "ID": 73611044,
        "AdvancedOptionSufix": "laboris",
        "ExternalId1": "irure non amet",
        "ExternalId2": "nostrud in",
        "ExternalIdType": "a"
      },
      {
        "ID": 18470631,
        "AdvancedOptionSufix": "ex dolore cupidatat",
        "ExternalId1": "voluptate dolore",
        "ExternalId2": "eiusmod",
        "ExternalIdType": "qui cup"
      },
      {
        "ID": -58285467,
        "AdvancedOptionSufix": "occae",
        "ExternalId1": "et nostrud qui enim",
        "ExternalId2": "ve",
        "ExternalIdType": "conseq"
      }
    ],
    "CategoryExternalIdsList": [
      {
        "ID": -88729174,
        "CategoryID": 19969439,
        "ExternalId1": "pariatur",
        "ExternalIdType": "consectetur eu"
      },
      {
        "ID": 6827252,
        "CategoryID": -21147158,
        "ExternalId1": "quis mollit ad voluptate nul",
        "ExternalIdType": "ullamco aute"
      }
    ],
    "NonTaxable": false,
    "NotForSale": false,
    "Hide": true,
    "GiftCertificate": true,
    "HomeSpecial": true,
    "CategorySpecial": false,
    "NonSearchable": true,
    "GiftWrapItem": true,
    "ShipCost": 46055464.42598286,
    "Weight": 56622458.94856936,
    "Height": 39066038.03513399,
    "Width": -89917587.21531373,
    "Depth": 24223234.719419777,
    "SelfShip": true,
    "FreeShipping": false,
    "RewardPoints": -31229290,
    "RedeemPoints": 50604682,
    "DisableRewards": false,
    "StockAlert": 70440709,
    "ReorderQuantity": -4915645,
    "InStockMessage": "irure qui dolor",
    "OutOfStockMessage": "deserunt labore",
    "BackOrderMessage": "repr",
    "InventoryControl": 42231344,
    "WarehouseLocation": "labore",
    "WarehouseBin": "elit ut",
    "WarehouseAisle": "ullamco",
    "WarehouseCustom": "dolore minim dolore labore",
    "Description": "ex ipsum",
    "Keywords": "nisi aliqua do dolore",
    "ExtraField1": "aliquip occaecat",
    "ExtraField2": "in Ut culpa",
    "ExtraField3": "amet fugiat ad velit minim",
    "ExtraField4": "adipisicing Excepteur i",
    "ExtraField5": "veniam eu",
    "ExtraField6": "incididunt Lorem dolore",
    "ExtraField7": "qui nisi sint",
    "ExtraField8": "non commodo nisi ut",
    "ExtraField9": "Ut",
    "ExtraField10": "culpa sit proident",
    "ExtraField11": "nulla do ad",
    "ExtraField12": "aute",
    "ExtraField13": "dolore",
    "FeatureList": [
      {
        "FeatureID": -80732131,
        "FeatureTitle": "tempor",
        "FeatureDescription": "consectetur id"
      },
      {
        "FeatureID": -64719241,
        "FeatureTitle": "sed aute anim",
        "FeatureDescription": "aliqua labore Lorem dolore laboris"
      }
    ],
    "PluginList": {},
    "SampleEnable": false,
    "SampleName": "consequat mollit cillum",
    "SampleSKUPrefix": "elit do",
    "SamplePrice": 52647107.36979863,
    "SampleWeight": -39993658.90971256,
    "ReviewAverage": -84993379.01474324,
    "ReviewCount": -29309690,
    "MainImageFile": "fugiat esse consectetur minim dolore",
    "MainImageCaption": "in esse",
    "ThumbnailFile": "deserunt labore",
    "MediaFile": "dolore sunt",
    "AdditionalImageFile2": "qui magna voluptate eu dolore",
    "AdditionalImageCaption2": "pariatur esse Duis et occaecat",
    "AdditionalImageFile3": "cupidatat officia anim irure",
    "AdditionalImageCaption3": "dese",
    "AdditionalImageFile4": "magna anim aliqua",
    "AdditionalImageCaption4": "sed",
    "ImageGalleryList": [
      {
        "ImageGalleryID": 93947868,
        "ImageGalleryFile": "ipsum ull",
        "ImageGalleryCaption": "fugiat Lorem elit",
        "ImageGallerySorting": 46014781
      },
      {
        "ImageGalleryID": -27694772,
        "ImageGalleryFile": "Duis amet pariatur",
        "ImageGalleryCaption": "nostrud mollit ad",
        "ImageGallerySorting": 78691755
      }
    ],
    "OptionSetList": [
      {
        "OptionSetID": -69646334,
        "OptionSetName": "reprehenderit in do",
        "OptionSorting": 92270875.2891916,
        "OptionRequired": false,
        "OptionType": "ut",
        "OptionURL": "amet",
        "OptionAdditionalInformation": "labore sit nulla sint",
        "OptionSizeLimit": 36794527,
        "OptionList": [
          {
            "OptionID": 80228796,
            "OptionName": "et",
            "OptionSelected": false,
            "OptionHide": false,
            "OptionValue": 55623049.8987332,
            "OptionPartNumber": "veniam laboris dolor",
            "OptionSorting": -74392566.58937156,
            "OptionImagePath": "voluptate officia ex",
            "OptionBundleCatalogId": 10158804,
            "OptionBundleQuantity": -90825041
          },
          {
            "OptionID": -45446246,
            "OptionName": "eu Duis nisi culpa",
            "OptionSelected": true,
            "OptionHide": false,
            "OptionValue": 14593052.83329311,
            "OptionPartNumber": "dolor quis labore sed",
            "OptionSorting": 28915023.612949178,
            "OptionImagePath": "aute in",
            "OptionBundleCatalogId": -10332725,
            "OptionBundleQuantity": -64422940
          },
          {
            "OptionID": 76220317,
            "OptionName": "dolore occaecat",
            "OptionSelected": false,
            "OptionHide": true,
            "OptionValue": 81824817.61989307,
            "OptionPartNumber": "cillum pariat",
            "OptionSorting": -49748803.67471037,
            "OptionImagePath": "eu",
            "OptionBundleCatalogId": -92912523,
            "OptionBundleQuantity": -51165587
          },
          {
            "OptionID": 93721851,
            "OptionName": "qui in",
            "OptionSelected": false,
            "OptionHide": true,
            "OptionValue": -50322378.31519586,
            "OptionPartNumber": "non adipis",
            "OptionSorting": -91328384.81549959,
            "OptionImagePath": "in reprehenderit ad dol",
            "OptionBundleCatalogId": -79304784,
            "OptionBundleQuantity": -63553726
          }
        ]
      },
      {
        "OptionSetID": -35572675,
        "OptionSetName": "amet sed aliqua ullamco",
        "OptionSorting": 99700339.09028658,
        "OptionRequired": false,
        "OptionType": "Ex",
        "OptionURL": "officia eu",
        "OptionAdditionalInformation": "ullamco est voluptate Ut in",
        "OptionSizeLimit": 55369931,
        "OptionList": [
          {
            "OptionID": 13148668,
            "OptionName": "ea nostrud",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": -16631925.454355657,
            "OptionPartNumber": "ali",
            "OptionSorting": 54900867.54881421,
            "OptionImagePath": "dolor magna",
            "OptionBundleCatalogId": -50460761,
            "OptionBundleQuantity": 31123265
          },
          {
            "OptionID": -23701556,
            "OptionName": "Excepteur aliqua",
            "OptionSelected": false,
            "OptionHide": false,
            "OptionValue": 80544652.12607923,
            "OptionPartNumber": "officia dolor sint fugiat",
            "OptionSorting": 57703487.021828085,
            "OptionImagePath": "do mollit",
            "OptionBundleCatalogId": -25664217,
            "OptionBundleQuantity": 54667003
          }
        ]
      },
      {
        "OptionSetID": 51838031,
        "OptionSetName": "magna ad fugiat ex exerci",
        "OptionSorting": -14619305.27911593,
        "OptionRequired": false,
        "OptionType": "Duis sun",
        "OptionURL": "occaecat Duis",
        "OptionAdditionalInformation": "elit mollit",
        "OptionSizeLimit": 27273001,
        "OptionList": [
          {
            "OptionID": -29052683,
            "OptionName": "in",
            "OptionSelected": false,
            "OptionHide": true,
            "OptionValue": 23357387.488409027,
            "OptionPartNumber": "Duis ipsum reprehenderit minim",
            "OptionSorting": -21419531.206009164,
            "OptionImagePath": "proident dolor",
            "OptionBundleCatalogId": -45693313,
            "OptionBundleQuantity": 50527721
          },
          {
            "OptionID": 34411609,
            "OptionName": "anim elit ut",
            "OptionSelected": false,
            "OptionHide": false,
            "OptionValue": -72458641.55404288,
            "OptionPartNumber": "in",
            "OptionSorting": -97197595.95417297,
            "OptionImagePath": "temp",
            "OptionBundleCatalogId": -95889149,
            "OptionBundleQuantity": 70695356
          },
          {
            "OptionID": 79374564,
            "OptionName": "commodo magna laborum reprehenderit",
            "OptionSelected": true,
            "OptionHide": false,
            "OptionValue": 77296505.63058707,
            "OptionPartNumber": "adipisicing",
            "OptionSorting": -60879486.36640106,
            "OptionImagePath": "adipis",
            "OptionBundleCatalogId": 69711902,
            "OptionBundleQuantity": 79341092
          },
          {
            "OptionID": -89976635,
            "OptionName": "voluptate Excepteur velit anim labore",
            "OptionSelected": false,
            "OptionHide": true,
            "OptionValue": 84938596.4000287,
            "OptionPartNumber": "labore sed in",
            "OptionSorting": 72345152.10477185,
            "OptionImagePath": "labore irure",
            "OptionBundleCatalogId": -35456939,
            "OptionBundleQuantity": 76322969
          },
          {
            "OptionID": 83860928,
            "OptionName": "elit pariatur nostrud",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": -20602419.857833937,
            "OptionPartNumber": "in ipsum co",
            "OptionSorting": 38738756.258484125,
            "OptionImagePath": "anim proident",
            "OptionBundleCatalogId": -72068641,
            "OptionBundleQuantity": 88579345
          }
        ]
      },
      {
        "OptionSetID": 4271602,
        "OptionSetName": "cupidatat veniam consequat irure",
        "OptionSorting": -14739479.974589825,
        "OptionRequired": true,
        "OptionType": "dolor",
        "OptionURL": "ullamco ut",
        "OptionAdditionalInformation": "dolore exercitation adipisicing",
        "OptionSizeLimit": 17919262,
        "OptionList": [
          {
            "OptionID": -81112253,
            "OptionName": "tempor mollit non anim",
            "OptionSelected": true,
            "OptionHide": false,
            "OptionValue": 60977280.72535828,
            "OptionPartNumber": "consequat et id tempor",
            "OptionSorting": -25409869.928072527,
            "OptionImagePath": "officia ad non proident",
            "OptionBundleCatalogId": -31107751,
            "OptionBundleQuantity": -19845982
          },
          {
            "OptionID": -93858758,
            "OptionName": "est",
            "OptionSelected": false,
            "OptionHide": true,
            "OptionValue": -10270598.928671107,
            "OptionPartNumber": "Lorem proident dolor nisi",
            "OptionSorting": 68113055.15652534,
            "OptionImagePath": "in enim",
            "OptionBundleCatalogId": 24942271,
            "OptionBundleQuantity": -52934623
          }
        ]
      }
    ],
    "AdvancedOptionList": [
      {
        "AdvancedOptionCode": "id ut",
        "AdvancedOptionSufix": "minim deserunt velit ad",
        "AdvancedOptionName": "velit anim",
        "AdvancedOptionCost": 39084681.60161328,
        "AdvancedOptionStock": 34222726,
        "AdvancedOptionWeight": -88006732.64687298,
        "AdvancedOptionPrice": -88239040.15319215,
        "AdvancedOptionGTIN": "cupidatat magna et"
      }
    ],
    "RelatedProductList": [
      {
        "RelatedIndexID": 27968629,
        "RelatedProductID": -95525200,
        "RelatedProductSorting": 85427066
      },
      {
        "RelatedIndexID": 15656045,
        "RelatedProductID": 52941563,
        "RelatedProductSorting": -41967109
      },
      {
        "RelatedIndexID": -89150145,
        "RelatedProductID": -4937041,
        "RelatedProductSorting": -48278087
      },
      {
        "RelatedIndexID": 918987,
        "RelatedProductID": -51817314,
        "RelatedProductSorting": 73219839
      }
    ],
    "UpSellingItemList": [
      {
        "UpSellingIndexID": 18218798,
        "UpSellingItemID": -3621930,
        "UpSellingItemSorting": 76454676
      },
      {
        "UpSellingIndexID": -67777224,
        "UpSellingItemID": -54042324,
        "UpSellingItemSorting": 3363291
      },
      {
        "UpSellingIndexID": 77578887,
        "UpSellingItemID": -57428973,
        "UpSellingItemSorting": -95864799
      },
      {
        "UpSellingIndexID": 83383775,
        "UpSellingItemID": 57368463,
        "UpSellingItemSorting": 25004901
      }
    ],
    "DiscountList": [
      {
        "DiscountID": 74384927,
        "DiscountPriceLevel": 67653514,
        "DiscountLowbound": -12290631,
        "DiscountUpbound": 94279777,
        "DiscountPrice": 73940160.9020344,
        "DiscountPercentage": false
      },
      {
        "DiscountID": -63898723,
        "DiscountPriceLevel": -17197711,
        "DiscountLowbound": -92759546,
        "DiscountUpbound": -29938018,
        "DiscountPrice": 81190229.41320094,
        "DiscountPercentage": true
      }
    ],
    "DoNotUseCategoryOptions": false,
    "DateCreated": "1978-08-01T07:11:34.147Z",
    "ListingTemplateID": -72972336,
    "ListingTemplateName": "consequat pariatur qui",
    "LoginRequiredOptionID": -68205568,
    "LoginRequiredOptionName": "dolor anim sed amet consectetur",
    "LoginRequiredOptionRedirectTo": "ex ut commodo non",
    "AllowAccessCustomerGroupID": 89982562,
    "AllowAccessCustomerGroupName": "ea anim",
    "RMAMaxPeriod": "velit aliquip",
    "CanonicalUrl": "enim et aliqua",
    "TaxCode": "{`Zt",
    "DisplayText": "eu incididunt est sint",
    "MinimumQuantity": 69571765.83819914,
    "MaximumQuantity": 74826307.09530026,
    "AllowOnlyMultiples": false,
    "AllowFractionalQuantity": true,
    "QuantityOptions": "esse non incididunt aliquip",
    "GroupOptionsForQuantityPricing": false,
    "ApplyQuantityDiscountToOptions": true,
    "EnableMakeAnOfferFeature": false,
    "MinimumAcceptableOffer": "irure ",
    "PriceLevel1": 95063005.54670578,
    "PriceLevel1Hide": true,
    "PriceLevel2": 37967218.97883853,
    "PriceLevel2Hide": false,
    "PriceLevel3": 52483464.42231068,
    "PriceLevel3Hide": false,
    "PriceLevel4": 50607069.99263239,
    "PriceLevel4Hide": true,
    "PriceLevel5": -24448642.54785566,
    "PriceLevel5Hide": false,
    "PriceLevel6": -78375262.60727637,
    "PriceLevel6Hide": false,
    "PriceLevel7": 590307.7130752504,
    "PriceLevel7Hide": false,
    "PriceLevel8": 52722533.036241174,
    "PriceLevel8Hide": true,
    "PriceLevel9": -1128578.2064807117,
    "PriceLevel9Hide": false,
    "PriceLevel10": 72821811.21485594,
    "PriceLevel10Hide": false,
    "BuyButtonLink": "veniam non Ut",
    "ProductLink": "minim incididunt et esse",
    "Title": "consectetur dolore",
    "CustomFileName": "qui dolore veniam mollit ad",
    "RedirectLink": "fugiat dolore proident",
    "MetaTags": "aute Excepteur sed",
    "SpecialInstructions": "enim",
    "AssignKey": true,
    "ReUseKeys": true,
    "SerialList": [
      {
        "SerialID": -406765,
        "SerialUses": 81297686,
        "SerialCode": "in officia sed"
      }
    ],
    "EProductList": [
      {
        "FileNumber": 8788339,
        "FilePath": "consequat ut dolore"
      },
      {
        "FileNumber": 31017703,
        "FilePath": "mollit nostrud aliquip"
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products', data=values, headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"CatalogID",
    "Value":"1234",
    "Status":"201",
    "Message":"Created successfully",
  }
]
```

Adds a new product to the system. No URL parameters should be sent. See [Data Structures](#product-object) for more information on the product object.

#### HTTP Request
`POST https://apirest.3dcart.com/3dCartWebAPI/v1/Products`

Response Code | Description
------------- | ---------
201 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.

### Retrieve a list of products

> To retrieve all products from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products?limit=&offset=&countonly=&sku=&name=&costfrom=&costto=&pricefrom=&priceto=&stockfrom=&stockto=&hide=&freeshipping=&onsale=&nontax=&notforsale=&giftcertificate=&homespecial=&categoryspecial=&nonsearchable=&selfship=&rewarddisable=&lastupdatestart=&lastupdateend=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Products"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products?limit=&offset=&countonly=&sku=&name=&costfrom=&costto=&pricefrom=&priceto=&stockfrom=&stockto=&hide=&freeshipping=&onsale=&nontax=&notforsale=&giftcertificate=&homespecial=&categoryspecial=&nonsearchable=&selfship=&rewarddisable=&lastupdatestart=&lastupdateend=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products?limit=&offset=&countonly=&sku=&name=&costfrom=&costto=&pricefrom=&priceto=&stockfrom=&stockto=&hide=&freeshipping=&onsale=&nontax=&notforsale=&giftcertificate=&homespecial=&categoryspecial=&nonsearchable=&selfship=&rewarddisable=&lastupdatestart=&lastupdateend=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products?limit=&offset=&countonly=&sku=&name=&costfrom=&costto=&pricefrom=&priceto=&stockfrom=&stockto=&hide=&freeshipping=&onsale=&nontax=&notforsale=&giftcertificate=&homespecial=&categoryspecial=&nonsearchable=&selfship=&rewarddisable=&lastupdatestart=&lastupdateend=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#product-object) for more information on the product object):

```json
[
  {
    "SKUInfo": {
      "CatalogID": 1,
      "SKU": "sample string 1",
      "Name": "sample string 2",
      "Cost": 1.1,
      "Price": 1.1,
      "Currency": "sample string 3",
      "RetailPrice": 1.1,
      "SalePrice": 1.1,
      "OnSale": true,
      "Stock": 1.1
    },
    "MFGID": "sample string 1",
    "ShortDescription": "sample string 2",
    "ManufacturerID": 1,
    "ManufacturerName": "sample string 3",
    "DistributorList": [
      {
        "DistributorID": 1,
        "DistributorName": "sample string 1",
        "DistributorItemCost": 1.1,
        "DistributorItemID": "sample string 2",
        "DistributorStockID": "sample string 3"
      },
      {
        "DistributorID": 1,
        "DistributorName": "sample string 1",
        "DistributorItemCost": 1.1,
        "DistributorItemID": "sample string 2",
        "DistributorStockID": "sample string 3"
      }
    ],
    "LastUpdate": "02/18/2019 16:58",
    "UserID": "sample string 4",
    "GTIN": "sample string 5",
    "CategoryList": [
      {
        "CategoryID": 1,
        "CategoryName": "sample string 1"
      },
      {
        "CategoryID": 1,
        "CategoryName": "sample string 1"
      }
    ],
    "ExternalIdsList": [
      {
        "ID": 1,
        "AdvancedOptionSufix": "sample string 1",
        "ExternalId1": "sample string 2",
        "ExternalId2": "sample string 3",
        "ExternalIdType": "sample string 4"
      },
      {
        "ID": 1,
        "AdvancedOptionSufix": "sample string 1",
        "ExternalId1": "sample string 2",
        "ExternalId2": "sample string 3",
        "ExternalIdType": "sample string 4"
      }
    ],
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
    ],
    "NonTaxable": true,
    "NotForSale": true,
    "Hide": true,
    "GiftCertificate": true,
    "HomeSpecial": true,
    "CategorySpecial": true,
    "NonSearchable": true,
    "GiftWrapItem": true,
    "ShipCost": 1.1,
    "Weight": 1.1,
    "Height": 1.1,
    "Width": 1.1,
    "Depth": 1.1,
    "SelfShip": true,
    "FreeShipping": true,
    "RewardPoints": 1,
    "RedeemPoints": 1,
    "DisableRewards": true,
    "StockAlert": 1,
    "ReorderQuantity": 1,
    "InStockMessage": "sample string 6",
    "OutOfStockMessage": "sample string 7",
    "BackOrderMessage": "sample string 8",
    "InventoryControl": 1,
    "WarehouseLocation": "sample string 9",
    "WarehouseBin": "sample string 10",
    "WarehouseAisle": "sample string 11",
    "WarehouseCustom": "sample string 12",
    "Description": "sample string 13",
    "Keywords": "sample string 14",
    "ExtraField1": "sample string 15",
    "ExtraField2": "sample string 16",
    "ExtraField3": "sample string 17",
    "ExtraField4": "sample string 18",
    "ExtraField5": "sample string 19",
    "ExtraField6": "sample string 20",
    "ExtraField7": "sample string 21",
    "ExtraField8": "sample string 22",
    "ExtraField9": "sample string 23",
    "ExtraField10": "sample string 24",
    "ExtraField11": "sample string 25",
    "ExtraField12": "sample string 26",
    "ExtraField13": "sample string 27",
    "FeatureList": [
      {
        "FeatureID": 1,
        "FeatureTitle": "sample string 1",
        "FeatureDescription": "sample string 2"
      },
      {
        "FeatureID": 1,
        "FeatureTitle": "sample string 1",
        "FeatureDescription": "sample string 2"
      }
    ],
    "PluginList": {
      "sample string 1": "sample string 2",
      "sample string 3": "sample string 4"
    },
    "SampleEnable": true,
    "SampleName": "sample string 28",
    "SampleSKUPrefix": "sample string 29",
    "SamplePrice": 1.1,
    "SampleWeight": 1.1,
    "ReviewAverage": 1.1,
    "ReviewCount": 1,
    "MainImageFile": "sample string 30",
    "MainImageCaption": "sample string 31",
    "ThumbnailFile": "sample string 32",
    "MediaFile": "sample string 33",
    "AdditionalImageFile2": "sample string 34",
    "AdditionalImageCaption2": "sample string 35",
    "AdditionalImageFile3": "sample string 36",
    "AdditionalImageCaption3": "sample string 37",
    "AdditionalImageFile4": "sample string 38",
    "AdditionalImageCaption4": "sample string 39",
    "ImageGalleryList": [
      {
        "ImageGalleryID": 1,
        "ImageGalleryFile": "sample string 1",
        "ImageGalleryCaption": "sample string 2",
        "ImageGallerySorting": 1
      },
      {
        "ImageGalleryID": 1,
        "ImageGalleryFile": "sample string 1",
        "ImageGalleryCaption": "sample string 2",
        "ImageGallerySorting": 1
      }
    ],
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
    "AdvancedOptionList": [
      {
        "AdvancedOptionCode": "sample string 1",
        "AdvancedOptionSufix": "sample string 2",
        "AdvancedOptionName": "sample string 3",
        "AdvancedOptionCost": 1.1,
        "AdvancedOptionStock": 1,
        "AdvancedOptionWeight": 1.1,
        "AdvancedOptionPrice": 1.1,
        "AdvancedOptionGTIN": "sample string 4"
      },
      {
        "AdvancedOptionCode": "sample string 1",
        "AdvancedOptionSufix": "sample string 2",
        "AdvancedOptionName": "sample string 3",
        "AdvancedOptionCost": 1.1,
        "AdvancedOptionStock": 1,
        "AdvancedOptionWeight": 1.1,
        "AdvancedOptionPrice": 1.1,
        "AdvancedOptionGTIN": "sample string 4"
      }
    ],
    "RelatedProductList": [
      {
        "RelatedIndexID": 1,
        "RelatedProductID": 1,
        "RelatedProductSorting": 1
      },
      {
        "RelatedIndexID": 1,
        "RelatedProductID": 1,
        "RelatedProductSorting": 1
      }
    ],
    "UpSellingItemList": [
      {
        "UpSellingIndexID": 1,
        "UpSellingItemID": 1,
        "UpSellingItemSorting": 1
      },
      {
        "UpSellingIndexID": 1,
        "UpSellingItemID": 1,
        "UpSellingItemSorting": 1
      }
    ],
    "DiscountList": [
      {
        "DiscountID": 1,
        "DiscountPriceLevel": 1,
        "DiscountLowbound": 1,
        "DiscountUpbound": 1,
        "DiscountPrice": 1.1,
        "DiscountPercentage": true
      },
      {
        "DiscountID": 1,
        "DiscountPriceLevel": 1,
        "DiscountLowbound": 1,
        "DiscountUpbound": 1,
        "DiscountPrice": 1.1,
        "DiscountPercentage": true
      }
    ],
    "DoNotUseCategoryOptions": true,
    "DateCreated": "02/18/2019 16:58",
    "ListingTemplateID": 1,
    "ListingTemplateName": "sample string 40",
    "LoginRequiredOptionID": 1,
    "LoginRequiredOptionName": "sample string 41",
    "LoginRequiredOptionRedirectTo": "sample string 42",
    "AllowAccessCustomerGroupID": 1,
    "AllowAccessCustomerGroupName": "sample string 43",
    "RMAMaxPeriod": "sample string 44",
    "CanonicalUrl": "sample string 45",
    "TaxCode": "sample string 46",
    "DisplayText": "sample string 47",
    "MinimumQuantity": 1.1,
    "MaximumQuantity": 1.1,
    "AllowOnlyMultiples": true,
    "AllowFractionalQuantity": true,
    "QuantityOptions": "sample string 48",
    "GroupOptionsForQuantityPricing": true,
    "ApplyQuantityDiscountToOptions": true,
    "EnableMakeAnOfferFeature": true,
    "MinimumAcceptableOffer": "sample string 49",
    "PriceLevel1": 1.1,
    "PriceLevel1Hide": true,
    "PriceLevel2": 1.1,
    "PriceLevel2Hide": true,
    "PriceLevel3": 1.1,
    "PriceLevel3Hide": true,
    "PriceLevel4": 1.1,
    "PriceLevel4Hide": true,
    "PriceLevel5": 1.1,
    "PriceLevel5Hide": true,
    "PriceLevel6": 1.1,
    "PriceLevel6Hide": true,
    "PriceLevel7": 1.1,
    "PriceLevel7Hide": true,
    "PriceLevel8": 1.1,
    "PriceLevel8Hide": true,
    "PriceLevel9": 1.1,
    "PriceLevel9Hide": true,
    "PriceLevel10": 1.1,
    "PriceLevel10Hide": true,
    "BuyButtonLink": "sample string 50",
    "ProductLink": "sample string 51",
    "Title": "sample string 52",
    "CustomFileName": "sample string 53",
    "RedirectLink": "sample string 54",
    "MetaTags": "sample string 55",
    "SpecialInstructions": "sample string 56",
    "AssignKey": true,
    "ReUseKeys": true,
    "SerialList": [
      {
        "SerialID": 1,
        "SerialUses": 1,
        "SerialCode": "sample string 1"
      },
      {
        "SerialID": 1,
        "SerialUses": 1,
        "SerialCode": "sample string 1"
      }
    ],
    "EProductList": [
      {
        "FileNumber": 1,
        "FilePath": "sample string 1"
      },
      {
        "FileNumber": 1,
        "FilePath": "sample string 1"
      }
    ]
  },
  {
    "SKUInfo": {
      "CatalogID": 1,
      "SKU": "sample string 1",
      "Name": "sample string 2",
      "Cost": 1.1,
      "Price": 1.1,
      "Currency": "sample string 3",
      "RetailPrice": 1.1,
      "SalePrice": 1.1,
      "OnSale": true,
      "Stock": 1.1
    },
    "MFGID": "sample string 1",
    "ShortDescription": "sample string 2",
    "ManufacturerID": 1,
    "ManufacturerName": "sample string 3",
    "DistributorList": [
      {
        "DistributorID": 1,
        "DistributorName": "sample string 1",
        "DistributorItemCost": 1.1,
        "DistributorItemID": "sample string 2",
        "DistributorStockID": "sample string 3"
      },
      {
        "DistributorID": 1,
        "DistributorName": "sample string 1",
        "DistributorItemCost": 1.1,
        "DistributorItemID": "sample string 2",
        "DistributorStockID": "sample string 3"
      }
    ],
    "LastUpdate": "02/18/2019 16:58",
    "UserID": "sample string 4",
    "GTIN": "sample string 5",
    "CategoryList": [
      {
        "CategoryID": 1,
        "CategoryName": "sample string 1"
      },
      {
        "CategoryID": 1,
        "CategoryName": "sample string 1"
      }
    ],
    "ExternalIdsList": [
      {
        "ID": 1,
        "AdvancedOptionSufix": "sample string 1",
        "ExternalId1": "sample string 2",
        "ExternalId2": "sample string 3",
        "ExternalIdType": "sample string 4"
      },
      {
        "ID": 1,
        "AdvancedOptionSufix": "sample string 1",
        "ExternalId1": "sample string 2",
        "ExternalId2": "sample string 3",
        "ExternalIdType": "sample string 4"
      }
    ],
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
    ],
    "NonTaxable": true,
    "NotForSale": true,
    "Hide": true,
    "GiftCertificate": true,
    "HomeSpecial": true,
    "CategorySpecial": true,
    "NonSearchable": true,
    "GiftWrapItem": true,
    "ShipCost": 1.1,
    "Weight": 1.1,
    "Height": 1.1,
    "Width": 1.1,
    "Depth": 1.1,
    "SelfShip": true,
    "FreeShipping": true,
    "RewardPoints": 1,
    "RedeemPoints": 1,
    "DisableRewards": true,
    "StockAlert": 1,
    "ReorderQuantity": 1,
    "InStockMessage": "sample string 6",
    "OutOfStockMessage": "sample string 7",
    "BackOrderMessage": "sample string 8",
    "InventoryControl": 1,
    "WarehouseLocation": "sample string 9",
    "WarehouseBin": "sample string 10",
    "WarehouseAisle": "sample string 11",
    "WarehouseCustom": "sample string 12",
    "Description": "sample string 13",
    "Keywords": "sample string 14",
    "ExtraField1": "sample string 15",
    "ExtraField2": "sample string 16",
    "ExtraField3": "sample string 17",
    "ExtraField4": "sample string 18",
    "ExtraField5": "sample string 19",
    "ExtraField6": "sample string 20",
    "ExtraField7": "sample string 21",
    "ExtraField8": "sample string 22",
    "ExtraField9": "sample string 23",
    "ExtraField10": "sample string 24",
    "ExtraField11": "sample string 25",
    "ExtraField12": "sample string 26",
    "ExtraField13": "sample string 27",
    "FeatureList": [
      {
        "FeatureID": 1,
        "FeatureTitle": "sample string 1",
        "FeatureDescription": "sample string 2"
      },
      {
        "FeatureID": 1,
        "FeatureTitle": "sample string 1",
        "FeatureDescription": "sample string 2"
      }
    ],
    "PluginList": {
      "sample string 1": "sample string 2",
      "sample string 3": "sample string 4"
    },
    "SampleEnable": true,
    "SampleName": "sample string 28",
    "SampleSKUPrefix": "sample string 29",
    "SamplePrice": 1.1,
    "SampleWeight": 1.1,
    "ReviewAverage": 1.1,
    "ReviewCount": 1,
    "MainImageFile": "sample string 30",
    "MainImageCaption": "sample string 31",
    "ThumbnailFile": "sample string 32",
    "MediaFile": "sample string 33",
    "AdditionalImageFile2": "sample string 34",
    "AdditionalImageCaption2": "sample string 35",
    "AdditionalImageFile3": "sample string 36",
    "AdditionalImageCaption3": "sample string 37",
    "AdditionalImageFile4": "sample string 38",
    "AdditionalImageCaption4": "sample string 39",
    "ImageGalleryList": [
      {
        "ImageGalleryID": 1,
        "ImageGalleryFile": "sample string 1",
        "ImageGalleryCaption": "sample string 2",
        "ImageGallerySorting": 1
      },
      {
        "ImageGalleryID": 1,
        "ImageGalleryFile": "sample string 1",
        "ImageGalleryCaption": "sample string 2",
        "ImageGallerySorting": 1
      }
    ],
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
    "AdvancedOptionList": [
      {
        "AdvancedOptionCode": "sample string 1",
        "AdvancedOptionSufix": "sample string 2",
        "AdvancedOptionName": "sample string 3",
        "AdvancedOptionCost": 1.1,
        "AdvancedOptionStock": 1,
        "AdvancedOptionWeight": 1.1,
        "AdvancedOptionPrice": 1.1,
        "AdvancedOptionGTIN": "sample string 4"
      },
      {
        "AdvancedOptionCode": "sample string 1",
        "AdvancedOptionSufix": "sample string 2",
        "AdvancedOptionName": "sample string 3",
        "AdvancedOptionCost": 1.1,
        "AdvancedOptionStock": 1,
        "AdvancedOptionWeight": 1.1,
        "AdvancedOptionPrice": 1.1,
        "AdvancedOptionGTIN": "sample string 4"
      }
    ],
    "RelatedProductList": [
      {
        "RelatedIndexID": 1,
        "RelatedProductID": 1,
        "RelatedProductSorting": 1
      },
      {
        "RelatedIndexID": 1,
        "RelatedProductID": 1,
        "RelatedProductSorting": 1
      }
    ],
    "UpSellingItemList": [
      {
        "UpSellingIndexID": 1,
        "UpSellingItemID": 1,
        "UpSellingItemSorting": 1
      },
      {
        "UpSellingIndexID": 1,
        "UpSellingItemID": 1,
        "UpSellingItemSorting": 1
      }
    ],
    "DiscountList": [
      {
        "DiscountID": 1,
        "DiscountPriceLevel": 1,
        "DiscountLowbound": 1,
        "DiscountUpbound": 1,
        "DiscountPrice": 1.1,
        "DiscountPercentage": true
      },
      {
        "DiscountID": 1,
        "DiscountPriceLevel": 1,
        "DiscountLowbound": 1,
        "DiscountUpbound": 1,
        "DiscountPrice": 1.1,
        "DiscountPercentage": true
      }
    ],
    "DoNotUseCategoryOptions": true,
    "DateCreated": "02/18/2019 16:58",
    "ListingTemplateID": 1,
    "ListingTemplateName": "sample string 40",
    "LoginRequiredOptionID": 1,
    "LoginRequiredOptionName": "sample string 41",
    "LoginRequiredOptionRedirectTo": "sample string 42",
    "AllowAccessCustomerGroupID": 1,
    "AllowAccessCustomerGroupName": "sample string 43",
    "RMAMaxPeriod": "sample string 44",
    "CanonicalUrl": "sample string 45",
    "TaxCode": "sample string 46",
    "DisplayText": "sample string 47",
    "MinimumQuantity": 1.1,
    "MaximumQuantity": 1.1,
    "AllowOnlyMultiples": true,
    "AllowFractionalQuantity": true,
    "QuantityOptions": "sample string 48",
    "GroupOptionsForQuantityPricing": true,
    "ApplyQuantityDiscountToOptions": true,
    "EnableMakeAnOfferFeature": true,
    "MinimumAcceptableOffer": "sample string 49",
    "PriceLevel1": 1.1,
    "PriceLevel1Hide": true,
    "PriceLevel2": 1.1,
    "PriceLevel2Hide": true,
    "PriceLevel3": 1.1,
    "PriceLevel3Hide": true,
    "PriceLevel4": 1.1,
    "PriceLevel4Hide": true,
    "PriceLevel5": 1.1,
    "PriceLevel5Hide": true,
    "PriceLevel6": 1.1,
    "PriceLevel6Hide": true,
    "PriceLevel7": 1.1,
    "PriceLevel7Hide": true,
    "PriceLevel8": 1.1,
    "PriceLevel8Hide": true,
    "PriceLevel9": 1.1,
    "PriceLevel9Hide": true,
    "PriceLevel10": 1.1,
    "PriceLevel10Hide": true,
    "BuyButtonLink": "sample string 50",
    "ProductLink": "sample string 51",
    "Title": "sample string 52",
    "CustomFileName": "sample string 53",
    "RedirectLink": "sample string 54",
    "MetaTags": "sample string 55",
    "SpecialInstructions": "sample string 56",
    "AssignKey": true,
    "ReUseKeys": true,
    "SerialList": [
      {
        "SerialID": 1,
        "SerialUses": 1,
        "SerialCode": "sample string 1"
      },
      {
        "SerialID": 1,
        "SerialUses": 1,
        "SerialCode": "sample string 1"
      }
    ],
    "EProductList": [
      {
        "FileNumber": 1,
        "FilePath": "sample string 1"
      },
      {
        "FileNumber": 1,
        "FilePath": "sample string 1"
      }
    ]
  }
]
```

Retrieves a list of all products from the store. See [Data Structures](#product-object) for more information on the product object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Products`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
limit | optional | Maximum number of items that can be returned
offset | optional | Starting point for the return data
countonly | optional | Count the number of rows only
sku | optional | Retrieve products by SKU
name | optional | Retrieve products by name
costfrom | optional | Retrieve products over a specified cost
costto | optional | Retrieve products under a specified cost
pricefrom | optional | Retrieve products over a specified price
priceto | optional | Retrieve products under a specified price
stockfrom | optional | Retrieve products over a specified stock
stockto | optional | Retrieve products under a specified stock
hide | optional | Retrieve hidden products
freeshipping | optional | Retrieve products set for free shipping
onsale | optional | Retrieve products on sale
nontax | optional | Retrieve non-taxable products
notforsale | optional | Retrieve products set as not for sale
giftcertificate | optional | Retrieve gift certificate products
homespecial | optional | Retrieve products set to home special
categoryspecial | optional | Retrieve products set to category special
nonsearchable | optional | Retrieve non-searchable products
selfship | optional | Retrieve products that ship by themselves
rewarddisable | optional | Retrieve products that are disabled for rewards points
lastupdatestart |optional | Start Date that the product was last updated (mm/dd/yyyy hh:mm:ss)
lastupdateend | optional | End Date that the product was last updated (mm/dd/yyyy hh:mm:ss)

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | No products found in store, or no products found with the URL parameters included in the request (e.g. specified price range with pricefrom and priceto parameters).

### Retrieve a specific product by id

> To retrieve a product from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). 

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Products/{catalogid}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#product-object) for more information on the product object):

```json
[
  {
    "SKUInfo": {
      "CatalogID": 1,
      "SKU": "sample string 1",
      "Name": "sample string 2",
      "Cost": 1.1,
      "Price": 1.1,
      "Currency": "sample string 3",
      "RetailPrice": 1.1,
      "SalePrice": 1.1,
      "OnSale": true,
      "Stock": 1.1
    },
    "MFGID": "sample string 1",
    "ShortDescription": "sample string 2",
    "ManufacturerID": 1,
    "ManufacturerName": "sample string 3",
    "DistributorList": [
      {
        "DistributorID": 1,
        "DistributorName": "sample string 1",
        "DistributorItemCost": 1.1,
        "DistributorItemID": "sample string 2",
        "DistributorStockID": "sample string 3"
      },
      {
        "DistributorID": 1,
        "DistributorName": "sample string 1",
        "DistributorItemCost": 1.1,
        "DistributorItemID": "sample string 2",
        "DistributorStockID": "sample string 3"
      }
    ],
    "LastUpdate": "02/19/2019 00:18",
    "UserID": "sample string 4",
    "GTIN": "sample string 5",
    "CategoryList": [
      {
        "CategoryID": 1,
        "CategoryName": "sample string 1"
      },
      {
        "CategoryID": 1,
        "CategoryName": "sample string 1"
      }
    ],
    "ExternalIdsList": [
      {
        "ID": 1,
        "AdvancedOptionSufix": "sample string 1",
        "ExternalId1": "sample string 2",
        "ExternalId2": "sample string 3",
        "ExternalIdType": "sample string 4"
      },
      {
        "ID": 1,
        "AdvancedOptionSufix": "sample string 1",
        "ExternalId1": "sample string 2",
        "ExternalId2": "sample string 3",
        "ExternalIdType": "sample string 4"
      }
    ],
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
    ],
    "NonTaxable": true,
    "NotForSale": true,
    "Hide": true,
    "GiftCertificate": true,
    "HomeSpecial": true,
    "CategorySpecial": true,
    "NonSearchable": true,
    "GiftWrapItem": true,
    "ShipCost": 1.1,
    "Weight": 1.1,
    "Height": 1.1,
    "Width": 1.1,
    "Depth": 1.1,
    "SelfShip": true,
    "FreeShipping": true,
    "RewardPoints": 1,
    "RedeemPoints": 1,
    "DisableRewards": true,
    "StockAlert": 1,
    "ReorderQuantity": 1,
    "InStockMessage": "sample string 6",
    "OutOfStockMessage": "sample string 7",
    "BackOrderMessage": "sample string 8",
    "InventoryControl": 1,
    "WarehouseLocation": "sample string 9",
    "WarehouseBin": "sample string 10",
    "WarehouseAisle": "sample string 11",
    "WarehouseCustom": "sample string 12",
    "Description": "sample string 13",
    "Keywords": "sample string 14",
    "ExtraField1": "sample string 15",
    "ExtraField2": "sample string 16",
    "ExtraField3": "sample string 17",
    "ExtraField4": "sample string 18",
    "ExtraField5": "sample string 19",
    "ExtraField6": "sample string 20",
    "ExtraField7": "sample string 21",
    "ExtraField8": "sample string 22",
    "ExtraField9": "sample string 23",
    "ExtraField10": "sample string 24",
    "ExtraField11": "sample string 25",
    "ExtraField12": "sample string 26",
    "ExtraField13": "sample string 27",
    "FeatureList": [
      {
        "FeatureID": 1,
        "FeatureTitle": "sample string 1",
        "FeatureDescription": "sample string 2"
      },
      {
        "FeatureID": 1,
        "FeatureTitle": "sample string 1",
        "FeatureDescription": "sample string 2"
      }
    ],
    "PluginList": {
      "sample string 1": "sample string 2",
      "sample string 3": "sample string 4"
    },
    "SampleEnable": true,
    "SampleName": "sample string 28",
    "SampleSKUPrefix": "sample string 29",
    "SamplePrice": 1.1,
    "SampleWeight": 1.1,
    "ReviewAverage": 1.1,
    "ReviewCount": 1,
    "MainImageFile": "sample string 30",
    "MainImageCaption": "sample string 31",
    "ThumbnailFile": "sample string 32",
    "MediaFile": "sample string 33",
    "AdditionalImageFile2": "sample string 34",
    "AdditionalImageCaption2": "sample string 35",
    "AdditionalImageFile3": "sample string 36",
    "AdditionalImageCaption3": "sample string 37",
    "AdditionalImageFile4": "sample string 38",
    "AdditionalImageCaption4": "sample string 39",
    "ImageGalleryList": [
      {
        "ImageGalleryID": 1,
        "ImageGalleryFile": "sample string 1",
        "ImageGalleryCaption": "sample string 2",
        "ImageGallerySorting": 1
      },
      {
        "ImageGalleryID": 1,
        "ImageGalleryFile": "sample string 1",
        "ImageGalleryCaption": "sample string 2",
        "ImageGallerySorting": 1
      }
    ],
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
    "AdvancedOptionList": [
      {
        "AdvancedOptionCode": "sample string 1",
        "AdvancedOptionSufix": "sample string 2",
        "AdvancedOptionName": "sample string 3",
        "AdvancedOptionCost": 1.1,
        "AdvancedOptionStock": 1,
        "AdvancedOptionWeight": 1.1,
        "AdvancedOptionPrice": 1.1,
        "AdvancedOptionGTIN": "sample string 4"
      },
      {
        "AdvancedOptionCode": "sample string 1",
        "AdvancedOptionSufix": "sample string 2",
        "AdvancedOptionName": "sample string 3",
        "AdvancedOptionCost": 1.1,
        "AdvancedOptionStock": 1,
        "AdvancedOptionWeight": 1.1,
        "AdvancedOptionPrice": 1.1,
        "AdvancedOptionGTIN": "sample string 4"
      }
    ],
    "RelatedProductList": [
      {
        "RelatedIndexID": 1,
        "RelatedProductID": 1,
        "RelatedProductSorting": 1
      },
      {
        "RelatedIndexID": 1,
        "RelatedProductID": 1,
        "RelatedProductSorting": 1
      }
    ],
    "UpSellingItemList": [
      {
        "UpSellingIndexID": 1,
        "UpSellingItemID": 1,
        "UpSellingItemSorting": 1
      },
      {
        "UpSellingIndexID": 1,
        "UpSellingItemID": 1,
        "UpSellingItemSorting": 1
      }
    ],
    "DiscountList": [
      {
        "DiscountID": 1,
        "DiscountPriceLevel": 1,
        "DiscountLowbound": 1,
        "DiscountUpbound": 1,
        "DiscountPrice": 1.1,
        "DiscountPercentage": true
      },
      {
        "DiscountID": 1,
        "DiscountPriceLevel": 1,
        "DiscountLowbound": 1,
        "DiscountUpbound": 1,
        "DiscountPrice": 1.1,
        "DiscountPercentage": true
      }
    ],
    "DoNotUseCategoryOptions": true,
    "DateCreated": "02/19/2019 00:18",
    "ListingTemplateID": 1,
    "ListingTemplateName": "sample string 40",
    "LoginRequiredOptionID": 1,
    "LoginRequiredOptionName": "sample string 41",
    "LoginRequiredOptionRedirectTo": "sample string 42",
    "AllowAccessCustomerGroupID": 1,
    "AllowAccessCustomerGroupName": "sample string 43",
    "RMAMaxPeriod": "sample string 44",
    "CanonicalUrl": "sample string 45",
    "TaxCode": "sample string 46",
    "DisplayText": "sample string 47",
    "MinimumQuantity": 1.1,
    "MaximumQuantity": 1.1,
    "AllowOnlyMultiples": true,
    "AllowFractionalQuantity": true,
    "QuantityOptions": "sample string 48",
    "GroupOptionsForQuantityPricing": true,
    "ApplyQuantityDiscountToOptions": true,
    "EnableMakeAnOfferFeature": true,
    "MinimumAcceptableOffer": "sample string 49",
    "PriceLevel1": 1.1,
    "PriceLevel1Hide": true,
    "PriceLevel2": 1.1,
    "PriceLevel2Hide": true,
    "PriceLevel3": 1.1,
    "PriceLevel3Hide": true,
    "PriceLevel4": 1.1,
    "PriceLevel4Hide": true,
    "PriceLevel5": 1.1,
    "PriceLevel5Hide": true,
    "PriceLevel6": 1.1,
    "PriceLevel6Hide": true,
    "PriceLevel7": 1.1,
    "PriceLevel7Hide": true,
    "PriceLevel8": 1.1,
    "PriceLevel8Hide": true,
    "PriceLevel9": 1.1,
    "PriceLevel9Hide": true,
    "PriceLevel10": 1.1,
    "PriceLevel10Hide": true,
    "BuyButtonLink": "sample string 50",
    "ProductLink": "sample string 51",
    "Title": "sample string 52",
    "CustomFileName": "sample string 53",
    "RedirectLink": "sample string 54",
    "MetaTags": "sample string 55",
    "SpecialInstructions": "sample string 56",
    "AssignKey": true,
    "ReUseKeys": true,
    "SerialList": [
      {
        "SerialID": 1,
        "SerialUses": 1,
        "SerialCode": "sample string 1"
      },
      {
        "SerialID": 1,
        "SerialUses": 1,
        "SerialCode": "sample string 1"
      }
    ],
    "EProductList": [
      {
        "FileNumber": 1,
        "FilePath": "sample string 1"
      },
      {
        "FileNumber": 1,
        "FilePath": "sample string 1"
      }
    ]
  },
  {
    "SKUInfo": {
      "CatalogID": 1,
      "SKU": "sample string 1",
      "Name": "sample string 2",
      "Cost": 1.1,
      "Price": 1.1,
      "Currency": "sample string 3",
      "RetailPrice": 1.1,
      "SalePrice": 1.1,
      "OnSale": true,
      "Stock": 1.1
    },
    "MFGID": "sample string 1",
    "ShortDescription": "sample string 2",
    "ManufacturerID": 1,
    "ManufacturerName": "sample string 3",
    "DistributorList": [
      {
        "DistributorID": 1,
        "DistributorName": "sample string 1",
        "DistributorItemCost": 1.1,
        "DistributorItemID": "sample string 2",
        "DistributorStockID": "sample string 3"
      },
      {
        "DistributorID": 1,
        "DistributorName": "sample string 1",
        "DistributorItemCost": 1.1,
        "DistributorItemID": "sample string 2",
        "DistributorStockID": "sample string 3"
      }
    ],
    "LastUpdate": "02/19/2019 00:18",
    "UserID": "sample string 4",
    "GTIN": "sample string 5",
    "CategoryList": [
      {
        "CategoryID": 1,
        "CategoryName": "sample string 1"
      },
      {
        "CategoryID": 1,
        "CategoryName": "sample string 1"
      }
    ],
    "ExternalIdsList": [
      {
        "ID": 1,
        "AdvancedOptionSufix": "sample string 1",
        "ExternalId1": "sample string 2",
        "ExternalId2": "sample string 3",
        "ExternalIdType": "sample string 4"
      },
      {
        "ID": 1,
        "AdvancedOptionSufix": "sample string 1",
        "ExternalId1": "sample string 2",
        "ExternalId2": "sample string 3",
        "ExternalIdType": "sample string 4"
      }
    ],
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
    ],
    "NonTaxable": true,
    "NotForSale": true,
    "Hide": true,
    "GiftCertificate": true,
    "HomeSpecial": true,
    "CategorySpecial": true,
    "NonSearchable": true,
    "GiftWrapItem": true,
    "ShipCost": 1.1,
    "Weight": 1.1,
    "Height": 1.1,
    "Width": 1.1,
    "Depth": 1.1,
    "SelfShip": true,
    "FreeShipping": true,
    "RewardPoints": 1,
    "RedeemPoints": 1,
    "DisableRewards": true,
    "StockAlert": 1,
    "ReorderQuantity": 1,
    "InStockMessage": "sample string 6",
    "OutOfStockMessage": "sample string 7",
    "BackOrderMessage": "sample string 8",
    "InventoryControl": 1,
    "WarehouseLocation": "sample string 9",
    "WarehouseBin": "sample string 10",
    "WarehouseAisle": "sample string 11",
    "WarehouseCustom": "sample string 12",
    "Description": "sample string 13",
    "Keywords": "sample string 14",
    "ExtraField1": "sample string 15",
    "ExtraField2": "sample string 16",
    "ExtraField3": "sample string 17",
    "ExtraField4": "sample string 18",
    "ExtraField5": "sample string 19",
    "ExtraField6": "sample string 20",
    "ExtraField7": "sample string 21",
    "ExtraField8": "sample string 22",
    "ExtraField9": "sample string 23",
    "ExtraField10": "sample string 24",
    "ExtraField11": "sample string 25",
    "ExtraField12": "sample string 26",
    "ExtraField13": "sample string 27",
    "FeatureList": [
      {
        "FeatureID": 1,
        "FeatureTitle": "sample string 1",
        "FeatureDescription": "sample string 2"
      },
      {
        "FeatureID": 1,
        "FeatureTitle": "sample string 1",
        "FeatureDescription": "sample string 2"
      }
    ],
    "PluginList": {
      "sample string 1": "sample string 2",
      "sample string 3": "sample string 4"
    },
    "SampleEnable": true,
    "SampleName": "sample string 28",
    "SampleSKUPrefix": "sample string 29",
    "SamplePrice": 1.1,
    "SampleWeight": 1.1,
    "ReviewAverage": 1.1,
    "ReviewCount": 1,
    "MainImageFile": "sample string 30",
    "MainImageCaption": "sample string 31",
    "ThumbnailFile": "sample string 32",
    "MediaFile": "sample string 33",
    "AdditionalImageFile2": "sample string 34",
    "AdditionalImageCaption2": "sample string 35",
    "AdditionalImageFile3": "sample string 36",
    "AdditionalImageCaption3": "sample string 37",
    "AdditionalImageFile4": "sample string 38",
    "AdditionalImageCaption4": "sample string 39",
    "ImageGalleryList": [
      {
        "ImageGalleryID": 1,
        "ImageGalleryFile": "sample string 1",
        "ImageGalleryCaption": "sample string 2",
        "ImageGallerySorting": 1
      },
      {
        "ImageGalleryID": 1,
        "ImageGalleryFile": "sample string 1",
        "ImageGalleryCaption": "sample string 2",
        "ImageGallerySorting": 1
      }
    ],
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
    "AdvancedOptionList": [
      {
        "AdvancedOptionCode": "sample string 1",
        "AdvancedOptionSufix": "sample string 2",
        "AdvancedOptionName": "sample string 3",
        "AdvancedOptionCost": 1.1,
        "AdvancedOptionStock": 1,
        "AdvancedOptionWeight": 1.1,
        "AdvancedOptionPrice": 1.1,
        "AdvancedOptionGTIN": "sample string 4"
      },
      {
        "AdvancedOptionCode": "sample string 1",
        "AdvancedOptionSufix": "sample string 2",
        "AdvancedOptionName": "sample string 3",
        "AdvancedOptionCost": 1.1,
        "AdvancedOptionStock": 1,
        "AdvancedOptionWeight": 1.1,
        "AdvancedOptionPrice": 1.1,
        "AdvancedOptionGTIN": "sample string 4"
      }
    ],
    "RelatedProductList": [
      {
        "RelatedIndexID": 1,
        "RelatedProductID": 1,
        "RelatedProductSorting": 1
      },
      {
        "RelatedIndexID": 1,
        "RelatedProductID": 1,
        "RelatedProductSorting": 1
      }
    ],
    "UpSellingItemList": [
      {
        "UpSellingIndexID": 1,
        "UpSellingItemID": 1,
        "UpSellingItemSorting": 1
      },
      {
        "UpSellingIndexID": 1,
        "UpSellingItemID": 1,
        "UpSellingItemSorting": 1
      }
    ],
    "DiscountList": [
      {
        "DiscountID": 1,
        "DiscountPriceLevel": 1,
        "DiscountLowbound": 1,
        "DiscountUpbound": 1,
        "DiscountPrice": 1.1,
        "DiscountPercentage": true
      },
      {
        "DiscountID": 1,
        "DiscountPriceLevel": 1,
        "DiscountLowbound": 1,
        "DiscountUpbound": 1,
        "DiscountPrice": 1.1,
        "DiscountPercentage": true
      }
    ],
    "DoNotUseCategoryOptions": true,
    "DateCreated": "02/19/2019 00:18",
    "ListingTemplateID": 1,
    "ListingTemplateName": "sample string 40",
    "LoginRequiredOptionID": 1,
    "LoginRequiredOptionName": "sample string 41",
    "LoginRequiredOptionRedirectTo": "sample string 42",
    "AllowAccessCustomerGroupID": 1,
    "AllowAccessCustomerGroupName": "sample string 43",
    "RMAMaxPeriod": "sample string 44",
    "CanonicalUrl": "sample string 45",
    "TaxCode": "sample string 46",
    "DisplayText": "sample string 47",
    "MinimumQuantity": 1.1,
    "MaximumQuantity": 1.1,
    "AllowOnlyMultiples": true,
    "AllowFractionalQuantity": true,
    "QuantityOptions": "sample string 48",
    "GroupOptionsForQuantityPricing": true,
    "ApplyQuantityDiscountToOptions": true,
    "EnableMakeAnOfferFeature": true,
    "MinimumAcceptableOffer": "sample string 49",
    "PriceLevel1": 1.1,
    "PriceLevel1Hide": true,
    "PriceLevel2": 1.1,
    "PriceLevel2Hide": true,
    "PriceLevel3": 1.1,
    "PriceLevel3Hide": true,
    "PriceLevel4": 1.1,
    "PriceLevel4Hide": true,
    "PriceLevel5": 1.1,
    "PriceLevel5Hide": true,
    "PriceLevel6": 1.1,
    "PriceLevel6Hide": true,
    "PriceLevel7": 1.1,
    "PriceLevel7Hide": true,
    "PriceLevel8": 1.1,
    "PriceLevel8Hide": true,
    "PriceLevel9": 1.1,
    "PriceLevel9Hide": true,
    "PriceLevel10": 1.1,
    "PriceLevel10Hide": true,
    "BuyButtonLink": "sample string 50",
    "ProductLink": "sample string 51",
    "Title": "sample string 52",
    "CustomFileName": "sample string 53",
    "RedirectLink": "sample string 54",
    "MetaTags": "sample string 55",
    "SpecialInstructions": "sample string 56",
    "AssignKey": true,
    "ReUseKeys": true,
    "SerialList": [
      {
        "SerialID": 1,
        "SerialUses": 1,
        "SerialCode": "sample string 1"
      },
      {
        "SerialID": 1,
        "SerialUses": 1,
        "SerialCode": "sample string 1"
      }
    ],
    "EProductList": [
      {
        "FileNumber": 1,
        "FilePath": "sample string 1"
      },
      {
        "FileNumber": 1,
        "FilePath": "sample string 1"
      }
    ]
  }
]
```

Retrieve a specific product from the store. See [Data Structures](#product-object) for more information on the product object.

#### HTTP Request 
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item

#### Responses and Errors

Response Code | Description
------------- | ---------
201 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product was not found.

### Update a list of products

> To update a list of products in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#product-object) for more information on the product object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "[
  {
    \"SKUInfo\": {
      \"CatalogID\": 47304819,
      \"SKU\": \"sit\",
      \"Name\": \"in irure sed anim ut\",
      \"Cost\": -97938774.16442451,
      \"Price\": -19308940.197771385,
      \"Currency\": \"sunt fugiat ex i\",
      \"RetailPrice\": 77722221.0081538,
      \"SalePrice\": -91789207.28786238,
      \"OnSale\": false,
      \"Stock\": -45038952.78911698
    },
    \"MFGID\": \"com\",
    \"ShortDescription\": \"in\",
    \"ManufacturerID\": 61799392,
    \"ManufacturerName\": \"do ea consectetur Exce\",
    \"DistributorList\": [
      {
        \"DistributorID\": 20469110,
        \"DistributorName\": \"velit sed e\",
        \"DistributorItemCost\": 61921348.935050964,
        \"DistributorItemID\": \"minim sint\",
        \"DistributorStockID\": \"dolor magna aliquip\"
      },
      {
        \"DistributorID\": -21653005,
        \"DistributorName\": \"culpa Lorem in officia\",
        \"DistributorItemCost\": -1545864.7590813637,
        \"DistributorItemID\": \"proident\",
        \"DistributorStockID\": \"sunt laboris\"
      },
      {
        \"DistributorID\": 33690478,
        \"DistributorName\": \"velit enim\",
        \"DistributorItemCost\": -96117790.00715286,
        \"DistributorItemID\": \"veniam incididunt\",
        \"DistributorStockID\": \"Excepteur dolor\"
      }
    ],
    \"LastUpdate\": \"1986-07-09T01:36:17.605Z\",
    \"UserID\": \"et est Excepteur Duis\",
    \"GTIN\": \"elit non\",
    \"CategoryList\": [
      {
        \"CategoryID\": -65000395,
        \"CategoryName\": \"laborum\"
      },
      {
        \"CategoryID\": 43936084,
        \"CategoryName\": \"id amet anim consectetur\"
      },
      {
        \"CategoryID\": 79598330,
        \"CategoryName\": \"pariatur dolor\"
      },
      {
        \"CategoryID\": 54105968,
        \"CategoryName\": \"in dolor mollit\"
      }
    ],
    \"ExternalIdsList\": [
      {
        \"ID\": -46777171,
        \"AdvancedOptionSufix\": \"fugiat aliqua\",
        \"ExternalId1\": \"dolor elit\",
        \"ExternalId2\": \"nulla pariatur laboris\",
        \"ExternalIdType\": \"eu ut ullamco \"
      },
      {
        \"ID\": 98426633,
        \"AdvancedOptionSufix\": \"cillum exercitation\",
        \"ExternalId1\": \"enim officia\",
        \"ExternalId2\": \"m\",
        \"ExternalIdType\": \"qui tempor cupidat\"
      },
      {
        \"ID\": -36788101,
        \"AdvancedOptionSufix\": \"ipsum eu exercitation laboris i\",
        \"ExternalId1\": \"sed\",
        \"ExternalId2\": \"sed in \",
        \"ExternalIdType\": \"in qui\"
      },
      {
        \"ID\": -82163709,
        \"AdvancedOptionSufix\": \"ut\",
        \"ExternalId1\": \"cillum sit\",
        \"ExternalId2\": \"mollit velit\",
        \"ExternalIdType\": \"est dolor id\"
      }
    ],
    \"CategoryExternalIdsList\": [
      {
        \"ID\": -85258393,
        \"CategoryID\": -96929120,
        \"ExternalId1\": \"incididunt occaecat quis deseru\",
        \"ExternalIdType\": \"aliquip irure est cupidatat\"
      },
      {
        \"ID\": 53549560,
        \"CategoryID\": 37858692,
        \"ExternalId1\": \"proident aliquip\",
        \"ExternalIdType\": \"adipisicing non\"
      }
    ],
    \"NonTaxable\": false,
    \"NotForSale\": true,
    \"Hide\": false,
    \"GiftCertificate\": true,
    \"HomeSpecial\": true,
    \"CategorySpecial\": false,
    \"NonSearchable\": true,
    \"GiftWrapItem\": false,
    \"ShipCost\": 35944853.68285248,
    \"Weight\": -97533207.15121979,
    \"Height\": -11564221.075311482,
    \"Width\": -8044259.455038056,
    \"Depth\": 70870765.80208012,
    \"SelfShip\": false,
    \"FreeShipping\": true,
    \"RewardPoints\": 83597752,
    \"RedeemPoints\": -56180334,
    \"DisableRewards\": false,
    \"StockAlert\": 72736229,
    \"ReorderQuantity\": 74401951,
    \"InStockMessage\": \"velit in\",
    \"OutOfStockMessage\": \"nulla dolore sunt\",
    \"BackOrderMessage\": \"sint nulla\",
    \"InventoryControl\": 35497330,
    \"WarehouseLocation\": \"reprehenderit ad voluptate\",
    \"WarehouseBin\": \"eu\",
    \"WarehouseAisle\": \"minim esse est mollit\",
    \"WarehouseCustom\": \"Excepteur culpa fugiat sit\",
    \"Description\": \"ad irure\",
    \"Keywords\": \"eiusmod esse\",
    \"ExtraField1\": \"voluptate sit\",
    \"ExtraField2\": \"qui cupidatat Ut id\",
    \"ExtraField3\": \"velit amet occaecat\",
    \"ExtraField4\": \"Ut\",
    \"ExtraField5\": \"sunt exercitation\",
    \"ExtraField6\": \"in\",
    \"ExtraField7\": \"pariatur Excepteur sint eu\",
    \"ExtraField8\": \"nisi nulla Ut\",
    \"ExtraField9\": \"ipsum Excepteur\",
    \"ExtraField10\": \"laboris incididunt eu sit in\",
    \"ExtraField11\": \"eiusmod\",
    \"ExtraField12\": \"laboris Duis\",
    \"ExtraField13\": \"ea \",
    \"FeatureList\": [
      {
        \"FeatureID\": 82968211,
        \"FeatureTitle\": \"ipsum est tempor nisi\",
        \"FeatureDescription\": \"amet pariatur dolor\"
      },
      {
        \"FeatureID\": 68248391,
        \"FeatureTitle\": \"et pariatur fugiat cillum\",
        \"FeatureDescription\": \"ea\"
      }
    ],
    \"PluginList\": {},
    \"SampleEnable\": true,
    \"SampleName\": \"ex non tempor\",
    \"SampleSKUPrefix\": \"repr\",
    \"SamplePrice\": -27179100.023684114,
    \"SampleWeight\": -29559413.62695022,
    \"ReviewAverage\": 33004892.57644981,
    \"ReviewCount\": 76223069,
    \"MainImageFile\": \"enim sed occaecat\",
    \"MainImageCaption\": \"irure eu ut\",
    \"ThumbnailFile\": \"ullamco officia\",
    \"MediaFile\": \"sint nostrud qui ut\",
    \"AdditionalImageFile2\": \"fugiat nisi commodo enim\",
    \"AdditionalImageCaption2\": \"pariatur labore ex\",
    \"AdditionalImageFile3\": \"elit velit tempor consectetur\",
    \"AdditionalImageCaption3\": \"elit veniam\",
    \"AdditionalImageFile4\": \"enim consectetur aliquip officia\",
    \"AdditionalImageCaption4\": \"sint ullamco fugiat\",
    \"ImageGalleryList\": [
      {
        \"ImageGalleryID\": 73225027,
        \"ImageGalleryFile\": \"nisi laborum non\",
        \"ImageGalleryCaption\": \"consectetur velit eiusmod anim dolor\",
        \"ImageGallerySorting\": -45493104
      },
      {
        \"ImageGalleryID\": 39367279,
        \"ImageGalleryFile\": \"irure dolore\",
        \"ImageGalleryCaption\": \"aliqua\",
        \"ImageGallerySorting\": -82773561
      },
      {
        \"ImageGalleryID\": -54690210,
        \"ImageGalleryFile\": \"anim\",
        \"ImageGalleryCaption\": \"eiusmod aliquip\",
        \"ImageGallerySorting\": -252749
      },
      {
        \"ImageGalleryID\": 85899281,
        \"ImageGalleryFile\": \"qui\",
        \"ImageGalleryCaption\": \"sint esse sunt\",
        \"ImageGallerySorting\": -54507490
      },
      {
        \"ImageGalleryID\": -11430832,
        \"ImageGalleryFile\": \"mollit\",
        \"ImageGalleryCaption\": \"commodo\",
        \"ImageGallerySorting\": -46967746
      }
    ],
    \"OptionSetList\": [
      {
        \"OptionSetID\": -9624336,
        \"OptionSetName\": \"consequat proident eu incididunt\",
        \"OptionSorting\": -9808248.400129706,
        \"OptionRequired\": false,
        \"OptionType\": \"Exc\",
        \"OptionURL\": \"ea dolor occaecat\",
        \"OptionAdditionalInformation\": \"deserunt ut voluptate et mollit\",
        \"OptionSizeLimit\": -18996324,
        \"OptionList\": [
          {
            \"OptionID\": 87282590,
            \"OptionName\": \"mollit aliquip\",
            \"OptionSelected\": true,
            \"OptionHide\": true,
            \"OptionValue\": -12060218.372790128,
            \"OptionPartNumber\": \"aliqua ips\",
            \"OptionSorting\": -32514387.407670587,
            \"OptionImagePath\": \"nostrud occaecat irure\",
            \"OptionBundleCatalogId\": 16327524,
            \"OptionBundleQuantity\": 28975242
          },
          {
            \"OptionID\": 475400,
            \"OptionName\": \"ut\",
            \"OptionSelected\": false,
            \"OptionHide\": true,
            \"OptionValue\": 83910541.85383081,
            \"OptionPartNumber\": \"esse laboru\",
            \"OptionSorting\": 88206012.13601771,
            \"OptionImagePath\": \"officia\",
            \"OptionBundleCatalogId\": -6805126,
            \"OptionBundleQuantity\": -43361767
          },
          {
            \"OptionID\": -73158279,
            \"OptionName\": \"pariatur sed cillum\",
            \"OptionSelected\": false,
            \"OptionHide\": true,
            \"OptionValue\": -89539917.62366292,
            \"OptionPartNumber\": \"ut aliqua \",
            \"OptionSorting\": -47434682.94448014,
            \"OptionImagePath\": \"laboris eiusmod\",
            \"OptionBundleCatalogId\": 90406534,
            \"OptionBundleQuantity\": 13728910
          },
          {
            \"OptionID\": -39519118,
            \"OptionName\": \"ut sint et minim\",
            \"OptionSelected\": false,
            \"OptionHide\": false,
            \"OptionValue\": -17640884.76984167,
            \"OptionPartNumber\": \"in deserunt\",
            \"OptionSorting\": 79008974.74911499,
            \"OptionImagePath\": \"Duis\",
            \"OptionBundleCatalogId\": -74248708,
            \"OptionBundleQuantity\": 97842795
          }
        ]
      },
      {
        \"OptionSetID\": -37136621,
        \"OptionSetName\": \"veniam fugiat reprehenderit\",
        \"OptionSorting\": 80738285.39448038,
        \"OptionRequired\": false,
        \"OptionType\": \"aute eu i\",
        \"OptionURL\": \"adipisicing i\",
        \"OptionAdditionalInformation\": \"ex nostrud Excepteur consectetur\",
        \"OptionSizeLimit\": -99358398,
        \"OptionList\": [
          {
            \"OptionID\": 34643498,
            \"OptionName\": \"dolor nulla\",
            \"OptionSelected\": true,
            \"OptionHide\": false,
            \"OptionValue\": 97871116.83652219,
            \"OptionPartNumber\": \"ullamco laboris elit cupidatat\",
            \"OptionSorting\": 31393458.93006493,
            \"OptionImagePath\": \"Excepteur labore\",
            \"OptionBundleCatalogId\": 24089819,
            \"OptionBundleQuantity\": -80810366
          },
          {
            \"OptionID\": 37369915,
            \"OptionName\": \"qui non\",
            \"OptionSelected\": false,
            \"OptionHide\": false,
            \"OptionValue\": 49353300.31605053,
            \"OptionPartNumber\": \"adipisicing quis\",
            \"OptionSorting\": 15253242.1074235,
            \"OptionImagePath\": \"anim\",
            \"OptionBundleCatalogId\": -31012804,
            \"OptionBundleQuantity\": -86144201
          },
          {
            \"OptionID\": -64201947,
            \"OptionName\": \"sint esse Ut\",
            \"OptionSelected\": false,
            \"OptionHide\": false,
            \"OptionValue\": -32075611.034620404,
            \"OptionPartNumber\": \"reprehenderit ipsum nostrud\",
            \"OptionSorting\": -2708774.7805151045,
            \"OptionImagePath\": \"id aute\",
            \"OptionBundleCatalogId\": 89473872,
            \"OptionBundleQuantity\": -19240771
          }
        ]
      }
    ],
    \"AdvancedOptionList\": [
      {
        \"AdvancedOptionCode\": \"voluptate la\",
        \"AdvancedOptionSufix\": \"quis nisi\",
        \"AdvancedOptionName\": \"consectetur do\",
        \"AdvancedOptionCost\": 36654762.40428376,
        \"AdvancedOptionStock\": 52733638,
        \"AdvancedOptionWeight\": -92384859.73339032,
        \"AdvancedOptionPrice\": 85948294.02011198,
        \"AdvancedOptionGTIN\": \"dolore et\"
      },
      {
        \"AdvancedOptionCode\": \"sint consectetur\",
        \"AdvancedOptionSufix\": \"commodo non\",
        \"AdvancedOptionName\": \"est eu\",
        \"AdvancedOptionCost\": 7453902.233112946,
        \"AdvancedOptionStock\": 88061865,
        \"AdvancedOptionWeight\": 15100909.592037976,
        \"AdvancedOptionPrice\": -27256367.278723776,
        \"AdvancedOptionGTIN\": \"labo\"
      },
      {
        \"AdvancedOptionCode\": \"aliqu\",
        \"AdvancedOptionSufix\": \"voluptate amet\",
        \"AdvancedOptionName\": \"commodo sunt consequat labore cupidatat\",
        \"AdvancedOptionCost\": 93864947.77447405,
        \"AdvancedOptionStock\": -87583096,
        \"AdvancedOptionWeight\": 21015250.938407615,
        \"AdvancedOptionPrice\": 17804155.96021396,
        \"AdvancedOptionGTIN\": \"in sit eli\"
      },
      {
        \"AdvancedOptionCode\": \"consequat\",
        \"AdvancedOptionSufix\": \"dolor velit fug\",
        \"AdvancedOptionName\": \"consequat voluptate in sint Duis\",
        \"AdvancedOptionCost\": -96896867.88687326,
        \"AdvancedOptionStock\": 70730686,
        \"AdvancedOptionWeight\": 99350180.27173644,
        \"AdvancedOptionPrice\": -12327205.738661647,
        \"AdvancedOptionGTIN\": \"eu\"
      }
    ],
    \"RelatedProductList\": [
      {
        \"RelatedIndexID\": 7914273,
        \"RelatedProductID\": -10905146,
        \"RelatedProductSorting\": -99089034
      },
      {
        \"RelatedIndexID\": 98383610,
        \"RelatedProductID\": 8022252,
        \"RelatedProductSorting\": 85397571
      },
      {
        \"RelatedIndexID\": -39864225,
        \"RelatedProductID\": 76405654,
        \"RelatedProductSorting\": -38517086
      },
      {
        \"RelatedIndexID\": 57951962,
        \"RelatedProductID\": 82027999,
        \"RelatedProductSorting\": 60097275
      }
    ],
    \"UpSellingItemList\": [
      {
        \"UpSellingIndexID\": 37307100,
        \"UpSellingItemID\": -40114798,
        \"UpSellingItemSorting\": 36318634
      },
      {
        \"UpSellingIndexID\": 56308994,
        \"UpSellingItemID\": 23071822,
        \"UpSellingItemSorting\": -86539862
      },
      {
        \"UpSellingIndexID\": 13566320,
        \"UpSellingItemID\": 46448962,
        \"UpSellingItemSorting\": 64691287
      }
    ],
    \"DiscountList\": [
      {
        \"DiscountID\": 39183742,
        \"DiscountPriceLevel\": -81057729,
        \"DiscountLowbound\": 88708537,
        \"DiscountUpbound\": 71442268,
        \"DiscountPrice\": -68102701.20644853,
        \"DiscountPercentage\": true
      },
      {
        \"DiscountID\": 3596885,
        \"DiscountPriceLevel\": 59329106,
        \"DiscountLowbound\": -19843696,
        \"DiscountUpbound\": -24618467,
        \"DiscountPrice\": -46716080.31146715,
        \"DiscountPercentage\": false
      },
      {
        \"DiscountID\": -1252425,
        \"DiscountPriceLevel\": 20417200,
        \"DiscountLowbound\": -36272691,
        \"DiscountUpbound\": 4526400,
        \"DiscountPrice\": -13250497.523399085,
        \"DiscountPercentage\": false
      },
      {
        \"DiscountID\": -99036139,
        \"DiscountPriceLevel\": 38199781,
        \"DiscountLowbound\": -80780328,
        \"DiscountUpbound\": 88361664,
        \"DiscountPrice\": 81759711.02704805,
        \"DiscountPercentage\": true
      }
    ],
    \"DoNotUseCategoryOptions\": false,
    \"DateCreated\": \"1981-09-29T10:48:56.323Z\",
    \"ListingTemplateID\": -20025977,
    \"ListingTemplateName\": \"sunt do\",
    \"LoginRequiredOptionID\": 93583030,
    \"LoginRequiredOptionName\": \"incididunt esse nostrud aute tempor\",
    \"LoginRequiredOptionRedirectTo\": \"Ut incididunt aute reprehenderit\",
    \"AllowAccessCustomerGroupID\": 83409844,
    \"AllowAccessCustomerGroupName\": \"ad e\",
    \"RMAMaxPeriod\": \"ut in dolore\",
    \"CanonicalUrl\": \"qui exercitation proident quis\",
    \"TaxCode\": \"4J&1\",
    \"DisplayText\": \"aute exercitation\",
    \"MinimumQuantity\": 32058877.899328217,
    \"MaximumQuantity\": -19802612.263509363,
    \"AllowOnlyMultiples\": true,
    \"AllowFractionalQuantity\": true,
    \"QuantityOptions\": \"consequat do\",
    \"GroupOptionsForQuantityPricing\": true,
    \"ApplyQuantityDiscountToOptions\": false,
    \"EnableMakeAnOfferFeature\": false,
    \"MinimumAcceptableOffer\": \"veniam \",
    \"PriceLevel1\": 33399962.301205695,
    \"PriceLevel1Hide\": true,
    \"PriceLevel2\": 7201972.0762171745,
    \"PriceLevel2Hide\": false,
    \"PriceLevel3\": 77807049.55846933,
    \"PriceLevel3Hide\": false,
    \"PriceLevel4\": -1854646.1847341806,
    \"PriceLevel4Hide\": false,
    \"PriceLevel5\": 75840968.22909757,
    \"PriceLevel5Hide\": true,
    \"PriceLevel6\": 64639845.64240083,
    \"PriceLevel6Hide\": true,
    \"PriceLevel7\": 79181315.25480124,
    \"PriceLevel7Hide\": true,
    \"PriceLevel8\": 52452235.10862818,
    \"PriceLevel8Hide\": true,
    \"PriceLevel9\": -76940505.06579728,
    \"PriceLevel9Hide\": false,
    \"PriceLevel10\": -56420089.399086714,
    \"PriceLevel10Hide\": false,
    \"BuyButtonLink\": \"eiusmod culpa amet\",
    \"ProductLink\": \"voluptate in proident ex\",
    \"Title\": \"aliqua\",
    \"CustomFileName\": \"est exercitation qui\",
    \"RedirectLink\": \"id nulla\",
    \"MetaTags\": \"minim sint tempor\",
    \"SpecialInstructions\": \"in\",
    \"AssignKey\": false,
    \"ReUseKeys\": true,
    \"SerialList\": [
      {
        \"SerialID\": 90225710,
        \"SerialUses\": -36178625,
        \"SerialCode\": \"elit commodo mollit laborum nisi\"
      },
      {
        \"SerialID\": 86584458,
        \"SerialUses\": -97955402,
        \"SerialCode\": \"ullamco proident anim\"
      }
    ],
    \"EProductList\": [
      {
        \"FileNumber\": -60891947,
        \"FilePath\": \"incididunt aliqua ullam\"
      },
      {
        \"FileNumber\": -47359106,
        \"FilePath\": \"elit\"
      }
    ]
  },
  {
    \"SKUInfo\": {
      \"CatalogID\": -98658905,
      \"SKU\": \"laboris adipisicing do labore anim\",
      \"Name\": \"nostrud\",
      \"Cost\": 53417859.54914796,
      \"Price\": 59922160.548855126,
      \"Currency\": \"dolor magna non\",
      \"RetailPrice\": 94980000.97377393,
      \"SalePrice\": -10563017.016969085,
      \"OnSale\": false,
      \"Stock\": -97487235.70759799
    },
    \"MFGID\": \"dolor veniam eiusmo\",
    \"ShortDescription\": \"aute quis ipsum sunt velit\",
    \"ManufacturerID\": 21770651,
    \"ManufacturerName\": \"non laborum aute\",
    \"DistributorList\": [
      {
        \"DistributorID\": 46626039,
        \"DistributorName\": \"in do d\",
        \"DistributorItemCost\": 30895244.423885822,
        \"DistributorItemID\": \"exercitation sed\",
        \"DistributorStockID\": \"nisi aliquip sunt laborum\"
      },
      {
        \"DistributorID\": 24362096,
        \"DistributorName\": \"ame\",
        \"DistributorItemCost\": -38810198.55567498,
        \"DistributorItemID\": \"ipsum ea dolor anim Duis\",
        \"DistributorStockID\": \"\"
      },
      {
        \"DistributorID\": -18100188,
        \"DistributorName\": \"do Lorem\",
        \"DistributorItemCost\": 23206450.310608506,
        \"DistributorItemID\": \"qui\",
        \"DistributorStockID\": \"ut elit esse aliqua\"
      },
      {
        \"DistributorID\": 340092,
        \"DistributorName\": \"eu veniam \",
        \"DistributorItemCost\": -19013104.016615137,
        \"DistributorItemID\": \"commodo officia Duis\",
        \"DistributorStockID\": \"sint consectetur\"
      }
    ],
    \"LastUpdate\": \"1939-04-21T14:45:02.420Z\",
    \"UserID\": \"dolore amet adipisicing\",
    \"GTIN\": \"in elit\",
    \"CategoryList\": [
      {
        \"CategoryID\": -87697757,
        \"CategoryName\": \"magna\"
      }
    ],
    \"ExternalIdsList\": [
      {
        \"ID\": 61694905,
        \"AdvancedOptionSufix\": \"dolore reprehenderit\",
        \"ExternalId1\": \"eiusmod pro\",
        \"ExternalId2\": \"officia ea in fugiat\",
        \"ExternalIdType\": \"labore\"
      },
      {
        \"ID\": -99964792,
        \"AdvancedOptionSufix\": \"cillum do ea id ullamco\",
        \"ExternalId1\": \"laborum exercitation consequat\",
        \"ExternalId2\": \"Ut in ipsum\",
        \"ExternalIdType\": \"irure qui\"
      }
    ],
    \"CategoryExternalIdsList\": [
      {
        \"ID\": -52785366,
        \"CategoryID\": -57320157,
        \"ExternalId1\": \"laborum\",
        \"ExternalIdType\": \"in\"
      },
      {
        \"ID\": -30319590,
        \"CategoryID\": 1362631,
        \"ExternalId1\": \"aliquip a\",
        \"ExternalIdType\": \"in in\"
      },
      {
        \"ID\": 63511377,
        \"CategoryID\": -5840475,
        \"ExternalId1\": \"deserunt nostrud amet\",
        \"ExternalIdType\": \"laborum\"
      },
      {
        \"ID\": -33837317,
        \"CategoryID\": -41878663,
        \"ExternalId1\": \"in dolore\",
        \"ExternalIdType\": \"fugiat\"
      }
    ],
    \"NonTaxable\": false,
    \"NotForSale\": true,
    \"Hide\": false,
    \"GiftCertificate\": false,
    \"HomeSpecial\": false,
    \"CategorySpecial\": true,
    \"NonSearchable\": false,
    \"GiftWrapItem\": false,
    \"ShipCost\": -10600618.88195625,
    \"Weight\": 9078899.138909474,
    \"Height\": 90581515.30256867,
    \"Width\": -65099120.80518912,
    \"Depth\": -37041066.496863805,
    \"SelfShip\": false,
    \"FreeShipping\": true,
    \"RewardPoints\": -70051161,
    \"RedeemPoints\": -58808522,
    \"DisableRewards\": true,
    \"StockAlert\": -69829261,
    \"ReorderQuantity\": -96137020,
    \"InStockMessage\": \"tempor cillum in cupidatat fugiat\",
    \"OutOfStockMessage\": \"enim reprehe\",
    \"BackOrderMessage\": \"aliquip ut\",
    \"InventoryControl\": 11713086,
    \"WarehouseLocation\": \"Duis in ipsum incididunt quis\",
    \"WarehouseBin\": \"irure ea eiusmod non\",
    \"WarehouseAisle\": \"ad do dolor\",
    \"WarehouseCustom\": \"aliqua ut\",
    \"Description\": \"non in\",
    \"Keywords\": \"eiusmod Duis\",
    \"ExtraField1\": \"qui in\",
    \"ExtraField2\": \"Lorem eiusmod ipsum veniam\",
    \"ExtraField3\": \"dolor anim officia\",
    \"ExtraField4\": \"id non\",
    \"ExtraField5\": \"sunt est culpa\",
    \"ExtraField6\": \"deserunt\",
    \"ExtraField7\": \"tempor aliqua occaecat\",
    \"ExtraField8\": \"non magna\",
    \"ExtraField9\": \"qui Excepteur anim et\",
    \"ExtraField10\": \"dolore velit officia nostrud\",
    \"ExtraField11\": \"id dolor ad aliquip anim\",
    \"ExtraField12\": \"nisi ex tempor Lorem ad\",
    \"ExtraField13\": \"quis eu\",
    \"FeatureList\": [
      {
        \"FeatureID\": 87529955,
        \"FeatureTitle\": \"anim ad magna nisi\",
        \"FeatureDescription\": \"ea officia\"
      },
      {
        \"FeatureID\": 81554410,
        \"FeatureTitle\": \"nulla et mollit officia\",
        \"FeatureDescription\": \"magna cupidatat\"
      },
      {
        \"FeatureID\": 5586242,
        \"FeatureTitle\": \"commodo Dui\",
        \"FeatureDescription\": \"ad sint labor\"
      },
      {
        \"FeatureID\": -60816330,
        \"FeatureTitle\": \"in sit\",
        \"FeatureDescription\": \"deserunt ex officia\"
      },
      {
        \"FeatureID\": 78416131,
        \"FeatureTitle\": \"nostrud e\",
        \"FeatureDescription\": \"eu esse est\"
      }
    ],
    \"PluginList\": {},
    \"SampleEnable\": false,
    \"SampleName\": \"aliquip\",
    \"SampleSKUPrefix\": \"pariatur ipsum nul\",
    \"SamplePrice\": 80699384.93821168,
    \"SampleWeight\": 4785012.020898357,
    \"ReviewAverage\": 95477025.2272993,
    \"ReviewCount\": 95870152,
    \"MainImageFile\": \"et Excepteur nisi veniam\",
    \"MainImageCaption\": \"ullamco fugiat ut deserunt voluptate\",
    \"ThumbnailFile\": \"id nostrud velit anim\",
    \"MediaFile\": \"do pariatur\",
    \"AdditionalImageFile2\": \"tempor officia et cillum culpa\",
    \"AdditionalImageCaption2\": \"in cupidatat laboris\",
    \"AdditionalImageFile3\": \"do velit sit\",
    \"AdditionalImageCaption3\": \"id velit veniam commodo\",
    \"AdditionalImageFile4\": \"Lorem velit irure ipsum\",
    \"AdditionalImageCaption4\": \"aliqua esse Ut\",
    \"ImageGalleryList\": [
      {
        \"ImageGalleryID\": 93937587,
        \"ImageGalleryFile\": \"in nostrud ea pariatur\",
        \"ImageGalleryCaption\": \"non in sed\",
        \"ImageGallerySorting\": -51770181
      },
      {
        \"ImageGalleryID\": -22954681,
        \"ImageGalleryFile\": \"velit ea sit pariatur laboris\",
        \"ImageGalleryCaption\": \"dolor consectetur qui laborum aliquip\",
        \"ImageGallerySorting\": 42307409
      },
      {
        \"ImageGalleryID\": -25994028,
        \"ImageGalleryFile\": \"fugiat ad occaecat est nulla\",
        \"ImageGalleryCaption\": \"esse eu\",
        \"ImageGallerySorting\": -51360544
      },
      {
        \"ImageGalleryID\": 32372760,
        \"ImageGalleryFile\": \"ullamco et commodo laboris eiusmod\",
        \"ImageGalleryCaption\": \"anim pariatur et eiusmod exercitation\",
        \"ImageGallerySorting\": -83300590
      }
    ],
    \"OptionSetList\": [
      {
        \"OptionSetID\": -466228,
        \"OptionSetName\": \"aliquip\",
        \"OptionSorting\": 37945764.24949825,
        \"OptionRequired\": false,
        \"OptionType\": \"magna \",
        \"OptionURL\": \"deserunt in Ut nulla\",
        \"OptionAdditionalInformation\": \"laborum voluptate commodo ea culpa\",
        \"OptionSizeLimit\": 4283943,
        \"OptionList\": [
          {
            \"OptionID\": 29303264,
            \"OptionName\": \"Excepteur id in enim\",
            \"OptionSelected\": true,
            \"OptionHide\": true,
            \"OptionValue\": 13304673.223948479,
            \"OptionPartNumber\": \"ali\",
            \"OptionSorting\": -63838303.48048631,
            \"OptionImagePath\": \"non enim dolore in\",
            \"OptionBundleCatalogId\": 25770767,
            \"OptionBundleQuantity\": 12412268
          },
          {
            \"OptionID\": 75563384,
            \"OptionName\": \"ex nulla dolor occaecat\",
            \"OptionSelected\": false,
            \"OptionHide\": true,
            \"OptionValue\": 852019.9370655864,
            \"OptionPartNumber\": \"dolor sit eiusmod aliqua\",
            \"OptionSorting\": -37982405.085194506,
            \"OptionImagePath\": \"dolor in deserunt\",
            \"OptionBundleCatalogId\": 24869787,
            \"OptionBundleQuantity\": -98542646
          },
          {
            \"OptionID\": -22272186,
            \"OptionName\": \"id do reprehenderit dolor amet\",
            \"OptionSelected\": true,
            \"OptionHide\": false,
            \"OptionValue\": 79663952.06483364,
            \"OptionPartNumber\": \"aliqua fugiat e\",
            \"OptionSorting\": -40107189.78465731,
            \"OptionImagePath\": \"quis\",
            \"OptionBundleCatalogId\": -42224169,
            \"OptionBundleQuantity\": 703629
          }
        ]
      },
      {
        \"OptionSetID\": 93573354,
        \"OptionSetName\": \"ad cillum commodo\",
        \"OptionSorting\": -93473490.53289488,
        \"OptionRequired\": true,
        \"OptionType\": \"id et\",
        \"OptionURL\": \"\",
        \"OptionAdditionalInformation\": \"consectetur dolore aute sunt enim\",
        \"OptionSizeLimit\": 3586086,
        \"OptionList\": [
          {
            \"OptionID\": -10786285,
            \"OptionName\": \"proident ut\",
            \"OptionSelected\": false,
            \"OptionHide\": false,
            \"OptionValue\": 80565059.66213942,
            \"OptionPartNumber\": \"amet Excepteur velit in\",
            \"OptionSorting\": 51428883.92332715,
            \"OptionImagePath\": \"in sunt\",
            \"OptionBundleCatalogId\": 29334422,
            \"OptionBundleQuantity\": -51797951
          },
          {
            \"OptionID\": 55609478,
            \"OptionName\": \"et dolore officia reprehenderit\",
            \"OptionSelected\": true,
            \"OptionHide\": true,
            \"OptionValue\": -63095179.26375223,
            \"OptionPartNumber\": \"adip\",
            \"OptionSorting\": -89150980.70153004,
            \"OptionImagePath\": \"occaecat Lorem nostrud\",
            \"OptionBundleCatalogId\": -22960812,
            \"OptionBundleQuantity\": -50540835
          },
          {
            \"OptionID\": 65321063,
            \"OptionName\": \"laboris ut elit enim\",
            \"OptionSelected\": true,
            \"OptionHide\": false,
            \"OptionValue\": -25481317.488593146,
            \"OptionPartNumber\": \"non\",
            \"OptionSorting\": -95498798.2094933,
            \"OptionImagePath\": \"aliquip in\",
            \"OptionBundleCatalogId\": 33703905,
            \"OptionBundleQuantity\": 98422047
          },
          {
            \"OptionID\": -70012900,
            \"OptionName\": \"et elit aliquip ut\",
            \"OptionSelected\": true,
            \"OptionHide\": false,
            \"OptionValue\": 17078962.84011601,
            \"OptionPartNumber\": \"c\",
            \"OptionSorting\": 33122421.1957673,
            \"OptionImagePath\": \"in ea sunt fugiat\",
            \"OptionBundleCatalogId\": -67317924,
            \"OptionBundleQuantity\": 79159913
          }
        ]
      }
    ],
    \"AdvancedOptionList\": [
      {
        \"AdvancedOptionCode\": \"sunt dolor voluptat\",
        \"AdvancedOptionSufix\": \"laboris v\",
        \"AdvancedOptionName\": \"ea esse laborum labore ut\",
        \"AdvancedOptionCost\": 55848112.98952207,
        \"AdvancedOptionStock\": 76156695,
        \"AdvancedOptionWeight\": 9164328.298772201,
        \"AdvancedOptionPrice\": 9651999.837504506,
        \"AdvancedOptionGTIN\": \"ad adipisicing dolor veniam deserunt\"
      },
      {
        \"AdvancedOptionCode\": \"consequ\",
        \"AdvancedOptionSufix\": \"in\",
        \"AdvancedOptionName\": \"officia Lorem\",
        \"AdvancedOptionCost\": 90640319.11127093,
        \"AdvancedOptionStock\": 54338452,
        \"AdvancedOptionWeight\": -15511710.312378526,
        \"AdvancedOptionPrice\": 64611024.67730898,
        \"AdvancedOptionGTIN\": \"nos\"
      }
    ],
    \"RelatedProductList\": [
      {
        \"RelatedIndexID\": 89414775,
        \"RelatedProductID\": 85888512,
        \"RelatedProductSorting\": 15102358
      },
      {
        \"RelatedIndexID\": 75748404,
        \"RelatedProductID\": -31477001,
        \"RelatedProductSorting\": 72772785
      }
    ],
    \"UpSellingItemList\": [
      {
        \"UpSellingIndexID\": 47506021,
        \"UpSellingItemID\": -52234227,
        \"UpSellingItemSorting\": 92257498
      },
      {
        \"UpSellingIndexID\": 93107884,
        \"UpSellingItemID\": -57007053,
        \"UpSellingItemSorting\": -78009068
      },
      {
        \"UpSellingIndexID\": -31045693,
        \"UpSellingItemID\": 12785595,
        \"UpSellingItemSorting\": -6069558
      },
      {
        \"UpSellingIndexID\": 55302721,
        \"UpSellingItemID\": 36582168,
        \"UpSellingItemSorting\": -64383910
      },
      {
        \"UpSellingIndexID\": 94922078,
        \"UpSellingItemID\": -37166988,
        \"UpSellingItemSorting\": -16684608
      }
    ],
    \"DiscountList\": [
      {
        \"DiscountID\": 53775141,
        \"DiscountPriceLevel\": -6484243,
        \"DiscountLowbound\": 43653873,
        \"DiscountUpbound\": -65085012,
        \"DiscountPrice\": 24062429.59205392,
        \"DiscountPercentage\": false
      },
      {
        \"DiscountID\": -15169325,
        \"DiscountPriceLevel\": -74223319,
        \"DiscountLowbound\": 23171948,
        \"DiscountUpbound\": -34063601,
        \"DiscountPrice\": 39205151.21132815,
        \"DiscountPercentage\": true
      },
      {
        \"DiscountID\": -37826793,
        \"DiscountPriceLevel\": 78170938,
        \"DiscountLowbound\": 71711506,
        \"DiscountUpbound\": -82649015,
        \"DiscountPrice\": 12960969.719267726,
        \"DiscountPercentage\": false
      },
      {
        \"DiscountID\": -73536759,
        \"DiscountPriceLevel\": 72907212,
        \"DiscountLowbound\": 40221238,
        \"DiscountUpbound\": 42828439,
        \"DiscountPrice\": -52482288.167259924,
        \"DiscountPercentage\": false
      },
      {
        \"DiscountID\": -20626471,
        \"DiscountPriceLevel\": 75290069,
        \"DiscountLowbound\": -33070102,
        \"DiscountUpbound\": -7140768,
        \"DiscountPrice\": -89612018.10301942,
        \"DiscountPercentage\": false
      }
    ],
    \"DoNotUseCategoryOptions\": false,
    \"DateCreated\": \"1940-11-09T08:06:28.312Z\",
    \"ListingTemplateID\": 99219440,
    \"ListingTemplateName\": \"exercitation dolore in deserunt\",
    \"LoginRequiredOptionID\": -59374108,
    \"LoginRequiredOptionName\": \"velit culpa occaecat\",
    \"LoginRequiredOptionRedirectTo\": \"nisi in\",
    \"AllowAccessCustomerGroupID\": 56625779,
    \"AllowAccessCustomerGroupName\": \"cillum nulla qui\",
    \"RMAMaxPeriod\": \"occaecat voluptate incididun\",
    \"CanonicalUrl\": \"nostrud proident aliqua\",
    \"TaxCode\": \".R#\",
    \"DisplayText\": \"Duis eu consectetur proide\",
    \"MinimumQuantity\": -86395086.43804161,
    \"MaximumQuantity\": -83848114.48124045,
    \"AllowOnlyMultiples\": false,
    \"AllowFractionalQuantity\": true,
    \"QuantityOptions\": \"quis nostrud mollit nulla cillum\",
    \"GroupOptionsForQuantityPricing\": false,
    \"ApplyQuantityDiscountToOptions\": false,
    \"EnableMakeAnOfferFeature\": true,
    \"MinimumAcceptableOffer\": \"occ\",
    \"PriceLevel1\": -76113886.60931867,
    \"PriceLevel1Hide\": false,
    \"PriceLevel2\": -2685019.806964606,
    \"PriceLevel2Hide\": true,
    \"PriceLevel3\": 27555636.37172766,
    \"PriceLevel3Hide\": false,
    \"PriceLevel4\": -32466343.359107345,
    \"PriceLevel4Hide\": false,
    \"PriceLevel5\": -35533768.53624486,
    \"PriceLevel5Hide\": true,
    \"PriceLevel6\": -49754764.17288869,
    \"PriceLevel6Hide\": true,
    \"PriceLevel7\": -99144164.53978108,
    \"PriceLevel7Hide\": true,
    \"PriceLevel8\": 55966055.8681418,
    \"PriceLevel8Hide\": false,
    \"PriceLevel9\": -88768331.34491347,
    \"PriceLevel9Hide\": true,
    \"PriceLevel10\": 84988986.90436819,
    \"PriceLevel10Hide\": true,
    \"BuyButtonLink\": \"ea est\",
    \"ProductLink\": \"dolor ad exercitation\",
    \"Title\": \"laboris dolor reprehenderit cillum ipsum\",
    \"CustomFileName\": \"amet\",
    \"RedirectLink\": \"laborum pariatur ullamco deserunt\",
    \"MetaTags\": \"incididunt eu tempor\",
    \"SpecialInstructions\": \"ea Ut nulla\",
    \"AssignKey\": true,
    \"ReUseKeys\": true,
    \"SerialList\": [
      {
        \"SerialID\": 22829981,
        \"SerialUses\": -51941719,
        \"SerialCode\": \"ullamco labore cupidatat\"
      }
    ],
    \"EProductList\": [
      {
        \"FileNumber\": 9395245,
        \"FilePath\": \"labore\"
      },
      {
        \"FileNumber\": 90816224,
        \"FilePath\": \"voluptate Excepteur veniam in tempor\"
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
  
    using (var content = new StringContent("[  {    \"SKUInfo\": {      \"CatalogID\": 47304819,      \"SKU\": \"sit\",      \"Name\": \"in irure sed anim ut\",      \"Cost\": -97938774.16442451,      \"Price\": -19308940.197771385,      \"Currency\": \"sunt fugiat ex i\",      \"RetailPrice\": 77722221.0081538,      \"SalePrice\": -91789207.28786238,      \"OnSale\": false,      \"Stock\": -45038952.78911698    },    \"MFGID\": \"com\",    \"ShortDescription\": \"in\",    \"ManufacturerID\": 61799392,    \"ManufacturerName\": \"do ea consectetur Exce\",    \"DistributorList\": [      {        \"DistributorID\": 20469110,        \"DistributorName\": \"velit sed e\",        \"DistributorItemCost\": 61921348.935050964,        \"DistributorItemID\": \"minim sint\",        \"DistributorStockID\": \"dolor magna aliquip\"      },      {        \"DistributorID\": -21653005,        \"DistributorName\": \"culpa Lorem in officia\",        \"DistributorItemCost\": -1545864.7590813637,        \"DistributorItemID\": \"proident\",        \"DistributorStockID\": \"sunt laboris\"      },      {        \"DistributorID\": 33690478,        \"DistributorName\": \"velit enim\",        \"DistributorItemCost\": -96117790.00715286,        \"DistributorItemID\": \"veniam incididunt\",        \"DistributorStockID\": \"Excepteur dolor\"      }    ],    \"LastUpdate\": \"1986-07-09T01:36:17.605Z\",    \"UserID\": \"et est Excepteur Duis\",    \"GTIN\": \"elit non\",    \"CategoryList\": [      {        \"CategoryID\": -65000395,        \"CategoryName\": \"laborum\"      },      {        \"CategoryID\": 43936084,        \"CategoryName\": \"id amet anim consectetur\"      },      {        \"CategoryID\": 79598330,        \"CategoryName\": \"pariatur dolor\"      },      {        \"CategoryID\": 54105968,        \"CategoryName\": \"in dolor mollit\"      }    ],    \"ExternalIdsList\": [      {        \"ID\": -46777171,        \"AdvancedOptionSufix\": \"fugiat aliqua\",        \"ExternalId1\": \"dolor elit\",        \"ExternalId2\": \"nulla pariatur laboris\",        \"ExternalIdType\": \"eu ut ullamco \"      },      {        \"ID\": 98426633,        \"AdvancedOptionSufix\": \"cillum exercitation\",        \"ExternalId1\": \"enim officia\",        \"ExternalId2\": \"m\",        \"ExternalIdType\": \"qui tempor cupidat\"      },      {        \"ID\": -36788101,        \"AdvancedOptionSufix\": \"ipsum eu exercitation laboris i\",        \"ExternalId1\": \"sed\",        \"ExternalId2\": \"sed in \",        \"ExternalIdType\": \"in qui\"      },      {        \"ID\": -82163709,        \"AdvancedOptionSufix\": \"ut\",        \"ExternalId1\": \"cillum sit\",        \"ExternalId2\": \"mollit velit\",        \"ExternalIdType\": \"est dolor id\"      }    ],    \"CategoryExternalIdsList\": [      {        \"ID\": -85258393,        \"CategoryID\": -96929120,        \"ExternalId1\": \"incididunt occaecat quis deseru\",        \"ExternalIdType\": \"aliquip irure est cupidatat\"      },      {        \"ID\": 53549560,        \"CategoryID\": 37858692,        \"ExternalId1\": \"proident aliquip\",        \"ExternalIdType\": \"adipisicing non\"      }    ],    \"NonTaxable\": false,    \"NotForSale\": true,    \"Hide\": false,    \"GiftCertificate\": true,    \"HomeSpecial\": true,    \"CategorySpecial\": false,    \"NonSearchable\": true,    \"GiftWrapItem\": false,    \"ShipCost\": 35944853.68285248,    \"Weight\": -97533207.15121979,    \"Height\": -11564221.075311482,    \"Width\": -8044259.455038056,    \"Depth\": 70870765.80208012,    \"SelfShip\": false,    \"FreeShipping\": true,    \"RewardPoints\": 83597752,    \"RedeemPoints\": -56180334,    \"DisableRewards\": false,    \"StockAlert\": 72736229,    \"ReorderQuantity\": 74401951,    \"InStockMessage\": \"velit in\",    \"OutOfStockMessage\": \"nulla dolore sunt\",    \"BackOrderMessage\": \"sint nulla\",    \"InventoryControl\": 35497330,    \"WarehouseLocation\": \"reprehenderit ad voluptate\",    \"WarehouseBin\": \"eu\",    \"WarehouseAisle\": \"minim esse est mollit\",    \"WarehouseCustom\": \"Excepteur culpa fugiat sit\",    \"Description\": \"ad irure\",    \"Keywords\": \"eiusmod esse\",    \"ExtraField1\": \"voluptate sit\",    \"ExtraField2\": \"qui cupidatat Ut id\",    \"ExtraField3\": \"velit amet occaecat\",    \"ExtraField4\": \"Ut\",    \"ExtraField5\": \"sunt exercitation\",    \"ExtraField6\": \"in\",    \"ExtraField7\": \"pariatur Excepteur sint eu\",    \"ExtraField8\": \"nisi nulla Ut\",    \"ExtraField9\": \"ipsum Excepteur\",    \"ExtraField10\": \"laboris incididunt eu sit in\",    \"ExtraField11\": \"eiusmod\",    \"ExtraField12\": \"laboris Duis\",    \"ExtraField13\": \"ea \",    \"FeatureList\": [      {        \"FeatureID\": 82968211,        \"FeatureTitle\": \"ipsum est tempor nisi\",        \"FeatureDescription\": \"amet pariatur dolor\"      },      {        \"FeatureID\": 68248391,        \"FeatureTitle\": \"et pariatur fugiat cillum\",        \"FeatureDescription\": \"ea\"      }    ],    \"PluginList\": {},    \"SampleEnable\": true,    \"SampleName\": \"ex non tempor\",    \"SampleSKUPrefix\": \"repr\",    \"SamplePrice\": -27179100.023684114,    \"SampleWeight\": -29559413.62695022,    \"ReviewAverage\": 33004892.57644981,    \"ReviewCount\": 76223069,    \"MainImageFile\": \"enim sed occaecat\",    \"MainImageCaption\": \"irure eu ut\",    \"ThumbnailFile\": \"ullamco officia\",    \"MediaFile\": \"sint nostrud qui ut\",    \"AdditionalImageFile2\": \"fugiat nisi commodo enim\",    \"AdditionalImageCaption2\": \"pariatur labore ex\",    \"AdditionalImageFile3\": \"elit velit tempor consectetur\",    \"AdditionalImageCaption3\": \"elit veniam\",    \"AdditionalImageFile4\": \"enim consectetur aliquip officia\",    \"AdditionalImageCaption4\": \"sint ullamco fugiat\",    \"ImageGalleryList\": [      {        \"ImageGalleryID\": 73225027,        \"ImageGalleryFile\": \"nisi laborum non\",        \"ImageGalleryCaption\": \"consectetur velit eiusmod anim dolor\",        \"ImageGallerySorting\": -45493104      },      {        \"ImageGalleryID\": 39367279,        \"ImageGalleryFile\": \"irure dolore\",        \"ImageGalleryCaption\": \"aliqua\",        \"ImageGallerySorting\": -82773561      },      {        \"ImageGalleryID\": -54690210,        \"ImageGalleryFile\": \"anim\",        \"ImageGalleryCaption\": \"eiusmod aliquip\",        \"ImageGallerySorting\": -252749      },      {        \"ImageGalleryID\": 85899281,        \"ImageGalleryFile\": \"qui\",        \"ImageGalleryCaption\": \"sint esse sunt\",        \"ImageGallerySorting\": -54507490      },      {        \"ImageGalleryID\": -11430832,        \"ImageGalleryFile\": \"mollit\",        \"ImageGalleryCaption\": \"commodo\",        \"ImageGallerySorting\": -46967746      }    ],    \"OptionSetList\": [      {        \"OptionSetID\": -9624336,        \"OptionSetName\": \"consequat proident eu incididunt\",        \"OptionSorting\": -9808248.400129706,        \"OptionRequired\": false,        \"OptionType\": \"Exc\",        \"OptionURL\": \"ea dolor occaecat\",        \"OptionAdditionalInformation\": \"deserunt ut voluptate et mollit\",        \"OptionSizeLimit\": -18996324,        \"OptionList\": [          {            \"OptionID\": 87282590,            \"OptionName\": \"mollit aliquip\",            \"OptionSelected\": true,            \"OptionHide\": true,            \"OptionValue\": -12060218.372790128,            \"OptionPartNumber\": \"aliqua ips\",            \"OptionSorting\": -32514387.407670587,            \"OptionImagePath\": \"nostrud occaecat irure\",            \"OptionBundleCatalogId\": 16327524,            \"OptionBundleQuantity\": 28975242          },          {            \"OptionID\": 475400,            \"OptionName\": \"ut\",            \"OptionSelected\": false,            \"OptionHide\": true,            \"OptionValue\": 83910541.85383081,            \"OptionPartNumber\": \"esse laboru\",            \"OptionSorting\": 88206012.13601771,            \"OptionImagePath\": \"officia\",            \"OptionBundleCatalogId\": -6805126,            \"OptionBundleQuantity\": -43361767          },          {            \"OptionID\": -73158279,            \"OptionName\": \"pariatur sed cillum\",            \"OptionSelected\": false,            \"OptionHide\": true,            \"OptionValue\": -89539917.62366292,            \"OptionPartNumber\": \"ut aliqua \",            \"OptionSorting\": -47434682.94448014,            \"OptionImagePath\": \"laboris eiusmod\",            \"OptionBundleCatalogId\": 90406534,            \"OptionBundleQuantity\": 13728910          },          {            \"OptionID\": -39519118,            \"OptionName\": \"ut sint et minim\",            \"OptionSelected\": false,            \"OptionHide\": false,            \"OptionValue\": -17640884.76984167,            \"OptionPartNumber\": \"in deserunt\",            \"OptionSorting\": 79008974.74911499,            \"OptionImagePath\": \"Duis\",            \"OptionBundleCatalogId\": -74248708,            \"OptionBundleQuantity\": 97842795          }        ]      },      {        \"OptionSetID\": -37136621,        \"OptionSetName\": \"veniam fugiat reprehenderit\",        \"OptionSorting\": 80738285.39448038,        \"OptionRequired\": false,        \"OptionType\": \"aute eu i\",        \"OptionURL\": \"adipisicing i\",        \"OptionAdditionalInformation\": \"ex nostrud Excepteur consectetur\",        \"OptionSizeLimit\": -99358398,        \"OptionList\": [          {            \"OptionID\": 34643498,            \"OptionName\": \"dolor nulla\",            \"OptionSelected\": true,            \"OptionHide\": false,            \"OptionValue\": 97871116.83652219,            \"OptionPartNumber\": \"ullamco laboris elit cupidatat\",            \"OptionSorting\": 31393458.93006493,            \"OptionImagePath\": \"Excepteur labore\",            \"OptionBundleCatalogId\": 24089819,            \"OptionBundleQuantity\": -80810366          },          {            \"OptionID\": 37369915,            \"OptionName\": \"qui non\",            \"OptionSelected\": false,            \"OptionHide\": false,            \"OptionValue\": 49353300.31605053,            \"OptionPartNumber\": \"adipisicing quis\",            \"OptionSorting\": 15253242.1074235,            \"OptionImagePath\": \"anim\",            \"OptionBundleCatalogId\": -31012804,            \"OptionBundleQuantity\": -86144201          },          {            \"OptionID\": -64201947,            \"OptionName\": \"sint esse Ut\",            \"OptionSelected\": false,            \"OptionHide\": false,            \"OptionValue\": -32075611.034620404,            \"OptionPartNumber\": \"reprehenderit ipsum nostrud\",            \"OptionSorting\": -2708774.7805151045,            \"OptionImagePath\": \"id aute\",            \"OptionBundleCatalogId\": 89473872,            \"OptionBundleQuantity\": -19240771          }        ]      }    ],    \"AdvancedOptionList\": [      {        \"AdvancedOptionCode\": \"voluptate la\",        \"AdvancedOptionSufix\": \"quis nisi\",        \"AdvancedOptionName\": \"consectetur do\",        \"AdvancedOptionCost\": 36654762.40428376,        \"AdvancedOptionStock\": 52733638,        \"AdvancedOptionWeight\": -92384859.73339032,        \"AdvancedOptionPrice\": 85948294.02011198,        \"AdvancedOptionGTIN\": \"dolore et\"      },      {        \"AdvancedOptionCode\": \"sint consectetur\",        \"AdvancedOptionSufix\": \"commodo non\",        \"AdvancedOptionName\": \"est eu\",        \"AdvancedOptionCost\": 7453902.233112946,        \"AdvancedOptionStock\": 88061865,        \"AdvancedOptionWeight\": 15100909.592037976,        \"AdvancedOptionPrice\": -27256367.278723776,        \"AdvancedOptionGTIN\": \"labo\"      },      {        \"AdvancedOptionCode\": \"aliqu\",        \"AdvancedOptionSufix\": \"voluptate amet\",        \"AdvancedOptionName\": \"commodo sunt consequat labore cupidatat\",        \"AdvancedOptionCost\": 93864947.77447405,        \"AdvancedOptionStock\": -87583096,        \"AdvancedOptionWeight\": 21015250.938407615,        \"AdvancedOptionPrice\": 17804155.96021396,        \"AdvancedOptionGTIN\": \"in sit eli\"      },      {        \"AdvancedOptionCode\": \"consequat\",        \"AdvancedOptionSufix\": \"dolor velit fug\",        \"AdvancedOptionName\": \"consequat voluptate in sint Duis\",        \"AdvancedOptionCost\": -96896867.88687326,        \"AdvancedOptionStock\": 70730686,        \"AdvancedOptionWeight\": 99350180.27173644,        \"AdvancedOptionPrice\": -12327205.738661647,        \"AdvancedOptionGTIN\": \"eu\"      }    ],    \"RelatedProductList\": [      {        \"RelatedIndexID\": 7914273,        \"RelatedProductID\": -10905146,        \"RelatedProductSorting\": -99089034      },      {        \"RelatedIndexID\": 98383610,        \"RelatedProductID\": 8022252,        \"RelatedProductSorting\": 85397571      },      {        \"RelatedIndexID\": -39864225,        \"RelatedProductID\": 76405654,        \"RelatedProductSorting\": -38517086      },      {        \"RelatedIndexID\": 57951962,        \"RelatedProductID\": 82027999,        \"RelatedProductSorting\": 60097275      }    ],    \"UpSellingItemList\": [      {        \"UpSellingIndexID\": 37307100,        \"UpSellingItemID\": -40114798,        \"UpSellingItemSorting\": 36318634      },      {        \"UpSellingIndexID\": 56308994,        \"UpSellingItemID\": 23071822,        \"UpSellingItemSorting\": -86539862      },      {        \"UpSellingIndexID\": 13566320,        \"UpSellingItemID\": 46448962,        \"UpSellingItemSorting\": 64691287      }    ],    \"DiscountList\": [      {        \"DiscountID\": 39183742,        \"DiscountPriceLevel\": -81057729,        \"DiscountLowbound\": 88708537,        \"DiscountUpbound\": 71442268,        \"DiscountPrice\": -68102701.20644853,        \"DiscountPercentage\": true      },      {        \"DiscountID\": 3596885,        \"DiscountPriceLevel\": 59329106,        \"DiscountLowbound\": -19843696,        \"DiscountUpbound\": -24618467,        \"DiscountPrice\": -46716080.31146715,        \"DiscountPercentage\": false      },      {        \"DiscountID\": -1252425,        \"DiscountPriceLevel\": 20417200,        \"DiscountLowbound\": -36272691,        \"DiscountUpbound\": 4526400,        \"DiscountPrice\": -13250497.523399085,        \"DiscountPercentage\": false      },      {        \"DiscountID\": -99036139,        \"DiscountPriceLevel\": 38199781,        \"DiscountLowbound\": -80780328,        \"DiscountUpbound\": 88361664,        \"DiscountPrice\": 81759711.02704805,        \"DiscountPercentage\": true      }    ],    \"DoNotUseCategoryOptions\": false,    \"DateCreated\": \"1981-09-29T10:48:56.323Z\",    \"ListingTemplateID\": -20025977,    \"ListingTemplateName\": \"sunt do\",    \"LoginRequiredOptionID\": 93583030,    \"LoginRequiredOptionName\": \"incididunt esse nostrud aute tempor\",    \"LoginRequiredOptionRedirectTo\": \"Ut incididunt aute reprehenderit\",    \"AllowAccessCustomerGroupID\": 83409844,    \"AllowAccessCustomerGroupName\": \"ad e\",    \"RMAMaxPeriod\": \"ut in dolore\",    \"CanonicalUrl\": \"qui exercitation proident quis\",    \"TaxCode\": \"4J&1\",    \"DisplayText\": \"aute exercitation\",    \"MinimumQuantity\": 32058877.899328217,    \"MaximumQuantity\": -19802612.263509363,    \"AllowOnlyMultiples\": true,    \"AllowFractionalQuantity\": true,    \"QuantityOptions\": \"consequat do\",    \"GroupOptionsForQuantityPricing\": true,    \"ApplyQuantityDiscountToOptions\": false,    \"EnableMakeAnOfferFeature\": false,    \"MinimumAcceptableOffer\": \"veniam \",    \"PriceLevel1\": 33399962.301205695,    \"PriceLevel1Hide\": true,    \"PriceLevel2\": 7201972.0762171745,    \"PriceLevel2Hide\": false,    \"PriceLevel3\": 77807049.55846933,    \"PriceLevel3Hide\": false,    \"PriceLevel4\": -1854646.1847341806,    \"PriceLevel4Hide\": false,    \"PriceLevel5\": 75840968.22909757,    \"PriceLevel5Hide\": true,    \"PriceLevel6\": 64639845.64240083,    \"PriceLevel6Hide\": true,    \"PriceLevel7\": 79181315.25480124,    \"PriceLevel7Hide\": true,    \"PriceLevel8\": 52452235.10862818,    \"PriceLevel8Hide\": true,    \"PriceLevel9\": -76940505.06579728,    \"PriceLevel9Hide\": false,    \"PriceLevel10\": -56420089.399086714,    \"PriceLevel10Hide\": false,    \"BuyButtonLink\": \"eiusmod culpa amet\",    \"ProductLink\": \"voluptate in proident ex\",    \"Title\": \"aliqua\",    \"CustomFileName\": \"est exercitation qui\",    \"RedirectLink\": \"id nulla\",    \"MetaTags\": \"minim sint tempor\",    \"SpecialInstructions\": \"in\",    \"AssignKey\": false,    \"ReUseKeys\": true,    \"SerialList\": [      {        \"SerialID\": 90225710,        \"SerialUses\": -36178625,        \"SerialCode\": \"elit commodo mollit laborum nisi\"      },      {        \"SerialID\": 86584458,        \"SerialUses\": -97955402,        \"SerialCode\": \"ullamco proident anim\"      }    ],    \"EProductList\": [      {        \"FileNumber\": -60891947,        \"FilePath\": \"incididunt aliqua ullam\"      },      {        \"FileNumber\": -47359106,        \"FilePath\": \"elit\"      }    ]  },  {    \"SKUInfo\": {      \"CatalogID\": -98658905,      \"SKU\": \"laboris adipisicing do labore anim\",      \"Name\": \"nostrud\",      \"Cost\": 53417859.54914796,      \"Price\": 59922160.548855126,      \"Currency\": \"dolor magna non\",      \"RetailPrice\": 94980000.97377393,      \"SalePrice\": -10563017.016969085,      \"OnSale\": false,      \"Stock\": -97487235.70759799    },    \"MFGID\": \"dolor veniam eiusmo\",    \"ShortDescription\": \"aute quis ipsum sunt velit\",    \"ManufacturerID\": 21770651,    \"ManufacturerName\": \"non laborum aute\",    \"DistributorList\": [      {        \"DistributorID\": 46626039,        \"DistributorName\": \"in do d\",        \"DistributorItemCost\": 30895244.423885822,        \"DistributorItemID\": \"exercitation sed\",        \"DistributorStockID\": \"nisi aliquip sunt laborum\"      },      {        \"DistributorID\": 24362096,        \"DistributorName\": \"ame\",        \"DistributorItemCost\": -38810198.55567498,        \"DistributorItemID\": \"ipsum ea dolor anim Duis\",        \"DistributorStockID\": \"\"      },      {        \"DistributorID\": -18100188,        \"DistributorName\": \"do Lorem\",        \"DistributorItemCost\": 23206450.310608506,        \"DistributorItemID\": \"qui\",        \"DistributorStockID\": \"ut elit esse aliqua\"      },      {        \"DistributorID\": 340092,        \"DistributorName\": \"eu veniam \",        \"DistributorItemCost\": -19013104.016615137,        \"DistributorItemID\": \"commodo officia Duis\",        \"DistributorStockID\": \"sint consectetur\"      }    ],    \"LastUpdate\": \"1939-04-21T14:45:02.420Z\",    \"UserID\": \"dolore amet adipisicing\",    \"GTIN\": \"in elit\",    \"CategoryList\": [      {        \"CategoryID\": -87697757,        \"CategoryName\": \"magna\"      }    ],    \"ExternalIdsList\": [      {        \"ID\": 61694905,        \"AdvancedOptionSufix\": \"dolore reprehenderit\",        \"ExternalId1\": \"eiusmod pro\",        \"ExternalId2\": \"officia ea in fugiat\",        \"ExternalIdType\": \"labore\"      },      {        \"ID\": -99964792,        \"AdvancedOptionSufix\": \"cillum do ea id ullamco\",        \"ExternalId1\": \"laborum exercitation consequat\",        \"ExternalId2\": \"Ut in ipsum\",        \"ExternalIdType\": \"irure qui\"      }    ],    \"CategoryExternalIdsList\": [      {        \"ID\": -52785366,        \"CategoryID\": -57320157,        \"ExternalId1\": \"laborum\",        \"ExternalIdType\": \"in\"      },      {        \"ID\": -30319590,        \"CategoryID\": 1362631,        \"ExternalId1\": \"aliquip a\",        \"ExternalIdType\": \"in in\"      },      {        \"ID\": 63511377,        \"CategoryID\": -5840475,        \"ExternalId1\": \"deserunt nostrud amet\",        \"ExternalIdType\": \"laborum\"      },      {        \"ID\": -33837317,        \"CategoryID\": -41878663,        \"ExternalId1\": \"in dolore\",        \"ExternalIdType\": \"fugiat\"      }    ],    \"NonTaxable\": false,    \"NotForSale\": true,    \"Hide\": false,    \"GiftCertificate\": false,    \"HomeSpecial\": false,    \"CategorySpecial\": true,    \"NonSearchable\": false,    \"GiftWrapItem\": false,    \"ShipCost\": -10600618.88195625,    \"Weight\": 9078899.138909474,    \"Height\": 90581515.30256867,    \"Width\": -65099120.80518912,    \"Depth\": -37041066.496863805,    \"SelfShip\": false,    \"FreeShipping\": true,    \"RewardPoints\": -70051161,    \"RedeemPoints\": -58808522,    \"DisableRewards\": true,    \"StockAlert\": -69829261,    \"ReorderQuantity\": -96137020,    \"InStockMessage\": \"tempor cillum in cupidatat fugiat\",    \"OutOfStockMessage\": \"enim reprehe\",    \"BackOrderMessage\": \"aliquip ut\",    \"InventoryControl\": 11713086,    \"WarehouseLocation\": \"Duis in ipsum incididunt quis\",    \"WarehouseBin\": \"irure ea eiusmod non\",    \"WarehouseAisle\": \"ad do dolor\",    \"WarehouseCustom\": \"aliqua ut\",    \"Description\": \"non in\",    \"Keywords\": \"eiusmod Duis\",    \"ExtraField1\": \"qui in\",    \"ExtraField2\": \"Lorem eiusmod ipsum veniam\",    \"ExtraField3\": \"dolor anim officia\",    \"ExtraField4\": \"id non\",    \"ExtraField5\": \"sunt est culpa\",    \"ExtraField6\": \"deserunt\",    \"ExtraField7\": \"tempor aliqua occaecat\",    \"ExtraField8\": \"non magna\",    \"ExtraField9\": \"qui Excepteur anim et\",    \"ExtraField10\": \"dolore velit officia nostrud\",    \"ExtraField11\": \"id dolor ad aliquip anim\",    \"ExtraField12\": \"nisi ex tempor Lorem ad\",    \"ExtraField13\": \"quis eu\",    \"FeatureList\": [      {        \"FeatureID\": 87529955,        \"FeatureTitle\": \"anim ad magna nisi\",        \"FeatureDescription\": \"ea officia\"      },      {        \"FeatureID\": 81554410,        \"FeatureTitle\": \"nulla et mollit officia\",        \"FeatureDescription\": \"magna cupidatat\"      },      {        \"FeatureID\": 5586242,        \"FeatureTitle\": \"commodo Dui\",        \"FeatureDescription\": \"ad sint labor\"      },      {        \"FeatureID\": -60816330,        \"FeatureTitle\": \"in sit\",        \"FeatureDescription\": \"deserunt ex officia\"      },      {        \"FeatureID\": 78416131,        \"FeatureTitle\": \"nostrud e\",        \"FeatureDescription\": \"eu esse est\"      }    ],    \"PluginList\": {},    \"SampleEnable\": false,    \"SampleName\": \"aliquip\",    \"SampleSKUPrefix\": \"pariatur ipsum nul\",    \"SamplePrice\": 80699384.93821168,    \"SampleWeight\": 4785012.020898357,    \"ReviewAverage\": 95477025.2272993,    \"ReviewCount\": 95870152,    \"MainImageFile\": \"et Excepteur nisi veniam\",    \"MainImageCaption\": \"ullamco fugiat ut deserunt voluptate\",    \"ThumbnailFile\": \"id nostrud velit anim\",    \"MediaFile\": \"do pariatur\",    \"AdditionalImageFile2\": \"tempor officia et cillum culpa\",    \"AdditionalImageCaption2\": \"in cupidatat laboris\",    \"AdditionalImageFile3\": \"do velit sit\",    \"AdditionalImageCaption3\": \"id velit veniam commodo\",    \"AdditionalImageFile4\": \"Lorem velit irure ipsum\",    \"AdditionalImageCaption4\": \"aliqua esse Ut\",    \"ImageGalleryList\": [      {        \"ImageGalleryID\": 93937587,        \"ImageGalleryFile\": \"in nostrud ea pariatur\",        \"ImageGalleryCaption\": \"non in sed\",        \"ImageGallerySorting\": -51770181      },      {        \"ImageGalleryID\": -22954681,        \"ImageGalleryFile\": \"velit ea sit pariatur laboris\",        \"ImageGalleryCaption\": \"dolor consectetur qui laborum aliquip\",        \"ImageGallerySorting\": 42307409      },      {        \"ImageGalleryID\": -25994028,        \"ImageGalleryFile\": \"fugiat ad occaecat est nulla\",        \"ImageGalleryCaption\": \"esse eu\",        \"ImageGallerySorting\": -51360544      },      {        \"ImageGalleryID\": 32372760,        \"ImageGalleryFile\": \"ullamco et commodo laboris eiusmod\",        \"ImageGalleryCaption\": \"anim pariatur et eiusmod exercitation\",        \"ImageGallerySorting\": -83300590      }    ],    \"OptionSetList\": [      {        \"OptionSetID\": -466228,        \"OptionSetName\": \"aliquip\",        \"OptionSorting\": 37945764.24949825,        \"OptionRequired\": false,        \"OptionType\": \"magna \",        \"OptionURL\": \"deserunt in Ut nulla\",        \"OptionAdditionalInformation\": \"laborum voluptate commodo ea culpa\",        \"OptionSizeLimit\": 4283943,        \"OptionList\": [          {            \"OptionID\": 29303264,            \"OptionName\": \"Excepteur id in enim\",            \"OptionSelected\": true,            \"OptionHide\": true,            \"OptionValue\": 13304673.223948479,            \"OptionPartNumber\": \"ali\",            \"OptionSorting\": -63838303.48048631,            \"OptionImagePath\": \"non enim dolore in\",            \"OptionBundleCatalogId\": 25770767,            \"OptionBundleQuantity\": 12412268          },          {            \"OptionID\": 75563384,            \"OptionName\": \"ex nulla dolor occaecat\",            \"OptionSelected\": false,            \"OptionHide\": true,            \"OptionValue\": 852019.9370655864,            \"OptionPartNumber\": \"dolor sit eiusmod aliqua\",            \"OptionSorting\": -37982405.085194506,            \"OptionImagePath\": \"dolor in deserunt\",            \"OptionBundleCatalogId\": 24869787,            \"OptionBundleQuantity\": -98542646          },          {            \"OptionID\": -22272186,            \"OptionName\": \"id do reprehenderit dolor amet\",            \"OptionSelected\": true,            \"OptionHide\": false,            \"OptionValue\": 79663952.06483364,            \"OptionPartNumber\": \"aliqua fugiat e\",            \"OptionSorting\": -40107189.78465731,            \"OptionImagePath\": \"quis\",            \"OptionBundleCatalogId\": -42224169,            \"OptionBundleQuantity\": 703629          }        ]      },      {        \"OptionSetID\": 93573354,        \"OptionSetName\": \"ad cillum commodo\",        \"OptionSorting\": -93473490.53289488,        \"OptionRequired\": true,        \"OptionType\": \"id et\",        \"OptionURL\": \"\",        \"OptionAdditionalInformation\": \"consectetur dolore aute sunt enim\",        \"OptionSizeLimit\": 3586086,        \"OptionList\": [          {            \"OptionID\": -10786285,            \"OptionName\": \"proident ut\",            \"OptionSelected\": false,            \"OptionHide\": false,            \"OptionValue\": 80565059.66213942,            \"OptionPartNumber\": \"amet Excepteur velit in\",            \"OptionSorting\": 51428883.92332715,            \"OptionImagePath\": \"in sunt\",            \"OptionBundleCatalogId\": 29334422,            \"OptionBundleQuantity\": -51797951          },          {            \"OptionID\": 55609478,            \"OptionName\": \"et dolore officia reprehenderit\",            \"OptionSelected\": true,            \"OptionHide\": true,            \"OptionValue\": -63095179.26375223,            \"OptionPartNumber\": \"adip\",            \"OptionSorting\": -89150980.70153004,            \"OptionImagePath\": \"occaecat Lorem nostrud\",            \"OptionBundleCatalogId\": -22960812,            \"OptionBundleQuantity\": -50540835          },          {            \"OptionID\": 65321063,            \"OptionName\": \"laboris ut elit enim\",            \"OptionSelected\": true,            \"OptionHide\": false,            \"OptionValue\": -25481317.488593146,            \"OptionPartNumber\": \"non\",            \"OptionSorting\": -95498798.2094933,            \"OptionImagePath\": \"aliquip in\",            \"OptionBundleCatalogId\": 33703905,            \"OptionBundleQuantity\": 98422047          },          {            \"OptionID\": -70012900,            \"OptionName\": \"et elit aliquip ut\",            \"OptionSelected\": true,            \"OptionHide\": false,            \"OptionValue\": 17078962.84011601,            \"OptionPartNumber\": \"c\",            \"OptionSorting\": 33122421.1957673,            \"OptionImagePath\": \"in ea sunt fugiat\",            \"OptionBundleCatalogId\": -67317924,            \"OptionBundleQuantity\": 79159913          }        ]      }    ],    \"AdvancedOptionList\": [      {        \"AdvancedOptionCode\": \"sunt dolor voluptat\",        \"AdvancedOptionSufix\": \"laboris v\",        \"AdvancedOptionName\": \"ea esse laborum labore ut\",        \"AdvancedOptionCost\": 55848112.98952207,        \"AdvancedOptionStock\": 76156695,        \"AdvancedOptionWeight\": 9164328.298772201,        \"AdvancedOptionPrice\": 9651999.837504506,        \"AdvancedOptionGTIN\": \"ad adipisicing dolor veniam deserunt\"      },      {        \"AdvancedOptionCode\": \"consequ\",        \"AdvancedOptionSufix\": \"in\",        \"AdvancedOptionName\": \"officia Lorem\",        \"AdvancedOptionCost\": 90640319.11127093,        \"AdvancedOptionStock\": 54338452,        \"AdvancedOptionWeight\": -15511710.312378526,        \"AdvancedOptionPrice\": 64611024.67730898,        \"AdvancedOptionGTIN\": \"nos\"      }    ],    \"RelatedProductList\": [      {        \"RelatedIndexID\": 89414775,        \"RelatedProductID\": 85888512,        \"RelatedProductSorting\": 15102358      },      {        \"RelatedIndexID\": 75748404,        \"RelatedProductID\": -31477001,        \"RelatedProductSorting\": 72772785      }    ],    \"UpSellingItemList\": [      {        \"UpSellingIndexID\": 47506021,        \"UpSellingItemID\": -52234227,        \"UpSellingItemSorting\": 92257498      },      {        \"UpSellingIndexID\": 93107884,        \"UpSellingItemID\": -57007053,        \"UpSellingItemSorting\": -78009068      },      {        \"UpSellingIndexID\": -31045693,        \"UpSellingItemID\": 12785595,        \"UpSellingItemSorting\": -6069558      },      {        \"UpSellingIndexID\": 55302721,        \"UpSellingItemID\": 36582168,        \"UpSellingItemSorting\": -64383910      },      {        \"UpSellingIndexID\": 94922078,        \"UpSellingItemID\": -37166988,        \"UpSellingItemSorting\": -16684608      }    ],    \"DiscountList\": [      {        \"DiscountID\": 53775141,        \"DiscountPriceLevel\": -6484243,        \"DiscountLowbound\": 43653873,        \"DiscountUpbound\": -65085012,        \"DiscountPrice\": 24062429.59205392,        \"DiscountPercentage\": false      },      {        \"DiscountID\": -15169325,        \"DiscountPriceLevel\": -74223319,        \"DiscountLowbound\": 23171948,        \"DiscountUpbound\": -34063601,        \"DiscountPrice\": 39205151.21132815,        \"DiscountPercentage\": true      },      {        \"DiscountID\": -37826793,        \"DiscountPriceLevel\": 78170938,        \"DiscountLowbound\": 71711506,        \"DiscountUpbound\": -82649015,        \"DiscountPrice\": 12960969.719267726,        \"DiscountPercentage\": false      },      {        \"DiscountID\": -73536759,        \"DiscountPriceLevel\": 72907212,        \"DiscountLowbound\": 40221238,        \"DiscountUpbound\": 42828439,        \"DiscountPrice\": -52482288.167259924,        \"DiscountPercentage\": false      },      {        \"DiscountID\": -20626471,        \"DiscountPriceLevel\": 75290069,        \"DiscountLowbound\": -33070102,        \"DiscountUpbound\": -7140768,        \"DiscountPrice\": -89612018.10301942,        \"DiscountPercentage\": false      }    ],    \"DoNotUseCategoryOptions\": false,    \"DateCreated\": \"1940-11-09T08:06:28.312Z\",    \"ListingTemplateID\": 99219440,    \"ListingTemplateName\": \"exercitation dolore in deserunt\",    \"LoginRequiredOptionID\": -59374108,    \"LoginRequiredOptionName\": \"velit culpa occaecat\",    \"LoginRequiredOptionRedirectTo\": \"nisi in\",    \"AllowAccessCustomerGroupID\": 56625779,    \"AllowAccessCustomerGroupName\": \"cillum nulla qui\",    \"RMAMaxPeriod\": \"occaecat voluptate incididun\",    \"CanonicalUrl\": \"nostrud proident aliqua\",    \"TaxCode\": \".R#\",    \"DisplayText\": \"Duis eu consectetur proide\",    \"MinimumQuantity\": -86395086.43804161,    \"MaximumQuantity\": -83848114.48124045,    \"AllowOnlyMultiples\": false,    \"AllowFractionalQuantity\": true,    \"QuantityOptions\": \"quis nostrud mollit nulla cillum\",    \"GroupOptionsForQuantityPricing\": false,    \"ApplyQuantityDiscountToOptions\": false,    \"EnableMakeAnOfferFeature\": true,    \"MinimumAcceptableOffer\": \"occ\",    \"PriceLevel1\": -76113886.60931867,    \"PriceLevel1Hide\": false,    \"PriceLevel2\": -2685019.806964606,    \"PriceLevel2Hide\": true,    \"PriceLevel3\": 27555636.37172766,    \"PriceLevel3Hide\": false,    \"PriceLevel4\": -32466343.359107345,    \"PriceLevel4Hide\": false,    \"PriceLevel5\": -35533768.53624486,    \"PriceLevel5Hide\": true,    \"PriceLevel6\": -49754764.17288869,    \"PriceLevel6Hide\": true,    \"PriceLevel7\": -99144164.53978108,    \"PriceLevel7Hide\": true,    \"PriceLevel8\": 55966055.8681418,    \"PriceLevel8Hide\": false,    \"PriceLevel9\": -88768331.34491347,    \"PriceLevel9Hide\": true,    \"PriceLevel10\": 84988986.90436819,    \"PriceLevel10Hide\": true,    \"BuyButtonLink\": \"ea est\",    \"ProductLink\": \"dolor ad exercitation\",    \"Title\": \"laboris dolor reprehenderit cillum ipsum\",    \"CustomFileName\": \"amet\",    \"RedirectLink\": \"laborum pariatur ullamco deserunt\",    \"MetaTags\": \"incididunt eu tempor\",    \"SpecialInstructions\": \"ea Ut nulla\",    \"AssignKey\": true,    \"ReUseKeys\": true,    \"SerialList\": [      {        \"SerialID\": 22829981,        \"SerialUses\": -51941719,        \"SerialCode\": \"ullamco labore cupidatat\"      }    ],    \"EProductList\": [      {        \"FileNumber\": 9395245,        \"FilePath\": \"labore\"      },      {        \"FileNumber\": 90816224,        \"FilePath\": \"voluptate Excepteur veniam in tempor\"      }    ]  }]", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Products", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products');

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
    'SKUInfo': {
      'CatalogID': 47304819,
      'SKU': 'sit',
      'Name': 'in irure sed anim ut',
      'Cost': -97938774.16442451,
      'Price': -19308940.197771385,
      'Currency': 'sunt fugiat ex i',
      'RetailPrice': 77722221.0081538,
      'SalePrice': -91789207.28786238,
      'OnSale': false,
      'Stock': -45038952.78911698
    },
    'MFGID': 'com',
    'ShortDescription': 'in',
    'ManufacturerID': 61799392,
    'ManufacturerName': 'do ea consectetur Exce',
    'DistributorList': [
      {
        'DistributorID': 20469110,
        'DistributorName': 'velit sed e',
        'DistributorItemCost': 61921348.935050964,
        'DistributorItemID': 'minim sint',
        'DistributorStockID': 'dolor magna aliquip'
      },
      {
        'DistributorID': -21653005,
        'DistributorName': 'culpa Lorem in officia',
        'DistributorItemCost': -1545864.7590813637,
        'DistributorItemID': 'proident',
        'DistributorStockID': 'sunt laboris'
      },
      {
        'DistributorID': 33690478,
        'DistributorName': 'velit enim',
        'DistributorItemCost': -96117790.00715286,
        'DistributorItemID': 'veniam incididunt',
        'DistributorStockID': 'Excepteur dolor'
      }
    ],
    'LastUpdate': '1986-07-09T01:36:17.605Z',
    'UserID': 'et est Excepteur Duis',
    'GTIN': 'elit non',
    'CategoryList': [
      {
        'CategoryID': -65000395,
        'CategoryName': 'laborum'
      },
      {
        'CategoryID': 43936084,
        'CategoryName': 'id amet anim consectetur'
      },
      {
        'CategoryID': 79598330,
        'CategoryName': 'pariatur dolor'
      },
      {
        'CategoryID': 54105968,
        'CategoryName': 'in dolor mollit'
      }
    ],
    'ExternalIdsList': [
      {
        'ID': -46777171,
        'AdvancedOptionSufix': 'fugiat aliqua',
        'ExternalId1': 'dolor elit',
        'ExternalId2': 'nulla pariatur laboris',
        'ExternalIdType': 'eu ut ullamco '
      },
      {
        'ID': 98426633,
        'AdvancedOptionSufix': 'cillum exercitation',
        'ExternalId1': 'enim officia',
        'ExternalId2': 'm',
        'ExternalIdType': 'qui tempor cupidat'
      },
      {
        'ID': -36788101,
        'AdvancedOptionSufix': 'ipsum eu exercitation laboris i',
        'ExternalId1': 'sed',
        'ExternalId2': 'sed in ',
        'ExternalIdType': 'in qui'
      },
      {
        'ID': -82163709,
        'AdvancedOptionSufix': 'ut',
        'ExternalId1': 'cillum sit',
        'ExternalId2': 'mollit velit',
        'ExternalIdType': 'est dolor id'
      }
    ],
    'CategoryExternalIdsList': [
      {
        'ID': -85258393,
        'CategoryID': -96929120,
        'ExternalId1': 'incididunt occaecat quis deseru',
        'ExternalIdType': 'aliquip irure est cupidatat'
      },
      {
        'ID': 53549560,
        'CategoryID': 37858692,
        'ExternalId1': 'proident aliquip',
        'ExternalIdType': 'adipisicing non'
      }
    ],
    'NonTaxable': false,
    'NotForSale': true,
    'Hide': false,
    'GiftCertificate': true,
    'HomeSpecial': true,
    'CategorySpecial': false,
    'NonSearchable': true,
    'GiftWrapItem': false,
    'ShipCost': 35944853.68285248,
    'Weight': -97533207.15121979,
    'Height': -11564221.075311482,
    'Width': -8044259.455038056,
    'Depth': 70870765.80208012,
    'SelfShip': false,
    'FreeShipping': true,
    'RewardPoints': 83597752,
    'RedeemPoints': -56180334,
    'DisableRewards': false,
    'StockAlert': 72736229,
    'ReorderQuantity': 74401951,
    'InStockMessage': 'velit in',
    'OutOfStockMessage': 'nulla dolore sunt',
    'BackOrderMessage': 'sint nulla',
    'InventoryControl': 35497330,
    'WarehouseLocation': 'reprehenderit ad voluptate',
    'WarehouseBin': 'eu',
    'WarehouseAisle': 'minim esse est mollit',
    'WarehouseCustom': 'Excepteur culpa fugiat sit',
    'Description': 'ad irure',
    'Keywords': 'eiusmod esse',
    'ExtraField1': 'voluptate sit',
    'ExtraField2': 'qui cupidatat Ut id',
    'ExtraField3': 'velit amet occaecat',
    'ExtraField4': 'Ut',
    'ExtraField5': 'sunt exercitation',
    'ExtraField6': 'in',
    'ExtraField7': 'pariatur Excepteur sint eu',
    'ExtraField8': 'nisi nulla Ut',
    'ExtraField9': 'ipsum Excepteur',
    'ExtraField10': 'laboris incididunt eu sit in',
    'ExtraField11': 'eiusmod',
    'ExtraField12': 'laboris Duis',
    'ExtraField13': 'ea ',
    'FeatureList': [
      {
        'FeatureID': 82968211,
        'FeatureTitle': 'ipsum est tempor nisi',
        'FeatureDescription': 'amet pariatur dolor'
      },
      {
        'FeatureID': 68248391,
        'FeatureTitle': 'et pariatur fugiat cillum',
        'FeatureDescription': 'ea'
      }
    ],
    'PluginList': {},
    'SampleEnable': true,
    'SampleName': 'ex non tempor',
    'SampleSKUPrefix': 'repr',
    'SamplePrice': -27179100.023684114,
    'SampleWeight': -29559413.62695022,
    'ReviewAverage': 33004892.57644981,
    'ReviewCount': 76223069,
    'MainImageFile': 'enim sed occaecat',
    'MainImageCaption': 'irure eu ut',
    'ThumbnailFile': 'ullamco officia',
    'MediaFile': 'sint nostrud qui ut',
    'AdditionalImageFile2': 'fugiat nisi commodo enim',
    'AdditionalImageCaption2': 'pariatur labore ex',
    'AdditionalImageFile3': 'elit velit tempor consectetur',
    'AdditionalImageCaption3': 'elit veniam',
    'AdditionalImageFile4': 'enim consectetur aliquip officia',
    'AdditionalImageCaption4': 'sint ullamco fugiat',
    'ImageGalleryList': [
      {
        'ImageGalleryID': 73225027,
        'ImageGalleryFile': 'nisi laborum non',
        'ImageGalleryCaption': 'consectetur velit eiusmod anim dolor',
        'ImageGallerySorting': -45493104
      },
      {
        'ImageGalleryID': 39367279,
        'ImageGalleryFile': 'irure dolore',
        'ImageGalleryCaption': 'aliqua',
        'ImageGallerySorting': -82773561
      },
      {
        'ImageGalleryID': -54690210,
        'ImageGalleryFile': 'anim',
        'ImageGalleryCaption': 'eiusmod aliquip',
        'ImageGallerySorting': -252749
      },
      {
        'ImageGalleryID': 85899281,
        'ImageGalleryFile': 'qui',
        'ImageGalleryCaption': 'sint esse sunt',
        'ImageGallerySorting': -54507490
      },
      {
        'ImageGalleryID': -11430832,
        'ImageGalleryFile': 'mollit',
        'ImageGalleryCaption': 'commodo',
        'ImageGallerySorting': -46967746
      }
    ],
    'OptionSetList': [
      {
        'OptionSetID': -9624336,
        'OptionSetName': 'consequat proident eu incididunt',
        'OptionSorting': -9808248.400129706,
        'OptionRequired': false,
        'OptionType': 'Exc',
        'OptionURL': 'ea dolor occaecat',
        'OptionAdditionalInformation': 'deserunt ut voluptate et mollit',
        'OptionSizeLimit': -18996324,
        'OptionList': [
          {
            'OptionID': 87282590,
            'OptionName': 'mollit aliquip',
            'OptionSelected': true,
            'OptionHide': true,
            'OptionValue': -12060218.372790128,
            'OptionPartNumber': 'aliqua ips',
            'OptionSorting': -32514387.407670587,
            'OptionImagePath': 'nostrud occaecat irure',
            'OptionBundleCatalogId': 16327524,
            'OptionBundleQuantity': 28975242
          },
          {
            'OptionID': 475400,
            'OptionName': 'ut',
            'OptionSelected': false,
            'OptionHide': true,
            'OptionValue': 83910541.85383081,
            'OptionPartNumber': 'esse laboru',
            'OptionSorting': 88206012.13601771,
            'OptionImagePath': 'officia',
            'OptionBundleCatalogId': -6805126,
            'OptionBundleQuantity': -43361767
          },
          {
            'OptionID': -73158279,
            'OptionName': 'pariatur sed cillum',
            'OptionSelected': false,
            'OptionHide': true,
            'OptionValue': -89539917.62366292,
            'OptionPartNumber': 'ut aliqua ',
            'OptionSorting': -47434682.94448014,
            'OptionImagePath': 'laboris eiusmod',
            'OptionBundleCatalogId': 90406534,
            'OptionBundleQuantity': 13728910
          },
          {
            'OptionID': -39519118,
            'OptionName': 'ut sint et minim',
            'OptionSelected': false,
            'OptionHide': false,
            'OptionValue': -17640884.76984167,
            'OptionPartNumber': 'in deserunt',
            'OptionSorting': 79008974.74911499,
            'OptionImagePath': 'Duis',
            'OptionBundleCatalogId': -74248708,
            'OptionBundleQuantity': 97842795
          }
        ]
      },
      {
        'OptionSetID': -37136621,
        'OptionSetName': 'veniam fugiat reprehenderit',
        'OptionSorting': 80738285.39448038,
        'OptionRequired': false,
        'OptionType': 'aute eu i',
        'OptionURL': 'adipisicing i',
        'OptionAdditionalInformation': 'ex nostrud Excepteur consectetur',
        'OptionSizeLimit': -99358398,
        'OptionList': [
          {
            'OptionID': 34643498,
            'OptionName': 'dolor nulla',
            'OptionSelected': true,
            'OptionHide': false,
            'OptionValue': 97871116.83652219,
            'OptionPartNumber': 'ullamco laboris elit cupidatat',
            'OptionSorting': 31393458.93006493,
            'OptionImagePath': 'Excepteur labore',
            'OptionBundleCatalogId': 24089819,
            'OptionBundleQuantity': -80810366
          },
          {
            'OptionID': 37369915,
            'OptionName': 'qui non',
            'OptionSelected': false,
            'OptionHide': false,
            'OptionValue': 49353300.31605053,
            'OptionPartNumber': 'adipisicing quis',
            'OptionSorting': 15253242.1074235,
            'OptionImagePath': 'anim',
            'OptionBundleCatalogId': -31012804,
            'OptionBundleQuantity': -86144201
          },
          {
            'OptionID': -64201947,
            'OptionName': 'sint esse Ut',
            'OptionSelected': false,
            'OptionHide': false,
            'OptionValue': -32075611.034620404,
            'OptionPartNumber': 'reprehenderit ipsum nostrud',
            'OptionSorting': -2708774.7805151045,
            'OptionImagePath': 'id aute',
            'OptionBundleCatalogId': 89473872,
            'OptionBundleQuantity': -19240771
          }
        ]
      }
    ],
    'AdvancedOptionList': [
      {
        'AdvancedOptionCode': 'voluptate la',
        'AdvancedOptionSufix': 'quis nisi',
        'AdvancedOptionName': 'consectetur do',
        'AdvancedOptionCost': 36654762.40428376,
        'AdvancedOptionStock': 52733638,
        'AdvancedOptionWeight': -92384859.73339032,
        'AdvancedOptionPrice': 85948294.02011198,
        'AdvancedOptionGTIN': 'dolore et'
      },
      {
        'AdvancedOptionCode': 'sint consectetur',
        'AdvancedOptionSufix': 'commodo non',
        'AdvancedOptionName': 'est eu',
        'AdvancedOptionCost': 7453902.233112946,
        'AdvancedOptionStock': 88061865,
        'AdvancedOptionWeight': 15100909.592037976,
        'AdvancedOptionPrice': -27256367.278723776,
        'AdvancedOptionGTIN': 'labo'
      },
      {
        'AdvancedOptionCode': 'aliqu',
        'AdvancedOptionSufix': 'voluptate amet',
        'AdvancedOptionName': 'commodo sunt consequat labore cupidatat',
        'AdvancedOptionCost': 93864947.77447405,
        'AdvancedOptionStock': -87583096,
        'AdvancedOptionWeight': 21015250.938407615,
        'AdvancedOptionPrice': 17804155.96021396,
        'AdvancedOptionGTIN': 'in sit eli'
      },
      {
        'AdvancedOptionCode': 'consequat',
        'AdvancedOptionSufix': 'dolor velit fug',
        'AdvancedOptionName': 'consequat voluptate in sint Duis',
        'AdvancedOptionCost': -96896867.88687326,
        'AdvancedOptionStock': 70730686,
        'AdvancedOptionWeight': 99350180.27173644,
        'AdvancedOptionPrice': -12327205.738661647,
        'AdvancedOptionGTIN': 'eu'
      }
    ],
    'RelatedProductList': [
      {
        'RelatedIndexID': 7914273,
        'RelatedProductID': -10905146,
        'RelatedProductSorting': -99089034
      },
      {
        'RelatedIndexID': 98383610,
        'RelatedProductID': 8022252,
        'RelatedProductSorting': 85397571
      },
      {
        'RelatedIndexID': -39864225,
        'RelatedProductID': 76405654,
        'RelatedProductSorting': -38517086
      },
      {
        'RelatedIndexID': 57951962,
        'RelatedProductID': 82027999,
        'RelatedProductSorting': 60097275
      }
    ],
    'UpSellingItemList': [
      {
        'UpSellingIndexID': 37307100,
        'UpSellingItemID': -40114798,
        'UpSellingItemSorting': 36318634
      },
      {
        'UpSellingIndexID': 56308994,
        'UpSellingItemID': 23071822,
        'UpSellingItemSorting': -86539862
      },
      {
        'UpSellingIndexID': 13566320,
        'UpSellingItemID': 46448962,
        'UpSellingItemSorting': 64691287
      }
    ],
    'DiscountList': [
      {
        'DiscountID': 39183742,
        'DiscountPriceLevel': -81057729,
        'DiscountLowbound': 88708537,
        'DiscountUpbound': 71442268,
        'DiscountPrice': -68102701.20644853,
        'DiscountPercentage': true
      },
      {
        'DiscountID': 3596885,
        'DiscountPriceLevel': 59329106,
        'DiscountLowbound': -19843696,
        'DiscountUpbound': -24618467,
        'DiscountPrice': -46716080.31146715,
        'DiscountPercentage': false
      },
      {
        'DiscountID': -1252425,
        'DiscountPriceLevel': 20417200,
        'DiscountLowbound': -36272691,
        'DiscountUpbound': 4526400,
        'DiscountPrice': -13250497.523399085,
        'DiscountPercentage': false
      },
      {
        'DiscountID': -99036139,
        'DiscountPriceLevel': 38199781,
        'DiscountLowbound': -80780328,
        'DiscountUpbound': 88361664,
        'DiscountPrice': 81759711.02704805,
        'DiscountPercentage': true
      }
    ],
    'DoNotUseCategoryOptions': false,
    'DateCreated': '1981-09-29T10:48:56.323Z',
    'ListingTemplateID': -20025977,
    'ListingTemplateName': 'sunt do',
    'LoginRequiredOptionID': 93583030,
    'LoginRequiredOptionName': 'incididunt esse nostrud aute tempor',
    'LoginRequiredOptionRedirectTo': 'Ut incididunt aute reprehenderit',
    'AllowAccessCustomerGroupID': 83409844,
    'AllowAccessCustomerGroupName': 'ad e',
    'RMAMaxPeriod': 'ut in dolore',
    'CanonicalUrl': 'qui exercitation proident quis',
    'TaxCode': '4J&1',
    'DisplayText': 'aute exercitation',
    'MinimumQuantity': 32058877.899328217,
    'MaximumQuantity': -19802612.263509363,
    'AllowOnlyMultiples': true,
    'AllowFractionalQuantity': true,
    'QuantityOptions': 'consequat do',
    'GroupOptionsForQuantityPricing': true,
    'ApplyQuantityDiscountToOptions': false,
    'EnableMakeAnOfferFeature': false,
    'MinimumAcceptableOffer': 'veniam ',
    'PriceLevel1': 33399962.301205695,
    'PriceLevel1Hide': true,
    'PriceLevel2': 7201972.0762171745,
    'PriceLevel2Hide': false,
    'PriceLevel3': 77807049.55846933,
    'PriceLevel3Hide': false,
    'PriceLevel4': -1854646.1847341806,
    'PriceLevel4Hide': false,
    'PriceLevel5': 75840968.22909757,
    'PriceLevel5Hide': true,
    'PriceLevel6': 64639845.64240083,
    'PriceLevel6Hide': true,
    'PriceLevel7': 79181315.25480124,
    'PriceLevel7Hide': true,
    'PriceLevel8': 52452235.10862818,
    'PriceLevel8Hide': true,
    'PriceLevel9': -76940505.06579728,
    'PriceLevel9Hide': false,
    'PriceLevel10': -56420089.399086714,
    'PriceLevel10Hide': false,
    'BuyButtonLink': 'eiusmod culpa amet',
    'ProductLink': 'voluptate in proident ex',
    'Title': 'aliqua',
    'CustomFileName': 'est exercitation qui',
    'RedirectLink': 'id nulla',
    'MetaTags': 'minim sint tempor',
    'SpecialInstructions': 'in',
    'AssignKey': false,
    'ReUseKeys': true,
    'SerialList': [
      {
        'SerialID': 90225710,
        'SerialUses': -36178625,
        'SerialCode': 'elit commodo mollit laborum nisi'
      },
      {
        'SerialID': 86584458,
        'SerialUses': -97955402,
        'SerialCode': 'ullamco proident anim'
      }
    ],
    'EProductList': [
      {
        'FileNumber': -60891947,
        'FilePath': 'incididunt aliqua ullam'
      },
      {
        'FileNumber': -47359106,
        'FilePath': 'elit'
      }
    ]
  },
  {
    'SKUInfo': {
      'CatalogID': -98658905,
      'SKU': 'laboris adipisicing do labore anim',
      'Name': 'nostrud',
      'Cost': 53417859.54914796,
      'Price': 59922160.548855126,
      'Currency': 'dolor magna non',
      'RetailPrice': 94980000.97377393,
      'SalePrice': -10563017.016969085,
      'OnSale': false,
      'Stock': -97487235.70759799
    },
    'MFGID': 'dolor veniam eiusmo',
    'ShortDescription': 'aute quis ipsum sunt velit',
    'ManufacturerID': 21770651,
    'ManufacturerName': 'non laborum aute',
    'DistributorList': [
      {
        'DistributorID': 46626039,
        'DistributorName': 'in do d',
        'DistributorItemCost': 30895244.423885822,
        'DistributorItemID': 'exercitation sed',
        'DistributorStockID': 'nisi aliquip sunt laborum'
      },
      {
        'DistributorID': 24362096,
        'DistributorName': 'ame',
        'DistributorItemCost': -38810198.55567498,
        'DistributorItemID': 'ipsum ea dolor anim Duis',
        'DistributorStockID': ''
      },
      {
        'DistributorID': -18100188,
        'DistributorName': 'do Lorem',
        'DistributorItemCost': 23206450.310608506,
        'DistributorItemID': 'qui',
        'DistributorStockID': 'ut elit esse aliqua'
      },
      {
        'DistributorID': 340092,
        'DistributorName': 'eu veniam ',
        'DistributorItemCost': -19013104.016615137,
        'DistributorItemID': 'commodo officia Duis',
        'DistributorStockID': 'sint consectetur'
      }
    ],
    'LastUpdate': '1939-04-21T14:45:02.420Z',
    'UserID': 'dolore amet adipisicing',
    'GTIN': 'in elit',
    'CategoryList': [
      {
        'CategoryID': -87697757,
        'CategoryName': 'magna'
      }
    ],
    'ExternalIdsList': [
      {
        'ID': 61694905,
        'AdvancedOptionSufix': 'dolore reprehenderit',
        'ExternalId1': 'eiusmod pro',
        'ExternalId2': 'officia ea in fugiat',
        'ExternalIdType': 'labore'
      },
      {
        'ID': -99964792,
        'AdvancedOptionSufix': 'cillum do ea id ullamco',
        'ExternalId1': 'laborum exercitation consequat',
        'ExternalId2': 'Ut in ipsum',
        'ExternalIdType': 'irure qui'
      }
    ],
    'CategoryExternalIdsList': [
      {
        'ID': -52785366,
        'CategoryID': -57320157,
        'ExternalId1': 'laborum',
        'ExternalIdType': 'in'
      },
      {
        'ID': -30319590,
        'CategoryID': 1362631,
        'ExternalId1': 'aliquip a',
        'ExternalIdType': 'in in'
      },
      {
        'ID': 63511377,
        'CategoryID': -5840475,
        'ExternalId1': 'deserunt nostrud amet',
        'ExternalIdType': 'laborum'
      },
      {
        'ID': -33837317,
        'CategoryID': -41878663,
        'ExternalId1': 'in dolore',
        'ExternalIdType': 'fugiat'
      }
    ],
    'NonTaxable': false,
    'NotForSale': true,
    'Hide': false,
    'GiftCertificate': false,
    'HomeSpecial': false,
    'CategorySpecial': true,
    'NonSearchable': false,
    'GiftWrapItem': false,
    'ShipCost': -10600618.88195625,
    'Weight': 9078899.138909474,
    'Height': 90581515.30256867,
    'Width': -65099120.80518912,
    'Depth': -37041066.496863805,
    'SelfShip': false,
    'FreeShipping': true,
    'RewardPoints': -70051161,
    'RedeemPoints': -58808522,
    'DisableRewards': true,
    'StockAlert': -69829261,
    'ReorderQuantity': -96137020,
    'InStockMessage': 'tempor cillum in cupidatat fugiat',
    'OutOfStockMessage': 'enim reprehe',
    'BackOrderMessage': 'aliquip ut',
    'InventoryControl': 11713086,
    'WarehouseLocation': 'Duis in ipsum incididunt quis',
    'WarehouseBin': 'irure ea eiusmod non',
    'WarehouseAisle': 'ad do dolor',
    'WarehouseCustom': 'aliqua ut',
    'Description': 'non in',
    'Keywords': 'eiusmod Duis',
    'ExtraField1': 'qui in',
    'ExtraField2': 'Lorem eiusmod ipsum veniam',
    'ExtraField3': 'dolor anim officia',
    'ExtraField4': 'id non',
    'ExtraField5': 'sunt est culpa',
    'ExtraField6': 'deserunt',
    'ExtraField7': 'tempor aliqua occaecat',
    'ExtraField8': 'non magna',
    'ExtraField9': 'qui Excepteur anim et',
    'ExtraField10': 'dolore velit officia nostrud',
    'ExtraField11': 'id dolor ad aliquip anim',
    'ExtraField12': 'nisi ex tempor Lorem ad',
    'ExtraField13': 'quis eu',
    'FeatureList': [
      {
        'FeatureID': 87529955,
        'FeatureTitle': 'anim ad magna nisi',
        'FeatureDescription': 'ea officia'
      },
      {
        'FeatureID': 81554410,
        'FeatureTitle': 'nulla et mollit officia',
        'FeatureDescription': 'magna cupidatat'
      },
      {
        'FeatureID': 5586242,
        'FeatureTitle': 'commodo Dui',
        'FeatureDescription': 'ad sint labor'
      },
      {
        'FeatureID': -60816330,
        'FeatureTitle': 'in sit',
        'FeatureDescription': 'deserunt ex officia'
      },
      {
        'FeatureID': 78416131,
        'FeatureTitle': 'nostrud e',
        'FeatureDescription': 'eu esse est'
      }
    ],
    'PluginList': {},
    'SampleEnable': false,
    'SampleName': 'aliquip',
    'SampleSKUPrefix': 'pariatur ipsum nul',
    'SamplePrice': 80699384.93821168,
    'SampleWeight': 4785012.020898357,
    'ReviewAverage': 95477025.2272993,
    'ReviewCount': 95870152,
    'MainImageFile': 'et Excepteur nisi veniam',
    'MainImageCaption': 'ullamco fugiat ut deserunt voluptate',
    'ThumbnailFile': 'id nostrud velit anim',
    'MediaFile': 'do pariatur',
    'AdditionalImageFile2': 'tempor officia et cillum culpa',
    'AdditionalImageCaption2': 'in cupidatat laboris',
    'AdditionalImageFile3': 'do velit sit',
    'AdditionalImageCaption3': 'id velit veniam commodo',
    'AdditionalImageFile4': 'Lorem velit irure ipsum',
    'AdditionalImageCaption4': 'aliqua esse Ut',
    'ImageGalleryList': [
      {
        'ImageGalleryID': 93937587,
        'ImageGalleryFile': 'in nostrud ea pariatur',
        'ImageGalleryCaption': 'non in sed',
        'ImageGallerySorting': -51770181
      },
      {
        'ImageGalleryID': -22954681,
        'ImageGalleryFile': 'velit ea sit pariatur laboris',
        'ImageGalleryCaption': 'dolor consectetur qui laborum aliquip',
        'ImageGallerySorting': 42307409
      },
      {
        'ImageGalleryID': -25994028,
        'ImageGalleryFile': 'fugiat ad occaecat est nulla',
        'ImageGalleryCaption': 'esse eu',
        'ImageGallerySorting': -51360544
      },
      {
        'ImageGalleryID': 32372760,
        'ImageGalleryFile': 'ullamco et commodo laboris eiusmod',
        'ImageGalleryCaption': 'anim pariatur et eiusmod exercitation',
        'ImageGallerySorting': -83300590
      }
    ],
    'OptionSetList': [
      {
        'OptionSetID': -466228,
        'OptionSetName': 'aliquip',
        'OptionSorting': 37945764.24949825,
        'OptionRequired': false,
        'OptionType': 'magna ',
        'OptionURL': 'deserunt in Ut nulla',
        'OptionAdditionalInformation': 'laborum voluptate commodo ea culpa',
        'OptionSizeLimit': 4283943,
        'OptionList': [
          {
            'OptionID': 29303264,
            'OptionName': 'Excepteur id in enim',
            'OptionSelected': true,
            'OptionHide': true,
            'OptionValue': 13304673.223948479,
            'OptionPartNumber': 'ali',
            'OptionSorting': -63838303.48048631,
            'OptionImagePath': 'non enim dolore in',
            'OptionBundleCatalogId': 25770767,
            'OptionBundleQuantity': 12412268
          },
          {
            'OptionID': 75563384,
            'OptionName': 'ex nulla dolor occaecat',
            'OptionSelected': false,
            'OptionHide': true,
            'OptionValue': 852019.9370655864,
            'OptionPartNumber': 'dolor sit eiusmod aliqua',
            'OptionSorting': -37982405.085194506,
            'OptionImagePath': 'dolor in deserunt',
            'OptionBundleCatalogId': 24869787,
            'OptionBundleQuantity': -98542646
          },
          {
            'OptionID': -22272186,
            'OptionName': 'id do reprehenderit dolor amet',
            'OptionSelected': true,
            'OptionHide': false,
            'OptionValue': 79663952.06483364,
            'OptionPartNumber': 'aliqua fugiat e',
            'OptionSorting': -40107189.78465731,
            'OptionImagePath': 'quis',
            'OptionBundleCatalogId': -42224169,
            'OptionBundleQuantity': 703629
          }
        ]
      },
      {
        'OptionSetID': 93573354,
        'OptionSetName': 'ad cillum commodo',
        'OptionSorting': -93473490.53289488,
        'OptionRequired': true,
        'OptionType': 'id et',
        'OptionURL': '',
        'OptionAdditionalInformation': 'consectetur dolore aute sunt enim',
        'OptionSizeLimit': 3586086,
        'OptionList': [
          {
            'OptionID': -10786285,
            'OptionName': 'proident ut',
            'OptionSelected': false,
            'OptionHide': false,
            'OptionValue': 80565059.66213942,
            'OptionPartNumber': 'amet Excepteur velit in',
            'OptionSorting': 51428883.92332715,
            'OptionImagePath': 'in sunt',
            'OptionBundleCatalogId': 29334422,
            'OptionBundleQuantity': -51797951
          },
          {
            'OptionID': 55609478,
            'OptionName': 'et dolore officia reprehenderit',
            'OptionSelected': true,
            'OptionHide': true,
            'OptionValue': -63095179.26375223,
            'OptionPartNumber': 'adip',
            'OptionSorting': -89150980.70153004,
            'OptionImagePath': 'occaecat Lorem nostrud',
            'OptionBundleCatalogId': -22960812,
            'OptionBundleQuantity': -50540835
          },
          {
            'OptionID': 65321063,
            'OptionName': 'laboris ut elit enim',
            'OptionSelected': true,
            'OptionHide': false,
            'OptionValue': -25481317.488593146,
            'OptionPartNumber': 'non',
            'OptionSorting': -95498798.2094933,
            'OptionImagePath': 'aliquip in',
            'OptionBundleCatalogId': 33703905,
            'OptionBundleQuantity': 98422047
          },
          {
            'OptionID': -70012900,
            'OptionName': 'et elit aliquip ut',
            'OptionSelected': true,
            'OptionHide': false,
            'OptionValue': 17078962.84011601,
            'OptionPartNumber': 'c',
            'OptionSorting': 33122421.1957673,
            'OptionImagePath': 'in ea sunt fugiat',
            'OptionBundleCatalogId': -67317924,
            'OptionBundleQuantity': 79159913
          }
        ]
      }
    ],
    'AdvancedOptionList': [
      {
        'AdvancedOptionCode': 'sunt dolor voluptat',
        'AdvancedOptionSufix': 'laboris v',
        'AdvancedOptionName': 'ea esse laborum labore ut',
        'AdvancedOptionCost': 55848112.98952207,
        'AdvancedOptionStock': 76156695,
        'AdvancedOptionWeight': 9164328.298772201,
        'AdvancedOptionPrice': 9651999.837504506,
        'AdvancedOptionGTIN': 'ad adipisicing dolor veniam deserunt'
      },
      {
        'AdvancedOptionCode': 'consequ',
        'AdvancedOptionSufix': 'in',
        'AdvancedOptionName': 'officia Lorem',
        'AdvancedOptionCost': 90640319.11127093,
        'AdvancedOptionStock': 54338452,
        'AdvancedOptionWeight': -15511710.312378526,
        'AdvancedOptionPrice': 64611024.67730898,
        'AdvancedOptionGTIN': 'nos'
      }
    ],
    'RelatedProductList': [
      {
        'RelatedIndexID': 89414775,
        'RelatedProductID': 85888512,
        'RelatedProductSorting': 15102358
      },
      {
        'RelatedIndexID': 75748404,
        'RelatedProductID': -31477001,
        'RelatedProductSorting': 72772785
      }
    ],
    'UpSellingItemList': [
      {
        'UpSellingIndexID': 47506021,
        'UpSellingItemID': -52234227,
        'UpSellingItemSorting': 92257498
      },
      {
        'UpSellingIndexID': 93107884,
        'UpSellingItemID': -57007053,
        'UpSellingItemSorting': -78009068
      },
      {
        'UpSellingIndexID': -31045693,
        'UpSellingItemID': 12785595,
        'UpSellingItemSorting': -6069558
      },
      {
        'UpSellingIndexID': 55302721,
        'UpSellingItemID': 36582168,
        'UpSellingItemSorting': -64383910
      },
      {
        'UpSellingIndexID': 94922078,
        'UpSellingItemID': -37166988,
        'UpSellingItemSorting': -16684608
      }
    ],
    'DiscountList': [
      {
        'DiscountID': 53775141,
        'DiscountPriceLevel': -6484243,
        'DiscountLowbound': 43653873,
        'DiscountUpbound': -65085012,
        'DiscountPrice': 24062429.59205392,
        'DiscountPercentage': false
      },
      {
        'DiscountID': -15169325,
        'DiscountPriceLevel': -74223319,
        'DiscountLowbound': 23171948,
        'DiscountUpbound': -34063601,
        'DiscountPrice': 39205151.21132815,
        'DiscountPercentage': true
      },
      {
        'DiscountID': -37826793,
        'DiscountPriceLevel': 78170938,
        'DiscountLowbound': 71711506,
        'DiscountUpbound': -82649015,
        'DiscountPrice': 12960969.719267726,
        'DiscountPercentage': false
      },
      {
        'DiscountID': -73536759,
        'DiscountPriceLevel': 72907212,
        'DiscountLowbound': 40221238,
        'DiscountUpbound': 42828439,
        'DiscountPrice': -52482288.167259924,
        'DiscountPercentage': false
      },
      {
        'DiscountID': -20626471,
        'DiscountPriceLevel': 75290069,
        'DiscountLowbound': -33070102,
        'DiscountUpbound': -7140768,
        'DiscountPrice': -89612018.10301942,
        'DiscountPercentage': false
      }
    ],
    'DoNotUseCategoryOptions': false,
    'DateCreated': '1940-11-09T08:06:28.312Z',
    'ListingTemplateID': 99219440,
    'ListingTemplateName': 'exercitation dolore in deserunt',
    'LoginRequiredOptionID': -59374108,
    'LoginRequiredOptionName': 'velit culpa occaecat',
    'LoginRequiredOptionRedirectTo': 'nisi in',
    'AllowAccessCustomerGroupID': 56625779,
    'AllowAccessCustomerGroupName': 'cillum nulla qui',
    'RMAMaxPeriod': 'occaecat voluptate incididun',
    'CanonicalUrl': 'nostrud proident aliqua',
    'TaxCode': '.R#',
    'DisplayText': 'Duis eu consectetur proide',
    'MinimumQuantity': -86395086.43804161,
    'MaximumQuantity': -83848114.48124045,
    'AllowOnlyMultiples': false,
    'AllowFractionalQuantity': true,
    'QuantityOptions': 'quis nostrud mollit nulla cillum',
    'GroupOptionsForQuantityPricing': false,
    'ApplyQuantityDiscountToOptions': false,
    'EnableMakeAnOfferFeature': true,
    'MinimumAcceptableOffer': 'occ',
    'PriceLevel1': -76113886.60931867,
    'PriceLevel1Hide': false,
    'PriceLevel2': -2685019.806964606,
    'PriceLevel2Hide': true,
    'PriceLevel3': 27555636.37172766,
    'PriceLevel3Hide': false,
    'PriceLevel4': -32466343.359107345,
    'PriceLevel4Hide': false,
    'PriceLevel5': -35533768.53624486,
    'PriceLevel5Hide': true,
    'PriceLevel6': -49754764.17288869,
    'PriceLevel6Hide': true,
    'PriceLevel7': -99144164.53978108,
    'PriceLevel7Hide': true,
    'PriceLevel8': 55966055.8681418,
    'PriceLevel8Hide': false,
    'PriceLevel9': -88768331.34491347,
    'PriceLevel9Hide': true,
    'PriceLevel10': 84988986.90436819,
    'PriceLevel10Hide': true,
    'BuyButtonLink': 'ea est',
    'ProductLink': 'dolor ad exercitation',
    'Title': 'laboris dolor reprehenderit cillum ipsum',
    'CustomFileName': 'amet',
    'RedirectLink': 'laborum pariatur ullamco deserunt',
    'MetaTags': 'incididunt eu tempor',
    'SpecialInstructions': 'ea Ut nulla',
    'AssignKey': true,
    'ReUseKeys': true,
    'SerialList': [
      {
        'SerialID': 22829981,
        'SerialUses': -51941719,
        'SerialCode': 'ullamco labore cupidatat'
      }
    ],
    'EProductList': [
      {
        'FileNumber': 9395245,
        'FilePath': 'labore'
      },
      {
        'FileNumber': 90816224,
        'FilePath': 'voluptate Excepteur veniam in tempor'
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
    "SKUInfo": {
      "CatalogID": 47304819,
      "SKU": "sit",
      "Name": "in irure sed anim ut",
      "Cost": -97938774.16442451,
      "Price": -19308940.197771385,
      "Currency": "sunt fugiat ex i",
      "RetailPrice": 77722221.0081538,
      "SalePrice": -91789207.28786238,
      "OnSale": false,
      "Stock": -45038952.78911698
    },
    "MFGID": "com",
    "ShortDescription": "in",
    "ManufacturerID": 61799392,
    "ManufacturerName": "do ea consectetur Exce",
    "DistributorList": [
      {
        "DistributorID": 20469110,
        "DistributorName": "velit sed e",
        "DistributorItemCost": 61921348.935050964,
        "DistributorItemID": "minim sint",
        "DistributorStockID": "dolor magna aliquip"
      },
      {
        "DistributorID": -21653005,
        "DistributorName": "culpa Lorem in officia",
        "DistributorItemCost": -1545864.7590813637,
        "DistributorItemID": "proident",
        "DistributorStockID": "sunt laboris"
      },
      {
        "DistributorID": 33690478,
        "DistributorName": "velit enim",
        "DistributorItemCost": -96117790.00715286,
        "DistributorItemID": "veniam incididunt",
        "DistributorStockID": "Excepteur dolor"
      }
    ],
    "LastUpdate": "1986-07-09T01:36:17.605Z",
    "UserID": "et est Excepteur Duis",
    "GTIN": "elit non",
    "CategoryList": [
      {
        "CategoryID": -65000395,
        "CategoryName": "laborum"
      },
      {
        "CategoryID": 43936084,
        "CategoryName": "id amet anim consectetur"
      },
      {
        "CategoryID": 79598330,
        "CategoryName": "pariatur dolor"
      },
      {
        "CategoryID": 54105968,
        "CategoryName": "in dolor mollit"
      }
    ],
    "ExternalIdsList": [
      {
        "ID": -46777171,
        "AdvancedOptionSufix": "fugiat aliqua",
        "ExternalId1": "dolor elit",
        "ExternalId2": "nulla pariatur laboris",
        "ExternalIdType": "eu ut ullamco "
      },
      {
        "ID": 98426633,
        "AdvancedOptionSufix": "cillum exercitation",
        "ExternalId1": "enim officia",
        "ExternalId2": "m",
        "ExternalIdType": "qui tempor cupidat"
      },
      {
        "ID": -36788101,
        "AdvancedOptionSufix": "ipsum eu exercitation laboris i",
        "ExternalId1": "sed",
        "ExternalId2": "sed in ",
        "ExternalIdType": "in qui"
      },
      {
        "ID": -82163709,
        "AdvancedOptionSufix": "ut",
        "ExternalId1": "cillum sit",
        "ExternalId2": "mollit velit",
        "ExternalIdType": "est dolor id"
      }
    ],
    "CategoryExternalIdsList": [
      {
        "ID": -85258393,
        "CategoryID": -96929120,
        "ExternalId1": "incididunt occaecat quis deseru",
        "ExternalIdType": "aliquip irure est cupidatat"
      },
      {
        "ID": 53549560,
        "CategoryID": 37858692,
        "ExternalId1": "proident aliquip",
        "ExternalIdType": "adipisicing non"
      }
    ],
    "NonTaxable": false,
    "NotForSale": true,
    "Hide": false,
    "GiftCertificate": true,
    "HomeSpecial": true,
    "CategorySpecial": false,
    "NonSearchable": true,
    "GiftWrapItem": false,
    "ShipCost": 35944853.68285248,
    "Weight": -97533207.15121979,
    "Height": -11564221.075311482,
    "Width": -8044259.455038056,
    "Depth": 70870765.80208012,
    "SelfShip": false,
    "FreeShipping": true,
    "RewardPoints": 83597752,
    "RedeemPoints": -56180334,
    "DisableRewards": false,
    "StockAlert": 72736229,
    "ReorderQuantity": 74401951,
    "InStockMessage": "velit in",
    "OutOfStockMessage": "nulla dolore sunt",
    "BackOrderMessage": "sint nulla",
    "InventoryControl": 35497330,
    "WarehouseLocation": "reprehenderit ad voluptate",
    "WarehouseBin": "eu",
    "WarehouseAisle": "minim esse est mollit",
    "WarehouseCustom": "Excepteur culpa fugiat sit",
    "Description": "ad irure",
    "Keywords": "eiusmod esse",
    "ExtraField1": "voluptate sit",
    "ExtraField2": "qui cupidatat Ut id",
    "ExtraField3": "velit amet occaecat",
    "ExtraField4": "Ut",
    "ExtraField5": "sunt exercitation",
    "ExtraField6": "in",
    "ExtraField7": "pariatur Excepteur sint eu",
    "ExtraField8": "nisi nulla Ut",
    "ExtraField9": "ipsum Excepteur",
    "ExtraField10": "laboris incididunt eu sit in",
    "ExtraField11": "eiusmod",
    "ExtraField12": "laboris Duis",
    "ExtraField13": "ea ",
    "FeatureList": [
      {
        "FeatureID": 82968211,
        "FeatureTitle": "ipsum est tempor nisi",
        "FeatureDescription": "amet pariatur dolor"
      },
      {
        "FeatureID": 68248391,
        "FeatureTitle": "et pariatur fugiat cillum",
        "FeatureDescription": "ea"
      }
    ],
    "PluginList": {},
    "SampleEnable": true,
    "SampleName": "ex non tempor",
    "SampleSKUPrefix": "repr",
    "SamplePrice": -27179100.023684114,
    "SampleWeight": -29559413.62695022,
    "ReviewAverage": 33004892.57644981,
    "ReviewCount": 76223069,
    "MainImageFile": "enim sed occaecat",
    "MainImageCaption": "irure eu ut",
    "ThumbnailFile": "ullamco officia",
    "MediaFile": "sint nostrud qui ut",
    "AdditionalImageFile2": "fugiat nisi commodo enim",
    "AdditionalImageCaption2": "pariatur labore ex",
    "AdditionalImageFile3": "elit velit tempor consectetur",
    "AdditionalImageCaption3": "elit veniam",
    "AdditionalImageFile4": "enim consectetur aliquip officia",
    "AdditionalImageCaption4": "sint ullamco fugiat",
    "ImageGalleryList": [
      {
        "ImageGalleryID": 73225027,
        "ImageGalleryFile": "nisi laborum non",
        "ImageGalleryCaption": "consectetur velit eiusmod anim dolor",
        "ImageGallerySorting": -45493104
      },
      {
        "ImageGalleryID": 39367279,
        "ImageGalleryFile": "irure dolore",
        "ImageGalleryCaption": "aliqua",
        "ImageGallerySorting": -82773561
      },
      {
        "ImageGalleryID": -54690210,
        "ImageGalleryFile": "anim",
        "ImageGalleryCaption": "eiusmod aliquip",
        "ImageGallerySorting": -252749
      },
      {
        "ImageGalleryID": 85899281,
        "ImageGalleryFile": "qui",
        "ImageGalleryCaption": "sint esse sunt",
        "ImageGallerySorting": -54507490
      },
      {
        "ImageGalleryID": -11430832,
        "ImageGalleryFile": "mollit",
        "ImageGalleryCaption": "commodo",
        "ImageGallerySorting": -46967746
      }
    ],
    "OptionSetList": [
      {
        "OptionSetID": -9624336,
        "OptionSetName": "consequat proident eu incididunt",
        "OptionSorting": -9808248.400129706,
        "OptionRequired": false,
        "OptionType": "Exc",
        "OptionURL": "ea dolor occaecat",
        "OptionAdditionalInformation": "deserunt ut voluptate et mollit",
        "OptionSizeLimit": -18996324,
        "OptionList": [
          {
            "OptionID": 87282590,
            "OptionName": "mollit aliquip",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": -12060218.372790128,
            "OptionPartNumber": "aliqua ips",
            "OptionSorting": -32514387.407670587,
            "OptionImagePath": "nostrud occaecat irure",
            "OptionBundleCatalogId": 16327524,
            "OptionBundleQuantity": 28975242
          },
          {
            "OptionID": 475400,
            "OptionName": "ut",
            "OptionSelected": false,
            "OptionHide": true,
            "OptionValue": 83910541.85383081,
            "OptionPartNumber": "esse laboru",
            "OptionSorting": 88206012.13601771,
            "OptionImagePath": "officia",
            "OptionBundleCatalogId": -6805126,
            "OptionBundleQuantity": -43361767
          },
          {
            "OptionID": -73158279,
            "OptionName": "pariatur sed cillum",
            "OptionSelected": false,
            "OptionHide": true,
            "OptionValue": -89539917.62366292,
            "OptionPartNumber": "ut aliqua ",
            "OptionSorting": -47434682.94448014,
            "OptionImagePath": "laboris eiusmod",
            "OptionBundleCatalogId": 90406534,
            "OptionBundleQuantity": 13728910
          },
          {
            "OptionID": -39519118,
            "OptionName": "ut sint et minim",
            "OptionSelected": false,
            "OptionHide": false,
            "OptionValue": -17640884.76984167,
            "OptionPartNumber": "in deserunt",
            "OptionSorting": 79008974.74911499,
            "OptionImagePath": "Duis",
            "OptionBundleCatalogId": -74248708,
            "OptionBundleQuantity": 97842795
          }
        ]
      },
      {
        "OptionSetID": -37136621,
        "OptionSetName": "veniam fugiat reprehenderit",
        "OptionSorting": 80738285.39448038,
        "OptionRequired": false,
        "OptionType": "aute eu i",
        "OptionURL": "adipisicing i",
        "OptionAdditionalInformation": "ex nostrud Excepteur consectetur",
        "OptionSizeLimit": -99358398,
        "OptionList": [
          {
            "OptionID": 34643498,
            "OptionName": "dolor nulla",
            "OptionSelected": true,
            "OptionHide": false,
            "OptionValue": 97871116.83652219,
            "OptionPartNumber": "ullamco laboris elit cupidatat",
            "OptionSorting": 31393458.93006493,
            "OptionImagePath": "Excepteur labore",
            "OptionBundleCatalogId": 24089819,
            "OptionBundleQuantity": -80810366
          },
          {
            "OptionID": 37369915,
            "OptionName": "qui non",
            "OptionSelected": false,
            "OptionHide": false,
            "OptionValue": 49353300.31605053,
            "OptionPartNumber": "adipisicing quis",
            "OptionSorting": 15253242.1074235,
            "OptionImagePath": "anim",
            "OptionBundleCatalogId": -31012804,
            "OptionBundleQuantity": -86144201
          },
          {
            "OptionID": -64201947,
            "OptionName": "sint esse Ut",
            "OptionSelected": false,
            "OptionHide": false,
            "OptionValue": -32075611.034620404,
            "OptionPartNumber": "reprehenderit ipsum nostrud",
            "OptionSorting": -2708774.7805151045,
            "OptionImagePath": "id aute",
            "OptionBundleCatalogId": 89473872,
            "OptionBundleQuantity": -19240771
          }
        ]
      }
    ],
    "AdvancedOptionList": [
      {
        "AdvancedOptionCode": "voluptate la",
        "AdvancedOptionSufix": "quis nisi",
        "AdvancedOptionName": "consectetur do",
        "AdvancedOptionCost": 36654762.40428376,
        "AdvancedOptionStock": 52733638,
        "AdvancedOptionWeight": -92384859.73339032,
        "AdvancedOptionPrice": 85948294.02011198,
        "AdvancedOptionGTIN": "dolore et"
      },
      {
        "AdvancedOptionCode": "sint consectetur",
        "AdvancedOptionSufix": "commodo non",
        "AdvancedOptionName": "est eu",
        "AdvancedOptionCost": 7453902.233112946,
        "AdvancedOptionStock": 88061865,
        "AdvancedOptionWeight": 15100909.592037976,
        "AdvancedOptionPrice": -27256367.278723776,
        "AdvancedOptionGTIN": "labo"
      },
      {
        "AdvancedOptionCode": "aliqu",
        "AdvancedOptionSufix": "voluptate amet",
        "AdvancedOptionName": "commodo sunt consequat labore cupidatat",
        "AdvancedOptionCost": 93864947.77447405,
        "AdvancedOptionStock": -87583096,
        "AdvancedOptionWeight": 21015250.938407615,
        "AdvancedOptionPrice": 17804155.96021396,
        "AdvancedOptionGTIN": "in sit eli"
      },
      {
        "AdvancedOptionCode": "consequat",
        "AdvancedOptionSufix": "dolor velit fug",
        "AdvancedOptionName": "consequat voluptate in sint Duis",
        "AdvancedOptionCost": -96896867.88687326,
        "AdvancedOptionStock": 70730686,
        "AdvancedOptionWeight": 99350180.27173644,
        "AdvancedOptionPrice": -12327205.738661647,
        "AdvancedOptionGTIN": "eu"
      }
    ],
    "RelatedProductList": [
      {
        "RelatedIndexID": 7914273,
        "RelatedProductID": -10905146,
        "RelatedProductSorting": -99089034
      },
      {
        "RelatedIndexID": 98383610,
        "RelatedProductID": 8022252,
        "RelatedProductSorting": 85397571
      },
      {
        "RelatedIndexID": -39864225,
        "RelatedProductID": 76405654,
        "RelatedProductSorting": -38517086
      },
      {
        "RelatedIndexID": 57951962,
        "RelatedProductID": 82027999,
        "RelatedProductSorting": 60097275
      }
    ],
    "UpSellingItemList": [
      {
        "UpSellingIndexID": 37307100,
        "UpSellingItemID": -40114798,
        "UpSellingItemSorting": 36318634
      },
      {
        "UpSellingIndexID": 56308994,
        "UpSellingItemID": 23071822,
        "UpSellingItemSorting": -86539862
      },
      {
        "UpSellingIndexID": 13566320,
        "UpSellingItemID": 46448962,
        "UpSellingItemSorting": 64691287
      }
    ],
    "DiscountList": [
      {
        "DiscountID": 39183742,
        "DiscountPriceLevel": -81057729,
        "DiscountLowbound": 88708537,
        "DiscountUpbound": 71442268,
        "DiscountPrice": -68102701.20644853,
        "DiscountPercentage": true
      },
      {
        "DiscountID": 3596885,
        "DiscountPriceLevel": 59329106,
        "DiscountLowbound": -19843696,
        "DiscountUpbound": -24618467,
        "DiscountPrice": -46716080.31146715,
        "DiscountPercentage": false
      },
      {
        "DiscountID": -1252425,
        "DiscountPriceLevel": 20417200,
        "DiscountLowbound": -36272691,
        "DiscountUpbound": 4526400,
        "DiscountPrice": -13250497.523399085,
        "DiscountPercentage": false
      },
      {
        "DiscountID": -99036139,
        "DiscountPriceLevel": 38199781,
        "DiscountLowbound": -80780328,
        "DiscountUpbound": 88361664,
        "DiscountPrice": 81759711.02704805,
        "DiscountPercentage": true
      }
    ],
    "DoNotUseCategoryOptions": false,
    "DateCreated": "1981-09-29T10:48:56.323Z",
    "ListingTemplateID": -20025977,
    "ListingTemplateName": "sunt do",
    "LoginRequiredOptionID": 93583030,
    "LoginRequiredOptionName": "incididunt esse nostrud aute tempor",
    "LoginRequiredOptionRedirectTo": "Ut incididunt aute reprehenderit",
    "AllowAccessCustomerGroupID": 83409844,
    "AllowAccessCustomerGroupName": "ad e",
    "RMAMaxPeriod": "ut in dolore",
    "CanonicalUrl": "qui exercitation proident quis",
    "TaxCode": "4J&1",
    "DisplayText": "aute exercitation",
    "MinimumQuantity": 32058877.899328217,
    "MaximumQuantity": -19802612.263509363,
    "AllowOnlyMultiples": true,
    "AllowFractionalQuantity": true,
    "QuantityOptions": "consequat do",
    "GroupOptionsForQuantityPricing": true,
    "ApplyQuantityDiscountToOptions": false,
    "EnableMakeAnOfferFeature": false,
    "MinimumAcceptableOffer": "veniam ",
    "PriceLevel1": 33399962.301205695,
    "PriceLevel1Hide": true,
    "PriceLevel2": 7201972.0762171745,
    "PriceLevel2Hide": false,
    "PriceLevel3": 77807049.55846933,
    "PriceLevel3Hide": false,
    "PriceLevel4": -1854646.1847341806,
    "PriceLevel4Hide": false,
    "PriceLevel5": 75840968.22909757,
    "PriceLevel5Hide": true,
    "PriceLevel6": 64639845.64240083,
    "PriceLevel6Hide": true,
    "PriceLevel7": 79181315.25480124,
    "PriceLevel7Hide": true,
    "PriceLevel8": 52452235.10862818,
    "PriceLevel8Hide": true,
    "PriceLevel9": -76940505.06579728,
    "PriceLevel9Hide": false,
    "PriceLevel10": -56420089.399086714,
    "PriceLevel10Hide": false,
    "BuyButtonLink": "eiusmod culpa amet",
    "ProductLink": "voluptate in proident ex",
    "Title": "aliqua",
    "CustomFileName": "est exercitation qui",
    "RedirectLink": "id nulla",
    "MetaTags": "minim sint tempor",
    "SpecialInstructions": "in",
    "AssignKey": false,
    "ReUseKeys": true,
    "SerialList": [
      {
        "SerialID": 90225710,
        "SerialUses": -36178625,
        "SerialCode": "elit commodo mollit laborum nisi"
      },
      {
        "SerialID": 86584458,
        "SerialUses": -97955402,
        "SerialCode": "ullamco proident anim"
      }
    ],
    "EProductList": [
      {
        "FileNumber": -60891947,
        "FilePath": "incididunt aliqua ullam"
      },
      {
        "FileNumber": -47359106,
        "FilePath": "elit"
      }
    ]
  },
  {
    "SKUInfo": {
      "CatalogID": -98658905,
      "SKU": "laboris adipisicing do labore anim",
      "Name": "nostrud",
      "Cost": 53417859.54914796,
      "Price": 59922160.548855126,
      "Currency": "dolor magna non",
      "RetailPrice": 94980000.97377393,
      "SalePrice": -10563017.016969085,
      "OnSale": false,
      "Stock": -97487235.70759799
    },
    "MFGID": "dolor veniam eiusmo",
    "ShortDescription": "aute quis ipsum sunt velit",
    "ManufacturerID": 21770651,
    "ManufacturerName": "non laborum aute",
    "DistributorList": [
      {
        "DistributorID": 46626039,
        "DistributorName": "in do d",
        "DistributorItemCost": 30895244.423885822,
        "DistributorItemID": "exercitation sed",
        "DistributorStockID": "nisi aliquip sunt laborum"
      },
      {
        "DistributorID": 24362096,
        "DistributorName": "ame",
        "DistributorItemCost": -38810198.55567498,
        "DistributorItemID": "ipsum ea dolor anim Duis",
        "DistributorStockID": ""
      },
      {
        "DistributorID": -18100188,
        "DistributorName": "do Lorem",
        "DistributorItemCost": 23206450.310608506,
        "DistributorItemID": "qui",
        "DistributorStockID": "ut elit esse aliqua"
      },
      {
        "DistributorID": 340092,
        "DistributorName": "eu veniam ",
        "DistributorItemCost": -19013104.016615137,
        "DistributorItemID": "commodo officia Duis",
        "DistributorStockID": "sint consectetur"
      }
    ],
    "LastUpdate": "1939-04-21T14:45:02.420Z",
    "UserID": "dolore amet adipisicing",
    "GTIN": "in elit",
    "CategoryList": [
      {
        "CategoryID": -87697757,
        "CategoryName": "magna"
      }
    ],
    "ExternalIdsList": [
      {
        "ID": 61694905,
        "AdvancedOptionSufix": "dolore reprehenderit",
        "ExternalId1": "eiusmod pro",
        "ExternalId2": "officia ea in fugiat",
        "ExternalIdType": "labore"
      },
      {
        "ID": -99964792,
        "AdvancedOptionSufix": "cillum do ea id ullamco",
        "ExternalId1": "laborum exercitation consequat",
        "ExternalId2": "Ut in ipsum",
        "ExternalIdType": "irure qui"
      }
    ],
    "CategoryExternalIdsList": [
      {
        "ID": -52785366,
        "CategoryID": -57320157,
        "ExternalId1": "laborum",
        "ExternalIdType": "in"
      },
      {
        "ID": -30319590,
        "CategoryID": 1362631,
        "ExternalId1": "aliquip a",
        "ExternalIdType": "in in"
      },
      {
        "ID": 63511377,
        "CategoryID": -5840475,
        "ExternalId1": "deserunt nostrud amet",
        "ExternalIdType": "laborum"
      },
      {
        "ID": -33837317,
        "CategoryID": -41878663,
        "ExternalId1": "in dolore",
        "ExternalIdType": "fugiat"
      }
    ],
    "NonTaxable": false,
    "NotForSale": true,
    "Hide": false,
    "GiftCertificate": false,
    "HomeSpecial": false,
    "CategorySpecial": true,
    "NonSearchable": false,
    "GiftWrapItem": false,
    "ShipCost": -10600618.88195625,
    "Weight": 9078899.138909474,
    "Height": 90581515.30256867,
    "Width": -65099120.80518912,
    "Depth": -37041066.496863805,
    "SelfShip": false,
    "FreeShipping": true,
    "RewardPoints": -70051161,
    "RedeemPoints": -58808522,
    "DisableRewards": true,
    "StockAlert": -69829261,
    "ReorderQuantity": -96137020,
    "InStockMessage": "tempor cillum in cupidatat fugiat",
    "OutOfStockMessage": "enim reprehe",
    "BackOrderMessage": "aliquip ut",
    "InventoryControl": 11713086,
    "WarehouseLocation": "Duis in ipsum incididunt quis",
    "WarehouseBin": "irure ea eiusmod non",
    "WarehouseAisle": "ad do dolor",
    "WarehouseCustom": "aliqua ut",
    "Description": "non in",
    "Keywords": "eiusmod Duis",
    "ExtraField1": "qui in",
    "ExtraField2": "Lorem eiusmod ipsum veniam",
    "ExtraField3": "dolor anim officia",
    "ExtraField4": "id non",
    "ExtraField5": "sunt est culpa",
    "ExtraField6": "deserunt",
    "ExtraField7": "tempor aliqua occaecat",
    "ExtraField8": "non magna",
    "ExtraField9": "qui Excepteur anim et",
    "ExtraField10": "dolore velit officia nostrud",
    "ExtraField11": "id dolor ad aliquip anim",
    "ExtraField12": "nisi ex tempor Lorem ad",
    "ExtraField13": "quis eu",
    "FeatureList": [
      {
        "FeatureID": 87529955,
        "FeatureTitle": "anim ad magna nisi",
        "FeatureDescription": "ea officia"
      },
      {
        "FeatureID": 81554410,
        "FeatureTitle": "nulla et mollit officia",
        "FeatureDescription": "magna cupidatat"
      },
      {
        "FeatureID": 5586242,
        "FeatureTitle": "commodo Dui",
        "FeatureDescription": "ad sint labor"
      },
      {
        "FeatureID": -60816330,
        "FeatureTitle": "in sit",
        "FeatureDescription": "deserunt ex officia"
      },
      {
        "FeatureID": 78416131,
        "FeatureTitle": "nostrud e",
        "FeatureDescription": "eu esse est"
      }
    ],
    "PluginList": {},
    "SampleEnable": false,
    "SampleName": "aliquip",
    "SampleSKUPrefix": "pariatur ipsum nul",
    "SamplePrice": 80699384.93821168,
    "SampleWeight": 4785012.020898357,
    "ReviewAverage": 95477025.2272993,
    "ReviewCount": 95870152,
    "MainImageFile": "et Excepteur nisi veniam",
    "MainImageCaption": "ullamco fugiat ut deserunt voluptate",
    "ThumbnailFile": "id nostrud velit anim",
    "MediaFile": "do pariatur",
    "AdditionalImageFile2": "tempor officia et cillum culpa",
    "AdditionalImageCaption2": "in cupidatat laboris",
    "AdditionalImageFile3": "do velit sit",
    "AdditionalImageCaption3": "id velit veniam commodo",
    "AdditionalImageFile4": "Lorem velit irure ipsum",
    "AdditionalImageCaption4": "aliqua esse Ut",
    "ImageGalleryList": [
      {
        "ImageGalleryID": 93937587,
        "ImageGalleryFile": "in nostrud ea pariatur",
        "ImageGalleryCaption": "non in sed",
        "ImageGallerySorting": -51770181
      },
      {
        "ImageGalleryID": -22954681,
        "ImageGalleryFile": "velit ea sit pariatur laboris",
        "ImageGalleryCaption": "dolor consectetur qui laborum aliquip",
        "ImageGallerySorting": 42307409
      },
      {
        "ImageGalleryID": -25994028,
        "ImageGalleryFile": "fugiat ad occaecat est nulla",
        "ImageGalleryCaption": "esse eu",
        "ImageGallerySorting": -51360544
      },
      {
        "ImageGalleryID": 32372760,
        "ImageGalleryFile": "ullamco et commodo laboris eiusmod",
        "ImageGalleryCaption": "anim pariatur et eiusmod exercitation",
        "ImageGallerySorting": -83300590
      }
    ],
    "OptionSetList": [
      {
        "OptionSetID": -466228,
        "OptionSetName": "aliquip",
        "OptionSorting": 37945764.24949825,
        "OptionRequired": false,
        "OptionType": "magna ",
        "OptionURL": "deserunt in Ut nulla",
        "OptionAdditionalInformation": "laborum voluptate commodo ea culpa",
        "OptionSizeLimit": 4283943,
        "OptionList": [
          {
            "OptionID": 29303264,
            "OptionName": "Excepteur id in enim",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": 13304673.223948479,
            "OptionPartNumber": "ali",
            "OptionSorting": -63838303.48048631,
            "OptionImagePath": "non enim dolore in",
            "OptionBundleCatalogId": 25770767,
            "OptionBundleQuantity": 12412268
          },
          {
            "OptionID": 75563384,
            "OptionName": "ex nulla dolor occaecat",
            "OptionSelected": false,
            "OptionHide": true,
            "OptionValue": 852019.9370655864,
            "OptionPartNumber": "dolor sit eiusmod aliqua",
            "OptionSorting": -37982405.085194506,
            "OptionImagePath": "dolor in deserunt",
            "OptionBundleCatalogId": 24869787,
            "OptionBundleQuantity": -98542646
          },
          {
            "OptionID": -22272186,
            "OptionName": "id do reprehenderit dolor amet",
            "OptionSelected": true,
            "OptionHide": false,
            "OptionValue": 79663952.06483364,
            "OptionPartNumber": "aliqua fugiat e",
            "OptionSorting": -40107189.78465731,
            "OptionImagePath": "quis",
            "OptionBundleCatalogId": -42224169,
            "OptionBundleQuantity": 703629
          }
        ]
      },
      {
        "OptionSetID": 93573354,
        "OptionSetName": "ad cillum commodo",
        "OptionSorting": -93473490.53289488,
        "OptionRequired": true,
        "OptionType": "id et",
        "OptionURL": "",
        "OptionAdditionalInformation": "consectetur dolore aute sunt enim",
        "OptionSizeLimit": 3586086,
        "OptionList": [
          {
            "OptionID": -10786285,
            "OptionName": "proident ut",
            "OptionSelected": false,
            "OptionHide": false,
            "OptionValue": 80565059.66213942,
            "OptionPartNumber": "amet Excepteur velit in",
            "OptionSorting": 51428883.92332715,
            "OptionImagePath": "in sunt",
            "OptionBundleCatalogId": 29334422,
            "OptionBundleQuantity": -51797951
          },
          {
            "OptionID": 55609478,
            "OptionName": "et dolore officia reprehenderit",
            "OptionSelected": true,
            "OptionHide": true,
            "OptionValue": -63095179.26375223,
            "OptionPartNumber": "adip",
            "OptionSorting": -89150980.70153004,
            "OptionImagePath": "occaecat Lorem nostrud",
            "OptionBundleCatalogId": -22960812,
            "OptionBundleQuantity": -50540835
          },
          {
            "OptionID": 65321063,
            "OptionName": "laboris ut elit enim",
            "OptionSelected": true,
            "OptionHide": false,
            "OptionValue": -25481317.488593146,
            "OptionPartNumber": "non",
            "OptionSorting": -95498798.2094933,
            "OptionImagePath": "aliquip in",
            "OptionBundleCatalogId": 33703905,
            "OptionBundleQuantity": 98422047
          },
          {
            "OptionID": -70012900,
            "OptionName": "et elit aliquip ut",
            "OptionSelected": true,
            "OptionHide": false,
            "OptionValue": 17078962.84011601,
            "OptionPartNumber": "c",
            "OptionSorting": 33122421.1957673,
            "OptionImagePath": "in ea sunt fugiat",
            "OptionBundleCatalogId": -67317924,
            "OptionBundleQuantity": 79159913
          }
        ]
      }
    ],
    "AdvancedOptionList": [
      {
        "AdvancedOptionCode": "sunt dolor voluptat",
        "AdvancedOptionSufix": "laboris v",
        "AdvancedOptionName": "ea esse laborum labore ut",
        "AdvancedOptionCost": 55848112.98952207,
        "AdvancedOptionStock": 76156695,
        "AdvancedOptionWeight": 9164328.298772201,
        "AdvancedOptionPrice": 9651999.837504506,
        "AdvancedOptionGTIN": "ad adipisicing dolor veniam deserunt"
      },
      {
        "AdvancedOptionCode": "consequ",
        "AdvancedOptionSufix": "in",
        "AdvancedOptionName": "officia Lorem",
        "AdvancedOptionCost": 90640319.11127093,
        "AdvancedOptionStock": 54338452,
        "AdvancedOptionWeight": -15511710.312378526,
        "AdvancedOptionPrice": 64611024.67730898,
        "AdvancedOptionGTIN": "nos"
      }
    ],
    "RelatedProductList": [
      {
        "RelatedIndexID": 89414775,
        "RelatedProductID": 85888512,
        "RelatedProductSorting": 15102358
      },
      {
        "RelatedIndexID": 75748404,
        "RelatedProductID": -31477001,
        "RelatedProductSorting": 72772785
      }
    ],
    "UpSellingItemList": [
      {
        "UpSellingIndexID": 47506021,
        "UpSellingItemID": -52234227,
        "UpSellingItemSorting": 92257498
      },
      {
        "UpSellingIndexID": 93107884,
        "UpSellingItemID": -57007053,
        "UpSellingItemSorting": -78009068
      },
      {
        "UpSellingIndexID": -31045693,
        "UpSellingItemID": 12785595,
        "UpSellingItemSorting": -6069558
      },
      {
        "UpSellingIndexID": 55302721,
        "UpSellingItemID": 36582168,
        "UpSellingItemSorting": -64383910
      },
      {
        "UpSellingIndexID": 94922078,
        "UpSellingItemID": -37166988,
        "UpSellingItemSorting": -16684608
      }
    ],
    "DiscountList": [
      {
        "DiscountID": 53775141,
        "DiscountPriceLevel": -6484243,
        "DiscountLowbound": 43653873,
        "DiscountUpbound": -65085012,
        "DiscountPrice": 24062429.59205392,
        "DiscountPercentage": false
      },
      {
        "DiscountID": -15169325,
        "DiscountPriceLevel": -74223319,
        "DiscountLowbound": 23171948,
        "DiscountUpbound": -34063601,
        "DiscountPrice": 39205151.21132815,
        "DiscountPercentage": true
      },
      {
        "DiscountID": -37826793,
        "DiscountPriceLevel": 78170938,
        "DiscountLowbound": 71711506,
        "DiscountUpbound": -82649015,
        "DiscountPrice": 12960969.719267726,
        "DiscountPercentage": false
      },
      {
        "DiscountID": -73536759,
        "DiscountPriceLevel": 72907212,
        "DiscountLowbound": 40221238,
        "DiscountUpbound": 42828439,
        "DiscountPrice": -52482288.167259924,
        "DiscountPercentage": false
      },
      {
        "DiscountID": -20626471,
        "DiscountPriceLevel": 75290069,
        "DiscountLowbound": -33070102,
        "DiscountUpbound": -7140768,
        "DiscountPrice": -89612018.10301942,
        "DiscountPercentage": false
      }
    ],
    "DoNotUseCategoryOptions": false,
    "DateCreated": "1940-11-09T08:06:28.312Z",
    "ListingTemplateID": 99219440,
    "ListingTemplateName": "exercitation dolore in deserunt",
    "LoginRequiredOptionID": -59374108,
    "LoginRequiredOptionName": "velit culpa occaecat",
    "LoginRequiredOptionRedirectTo": "nisi in",
    "AllowAccessCustomerGroupID": 56625779,
    "AllowAccessCustomerGroupName": "cillum nulla qui",
    "RMAMaxPeriod": "occaecat voluptate incididun",
    "CanonicalUrl": "nostrud proident aliqua",
    "TaxCode": ".R#",
    "DisplayText": "Duis eu consectetur proide",
    "MinimumQuantity": -86395086.43804161,
    "MaximumQuantity": -83848114.48124045,
    "AllowOnlyMultiples": false,
    "AllowFractionalQuantity": true,
    "QuantityOptions": "quis nostrud mollit nulla cillum",
    "GroupOptionsForQuantityPricing": false,
    "ApplyQuantityDiscountToOptions": false,
    "EnableMakeAnOfferFeature": true,
    "MinimumAcceptableOffer": "occ",
    "PriceLevel1": -76113886.60931867,
    "PriceLevel1Hide": false,
    "PriceLevel2": -2685019.806964606,
    "PriceLevel2Hide": true,
    "PriceLevel3": 27555636.37172766,
    "PriceLevel3Hide": false,
    "PriceLevel4": -32466343.359107345,
    "PriceLevel4Hide": false,
    "PriceLevel5": -35533768.53624486,
    "PriceLevel5Hide": true,
    "PriceLevel6": -49754764.17288869,
    "PriceLevel6Hide": true,
    "PriceLevel7": -99144164.53978108,
    "PriceLevel7Hide": true,
    "PriceLevel8": 55966055.8681418,
    "PriceLevel8Hide": false,
    "PriceLevel9": -88768331.34491347,
    "PriceLevel9Hide": true,
    "PriceLevel10": 84988986.90436819,
    "PriceLevel10Hide": true,
    "BuyButtonLink": "ea est",
    "ProductLink": "dolor ad exercitation",
    "Title": "laboris dolor reprehenderit cillum ipsum",
    "CustomFileName": "amet",
    "RedirectLink": "laborum pariatur ullamco deserunt",
    "MetaTags": "incididunt eu tempor",
    "SpecialInstructions": "ea Ut nulla",
    "AssignKey": true,
    "ReUseKeys": true,
    "SerialList": [
      {
        "SerialID": 22829981,
        "SerialUses": -51941719,
        "SerialCode": "ullamco labore cupidatat"
      }
    ],
    "EProductList": [
      {
        "FileNumber": 9395245,
        "FilePath": "labore"
      },
      {
        "FileNumber": 90816224,
        "FilePath": "voluptate Excepteur veniam in tempor"
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

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  [
    {
      "SKUInfo": {
        "CatalogID": 47304819,
        "SKU": "sit",
        "Name": "in irure sed anim ut",
        "Cost": -97938774.16442451,
        "Price": -19308940.197771385,
        "Currency": "sunt fugiat ex i",
        "RetailPrice": 77722221.0081538,
        "SalePrice": -91789207.28786238,
        "OnSale": false,
        "Stock": -45038952.78911698
      },
      "MFGID": "com",
      "ShortDescription": "in",
      "ManufacturerID": 61799392,
      "ManufacturerName": "do ea consectetur Exce",
      "DistributorList": [
        {
          "DistributorID": 20469110,
          "DistributorName": "velit sed e",
          "DistributorItemCost": 61921348.935050964,
          "DistributorItemID": "minim sint",
          "DistributorStockID": "dolor magna aliquip"
        },
        {
          "DistributorID": -21653005,
          "DistributorName": "culpa Lorem in officia",
          "DistributorItemCost": -1545864.7590813637,
          "DistributorItemID": "proident",
          "DistributorStockID": "sunt laboris"
        },
        {
          "DistributorID": 33690478,
          "DistributorName": "velit enim",
          "DistributorItemCost": -96117790.00715286,
          "DistributorItemID": "veniam incididunt",
          "DistributorStockID": "Excepteur dolor"
        }
      ],
      "LastUpdate": "1986-07-09T01:36:17.605Z",
      "UserID": "et est Excepteur Duis",
      "GTIN": "elit non",
      "CategoryList": [
        {
          "CategoryID": -65000395,
          "CategoryName": "laborum"
        },
        {
          "CategoryID": 43936084,
          "CategoryName": "id amet anim consectetur"
        },
        {
          "CategoryID": 79598330,
          "CategoryName": "pariatur dolor"
        },
        {
          "CategoryID": 54105968,
          "CategoryName": "in dolor mollit"
        }
      ],
      "ExternalIdsList": [
        {
          "ID": -46777171,
          "AdvancedOptionSufix": "fugiat aliqua",
          "ExternalId1": "dolor elit",
          "ExternalId2": "nulla pariatur laboris",
          "ExternalIdType": "eu ut ullamco "
        },
        {
          "ID": 98426633,
          "AdvancedOptionSufix": "cillum exercitation",
          "ExternalId1": "enim officia",
          "ExternalId2": "m",
          "ExternalIdType": "qui tempor cupidat"
        },
        {
          "ID": -36788101,
          "AdvancedOptionSufix": "ipsum eu exercitation laboris i",
          "ExternalId1": "sed",
          "ExternalId2": "sed in ",
          "ExternalIdType": "in qui"
        },
        {
          "ID": -82163709,
          "AdvancedOptionSufix": "ut",
          "ExternalId1": "cillum sit",
          "ExternalId2": "mollit velit",
          "ExternalIdType": "est dolor id"
        }
      ],
      "CategoryExternalIdsList": [
        {
          "ID": -85258393,
          "CategoryID": -96929120,
          "ExternalId1": "incididunt occaecat quis deseru",
          "ExternalIdType": "aliquip irure est cupidatat"
        },
        {
          "ID": 53549560,
          "CategoryID": 37858692,
          "ExternalId1": "proident aliquip",
          "ExternalIdType": "adipisicing non"
        }
      ],
      "NonTaxable": false,
      "NotForSale": true,
      "Hide": false,
      "GiftCertificate": true,
      "HomeSpecial": true,
      "CategorySpecial": false,
      "NonSearchable": true,
      "GiftWrapItem": false,
      "ShipCost": 35944853.68285248,
      "Weight": -97533207.15121979,
      "Height": -11564221.075311482,
      "Width": -8044259.455038056,
      "Depth": 70870765.80208012,
      "SelfShip": false,
      "FreeShipping": true,
      "RewardPoints": 83597752,
      "RedeemPoints": -56180334,
      "DisableRewards": false,
      "StockAlert": 72736229,
      "ReorderQuantity": 74401951,
      "InStockMessage": "velit in",
      "OutOfStockMessage": "nulla dolore sunt",
      "BackOrderMessage": "sint nulla",
      "InventoryControl": 35497330,
      "WarehouseLocation": "reprehenderit ad voluptate",
      "WarehouseBin": "eu",
      "WarehouseAisle": "minim esse est mollit",
      "WarehouseCustom": "Excepteur culpa fugiat sit",
      "Description": "ad irure",
      "Keywords": "eiusmod esse",
      "ExtraField1": "voluptate sit",
      "ExtraField2": "qui cupidatat Ut id",
      "ExtraField3": "velit amet occaecat",
      "ExtraField4": "Ut",
      "ExtraField5": "sunt exercitation",
      "ExtraField6": "in",
      "ExtraField7": "pariatur Excepteur sint eu",
      "ExtraField8": "nisi nulla Ut",
      "ExtraField9": "ipsum Excepteur",
      "ExtraField10": "laboris incididunt eu sit in",
      "ExtraField11": "eiusmod",
      "ExtraField12": "laboris Duis",
      "ExtraField13": "ea ",
      "FeatureList": [
        {
          "FeatureID": 82968211,
          "FeatureTitle": "ipsum est tempor nisi",
          "FeatureDescription": "amet pariatur dolor"
        },
        {
          "FeatureID": 68248391,
          "FeatureTitle": "et pariatur fugiat cillum",
          "FeatureDescription": "ea"
        }
      ],
      "PluginList": {},
      "SampleEnable": true,
      "SampleName": "ex non tempor",
      "SampleSKUPrefix": "repr",
      "SamplePrice": -27179100.023684114,
      "SampleWeight": -29559413.62695022,
      "ReviewAverage": 33004892.57644981,
      "ReviewCount": 76223069,
      "MainImageFile": "enim sed occaecat",
      "MainImageCaption": "irure eu ut",
      "ThumbnailFile": "ullamco officia",
      "MediaFile": "sint nostrud qui ut",
      "AdditionalImageFile2": "fugiat nisi commodo enim",
      "AdditionalImageCaption2": "pariatur labore ex",
      "AdditionalImageFile3": "elit velit tempor consectetur",
      "AdditionalImageCaption3": "elit veniam",
      "AdditionalImageFile4": "enim consectetur aliquip officia",
      "AdditionalImageCaption4": "sint ullamco fugiat",
      "ImageGalleryList": [
        {
          "ImageGalleryID": 73225027,
          "ImageGalleryFile": "nisi laborum non",
          "ImageGalleryCaption": "consectetur velit eiusmod anim dolor",
          "ImageGallerySorting": -45493104
        },
        {
          "ImageGalleryID": 39367279,
          "ImageGalleryFile": "irure dolore",
          "ImageGalleryCaption": "aliqua",
          "ImageGallerySorting": -82773561
        },
        {
          "ImageGalleryID": -54690210,
          "ImageGalleryFile": "anim",
          "ImageGalleryCaption": "eiusmod aliquip",
          "ImageGallerySorting": -252749
        },
        {
          "ImageGalleryID": 85899281,
          "ImageGalleryFile": "qui",
          "ImageGalleryCaption": "sint esse sunt",
          "ImageGallerySorting": -54507490
        },
        {
          "ImageGalleryID": -11430832,
          "ImageGalleryFile": "mollit",
          "ImageGalleryCaption": "commodo",
          "ImageGallerySorting": -46967746
        }
      ],
      "OptionSetList": [
        {
          "OptionSetID": -9624336,
          "OptionSetName": "consequat proident eu incididunt",
          "OptionSorting": -9808248.400129706,
          "OptionRequired": false,
          "OptionType": "Exc",
          "OptionURL": "ea dolor occaecat",
          "OptionAdditionalInformation": "deserunt ut voluptate et mollit",
          "OptionSizeLimit": -18996324,
          "OptionList": [
            {
              "OptionID": 87282590,
              "OptionName": "mollit aliquip",
              "OptionSelected": true,
              "OptionHide": true,
              "OptionValue": -12060218.372790128,
              "OptionPartNumber": "aliqua ips",
              "OptionSorting": -32514387.407670587,
              "OptionImagePath": "nostrud occaecat irure",
              "OptionBundleCatalogId": 16327524,
              "OptionBundleQuantity": 28975242
            },
            {
              "OptionID": 475400,
              "OptionName": "ut",
              "OptionSelected": false,
              "OptionHide": true,
              "OptionValue": 83910541.85383081,
              "OptionPartNumber": "esse laboru",
              "OptionSorting": 88206012.13601771,
              "OptionImagePath": "officia",
              "OptionBundleCatalogId": -6805126,
              "OptionBundleQuantity": -43361767
            },
            {
              "OptionID": -73158279,
              "OptionName": "pariatur sed cillum",
              "OptionSelected": false,
              "OptionHide": true,
              "OptionValue": -89539917.62366292,
              "OptionPartNumber": "ut aliqua ",
              "OptionSorting": -47434682.94448014,
              "OptionImagePath": "laboris eiusmod",
              "OptionBundleCatalogId": 90406534,
              "OptionBundleQuantity": 13728910
            },
            {
              "OptionID": -39519118,
              "OptionName": "ut sint et minim",
              "OptionSelected": false,
              "OptionHide": false,
              "OptionValue": -17640884.76984167,
              "OptionPartNumber": "in deserunt",
              "OptionSorting": 79008974.74911499,
              "OptionImagePath": "Duis",
              "OptionBundleCatalogId": -74248708,
              "OptionBundleQuantity": 97842795
            }
          ]
        },
        {
          "OptionSetID": -37136621,
          "OptionSetName": "veniam fugiat reprehenderit",
          "OptionSorting": 80738285.39448038,
          "OptionRequired": false,
          "OptionType": "aute eu i",
          "OptionURL": "adipisicing i",
          "OptionAdditionalInformation": "ex nostrud Excepteur consectetur",
          "OptionSizeLimit": -99358398,
          "OptionList": [
            {
              "OptionID": 34643498,
              "OptionName": "dolor nulla",
              "OptionSelected": true,
              "OptionHide": false,
              "OptionValue": 97871116.83652219,
              "OptionPartNumber": "ullamco laboris elit cupidatat",
              "OptionSorting": 31393458.93006493,
              "OptionImagePath": "Excepteur labore",
              "OptionBundleCatalogId": 24089819,
              "OptionBundleQuantity": -80810366
            },
            {
              "OptionID": 37369915,
              "OptionName": "qui non",
              "OptionSelected": false,
              "OptionHide": false,
              "OptionValue": 49353300.31605053,
              "OptionPartNumber": "adipisicing quis",
              "OptionSorting": 15253242.1074235,
              "OptionImagePath": "anim",
              "OptionBundleCatalogId": -31012804,
              "OptionBundleQuantity": -86144201
            },
            {
              "OptionID": -64201947,
              "OptionName": "sint esse Ut",
              "OptionSelected": false,
              "OptionHide": false,
              "OptionValue": -32075611.034620404,
              "OptionPartNumber": "reprehenderit ipsum nostrud",
              "OptionSorting": -2708774.7805151045,
              "OptionImagePath": "id aute",
              "OptionBundleCatalogId": 89473872,
              "OptionBundleQuantity": -19240771
            }
          ]
        }
      ],
      "AdvancedOptionList": [
        {
          "AdvancedOptionCode": "voluptate la",
          "AdvancedOptionSufix": "quis nisi",
          "AdvancedOptionName": "consectetur do",
          "AdvancedOptionCost": 36654762.40428376,
          "AdvancedOptionStock": 52733638,
          "AdvancedOptionWeight": -92384859.73339032,
          "AdvancedOptionPrice": 85948294.02011198,
          "AdvancedOptionGTIN": "dolore et"
        },
        {
          "AdvancedOptionCode": "sint consectetur",
          "AdvancedOptionSufix": "commodo non",
          "AdvancedOptionName": "est eu",
          "AdvancedOptionCost": 7453902.233112946,
          "AdvancedOptionStock": 88061865,
          "AdvancedOptionWeight": 15100909.592037976,
          "AdvancedOptionPrice": -27256367.278723776,
          "AdvancedOptionGTIN": "labo"
        },
        {
          "AdvancedOptionCode": "aliqu",
          "AdvancedOptionSufix": "voluptate amet",
          "AdvancedOptionName": "commodo sunt consequat labore cupidatat",
          "AdvancedOptionCost": 93864947.77447405,
          "AdvancedOptionStock": -87583096,
          "AdvancedOptionWeight": 21015250.938407615,
          "AdvancedOptionPrice": 17804155.96021396,
          "AdvancedOptionGTIN": "in sit eli"
        },
        {
          "AdvancedOptionCode": "consequat",
          "AdvancedOptionSufix": "dolor velit fug",
          "AdvancedOptionName": "consequat voluptate in sint Duis",
          "AdvancedOptionCost": -96896867.88687326,
          "AdvancedOptionStock": 70730686,
          "AdvancedOptionWeight": 99350180.27173644,
          "AdvancedOptionPrice": -12327205.738661647,
          "AdvancedOptionGTIN": "eu"
        }
      ],
      "RelatedProductList": [
        {
          "RelatedIndexID": 7914273,
          "RelatedProductID": -10905146,
          "RelatedProductSorting": -99089034
        },
        {
          "RelatedIndexID": 98383610,
          "RelatedProductID": 8022252,
          "RelatedProductSorting": 85397571
        },
        {
          "RelatedIndexID": -39864225,
          "RelatedProductID": 76405654,
          "RelatedProductSorting": -38517086
        },
        {
          "RelatedIndexID": 57951962,
          "RelatedProductID": 82027999,
          "RelatedProductSorting": 60097275
        }
      ],
      "UpSellingItemList": [
        {
          "UpSellingIndexID": 37307100,
          "UpSellingItemID": -40114798,
          "UpSellingItemSorting": 36318634
        },
        {
          "UpSellingIndexID": 56308994,
          "UpSellingItemID": 23071822,
          "UpSellingItemSorting": -86539862
        },
        {
          "UpSellingIndexID": 13566320,
          "UpSellingItemID": 46448962,
          "UpSellingItemSorting": 64691287
        }
      ],
      "DiscountList": [
        {
          "DiscountID": 39183742,
          "DiscountPriceLevel": -81057729,
          "DiscountLowbound": 88708537,
          "DiscountUpbound": 71442268,
          "DiscountPrice": -68102701.20644853,
          "DiscountPercentage": true
        },
        {
          "DiscountID": 3596885,
          "DiscountPriceLevel": 59329106,
          "DiscountLowbound": -19843696,
          "DiscountUpbound": -24618467,
          "DiscountPrice": -46716080.31146715,
          "DiscountPercentage": false
        },
        {
          "DiscountID": -1252425,
          "DiscountPriceLevel": 20417200,
          "DiscountLowbound": -36272691,
          "DiscountUpbound": 4526400,
          "DiscountPrice": -13250497.523399085,
          "DiscountPercentage": false
        },
        {
          "DiscountID": -99036139,
          "DiscountPriceLevel": 38199781,
          "DiscountLowbound": -80780328,
          "DiscountUpbound": 88361664,
          "DiscountPrice": 81759711.02704805,
          "DiscountPercentage": true
        }
      ],
      "DoNotUseCategoryOptions": false,
      "DateCreated": "1981-09-29T10:48:56.323Z",
      "ListingTemplateID": -20025977,
      "ListingTemplateName": "sunt do",
      "LoginRequiredOptionID": 93583030,
      "LoginRequiredOptionName": "incididunt esse nostrud aute tempor",
      "LoginRequiredOptionRedirectTo": "Ut incididunt aute reprehenderit",
      "AllowAccessCustomerGroupID": 83409844,
      "AllowAccessCustomerGroupName": "ad e",
      "RMAMaxPeriod": "ut in dolore",
      "CanonicalUrl": "qui exercitation proident quis",
      "TaxCode": "4J&1",
      "DisplayText": "aute exercitation",
      "MinimumQuantity": 32058877.899328217,
      "MaximumQuantity": -19802612.263509363,
      "AllowOnlyMultiples": true,
      "AllowFractionalQuantity": true,
      "QuantityOptions": "consequat do",
      "GroupOptionsForQuantityPricing": true,
      "ApplyQuantityDiscountToOptions": false,
      "EnableMakeAnOfferFeature": false,
      "MinimumAcceptableOffer": "veniam ",
      "PriceLevel1": 33399962.301205695,
      "PriceLevel1Hide": true,
      "PriceLevel2": 7201972.0762171745,
      "PriceLevel2Hide": false,
      "PriceLevel3": 77807049.55846933,
      "PriceLevel3Hide": false,
      "PriceLevel4": -1854646.1847341806,
      "PriceLevel4Hide": false,
      "PriceLevel5": 75840968.22909757,
      "PriceLevel5Hide": true,
      "PriceLevel6": 64639845.64240083,
      "PriceLevel6Hide": true,
      "PriceLevel7": 79181315.25480124,
      "PriceLevel7Hide": true,
      "PriceLevel8": 52452235.10862818,
      "PriceLevel8Hide": true,
      "PriceLevel9": -76940505.06579728,
      "PriceLevel9Hide": false,
      "PriceLevel10": -56420089.399086714,
      "PriceLevel10Hide": false,
      "BuyButtonLink": "eiusmod culpa amet",
      "ProductLink": "voluptate in proident ex",
      "Title": "aliqua",
      "CustomFileName": "est exercitation qui",
      "RedirectLink": "id nulla",
      "MetaTags": "minim sint tempor",
      "SpecialInstructions": "in",
      "AssignKey": false,
      "ReUseKeys": true,
      "SerialList": [
        {
          "SerialID": 90225710,
          "SerialUses": -36178625,
          "SerialCode": "elit commodo mollit laborum nisi"
        },
        {
          "SerialID": 86584458,
          "SerialUses": -97955402,
          "SerialCode": "ullamco proident anim"
        }
      ],
      "EProductList": [
        {
          "FileNumber": -60891947,
          "FilePath": "incididunt aliqua ullam"
        },
        {
          "FileNumber": -47359106,
          "FilePath": "elit"
        }
      ]
    },
    {
      "SKUInfo": {
        "CatalogID": -98658905,
        "SKU": "laboris adipisicing do labore anim",
        "Name": "nostrud",
        "Cost": 53417859.54914796,
        "Price": 59922160.548855126,
        "Currency": "dolor magna non",
        "RetailPrice": 94980000.97377393,
        "SalePrice": -10563017.016969085,
        "OnSale": false,
        "Stock": -97487235.70759799
      },
      "MFGID": "dolor veniam eiusmo",
      "ShortDescription": "aute quis ipsum sunt velit",
      "ManufacturerID": 21770651,
      "ManufacturerName": "non laborum aute",
      "DistributorList": [
        {
          "DistributorID": 46626039,
          "DistributorName": "in do d",
          "DistributorItemCost": 30895244.423885822,
          "DistributorItemID": "exercitation sed",
          "DistributorStockID": "nisi aliquip sunt laborum"
        },
        {
          "DistributorID": 24362096,
          "DistributorName": "ame",
          "DistributorItemCost": -38810198.55567498,
          "DistributorItemID": "ipsum ea dolor anim Duis",
          "DistributorStockID": ""
        },
        {
          "DistributorID": -18100188,
          "DistributorName": "do Lorem",
          "DistributorItemCost": 23206450.310608506,
          "DistributorItemID": "qui",
          "DistributorStockID": "ut elit esse aliqua"
        },
        {
          "DistributorID": 340092,
          "DistributorName": "eu veniam ",
          "DistributorItemCost": -19013104.016615137,
          "DistributorItemID": "commodo officia Duis",
          "DistributorStockID": "sint consectetur"
        }
      ],
      "LastUpdate": "1939-04-21T14:45:02.420Z",
      "UserID": "dolore amet adipisicing",
      "GTIN": "in elit",
      "CategoryList": [
        {
          "CategoryID": -87697757,
          "CategoryName": "magna"
        }
      ],
      "ExternalIdsList": [
        {
          "ID": 61694905,
          "AdvancedOptionSufix": "dolore reprehenderit",
          "ExternalId1": "eiusmod pro",
          "ExternalId2": "officia ea in fugiat",
          "ExternalIdType": "labore"
        },
        {
          "ID": -99964792,
          "AdvancedOptionSufix": "cillum do ea id ullamco",
          "ExternalId1": "laborum exercitation consequat",
          "ExternalId2": "Ut in ipsum",
          "ExternalIdType": "irure qui"
        }
      ],
      "CategoryExternalIdsList": [
        {
          "ID": -52785366,
          "CategoryID": -57320157,
          "ExternalId1": "laborum",
          "ExternalIdType": "in"
        },
        {
          "ID": -30319590,
          "CategoryID": 1362631,
          "ExternalId1": "aliquip a",
          "ExternalIdType": "in in"
        },
        {
          "ID": 63511377,
          "CategoryID": -5840475,
          "ExternalId1": "deserunt nostrud amet",
          "ExternalIdType": "laborum"
        },
        {
          "ID": -33837317,
          "CategoryID": -41878663,
          "ExternalId1": "in dolore",
          "ExternalIdType": "fugiat"
        }
      ],
      "NonTaxable": false,
      "NotForSale": true,
      "Hide": false,
      "GiftCertificate": false,
      "HomeSpecial": false,
      "CategorySpecial": true,
      "NonSearchable": false,
      "GiftWrapItem": false,
      "ShipCost": -10600618.88195625,
      "Weight": 9078899.138909474,
      "Height": 90581515.30256867,
      "Width": -65099120.80518912,
      "Depth": -37041066.496863805,
      "SelfShip": false,
      "FreeShipping": true,
      "RewardPoints": -70051161,
      "RedeemPoints": -58808522,
      "DisableRewards": true,
      "StockAlert": -69829261,
      "ReorderQuantity": -96137020,
      "InStockMessage": "tempor cillum in cupidatat fugiat",
      "OutOfStockMessage": "enim reprehe",
      "BackOrderMessage": "aliquip ut",
      "InventoryControl": 11713086,
      "WarehouseLocation": "Duis in ipsum incididunt quis",
      "WarehouseBin": "irure ea eiusmod non",
      "WarehouseAisle": "ad do dolor",
      "WarehouseCustom": "aliqua ut",
      "Description": "non in",
      "Keywords": "eiusmod Duis",
      "ExtraField1": "qui in",
      "ExtraField2": "Lorem eiusmod ipsum veniam",
      "ExtraField3": "dolor anim officia",
      "ExtraField4": "id non",
      "ExtraField5": "sunt est culpa",
      "ExtraField6": "deserunt",
      "ExtraField7": "tempor aliqua occaecat",
      "ExtraField8": "non magna",
      "ExtraField9": "qui Excepteur anim et",
      "ExtraField10": "dolore velit officia nostrud",
      "ExtraField11": "id dolor ad aliquip anim",
      "ExtraField12": "nisi ex tempor Lorem ad",
      "ExtraField13": "quis eu",
      "FeatureList": [
        {
          "FeatureID": 87529955,
          "FeatureTitle": "anim ad magna nisi",
          "FeatureDescription": "ea officia"
        },
        {
          "FeatureID": 81554410,
          "FeatureTitle": "nulla et mollit officia",
          "FeatureDescription": "magna cupidatat"
        },
        {
          "FeatureID": 5586242,
          "FeatureTitle": "commodo Dui",
          "FeatureDescription": "ad sint labor"
        },
        {
          "FeatureID": -60816330,
          "FeatureTitle": "in sit",
          "FeatureDescription": "deserunt ex officia"
        },
        {
          "FeatureID": 78416131,
          "FeatureTitle": "nostrud e",
          "FeatureDescription": "eu esse est"
        }
      ],
      "PluginList": {},
      "SampleEnable": false,
      "SampleName": "aliquip",
      "SampleSKUPrefix": "pariatur ipsum nul",
      "SamplePrice": 80699384.93821168,
      "SampleWeight": 4785012.020898357,
      "ReviewAverage": 95477025.2272993,
      "ReviewCount": 95870152,
      "MainImageFile": "et Excepteur nisi veniam",
      "MainImageCaption": "ullamco fugiat ut deserunt voluptate",
      "ThumbnailFile": "id nostrud velit anim",
      "MediaFile": "do pariatur",
      "AdditionalImageFile2": "tempor officia et cillum culpa",
      "AdditionalImageCaption2": "in cupidatat laboris",
      "AdditionalImageFile3": "do velit sit",
      "AdditionalImageCaption3": "id velit veniam commodo",
      "AdditionalImageFile4": "Lorem velit irure ipsum",
      "AdditionalImageCaption4": "aliqua esse Ut",
      "ImageGalleryList": [
        {
          "ImageGalleryID": 93937587,
          "ImageGalleryFile": "in nostrud ea pariatur",
          "ImageGalleryCaption": "non in sed",
          "ImageGallerySorting": -51770181
        },
        {
          "ImageGalleryID": -22954681,
          "ImageGalleryFile": "velit ea sit pariatur laboris",
          "ImageGalleryCaption": "dolor consectetur qui laborum aliquip",
          "ImageGallerySorting": 42307409
        },
        {
          "ImageGalleryID": -25994028,
          "ImageGalleryFile": "fugiat ad occaecat est nulla",
          "ImageGalleryCaption": "esse eu",
          "ImageGallerySorting": -51360544
        },
        {
          "ImageGalleryID": 32372760,
          "ImageGalleryFile": "ullamco et commodo laboris eiusmod",
          "ImageGalleryCaption": "anim pariatur et eiusmod exercitation",
          "ImageGallerySorting": -83300590
        }
      ],
      "OptionSetList": [
        {
          "OptionSetID": -466228,
          "OptionSetName": "aliquip",
          "OptionSorting": 37945764.24949825,
          "OptionRequired": false,
          "OptionType": "magna ",
          "OptionURL": "deserunt in Ut nulla",
          "OptionAdditionalInformation": "laborum voluptate commodo ea culpa",
          "OptionSizeLimit": 4283943,
          "OptionList": [
            {
              "OptionID": 29303264,
              "OptionName": "Excepteur id in enim",
              "OptionSelected": true,
              "OptionHide": true,
              "OptionValue": 13304673.223948479,
              "OptionPartNumber": "ali",
              "OptionSorting": -63838303.48048631,
              "OptionImagePath": "non enim dolore in",
              "OptionBundleCatalogId": 25770767,
              "OptionBundleQuantity": 12412268
            },
            {
              "OptionID": 75563384,
              "OptionName": "ex nulla dolor occaecat",
              "OptionSelected": false,
              "OptionHide": true,
              "OptionValue": 852019.9370655864,
              "OptionPartNumber": "dolor sit eiusmod aliqua",
              "OptionSorting": -37982405.085194506,
              "OptionImagePath": "dolor in deserunt",
              "OptionBundleCatalogId": 24869787,
              "OptionBundleQuantity": -98542646
            },
            {
              "OptionID": -22272186,
              "OptionName": "id do reprehenderit dolor amet",
              "OptionSelected": true,
              "OptionHide": false,
              "OptionValue": 79663952.06483364,
              "OptionPartNumber": "aliqua fugiat e",
              "OptionSorting": -40107189.78465731,
              "OptionImagePath": "quis",
              "OptionBundleCatalogId": -42224169,
              "OptionBundleQuantity": 703629
            }
          ]
        },
        {
          "OptionSetID": 93573354,
          "OptionSetName": "ad cillum commodo",
          "OptionSorting": -93473490.53289488,
          "OptionRequired": true,
          "OptionType": "id et",
          "OptionURL": "",
          "OptionAdditionalInformation": "consectetur dolore aute sunt enim",
          "OptionSizeLimit": 3586086,
          "OptionList": [
            {
              "OptionID": -10786285,
              "OptionName": "proident ut",
              "OptionSelected": false,
              "OptionHide": false,
              "OptionValue": 80565059.66213942,
              "OptionPartNumber": "amet Excepteur velit in",
              "OptionSorting": 51428883.92332715,
              "OptionImagePath": "in sunt",
              "OptionBundleCatalogId": 29334422,
              "OptionBundleQuantity": -51797951
            },
            {
              "OptionID": 55609478,
              "OptionName": "et dolore officia reprehenderit",
              "OptionSelected": true,
              "OptionHide": true,
              "OptionValue": -63095179.26375223,
              "OptionPartNumber": "adip",
              "OptionSorting": -89150980.70153004,
              "OptionImagePath": "occaecat Lorem nostrud",
              "OptionBundleCatalogId": -22960812,
              "OptionBundleQuantity": -50540835
            },
            {
              "OptionID": 65321063,
              "OptionName": "laboris ut elit enim",
              "OptionSelected": true,
              "OptionHide": false,
              "OptionValue": -25481317.488593146,
              "OptionPartNumber": "non",
              "OptionSorting": -95498798.2094933,
              "OptionImagePath": "aliquip in",
              "OptionBundleCatalogId": 33703905,
              "OptionBundleQuantity": 98422047
            },
            {
              "OptionID": -70012900,
              "OptionName": "et elit aliquip ut",
              "OptionSelected": true,
              "OptionHide": false,
              "OptionValue": 17078962.84011601,
              "OptionPartNumber": "c",
              "OptionSorting": 33122421.1957673,
              "OptionImagePath": "in ea sunt fugiat",
              "OptionBundleCatalogId": -67317924,
              "OptionBundleQuantity": 79159913
            }
          ]
        }
      ],
      "AdvancedOptionList": [
        {
          "AdvancedOptionCode": "sunt dolor voluptat",
          "AdvancedOptionSufix": "laboris v",
          "AdvancedOptionName": "ea esse laborum labore ut",
          "AdvancedOptionCost": 55848112.98952207,
          "AdvancedOptionStock": 76156695,
          "AdvancedOptionWeight": 9164328.298772201,
          "AdvancedOptionPrice": 9651999.837504506,
          "AdvancedOptionGTIN": "ad adipisicing dolor veniam deserunt"
        },
        {
          "AdvancedOptionCode": "consequ",
          "AdvancedOptionSufix": "in",
          "AdvancedOptionName": "officia Lorem",
          "AdvancedOptionCost": 90640319.11127093,
          "AdvancedOptionStock": 54338452,
          "AdvancedOptionWeight": -15511710.312378526,
          "AdvancedOptionPrice": 64611024.67730898,
          "AdvancedOptionGTIN": "nos"
        }
      ],
      "RelatedProductList": [
        {
          "RelatedIndexID": 89414775,
          "RelatedProductID": 85888512,
          "RelatedProductSorting": 15102358
        },
        {
          "RelatedIndexID": 75748404,
          "RelatedProductID": -31477001,
          "RelatedProductSorting": 72772785
        }
      ],
      "UpSellingItemList": [
        {
          "UpSellingIndexID": 47506021,
          "UpSellingItemID": -52234227,
          "UpSellingItemSorting": 92257498
        },
        {
          "UpSellingIndexID": 93107884,
          "UpSellingItemID": -57007053,
          "UpSellingItemSorting": -78009068
        },
        {
          "UpSellingIndexID": -31045693,
          "UpSellingItemID": 12785595,
          "UpSellingItemSorting": -6069558
        },
        {
          "UpSellingIndexID": 55302721,
          "UpSellingItemID": 36582168,
          "UpSellingItemSorting": -64383910
        },
        {
          "UpSellingIndexID": 94922078,
          "UpSellingItemID": -37166988,
          "UpSellingItemSorting": -16684608
        }
      ],
      "DiscountList": [
        {
          "DiscountID": 53775141,
          "DiscountPriceLevel": -6484243,
          "DiscountLowbound": 43653873,
          "DiscountUpbound": -65085012,
          "DiscountPrice": 24062429.59205392,
          "DiscountPercentage": false
        },
        {
          "DiscountID": -15169325,
          "DiscountPriceLevel": -74223319,
          "DiscountLowbound": 23171948,
          "DiscountUpbound": -34063601,
          "DiscountPrice": 39205151.21132815,
          "DiscountPercentage": true
        },
        {
          "DiscountID": -37826793,
          "DiscountPriceLevel": 78170938,
          "DiscountLowbound": 71711506,
          "DiscountUpbound": -82649015,
          "DiscountPrice": 12960969.719267726,
          "DiscountPercentage": false
        },
        {
          "DiscountID": -73536759,
          "DiscountPriceLevel": 72907212,
          "DiscountLowbound": 40221238,
          "DiscountUpbound": 42828439,
          "DiscountPrice": -52482288.167259924,
          "DiscountPercentage": false
        },
        {
          "DiscountID": -20626471,
          "DiscountPriceLevel": 75290069,
          "DiscountLowbound": -33070102,
          "DiscountUpbound": -7140768,
          "DiscountPrice": -89612018.10301942,
          "DiscountPercentage": false
        }
      ],
      "DoNotUseCategoryOptions": false,
      "DateCreated": "1940-11-09T08:06:28.312Z",
      "ListingTemplateID": 99219440,
      "ListingTemplateName": "exercitation dolore in deserunt",
      "LoginRequiredOptionID": -59374108,
      "LoginRequiredOptionName": "velit culpa occaecat",
      "LoginRequiredOptionRedirectTo": "nisi in",
      "AllowAccessCustomerGroupID": 56625779,
      "AllowAccessCustomerGroupName": "cillum nulla qui",
      "RMAMaxPeriod": "occaecat voluptate incididun",
      "CanonicalUrl": "nostrud proident aliqua",
      "TaxCode": ".R#",
      "DisplayText": "Duis eu consectetur proide",
      "MinimumQuantity": -86395086.43804161,
      "MaximumQuantity": -83848114.48124045,
      "AllowOnlyMultiples": false,
      "AllowFractionalQuantity": true,
      "QuantityOptions": "quis nostrud mollit nulla cillum",
      "GroupOptionsForQuantityPricing": false,
      "ApplyQuantityDiscountToOptions": false,
      "EnableMakeAnOfferFeature": true,
      "MinimumAcceptableOffer": "occ",
      "PriceLevel1": -76113886.60931867,
      "PriceLevel1Hide": false,
      "PriceLevel2": -2685019.806964606,
      "PriceLevel2Hide": true,
      "PriceLevel3": 27555636.37172766,
      "PriceLevel3Hide": false,
      "PriceLevel4": -32466343.359107345,
      "PriceLevel4Hide": false,
      "PriceLevel5": -35533768.53624486,
      "PriceLevel5Hide": true,
      "PriceLevel6": -49754764.17288869,
      "PriceLevel6Hide": true,
      "PriceLevel7": -99144164.53978108,
      "PriceLevel7Hide": true,
      "PriceLevel8": 55966055.8681418,
      "PriceLevel8Hide": false,
      "PriceLevel9": -88768331.34491347,
      "PriceLevel9Hide": true,
      "PriceLevel10": 84988986.90436819,
      "PriceLevel10Hide": true,
      "BuyButtonLink": "ea est",
      "ProductLink": "dolor ad exercitation",
      "Title": "laboris dolor reprehenderit cillum ipsum",
      "CustomFileName": "amet",
      "RedirectLink": "laborum pariatur ullamco deserunt",
      "MetaTags": "incididunt eu tempor",
      "SpecialInstructions": "ea Ut nulla",
      "AssignKey": true,
      "ReUseKeys": true,
      "SerialList": [
        {
          "SerialID": 22829981,
          "SerialUses": -51941719,
          "SerialCode": "ullamco labore cupidatat"
        }
      ],
      "EProductList": [
        {
          "FileNumber": 9395245,
          "FilePath": "labore"
        },
        {
          "FileNumber": 90816224,
          "FilePath": "voluptate Excepteur veniam in tempor"
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"CatalogID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  },
  {
    "Key":"CatalogID",
    "Value":"5678",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

This method is used to update multiple products in the database. No URL parameters should be included. See [Data Structures](#product-object) for more information on the product object.

<aside class="warning">
Please note: when sending information in any of the following collections of the product object, the product information contained in these keys will REPLACE the existing information, and not update it, because the existing information is deleted from the database and the new information is inserted. For example, if you are updating the images for a product, including that information in the ImageGalleryList collection will delete all existing images for this product and replace them with the new images. To update information within these keys without replacing existing information, use the specific web service for those items (e.g. /Products/{catalogId}/Images):

<ul>
<li>DistributorList</li>
<li>CategoryList</li>
<li>ImageGalleryList</li>
<li>OptionSetList</li>
<li>AdvancedOptionList</li>
<li>RelatedProductList</li>
<li>UpSellingItemList</li>
<li>DiscountList</li>
<li>SerialList</li>
<li>EProductList</li>
</ul>
</aside>

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Products`

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product(s) do not exist.

### Update a specific product by id
This method is used to update a single product record in the database. The {catalogid} parameter specifies which product record to update. See [Data Structures](#product-object) for more information on the product object.

> To update a product in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#product-object) for more information on the product object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"SKUInfo\": {
    \"CatalogID\": 53430377,
    \"SKU\": \"adipisicing reprehenderit consectetur ut aute\",
    \"Name\": \"aute nostrud\",
    \"Cost\": 72975781.36366543,
    \"Price\": 27990481.795528367,
    \"Currency\": \"minim sit exercitation\",
    \"RetailPrice\": 55871731.56949267,
    \"SalePrice\": -58277497.51034395,
    \"OnSale\": false,
    \"Stock\": 84553874.45930165
  },
  \"MFGID\": \"ad ipsum consequat\",
  \"ShortDescription\": \"in nulla exercitation repre\",
  \"ManufacturerID\": 97336733,
  \"ManufacturerName\": \"et pariatur sunt dolor\",
  \"DistributorList\": [
    {
      \"DistributorID\": 36746855,
      \"DistributorName\": \"exercitati\",
      \"DistributorItemCost\": 80086779.07145098,
      \"DistributorItemID\": \"a\",
      \"DistributorStockID\": \"laboris dolor nu\"
    },
    {
      \"DistributorID\": 53438661,
      \"DistributorName\": \"veniam consectetur aute\",
      \"DistributorItemCost\": -2045013.3467487097,
      \"DistributorItemID\": \"et commodo dolore non\",
      \"DistributorStockID\": \"Duis dolor irure\"
    }
  ],
  \"LastUpdate\": \"1973-02-20T12:44:10.049Z\",
  \"UserID\": \"commodo\",
  \"GTIN\": \"adipisicing dolore \",
  \"CategoryList\": [
    {
      \"CategoryID\": -39731715,
      \"CategoryName\": \"ea\"
    },
    {
      \"CategoryID\": 49643563,
      \"CategoryName\": \"irure adipisicing\"
    },
    {
      \"CategoryID\": -13633446,
      \"CategoryName\": \"irure Ut quis\"
    }
  ],
  \"ExternalIdsList\": [
    {
      \"ID\": -10424970,
      \"AdvancedOptionSufix\": \"proident in Lorem ut occaec\",
      \"ExternalId1\": \"ex eu\",
      \"ExternalId2\": \"quis enim\",
      \"ExternalIdType\": \"exercitat\"
    }
  ],
  \"CategoryExternalIdsList\": [
    {
      \"ID\": 44074511,
      \"CategoryID\": 48249566,
      \"ExternalId1\": \"esse eiusmod exercitation\",
      \"ExternalIdType\": \"ut laboris nostrud\"
    },
    {
      \"ID\": 57582755,
      \"CategoryID\": 59838543,
      \"ExternalId1\": \"mollit in\",
      \"ExternalIdType\": \"dolor\"
    }
  ],
  \"NonTaxable\": true,
  \"NotForSale\": false,
  \"Hide\": true,
  \"GiftCertificate\": true,
  \"HomeSpecial\": true,
  \"CategorySpecial\": false,
  \"NonSearchable\": false,
  \"GiftWrapItem\": true,
  \"ShipCost\": 6024793.697447434,
  \"Weight\": -2525536.41808939,
  \"Height\": 36049126.78142339,
  \"Width\": 90826802.05280727,
  \"Depth\": -88202316.63542596,
  \"SelfShip\": false,
  \"FreeShipping\": true,
  \"RewardPoints\": -13509021,
  \"RedeemPoints\": 386609,
  \"DisableRewards\": true,
  \"StockAlert\": -23054374,
  \"ReorderQuantity\": 24889835,
  \"InStockMessage\": \"dolore eiusmod fugiat voluptate\",
  \"OutOfStockMessage\": \"incididunt reprehenderit anim est\",
  \"BackOrderMessage\": \"labore\",
  \"InventoryControl\": -82090968,
  \"WarehouseLocation\": \"et quis\",
  \"WarehouseBin\": \"ipsum Lorem\",
  \"WarehouseAisle\": \"quis ea dolore ut\",
  \"WarehouseCustom\": \"ullamco cupidatat consequat consectetur\",
  \"Description\": \"pariatur ex in quis do\",
  \"Keywords\": \"et eu Ut\",
  \"ExtraField1\": \"consequat tempor ex\",
  \"ExtraField2\": \"sed est dolore\",
  \"ExtraField3\": \"cupidatat aute aliqua voluptate\",
  \"ExtraField4\": \"et dolor pariatur nisi veniam\",
  \"ExtraField5\": \"ut laboris aute\",
  \"ExtraField6\": \"Duis est\",
  \"ExtraField7\": \"veniam qui\",
  \"ExtraField8\": \"ad consectetur\",
  \"ExtraField9\": \"Ut veniam\",
  \"ExtraField10\": \"sit aute quis magna eiusmod\",
  \"ExtraField11\": \"aliqua eu consequat\",
  \"ExtraField12\": \"velit magna esse fugiat laborum\",
  \"ExtraField13\": \"cupidatat Ut tempor aliqua\",
  \"FeatureList\": [
    {
      \"FeatureID\": -13232624,
      \"FeatureTitle\": \"ut\",
      \"FeatureDescription\": \"anim velit ullamco ad am\"
    }
  ],
  \"PluginList\": {},
  \"SampleEnable\": false,
  \"SampleName\": \"eiusmod\",
  \"SampleSKUPrefix\": \"non ea sed\",
  \"SamplePrice\": -90390627.95033704,
  \"SampleWeight\": 30033912.057703644,
  \"ReviewAverage\": -2305013.478265837,
  \"ReviewCount\": -27761823,
  \"MainImageFile\": \"pariatur Ut officia v\",
  \"MainImageCaption\": \"enim\",
  \"ThumbnailFile\": \"dolor aliqua ut\",
  \"MediaFile\": \"cupidatat\",
  \"AdditionalImageFile2\": \"tempor\",
  \"AdditionalImageCaption2\": \"veniam\",
  \"AdditionalImageFile3\": \"sint Ut Lorem in\",
  \"AdditionalImageCaption3\": \"minim nostrud consequat aliquip\",
  \"AdditionalImageFile4\": \"ullamco\",
  \"AdditionalImageCaption4\": \"sed ad\",
  \"ImageGalleryList\": [
    {
      \"ImageGalleryID\": 29564791,
      \"ImageGalleryFile\": \"dolore ut\",
      \"ImageGalleryCaption\": \"in proident esse\",
      \"ImageGallerySorting\": 59376616
    },
    {
      \"ImageGalleryID\": -82246367,
      \"ImageGalleryFile\": \"mollit aliquip commod\",
      \"ImageGalleryCaption\": \"veniam\",
      \"ImageGallerySorting\": -41995661
    },
    {
      \"ImageGalleryID\": 12421427,
      \"ImageGalleryFile\": \"irure\",
      \"ImageGalleryCaption\": \"in non commodo veniam proident\",
      \"ImageGallerySorting\": 88043996
    },
    {
      \"ImageGalleryID\": -79841788,
      \"ImageGalleryFile\": \"Ut\",
      \"ImageGalleryCaption\": \"laborum deserunt\",
      \"ImageGallerySorting\": 23551499
    }
  ],
  \"OptionSetList\": [
    {
      \"OptionSetID\": -10703979,
      \"OptionSetName\": \"exercitation\",
      \"OptionSorting\": 66543507.60461685,
      \"OptionRequired\": true,
      \"OptionType\": \"Lorem\",
      \"OptionURL\": \"mollit in irure Lorem\",
      \"OptionAdditionalInformation\": \"elit in qui\",
      \"OptionSizeLimit\": 20334747,
      \"OptionList\": [
        {
          \"OptionID\": 92847604,
          \"OptionName\": \"fugiat velit mollit Duis\",
          \"OptionSelected\": false,
          \"OptionHide\": true,
          \"OptionValue\": 58192670.16976896,
          \"OptionPartNumber\": \"cupidatat of\",
          \"OptionSorting\": 90509710.66144401,
          \"OptionImagePath\": \"et dol\",
          \"OptionBundleCatalogId\": 85858126,
          \"OptionBundleQuantity\": 70946808
        },
        {
          \"OptionID\": -76943455,
          \"OptionName\": \"ut magna\",
          \"OptionSelected\": true,
          \"OptionHide\": false,
          \"OptionValue\": -48582362.07679134,
          \"OptionPartNumber\": \"in fugiat ipsum\",
          \"OptionSorting\": 68996553.1048452,
          \"OptionImagePath\": \"sint\",
          \"OptionBundleCatalogId\": 9269710,
          \"OptionBundleQuantity\": -67955981
        },
        {
          \"OptionID\": 18099502,
          \"OptionName\": \"Excepteur dolore consequat\",
          \"OptionSelected\": false,
          \"OptionHide\": true,
          \"OptionValue\": -7443025.00906451,
          \"OptionPartNumber\": \"laboris consectetur\",
          \"OptionSorting\": 65580203.23112324,
          \"OptionImagePath\": \"id aliqua irure in\",
          \"OptionBundleCatalogId\": 42612860,
          \"OptionBundleQuantity\": -114117
        },
        {
          \"OptionID\": 18740259,
          \"OptionName\": \"consequat in adipisicing laboris\",
          \"OptionSelected\": false,
          \"OptionHide\": false,
          \"OptionValue\": 70493531.2192486,
          \"OptionPartNumber\": \"id\",
          \"OptionSorting\": -821927.6079335809,
          \"OptionImagePath\": \"aliqua aute ut dolor sit\",
          \"OptionBundleCatalogId\": 64757144,
          \"OptionBundleQuantity\": -83473689
        }
      ]
    }
  ],
  \"AdvancedOptionList\": [
    {
      \"AdvancedOptionCode\": \"est\",
      \"AdvancedOptionSufix\": \"ipsum consectetur pariatur Ut\",
      \"AdvancedOptionName\": \"qui est esse Ut\",
      \"AdvancedOptionCost\": -10883921.368071541,
      \"AdvancedOptionStock\": -5744372,
      \"AdvancedOptionWeight\": -18422768.233305573,
      \"AdvancedOptionPrice\": -30775166.63925782,
      \"AdvancedOptionGTIN\": \"in\"
    },
    {
      \"AdvancedOptionCode\": \"officia aute Lorem pariat\",
      \"AdvancedOptionSufix\": \"enim Lorem occaecat in\",
      \"AdvancedOptionName\": \"est proident reprehenderit enim\",
      \"AdvancedOptionCost\": 46798051.43079755,
      \"AdvancedOptionStock\": -39369621,
      \"AdvancedOptionWeight\": 2847264.0829848945,
      \"AdvancedOptionPrice\": -96777067.28962487,
      \"AdvancedOptionGTIN\": \"ve\"
    },
    {
      \"AdvancedOptionCode\": \"in tempor consequat\",
      \"AdvancedOptionSufix\": \"incididunt ipsum\",
      \"AdvancedOptionName\": \"Excepteur Duis reprehenderit\",
      \"AdvancedOptionCost\": -52364324.39140644,
      \"AdvancedOptionStock\": -78748064,
      \"AdvancedOptionWeight\": -82442390.51808347,
      \"AdvancedOptionPrice\": -97888315.35563841,
      \"AdvancedOptionGTIN\": \"mollit adipisicing Excepteu\"
    },
    {
      \"AdvancedOptionCode\": \"in ullamco eu ad\",
      \"AdvancedOptionSufix\": \"nulla eu\",
      \"AdvancedOptionName\": \"voluptate irure occaecat quis nisi\",
      \"AdvancedOptionCost\": 26005642.69812748,
      \"AdvancedOptionStock\": 85842242,
      \"AdvancedOptionWeight\": 45071485.33939445,
      \"AdvancedOptionPrice\": 17382079.04131031,
      \"AdvancedOptionGTIN\": \"irure quis\"
    },
    {
      \"AdvancedOptionCode\": \"mollit eiusmod nostrud\",
      \"AdvancedOptionSufix\": \"ut non\",
      \"AdvancedOptionName\": \"of\",
      \"AdvancedOptionCost\": -97248859.12104893,
      \"AdvancedOptionStock\": -15246903,
      \"AdvancedOptionWeight\": -92647194.51222731,
      \"AdvancedOptionPrice\": 48699514.82852018,
      \"AdvancedOptionGTIN\": \"tempor est aliquip voluptate\"
    }
  ],
  \"RelatedProductList\": [
    {
      \"RelatedIndexID\": 10877627,
      \"RelatedProductID\": 95629732,
      \"RelatedProductSorting\": -69395077
    },
    {
      \"RelatedIndexID\": -65305293,
      \"RelatedProductID\": 79749951,
      \"RelatedProductSorting\": -61523488
    },
    {
      \"RelatedIndexID\": 94517534,
      \"RelatedProductID\": 82285026,
      \"RelatedProductSorting\": -31192985
    }
  ],
  \"UpSellingItemList\": [
    {
      \"UpSellingIndexID\": -45719889,
      \"UpSellingItemID\": 61864508,
      \"UpSellingItemSorting\": -93406759
    },
    {
      \"UpSellingIndexID\": 80201924,
      \"UpSellingItemID\": -60066401,
      \"UpSellingItemSorting\": -21985361
    },
    {
      \"UpSellingIndexID\": -70485574,
      \"UpSellingItemID\": -15324678,
      \"UpSellingItemSorting\": 10362384
    },
    {
      \"UpSellingIndexID\": -67636748,
      \"UpSellingItemID\": -81207976,
      \"UpSellingItemSorting\": 73473369
    },
    {
      \"UpSellingIndexID\": -42909612,
      \"UpSellingItemID\": -65500247,
      \"UpSellingItemSorting\": 97456034
    }
  ],
  \"DiscountList\": [
    {
      \"DiscountID\": -90142911,
      \"DiscountPriceLevel\": -23554282,
      \"DiscountLowbound\": 39191682,
      \"DiscountUpbound\": -69854312,
      \"DiscountPrice\": -81818293.17180069,
      \"DiscountPercentage\": true
    },
    {
      \"DiscountID\": 71938356,
      \"DiscountPriceLevel\": 43370180,
      \"DiscountLowbound\": 26908932,
      \"DiscountUpbound\": -45170455,
      \"DiscountPrice\": 1978781.539260149,
      \"DiscountPercentage\": true
    },
    {
      \"DiscountID\": -76957879,
      \"DiscountPriceLevel\": -54966076,
      \"DiscountLowbound\": -69206267,
      \"DiscountUpbound\": 52548335,
      \"DiscountPrice\": 54241565.32605839,
      \"DiscountPercentage\": false
    },
    {
      \"DiscountID\": -87302291,
      \"DiscountPriceLevel\": 31937405,
      \"DiscountLowbound\": -50008247,
      \"DiscountUpbound\": -55554687,
      \"DiscountPrice\": -39550181.63200883,
      \"DiscountPercentage\": true
    },
    {
      \"DiscountID\": 62708468,
      \"DiscountPriceLevel\": -45293155,
      \"DiscountLowbound\": -8613400,
      \"DiscountUpbound\": -81237464,
      \"DiscountPrice\": 79393330.96652365,
      \"DiscountPercentage\": false
    }
  ],
  \"DoNotUseCategoryOptions\": false,
  \"DateCreated\": \"1973-04-13T07:25:35.444Z\",
  \"ListingTemplateID\": 32273201,
  \"ListingTemplateName\": \"aute tempor quis ex \",
  \"LoginRequiredOptionID\": 65504481,
  \"LoginRequiredOptionName\": \"consectetur eu laboris reprehenderit\",
  \"LoginRequiredOptionRedirectTo\": \"proident\",
  \"AllowAccessCustomerGroupID\": -19973569,
  \"AllowAccessCustomerGroupName\": \"enim dolore ad proident\",
  \"RMAMaxPeriod\": \"paria\",
  \"CanonicalUrl\": \"ea veniam amet\",
  \"TaxCode\": \"q`9(s8\",
  \"DisplayText\": \"deserunt aliquip proident esse\",
  \"MinimumQuantity\": -8542744.726029202,
  \"MaximumQuantity\": -96025651.24411346,
  \"AllowOnlyMultiples\": true,
  \"AllowFractionalQuantity\": true,
  \"QuantityOptions\": \"sint ad proident ut laboris\",
  \"GroupOptionsForQuantityPricing\": false,
  \"ApplyQuantityDiscountToOptions\": false,
  \"EnableMakeAnOfferFeature\": false,
  \"MinimumAcceptableOffer\": \"ut \",
  \"PriceLevel1\": 65411422.50055501,
  \"PriceLevel1Hide\": false,
  \"PriceLevel2\": 46424553.52736002,
  \"PriceLevel2Hide\": false,
  \"PriceLevel3\": -99070313.950136,
  \"PriceLevel3Hide\": true,
  \"PriceLevel4\": -76719270.34783548,
  \"PriceLevel4Hide\": true,
  \"PriceLevel5\": 20152754.00776644,
  \"PriceLevel5Hide\": false,
  \"PriceLevel6\": 9750838.195950747,
  \"PriceLevel6Hide\": false,
  \"PriceLevel7\": -32855842.837624267,
  \"PriceLevel7Hide\": true,
  \"PriceLevel8\": 62730428.06406516,
  \"PriceLevel8Hide\": false,
  \"PriceLevel9\": -43868142.31773304,
  \"PriceLevel9Hide\": false,
  \"PriceLevel10\": 30134372.364892453,
  \"PriceLevel10Hide\": true,
  \"BuyButtonLink\": \"nulla esse sint tempor\",
  \"ProductLink\": \"non occaecat officia\",
  \"Title\": \"in dolore\",
  \"CustomFileName\": \"sint adipisicing consectetur commodo\",
  \"RedirectLink\": \"ullamco eu sit officia\",
  \"MetaTags\": \"cupidatat deserunt mollit\",
  \"SpecialInstructions\": \"voluptate aliqua Lorem\",
  \"AssignKey\": false,
  \"ReUseKeys\": true,
  \"SerialList\": [
    {
      \"SerialID\": -8725466,
      \"SerialUses\": -30885336,
      \"SerialCode\": \"id Ut\"
    },
    {
      \"SerialID\": 83193544,
      \"SerialUses\": 47038811,
      \"SerialCode\": \"in id esse\"
    },
    {
      \"SerialID\": -82758751,
      \"SerialUses\": 29080949,
      \"SerialCode\": \"deserunt fugiat ullamco anim aute\"
    },
    {
      \"SerialID\": -32087560,
      \"SerialUses\": 45223921,
      \"SerialCode\": \"et culpa\"
    },
    {
      \"SerialID\": 10718131,
      \"SerialUses\": 57813828,
      \"SerialCode\": \"nostrud laboris\"
    }
  ],
  \"EProductList\": [
    {
      \"FileNumber\": -35806385,
      \"FilePath\": \"culpa n\"
    },
    {
      \"FileNumber\": 49531231,
      \"FilePath\": \"sunt eu amet conse\"
    },
    {
      \"FileNumber\": -7255798,
      \"FilePath\": \"enim tempor\"
    },
    {
      \"FileNumber\": -88625375,
      \"FilePath\": \"est\"
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
  
    using (var content = new StringContent("{  \"SKUInfo\": {    \"CatalogID\": 53430377,    \"SKU\": \"adipisicing reprehenderit consectetur ut aute\",    \"Name\": \"aute nostrud\",    \"Cost\": 72975781.36366543,    \"Price\": 27990481.795528367,    \"Currency\": \"minim sit exercitation\",    \"RetailPrice\": 55871731.56949267,    \"SalePrice\": -58277497.51034395,    \"OnSale\": false,    \"Stock\": 84553874.45930165  },  \"MFGID\": \"ad ipsum consequat\",  \"ShortDescription\": \"in nulla exercitation repre\",  \"ManufacturerID\": 97336733,  \"ManufacturerName\": \"et pariatur sunt dolor\",  \"DistributorList\": [    {      \"DistributorID\": 36746855,      \"DistributorName\": \"exercitati\",      \"DistributorItemCost\": 80086779.07145098,      \"DistributorItemID\": \"a\",      \"DistributorStockID\": \"laboris dolor nu\"    },    {      \"DistributorID\": 53438661,      \"DistributorName\": \"veniam consectetur aute\",      \"DistributorItemCost\": -2045013.3467487097,      \"DistributorItemID\": \"et commodo dolore non\",      \"DistributorStockID\": \"Duis dolor irure\"    }  ],  \"LastUpdate\": \"1973-02-20T12:44:10.049Z\",  \"UserID\": \"commodo\",  \"GTIN\": \"adipisicing dolore \",  \"CategoryList\": [    {      \"CategoryID\": -39731715,      \"CategoryName\": \"ea\"    },    {      \"CategoryID\": 49643563,      \"CategoryName\": \"irure adipisicing\"    },    {      \"CategoryID\": -13633446,      \"CategoryName\": \"irure Ut quis\"    }  ],  \"ExternalIdsList\": [    {      \"ID\": -10424970,      \"AdvancedOptionSufix\": \"proident in Lorem ut occaec\",      \"ExternalId1\": \"ex eu\",      \"ExternalId2\": \"quis enim\",      \"ExternalIdType\": \"exercitat\"    }  ],  \"CategoryExternalIdsList\": [    {      \"ID\": 44074511,      \"CategoryID\": 48249566,      \"ExternalId1\": \"esse eiusmod exercitation\",      \"ExternalIdType\": \"ut laboris nostrud\"    },    {      \"ID\": 57582755,      \"CategoryID\": 59838543,      \"ExternalId1\": \"mollit in\",      \"ExternalIdType\": \"dolor\"    }  ],  \"NonTaxable\": true,  \"NotForSale\": false,  \"Hide\": true,  \"GiftCertificate\": true,  \"HomeSpecial\": true,  \"CategorySpecial\": false,  \"NonSearchable\": false,  \"GiftWrapItem\": true,  \"ShipCost\": 6024793.697447434,  \"Weight\": -2525536.41808939,  \"Height\": 36049126.78142339,  \"Width\": 90826802.05280727,  \"Depth\": -88202316.63542596,  \"SelfShip\": false,  \"FreeShipping\": true,  \"RewardPoints\": -13509021,  \"RedeemPoints\": 386609,  \"DisableRewards\": true,  \"StockAlert\": -23054374,  \"ReorderQuantity\": 24889835,  \"InStockMessage\": \"dolore eiusmod fugiat voluptate\",  \"OutOfStockMessage\": \"incididunt reprehenderit anim est\",  \"BackOrderMessage\": \"labore\",  \"InventoryControl\": -82090968,  \"WarehouseLocation\": \"et quis\",  \"WarehouseBin\": \"ipsum Lorem\",  \"WarehouseAisle\": \"quis ea dolore ut\",  \"WarehouseCustom\": \"ullamco cupidatat consequat consectetur\",  \"Description\": \"pariatur ex in quis do\",  \"Keywords\": \"et eu Ut\",  \"ExtraField1\": \"consequat tempor ex\",  \"ExtraField2\": \"sed est dolore\",  \"ExtraField3\": \"cupidatat aute aliqua voluptate\",  \"ExtraField4\": \"et dolor pariatur nisi veniam\",  \"ExtraField5\": \"ut laboris aute\",  \"ExtraField6\": \"Duis est\",  \"ExtraField7\": \"veniam qui\",  \"ExtraField8\": \"ad consectetur\",  \"ExtraField9\": \"Ut veniam\",  \"ExtraField10\": \"sit aute quis magna eiusmod\",  \"ExtraField11\": \"aliqua eu consequat\",  \"ExtraField12\": \"velit magna esse fugiat laborum\",  \"ExtraField13\": \"cupidatat Ut tempor aliqua\",  \"FeatureList\": [    {      \"FeatureID\": -13232624,      \"FeatureTitle\": \"ut\",      \"FeatureDescription\": \"anim velit ullamco ad am\"    }  ],  \"PluginList\": {},  \"SampleEnable\": false,  \"SampleName\": \"eiusmod\",  \"SampleSKUPrefix\": \"non ea sed\",  \"SamplePrice\": -90390627.95033704,  \"SampleWeight\": 30033912.057703644,  \"ReviewAverage\": -2305013.478265837,  \"ReviewCount\": -27761823,  \"MainImageFile\": \"pariatur Ut officia v\",  \"MainImageCaption\": \"enim\",  \"ThumbnailFile\": \"dolor aliqua ut\",  \"MediaFile\": \"cupidatat\",  \"AdditionalImageFile2\": \"tempor\",  \"AdditionalImageCaption2\": \"veniam\",  \"AdditionalImageFile3\": \"sint Ut Lorem in\",  \"AdditionalImageCaption3\": \"minim nostrud consequat aliquip\",  \"AdditionalImageFile4\": \"ullamco\",  \"AdditionalImageCaption4\": \"sed ad\",  \"ImageGalleryList\": [    {      \"ImageGalleryID\": 29564791,      \"ImageGalleryFile\": \"dolore ut\",      \"ImageGalleryCaption\": \"in proident esse\",      \"ImageGallerySorting\": 59376616    },    {      \"ImageGalleryID\": -82246367,      \"ImageGalleryFile\": \"mollit aliquip commod\",      \"ImageGalleryCaption\": \"veniam\",      \"ImageGallerySorting\": -41995661    },    {      \"ImageGalleryID\": 12421427,      \"ImageGalleryFile\": \"irure\",      \"ImageGalleryCaption\": \"in non commodo veniam proident\",      \"ImageGallerySorting\": 88043996    },    {      \"ImageGalleryID\": -79841788,      \"ImageGalleryFile\": \"Ut\",      \"ImageGalleryCaption\": \"laborum deserunt\",      \"ImageGallerySorting\": 23551499    }  ],  \"OptionSetList\": [    {      \"OptionSetID\": -10703979,      \"OptionSetName\": \"exercitation\",      \"OptionSorting\": 66543507.60461685,      \"OptionRequired\": true,      \"OptionType\": \"Lorem\",      \"OptionURL\": \"mollit in irure Lorem\",      \"OptionAdditionalInformation\": \"elit in qui\",      \"OptionSizeLimit\": 20334747,      \"OptionList\": [        {          \"OptionID\": 92847604,          \"OptionName\": \"fugiat velit mollit Duis\",          \"OptionSelected\": false,          \"OptionHide\": true,          \"OptionValue\": 58192670.16976896,          \"OptionPartNumber\": \"cupidatat of\",          \"OptionSorting\": 90509710.66144401,          \"OptionImagePath\": \"et dol\",          \"OptionBundleCatalogId\": 85858126,          \"OptionBundleQuantity\": 70946808        },        {          \"OptionID\": -76943455,          \"OptionName\": \"ut magna\",          \"OptionSelected\": true,          \"OptionHide\": false,          \"OptionValue\": -48582362.07679134,          \"OptionPartNumber\": \"in fugiat ipsum\",          \"OptionSorting\": 68996553.1048452,          \"OptionImagePath\": \"sint\",          \"OptionBundleCatalogId\": 9269710,          \"OptionBundleQuantity\": -67955981        },        {          \"OptionID\": 18099502,          \"OptionName\": \"Excepteur dolore consequat\",          \"OptionSelected\": false,          \"OptionHide\": true,          \"OptionValue\": -7443025.00906451,          \"OptionPartNumber\": \"laboris consectetur\",          \"OptionSorting\": 65580203.23112324,          \"OptionImagePath\": \"id aliqua irure in\",          \"OptionBundleCatalogId\": 42612860,          \"OptionBundleQuantity\": -114117        },        {          \"OptionID\": 18740259,          \"OptionName\": \"consequat in adipisicing laboris\",          \"OptionSelected\": false,          \"OptionHide\": false,          \"OptionValue\": 70493531.2192486,          \"OptionPartNumber\": \"id\",          \"OptionSorting\": -821927.6079335809,          \"OptionImagePath\": \"aliqua aute ut dolor sit\",          \"OptionBundleCatalogId\": 64757144,          \"OptionBundleQuantity\": -83473689        }      ]    }  ],  \"AdvancedOptionList\": [    {      \"AdvancedOptionCode\": \"est\",      \"AdvancedOptionSufix\": \"ipsum consectetur pariatur Ut\",      \"AdvancedOptionName\": \"qui est esse Ut\",      \"AdvancedOptionCost\": -10883921.368071541,      \"AdvancedOptionStock\": -5744372,      \"AdvancedOptionWeight\": -18422768.233305573,      \"AdvancedOptionPrice\": -30775166.63925782,      \"AdvancedOptionGTIN\": \"in\"    },    {      \"AdvancedOptionCode\": \"officia aute Lorem pariat\",      \"AdvancedOptionSufix\": \"enim Lorem occaecat in\",      \"AdvancedOptionName\": \"est proident reprehenderit enim\",      \"AdvancedOptionCost\": 46798051.43079755,      \"AdvancedOptionStock\": -39369621,      \"AdvancedOptionWeight\": 2847264.0829848945,      \"AdvancedOptionPrice\": -96777067.28962487,      \"AdvancedOptionGTIN\": \"ve\"    },    {      \"AdvancedOptionCode\": \"in tempor consequat\",      \"AdvancedOptionSufix\": \"incididunt ipsum\",      \"AdvancedOptionName\": \"Excepteur Duis reprehenderit\",      \"AdvancedOptionCost\": -52364324.39140644,      \"AdvancedOptionStock\": -78748064,      \"AdvancedOptionWeight\": -82442390.51808347,      \"AdvancedOptionPrice\": -97888315.35563841,      \"AdvancedOptionGTIN\": \"mollit adipisicing Excepteu\"    },    {      \"AdvancedOptionCode\": \"in ullamco eu ad\",      \"AdvancedOptionSufix\": \"nulla eu\",      \"AdvancedOptionName\": \"voluptate irure occaecat quis nisi\",      \"AdvancedOptionCost\": 26005642.69812748,      \"AdvancedOptionStock\": 85842242,      \"AdvancedOptionWeight\": 45071485.33939445,      \"AdvancedOptionPrice\": 17382079.04131031,      \"AdvancedOptionGTIN\": \"irure quis\"    },    {      \"AdvancedOptionCode\": \"mollit eiusmod nostrud\",      \"AdvancedOptionSufix\": \"ut non\",      \"AdvancedOptionName\": \"of\",      \"AdvancedOptionCost\": -97248859.12104893,      \"AdvancedOptionStock\": -15246903,      \"AdvancedOptionWeight\": -92647194.51222731,      \"AdvancedOptionPrice\": 48699514.82852018,      \"AdvancedOptionGTIN\": \"tempor est aliquip voluptate\"    }  ],  \"RelatedProductList\": [    {      \"RelatedIndexID\": 10877627,      \"RelatedProductID\": 95629732,      \"RelatedProductSorting\": -69395077    },    {      \"RelatedIndexID\": -65305293,      \"RelatedProductID\": 79749951,      \"RelatedProductSorting\": -61523488    },    {      \"RelatedIndexID\": 94517534,      \"RelatedProductID\": 82285026,      \"RelatedProductSorting\": -31192985    }  ],  \"UpSellingItemList\": [    {      \"UpSellingIndexID\": -45719889,      \"UpSellingItemID\": 61864508,      \"UpSellingItemSorting\": -93406759    },    {      \"UpSellingIndexID\": 80201924,      \"UpSellingItemID\": -60066401,      \"UpSellingItemSorting\": -21985361    },    {      \"UpSellingIndexID\": -70485574,      \"UpSellingItemID\": -15324678,      \"UpSellingItemSorting\": 10362384    },    {      \"UpSellingIndexID\": -67636748,      \"UpSellingItemID\": -81207976,      \"UpSellingItemSorting\": 73473369    },    {      \"UpSellingIndexID\": -42909612,      \"UpSellingItemID\": -65500247,      \"UpSellingItemSorting\": 97456034    }  ],  \"DiscountList\": [    {      \"DiscountID\": -90142911,      \"DiscountPriceLevel\": -23554282,      \"DiscountLowbound\": 39191682,      \"DiscountUpbound\": -69854312,      \"DiscountPrice\": -81818293.17180069,      \"DiscountPercentage\": true    },    {      \"DiscountID\": 71938356,      \"DiscountPriceLevel\": 43370180,      \"DiscountLowbound\": 26908932,      \"DiscountUpbound\": -45170455,      \"DiscountPrice\": 1978781.539260149,      \"DiscountPercentage\": true    },    {      \"DiscountID\": -76957879,      \"DiscountPriceLevel\": -54966076,      \"DiscountLowbound\": -69206267,      \"DiscountUpbound\": 52548335,      \"DiscountPrice\": 54241565.32605839,      \"DiscountPercentage\": false    },    {      \"DiscountID\": -87302291,      \"DiscountPriceLevel\": 31937405,      \"DiscountLowbound\": -50008247,      \"DiscountUpbound\": -55554687,      \"DiscountPrice\": -39550181.63200883,      \"DiscountPercentage\": true    },    {      \"DiscountID\": 62708468,      \"DiscountPriceLevel\": -45293155,      \"DiscountLowbound\": -8613400,      \"DiscountUpbound\": -81237464,      \"DiscountPrice\": 79393330.96652365,      \"DiscountPercentage\": false    }  ],  \"DoNotUseCategoryOptions\": false,  \"DateCreated\": \"1973-04-13T07:25:35.444Z\",  \"ListingTemplateID\": 32273201,  \"ListingTemplateName\": \"aute tempor quis ex \",  \"LoginRequiredOptionID\": 65504481,  \"LoginRequiredOptionName\": \"consectetur eu laboris reprehenderit\",  \"LoginRequiredOptionRedirectTo\": \"proident\",  \"AllowAccessCustomerGroupID\": -19973569,  \"AllowAccessCustomerGroupName\": \"enim dolore ad proident\",  \"RMAMaxPeriod\": \"paria\",  \"CanonicalUrl\": \"ea veniam amet\",  \"TaxCode\": \"q`9(s8\",  \"DisplayText\": \"deserunt aliquip proident esse\",  \"MinimumQuantity\": -8542744.726029202,  \"MaximumQuantity\": -96025651.24411346,  \"AllowOnlyMultiples\": true,  \"AllowFractionalQuantity\": true,  \"QuantityOptions\": \"sint ad proident ut laboris\",  \"GroupOptionsForQuantityPricing\": false,  \"ApplyQuantityDiscountToOptions\": false,  \"EnableMakeAnOfferFeature\": false,  \"MinimumAcceptableOffer\": \"ut \",  \"PriceLevel1\": 65411422.50055501,  \"PriceLevel1Hide\": false,  \"PriceLevel2\": 46424553.52736002,  \"PriceLevel2Hide\": false,  \"PriceLevel3\": -99070313.950136,  \"PriceLevel3Hide\": true,  \"PriceLevel4\": -76719270.34783548,  \"PriceLevel4Hide\": true,  \"PriceLevel5\": 20152754.00776644,  \"PriceLevel5Hide\": false,  \"PriceLevel6\": 9750838.195950747,  \"PriceLevel6Hide\": false,  \"PriceLevel7\": -32855842.837624267,  \"PriceLevel7Hide\": true,  \"PriceLevel8\": 62730428.06406516,  \"PriceLevel8Hide\": false,  \"PriceLevel9\": -43868142.31773304,  \"PriceLevel9Hide\": false,  \"PriceLevel10\": 30134372.364892453,  \"PriceLevel10Hide\": true,  \"BuyButtonLink\": \"nulla esse sint tempor\",  \"ProductLink\": \"non occaecat officia\",  \"Title\": \"in dolore\",  \"CustomFileName\": \"sint adipisicing consectetur commodo\",  \"RedirectLink\": \"ullamco eu sit officia\",  \"MetaTags\": \"cupidatat deserunt mollit\",  \"SpecialInstructions\": \"voluptate aliqua Lorem\",  \"AssignKey\": false,  \"ReUseKeys\": true,  \"SerialList\": [    {      \"SerialID\": -8725466,      \"SerialUses\": -30885336,      \"SerialCode\": \"id Ut\"    },    {      \"SerialID\": 83193544,      \"SerialUses\": 47038811,      \"SerialCode\": \"in id esse\"    },    {      \"SerialID\": -82758751,      \"SerialUses\": 29080949,      \"SerialCode\": \"deserunt fugiat ullamco anim aute\"    },    {      \"SerialID\": -32087560,      \"SerialUses\": 45223921,      \"SerialCode\": \"et culpa\"    },    {      \"SerialID\": 10718131,      \"SerialUses\": 57813828,      \"SerialCode\": \"nostrud laboris\"    }  ],  \"EProductList\": [    {      \"FileNumber\": -35806385,      \"FilePath\": \"culpa n\"    },    {      \"FileNumber\": 49531231,      \"FilePath\": \"sunt eu amet conse\"    },    {      \"FileNumber\": -7255798,      \"FilePath\": \"enim tempor\"    },    {      \"FileNumber\": -88625375,      \"FilePath\": \"est\"    }  ]}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Products/{catalogid}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}');

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
  'SKUInfo': {
    'CatalogID': 53430377,
    'SKU': 'adipisicing reprehenderit consectetur ut aute',
    'Name': 'aute nostrud',
    'Cost': 72975781.36366543,
    'Price': 27990481.795528367,
    'Currency': 'minim sit exercitation',
    'RetailPrice': 55871731.56949267,
    'SalePrice': -58277497.51034395,
    'OnSale': false,
    'Stock': 84553874.45930165
  },
  'MFGID': 'ad ipsum consequat',
  'ShortDescription': 'in nulla exercitation repre',
  'ManufacturerID': 97336733,
  'ManufacturerName': 'et pariatur sunt dolor',
  'DistributorList': [
    {
      'DistributorID': 36746855,
      'DistributorName': 'exercitati',
      'DistributorItemCost': 80086779.07145098,
      'DistributorItemID': 'a',
      'DistributorStockID': 'laboris dolor nu'
    },
    {
      'DistributorID': 53438661,
      'DistributorName': 'veniam consectetur aute',
      'DistributorItemCost': -2045013.3467487097,
      'DistributorItemID': 'et commodo dolore non',
      'DistributorStockID': 'Duis dolor irure'
    }
  ],
  'LastUpdate': '1973-02-20T12:44:10.049Z',
  'UserID': 'commodo',
  'GTIN': 'adipisicing dolore ',
  'CategoryList': [
    {
      'CategoryID': -39731715,
      'CategoryName': 'ea'
    },
    {
      'CategoryID': 49643563,
      'CategoryName': 'irure adipisicing'
    },
    {
      'CategoryID': -13633446,
      'CategoryName': 'irure Ut quis'
    }
  ],
  'ExternalIdsList': [
    {
      'ID': -10424970,
      'AdvancedOptionSufix': 'proident in Lorem ut occaec',
      'ExternalId1': 'ex eu',
      'ExternalId2': 'quis enim',
      'ExternalIdType': 'exercitat'
    }
  ],
  'CategoryExternalIdsList': [
    {
      'ID': 44074511,
      'CategoryID': 48249566,
      'ExternalId1': 'esse eiusmod exercitation',
      'ExternalIdType': 'ut laboris nostrud'
    },
    {
      'ID': 57582755,
      'CategoryID': 59838543,
      'ExternalId1': 'mollit in',
      'ExternalIdType': 'dolor'
    }
  ],
  'NonTaxable': true,
  'NotForSale': false,
  'Hide': true,
  'GiftCertificate': true,
  'HomeSpecial': true,
  'CategorySpecial': false,
  'NonSearchable': false,
  'GiftWrapItem': true,
  'ShipCost': 6024793.697447434,
  'Weight': -2525536.41808939,
  'Height': 36049126.78142339,
  'Width': 90826802.05280727,
  'Depth': -88202316.63542596,
  'SelfShip': false,
  'FreeShipping': true,
  'RewardPoints': -13509021,
  'RedeemPoints': 386609,
  'DisableRewards': true,
  'StockAlert': -23054374,
  'ReorderQuantity': 24889835,
  'InStockMessage': 'dolore eiusmod fugiat voluptate',
  'OutOfStockMessage': 'incididunt reprehenderit anim est',
  'BackOrderMessage': 'labore',
  'InventoryControl': -82090968,
  'WarehouseLocation': 'et quis',
  'WarehouseBin': 'ipsum Lorem',
  'WarehouseAisle': 'quis ea dolore ut',
  'WarehouseCustom': 'ullamco cupidatat consequat consectetur',
  'Description': 'pariatur ex in quis do',
  'Keywords': 'et eu Ut',
  'ExtraField1': 'consequat tempor ex',
  'ExtraField2': 'sed est dolore',
  'ExtraField3': 'cupidatat aute aliqua voluptate',
  'ExtraField4': 'et dolor pariatur nisi veniam',
  'ExtraField5': 'ut laboris aute',
  'ExtraField6': 'Duis est',
  'ExtraField7': 'veniam qui',
  'ExtraField8': 'ad consectetur',
  'ExtraField9': 'Ut veniam',
  'ExtraField10': 'sit aute quis magna eiusmod',
  'ExtraField11': 'aliqua eu consequat',
  'ExtraField12': 'velit magna esse fugiat laborum',
  'ExtraField13': 'cupidatat Ut tempor aliqua',
  'FeatureList': [
    {
      'FeatureID': -13232624,
      'FeatureTitle': 'ut',
      'FeatureDescription': 'anim velit ullamco ad am'
    }
  ],
  'PluginList': {},
  'SampleEnable': false,
  'SampleName': 'eiusmod',
  'SampleSKUPrefix': 'non ea sed',
  'SamplePrice': -90390627.95033704,
  'SampleWeight': 30033912.057703644,
  'ReviewAverage': -2305013.478265837,
  'ReviewCount': -27761823,
  'MainImageFile': 'pariatur Ut officia v',
  'MainImageCaption': 'enim',
  'ThumbnailFile': 'dolor aliqua ut',
  'MediaFile': 'cupidatat',
  'AdditionalImageFile2': 'tempor',
  'AdditionalImageCaption2': 'veniam',
  'AdditionalImageFile3': 'sint Ut Lorem in',
  'AdditionalImageCaption3': 'minim nostrud consequat aliquip',
  'AdditionalImageFile4': 'ullamco',
  'AdditionalImageCaption4': 'sed ad',
  'ImageGalleryList': [
    {
      'ImageGalleryID': 29564791,
      'ImageGalleryFile': 'dolore ut',
      'ImageGalleryCaption': 'in proident esse',
      'ImageGallerySorting': 59376616
    },
    {
      'ImageGalleryID': -82246367,
      'ImageGalleryFile': 'mollit aliquip commod',
      'ImageGalleryCaption': 'veniam',
      'ImageGallerySorting': -41995661
    },
    {
      'ImageGalleryID': 12421427,
      'ImageGalleryFile': 'irure',
      'ImageGalleryCaption': 'in non commodo veniam proident',
      'ImageGallerySorting': 88043996
    },
    {
      'ImageGalleryID': -79841788,
      'ImageGalleryFile': 'Ut',
      'ImageGalleryCaption': 'laborum deserunt',
      'ImageGallerySorting': 23551499
    }
  ],
  'OptionSetList': [
    {
      'OptionSetID': -10703979,
      'OptionSetName': 'exercitation',
      'OptionSorting': 66543507.60461685,
      'OptionRequired': true,
      'OptionType': 'Lorem',
      'OptionURL': 'mollit in irure Lorem',
      'OptionAdditionalInformation': 'elit in qui',
      'OptionSizeLimit': 20334747,
      'OptionList': [
        {
          'OptionID': 92847604,
          'OptionName': 'fugiat velit mollit Duis',
          'OptionSelected': false,
          'OptionHide': true,
          'OptionValue': 58192670.16976896,
          'OptionPartNumber': 'cupidatat of',
          'OptionSorting': 90509710.66144401,
          'OptionImagePath': 'et dol',
          'OptionBundleCatalogId': 85858126,
          'OptionBundleQuantity': 70946808
        },
        {
          'OptionID': -76943455,
          'OptionName': 'ut magna',
          'OptionSelected': true,
          'OptionHide': false,
          'OptionValue': -48582362.07679134,
          'OptionPartNumber': 'in fugiat ipsum',
          'OptionSorting': 68996553.1048452,
          'OptionImagePath': 'sint',
          'OptionBundleCatalogId': 9269710,
          'OptionBundleQuantity': -67955981
        },
        {
          'OptionID': 18099502,
          'OptionName': 'Excepteur dolore consequat',
          'OptionSelected': false,
          'OptionHide': true,
          'OptionValue': -7443025.00906451,
          'OptionPartNumber': 'laboris consectetur',
          'OptionSorting': 65580203.23112324,
          'OptionImagePath': 'id aliqua irure in',
          'OptionBundleCatalogId': 42612860,
          'OptionBundleQuantity': -114117
        },
        {
          'OptionID': 18740259,
          'OptionName': 'consequat in adipisicing laboris',
          'OptionSelected': false,
          'OptionHide': false,
          'OptionValue': 70493531.2192486,
          'OptionPartNumber': 'id',
          'OptionSorting': -821927.6079335809,
          'OptionImagePath': 'aliqua aute ut dolor sit',
          'OptionBundleCatalogId': 64757144,
          'OptionBundleQuantity': -83473689
        }
      ]
    }
  ],
  'AdvancedOptionList': [
    {
      'AdvancedOptionCode': 'est',
      'AdvancedOptionSufix': 'ipsum consectetur pariatur Ut',
      'AdvancedOptionName': 'qui est esse Ut',
      'AdvancedOptionCost': -10883921.368071541,
      'AdvancedOptionStock': -5744372,
      'AdvancedOptionWeight': -18422768.233305573,
      'AdvancedOptionPrice': -30775166.63925782,
      'AdvancedOptionGTIN': 'in'
    },
    {
      'AdvancedOptionCode': 'officia aute Lorem pariat',
      'AdvancedOptionSufix': 'enim Lorem occaecat in',
      'AdvancedOptionName': 'est proident reprehenderit enim',
      'AdvancedOptionCost': 46798051.43079755,
      'AdvancedOptionStock': -39369621,
      'AdvancedOptionWeight': 2847264.0829848945,
      'AdvancedOptionPrice': -96777067.28962487,
      'AdvancedOptionGTIN': 've'
    },
    {
      'AdvancedOptionCode': 'in tempor consequat',
      'AdvancedOptionSufix': 'incididunt ipsum',
      'AdvancedOptionName': 'Excepteur Duis reprehenderit',
      'AdvancedOptionCost': -52364324.39140644,
      'AdvancedOptionStock': -78748064,
      'AdvancedOptionWeight': -82442390.51808347,
      'AdvancedOptionPrice': -97888315.35563841,
      'AdvancedOptionGTIN': 'mollit adipisicing Excepteu'
    },
    {
      'AdvancedOptionCode': 'in ullamco eu ad',
      'AdvancedOptionSufix': 'nulla eu',
      'AdvancedOptionName': 'voluptate irure occaecat quis nisi',
      'AdvancedOptionCost': 26005642.69812748,
      'AdvancedOptionStock': 85842242,
      'AdvancedOptionWeight': 45071485.33939445,
      'AdvancedOptionPrice': 17382079.04131031,
      'AdvancedOptionGTIN': 'irure quis'
    },
    {
      'AdvancedOptionCode': 'mollit eiusmod nostrud',
      'AdvancedOptionSufix': 'ut non',
      'AdvancedOptionName': 'of',
      'AdvancedOptionCost': -97248859.12104893,
      'AdvancedOptionStock': -15246903,
      'AdvancedOptionWeight': -92647194.51222731,
      'AdvancedOptionPrice': 48699514.82852018,
      'AdvancedOptionGTIN': 'tempor est aliquip voluptate'
    }
  ],
  'RelatedProductList': [
    {
      'RelatedIndexID': 10877627,
      'RelatedProductID': 95629732,
      'RelatedProductSorting': -69395077
    },
    {
      'RelatedIndexID': -65305293,
      'RelatedProductID': 79749951,
      'RelatedProductSorting': -61523488
    },
    {
      'RelatedIndexID': 94517534,
      'RelatedProductID': 82285026,
      'RelatedProductSorting': -31192985
    }
  ],
  'UpSellingItemList': [
    {
      'UpSellingIndexID': -45719889,
      'UpSellingItemID': 61864508,
      'UpSellingItemSorting': -93406759
    },
    {
      'UpSellingIndexID': 80201924,
      'UpSellingItemID': -60066401,
      'UpSellingItemSorting': -21985361
    },
    {
      'UpSellingIndexID': -70485574,
      'UpSellingItemID': -15324678,
      'UpSellingItemSorting': 10362384
    },
    {
      'UpSellingIndexID': -67636748,
      'UpSellingItemID': -81207976,
      'UpSellingItemSorting': 73473369
    },
    {
      'UpSellingIndexID': -42909612,
      'UpSellingItemID': -65500247,
      'UpSellingItemSorting': 97456034
    }
  ],
  'DiscountList': [
    {
      'DiscountID': -90142911,
      'DiscountPriceLevel': -23554282,
      'DiscountLowbound': 39191682,
      'DiscountUpbound': -69854312,
      'DiscountPrice': -81818293.17180069,
      'DiscountPercentage': true
    },
    {
      'DiscountID': 71938356,
      'DiscountPriceLevel': 43370180,
      'DiscountLowbound': 26908932,
      'DiscountUpbound': -45170455,
      'DiscountPrice': 1978781.539260149,
      'DiscountPercentage': true
    },
    {
      'DiscountID': -76957879,
      'DiscountPriceLevel': -54966076,
      'DiscountLowbound': -69206267,
      'DiscountUpbound': 52548335,
      'DiscountPrice': 54241565.32605839,
      'DiscountPercentage': false
    },
    {
      'DiscountID': -87302291,
      'DiscountPriceLevel': 31937405,
      'DiscountLowbound': -50008247,
      'DiscountUpbound': -55554687,
      'DiscountPrice': -39550181.63200883,
      'DiscountPercentage': true
    },
    {
      'DiscountID': 62708468,
      'DiscountPriceLevel': -45293155,
      'DiscountLowbound': -8613400,
      'DiscountUpbound': -81237464,
      'DiscountPrice': 79393330.96652365,
      'DiscountPercentage': false
    }
  ],
  'DoNotUseCategoryOptions': false,
  'DateCreated': '1973-04-13T07:25:35.444Z',
  'ListingTemplateID': 32273201,
  'ListingTemplateName': 'aute tempor quis ex ',
  'LoginRequiredOptionID': 65504481,
  'LoginRequiredOptionName': 'consectetur eu laboris reprehenderit',
  'LoginRequiredOptionRedirectTo': 'proident',
  'AllowAccessCustomerGroupID': -19973569,
  'AllowAccessCustomerGroupName': 'enim dolore ad proident',
  'RMAMaxPeriod': 'paria',
  'CanonicalUrl': 'ea veniam amet',
  'TaxCode': 'q`9(s8',
  'DisplayText': 'deserunt aliquip proident esse',
  'MinimumQuantity': -8542744.726029202,
  'MaximumQuantity': -96025651.24411346,
  'AllowOnlyMultiples': true,
  'AllowFractionalQuantity': true,
  'QuantityOptions': 'sint ad proident ut laboris',
  'GroupOptionsForQuantityPricing': false,
  'ApplyQuantityDiscountToOptions': false,
  'EnableMakeAnOfferFeature': false,
  'MinimumAcceptableOffer': 'ut ',
  'PriceLevel1': 65411422.50055501,
  'PriceLevel1Hide': false,
  'PriceLevel2': 46424553.52736002,
  'PriceLevel2Hide': false,
  'PriceLevel3': -99070313.950136,
  'PriceLevel3Hide': true,
  'PriceLevel4': -76719270.34783548,
  'PriceLevel4Hide': true,
  'PriceLevel5': 20152754.00776644,
  'PriceLevel5Hide': false,
  'PriceLevel6': 9750838.195950747,
  'PriceLevel6Hide': false,
  'PriceLevel7': -32855842.837624267,
  'PriceLevel7Hide': true,
  'PriceLevel8': 62730428.06406516,
  'PriceLevel8Hide': false,
  'PriceLevel9': -43868142.31773304,
  'PriceLevel9Hide': false,
  'PriceLevel10': 30134372.364892453,
  'PriceLevel10Hide': true,
  'BuyButtonLink': 'nulla esse sint tempor',
  'ProductLink': 'non occaecat officia',
  'Title': 'in dolore',
  'CustomFileName': 'sint adipisicing consectetur commodo',
  'RedirectLink': 'ullamco eu sit officia',
  'MetaTags': 'cupidatat deserunt mollit',
  'SpecialInstructions': 'voluptate aliqua Lorem',
  'AssignKey': false,
  'ReUseKeys': true,
  'SerialList': [
    {
      'SerialID': -8725466,
      'SerialUses': -30885336,
      'SerialCode': 'id Ut'
    },
    {
      'SerialID': 83193544,
      'SerialUses': 47038811,
      'SerialCode': 'in id esse'
    },
    {
      'SerialID': -82758751,
      'SerialUses': 29080949,
      'SerialCode': 'deserunt fugiat ullamco anim aute'
    },
    {
      'SerialID': -32087560,
      'SerialUses': 45223921,
      'SerialCode': 'et culpa'
    },
    {
      'SerialID': 10718131,
      'SerialUses': 57813828,
      'SerialCode': 'nostrud laboris'
    }
  ],
  'EProductList': [
    {
      'FileNumber': -35806385,
      'FilePath': 'culpa n'
    },
    {
      'FileNumber': 49531231,
      'FilePath': 'sunt eu amet conse'
    },
    {
      'FileNumber': -7255798,
      'FilePath': 'enim tempor'
    },
    {
      'FileNumber': -88625375,
      'FilePath': 'est'
    }
  ]
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "SKUInfo": {
    "CatalogID": 53430377,
    "SKU": "adipisicing reprehenderit consectetur ut aute",
    "Name": "aute nostrud",
    "Cost": 72975781.36366543,
    "Price": 27990481.795528367,
    "Currency": "minim sit exercitation",
    "RetailPrice": 55871731.56949267,
    "SalePrice": -58277497.51034395,
    "OnSale": false,
    "Stock": 84553874.45930165
  },
  "MFGID": "ad ipsum consequat",
  "ShortDescription": "in nulla exercitation repre",
  "ManufacturerID": 97336733,
  "ManufacturerName": "et pariatur sunt dolor",
  "DistributorList": [
    {
      "DistributorID": 36746855,
      "DistributorName": "exercitati",
      "DistributorItemCost": 80086779.07145098,
      "DistributorItemID": "a",
      "DistributorStockID": "laboris dolor nu"
    },
    {
      "DistributorID": 53438661,
      "DistributorName": "veniam consectetur aute",
      "DistributorItemCost": -2045013.3467487097,
      "DistributorItemID": "et commodo dolore non",
      "DistributorStockID": "Duis dolor irure"
    }
  ],
  "LastUpdate": "1973-02-20T12:44:10.049Z",
  "UserID": "commodo",
  "GTIN": "adipisicing dolore ",
  "CategoryList": [
    {
      "CategoryID": -39731715,
      "CategoryName": "ea"
    },
    {
      "CategoryID": 49643563,
      "CategoryName": "irure adipisicing"
    },
    {
      "CategoryID": -13633446,
      "CategoryName": "irure Ut quis"
    }
  ],
  "ExternalIdsList": [
    {
      "ID": -10424970,
      "AdvancedOptionSufix": "proident in Lorem ut occaec",
      "ExternalId1": "ex eu",
      "ExternalId2": "quis enim",
      "ExternalIdType": "exercitat"
    }
  ],
  "CategoryExternalIdsList": [
    {
      "ID": 44074511,
      "CategoryID": 48249566,
      "ExternalId1": "esse eiusmod exercitation",
      "ExternalIdType": "ut laboris nostrud"
    },
    {
      "ID": 57582755,
      "CategoryID": 59838543,
      "ExternalId1": "mollit in",
      "ExternalIdType": "dolor"
    }
  ],
  "NonTaxable": true,
  "NotForSale": false,
  "Hide": true,
  "GiftCertificate": true,
  "HomeSpecial": true,
  "CategorySpecial": false,
  "NonSearchable": false,
  "GiftWrapItem": true,
  "ShipCost": 6024793.697447434,
  "Weight": -2525536.41808939,
  "Height": 36049126.78142339,
  "Width": 90826802.05280727,
  "Depth": -88202316.63542596,
  "SelfShip": false,
  "FreeShipping": true,
  "RewardPoints": -13509021,
  "RedeemPoints": 386609,
  "DisableRewards": true,
  "StockAlert": -23054374,
  "ReorderQuantity": 24889835,
  "InStockMessage": "dolore eiusmod fugiat voluptate",
  "OutOfStockMessage": "incididunt reprehenderit anim est",
  "BackOrderMessage": "labore",
  "InventoryControl": -82090968,
  "WarehouseLocation": "et quis",
  "WarehouseBin": "ipsum Lorem",
  "WarehouseAisle": "quis ea dolore ut",
  "WarehouseCustom": "ullamco cupidatat consequat consectetur",
  "Description": "pariatur ex in quis do",
  "Keywords": "et eu Ut",
  "ExtraField1": "consequat tempor ex",
  "ExtraField2": "sed est dolore",
  "ExtraField3": "cupidatat aute aliqua voluptate",
  "ExtraField4": "et dolor pariatur nisi veniam",
  "ExtraField5": "ut laboris aute",
  "ExtraField6": "Duis est",
  "ExtraField7": "veniam qui",
  "ExtraField8": "ad consectetur",
  "ExtraField9": "Ut veniam",
  "ExtraField10": "sit aute quis magna eiusmod",
  "ExtraField11": "aliqua eu consequat",
  "ExtraField12": "velit magna esse fugiat laborum",
  "ExtraField13": "cupidatat Ut tempor aliqua",
  "FeatureList": [
    {
      "FeatureID": -13232624,
      "FeatureTitle": "ut",
      "FeatureDescription": "anim velit ullamco ad am"
    }
  ],
  "PluginList": {},
  "SampleEnable": false,
  "SampleName": "eiusmod",
  "SampleSKUPrefix": "non ea sed",
  "SamplePrice": -90390627.95033704,
  "SampleWeight": 30033912.057703644,
  "ReviewAverage": -2305013.478265837,
  "ReviewCount": -27761823,
  "MainImageFile": "pariatur Ut officia v",
  "MainImageCaption": "enim",
  "ThumbnailFile": "dolor aliqua ut",
  "MediaFile": "cupidatat",
  "AdditionalImageFile2": "tempor",
  "AdditionalImageCaption2": "veniam",
  "AdditionalImageFile3": "sint Ut Lorem in",
  "AdditionalImageCaption3": "minim nostrud consequat aliquip",
  "AdditionalImageFile4": "ullamco",
  "AdditionalImageCaption4": "sed ad",
  "ImageGalleryList": [
    {
      "ImageGalleryID": 29564791,
      "ImageGalleryFile": "dolore ut",
      "ImageGalleryCaption": "in proident esse",
      "ImageGallerySorting": 59376616
    },
    {
      "ImageGalleryID": -82246367,
      "ImageGalleryFile": "mollit aliquip commod",
      "ImageGalleryCaption": "veniam",
      "ImageGallerySorting": -41995661
    },
    {
      "ImageGalleryID": 12421427,
      "ImageGalleryFile": "irure",
      "ImageGalleryCaption": "in non commodo veniam proident",
      "ImageGallerySorting": 88043996
    },
    {
      "ImageGalleryID": -79841788,
      "ImageGalleryFile": "Ut",
      "ImageGalleryCaption": "laborum deserunt",
      "ImageGallerySorting": 23551499
    }
  ],
  "OptionSetList": [
    {
      "OptionSetID": -10703979,
      "OptionSetName": "exercitation",
      "OptionSorting": 66543507.60461685,
      "OptionRequired": true,
      "OptionType": "Lorem",
      "OptionURL": "mollit in irure Lorem",
      "OptionAdditionalInformation": "elit in qui",
      "OptionSizeLimit": 20334747,
      "OptionList": [
        {
          "OptionID": 92847604,
          "OptionName": "fugiat velit mollit Duis",
          "OptionSelected": false,
          "OptionHide": true,
          "OptionValue": 58192670.16976896,
          "OptionPartNumber": "cupidatat of",
          "OptionSorting": 90509710.66144401,
          "OptionImagePath": "et dol",
          "OptionBundleCatalogId": 85858126,
          "OptionBundleQuantity": 70946808
        },
        {
          "OptionID": -76943455,
          "OptionName": "ut magna",
          "OptionSelected": true,
          "OptionHide": false,
          "OptionValue": -48582362.07679134,
          "OptionPartNumber": "in fugiat ipsum",
          "OptionSorting": 68996553.1048452,
          "OptionImagePath": "sint",
          "OptionBundleCatalogId": 9269710,
          "OptionBundleQuantity": -67955981
        },
        {
          "OptionID": 18099502,
          "OptionName": "Excepteur dolore consequat",
          "OptionSelected": false,
          "OptionHide": true,
          "OptionValue": -7443025.00906451,
          "OptionPartNumber": "laboris consectetur",
          "OptionSorting": 65580203.23112324,
          "OptionImagePath": "id aliqua irure in",
          "OptionBundleCatalogId": 42612860,
          "OptionBundleQuantity": -114117
        },
        {
          "OptionID": 18740259,
          "OptionName": "consequat in adipisicing laboris",
          "OptionSelected": false,
          "OptionHide": false,
          "OptionValue": 70493531.2192486,
          "OptionPartNumber": "id",
          "OptionSorting": -821927.6079335809,
          "OptionImagePath": "aliqua aute ut dolor sit",
          "OptionBundleCatalogId": 64757144,
          "OptionBundleQuantity": -83473689
        }
      ]
    }
  ],
  "AdvancedOptionList": [
    {
      "AdvancedOptionCode": "est",
      "AdvancedOptionSufix": "ipsum consectetur pariatur Ut",
      "AdvancedOptionName": "qui est esse Ut",
      "AdvancedOptionCost": -10883921.368071541,
      "AdvancedOptionStock": -5744372,
      "AdvancedOptionWeight": -18422768.233305573,
      "AdvancedOptionPrice": -30775166.63925782,
      "AdvancedOptionGTIN": "in"
    },
    {
      "AdvancedOptionCode": "officia aute Lorem pariat",
      "AdvancedOptionSufix": "enim Lorem occaecat in",
      "AdvancedOptionName": "est proident reprehenderit enim",
      "AdvancedOptionCost": 46798051.43079755,
      "AdvancedOptionStock": -39369621,
      "AdvancedOptionWeight": 2847264.0829848945,
      "AdvancedOptionPrice": -96777067.28962487,
      "AdvancedOptionGTIN": "ve"
    },
    {
      "AdvancedOptionCode": "in tempor consequat",
      "AdvancedOptionSufix": "incididunt ipsum",
      "AdvancedOptionName": "Excepteur Duis reprehenderit",
      "AdvancedOptionCost": -52364324.39140644,
      "AdvancedOptionStock": -78748064,
      "AdvancedOptionWeight": -82442390.51808347,
      "AdvancedOptionPrice": -97888315.35563841,
      "AdvancedOptionGTIN": "mollit adipisicing Excepteu"
    },
    {
      "AdvancedOptionCode": "in ullamco eu ad",
      "AdvancedOptionSufix": "nulla eu",
      "AdvancedOptionName": "voluptate irure occaecat quis nisi",
      "AdvancedOptionCost": 26005642.69812748,
      "AdvancedOptionStock": 85842242,
      "AdvancedOptionWeight": 45071485.33939445,
      "AdvancedOptionPrice": 17382079.04131031,
      "AdvancedOptionGTIN": "irure quis"
    },
    {
      "AdvancedOptionCode": "mollit eiusmod nostrud",
      "AdvancedOptionSufix": "ut non",
      "AdvancedOptionName": "of",
      "AdvancedOptionCost": -97248859.12104893,
      "AdvancedOptionStock": -15246903,
      "AdvancedOptionWeight": -92647194.51222731,
      "AdvancedOptionPrice": 48699514.82852018,
      "AdvancedOptionGTIN": "tempor est aliquip voluptate"
    }
  ],
  "RelatedProductList": [
    {
      "RelatedIndexID": 10877627,
      "RelatedProductID": 95629732,
      "RelatedProductSorting": -69395077
    },
    {
      "RelatedIndexID": -65305293,
      "RelatedProductID": 79749951,
      "RelatedProductSorting": -61523488
    },
    {
      "RelatedIndexID": 94517534,
      "RelatedProductID": 82285026,
      "RelatedProductSorting": -31192985
    }
  ],
  "UpSellingItemList": [
    {
      "UpSellingIndexID": -45719889,
      "UpSellingItemID": 61864508,
      "UpSellingItemSorting": -93406759
    },
    {
      "UpSellingIndexID": 80201924,
      "UpSellingItemID": -60066401,
      "UpSellingItemSorting": -21985361
    },
    {
      "UpSellingIndexID": -70485574,
      "UpSellingItemID": -15324678,
      "UpSellingItemSorting": 10362384
    },
    {
      "UpSellingIndexID": -67636748,
      "UpSellingItemID": -81207976,
      "UpSellingItemSorting": 73473369
    },
    {
      "UpSellingIndexID": -42909612,
      "UpSellingItemID": -65500247,
      "UpSellingItemSorting": 97456034
    }
  ],
  "DiscountList": [
    {
      "DiscountID": -90142911,
      "DiscountPriceLevel": -23554282,
      "DiscountLowbound": 39191682,
      "DiscountUpbound": -69854312,
      "DiscountPrice": -81818293.17180069,
      "DiscountPercentage": true
    },
    {
      "DiscountID": 71938356,
      "DiscountPriceLevel": 43370180,
      "DiscountLowbound": 26908932,
      "DiscountUpbound": -45170455,
      "DiscountPrice": 1978781.539260149,
      "DiscountPercentage": true
    },
    {
      "DiscountID": -76957879,
      "DiscountPriceLevel": -54966076,
      "DiscountLowbound": -69206267,
      "DiscountUpbound": 52548335,
      "DiscountPrice": 54241565.32605839,
      "DiscountPercentage": false
    },
    {
      "DiscountID": -87302291,
      "DiscountPriceLevel": 31937405,
      "DiscountLowbound": -50008247,
      "DiscountUpbound": -55554687,
      "DiscountPrice": -39550181.63200883,
      "DiscountPercentage": true
    },
    {
      "DiscountID": 62708468,
      "DiscountPriceLevel": -45293155,
      "DiscountLowbound": -8613400,
      "DiscountUpbound": -81237464,
      "DiscountPrice": 79393330.96652365,
      "DiscountPercentage": false
    }
  ],
  "DoNotUseCategoryOptions": false,
  "DateCreated": "1973-04-13T07:25:35.444Z",
  "ListingTemplateID": 32273201,
  "ListingTemplateName": "aute tempor quis ex ",
  "LoginRequiredOptionID": 65504481,
  "LoginRequiredOptionName": "consectetur eu laboris reprehenderit",
  "LoginRequiredOptionRedirectTo": "proident",
  "AllowAccessCustomerGroupID": -19973569,
  "AllowAccessCustomerGroupName": "enim dolore ad proident",
  "RMAMaxPeriod": "paria",
  "CanonicalUrl": "ea veniam amet",
  "TaxCode": "q`9(s8",
  "DisplayText": "deserunt aliquip proident esse",
  "MinimumQuantity": -8542744.726029202,
  "MaximumQuantity": -96025651.24411346,
  "AllowOnlyMultiples": true,
  "AllowFractionalQuantity": true,
  "QuantityOptions": "sint ad proident ut laboris",
  "GroupOptionsForQuantityPricing": false,
  "ApplyQuantityDiscountToOptions": false,
  "EnableMakeAnOfferFeature": false,
  "MinimumAcceptableOffer": "ut ",
  "PriceLevel1": 65411422.50055501,
  "PriceLevel1Hide": false,
  "PriceLevel2": 46424553.52736002,
  "PriceLevel2Hide": false,
  "PriceLevel3": -99070313.950136,
  "PriceLevel3Hide": true,
  "PriceLevel4": -76719270.34783548,
  "PriceLevel4Hide": true,
  "PriceLevel5": 20152754.00776644,
  "PriceLevel5Hide": false,
  "PriceLevel6": 9750838.195950747,
  "PriceLevel6Hide": false,
  "PriceLevel7": -32855842.837624267,
  "PriceLevel7Hide": true,
  "PriceLevel8": 62730428.06406516,
  "PriceLevel8Hide": false,
  "PriceLevel9": -43868142.31773304,
  "PriceLevel9Hide": false,
  "PriceLevel10": 30134372.364892453,
  "PriceLevel10Hide": true,
  "BuyButtonLink": "nulla esse sint tempor",
  "ProductLink": "non occaecat officia",
  "Title": "in dolore",
  "CustomFileName": "sint adipisicing consectetur commodo",
  "RedirectLink": "ullamco eu sit officia",
  "MetaTags": "cupidatat deserunt mollit",
  "SpecialInstructions": "voluptate aliqua Lorem",
  "AssignKey": false,
  "ReUseKeys": true,
  "SerialList": [
    {
      "SerialID": -8725466,
      "SerialUses": -30885336,
      "SerialCode": "id Ut"
    },
    {
      "SerialID": 83193544,
      "SerialUses": 47038811,
      "SerialCode": "in id esse"
    },
    {
      "SerialID": -82758751,
      "SerialUses": 29080949,
      "SerialCode": "deserunt fugiat ullamco anim aute"
    },
    {
      "SerialID": -32087560,
      "SerialUses": 45223921,
      "SerialCode": "et culpa"
    },
    {
      "SerialID": 10718131,
      "SerialUses": 57813828,
      "SerialCode": "nostrud laboris"
    }
  ],
  "EProductList": [
    {
      "FileNumber": -35806385,
      "FilePath": "culpa n"
    },
    {
      "FileNumber": 49531231,
      "FilePath": "sunt eu amet conse"
    },
    {
      "FileNumber": -7255798,
      "FilePath": "enim tempor"
    },
    {
      "FileNumber": -88625375,
      "FilePath": "est"
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

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "SKUInfo": {
      "CatalogID": 53430377,
      "SKU": "adipisicing reprehenderit consectetur ut aute",
      "Name": "aute nostrud",
      "Cost": 72975781.36366543,
      "Price": 27990481.795528367,
      "Currency": "minim sit exercitation",
      "RetailPrice": 55871731.56949267,
      "SalePrice": -58277497.51034395,
      "OnSale": false,
      "Stock": 84553874.45930165
    },
    "MFGID": "ad ipsum consequat",
    "ShortDescription": "in nulla exercitation repre",
    "ManufacturerID": 97336733,
    "ManufacturerName": "et pariatur sunt dolor",
    "DistributorList": [
      {
        "DistributorID": 36746855,
        "DistributorName": "exercitati",
        "DistributorItemCost": 80086779.07145098,
        "DistributorItemID": "a",
        "DistributorStockID": "laboris dolor nu"
      },
      {
        "DistributorID": 53438661,
        "DistributorName": "veniam consectetur aute",
        "DistributorItemCost": -2045013.3467487097,
        "DistributorItemID": "et commodo dolore non",
        "DistributorStockID": "Duis dolor irure"
      }
    ],
    "LastUpdate": "1973-02-20T12:44:10.049Z",
    "UserID": "commodo",
    "GTIN": "adipisicing dolore ",
    "CategoryList": [
      {
        "CategoryID": -39731715,
        "CategoryName": "ea"
      },
      {
        "CategoryID": 49643563,
        "CategoryName": "irure adipisicing"
      },
      {
        "CategoryID": -13633446,
        "CategoryName": "irure Ut quis"
      }
    ],
    "ExternalIdsList": [
      {
        "ID": -10424970,
        "AdvancedOptionSufix": "proident in Lorem ut occaec",
        "ExternalId1": "ex eu",
        "ExternalId2": "quis enim",
        "ExternalIdType": "exercitat"
      }
    ],
    "CategoryExternalIdsList": [
      {
        "ID": 44074511,
        "CategoryID": 48249566,
        "ExternalId1": "esse eiusmod exercitation",
        "ExternalIdType": "ut laboris nostrud"
      },
      {
        "ID": 57582755,
        "CategoryID": 59838543,
        "ExternalId1": "mollit in",
        "ExternalIdType": "dolor"
      }
    ],
    "NonTaxable": true,
    "NotForSale": false,
    "Hide": true,
    "GiftCertificate": true,
    "HomeSpecial": true,
    "CategorySpecial": false,
    "NonSearchable": false,
    "GiftWrapItem": true,
    "ShipCost": 6024793.697447434,
    "Weight": -2525536.41808939,
    "Height": 36049126.78142339,
    "Width": 90826802.05280727,
    "Depth": -88202316.63542596,
    "SelfShip": false,
    "FreeShipping": true,
    "RewardPoints": -13509021,
    "RedeemPoints": 386609,
    "DisableRewards": true,
    "StockAlert": -23054374,
    "ReorderQuantity": 24889835,
    "InStockMessage": "dolore eiusmod fugiat voluptate",
    "OutOfStockMessage": "incididunt reprehenderit anim est",
    "BackOrderMessage": "labore",
    "InventoryControl": -82090968,
    "WarehouseLocation": "et quis",
    "WarehouseBin": "ipsum Lorem",
    "WarehouseAisle": "quis ea dolore ut",
    "WarehouseCustom": "ullamco cupidatat consequat consectetur",
    "Description": "pariatur ex in quis do",
    "Keywords": "et eu Ut",
    "ExtraField1": "consequat tempor ex",
    "ExtraField2": "sed est dolore",
    "ExtraField3": "cupidatat aute aliqua voluptate",
    "ExtraField4": "et dolor pariatur nisi veniam",
    "ExtraField5": "ut laboris aute",
    "ExtraField6": "Duis est",
    "ExtraField7": "veniam qui",
    "ExtraField8": "ad consectetur",
    "ExtraField9": "Ut veniam",
    "ExtraField10": "sit aute quis magna eiusmod",
    "ExtraField11": "aliqua eu consequat",
    "ExtraField12": "velit magna esse fugiat laborum",
    "ExtraField13": "cupidatat Ut tempor aliqua",
    "FeatureList": [
      {
        "FeatureID": -13232624,
        "FeatureTitle": "ut",
        "FeatureDescription": "anim velit ullamco ad am"
      }
    ],
    "PluginList": {},
    "SampleEnable": false,
    "SampleName": "eiusmod",
    "SampleSKUPrefix": "non ea sed",
    "SamplePrice": -90390627.95033704,
    "SampleWeight": 30033912.057703644,
    "ReviewAverage": -2305013.478265837,
    "ReviewCount": -27761823,
    "MainImageFile": "pariatur Ut officia v",
    "MainImageCaption": "enim",
    "ThumbnailFile": "dolor aliqua ut",
    "MediaFile": "cupidatat",
    "AdditionalImageFile2": "tempor",
    "AdditionalImageCaption2": "veniam",
    "AdditionalImageFile3": "sint Ut Lorem in",
    "AdditionalImageCaption3": "minim nostrud consequat aliquip",
    "AdditionalImageFile4": "ullamco",
    "AdditionalImageCaption4": "sed ad",
    "ImageGalleryList": [
      {
        "ImageGalleryID": 29564791,
        "ImageGalleryFile": "dolore ut",
        "ImageGalleryCaption": "in proident esse",
        "ImageGallerySorting": 59376616
      },
      {
        "ImageGalleryID": -82246367,
        "ImageGalleryFile": "mollit aliquip commod",
        "ImageGalleryCaption": "veniam",
        "ImageGallerySorting": -41995661
      },
      {
        "ImageGalleryID": 12421427,
        "ImageGalleryFile": "irure",
        "ImageGalleryCaption": "in non commodo veniam proident",
        "ImageGallerySorting": 88043996
      },
      {
        "ImageGalleryID": -79841788,
        "ImageGalleryFile": "Ut",
        "ImageGalleryCaption": "laborum deserunt",
        "ImageGallerySorting": 23551499
      }
    ],
    "OptionSetList": [
      {
        "OptionSetID": -10703979,
        "OptionSetName": "exercitation",
        "OptionSorting": 66543507.60461685,
        "OptionRequired": true,
        "OptionType": "Lorem",
        "OptionURL": "mollit in irure Lorem",
        "OptionAdditionalInformation": "elit in qui",
        "OptionSizeLimit": 20334747,
        "OptionList": [
          {
            "OptionID": 92847604,
            "OptionName": "fugiat velit mollit Duis",
            "OptionSelected": false,
            "OptionHide": true,
            "OptionValue": 58192670.16976896,
            "OptionPartNumber": "cupidatat of",
            "OptionSorting": 90509710.66144401,
            "OptionImagePath": "et dol",
            "OptionBundleCatalogId": 85858126,
            "OptionBundleQuantity": 70946808
          },
          {
            "OptionID": -76943455,
            "OptionName": "ut magna",
            "OptionSelected": true,
            "OptionHide": false,
            "OptionValue": -48582362.07679134,
            "OptionPartNumber": "in fugiat ipsum",
            "OptionSorting": 68996553.1048452,
            "OptionImagePath": "sint",
            "OptionBundleCatalogId": 9269710,
            "OptionBundleQuantity": -67955981
          },
          {
            "OptionID": 18099502,
            "OptionName": "Excepteur dolore consequat",
            "OptionSelected": false,
            "OptionHide": true,
            "OptionValue": -7443025.00906451,
            "OptionPartNumber": "laboris consectetur",
            "OptionSorting": 65580203.23112324,
            "OptionImagePath": "id aliqua irure in",
            "OptionBundleCatalogId": 42612860,
            "OptionBundleQuantity": -114117
          },
          {
            "OptionID": 18740259,
            "OptionName": "consequat in adipisicing laboris",
            "OptionSelected": false,
            "OptionHide": false,
            "OptionValue": 70493531.2192486,
            "OptionPartNumber": "id",
            "OptionSorting": -821927.6079335809,
            "OptionImagePath": "aliqua aute ut dolor sit",
            "OptionBundleCatalogId": 64757144,
            "OptionBundleQuantity": -83473689
          }
        ]
      }
    ],
    "AdvancedOptionList": [
      {
        "AdvancedOptionCode": "est",
        "AdvancedOptionSufix": "ipsum consectetur pariatur Ut",
        "AdvancedOptionName": "qui est esse Ut",
        "AdvancedOptionCost": -10883921.368071541,
        "AdvancedOptionStock": -5744372,
        "AdvancedOptionWeight": -18422768.233305573,
        "AdvancedOptionPrice": -30775166.63925782,
        "AdvancedOptionGTIN": "in"
      },
      {
        "AdvancedOptionCode": "officia aute Lorem pariat",
        "AdvancedOptionSufix": "enim Lorem occaecat in",
        "AdvancedOptionName": "est proident reprehenderit enim",
        "AdvancedOptionCost": 46798051.43079755,
        "AdvancedOptionStock": -39369621,
        "AdvancedOptionWeight": 2847264.0829848945,
        "AdvancedOptionPrice": -96777067.28962487,
        "AdvancedOptionGTIN": "ve"
      },
      {
        "AdvancedOptionCode": "in tempor consequat",
        "AdvancedOptionSufix": "incididunt ipsum",
        "AdvancedOptionName": "Excepteur Duis reprehenderit",
        "AdvancedOptionCost": -52364324.39140644,
        "AdvancedOptionStock": -78748064,
        "AdvancedOptionWeight": -82442390.51808347,
        "AdvancedOptionPrice": -97888315.35563841,
        "AdvancedOptionGTIN": "mollit adipisicing Excepteu"
      },
      {
        "AdvancedOptionCode": "in ullamco eu ad",
        "AdvancedOptionSufix": "nulla eu",
        "AdvancedOptionName": "voluptate irure occaecat quis nisi",
        "AdvancedOptionCost": 26005642.69812748,
        "AdvancedOptionStock": 85842242,
        "AdvancedOptionWeight": 45071485.33939445,
        "AdvancedOptionPrice": 17382079.04131031,
        "AdvancedOptionGTIN": "irure quis"
      },
      {
        "AdvancedOptionCode": "mollit eiusmod nostrud",
        "AdvancedOptionSufix": "ut non",
        "AdvancedOptionName": "of",
        "AdvancedOptionCost": -97248859.12104893,
        "AdvancedOptionStock": -15246903,
        "AdvancedOptionWeight": -92647194.51222731,
        "AdvancedOptionPrice": 48699514.82852018,
        "AdvancedOptionGTIN": "tempor est aliquip voluptate"
      }
    ],
    "RelatedProductList": [
      {
        "RelatedIndexID": 10877627,
        "RelatedProductID": 95629732,
        "RelatedProductSorting": -69395077
      },
      {
        "RelatedIndexID": -65305293,
        "RelatedProductID": 79749951,
        "RelatedProductSorting": -61523488
      },
      {
        "RelatedIndexID": 94517534,
        "RelatedProductID": 82285026,
        "RelatedProductSorting": -31192985
      }
    ],
    "UpSellingItemList": [
      {
        "UpSellingIndexID": -45719889,
        "UpSellingItemID": 61864508,
        "UpSellingItemSorting": -93406759
      },
      {
        "UpSellingIndexID": 80201924,
        "UpSellingItemID": -60066401,
        "UpSellingItemSorting": -21985361
      },
      {
        "UpSellingIndexID": -70485574,
        "UpSellingItemID": -15324678,
        "UpSellingItemSorting": 10362384
      },
      {
        "UpSellingIndexID": -67636748,
        "UpSellingItemID": -81207976,
        "UpSellingItemSorting": 73473369
      },
      {
        "UpSellingIndexID": -42909612,
        "UpSellingItemID": -65500247,
        "UpSellingItemSorting": 97456034
      }
    ],
    "DiscountList": [
      {
        "DiscountID": -90142911,
        "DiscountPriceLevel": -23554282,
        "DiscountLowbound": 39191682,
        "DiscountUpbound": -69854312,
        "DiscountPrice": -81818293.17180069,
        "DiscountPercentage": true
      },
      {
        "DiscountID": 71938356,
        "DiscountPriceLevel": 43370180,
        "DiscountLowbound": 26908932,
        "DiscountUpbound": -45170455,
        "DiscountPrice": 1978781.539260149,
        "DiscountPercentage": true
      },
      {
        "DiscountID": -76957879,
        "DiscountPriceLevel": -54966076,
        "DiscountLowbound": -69206267,
        "DiscountUpbound": 52548335,
        "DiscountPrice": 54241565.32605839,
        "DiscountPercentage": false
      },
      {
        "DiscountID": -87302291,
        "DiscountPriceLevel": 31937405,
        "DiscountLowbound": -50008247,
        "DiscountUpbound": -55554687,
        "DiscountPrice": -39550181.63200883,
        "DiscountPercentage": true
      },
      {
        "DiscountID": 62708468,
        "DiscountPriceLevel": -45293155,
        "DiscountLowbound": -8613400,
        "DiscountUpbound": -81237464,
        "DiscountPrice": 79393330.96652365,
        "DiscountPercentage": false
      }
    ],
    "DoNotUseCategoryOptions": false,
    "DateCreated": "1973-04-13T07:25:35.444Z",
    "ListingTemplateID": 32273201,
    "ListingTemplateName": "aute tempor quis ex ",
    "LoginRequiredOptionID": 65504481,
    "LoginRequiredOptionName": "consectetur eu laboris reprehenderit",
    "LoginRequiredOptionRedirectTo": "proident",
    "AllowAccessCustomerGroupID": -19973569,
    "AllowAccessCustomerGroupName": "enim dolore ad proident",
    "RMAMaxPeriod": "paria",
    "CanonicalUrl": "ea veniam amet",
    "TaxCode": "q`9(s8",
    "DisplayText": "deserunt aliquip proident esse",
    "MinimumQuantity": -8542744.726029202,
    "MaximumQuantity": -96025651.24411346,
    "AllowOnlyMultiples": true,
    "AllowFractionalQuantity": true,
    "QuantityOptions": "sint ad proident ut laboris",
    "GroupOptionsForQuantityPricing": false,
    "ApplyQuantityDiscountToOptions": false,
    "EnableMakeAnOfferFeature": false,
    "MinimumAcceptableOffer": "ut ",
    "PriceLevel1": 65411422.50055501,
    "PriceLevel1Hide": false,
    "PriceLevel2": 46424553.52736002,
    "PriceLevel2Hide": false,
    "PriceLevel3": -99070313.950136,
    "PriceLevel3Hide": true,
    "PriceLevel4": -76719270.34783548,
    "PriceLevel4Hide": true,
    "PriceLevel5": 20152754.00776644,
    "PriceLevel5Hide": false,
    "PriceLevel6": 9750838.195950747,
    "PriceLevel6Hide": false,
    "PriceLevel7": -32855842.837624267,
    "PriceLevel7Hide": true,
    "PriceLevel8": 62730428.06406516,
    "PriceLevel8Hide": false,
    "PriceLevel9": -43868142.31773304,
    "PriceLevel9Hide": false,
    "PriceLevel10": 30134372.364892453,
    "PriceLevel10Hide": true,
    "BuyButtonLink": "nulla esse sint tempor",
    "ProductLink": "non occaecat officia",
    "Title": "in dolore",
    "CustomFileName": "sint adipisicing consectetur commodo",
    "RedirectLink": "ullamco eu sit officia",
    "MetaTags": "cupidatat deserunt mollit",
    "SpecialInstructions": "voluptate aliqua Lorem",
    "AssignKey": false,
    "ReUseKeys": true,
    "SerialList": [
      {
        "SerialID": -8725466,
        "SerialUses": -30885336,
        "SerialCode": "id Ut"
      },
      {
        "SerialID": 83193544,
        "SerialUses": 47038811,
        "SerialCode": "in id esse"
      },
      {
        "SerialID": -82758751,
        "SerialUses": 29080949,
        "SerialCode": "deserunt fugiat ullamco anim aute"
      },
      {
        "SerialID": -32087560,
        "SerialUses": 45223921,
        "SerialCode": "et culpa"
      },
      {
        "SerialID": 10718131,
        "SerialUses": 57813828,
        "SerialCode": "nostrud laboris"
      }
    ],
    "EProductList": [
      {
        "FileNumber": -35806385,
        "FilePath": "culpa n"
      },
      {
        "FileNumber": 49531231,
        "FilePath": "sunt eu amet conse"
      },
      {
        "FileNumber": -7255798,
        "FilePath": "enim tempor"
      },
      {
        "FileNumber": -88625375,
        "FilePath": "est"
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"CatalogID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

<aside class="warning">
Please note: when sending information in any of the following collections of the product object, the product information contained in these keys will REPLACE the existing information, and not update it, because the existing information is deleted from the database and the new information is inserted. For example, if you are updating the images for a product, including that information in the ImageGalleryList collection will delete all existing images for this product and replace them with the new images. To update information within these keys without replacing existing information, use the specific web service for those items (e.g. /Products/{catalogId}/Images):

<ul>
<li>DistributorList</li>
<li>CategoryList</li>
<li>ImageGalleryList</li>
<li>OptionSetList</li>
<li>AdvancedOptionList</li>
<li>RelatedProductList</li>
<li>UpSellingItemList</li>
<li>DiscountList</li>
<li>SerialList</li>
<li>EProductList</li>
</ul>
</aside>

#### HTTP Request 
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item

#### Responses and Errors

Response Code | Description
------------- | ---------
201 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product was not found.


### Delete a specific product
> To delete a product from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}");
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
  
  using(var response = await httpClient.DeleteAsync("3dCartWebAPI/v1/Products/{catalogid}"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('DELETE', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}');

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

response = RestClient.delete 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}', headers=headers)
request.get_method = lambda: 'DELETE'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"CatalogID",
    "Value":"1234",
    "Status":"200",
    "Message":"Deleted successfully",
  }
]
```

#### HTTP Request 
`DELETE https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product was not found.

## Products by Category

### Retrieve a list of products from a specific category

> To retrieve products from a specific category in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). 

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}/Products?limit=&offset=&countonly=&sku=&name=&costfrom=&costto=&pricefrom=&priceto=&stockfrom=&stockto=&hide=&freeshipping=&onsale=&nontax=&notforsale=&giftcertificate=&homespecial=&categoryspecial=&nonsearchable=&selfship=&rewarddisable=&lastupdatestart=&lastupdateend=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Categories/{categoryid}/Products"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}/Products?limit=&offset=&countonly=&sku=&name=&costfrom=&costto=&pricefrom=&priceto=&stockfrom=&stockto=&hide=&freeshipping=&onsale=&nontax=&notforsale=&giftcertificate=&homespecial=&categoryspecial=&nonsearchable=&selfship=&rewarddisable=&lastupdatestart=&lastupdateend=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}/Products?limit=&offset=&countonly=&sku=&name=&costfrom=&costto=&pricefrom=&priceto=&stockfrom=&stockto=&hide=&freeshipping=&onsale=&nontax=&notforsale=&giftcertificate=&homespecial=&categoryspecial=&nonsearchable=&selfship=&rewarddisable=&lastupdatestart=&lastupdateend=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}/Products?limit=&offset=&countonly=&sku=&name=&costfrom=&costto=&pricefrom=&priceto=&stockfrom=&stockto=&hide=&freeshipping=&onsale=&nontax=&notforsale=&giftcertificate=&homespecial=&categoryspecial=&nonsearchable=&selfship=&rewarddisable=&lastupdatestart=&lastupdateend=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#product-object) for more information):

```json
[
  {
    "SKUInfo": {
      "CatalogID": 1,
      "SKU": "sample string 1",
      "Name": "sample string 2",
      "Cost": 1.1,
      "Price": 1.1,
      "Currency": "sample string 3",
      "RetailPrice": 1.1,
      "SalePrice": 1.1,
      "OnSale": true,
      "Stock": 1.1
    },
    "MFGID": "sample string 1",
    "ShortDescription": "sample string 2",
    "ManufacturerID": 1,
    "ManufacturerName": "sample string 3",
    "DistributorList": [
      {
        "DistributorID": 1,
        "DistributorName": "sample string 1",
        "DistributorItemCost": 1.1,
        "DistributorItemID": "sample string 2",
        "DistributorStockID": "sample string 3"
      },
      {
        "DistributorID": 1,
        "DistributorName": "sample string 1",
        "DistributorItemCost": 1.1,
        "DistributorItemID": "sample string 2",
        "DistributorStockID": "sample string 3"
      }
    ],
    "LastUpdate": "02/18/2019 16:58",
    "UserID": "sample string 4",
    "GTIN": "sample string 5",
    "CategoryList": [
      {
        "CategoryID": 1,
        "CategoryName": "sample string 1"
      },
      {
        "CategoryID": 1,
        "CategoryName": "sample string 1"
      }
    ],
    "ExternalIdsList": [
      {
        "ID": 1,
        "AdvancedOptionSufix": "sample string 1",
        "ExternalId1": "sample string 2",
        "ExternalId2": "sample string 3",
        "ExternalIdType": "sample string 4"
      },
      {
        "ID": 1,
        "AdvancedOptionSufix": "sample string 1",
        "ExternalId1": "sample string 2",
        "ExternalId2": "sample string 3",
        "ExternalIdType": "sample string 4"
      }
    ],
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
    ],
    "NonTaxable": true,
    "NotForSale": true,
    "Hide": true,
    "GiftCertificate": true,
    "HomeSpecial": true,
    "CategorySpecial": true,
    "NonSearchable": true,
    "GiftWrapItem": true,
    "ShipCost": 1.1,
    "Weight": 1.1,
    "Height": 1.1,
    "Width": 1.1,
    "Depth": 1.1,
    "SelfShip": true,
    "FreeShipping": true,
    "RewardPoints": 1,
    "RedeemPoints": 1,
    "DisableRewards": true,
    "StockAlert": 1,
    "ReorderQuantity": 1,
    "InStockMessage": "sample string 6",
    "OutOfStockMessage": "sample string 7",
    "BackOrderMessage": "sample string 8",
    "InventoryControl": 1,
    "WarehouseLocation": "sample string 9",
    "WarehouseBin": "sample string 10",
    "WarehouseAisle": "sample string 11",
    "WarehouseCustom": "sample string 12",
    "Description": "sample string 13",
    "Keywords": "sample string 14",
    "ExtraField1": "sample string 15",
    "ExtraField2": "sample string 16",
    "ExtraField3": "sample string 17",
    "ExtraField4": "sample string 18",
    "ExtraField5": "sample string 19",
    "ExtraField6": "sample string 20",
    "ExtraField7": "sample string 21",
    "ExtraField8": "sample string 22",
    "ExtraField9": "sample string 23",
    "ExtraField10": "sample string 24",
    "ExtraField11": "sample string 25",
    "ExtraField12": "sample string 26",
    "ExtraField13": "sample string 27",
    "FeatureList": [
      {
        "FeatureID": 1,
        "FeatureTitle": "sample string 1",
        "FeatureDescription": "sample string 2"
      },
      {
        "FeatureID": 1,
        "FeatureTitle": "sample string 1",
        "FeatureDescription": "sample string 2"
      }
    ],
    "PluginList": {
      "sample string 1": "sample string 2",
      "sample string 3": "sample string 4"
    },
    "SampleEnable": true,
    "SampleName": "sample string 28",
    "SampleSKUPrefix": "sample string 29",
    "SamplePrice": 1.1,
    "SampleWeight": 1.1,
    "ReviewAverage": 1.1,
    "ReviewCount": 1,
    "MainImageFile": "sample string 30",
    "MainImageCaption": "sample string 31",
    "ThumbnailFile": "sample string 32",
    "MediaFile": "sample string 33",
    "AdditionalImageFile2": "sample string 34",
    "AdditionalImageCaption2": "sample string 35",
    "AdditionalImageFile3": "sample string 36",
    "AdditionalImageCaption3": "sample string 37",
    "AdditionalImageFile4": "sample string 38",
    "AdditionalImageCaption4": "sample string 39",
    "ImageGalleryList": [
      {
        "ImageGalleryID": 1,
        "ImageGalleryFile": "sample string 1",
        "ImageGalleryCaption": "sample string 2",
        "ImageGallerySorting": 1
      },
      {
        "ImageGalleryID": 1,
        "ImageGalleryFile": "sample string 1",
        "ImageGalleryCaption": "sample string 2",
        "ImageGallerySorting": 1
      }
    ],
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
    "AdvancedOptionList": [
      {
        "AdvancedOptionCode": "sample string 1",
        "AdvancedOptionSufix": "sample string 2",
        "AdvancedOptionName": "sample string 3",
        "AdvancedOptionCost": 1.1,
        "AdvancedOptionStock": 1,
        "AdvancedOptionWeight": 1.1,
        "AdvancedOptionPrice": 1.1,
        "AdvancedOptionGTIN": "sample string 4"
      },
      {
        "AdvancedOptionCode": "sample string 1",
        "AdvancedOptionSufix": "sample string 2",
        "AdvancedOptionName": "sample string 3",
        "AdvancedOptionCost": 1.1,
        "AdvancedOptionStock": 1,
        "AdvancedOptionWeight": 1.1,
        "AdvancedOptionPrice": 1.1,
        "AdvancedOptionGTIN": "sample string 4"
      }
    ],
    "RelatedProductList": [
      {
        "RelatedIndexID": 1,
        "RelatedProductID": 1,
        "RelatedProductSorting": 1
      },
      {
        "RelatedIndexID": 1,
        "RelatedProductID": 1,
        "RelatedProductSorting": 1
      }
    ],
    "UpSellingItemList": [
      {
        "UpSellingIndexID": 1,
        "UpSellingItemID": 1,
        "UpSellingItemSorting": 1
      },
      {
        "UpSellingIndexID": 1,
        "UpSellingItemID": 1,
        "UpSellingItemSorting": 1
      }
    ],
    "DiscountList": [
      {
        "DiscountID": 1,
        "DiscountPriceLevel": 1,
        "DiscountLowbound": 1,
        "DiscountUpbound": 1,
        "DiscountPrice": 1.1,
        "DiscountPercentage": true
      },
      {
        "DiscountID": 1,
        "DiscountPriceLevel": 1,
        "DiscountLowbound": 1,
        "DiscountUpbound": 1,
        "DiscountPrice": 1.1,
        "DiscountPercentage": true
      }
    ],
    "DoNotUseCategoryOptions": true,
    "DateCreated": "02/18/2019 16:58",
    "ListingTemplateID": 1,
    "ListingTemplateName": "sample string 40",
    "LoginRequiredOptionID": 1,
    "LoginRequiredOptionName": "sample string 41",
    "LoginRequiredOptionRedirectTo": "sample string 42",
    "AllowAccessCustomerGroupID": 1,
    "AllowAccessCustomerGroupName": "sample string 43",
    "RMAMaxPeriod": "sample string 44",
    "CanonicalUrl": "sample string 45",
    "TaxCode": "sample string 46",
    "DisplayText": "sample string 47",
    "MinimumQuantity": 1.1,
    "MaximumQuantity": 1.1,
    "AllowOnlyMultiples": true,
    "AllowFractionalQuantity": true,
    "QuantityOptions": "sample string 48",
    "GroupOptionsForQuantityPricing": true,
    "ApplyQuantityDiscountToOptions": true,
    "EnableMakeAnOfferFeature": true,
    "MinimumAcceptableOffer": "sample string 49",
    "PriceLevel1": 1.1,
    "PriceLevel1Hide": true,
    "PriceLevel2": 1.1,
    "PriceLevel2Hide": true,
    "PriceLevel3": 1.1,
    "PriceLevel3Hide": true,
    "PriceLevel4": 1.1,
    "PriceLevel4Hide": true,
    "PriceLevel5": 1.1,
    "PriceLevel5Hide": true,
    "PriceLevel6": 1.1,
    "PriceLevel6Hide": true,
    "PriceLevel7": 1.1,
    "PriceLevel7Hide": true,
    "PriceLevel8": 1.1,
    "PriceLevel8Hide": true,
    "PriceLevel9": 1.1,
    "PriceLevel9Hide": true,
    "PriceLevel10": 1.1,
    "PriceLevel10Hide": true,
    "BuyButtonLink": "sample string 50",
    "ProductLink": "sample string 51",
    "Title": "sample string 52",
    "CustomFileName": "sample string 53",
    "RedirectLink": "sample string 54",
    "MetaTags": "sample string 55",
    "SpecialInstructions": "sample string 56",
    "AssignKey": true,
    "ReUseKeys": true,
    "SerialList": [
      {
        "SerialID": 1,
        "SerialUses": 1,
        "SerialCode": "sample string 1"
      },
      {
        "SerialID": 1,
        "SerialUses": 1,
        "SerialCode": "sample string 1"
      }
    ],
    "EProductList": [
      {
        "FileNumber": 1,
        "FilePath": "sample string 1"
      },
      {
        "FileNumber": 1,
        "FilePath": "sample string 1"
      }
    ]
  },
  {
    "SKUInfo": {
      "CatalogID": 1,
      "SKU": "sample string 1",
      "Name": "sample string 2",
      "Cost": 1.1,
      "Price": 1.1,
      "Currency": "sample string 3",
      "RetailPrice": 1.1,
      "SalePrice": 1.1,
      "OnSale": true,
      "Stock": 1.1
    },
    "MFGID": "sample string 1",
    "ShortDescription": "sample string 2",
    "ManufacturerID": 1,
    "ManufacturerName": "sample string 3",
    "DistributorList": [
      {
        "DistributorID": 1,
        "DistributorName": "sample string 1",
        "DistributorItemCost": 1.1,
        "DistributorItemID": "sample string 2",
        "DistributorStockID": "sample string 3"
      },
      {
        "DistributorID": 1,
        "DistributorName": "sample string 1",
        "DistributorItemCost": 1.1,
        "DistributorItemID": "sample string 2",
        "DistributorStockID": "sample string 3"
      }
    ],
    "LastUpdate": "02/18/2019 16:58",
    "UserID": "sample string 4",
    "GTIN": "sample string 5",
    "CategoryList": [
      {
        "CategoryID": 1,
        "CategoryName": "sample string 1"
      },
      {
        "CategoryID": 1,
        "CategoryName": "sample string 1"
      }
    ],
    "ExternalIdsList": [
      {
        "ID": 1,
        "AdvancedOptionSufix": "sample string 1",
        "ExternalId1": "sample string 2",
        "ExternalId2": "sample string 3",
        "ExternalIdType": "sample string 4"
      },
      {
        "ID": 1,
        "AdvancedOptionSufix": "sample string 1",
        "ExternalId1": "sample string 2",
        "ExternalId2": "sample string 3",
        "ExternalIdType": "sample string 4"
      }
    ],
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
    ],
    "NonTaxable": true,
    "NotForSale": true,
    "Hide": true,
    "GiftCertificate": true,
    "HomeSpecial": true,
    "CategorySpecial": true,
    "NonSearchable": true,
    "GiftWrapItem": true,
    "ShipCost": 1.1,
    "Weight": 1.1,
    "Height": 1.1,
    "Width": 1.1,
    "Depth": 1.1,
    "SelfShip": true,
    "FreeShipping": true,
    "RewardPoints": 1,
    "RedeemPoints": 1,
    "DisableRewards": true,
    "StockAlert": 1,
    "ReorderQuantity": 1,
    "InStockMessage": "sample string 6",
    "OutOfStockMessage": "sample string 7",
    "BackOrderMessage": "sample string 8",
    "InventoryControl": 1,
    "WarehouseLocation": "sample string 9",
    "WarehouseBin": "sample string 10",
    "WarehouseAisle": "sample string 11",
    "WarehouseCustom": "sample string 12",
    "Description": "sample string 13",
    "Keywords": "sample string 14",
    "ExtraField1": "sample string 15",
    "ExtraField2": "sample string 16",
    "ExtraField3": "sample string 17",
    "ExtraField4": "sample string 18",
    "ExtraField5": "sample string 19",
    "ExtraField6": "sample string 20",
    "ExtraField7": "sample string 21",
    "ExtraField8": "sample string 22",
    "ExtraField9": "sample string 23",
    "ExtraField10": "sample string 24",
    "ExtraField11": "sample string 25",
    "ExtraField12": "sample string 26",
    "ExtraField13": "sample string 27",
    "FeatureList": [
      {
        "FeatureID": 1,
        "FeatureTitle": "sample string 1",
        "FeatureDescription": "sample string 2"
      },
      {
        "FeatureID": 1,
        "FeatureTitle": "sample string 1",
        "FeatureDescription": "sample string 2"
      }
    ],
    "PluginList": {
      "sample string 1": "sample string 2",
      "sample string 3": "sample string 4"
    },
    "SampleEnable": true,
    "SampleName": "sample string 28",
    "SampleSKUPrefix": "sample string 29",
    "SamplePrice": 1.1,
    "SampleWeight": 1.1,
    "ReviewAverage": 1.1,
    "ReviewCount": 1,
    "MainImageFile": "sample string 30",
    "MainImageCaption": "sample string 31",
    "ThumbnailFile": "sample string 32",
    "MediaFile": "sample string 33",
    "AdditionalImageFile2": "sample string 34",
    "AdditionalImageCaption2": "sample string 35",
    "AdditionalImageFile3": "sample string 36",
    "AdditionalImageCaption3": "sample string 37",
    "AdditionalImageFile4": "sample string 38",
    "AdditionalImageCaption4": "sample string 39",
    "ImageGalleryList": [
      {
        "ImageGalleryID": 1,
        "ImageGalleryFile": "sample string 1",
        "ImageGalleryCaption": "sample string 2",
        "ImageGallerySorting": 1
      },
      {
        "ImageGalleryID": 1,
        "ImageGalleryFile": "sample string 1",
        "ImageGalleryCaption": "sample string 2",
        "ImageGallerySorting": 1
      }
    ],
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
    "AdvancedOptionList": [
      {
        "AdvancedOptionCode": "sample string 1",
        "AdvancedOptionSufix": "sample string 2",
        "AdvancedOptionName": "sample string 3",
        "AdvancedOptionCost": 1.1,
        "AdvancedOptionStock": 1,
        "AdvancedOptionWeight": 1.1,
        "AdvancedOptionPrice": 1.1,
        "AdvancedOptionGTIN": "sample string 4"
      },
      {
        "AdvancedOptionCode": "sample string 1",
        "AdvancedOptionSufix": "sample string 2",
        "AdvancedOptionName": "sample string 3",
        "AdvancedOptionCost": 1.1,
        "AdvancedOptionStock": 1,
        "AdvancedOptionWeight": 1.1,
        "AdvancedOptionPrice": 1.1,
        "AdvancedOptionGTIN": "sample string 4"
      }
    ],
    "RelatedProductList": [
      {
        "RelatedIndexID": 1,
        "RelatedProductID": 1,
        "RelatedProductSorting": 1
      },
      {
        "RelatedIndexID": 1,
        "RelatedProductID": 1,
        "RelatedProductSorting": 1
      }
    ],
    "UpSellingItemList": [
      {
        "UpSellingIndexID": 1,
        "UpSellingItemID": 1,
        "UpSellingItemSorting": 1
      },
      {
        "UpSellingIndexID": 1,
        "UpSellingItemID": 1,
        "UpSellingItemSorting": 1
      }
    ],
    "DiscountList": [
      {
        "DiscountID": 1,
        "DiscountPriceLevel": 1,
        "DiscountLowbound": 1,
        "DiscountUpbound": 1,
        "DiscountPrice": 1.1,
        "DiscountPercentage": true
      },
      {
        "DiscountID": 1,
        "DiscountPriceLevel": 1,
        "DiscountLowbound": 1,
        "DiscountUpbound": 1,
        "DiscountPrice": 1.1,
        "DiscountPercentage": true
      }
    ],
    "DoNotUseCategoryOptions": true,
    "DateCreated": "02/18/2019 16:58",
    "ListingTemplateID": 1,
    "ListingTemplateName": "sample string 40",
    "LoginRequiredOptionID": 1,
    "LoginRequiredOptionName": "sample string 41",
    "LoginRequiredOptionRedirectTo": "sample string 42",
    "AllowAccessCustomerGroupID": 1,
    "AllowAccessCustomerGroupName": "sample string 43",
    "RMAMaxPeriod": "sample string 44",
    "CanonicalUrl": "sample string 45",
    "TaxCode": "sample string 46",
    "DisplayText": "sample string 47",
    "MinimumQuantity": 1.1,
    "MaximumQuantity": 1.1,
    "AllowOnlyMultiples": true,
    "AllowFractionalQuantity": true,
    "QuantityOptions": "sample string 48",
    "GroupOptionsForQuantityPricing": true,
    "ApplyQuantityDiscountToOptions": true,
    "EnableMakeAnOfferFeature": true,
    "MinimumAcceptableOffer": "sample string 49",
    "PriceLevel1": 1.1,
    "PriceLevel1Hide": true,
    "PriceLevel2": 1.1,
    "PriceLevel2Hide": true,
    "PriceLevel3": 1.1,
    "PriceLevel3Hide": true,
    "PriceLevel4": 1.1,
    "PriceLevel4Hide": true,
    "PriceLevel5": 1.1,
    "PriceLevel5Hide": true,
    "PriceLevel6": 1.1,
    "PriceLevel6Hide": true,
    "PriceLevel7": 1.1,
    "PriceLevel7Hide": true,
    "PriceLevel8": 1.1,
    "PriceLevel8Hide": true,
    "PriceLevel9": 1.1,
    "PriceLevel9Hide": true,
    "PriceLevel10": 1.1,
    "PriceLevel10Hide": true,
    "BuyButtonLink": "sample string 50",
    "ProductLink": "sample string 51",
    "Title": "sample string 52",
    "CustomFileName": "sample string 53",
    "RedirectLink": "sample string 54",
    "MetaTags": "sample string 55",
    "SpecialInstructions": "sample string 56",
    "AssignKey": true,
    "ReUseKeys": true,
    "SerialList": [
      {
        "SerialID": 1,
        "SerialUses": 1,
        "SerialCode": "sample string 1"
      },
      {
        "SerialID": 1,
        "SerialUses": 1,
        "SerialCode": "sample string 1"
      }
    ],
    "EProductList": [
      {
        "FileNumber": 1,
        "FilePath": "sample string 1"
      },
      {
        "FileNumber": 1,
        "FilePath": "sample string 1"
      }
    ]
  }
]
```

Retrieve a list of all products from a specific category. See [Data Structures](#product-object) for more information on the product object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Categories/{categoryid}/Products`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
categoryid | Required | The id of the category you want the products from.
limit | optional | Maximum number of items that can be returned
offset | optional | Starting point for the return data
countonly | optional | Count the number of rows only
sku | optional | Retrieve products by SKU
name | optional | Retrieve products by name
costfrom | optional | Retrieve products over a specified cost
costto | optional | Retrieve products under a specified cost
pricefrom | optional | Retrieve products over a specified price
priceto | optional | Retrieve products under a specified price
stockfrom | optional | Retrieve products over a specified stock
stockto | optional | Retrieve products under a specified stock
hide | optional | Retrieve hidden products
freeshipping | optional | Retrieve products set for free shipping
onsale | optional | Retrieve products on sale
nontax | optional | Retrieve non-taxable products
notforsale | optional | Retrieve products set as not for sale
giftcertificate | optional | Retrieve gift certificate products
homespecial | optional | Retrieve products set to home special
categoryspecial | optional | Retrieve products set to category special
nonsearchable | optional | Retrieve non-searchable products
selfship | optional | Retrieve products that ship by themselves
rewarddisable | optional | Retrieve products that are disabled for rewards points
lastupdatestart |optional | Start Date that the product was last updated (mm/dd/yyyy hh:mm:ss)
lastupdateend | optional | End Date that the product was last updated (mm/dd/yyyy hh:mm:ss)

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified Category does not exist or contains no products.

## Products by Distributor

### Retrieve a list of products from a specific distributor

> To retrieve a list of products from a specific distributor, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). 

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors/{distributorid}/Products?limit=&offset=&countonly=&sku=&name=&costfrom=&costto=&pricefrom=&priceto=&stockfrom=&stockto=&hide=&freeshipping=&onsale=&nontax=&notforsale=&giftcertificate=&homespecial=&categoryspecial=&nonsearchable=&selfship=&rewarddisable=&lastupdatestart=&lastupdateend=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Distributors/{distributorid}/Products"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors/{distributorid}/Products?limit=&offset=&countonly=&sku=&name=&costfrom=&costto=&pricefrom=&priceto=&stockfrom=&stockto=&hide=&freeshipping=&onsale=&nontax=&notforsale=&giftcertificate=&homespecial=&categoryspecial=&nonsearchable=&selfship=&rewarddisable=&lastupdatestart=&lastupdateend=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors/{distributorid}/Products?limit=&offset=&countonly=&sku=&name=&costfrom=&costto=&pricefrom=&priceto=&stockfrom=&stockto=&hide=&freeshipping=&onsale=&nontax=&notforsale=&giftcertificate=&homespecial=&categoryspecial=&nonsearchable=&selfship=&rewarddisable=&lastupdatestart=&lastupdateend=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors/{distributorid}/Products?limit=&offset=&countonly=&sku=&name=&costfrom=&costto=&pricefrom=&priceto=&stockfrom=&stockto=&hide=&freeshipping=&onsale=&nontax=&notforsale=&giftcertificate=&homespecial=&categoryspecial=&nonsearchable=&selfship=&rewarddisable=&lastupdatestart=&lastupdateend=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#product-object) for more information):

```json
[
  {
    "SKUInfo": {
      "CatalogID": 1,
      "SKU": "sample string 1",
      "Name": "sample string 2",
      "Cost": 1.1,
      "Price": 1.1,
      "Currency": "sample string 3",
      "RetailPrice": 1.1,
      "SalePrice": 1.1,
      "OnSale": true,
      "Stock": 1.1
    },
    "MFGID": "sample string 1",
    "ShortDescription": "sample string 2",
    "ManufacturerID": 1,
    "ManufacturerName": "sample string 3",
    "DistributorList": [
      {
        "DistributorID": 1,
        "DistributorName": "sample string 1",
        "DistributorItemCost": 1.1,
        "DistributorItemID": "sample string 2",
        "DistributorStockID": "sample string 3"
      },
      {
        "DistributorID": 1,
        "DistributorName": "sample string 1",
        "DistributorItemCost": 1.1,
        "DistributorItemID": "sample string 2",
        "DistributorStockID": "sample string 3"
      }
    ],
    "LastUpdate": "02/18/2019 16:58",
    "UserID": "sample string 4",
    "GTIN": "sample string 5",
    "CategoryList": [
      {
        "CategoryID": 1,
        "CategoryName": "sample string 1"
      },
      {
        "CategoryID": 1,
        "CategoryName": "sample string 1"
      }
    ],
    "ExternalIdsList": [
      {
        "ID": 1,
        "AdvancedOptionSufix": "sample string 1",
        "ExternalId1": "sample string 2",
        "ExternalId2": "sample string 3",
        "ExternalIdType": "sample string 4"
      },
      {
        "ID": 1,
        "AdvancedOptionSufix": "sample string 1",
        "ExternalId1": "sample string 2",
        "ExternalId2": "sample string 3",
        "ExternalIdType": "sample string 4"
      }
    ],
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
    ],
    "NonTaxable": true,
    "NotForSale": true,
    "Hide": true,
    "GiftCertificate": true,
    "HomeSpecial": true,
    "CategorySpecial": true,
    "NonSearchable": true,
    "GiftWrapItem": true,
    "ShipCost": 1.1,
    "Weight": 1.1,
    "Height": 1.1,
    "Width": 1.1,
    "Depth": 1.1,
    "SelfShip": true,
    "FreeShipping": true,
    "RewardPoints": 1,
    "RedeemPoints": 1,
    "DisableRewards": true,
    "StockAlert": 1,
    "ReorderQuantity": 1,
    "InStockMessage": "sample string 6",
    "OutOfStockMessage": "sample string 7",
    "BackOrderMessage": "sample string 8",
    "InventoryControl": 1,
    "WarehouseLocation": "sample string 9",
    "WarehouseBin": "sample string 10",
    "WarehouseAisle": "sample string 11",
    "WarehouseCustom": "sample string 12",
    "Description": "sample string 13",
    "Keywords": "sample string 14",
    "ExtraField1": "sample string 15",
    "ExtraField2": "sample string 16",
    "ExtraField3": "sample string 17",
    "ExtraField4": "sample string 18",
    "ExtraField5": "sample string 19",
    "ExtraField6": "sample string 20",
    "ExtraField7": "sample string 21",
    "ExtraField8": "sample string 22",
    "ExtraField9": "sample string 23",
    "ExtraField10": "sample string 24",
    "ExtraField11": "sample string 25",
    "ExtraField12": "sample string 26",
    "ExtraField13": "sample string 27",
    "FeatureList": [
      {
        "FeatureID": 1,
        "FeatureTitle": "sample string 1",
        "FeatureDescription": "sample string 2"
      },
      {
        "FeatureID": 1,
        "FeatureTitle": "sample string 1",
        "FeatureDescription": "sample string 2"
      }
    ],
    "PluginList": {
      "sample string 1": "sample string 2",
      "sample string 3": "sample string 4"
    },
    "SampleEnable": true,
    "SampleName": "sample string 28",
    "SampleSKUPrefix": "sample string 29",
    "SamplePrice": 1.1,
    "SampleWeight": 1.1,
    "ReviewAverage": 1.1,
    "ReviewCount": 1,
    "MainImageFile": "sample string 30",
    "MainImageCaption": "sample string 31",
    "ThumbnailFile": "sample string 32",
    "MediaFile": "sample string 33",
    "AdditionalImageFile2": "sample string 34",
    "AdditionalImageCaption2": "sample string 35",
    "AdditionalImageFile3": "sample string 36",
    "AdditionalImageCaption3": "sample string 37",
    "AdditionalImageFile4": "sample string 38",
    "AdditionalImageCaption4": "sample string 39",
    "ImageGalleryList": [
      {
        "ImageGalleryID": 1,
        "ImageGalleryFile": "sample string 1",
        "ImageGalleryCaption": "sample string 2",
        "ImageGallerySorting": 1
      },
      {
        "ImageGalleryID": 1,
        "ImageGalleryFile": "sample string 1",
        "ImageGalleryCaption": "sample string 2",
        "ImageGallerySorting": 1
      }
    ],
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
    "AdvancedOptionList": [
      {
        "AdvancedOptionCode": "sample string 1",
        "AdvancedOptionSufix": "sample string 2",
        "AdvancedOptionName": "sample string 3",
        "AdvancedOptionCost": 1.1,
        "AdvancedOptionStock": 1,
        "AdvancedOptionWeight": 1.1,
        "AdvancedOptionPrice": 1.1,
        "AdvancedOptionGTIN": "sample string 4"
      },
      {
        "AdvancedOptionCode": "sample string 1",
        "AdvancedOptionSufix": "sample string 2",
        "AdvancedOptionName": "sample string 3",
        "AdvancedOptionCost": 1.1,
        "AdvancedOptionStock": 1,
        "AdvancedOptionWeight": 1.1,
        "AdvancedOptionPrice": 1.1,
        "AdvancedOptionGTIN": "sample string 4"
      }
    ],
    "RelatedProductList": [
      {
        "RelatedIndexID": 1,
        "RelatedProductID": 1,
        "RelatedProductSorting": 1
      },
      {
        "RelatedIndexID": 1,
        "RelatedProductID": 1,
        "RelatedProductSorting": 1
      }
    ],
    "UpSellingItemList": [
      {
        "UpSellingIndexID": 1,
        "UpSellingItemID": 1,
        "UpSellingItemSorting": 1
      },
      {
        "UpSellingIndexID": 1,
        "UpSellingItemID": 1,
        "UpSellingItemSorting": 1
      }
    ],
    "DiscountList": [
      {
        "DiscountID": 1,
        "DiscountPriceLevel": 1,
        "DiscountLowbound": 1,
        "DiscountUpbound": 1,
        "DiscountPrice": 1.1,
        "DiscountPercentage": true
      },
      {
        "DiscountID": 1,
        "DiscountPriceLevel": 1,
        "DiscountLowbound": 1,
        "DiscountUpbound": 1,
        "DiscountPrice": 1.1,
        "DiscountPercentage": true
      }
    ],
    "DoNotUseCategoryOptions": true,
    "DateCreated": "02/18/2019 16:58",
    "ListingTemplateID": 1,
    "ListingTemplateName": "sample string 40",
    "LoginRequiredOptionID": 1,
    "LoginRequiredOptionName": "sample string 41",
    "LoginRequiredOptionRedirectTo": "sample string 42",
    "AllowAccessCustomerGroupID": 1,
    "AllowAccessCustomerGroupName": "sample string 43",
    "RMAMaxPeriod": "sample string 44",
    "CanonicalUrl": "sample string 45",
    "TaxCode": "sample string 46",
    "DisplayText": "sample string 47",
    "MinimumQuantity": 1.1,
    "MaximumQuantity": 1.1,
    "AllowOnlyMultiples": true,
    "AllowFractionalQuantity": true,
    "QuantityOptions": "sample string 48",
    "GroupOptionsForQuantityPricing": true,
    "ApplyQuantityDiscountToOptions": true,
    "EnableMakeAnOfferFeature": true,
    "MinimumAcceptableOffer": "sample string 49",
    "PriceLevel1": 1.1,
    "PriceLevel1Hide": true,
    "PriceLevel2": 1.1,
    "PriceLevel2Hide": true,
    "PriceLevel3": 1.1,
    "PriceLevel3Hide": true,
    "PriceLevel4": 1.1,
    "PriceLevel4Hide": true,
    "PriceLevel5": 1.1,
    "PriceLevel5Hide": true,
    "PriceLevel6": 1.1,
    "PriceLevel6Hide": true,
    "PriceLevel7": 1.1,
    "PriceLevel7Hide": true,
    "PriceLevel8": 1.1,
    "PriceLevel8Hide": true,
    "PriceLevel9": 1.1,
    "PriceLevel9Hide": true,
    "PriceLevel10": 1.1,
    "PriceLevel10Hide": true,
    "BuyButtonLink": "sample string 50",
    "ProductLink": "sample string 51",
    "Title": "sample string 52",
    "CustomFileName": "sample string 53",
    "RedirectLink": "sample string 54",
    "MetaTags": "sample string 55",
    "SpecialInstructions": "sample string 56",
    "AssignKey": true,
    "ReUseKeys": true,
    "SerialList": [
      {
        "SerialID": 1,
        "SerialUses": 1,
        "SerialCode": "sample string 1"
      },
      {
        "SerialID": 1,
        "SerialUses": 1,
        "SerialCode": "sample string 1"
      }
    ],
    "EProductList": [
      {
        "FileNumber": 1,
        "FilePath": "sample string 1"
      },
      {
        "FileNumber": 1,
        "FilePath": "sample string 1"
      }
    ]
  },
  {
    "SKUInfo": {
      "CatalogID": 1,
      "SKU": "sample string 1",
      "Name": "sample string 2",
      "Cost": 1.1,
      "Price": 1.1,
      "Currency": "sample string 3",
      "RetailPrice": 1.1,
      "SalePrice": 1.1,
      "OnSale": true,
      "Stock": 1.1
    },
    "MFGID": "sample string 1",
    "ShortDescription": "sample string 2",
    "ManufacturerID": 1,
    "ManufacturerName": "sample string 3",
    "DistributorList": [
      {
        "DistributorID": 1,
        "DistributorName": "sample string 1",
        "DistributorItemCost": 1.1,
        "DistributorItemID": "sample string 2",
        "DistributorStockID": "sample string 3"
      },
      {
        "DistributorID": 1,
        "DistributorName": "sample string 1",
        "DistributorItemCost": 1.1,
        "DistributorItemID": "sample string 2",
        "DistributorStockID": "sample string 3"
      }
    ],
    "LastUpdate": "02/18/2019 16:58",
    "UserID": "sample string 4",
    "GTIN": "sample string 5",
    "CategoryList": [
      {
        "CategoryID": 1,
        "CategoryName": "sample string 1"
      },
      {
        "CategoryID": 1,
        "CategoryName": "sample string 1"
      }
    ],
    "ExternalIdsList": [
      {
        "ID": 1,
        "AdvancedOptionSufix": "sample string 1",
        "ExternalId1": "sample string 2",
        "ExternalId2": "sample string 3",
        "ExternalIdType": "sample string 4"
      },
      {
        "ID": 1,
        "AdvancedOptionSufix": "sample string 1",
        "ExternalId1": "sample string 2",
        "ExternalId2": "sample string 3",
        "ExternalIdType": "sample string 4"
      }
    ],
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
    ],
    "NonTaxable": true,
    "NotForSale": true,
    "Hide": true,
    "GiftCertificate": true,
    "HomeSpecial": true,
    "CategorySpecial": true,
    "NonSearchable": true,
    "GiftWrapItem": true,
    "ShipCost": 1.1,
    "Weight": 1.1,
    "Height": 1.1,
    "Width": 1.1,
    "Depth": 1.1,
    "SelfShip": true,
    "FreeShipping": true,
    "RewardPoints": 1,
    "RedeemPoints": 1,
    "DisableRewards": true,
    "StockAlert": 1,
    "ReorderQuantity": 1,
    "InStockMessage": "sample string 6",
    "OutOfStockMessage": "sample string 7",
    "BackOrderMessage": "sample string 8",
    "InventoryControl": 1,
    "WarehouseLocation": "sample string 9",
    "WarehouseBin": "sample string 10",
    "WarehouseAisle": "sample string 11",
    "WarehouseCustom": "sample string 12",
    "Description": "sample string 13",
    "Keywords": "sample string 14",
    "ExtraField1": "sample string 15",
    "ExtraField2": "sample string 16",
    "ExtraField3": "sample string 17",
    "ExtraField4": "sample string 18",
    "ExtraField5": "sample string 19",
    "ExtraField6": "sample string 20",
    "ExtraField7": "sample string 21",
    "ExtraField8": "sample string 22",
    "ExtraField9": "sample string 23",
    "ExtraField10": "sample string 24",
    "ExtraField11": "sample string 25",
    "ExtraField12": "sample string 26",
    "ExtraField13": "sample string 27",
    "FeatureList": [
      {
        "FeatureID": 1,
        "FeatureTitle": "sample string 1",
        "FeatureDescription": "sample string 2"
      },
      {
        "FeatureID": 1,
        "FeatureTitle": "sample string 1",
        "FeatureDescription": "sample string 2"
      }
    ],
    "PluginList": {
      "sample string 1": "sample string 2",
      "sample string 3": "sample string 4"
    },
    "SampleEnable": true,
    "SampleName": "sample string 28",
    "SampleSKUPrefix": "sample string 29",
    "SamplePrice": 1.1,
    "SampleWeight": 1.1,
    "ReviewAverage": 1.1,
    "ReviewCount": 1,
    "MainImageFile": "sample string 30",
    "MainImageCaption": "sample string 31",
    "ThumbnailFile": "sample string 32",
    "MediaFile": "sample string 33",
    "AdditionalImageFile2": "sample string 34",
    "AdditionalImageCaption2": "sample string 35",
    "AdditionalImageFile3": "sample string 36",
    "AdditionalImageCaption3": "sample string 37",
    "AdditionalImageFile4": "sample string 38",
    "AdditionalImageCaption4": "sample string 39",
    "ImageGalleryList": [
      {
        "ImageGalleryID": 1,
        "ImageGalleryFile": "sample string 1",
        "ImageGalleryCaption": "sample string 2",
        "ImageGallerySorting": 1
      },
      {
        "ImageGalleryID": 1,
        "ImageGalleryFile": "sample string 1",
        "ImageGalleryCaption": "sample string 2",
        "ImageGallerySorting": 1
      }
    ],
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
    "AdvancedOptionList": [
      {
        "AdvancedOptionCode": "sample string 1",
        "AdvancedOptionSufix": "sample string 2",
        "AdvancedOptionName": "sample string 3",
        "AdvancedOptionCost": 1.1,
        "AdvancedOptionStock": 1,
        "AdvancedOptionWeight": 1.1,
        "AdvancedOptionPrice": 1.1,
        "AdvancedOptionGTIN": "sample string 4"
      },
      {
        "AdvancedOptionCode": "sample string 1",
        "AdvancedOptionSufix": "sample string 2",
        "AdvancedOptionName": "sample string 3",
        "AdvancedOptionCost": 1.1,
        "AdvancedOptionStock": 1,
        "AdvancedOptionWeight": 1.1,
        "AdvancedOptionPrice": 1.1,
        "AdvancedOptionGTIN": "sample string 4"
      }
    ],
    "RelatedProductList": [
      {
        "RelatedIndexID": 1,
        "RelatedProductID": 1,
        "RelatedProductSorting": 1
      },
      {
        "RelatedIndexID": 1,
        "RelatedProductID": 1,
        "RelatedProductSorting": 1
      }
    ],
    "UpSellingItemList": [
      {
        "UpSellingIndexID": 1,
        "UpSellingItemID": 1,
        "UpSellingItemSorting": 1
      },
      {
        "UpSellingIndexID": 1,
        "UpSellingItemID": 1,
        "UpSellingItemSorting": 1
      }
    ],
    "DiscountList": [
      {
        "DiscountID": 1,
        "DiscountPriceLevel": 1,
        "DiscountLowbound": 1,
        "DiscountUpbound": 1,
        "DiscountPrice": 1.1,
        "DiscountPercentage": true
      },
      {
        "DiscountID": 1,
        "DiscountPriceLevel": 1,
        "DiscountLowbound": 1,
        "DiscountUpbound": 1,
        "DiscountPrice": 1.1,
        "DiscountPercentage": true
      }
    ],
    "DoNotUseCategoryOptions": true,
    "DateCreated": "02/18/2019 16:58",
    "ListingTemplateID": 1,
    "ListingTemplateName": "sample string 40",
    "LoginRequiredOptionID": 1,
    "LoginRequiredOptionName": "sample string 41",
    "LoginRequiredOptionRedirectTo": "sample string 42",
    "AllowAccessCustomerGroupID": 1,
    "AllowAccessCustomerGroupName": "sample string 43",
    "RMAMaxPeriod": "sample string 44",
    "CanonicalUrl": "sample string 45",
    "TaxCode": "sample string 46",
    "DisplayText": "sample string 47",
    "MinimumQuantity": 1.1,
    "MaximumQuantity": 1.1,
    "AllowOnlyMultiples": true,
    "AllowFractionalQuantity": true,
    "QuantityOptions": "sample string 48",
    "GroupOptionsForQuantityPricing": true,
    "ApplyQuantityDiscountToOptions": true,
    "EnableMakeAnOfferFeature": true,
    "MinimumAcceptableOffer": "sample string 49",
    "PriceLevel1": 1.1,
    "PriceLevel1Hide": true,
    "PriceLevel2": 1.1,
    "PriceLevel2Hide": true,
    "PriceLevel3": 1.1,
    "PriceLevel3Hide": true,
    "PriceLevel4": 1.1,
    "PriceLevel4Hide": true,
    "PriceLevel5": 1.1,
    "PriceLevel5Hide": true,
    "PriceLevel6": 1.1,
    "PriceLevel6Hide": true,
    "PriceLevel7": 1.1,
    "PriceLevel7Hide": true,
    "PriceLevel8": 1.1,
    "PriceLevel8Hide": true,
    "PriceLevel9": 1.1,
    "PriceLevel9Hide": true,
    "PriceLevel10": 1.1,
    "PriceLevel10Hide": true,
    "BuyButtonLink": "sample string 50",
    "ProductLink": "sample string 51",
    "Title": "sample string 52",
    "CustomFileName": "sample string 53",
    "RedirectLink": "sample string 54",
    "MetaTags": "sample string 55",
    "SpecialInstructions": "sample string 56",
    "AssignKey": true,
    "ReUseKeys": true,
    "SerialList": [
      {
        "SerialID": 1,
        "SerialUses": 1,
        "SerialCode": "sample string 1"
      },
      {
        "SerialID": 1,
        "SerialUses": 1,
        "SerialCode": "sample string 1"
      }
    ],
    "EProductList": [
      {
        "FileNumber": 1,
        "FilePath": "sample string 1"
      },
      {
        "FileNumber": 1,
        "FilePath": "sample string 1"
      }
    ]
  }
]
```

Retrieve a list of all products from a specific distributor. See [Data Structures](#product-object) for more information on the product object. 

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Distributors/{distributorid}/Products`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
distributorid | Required | The id of the distributor you want the products from.
limit | optional | Maximum number of items that can be returned
offset | optional | Starting point for the return data
countonly | optional | Count the number of rows only
sku | optional | Retrieve products by SKU
name | optional | Retrieve products by name
costfrom | optional | Retrieve products over a specified cost
costto | optional | Retrieve products under a specified cost
pricefrom | optional | Retrieve products over a specified price
priceto | optional | Retrieve products under a specified price
stockfrom | optional | Retrieve products over a specified stock
stockto | optional | Retrieve products under a specified stock
hide | optional | Retrieve hidden products
freeshipping | optional | Retrieve products set for free shipping
onsale | optional | Retrieve products on sale
nontax | optional | Retrieve non-taxable products
notforsale | optional | Retrieve products set as not for sale
giftcertificate | optional | Retrieve gift certificate products
homespecial | optional | Retrieve products set to home special
categoryspecial | optional | Retrieve products set to category special
nonsearchable | optional | Retrieve non-searchable products
selfship | optional | Retrieve products that ship by themselves
rewarddisable | optional | Retrieve products that are disabled for rewards points
lastupdatestart |optional | Start Date that the product was last updated (mm/dd/yyyy hh:mm:ss)
lastupdateend | optional | End Date that the product was last updated (mm/dd/yyyy hh:mm:ss)

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified Distributor does not exist or contains no products.

## Products by Manufacturer

### Retrieve a list of products from a specific manufacturer

> To retrieve products from a specific manufacturer, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers/{manufacturerid}/Products?limit=&offset=&countonly=&sku=&name=&costfrom=&costto=&pricefrom=&priceto=&stockfrom=&stockto=&hide=&freeshipping=&onsale=&nontax=&notforsale=&giftcertificate=&homespecial=&categoryspecial=&nonsearchable=&selfship=&rewarddisable=&lastupdatestart=&lastupdateend=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Manufacturers/{manufacturerid}/Products"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers/{manufacturerid}/Products?limit=&offset=&countonly=&sku=&name=&costfrom=&costto=&pricefrom=&priceto=&stockfrom=&stockto=&hide=&freeshipping=&onsale=&nontax=&notforsale=&giftcertificate=&homespecial=&categoryspecial=&nonsearchable=&selfship=&rewarddisable=&lastupdatestart=&lastupdateend=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers/{manufacturerid}/Products?limit=&offset=&countonly=&sku=&name=&costfrom=&costto=&pricefrom=&priceto=&stockfrom=&stockto=&hide=&freeshipping=&onsale=&nontax=&notforsale=&giftcertificate=&homespecial=&categoryspecial=&nonsearchable=&selfship=&rewarddisable=&lastupdatestart=&lastupdateend=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers/{manufacturerid}/Products?limit=&offset=&countonly=&sku=&name=&costfrom=&costto=&pricefrom=&priceto=&stockfrom=&stockto=&hide=&freeshipping=&onsale=&nontax=&notforsale=&giftcertificate=&homespecial=&categoryspecial=&nonsearchable=&selfship=&rewarddisable=&lastupdatestart=&lastupdateend=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#product-object) for more information on the product object):

```json
[
  {
    "SKUInfo": {
      "CatalogID": 1,
      "SKU": "sample string 1",
      "Name": "sample string 2",
      "Cost": 1.1,
      "Price": 1.1,
      "Currency": "sample string 3",
      "RetailPrice": 1.1,
      "SalePrice": 1.1,
      "OnSale": true,
      "Stock": 1.1
    },
    "MFGID": "sample string 1",
    "ShortDescription": "sample string 2",
    "ManufacturerID": 1,
    "ManufacturerName": "sample string 3",
    "DistributorList": [
      {
        "DistributorID": 1,
        "DistributorName": "sample string 1",
        "DistributorItemCost": 1.1,
        "DistributorItemID": "sample string 2",
        "DistributorStockID": "sample string 3"
      },
      {
        "DistributorID": 1,
        "DistributorName": "sample string 1",
        "DistributorItemCost": 1.1,
        "DistributorItemID": "sample string 2",
        "DistributorStockID": "sample string 3"
      }
    ],
    "LastUpdate": "02/18/2019 16:58",
    "UserID": "sample string 4",
    "GTIN": "sample string 5",
    "CategoryList": [
      {
        "CategoryID": 1,
        "CategoryName": "sample string 1"
      },
      {
        "CategoryID": 1,
        "CategoryName": "sample string 1"
      }
    ],
    "ExternalIdsList": [
      {
        "ID": 1,
        "AdvancedOptionSufix": "sample string 1",
        "ExternalId1": "sample string 2",
        "ExternalId2": "sample string 3",
        "ExternalIdType": "sample string 4"
      },
      {
        "ID": 1,
        "AdvancedOptionSufix": "sample string 1",
        "ExternalId1": "sample string 2",
        "ExternalId2": "sample string 3",
        "ExternalIdType": "sample string 4"
      }
    ],
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
    ],
    "NonTaxable": true,
    "NotForSale": true,
    "Hide": true,
    "GiftCertificate": true,
    "HomeSpecial": true,
    "CategorySpecial": true,
    "NonSearchable": true,
    "GiftWrapItem": true,
    "ShipCost": 1.1,
    "Weight": 1.1,
    "Height": 1.1,
    "Width": 1.1,
    "Depth": 1.1,
    "SelfShip": true,
    "FreeShipping": true,
    "RewardPoints": 1,
    "RedeemPoints": 1,
    "DisableRewards": true,
    "StockAlert": 1,
    "ReorderQuantity": 1,
    "InStockMessage": "sample string 6",
    "OutOfStockMessage": "sample string 7",
    "BackOrderMessage": "sample string 8",
    "InventoryControl": 1,
    "WarehouseLocation": "sample string 9",
    "WarehouseBin": "sample string 10",
    "WarehouseAisle": "sample string 11",
    "WarehouseCustom": "sample string 12",
    "Description": "sample string 13",
    "Keywords": "sample string 14",
    "ExtraField1": "sample string 15",
    "ExtraField2": "sample string 16",
    "ExtraField3": "sample string 17",
    "ExtraField4": "sample string 18",
    "ExtraField5": "sample string 19",
    "ExtraField6": "sample string 20",
    "ExtraField7": "sample string 21",
    "ExtraField8": "sample string 22",
    "ExtraField9": "sample string 23",
    "ExtraField10": "sample string 24",
    "ExtraField11": "sample string 25",
    "ExtraField12": "sample string 26",
    "ExtraField13": "sample string 27",
    "FeatureList": [
      {
        "FeatureID": 1,
        "FeatureTitle": "sample string 1",
        "FeatureDescription": "sample string 2"
      },
      {
        "FeatureID": 1,
        "FeatureTitle": "sample string 1",
        "FeatureDescription": "sample string 2"
      }
    ],
    "PluginList": {
      "sample string 1": "sample string 2",
      "sample string 3": "sample string 4"
    },
    "SampleEnable": true,
    "SampleName": "sample string 28",
    "SampleSKUPrefix": "sample string 29",
    "SamplePrice": 1.1,
    "SampleWeight": 1.1,
    "ReviewAverage": 1.1,
    "ReviewCount": 1,
    "MainImageFile": "sample string 30",
    "MainImageCaption": "sample string 31",
    "ThumbnailFile": "sample string 32",
    "MediaFile": "sample string 33",
    "AdditionalImageFile2": "sample string 34",
    "AdditionalImageCaption2": "sample string 35",
    "AdditionalImageFile3": "sample string 36",
    "AdditionalImageCaption3": "sample string 37",
    "AdditionalImageFile4": "sample string 38",
    "AdditionalImageCaption4": "sample string 39",
    "ImageGalleryList": [
      {
        "ImageGalleryID": 1,
        "ImageGalleryFile": "sample string 1",
        "ImageGalleryCaption": "sample string 2",
        "ImageGallerySorting": 1
      },
      {
        "ImageGalleryID": 1,
        "ImageGalleryFile": "sample string 1",
        "ImageGalleryCaption": "sample string 2",
        "ImageGallerySorting": 1
      }
    ],
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
    "AdvancedOptionList": [
      {
        "AdvancedOptionCode": "sample string 1",
        "AdvancedOptionSufix": "sample string 2",
        "AdvancedOptionName": "sample string 3",
        "AdvancedOptionCost": 1.1,
        "AdvancedOptionStock": 1,
        "AdvancedOptionWeight": 1.1,
        "AdvancedOptionPrice": 1.1,
        "AdvancedOptionGTIN": "sample string 4"
      },
      {
        "AdvancedOptionCode": "sample string 1",
        "AdvancedOptionSufix": "sample string 2",
        "AdvancedOptionName": "sample string 3",
        "AdvancedOptionCost": 1.1,
        "AdvancedOptionStock": 1,
        "AdvancedOptionWeight": 1.1,
        "AdvancedOptionPrice": 1.1,
        "AdvancedOptionGTIN": "sample string 4"
      }
    ],
    "RelatedProductList": [
      {
        "RelatedIndexID": 1,
        "RelatedProductID": 1,
        "RelatedProductSorting": 1
      },
      {
        "RelatedIndexID": 1,
        "RelatedProductID": 1,
        "RelatedProductSorting": 1
      }
    ],
    "UpSellingItemList": [
      {
        "UpSellingIndexID": 1,
        "UpSellingItemID": 1,
        "UpSellingItemSorting": 1
      },
      {
        "UpSellingIndexID": 1,
        "UpSellingItemID": 1,
        "UpSellingItemSorting": 1
      }
    ],
    "DiscountList": [
      {
        "DiscountID": 1,
        "DiscountPriceLevel": 1,
        "DiscountLowbound": 1,
        "DiscountUpbound": 1,
        "DiscountPrice": 1.1,
        "DiscountPercentage": true
      },
      {
        "DiscountID": 1,
        "DiscountPriceLevel": 1,
        "DiscountLowbound": 1,
        "DiscountUpbound": 1,
        "DiscountPrice": 1.1,
        "DiscountPercentage": true
      }
    ],
    "DoNotUseCategoryOptions": true,
    "DateCreated": "02/18/2019 16:58",
    "ListingTemplateID": 1,
    "ListingTemplateName": "sample string 40",
    "LoginRequiredOptionID": 1,
    "LoginRequiredOptionName": "sample string 41",
    "LoginRequiredOptionRedirectTo": "sample string 42",
    "AllowAccessCustomerGroupID": 1,
    "AllowAccessCustomerGroupName": "sample string 43",
    "RMAMaxPeriod": "sample string 44",
    "CanonicalUrl": "sample string 45",
    "TaxCode": "sample string 46",
    "DisplayText": "sample string 47",
    "MinimumQuantity": 1.1,
    "MaximumQuantity": 1.1,
    "AllowOnlyMultiples": true,
    "AllowFractionalQuantity": true,
    "QuantityOptions": "sample string 48",
    "GroupOptionsForQuantityPricing": true,
    "ApplyQuantityDiscountToOptions": true,
    "EnableMakeAnOfferFeature": true,
    "MinimumAcceptableOffer": "sample string 49",
    "PriceLevel1": 1.1,
    "PriceLevel1Hide": true,
    "PriceLevel2": 1.1,
    "PriceLevel2Hide": true,
    "PriceLevel3": 1.1,
    "PriceLevel3Hide": true,
    "PriceLevel4": 1.1,
    "PriceLevel4Hide": true,
    "PriceLevel5": 1.1,
    "PriceLevel5Hide": true,
    "PriceLevel6": 1.1,
    "PriceLevel6Hide": true,
    "PriceLevel7": 1.1,
    "PriceLevel7Hide": true,
    "PriceLevel8": 1.1,
    "PriceLevel8Hide": true,
    "PriceLevel9": 1.1,
    "PriceLevel9Hide": true,
    "PriceLevel10": 1.1,
    "PriceLevel10Hide": true,
    "BuyButtonLink": "sample string 50",
    "ProductLink": "sample string 51",
    "Title": "sample string 52",
    "CustomFileName": "sample string 53",
    "RedirectLink": "sample string 54",
    "MetaTags": "sample string 55",
    "SpecialInstructions": "sample string 56",
    "AssignKey": true,
    "ReUseKeys": true,
    "SerialList": [
      {
        "SerialID": 1,
        "SerialUses": 1,
        "SerialCode": "sample string 1"
      },
      {
        "SerialID": 1,
        "SerialUses": 1,
        "SerialCode": "sample string 1"
      }
    ],
    "EProductList": [
      {
        "FileNumber": 1,
        "FilePath": "sample string 1"
      },
      {
        "FileNumber": 1,
        "FilePath": "sample string 1"
      }
    ]
  },
  {
    "SKUInfo": {
      "CatalogID": 1,
      "SKU": "sample string 1",
      "Name": "sample string 2",
      "Cost": 1.1,
      "Price": 1.1,
      "Currency": "sample string 3",
      "RetailPrice": 1.1,
      "SalePrice": 1.1,
      "OnSale": true,
      "Stock": 1.1
    },
    "MFGID": "sample string 1",
    "ShortDescription": "sample string 2",
    "ManufacturerID": 1,
    "ManufacturerName": "sample string 3",
    "DistributorList": [
      {
        "DistributorID": 1,
        "DistributorName": "sample string 1",
        "DistributorItemCost": 1.1,
        "DistributorItemID": "sample string 2",
        "DistributorStockID": "sample string 3"
      },
      {
        "DistributorID": 1,
        "DistributorName": "sample string 1",
        "DistributorItemCost": 1.1,
        "DistributorItemID": "sample string 2",
        "DistributorStockID": "sample string 3"
      }
    ],
    "LastUpdate": "02/18/2019 16:58",
    "UserID": "sample string 4",
    "GTIN": "sample string 5",
    "CategoryList": [
      {
        "CategoryID": 1,
        "CategoryName": "sample string 1"
      },
      {
        "CategoryID": 1,
        "CategoryName": "sample string 1"
      }
    ],
    "ExternalIdsList": [
      {
        "ID": 1,
        "AdvancedOptionSufix": "sample string 1",
        "ExternalId1": "sample string 2",
        "ExternalId2": "sample string 3",
        "ExternalIdType": "sample string 4"
      },
      {
        "ID": 1,
        "AdvancedOptionSufix": "sample string 1",
        "ExternalId1": "sample string 2",
        "ExternalId2": "sample string 3",
        "ExternalIdType": "sample string 4"
      }
    ],
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
    ],
    "NonTaxable": true,
    "NotForSale": true,
    "Hide": true,
    "GiftCertificate": true,
    "HomeSpecial": true,
    "CategorySpecial": true,
    "NonSearchable": true,
    "GiftWrapItem": true,
    "ShipCost": 1.1,
    "Weight": 1.1,
    "Height": 1.1,
    "Width": 1.1,
    "Depth": 1.1,
    "SelfShip": true,
    "FreeShipping": true,
    "RewardPoints": 1,
    "RedeemPoints": 1,
    "DisableRewards": true,
    "StockAlert": 1,
    "ReorderQuantity": 1,
    "InStockMessage": "sample string 6",
    "OutOfStockMessage": "sample string 7",
    "BackOrderMessage": "sample string 8",
    "InventoryControl": 1,
    "WarehouseLocation": "sample string 9",
    "WarehouseBin": "sample string 10",
    "WarehouseAisle": "sample string 11",
    "WarehouseCustom": "sample string 12",
    "Description": "sample string 13",
    "Keywords": "sample string 14",
    "ExtraField1": "sample string 15",
    "ExtraField2": "sample string 16",
    "ExtraField3": "sample string 17",
    "ExtraField4": "sample string 18",
    "ExtraField5": "sample string 19",
    "ExtraField6": "sample string 20",
    "ExtraField7": "sample string 21",
    "ExtraField8": "sample string 22",
    "ExtraField9": "sample string 23",
    "ExtraField10": "sample string 24",
    "ExtraField11": "sample string 25",
    "ExtraField12": "sample string 26",
    "ExtraField13": "sample string 27",
    "FeatureList": [
      {
        "FeatureID": 1,
        "FeatureTitle": "sample string 1",
        "FeatureDescription": "sample string 2"
      },
      {
        "FeatureID": 1,
        "FeatureTitle": "sample string 1",
        "FeatureDescription": "sample string 2"
      }
    ],
    "PluginList": {
      "sample string 1": "sample string 2",
      "sample string 3": "sample string 4"
    },
    "SampleEnable": true,
    "SampleName": "sample string 28",
    "SampleSKUPrefix": "sample string 29",
    "SamplePrice": 1.1,
    "SampleWeight": 1.1,
    "ReviewAverage": 1.1,
    "ReviewCount": 1,
    "MainImageFile": "sample string 30",
    "MainImageCaption": "sample string 31",
    "ThumbnailFile": "sample string 32",
    "MediaFile": "sample string 33",
    "AdditionalImageFile2": "sample string 34",
    "AdditionalImageCaption2": "sample string 35",
    "AdditionalImageFile3": "sample string 36",
    "AdditionalImageCaption3": "sample string 37",
    "AdditionalImageFile4": "sample string 38",
    "AdditionalImageCaption4": "sample string 39",
    "ImageGalleryList": [
      {
        "ImageGalleryID": 1,
        "ImageGalleryFile": "sample string 1",
        "ImageGalleryCaption": "sample string 2",
        "ImageGallerySorting": 1
      },
      {
        "ImageGalleryID": 1,
        "ImageGalleryFile": "sample string 1",
        "ImageGalleryCaption": "sample string 2",
        "ImageGallerySorting": 1
      }
    ],
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
    "AdvancedOptionList": [
      {
        "AdvancedOptionCode": "sample string 1",
        "AdvancedOptionSufix": "sample string 2",
        "AdvancedOptionName": "sample string 3",
        "AdvancedOptionCost": 1.1,
        "AdvancedOptionStock": 1,
        "AdvancedOptionWeight": 1.1,
        "AdvancedOptionPrice": 1.1,
        "AdvancedOptionGTIN": "sample string 4"
      },
      {
        "AdvancedOptionCode": "sample string 1",
        "AdvancedOptionSufix": "sample string 2",
        "AdvancedOptionName": "sample string 3",
        "AdvancedOptionCost": 1.1,
        "AdvancedOptionStock": 1,
        "AdvancedOptionWeight": 1.1,
        "AdvancedOptionPrice": 1.1,
        "AdvancedOptionGTIN": "sample string 4"
      }
    ],
    "RelatedProductList": [
      {
        "RelatedIndexID": 1,
        "RelatedProductID": 1,
        "RelatedProductSorting": 1
      },
      {
        "RelatedIndexID": 1,
        "RelatedProductID": 1,
        "RelatedProductSorting": 1
      }
    ],
    "UpSellingItemList": [
      {
        "UpSellingIndexID": 1,
        "UpSellingItemID": 1,
        "UpSellingItemSorting": 1
      },
      {
        "UpSellingIndexID": 1,
        "UpSellingItemID": 1,
        "UpSellingItemSorting": 1
      }
    ],
    "DiscountList": [
      {
        "DiscountID": 1,
        "DiscountPriceLevel": 1,
        "DiscountLowbound": 1,
        "DiscountUpbound": 1,
        "DiscountPrice": 1.1,
        "DiscountPercentage": true
      },
      {
        "DiscountID": 1,
        "DiscountPriceLevel": 1,
        "DiscountLowbound": 1,
        "DiscountUpbound": 1,
        "DiscountPrice": 1.1,
        "DiscountPercentage": true
      }
    ],
    "DoNotUseCategoryOptions": true,
    "DateCreated": "02/18/2019 16:58",
    "ListingTemplateID": 1,
    "ListingTemplateName": "sample string 40",
    "LoginRequiredOptionID": 1,
    "LoginRequiredOptionName": "sample string 41",
    "LoginRequiredOptionRedirectTo": "sample string 42",
    "AllowAccessCustomerGroupID": 1,
    "AllowAccessCustomerGroupName": "sample string 43",
    "RMAMaxPeriod": "sample string 44",
    "CanonicalUrl": "sample string 45",
    "TaxCode": "sample string 46",
    "DisplayText": "sample string 47",
    "MinimumQuantity": 1.1,
    "MaximumQuantity": 1.1,
    "AllowOnlyMultiples": true,
    "AllowFractionalQuantity": true,
    "QuantityOptions": "sample string 48",
    "GroupOptionsForQuantityPricing": true,
    "ApplyQuantityDiscountToOptions": true,
    "EnableMakeAnOfferFeature": true,
    "MinimumAcceptableOffer": "sample string 49",
    "PriceLevel1": 1.1,
    "PriceLevel1Hide": true,
    "PriceLevel2": 1.1,
    "PriceLevel2Hide": true,
    "PriceLevel3": 1.1,
    "PriceLevel3Hide": true,
    "PriceLevel4": 1.1,
    "PriceLevel4Hide": true,
    "PriceLevel5": 1.1,
    "PriceLevel5Hide": true,
    "PriceLevel6": 1.1,
    "PriceLevel6Hide": true,
    "PriceLevel7": 1.1,
    "PriceLevel7Hide": true,
    "PriceLevel8": 1.1,
    "PriceLevel8Hide": true,
    "PriceLevel9": 1.1,
    "PriceLevel9Hide": true,
    "PriceLevel10": 1.1,
    "PriceLevel10Hide": true,
    "BuyButtonLink": "sample string 50",
    "ProductLink": "sample string 51",
    "Title": "sample string 52",
    "CustomFileName": "sample string 53",
    "RedirectLink": "sample string 54",
    "MetaTags": "sample string 55",
    "SpecialInstructions": "sample string 56",
    "AssignKey": true,
    "ReUseKeys": true,
    "SerialList": [
      {
        "SerialID": 1,
        "SerialUses": 1,
        "SerialCode": "sample string 1"
      },
      {
        "SerialID": 1,
        "SerialUses": 1,
        "SerialCode": "sample string 1"
      }
    ],
    "EProductList": [
      {
        "FileNumber": 1,
        "FilePath": "sample string 1"
      },
      {
        "FileNumber": 1,
        "FilePath": "sample string 1"
      }
    ]
  }
]
```

Retrieve a list of all products from a specific manufacturer. See [Data Structures](#product-object) for more information on the product object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Manufacturers/{manufacturerid}/Products`

#### URL Parameters

Parameter | Required | Description
--------- | ------- | -----------
manufacturerid | Required | The id of the manufacturer you want the products from.
limit | optional | Maximum number of items that can be returned
offset | optional | Starting point for the return data
countonly | optional | Count the number of rows only
sku | optional | Retrieve products by SKU
name | optional | Retrieve products by name
costfrom | optional | Retrieve products over a specified cost
costto | optional | Retrieve products under a specified cost
pricefrom | optional | Retrieve products over a specified price
priceto | optional | Retrieve products under a specified price
stockfrom | optional | Retrieve products over a specified stock
stockto | optional | Retrieve products under a specified stock
hide | optional | Retrieve hidden products
freeshipping | optional | Retrieve products set for free shipping
onsale | optional | Retrieve products on sale
nontax | optional | Retrieve non-taxable products
notforsale | optional | Retrieve products set as not for sale
giftcertificate | optional | Retrieve gift certificate products
homespecial | optional | Retrieve products set to home special
categoryspecial | optional | Retrieve products set to category special
nonsearchable | optional | Retrieve non-searchable products
selfship | optional | Retrieve products that ship by themselves
rewarddisable | optional | Retrieve products that are disabled for rewards points
lastupdatestart |optional | Start Date that the product was last updated (mm/dd/yyyy hh:mm:ss)
lastupdateend | optional | End Date that the product was last updated (mm/dd/yyyy hh:mm:ss)

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified Manufacturer does not exist or contains no products.

## Product Advanced Options

### Retrieve a list of advanced options of a specific product

Returns the advanced options combinations of a product. See [Data Structures](#advancedoption-object) for more information on the advanced option object.

> To retrieve the advanced options of a product, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). 

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/AdvancedOptions?limit=&offset=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Products/{catalogid}/AdvancedOptions"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/AdvancedOptions?limit=&offset=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/AdvancedOptions?limit=&offset=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/AdvancedOptions?limit=&offset=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#advancedoption-object) for more information on the advanced option object):

```json
[
  {
    "AdvancedOptionCode": "sample string 1",
    "AdvancedOptionSufix": "sample string 2",
    "AdvancedOptionName": "sample string 3",
    "AdvancedOptionCost": 1.1,
    "AdvancedOptionStock": 1,
    "AdvancedOptionWeight": 1.1,
    "AdvancedOptionPrice": 1.1,
    "AdvancedOptionGTIN": "sample string 4"
  },
  {
    "AdvancedOptionCode": "sample string 1",
    "AdvancedOptionSufix": "sample string 2",
    "AdvancedOptionName": "sample string 3",
    "AdvancedOptionCost": 1.1,
    "AdvancedOptionStock": 1,
    "AdvancedOptionWeight": 1.1,
    "AdvancedOptionPrice": 1.1,
    "AdvancedOptionGTIN": "sample string 4"
  }
]
```

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/AdvancedOptions{?limit,offset}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item
limit | optional | Maximum number of items that can be returned
offset | optional | Starting point for the return data

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product was not found, or did not have advanced options.


### Update a list of advanced options 

Updates a collection of advanced options from a specific Product. See [Data Structures](#advancedoption-object) for more information on the advanced option object.

> To update a collection of advanced options in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#advancedoption-object) for more information on the advanced option object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/AdvancedOptions");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "[
  {
    \"AdvancedOptionCode\": \"laboris\",
    \"AdvancedOptionSufix\": \"magna et tempo\",
    \"AdvancedOptionName\": \"labore Excepteur ipsum\",
    \"AdvancedOptionCost\": 19412121.02316548,
    \"AdvancedOptionStock\": 41646972,
    \"AdvancedOptionWeight\": 84507957.28856435,
    \"AdvancedOptionPrice\": 19553737.318848535,
    \"AdvancedOptionGTIN\": \"labore officia sed dolor\"
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
  
    using (var content = new StringContent("[  {    \"AdvancedOptionCode\": \"laboris\",    \"AdvancedOptionSufix\": \"magna et tempo\",    \"AdvancedOptionName\": \"labore Excepteur ipsum\",    \"AdvancedOptionCost\": 19412121.02316548,    \"AdvancedOptionStock\": 41646972,    \"AdvancedOptionWeight\": 84507957.28856435,    \"AdvancedOptionPrice\": 19553737.318848535,    \"AdvancedOptionGTIN\": \"labore officia sed dolor\"  }]", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Products/{catalogid}/AdvancedOptions", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/AdvancedOptions');

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
    'AdvancedOptionCode': 'laboris',
    'AdvancedOptionSufix': 'magna et tempo',
    'AdvancedOptionName': 'labore Excepteur ipsum',
    'AdvancedOptionCost': 19412121.02316548,
    'AdvancedOptionStock': 41646972,
    'AdvancedOptionWeight': 84507957.28856435,
    'AdvancedOptionPrice': 19553737.318848535,
    'AdvancedOptionGTIN': 'labore officia sed dolor'
  }
];

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '[
  {
    "AdvancedOptionCode": "laboris",
    "AdvancedOptionSufix": "magna et tempo",
    "AdvancedOptionName": "labore Excepteur ipsum",
    "AdvancedOptionCost": 19412121.02316548,
    "AdvancedOptionStock": 41646972,
    "AdvancedOptionWeight": 84507957.28856435,
    "AdvancedOptionPrice": 19553737.318848535,
    "AdvancedOptionGTIN": "labore officia sed dolor"
  }
]'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/AdvancedOptions', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  [
    {
      "AdvancedOptionCode": "laboris",
      "AdvancedOptionSufix": "magna et tempo",
      "AdvancedOptionName": "labore Excepteur ipsum",
      "AdvancedOptionCost": 19412121.02316548,
      "AdvancedOptionStock": 41646972,
      "AdvancedOptionWeight": 84507957.28856435,
      "AdvancedOptionPrice": 19553737.318848535,
      "AdvancedOptionGTIN": "labore officia sed dolor"
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/AdvancedOptions', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"AdvancedOptionCode",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```
#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/AdvancedOptions`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product was not found, or did not have advanced options.

### Update a specific advanced option by id

Updates a specific advanced option from a specific Product. See [Data Structures](#advancedoption-object) for more information on the advanced option object.

> To update an advanced option in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#advancedoption-object) for more information on the advanced option object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/AdvancedOptions/{advancedoptioncode}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"AdvancedOptionCode\": \"in ipsum\",
  \"AdvancedOptionSufix\": \"culpa voluptate\",
  \"AdvancedOptionName\": \"aliquip in reprehenderit\",
  \"AdvancedOptionCost\": 36862359.07975793,
  \"AdvancedOptionStock\": 45126002,
  \"AdvancedOptionWeight\": -380028.7652761638,
  \"AdvancedOptionPrice\": -55164456.6270276,
  \"AdvancedOptionGTIN\": \"tempor laborum\"
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
  
    using (var content = new StringContent("{  \"AdvancedOptionCode\": \"in ipsum\",  \"AdvancedOptionSufix\": \"culpa voluptate\",  \"AdvancedOptionName\": \"aliquip in reprehenderit\",  \"AdvancedOptionCost\": 36862359.07975793,  \"AdvancedOptionStock\": 45126002,  \"AdvancedOptionWeight\": -380028.7652761638,  \"AdvancedOptionPrice\": -55164456.6270276,  \"AdvancedOptionGTIN\": \"tempor laborum\"}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Products/{catalogid}/AdvancedOptions/{advancedoptioncode}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/AdvancedOptions/{advancedoptioncode}');

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
  'AdvancedOptionCode': 'in ipsum',
  'AdvancedOptionSufix': 'culpa voluptate',
  'AdvancedOptionName': 'aliquip in reprehenderit',
  'AdvancedOptionCost': 36862359.07975793,
  'AdvancedOptionStock': 45126002,
  'AdvancedOptionWeight': -380028.7652761638,
  'AdvancedOptionPrice': -55164456.6270276,
  'AdvancedOptionGTIN': 'tempor laborum'
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "AdvancedOptionCode": "in ipsum",
  "AdvancedOptionSufix": "culpa voluptate",
  "AdvancedOptionName": "aliquip in reprehenderit",
  "AdvancedOptionCost": 36862359.07975793,
  "AdvancedOptionStock": 45126002,
  "AdvancedOptionWeight": -380028.7652761638,
  "AdvancedOptionPrice": -55164456.6270276,
  "AdvancedOptionGTIN": "tempor laborum"
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/AdvancedOptions/{advancedoptioncode}', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "AdvancedOptionCode": "in ipsum",
    "AdvancedOptionSufix": "culpa voluptate",
    "AdvancedOptionName": "aliquip in reprehenderit",
    "AdvancedOptionCost": 36862359.07975793,
    "AdvancedOptionStock": 45126002,
    "AdvancedOptionWeight": -380028.7652761638,
    "AdvancedOptionPrice": -55164456.6270276,
    "AdvancedOptionGTIN": "tempor laborum"
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/AdvancedOptions/{advancedoptioncode}', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"AdvancedOptionCode",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

#### HTTP Request 
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/AdvancedOptions/{advancedoptioncode}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item
advancedoptioncode | required | AdvancedOptionCode of the option

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product/advanced option was not found.

## Product Categories

### Retrieve a list of categories from a specific product
> To retrieve a Cart from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). 

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Categories?limit=&offset=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Products/{catalogid}/Categories"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Categories?limit=&offset=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Categories?limit=&offset=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Categories?limit=&offset=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#productcategory-object) for more information on the product category object.):

```json
[
  {
    "CategoryID": 1,
    "CategoryName": "sample string 1"
  },
  {
    "CategoryID": 1,
    "CategoryName": "sample string 1"
  }
]
```

Get a list of categories from a specific product. See [Data Structures](#productcategory-object) for more information on the product category object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Categories`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item
limit | optional | The maximum number of items to return
offset | optional | The starting point for the data to return

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product was not found, or has no categories assigned.

## Product Discount

### Create a discount

> To add a new discount to a product, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#discount-object) for more information on the discount object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Discount");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"DiscountID\": -60996578,
  \"DiscountPriceLevel\": 98846947,
  \"DiscountLowbound\": -8205870,
  \"DiscountUpbound\": 97520382,
  \"DiscountPrice\": 34517558.279682964,
  \"DiscountPercentage\": false
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
  
    using (var content = new StringContent("{  \"DiscountID\": -60996578,  \"DiscountPriceLevel\": 98846947,  \"DiscountLowbound\": -8205870,  \"DiscountUpbound\": 97520382,  \"DiscountPrice\": 34517558.279682964,  \"DiscountPercentage\": false}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("3dCartWebAPI/v1/Products/{catalogid}/Discount", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Discount');

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
  'DiscountID': -60996578,
  'DiscountPriceLevel': 98846947,
  'DiscountLowbound': -8205870,
  'DiscountUpbound': 97520382,
  'DiscountPrice': 34517558.279682964,
  'DiscountPercentage': false
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "DiscountID": -60996578,
  "DiscountPriceLevel": 98846947,
  "DiscountLowbound": -8205870,
  "DiscountUpbound": 97520382,
  "DiscountPrice": 34517558.279682964,
  "DiscountPercentage": false
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.post 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Discount', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "DiscountID": -60996578,
    "DiscountPriceLevel": 98846947,
    "DiscountLowbound": -8205870,
    "DiscountUpbound": 97520382,
    "DiscountPrice": 34517558.279682964,
    "DiscountPercentage": false
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Discount', data=values, headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"DiscountID",
    "Value":"1234",
    "Status":"201",
    "Message":"Created successfully",
  }
]
```

Adds a new discount to a product. See [Data Structures](#discount-object) for more information on the discount object.

#### HTTP Request
`POST https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Discount`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item

#### Responses and Errors

Response Code | Description
------------- | ---------
201 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product was not found

### Retrieve a list of discounts from a specific product

> To retrieve all discounts for a product, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Discount?limit=&offset=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Products/{catalogid}/Discount"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Discount?limit=&offset=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Discount?limit=&offset=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Discount?limit=&offset=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#discount-object) for more information on the discount object):

```json
[
  {
    "DiscountID": 37343020,
    "DiscountPriceLevel": 26492058,
    "DiscountLowbound": -94421139,
    "DiscountUpbound": 20525486,
    "DiscountPrice": -31162703.797269046,
    "DiscountPercentage": true
  },
  {
    "DiscountID": 98802176,
    "DiscountPriceLevel": -50135660,
    "DiscountLowbound": 6765907,
    "DiscountUpbound": -90244910,
    "DiscountPrice": 47773965.88370827,
    "DiscountPercentage": false
  },
  {
    "DiscountID": -32894062,
    "DiscountPriceLevel": 5746424,
    "DiscountLowbound": -63871739,
    "DiscountUpbound": 75828840,
    "DiscountPrice": 11386635.223301321,
    "DiscountPercentage": false
  }
]
```

Retrieves a list of discounts for a specified product. See [Data Structures](#discount-object) for more information on the discount object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Discount`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item
limit | optional | The maximum number of items to return
offset | optional | The starting point for the data to return

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product was not found, or has no discounts.

### Update a list of product discounts

> To update a list of discounts for a product, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#discount-object) for more information on the discount object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Discount");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "[
  {
    \"DiscountID\": 12268266,
    \"DiscountPriceLevel\": -63409485,
    \"DiscountLowbound\": -64613614,
    \"DiscountUpbound\": 74300784,
    \"DiscountPrice\": -35325071.044415735,
    \"DiscountPercentage\": true
  },
  {
    \"DiscountID\": -40581614,
    \"DiscountPriceLevel\": 11098818,
    \"DiscountLowbound\": 39991322,
    \"DiscountUpbound\": 99939903,
    \"DiscountPrice\": -45636922.19380786,
    \"DiscountPercentage\": false
  },
  {
    \"DiscountID\": 15386054,
    \"DiscountPriceLevel\": 60361828,
    \"DiscountLowbound\": 92842752,
    \"DiscountUpbound\": -47834392,
    \"DiscountPrice\": -33316346.769740775,
    \"DiscountPercentage\": true
  },
  {
    \"DiscountID\": 38255093,
    \"DiscountPriceLevel\": -62260238,
    \"DiscountLowbound\": -93784356,
    \"DiscountUpbound\": -83572273,
    \"DiscountPrice\": 53451596.090922266,
    \"DiscountPercentage\": true
  },
  {
    \"DiscountID\": -96803687,
    \"DiscountPriceLevel\": 77777939,
    \"DiscountLowbound\": 71421992,
    \"DiscountUpbound\": 29829495,
    \"DiscountPrice\": 33005085.719253153,
    \"DiscountPercentage\": true
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
  
    using (var content = new StringContent("[  {    \"DiscountID\": 12268266,    \"DiscountPriceLevel\": -63409485,    \"DiscountLowbound\": -64613614,    \"DiscountUpbound\": 74300784,    \"DiscountPrice\": -35325071.044415735,    \"DiscountPercentage\": true  },  {    \"DiscountID\": -40581614,    \"DiscountPriceLevel\": 11098818,    \"DiscountLowbound\": 39991322,    \"DiscountUpbound\": 99939903,    \"DiscountPrice\": -45636922.19380786,    \"DiscountPercentage\": false  },  {    \"DiscountID\": 15386054,    \"DiscountPriceLevel\": 60361828,    \"DiscountLowbound\": 92842752,    \"DiscountUpbound\": -47834392,    \"DiscountPrice\": -33316346.769740775,    \"DiscountPercentage\": true  },  {    \"DiscountID\": 38255093,    \"DiscountPriceLevel\": -62260238,    \"DiscountLowbound\": -93784356,    \"DiscountUpbound\": -83572273,    \"DiscountPrice\": 53451596.090922266,    \"DiscountPercentage\": true  },  {    \"DiscountID\": -96803687,    \"DiscountPriceLevel\": 77777939,    \"DiscountLowbound\": 71421992,    \"DiscountUpbound\": 29829495,    \"DiscountPrice\": 33005085.719253153,    \"DiscountPercentage\": true  }]", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Products/{catalogid}/Discount", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Discount');

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
    'DiscountID': 12268266,
    'DiscountPriceLevel': -63409485,
    'DiscountLowbound': -64613614,
    'DiscountUpbound': 74300784,
    'DiscountPrice': -35325071.044415735,
    'DiscountPercentage': true
  },
  {
    'DiscountID': -40581614,
    'DiscountPriceLevel': 11098818,
    'DiscountLowbound': 39991322,
    'DiscountUpbound': 99939903,
    'DiscountPrice': -45636922.19380786,
    'DiscountPercentage': false
  },
  {
    'DiscountID': 15386054,
    'DiscountPriceLevel': 60361828,
    'DiscountLowbound': 92842752,
    'DiscountUpbound': -47834392,
    'DiscountPrice': -33316346.769740775,
    'DiscountPercentage': true
  },
  {
    'DiscountID': 38255093,
    'DiscountPriceLevel': -62260238,
    'DiscountLowbound': -93784356,
    'DiscountUpbound': -83572273,
    'DiscountPrice': 53451596.090922266,
    'DiscountPercentage': true
  },
  {
    'DiscountID': -96803687,
    'DiscountPriceLevel': 77777939,
    'DiscountLowbound': 71421992,
    'DiscountUpbound': 29829495,
    'DiscountPrice': 33005085.719253153,
    'DiscountPercentage': true
  }
];

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '[
  {
    "DiscountID": 12268266,
    "DiscountPriceLevel": -63409485,
    "DiscountLowbound": -64613614,
    "DiscountUpbound": 74300784,
    "DiscountPrice": -35325071.044415735,
    "DiscountPercentage": true
  },
  {
    "DiscountID": -40581614,
    "DiscountPriceLevel": 11098818,
    "DiscountLowbound": 39991322,
    "DiscountUpbound": 99939903,
    "DiscountPrice": -45636922.19380786,
    "DiscountPercentage": false
  },
  {
    "DiscountID": 15386054,
    "DiscountPriceLevel": 60361828,
    "DiscountLowbound": 92842752,
    "DiscountUpbound": -47834392,
    "DiscountPrice": -33316346.769740775,
    "DiscountPercentage": true
  },
  {
    "DiscountID": 38255093,
    "DiscountPriceLevel": -62260238,
    "DiscountLowbound": -93784356,
    "DiscountUpbound": -83572273,
    "DiscountPrice": 53451596.090922266,
    "DiscountPercentage": true
  },
  {
    "DiscountID": -96803687,
    "DiscountPriceLevel": 77777939,
    "DiscountLowbound": 71421992,
    "DiscountUpbound": 29829495,
    "DiscountPrice": 33005085.719253153,
    "DiscountPercentage": true
  }
]'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Discount', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  [
    {
      "DiscountID": 12268266,
      "DiscountPriceLevel": -63409485,
      "DiscountLowbound": -64613614,
      "DiscountUpbound": 74300784,
      "DiscountPrice": -35325071.044415735,
      "DiscountPercentage": true
    },
    {
      "DiscountID": -40581614,
      "DiscountPriceLevel": 11098818,
      "DiscountLowbound": 39991322,
      "DiscountUpbound": 99939903,
      "DiscountPrice": -45636922.19380786,
      "DiscountPercentage": false
    },
    {
      "DiscountID": 15386054,
      "DiscountPriceLevel": 60361828,
      "DiscountLowbound": 92842752,
      "DiscountUpbound": -47834392,
      "DiscountPrice": -33316346.769740775,
      "DiscountPercentage": true
    },
    {
      "DiscountID": 38255093,
      "DiscountPriceLevel": -62260238,
      "DiscountLowbound": -93784356,
      "DiscountUpbound": -83572273,
      "DiscountPrice": 53451596.090922266,
      "DiscountPercentage": true
    },
    {
      "DiscountID": -96803687,
      "DiscountPriceLevel": 77777939,
      "DiscountLowbound": 71421992,
      "DiscountUpbound": 29829495,
      "DiscountPrice": 33005085.719253153,
      "DiscountPercentage": true
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Discount', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"DiscountID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  },
  {
    "Key":"DiscountID",
    "Value":"5678",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

Updates a list of discounts for a specified product. See [Data Structures](#discount-object) for more information on the discount object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Discount`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product was not found, or has no discounts.

### Update a specific discount by id
> To update a specific discount in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#discount-object) for more information on the discount object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Discount/{discountid}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"DiscountID\": -13267609,
  \"DiscountPriceLevel\": 82926126,
  \"DiscountLowbound\": -12286958,
  \"DiscountUpbound\": 499268,
  \"DiscountPrice\": 3808919.3722110987,
  \"DiscountPercentage\": false
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
  
    using (var content = new StringContent("{  \"DiscountID\": -13267609,  \"DiscountPriceLevel\": 82926126,  \"DiscountLowbound\": -12286958,  \"DiscountUpbound\": 499268,  \"DiscountPrice\": 3808919.3722110987,  \"DiscountPercentage\": false}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Products/{catalogid}/Discount/{discountid}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Discount/{discountid}');

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
  'DiscountID': -13267609,
  'DiscountPriceLevel': 82926126,
  'DiscountLowbound': -12286958,
  'DiscountUpbound': 499268,
  'DiscountPrice': 3808919.3722110987,
  'DiscountPercentage': false
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "DiscountID": -13267609,
  "DiscountPriceLevel": 82926126,
  "DiscountLowbound": -12286958,
  "DiscountUpbound": 499268,
  "DiscountPrice": 3808919.3722110987,
  "DiscountPercentage": false
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Discount/{discountid}', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "DiscountID": -13267609,
    "DiscountPriceLevel": 82926126,
    "DiscountLowbound": -12286958,
    "DiscountUpbound": 499268,
    "DiscountPrice": 3808919.3722110987,
    "DiscountPercentage": false
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Discount/{discountid}', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"DiscountID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

This method is used to update a specific product discount. See [Data Structures](#discount-object) for more information on the discount object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Discount/{discountid}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.
discountid | required | The discountid of the discount to update.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product was not found, or has no discounts.

## Product Distributors

### Retrieve a list of distributors from a specific product
> To retrieve a list of distributors from a specific product, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Distributors?limit=&offset=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Products/{catalogid}/Distributors"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Distributors?limit=&offset=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Distributors?limit=&offset=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Distributors?limit=&offset=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#productdistributor-object) for more information on the ProductDistributor object):

```json
[
  {
    "DistributorID": 1,
    "DistributorName": "sample string 1",
    "DistributorItemCost": 1.1,
    "DistributorItemID": "sample string 2",
    "DistributorStockID": "sample string 3"
  },
  {
    "DistributorID": 1,
    "DistributorName": "sample string 1",
    "DistributorItemCost": 1.1,
    "DistributorItemID": "sample string 2",
    "DistributorStockID": "sample string 3"
  }
]
```

This method is used to retrieve a list of distributors for a product. See [Data Structures](#productdistributor-object) for more information on the ProductDistributor object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Distributors{?limit,offset}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.
limit | optional | Maximum number of items that can be returned.
offset | optional | Starting point for the return data.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product was not found, or has no distributors.

## Product EProducts

### Create an eproduct
> To create an eproduct in the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#eproduct-object) for more information on the EProduct object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/EProducts");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"FileNumber\": -44314627,
  \"FilePath\": \"sunt tempor commodo\"
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
  
    using (var content = new StringContent("{  \"FileNumber\": -44314627,  \"FilePath\": \"sunt tempor commodo\"}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("3dCartWebAPI/v1/Products/{catalogid}/EProducts", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/EProducts');

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
  'FileNumber': -44314627,
  'FilePath': 'sunt tempor commodo'
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "FileNumber": -44314627,
  "FilePath": "sunt tempor commodo"
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.post 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/EProducts', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "FileNumber": -44314627,
    "FilePath": "sunt tempor commodo"
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/EProducts', data=values, headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"FileNumber",
    "Value":"1234",
    "Status":"201",
    "Message":"Created successfully",
  }
]
```

This method is used to add a new EProduct file download to a product. See [Data Structures](#eproduct-object) for more information on the EProduct object.

#### HTTP Request
`POST https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Eproducts`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.

#### Responses and Errors

Response Code | Description
------------- | ---------
201 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product was not found.

### Retrieve a list of eproducts from a specific product
> To retrieve a list of eproducts from a specific product, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/EProducts?limit=&offset=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Products/{catalogid}/EProducts"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/EProducts?limit=&offset=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/EProducts?limit=&offset=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/EProducts?limit=&offset=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#eproduct-object) for more information on the EProduct object):

```json
[
  {
    "FileNumber": 1,
    "FilePath": "sample string 1"
  },
  {
    "FileNumber": 1,
    "FilePath": "sample string 1"
  }
]
```

This method is used to retrieve a list of EProduct file downloads from a product. See [Data Structures](#eproduct-object) for more information on the EProduct object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Eproducts{?limit,offset}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.
limit | optional | Maximum number of items that can be returned.
offset | optional | Starting point for the return data.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product was not found, or has no EProducts.

### Update a list of eproducts from a specific Product
> To update a list of eproducts from a specific Product, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#eproduct-object) for more information on the EProduct object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/EProducts");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "[
  {
    \"FileNumber\": -20716207,
    \"FilePath\": \"cupidatat L\"
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
  
    using (var content = new StringContent("[  {    \"FileNumber\": -20716207,    \"FilePath\": \"cupidatat L\"  }]", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Products/{catalogid}/EProducts", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/EProducts');

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
    'FileNumber': -20716207,
    'FilePath': 'cupidatat L'
  }
];

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '[
  {
    "FileNumber": -20716207,
    "FilePath": "cupidatat L"
  }
]'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/EProducts', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  [
    {
      "FileNumber": -20716207,
      "FilePath": "cupidatat L"
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/EProducts', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"FileNumber",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

This method is used to update a list of EProduct file downloads of a specific product. See [Data Structures](#eproduct-object) for more information on the EProduct object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Eproducts`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product/eproduct(s) was not found.
	
### Update a specific eproduct by id
> To update a specific EProduct by id, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#eproduct-object) for more information on the EProduct object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/EProducts/{filenumber}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"FileNumber\": -95697835,
  \"FilePath\": \"qui mollit\"
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
  
    using (var content = new StringContent("{  \"FileNumber\": -95697835,  \"FilePath\": \"qui mollit\"}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Products/{catalogid}/EProducts/{filenumber}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/EProducts/{filenumber}');

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
  'FileNumber': -95697835,
  'FilePath': 'qui mollit'
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "FileNumber": -95697835,
  "FilePath": "qui mollit"
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/EProducts/{filenumber}', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "FileNumber": -95697835,
    "FilePath": "qui mollit"
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/EProducts/{filenumber}', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"FileNumber",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

This method is used to update a specific EProduct of a product. See [Data Structures](#eproduct-object) for more information on the EProduct object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Eproducts/{filenumber}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.
filenumber | required | The filenumber of the EProduct to update.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product/eproduct(s) was not found.

## Product Features

### Create a feature
> To create a feature on a product, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#feature-object) for more information on the Feature object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Features");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"FeatureID\": 2620309,
  \"FeatureTitle\": \"labore Lorem\",
  \"FeatureDescription\": \"dolor dolore consectetur\"
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
  
    using (var content = new StringContent("{  \"FeatureID\": 2620309,  \"FeatureTitle\": \"labore Lorem\",  \"FeatureDescription\": \"dolor dolore consectetur\"}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("3dCartWebAPI/v1/Products/{catalogid}/Features", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Features');

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
  'FeatureID': 2620309,
  'FeatureTitle': 'labore Lorem',
  'FeatureDescription': 'dolor dolore consectetur'
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "FeatureID": 2620309,
  "FeatureTitle": "labore Lorem",
  "FeatureDescription": "dolor dolore consectetur"
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.post 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Features', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "FeatureID": 2620309,
    "FeatureTitle": "labore Lorem",
    "FeatureDescription": "dolor dolore consectetur"
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Features', data=values, headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"FeatureID",
    "Value":"1234",
    "Status":"201",
    "Message":"Created successfully",
  }
]
```

This method is used to add a new feature description to a product. See [Data Structures](#feature-object) for more information on the Feature object.

#### HTTP Request
`POST https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Features`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.

#### Responses and Errors

Response Code | Description
------------- | ---------
201 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product was not found.

### Retrieve a list of features from a specific product
> To retrieve a list of features from a specific product, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Features?limit=&offset=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Products/{catalogid}/Features"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Features?limit=&offset=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Features?limit=&offset=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Features?limit=&offset=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#feature-object) for more information on the Feature object):

```json
[
  {
    "FeatureID": 1,
    "FeatureTitle": "sample string 1",
    "FeatureDescription": "sample string 2"
  },
  {
    "FeatureID": 1,
    "FeatureTitle": "sample string 1",
    "FeatureDescription": "sample string 2"
  }
]
```

This method is used to retrieve a list of Features from a specific product. See [Data Structures](#feature-object) for more information on the Feature object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Features{?limit,offset}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.
limit | optional | Maximum number of items that can be returned.
offset | optional | Starting point for the return data.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product was not found.

### Update a list of features on a specific product
> To update a list of features on a specific product, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#feature-object) for more information on the Feature object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Features");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "[
  {
    \"FeatureID\": 23031826,
    \"FeatureTitle\": \"esse in Duis aliqua\",
    \"FeatureDescription\": \"velit laborum anim nulla\"
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
  
    using (var content = new StringContent("[  {    \"FeatureID\": 23031826,    \"FeatureTitle\": \"esse in Duis aliqua\",    \"FeatureDescription\": \"velit laborum anim nulla\"  }]", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Products/{catalogid}/Features", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Features');

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
    'FeatureID': 23031826,
    'FeatureTitle': 'esse in Duis aliqua',
    'FeatureDescription': 'velit laborum anim nulla'
  }
];

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '[
  {
    "FeatureID": 23031826,
    "FeatureTitle": "esse in Duis aliqua",
    "FeatureDescription": "velit laborum anim nulla"
  }
]'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Features', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  [
    {
      "FeatureID": 23031826,
      "FeatureTitle": "esse in Duis aliqua",
      "FeatureDescription": "velit laborum anim nulla"
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Features', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"FeatureID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

This method is used to update a list of features on a specific product. See [Data Structures](#feature-object) for more information on the Feature object. 

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Features`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product/feature(s) was not found.

### Update a specific feature by id
> To update a specific feature by id, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#feature-object) for more information on the Feature object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Features/{featureid}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"FeatureID\": 42753319,
  \"FeatureTitle\": \"magna au\",
  \"FeatureDescription\": \"eiusmod laboris veniam\"
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
  
    using (var content = new StringContent("{  \"FeatureID\": 42753319,  \"FeatureTitle\": \"magna au\",  \"FeatureDescription\": \"eiusmod laboris veniam\"}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Products/{catalogid}/Features/{featureid}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Features/{featureid}');

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
  'FeatureID': 42753319,
  'FeatureTitle': 'magna au',
  'FeatureDescription': 'eiusmod laboris veniam'
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "FeatureID": 42753319,
  "FeatureTitle": "magna au",
  "FeatureDescription": "eiusmod laboris veniam"
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Features/{featureid}', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "FeatureID": 42753319,
    "FeatureTitle": "magna au",
    "FeatureDescription": "eiusmod laboris veniam"
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Features/{featureid}', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"FeatureID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

This method is used to update a specific feature on a specific product. See [Data Structures](#feature-object) for more information on the Feature object. 

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Features/{featureid}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.
featureid | required | The featureid of the feature to udpate.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product/feature(s) was not found.

## Product Images

### Create an image
> To create an image in a product image gallery, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#imagegallery-object) for more information on the ImageGallery object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Images");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"ImageGalleryID\": -19238644,
  \"ImageGalleryFile\": \"officia commodo amet\",
  \"ImageGalleryCaption\": \"aliquip incididunt ut\",
  \"ImageGallerySorting\": 13128082
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
  
    using (var content = new StringContent("{  \"ImageGalleryID\": -19238644,  \"ImageGalleryFile\": \"officia commodo amet\",  \"ImageGalleryCaption\": \"aliquip incididunt ut\",  \"ImageGallerySorting\": 13128082}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("3dCartWebAPI/v1/Products/{catalogid}/Images", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Images');

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
  'ImageGalleryID': -19238644,
  'ImageGalleryFile': 'officia commodo amet',
  'ImageGalleryCaption': 'aliquip incididunt ut',
  'ImageGallerySorting': 13128082
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "ImageGalleryID": -19238644,
  "ImageGalleryFile": "officia commodo amet",
  "ImageGalleryCaption": "aliquip incididunt ut",
  "ImageGallerySorting": 13128082
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.post 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Images', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "ImageGalleryID": -19238644,
    "ImageGalleryFile": "officia commodo amet",
    "ImageGalleryCaption": "aliquip incididunt ut",
    "ImageGallerySorting": 13128082
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Images', data=values, headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"ImageGalleryID",
    "Value":"1234",
    "Status":"201",
    "Message":"Created successfully",
  }
]
```

This method is used to create an image for a product image gallery. See [Data Structures](#imagegallery-object) for more information on the ImageGallery object.

#### HTTP Request
`POST https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Images`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.

#### Responses and Errors

Response Code | Description
------------- | ---------
201 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product was not found.

### Retrieve a list of images
> To retrieve a list of images from a product image gallery, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Images?limit=&offset=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Products/{catalogid}/Images"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Images?limit=&offset=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Images?limit=&offset=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Images?limit=&offset=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#imagegallery-object) for more information on the ImageGallery object):

```json
[
  {
    "ImageGalleryID": 1,
    "ImageGalleryFile": "sample string 1",
    "ImageGalleryCaption": "sample string 2",
    "ImageGallerySorting": 1
  },
  {
    "ImageGalleryID": 1,
    "ImageGalleryFile": "sample string 1",
    "ImageGalleryCaption": "sample string 2",
    "ImageGallerySorting": 1
  }
]
```

This method is used to get a list of images from a product's image gallery. See [Data Structures](#imagegallery-object) for more information on the ImageGallery object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Images`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.
limit | optional | Maximum number of items that can be returned.
offset |optional | Starting point for the return data.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product was not found, or has no image gallery.

### Update a list of images
> To update a list of images in a product image gallery, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#imagegallery-object) for more information on the ImageGallery object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Images");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "[
  {
    \"ImageGalleryID\": 23973525,
    \"ImageGalleryFile\": \"et ipsum pariatur Lorem quis\",
    \"ImageGalleryCaption\": \"aute Lorem in incididunt\",
    \"ImageGallerySorting\": -49174226
  },
  {
    \"ImageGalleryID\": -50519949,
    \"ImageGalleryFile\": \"dolore ad\",
    \"ImageGalleryCaption\": \"do ut laboris\",
    \"ImageGallerySorting\": -57131342
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
  
    using (var content = new StringContent("[  {    \"ImageGalleryID\": 23973525,    \"ImageGalleryFile\": \"et ipsum pariatur Lorem quis\",    \"ImageGalleryCaption\": \"aute Lorem in incididunt\",    \"ImageGallerySorting\": -49174226  },  {    \"ImageGalleryID\": -50519949,    \"ImageGalleryFile\": \"dolore ad\",    \"ImageGalleryCaption\": \"do ut laboris\",    \"ImageGallerySorting\": -57131342  }]", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Products/{catalogid}/Images", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Images');

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
    'ImageGalleryID': 23973525,
    'ImageGalleryFile': 'et ipsum pariatur Lorem quis',
    'ImageGalleryCaption': 'aute Lorem in incididunt',
    'ImageGallerySorting': -49174226
  },
  {
    'ImageGalleryID': -50519949,
    'ImageGalleryFile': 'dolore ad',
    'ImageGalleryCaption': 'do ut laboris',
    'ImageGallerySorting': -57131342
  }
];

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '[
  {
    "ImageGalleryID": 23973525,
    "ImageGalleryFile": "et ipsum pariatur Lorem quis",
    "ImageGalleryCaption": "aute Lorem in incididunt",
    "ImageGallerySorting": -49174226
  },
  {
    "ImageGalleryID": -50519949,
    "ImageGalleryFile": "dolore ad",
    "ImageGalleryCaption": "do ut laboris",
    "ImageGallerySorting": -57131342
  }
]'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Images', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  [
    {
      "ImageGalleryID": 23973525,
      "ImageGalleryFile": "et ipsum pariatur Lorem quis",
      "ImageGalleryCaption": "aute Lorem in incididunt",
      "ImageGallerySorting": -49174226
    },
    {
      "ImageGalleryID": -50519949,
      "ImageGalleryFile": "dolore ad",
      "ImageGalleryCaption": "do ut laboris",
      "ImageGallerySorting": -57131342
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Images', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"ImageGalleryID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

This method is used to update a list of images in a product image gallery. See [Data Structures](#imagegallery-object) for more information on the ImageGallery object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Images`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product was not found, or has no image gallery.

### Update a specific image by id
> To update a specific image in a product image gallery, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#imagegallery-object) for more information on the ImageGallery object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Images/{imagegalleryid}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"ImageGalleryID\": 45690021,
  \"ImageGalleryFile\": \"nostrud ut qui eiusmod\",
  \"ImageGalleryCaption\": \"do in consectetur\",
  \"ImageGallerySorting\": -51969841
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
  
    using (var content = new StringContent("{  \"ImageGalleryID\": 45690021,  \"ImageGalleryFile\": \"nostrud ut qui eiusmod\",  \"ImageGalleryCaption\": \"do in consectetur\",  \"ImageGallerySorting\": -51969841}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Products/{catalogid}/Images/{imagegalleryid}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Images/{imagegalleryid}');

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
  'ImageGalleryID': 45690021,
  'ImageGalleryFile': 'nostrud ut qui eiusmod',
  'ImageGalleryCaption': 'do in consectetur',
  'ImageGallerySorting': -51969841
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "ImageGalleryID": 45690021,
  "ImageGalleryFile": "nostrud ut qui eiusmod",
  "ImageGalleryCaption": "do in consectetur",
  "ImageGallerySorting": -51969841
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Images/{imagegalleryid}', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "ImageGalleryID": 45690021,
    "ImageGalleryFile": "nostrud ut qui eiusmod",
    "ImageGalleryCaption": "do in consectetur",
    "ImageGallerySorting": -51969841
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Images/{imagegalleryid}', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"ImageGalleryID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

This method is used to update a specific image in a product image gallery. See [Data Structures](#imagegallery-object) for more information on the ImageGallery object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Images/{imagegalleryid}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.
imagegalleryid | required | The imagegalleryid of the image to update.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product was not found, or has no image gallery.

## Product Options

### Create a new product option
> To create a new product option, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#optionset-object) for more information on the OptionSet object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Options");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"OptionSetID\": -59267007,
  \"OptionSetName\": \"dolor sit\",
  \"OptionSorting\": -57619884.65519599,
  \"OptionRequired\": true,
  \"OptionType\": \"des\",
  \"OptionURL\": \"consequat ex laboris do\",
  \"OptionAdditionalInformation\": \"ut ad\",
  \"OptionSizeLimit\": -83493786,
  \"OptionList\": [
    {
      \"OptionID\": 53326616,
      \"OptionName\": \"ipsum cillum ut eu\",
      \"OptionSelected\": false,
      \"OptionHide\": false,
      \"OptionValue\": -62903540.1561886,
      \"OptionPartNumber\": \"minim\",
      \"OptionSorting\": -83740842.9792911,
      \"OptionImagePath\": \"occaecat ad nulla in\",
      \"OptionBundleCatalogId\": -66271775,
      \"OptionBundleQuantity\": -23257468
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
  
    using (var content = new StringContent("{  \"OptionSetID\": -59267007,  \"OptionSetName\": \"dolor sit\",  \"OptionSorting\": -57619884.65519599,  \"OptionRequired\": true,  \"OptionType\": \"des\",  \"OptionURL\": \"consequat ex laboris do\",  \"OptionAdditionalInformation\": \"ut ad\",  \"OptionSizeLimit\": -83493786,  \"OptionList\": [    {      \"OptionID\": 53326616,      \"OptionName\": \"ipsum cillum ut eu\",      \"OptionSelected\": false,      \"OptionHide\": false,      \"OptionValue\": -62903540.1561886,      \"OptionPartNumber\": \"minim\",      \"OptionSorting\": -83740842.9792911,      \"OptionImagePath\": \"occaecat ad nulla in\",      \"OptionBundleCatalogId\": -66271775,      \"OptionBundleQuantity\": -23257468    }  ]}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("3dCartWebAPI/v1/Products/{catalogid}/Options", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Options');

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
  'OptionSetID': -59267007,
  'OptionSetName': 'dolor sit',
  'OptionSorting': -57619884.65519599,
  'OptionRequired': true,
  'OptionType': 'des',
  'OptionURL': 'consequat ex laboris do',
  'OptionAdditionalInformation': 'ut ad',
  'OptionSizeLimit': -83493786,
  'OptionList': [
    {
      'OptionID': 53326616,
      'OptionName': 'ipsum cillum ut eu',
      'OptionSelected': false,
      'OptionHide': false,
      'OptionValue': -62903540.1561886,
      'OptionPartNumber': 'minim',
      'OptionSorting': -83740842.9792911,
      'OptionImagePath': 'occaecat ad nulla in',
      'OptionBundleCatalogId': -66271775,
      'OptionBundleQuantity': -23257468
    }
  ]
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "OptionSetID": -59267007,
  "OptionSetName": "dolor sit",
  "OptionSorting": -57619884.65519599,
  "OptionRequired": true,
  "OptionType": "des",
  "OptionURL": "consequat ex laboris do",
  "OptionAdditionalInformation": "ut ad",
  "OptionSizeLimit": -83493786,
  "OptionList": [
    {
      "OptionID": 53326616,
      "OptionName": "ipsum cillum ut eu",
      "OptionSelected": false,
      "OptionHide": false,
      "OptionValue": -62903540.1561886,
      "OptionPartNumber": "minim",
      "OptionSorting": -83740842.9792911,
      "OptionImagePath": "occaecat ad nulla in",
      "OptionBundleCatalogId": -66271775,
      "OptionBundleQuantity": -23257468
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

response = RestClient.post 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Options', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "OptionSetID": -59267007,
    "OptionSetName": "dolor sit",
    "OptionSorting": -57619884.65519599,
    "OptionRequired": true,
    "OptionType": "des",
    "OptionURL": "consequat ex laboris do",
    "OptionAdditionalInformation": "ut ad",
    "OptionSizeLimit": -83493786,
    "OptionList": [
      {
        "OptionID": 53326616,
        "OptionName": "ipsum cillum ut eu",
        "OptionSelected": false,
        "OptionHide": false,
        "OptionValue": -62903540.1561886,
        "OptionPartNumber": "minim",
        "OptionSorting": -83740842.9792911,
        "OptionImagePath": "occaecat ad nulla in",
        "OptionBundleCatalogId": -66271775,
        "OptionBundleQuantity": -23257468
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Options', data=values, headers=headers)

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

This method is used to create a new option set for a product. See [Data Structures](#optionset-object) for more information on the OptionSet object.

#### HTTP Request
`POST https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Options`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.

#### Responses and Errors

Response Code | Description
------------- | ---------
201 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.

### Retrieve a list of product options
> To retrieve a list of options from a product, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Options?limit=&offset=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Products/{catalogid}/Options"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Options?limit=&offset=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Options?limit=&offset=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Options?limit=&offset=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#optionset-object) for more information on the OptionSet object):

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

This method is used to retrieve a list of product Option Sets from a product. See [Data Structures](#optionset-object) for more information on the OptionSet object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Options{?limit,offset}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.
limit | optional | Maximum number of items that can be returned.
offset | optional | Starting point for the return data.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product was not found, or has no options.

### Update a list of product options
> To update a list of product options, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#optionset-object) for more information on the OptionSet object

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Options");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "[
  {
    \"OptionSetID\": 73092398,
    \"OptionSetName\": \"pariatur commodo\",
    \"OptionSorting\": 38778178.74964449,
    \"OptionRequired\": false,
    \"OptionType\": \"ea d\",
    \"OptionURL\": \"cillum dolor esse\",
    \"OptionAdditionalInformation\": \"dolore ut\",
    \"OptionSizeLimit\": -44285574,
    \"OptionList\": [
      {
        \"OptionID\": 86592820,
        \"OptionName\": \"consequat sint tempor\",
        \"OptionSelected\": true,
        \"OptionHide\": false,
        \"OptionValue\": -37931083.796003364,
        \"OptionPartNumber\": \"eu consectetur m\",
        \"OptionSorting\": 97355047.59456632,
        \"OptionImagePath\": \"deserunt\",
        \"OptionBundleCatalogId\": -65705558,
        \"OptionBundleQuantity\": 22960988
      },
      {
        \"OptionID\": 54287270,
        \"OptionName\": \"labore fugiat\",
        \"OptionSelected\": false,
        \"OptionHide\": false,
        \"OptionValue\": 88806147.04916638,
        \"OptionPartNumber\": \"nisi ut laboris\",
        \"OptionSorting\": -748587.8484460711,
        \"OptionImagePath\": \"Ut laboris ips\",
        \"OptionBundleCatalogId\": 9961091,
        \"OptionBundleQuantity\": -13789398
      }
    ]
  },
  {
    \"OptionSetID\": 68199220,
    \"OptionSetName\": \"consequat pariatur ut amet laboris\",
    \"OptionSorting\": -16604964.237249792,
    \"OptionRequired\": false,
    \"OptionType\": \"dolor Ut\",
    \"OptionURL\": \"dolor laborum ut\",
    \"OptionAdditionalInformation\": \"elit aute dolore nisi\",
    \"OptionSizeLimit\": -46580983,
    \"OptionList\": [
      {
        \"OptionID\": 13767319,
        \"OptionName\": \"culpa reprehenderit nostrud\",
        \"OptionSelected\": true,
        \"OptionHide\": false,
        \"OptionValue\": 6076360.897456512,
        \"OptionPartNumber\": \"qui ex\",
        \"OptionSorting\": 63780753.02396014,
        \"OptionImagePath\": \"sed proident\",
        \"OptionBundleCatalogId\": -86727429,
        \"OptionBundleQuantity\": 8182989
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
  
    using (var content = new StringContent("[  {    \"OptionSetID\": 73092398,    \"OptionSetName\": \"pariatur commodo\",    \"OptionSorting\": 38778178.74964449,    \"OptionRequired\": false,    \"OptionType\": \"ea d\",    \"OptionURL\": \"cillum dolor esse\",    \"OptionAdditionalInformation\": \"dolore ut\",    \"OptionSizeLimit\": -44285574,    \"OptionList\": [      {        \"OptionID\": 86592820,        \"OptionName\": \"consequat sint tempor\",        \"OptionSelected\": true,        \"OptionHide\": false,        \"OptionValue\": -37931083.796003364,        \"OptionPartNumber\": \"eu consectetur m\",        \"OptionSorting\": 97355047.59456632,        \"OptionImagePath\": \"deserunt\",        \"OptionBundleCatalogId\": -65705558,        \"OptionBundleQuantity\": 22960988      },      {        \"OptionID\": 54287270,        \"OptionName\": \"labore fugiat\",        \"OptionSelected\": false,        \"OptionHide\": false,        \"OptionValue\": 88806147.04916638,        \"OptionPartNumber\": \"nisi ut laboris\",        \"OptionSorting\": -748587.8484460711,        \"OptionImagePath\": \"Ut laboris ips\",        \"OptionBundleCatalogId\": 9961091,        \"OptionBundleQuantity\": -13789398      }    ]  },  {    \"OptionSetID\": 68199220,    \"OptionSetName\": \"consequat pariatur ut amet laboris\",    \"OptionSorting\": -16604964.237249792,    \"OptionRequired\": false,    \"OptionType\": \"dolor Ut\",    \"OptionURL\": \"dolor laborum ut\",    \"OptionAdditionalInformation\": \"elit aute dolore nisi\",    \"OptionSizeLimit\": -46580983,    \"OptionList\": [      {        \"OptionID\": 13767319,        \"OptionName\": \"culpa reprehenderit nostrud\",        \"OptionSelected\": true,        \"OptionHide\": false,        \"OptionValue\": 6076360.897456512,        \"OptionPartNumber\": \"qui ex\",        \"OptionSorting\": 63780753.02396014,        \"OptionImagePath\": \"sed proident\",        \"OptionBundleCatalogId\": -86727429,        \"OptionBundleQuantity\": 8182989      }    ]  }]", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Products/{catalogid}/Options", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Options');

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
    'OptionSetID': 73092398,
    'OptionSetName': 'pariatur commodo',
    'OptionSorting': 38778178.74964449,
    'OptionRequired': false,
    'OptionType': 'ea d',
    'OptionURL': 'cillum dolor esse',
    'OptionAdditionalInformation': 'dolore ut',
    'OptionSizeLimit': -44285574,
    'OptionList': [
      {
        'OptionID': 86592820,
        'OptionName': 'consequat sint tempor',
        'OptionSelected': true,
        'OptionHide': false,
        'OptionValue': -37931083.796003364,
        'OptionPartNumber': 'eu consectetur m',
        'OptionSorting': 97355047.59456632,
        'OptionImagePath': 'deserunt',
        'OptionBundleCatalogId': -65705558,
        'OptionBundleQuantity': 22960988
      },
      {
        'OptionID': 54287270,
        'OptionName': 'labore fugiat',
        'OptionSelected': false,
        'OptionHide': false,
        'OptionValue': 88806147.04916638,
        'OptionPartNumber': 'nisi ut laboris',
        'OptionSorting': -748587.8484460711,
        'OptionImagePath': 'Ut laboris ips',
        'OptionBundleCatalogId': 9961091,
        'OptionBundleQuantity': -13789398
      }
    ]
  },
  {
    'OptionSetID': 68199220,
    'OptionSetName': 'consequat pariatur ut amet laboris',
    'OptionSorting': -16604964.237249792,
    'OptionRequired': false,
    'OptionType': 'dolor Ut',
    'OptionURL': 'dolor laborum ut',
    'OptionAdditionalInformation': 'elit aute dolore nisi',
    'OptionSizeLimit': -46580983,
    'OptionList': [
      {
        'OptionID': 13767319,
        'OptionName': 'culpa reprehenderit nostrud',
        'OptionSelected': true,
        'OptionHide': false,
        'OptionValue': 6076360.897456512,
        'OptionPartNumber': 'qui ex',
        'OptionSorting': 63780753.02396014,
        'OptionImagePath': 'sed proident',
        'OptionBundleCatalogId': -86727429,
        'OptionBundleQuantity': 8182989
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
    "OptionSetID": 73092398,
    "OptionSetName": "pariatur commodo",
    "OptionSorting": 38778178.74964449,
    "OptionRequired": false,
    "OptionType": "ea d",
    "OptionURL": "cillum dolor esse",
    "OptionAdditionalInformation": "dolore ut",
    "OptionSizeLimit": -44285574,
    "OptionList": [
      {
        "OptionID": 86592820,
        "OptionName": "consequat sint tempor",
        "OptionSelected": true,
        "OptionHide": false,
        "OptionValue": -37931083.796003364,
        "OptionPartNumber": "eu consectetur m",
        "OptionSorting": 97355047.59456632,
        "OptionImagePath": "deserunt",
        "OptionBundleCatalogId": -65705558,
        "OptionBundleQuantity": 22960988
      },
      {
        "OptionID": 54287270,
        "OptionName": "labore fugiat",
        "OptionSelected": false,
        "OptionHide": false,
        "OptionValue": 88806147.04916638,
        "OptionPartNumber": "nisi ut laboris",
        "OptionSorting": -748587.8484460711,
        "OptionImagePath": "Ut laboris ips",
        "OptionBundleCatalogId": 9961091,
        "OptionBundleQuantity": -13789398
      }
    ]
  },
  {
    "OptionSetID": 68199220,
    "OptionSetName": "consequat pariatur ut amet laboris",
    "OptionSorting": -16604964.237249792,
    "OptionRequired": false,
    "OptionType": "dolor Ut",
    "OptionURL": "dolor laborum ut",
    "OptionAdditionalInformation": "elit aute dolore nisi",
    "OptionSizeLimit": -46580983,
    "OptionList": [
      {
        "OptionID": 13767319,
        "OptionName": "culpa reprehenderit nostrud",
        "OptionSelected": true,
        "OptionHide": false,
        "OptionValue": 6076360.897456512,
        "OptionPartNumber": "qui ex",
        "OptionSorting": 63780753.02396014,
        "OptionImagePath": "sed proident",
        "OptionBundleCatalogId": -86727429,
        "OptionBundleQuantity": 8182989
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

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Options', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  [
    {
      "OptionSetID": 73092398,
      "OptionSetName": "pariatur commodo",
      "OptionSorting": 38778178.74964449,
      "OptionRequired": false,
      "OptionType": "ea d",
      "OptionURL": "cillum dolor esse",
      "OptionAdditionalInformation": "dolore ut",
      "OptionSizeLimit": -44285574,
      "OptionList": [
        {
          "OptionID": 86592820,
          "OptionName": "consequat sint tempor",
          "OptionSelected": true,
          "OptionHide": false,
          "OptionValue": -37931083.796003364,
          "OptionPartNumber": "eu consectetur m",
          "OptionSorting": 97355047.59456632,
          "OptionImagePath": "deserunt",
          "OptionBundleCatalogId": -65705558,
          "OptionBundleQuantity": 22960988
        },
        {
          "OptionID": 54287270,
          "OptionName": "labore fugiat",
          "OptionSelected": false,
          "OptionHide": false,
          "OptionValue": 88806147.04916638,
          "OptionPartNumber": "nisi ut laboris",
          "OptionSorting": -748587.8484460711,
          "OptionImagePath": "Ut laboris ips",
          "OptionBundleCatalogId": 9961091,
          "OptionBundleQuantity": -13789398
        }
      ]
    },
    {
      "OptionSetID": 68199220,
      "OptionSetName": "consequat pariatur ut amet laboris",
      "OptionSorting": -16604964.237249792,
      "OptionRequired": false,
      "OptionType": "dolor Ut",
      "OptionURL": "dolor laborum ut",
      "OptionAdditionalInformation": "elit aute dolore nisi",
      "OptionSizeLimit": -46580983,
      "OptionList": [
        {
          "OptionID": 13767319,
          "OptionName": "culpa reprehenderit nostrud",
          "OptionSelected": true,
          "OptionHide": false,
          "OptionValue": 6076360.897456512,
          "OptionPartNumber": "qui ex",
          "OptionSorting": 63780753.02396014,
          "OptionImagePath": "sed proident",
          "OptionBundleCatalogId": -86727429,
          "OptionBundleQuantity": 8182989
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Options', data=values, headers=headers)
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

This method is used to update a list of option sets on a product. See [Data Structures](#optionset-object) for more information on the OptionSet object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Options`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product/option(s) was not found.

### Update a specific product option by id
> To update a specific product option, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#optionset-object) for more information on the OptionSet object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Options/{optionsetid}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"OptionSetID\": -89825483,
  \"OptionSetName\": \"Excepteur adipisicing ut culpa\",
  \"OptionSorting\": 51718076.13121575,
  \"OptionRequired\": false,
  \"OptionType\": \"ven\",
  \"OptionURL\": \"enim eiusmod aliqua amet\",
  \"OptionAdditionalInformation\": \"eiusmod\",
  \"OptionSizeLimit\": 88365074,
  \"OptionList\": [
    {
      \"OptionID\": -54535239,
      \"OptionName\": \"sunt ullamco officia mollit\",
      \"OptionSelected\": true,
      \"OptionHide\": false,
      \"OptionValue\": 88804865.94286183,
      \"OptionPartNumber\": \"consequat a\",
      \"OptionSorting\": -55825003.3112766,
      \"OptionImagePath\": \"do\",
      \"OptionBundleCatalogId\": 50494724,
      \"OptionBundleQuantity\": 64081584
    },
    {
      \"OptionID\": 74864459,
      \"OptionName\": \"velit nulla et in\",
      \"OptionSelected\": true,
      \"OptionHide\": true,
      \"OptionValue\": -49468016.93903953,
      \"OptionPartNumber\": \"nostr\",
      \"OptionSorting\": 38639847.30815068,
      \"OptionImagePath\": \"id mollit\",
      \"OptionBundleCatalogId\": -15655906,
      \"OptionBundleQuantity\": 33463493
    },
    {
      \"OptionID\": 25722927,
      \"OptionName\": \"laboris\",
      \"OptionSelected\": false,
      \"OptionHide\": true,
      \"OptionValue\": 4514854.642595798,
      \"OptionPartNumber\": \"pariatur in laborum ut\",
      \"OptionSorting\": 74858496.7309125,
      \"OptionImagePath\": \"Excepteur laborum\",
      \"OptionBundleCatalogId\": -45167745,
      \"OptionBundleQuantity\": 1223065
    },
    {
      \"OptionID\": 71957835,
      \"OptionName\": \"culpa dolore occaecat ullamco proident\",
      \"OptionSelected\": false,
      \"OptionHide\": true,
      \"OptionValue\": -46982636.986776516,
      \"OptionPartNumber\": \"commodo Ut\",
      \"OptionSorting\": 86798911.90782931,
      \"OptionImagePath\": \"in et\",
      \"OptionBundleCatalogId\": 32805010,
      \"OptionBundleQuantity\": -92259311
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
  
    using (var content = new StringContent("{  \"OptionSetID\": -89825483,  \"OptionSetName\": \"Excepteur adipisicing ut culpa\",  \"OptionSorting\": 51718076.13121575,  \"OptionRequired\": false,  \"OptionType\": \"ven\",  \"OptionURL\": \"enim eiusmod aliqua amet\",  \"OptionAdditionalInformation\": \"eiusmod\",  \"OptionSizeLimit\": 88365074,  \"OptionList\": [    {      \"OptionID\": -54535239,      \"OptionName\": \"sunt ullamco officia mollit\",      \"OptionSelected\": true,      \"OptionHide\": false,      \"OptionValue\": 88804865.94286183,      \"OptionPartNumber\": \"consequat a\",      \"OptionSorting\": -55825003.3112766,      \"OptionImagePath\": \"do\",      \"OptionBundleCatalogId\": 50494724,      \"OptionBundleQuantity\": 64081584    },    {      \"OptionID\": 74864459,      \"OptionName\": \"velit nulla et in\",      \"OptionSelected\": true,      \"OptionHide\": true,      \"OptionValue\": -49468016.93903953,      \"OptionPartNumber\": \"nostr\",      \"OptionSorting\": 38639847.30815068,      \"OptionImagePath\": \"id mollit\",      \"OptionBundleCatalogId\": -15655906,      \"OptionBundleQuantity\": 33463493    },    {      \"OptionID\": 25722927,      \"OptionName\": \"laboris\",      \"OptionSelected\": false,      \"OptionHide\": true,      \"OptionValue\": 4514854.642595798,      \"OptionPartNumber\": \"pariatur in laborum ut\",      \"OptionSorting\": 74858496.7309125,      \"OptionImagePath\": \"Excepteur laborum\",      \"OptionBundleCatalogId\": -45167745,      \"OptionBundleQuantity\": 1223065    },    {      \"OptionID\": 71957835,      \"OptionName\": \"culpa dolore occaecat ullamco proident\",      \"OptionSelected\": false,      \"OptionHide\": true,      \"OptionValue\": -46982636.986776516,      \"OptionPartNumber\": \"commodo Ut\",      \"OptionSorting\": 86798911.90782931,      \"OptionImagePath\": \"in et\",      \"OptionBundleCatalogId\": 32805010,      \"OptionBundleQuantity\": -92259311    }  ]}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Products/{catalogid}/Options/{optionsetid}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Options/{optionsetid}');

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
  'OptionSetID': -89825483,
  'OptionSetName': 'Excepteur adipisicing ut culpa',
  'OptionSorting': 51718076.13121575,
  'OptionRequired': false,
  'OptionType': 'ven',
  'OptionURL': 'enim eiusmod aliqua amet',
  'OptionAdditionalInformation': 'eiusmod',
  'OptionSizeLimit': 88365074,
  'OptionList': [
    {
      'OptionID': -54535239,
      'OptionName': 'sunt ullamco officia mollit',
      'OptionSelected': true,
      'OptionHide': false,
      'OptionValue': 88804865.94286183,
      'OptionPartNumber': 'consequat a',
      'OptionSorting': -55825003.3112766,
      'OptionImagePath': 'do',
      'OptionBundleCatalogId': 50494724,
      'OptionBundleQuantity': 64081584
    },
    {
      'OptionID': 74864459,
      'OptionName': 'velit nulla et in',
      'OptionSelected': true,
      'OptionHide': true,
      'OptionValue': -49468016.93903953,
      'OptionPartNumber': 'nostr',
      'OptionSorting': 38639847.30815068,
      'OptionImagePath': 'id mollit',
      'OptionBundleCatalogId': -15655906,
      'OptionBundleQuantity': 33463493
    },
    {
      'OptionID': 25722927,
      'OptionName': 'laboris',
      'OptionSelected': false,
      'OptionHide': true,
      'OptionValue': 4514854.642595798,
      'OptionPartNumber': 'pariatur in laborum ut',
      'OptionSorting': 74858496.7309125,
      'OptionImagePath': 'Excepteur laborum',
      'OptionBundleCatalogId': -45167745,
      'OptionBundleQuantity': 1223065
    },
    {
      'OptionID': 71957835,
      'OptionName': 'culpa dolore occaecat ullamco proident',
      'OptionSelected': false,
      'OptionHide': true,
      'OptionValue': -46982636.986776516,
      'OptionPartNumber': 'commodo Ut',
      'OptionSorting': 86798911.90782931,
      'OptionImagePath': 'in et',
      'OptionBundleCatalogId': 32805010,
      'OptionBundleQuantity': -92259311
    }
  ]
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "OptionSetID": -89825483,
  "OptionSetName": "Excepteur adipisicing ut culpa",
  "OptionSorting": 51718076.13121575,
  "OptionRequired": false,
  "OptionType": "ven",
  "OptionURL": "enim eiusmod aliqua amet",
  "OptionAdditionalInformation": "eiusmod",
  "OptionSizeLimit": 88365074,
  "OptionList": [
    {
      "OptionID": -54535239,
      "OptionName": "sunt ullamco officia mollit",
      "OptionSelected": true,
      "OptionHide": false,
      "OptionValue": 88804865.94286183,
      "OptionPartNumber": "consequat a",
      "OptionSorting": -55825003.3112766,
      "OptionImagePath": "do",
      "OptionBundleCatalogId": 50494724,
      "OptionBundleQuantity": 64081584
    },
    {
      "OptionID": 74864459,
      "OptionName": "velit nulla et in",
      "OptionSelected": true,
      "OptionHide": true,
      "OptionValue": -49468016.93903953,
      "OptionPartNumber": "nostr",
      "OptionSorting": 38639847.30815068,
      "OptionImagePath": "id mollit",
      "OptionBundleCatalogId": -15655906,
      "OptionBundleQuantity": 33463493
    },
    {
      "OptionID": 25722927,
      "OptionName": "laboris",
      "OptionSelected": false,
      "OptionHide": true,
      "OptionValue": 4514854.642595798,
      "OptionPartNumber": "pariatur in laborum ut",
      "OptionSorting": 74858496.7309125,
      "OptionImagePath": "Excepteur laborum",
      "OptionBundleCatalogId": -45167745,
      "OptionBundleQuantity": 1223065
    },
    {
      "OptionID": 71957835,
      "OptionName": "culpa dolore occaecat ullamco proident",
      "OptionSelected": false,
      "OptionHide": true,
      "OptionValue": -46982636.986776516,
      "OptionPartNumber": "commodo Ut",
      "OptionSorting": 86798911.90782931,
      "OptionImagePath": "in et",
      "OptionBundleCatalogId": 32805010,
      "OptionBundleQuantity": -92259311
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

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Options/{optionsetid}', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "OptionSetID": -89825483,
    "OptionSetName": "Excepteur adipisicing ut culpa",
    "OptionSorting": 51718076.13121575,
    "OptionRequired": false,
    "OptionType": "ven",
    "OptionURL": "enim eiusmod aliqua amet",
    "OptionAdditionalInformation": "eiusmod",
    "OptionSizeLimit": 88365074,
    "OptionList": [
      {
        "OptionID": -54535239,
        "OptionName": "sunt ullamco officia mollit",
        "OptionSelected": true,
        "OptionHide": false,
        "OptionValue": 88804865.94286183,
        "OptionPartNumber": "consequat a",
        "OptionSorting": -55825003.3112766,
        "OptionImagePath": "do",
        "OptionBundleCatalogId": 50494724,
        "OptionBundleQuantity": 64081584
      },
      {
        "OptionID": 74864459,
        "OptionName": "velit nulla et in",
        "OptionSelected": true,
        "OptionHide": true,
        "OptionValue": -49468016.93903953,
        "OptionPartNumber": "nostr",
        "OptionSorting": 38639847.30815068,
        "OptionImagePath": "id mollit",
        "OptionBundleCatalogId": -15655906,
        "OptionBundleQuantity": 33463493
      },
      {
        "OptionID": 25722927,
        "OptionName": "laboris",
        "OptionSelected": false,
        "OptionHide": true,
        "OptionValue": 4514854.642595798,
        "OptionPartNumber": "pariatur in laborum ut",
        "OptionSorting": 74858496.7309125,
        "OptionImagePath": "Excepteur laborum",
        "OptionBundleCatalogId": -45167745,
        "OptionBundleQuantity": 1223065
      },
      {
        "OptionID": 71957835,
        "OptionName": "culpa dolore occaecat ullamco proident",
        "OptionSelected": false,
        "OptionHide": true,
        "OptionValue": -46982636.986776516,
        "OptionPartNumber": "commodo Ut",
        "OptionSorting": 86798911.90782931,
        "OptionImagePath": "in et",
        "OptionBundleCatalogId": 32805010,
        "OptionBundleQuantity": -92259311
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Options/{optionsetid}', data=values, headers=headers)
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

This method is used to update a specific product option set. See [Data Structures](#optionset-object) for more information on the OptionSet object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Options/{optionsetid}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.
optionsetid | required | The id of the option set to update.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product/option was not found.

## Product Related

### Create a new related product
> To create a new related product, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#relatedproduct-object) for more information on the RelatedProduct object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Related");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"RelatedIndexID\": -39662551,
  \"RelatedProductID\": 60523116,
  \"RelatedProductSorting\": -60137428
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
  
    using (var content = new StringContent("{  \"RelatedIndexID\": -39662551,  \"RelatedProductID\": 60523116,  \"RelatedProductSorting\": -60137428}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("3dCartWebAPI/v1/Products/{catalogid}/Related", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Related');

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
  'RelatedIndexID': -39662551,
  'RelatedProductID': 60523116,
  'RelatedProductSorting': -60137428
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "RelatedIndexID": -39662551,
  "RelatedProductID": 60523116,
  "RelatedProductSorting": -60137428
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.post 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Related', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "RelatedIndexID": -39662551,
    "RelatedProductID": 60523116,
    "RelatedProductSorting": -60137428
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Related', data=values, headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"RelatedIndexID",
    "Value":"1234",
    "Status":"201",
    "Message":"Created successfully",
  }
]
```

See [Data Structures](#relatedproduct-object) for more information on the RelatedProduct object.

#### HTTP Request
`POST https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Related`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.

#### Responses and Errors

Response Code | Description
------------- | ---------
201 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.

### Retrieve a list of related products
> To retrieve a list of related products, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Related?limit=&offset=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Products/{catalogid}/Related"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Related?limit=&offset=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Related?limit=&offset=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Related?limit=&offset=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#relatedproduct-object) for more information on the RelatedProduct object):

```json
[
  {
    "RelatedIndexID": 1,
    "RelatedProductID": 1,
    "RelatedProductSorting": 1
  },
  {
    "RelatedIndexID": 1,
    "RelatedProductID": 1,
    "RelatedProductSorting": 1
  }
]
```

See [Data Structures](#relatedproduct-object) for more information on the RelatedProduct object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Related?{limit,offset}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.
limit | optional | Maximum number of items that can be returned.
offset | optional | Starting point for the return data.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product/related product was not found.

### Update a list of related products
> To retrieve a Cart from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#relatedproduct-object) for more information on the RelatedProduct object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Related");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "[
  {
    \"RelatedIndexID\": 17592088,
    \"RelatedProductID\": 76864329,
    \"RelatedProductSorting\": -50852388
  },
  {
    \"RelatedIndexID\": -23745217,
    \"RelatedProductID\": 23570353,
    \"RelatedProductSorting\": 58398508
  },
  {
    \"RelatedIndexID\": 94823493,
    \"RelatedProductID\": -74953246,
    \"RelatedProductSorting\": -86505765
  },
  {
    \"RelatedIndexID\": 46789088,
    \"RelatedProductID\": -70849213,
    \"RelatedProductSorting\": -74242301
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
  
    using (var content = new StringContent("[  {    \"RelatedIndexID\": 17592088,    \"RelatedProductID\": 76864329,    \"RelatedProductSorting\": -50852388  },  {    \"RelatedIndexID\": -23745217,    \"RelatedProductID\": 23570353,    \"RelatedProductSorting\": 58398508  },  {    \"RelatedIndexID\": 94823493,    \"RelatedProductID\": -74953246,    \"RelatedProductSorting\": -86505765  },  {    \"RelatedIndexID\": 46789088,    \"RelatedProductID\": -70849213,    \"RelatedProductSorting\": -74242301  }]", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Products/{catalogid}/Related", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Related');

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
    'RelatedIndexID': 17592088,
    'RelatedProductID': 76864329,
    'RelatedProductSorting': -50852388
  },
  {
    'RelatedIndexID': -23745217,
    'RelatedProductID': 23570353,
    'RelatedProductSorting': 58398508
  },
  {
    'RelatedIndexID': 94823493,
    'RelatedProductID': -74953246,
    'RelatedProductSorting': -86505765
  },
  {
    'RelatedIndexID': 46789088,
    'RelatedProductID': -70849213,
    'RelatedProductSorting': -74242301
  }
];

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '[
  {
    "RelatedIndexID": 17592088,
    "RelatedProductID": 76864329,
    "RelatedProductSorting": -50852388
  },
  {
    "RelatedIndexID": -23745217,
    "RelatedProductID": 23570353,
    "RelatedProductSorting": 58398508
  },
  {
    "RelatedIndexID": 94823493,
    "RelatedProductID": -74953246,
    "RelatedProductSorting": -86505765
  },
  {
    "RelatedIndexID": 46789088,
    "RelatedProductID": -70849213,
    "RelatedProductSorting": -74242301
  }
]'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Related', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  [
    {
      "RelatedIndexID": 17592088,
      "RelatedProductID": 76864329,
      "RelatedProductSorting": -50852388
    },
    {
      "RelatedIndexID": -23745217,
      "RelatedProductID": 23570353,
      "RelatedProductSorting": 58398508
    },
    {
      "RelatedIndexID": 94823493,
      "RelatedProductID": -74953246,
      "RelatedProductSorting": -86505765
    },
    {
      "RelatedIndexID": 46789088,
      "RelatedProductID": -70849213,
      "RelatedProductSorting": -74242301
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Related', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"RelatedIndexID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

See [Data Structures](#relatedproduct-object) for more information on the RelatedProduct object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Related`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product/related product was not found.

### Update a specific related product by id
> To retrieve a Cart from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#relatedproduct-object) for more information on the RelatedProduct object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Related/{relatedindexid}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"RelatedIndexID\": 44766185,
  \"RelatedProductID\": -25716565,
  \"RelatedProductSorting\": 52470975
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
  
    using (var content = new StringContent("{  \"RelatedIndexID\": 44766185,  \"RelatedProductID\": -25716565,  \"RelatedProductSorting\": 52470975}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Products/{catalogid}/Related/{relatedindexid}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Related/{relatedindexid}');

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
  'RelatedIndexID': 44766185,
  'RelatedProductID': -25716565,
  'RelatedProductSorting': 52470975
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "RelatedIndexID": 44766185,
  "RelatedProductID": -25716565,
  "RelatedProductSorting": 52470975
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Related/{relatedindexid}', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "RelatedIndexID": 44766185,
    "RelatedProductID": -25716565,
    "RelatedProductSorting": 52470975
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Related/{relatedindexid}', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"RelatedIndexID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

See [Data Structures](#relatedproduct-object) for more information on the RelatedProduct object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Related/{relatedindexid}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.
relatedindexid | required | The id of the related product to update

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The specified product/related product was not found.

## Product Serials

### Create a new product serial
> To create a new product serial, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#serial-object) for more information on the Serial object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Serials");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"SerialID\": 38395066,
  \"SerialUses\": 37377177,
  \"SerialCode\": \"anim ut eiusmod\"
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
  
    using (var content = new StringContent("{  \"SerialID\": 38395066,  \"SerialUses\": 37377177,  \"SerialCode\": \"anim ut eiusmod\"}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("3dCartWebAPI/v1/Products/{catalogid}/Serials", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Serials');

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
  'SerialID': 38395066,
  'SerialUses': 37377177,
  'SerialCode': 'anim ut eiusmod'
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "SerialID": 38395066,
  "SerialUses": 37377177,
  "SerialCode": "anim ut eiusmod"
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.post 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Serials', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "SerialID": 38395066,
    "SerialUses": 37377177,
    "SerialCode": "anim ut eiusmod"
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Serials', data=values, headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"SerialID",
    "Value":"1234",
    "Status":"201",
    "Message":"Created successfully",
  }
]
```

#### HTTP Request
`POST https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Serials`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.

#### Responses and Errors

Response Code | Description
------------- | ---------
201 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.

### Retrieve a list of product serials
> To retrieve a Cart from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Serials?limit=&offset=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Products/{catalogid}/Serials"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Serials?limit=&offset=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Serials?limit=&offset=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Serials?limit=&offset=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#serial-object) for more information on the Serial object):

```json
[
  {
    "SerialID": 1,
    "SerialUses": 1,
    "SerialCode": "sample string 1"
  },
  {
    "SerialID": 1,
    "SerialUses": 1,
    "SerialCode": "sample string 1"
  }
]
```

See [Data Structures](#serial-object) for more information on the Serial object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Serials`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.
limit | optional | Maximum number of items that can be returned.
offset | optional | Starting point for the return data.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The product was not found or has no serials.

### Update a list of product serials
> To retrieve a Cart from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#serial-object) for more information on the Serial object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Serials");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "[
  {
    \"SerialID\": 40064968,
    \"SerialUses\": 43048347,
    \"SerialCode\": \"elit in id\"
  },
  {
    \"SerialID\": 89187483,
    \"SerialUses\": 30534277,
    \"SerialCode\": \"enim aliqua\"
  },
  {
    \"SerialID\": 3327119,
    \"SerialUses\": 90353066,
    \"SerialCode\": \"in ullamco dolore\"
  },
  {
    \"SerialID\": -41350835,
    \"SerialUses\": 5810252,
    \"SerialCode\": \"mollit minim\"
  },
  {
    \"SerialID\": 40520107,
    \"SerialUses\": 74521676,
    \"SerialCode\": \"Lorem ut\"
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
  
    using (var content = new StringContent("[  {    \"SerialID\": 40064968,    \"SerialUses\": 43048347,    \"SerialCode\": \"elit in id\"  },  {    \"SerialID\": 89187483,    \"SerialUses\": 30534277,    \"SerialCode\": \"enim aliqua\"  },  {    \"SerialID\": 3327119,    \"SerialUses\": 90353066,    \"SerialCode\": \"in ullamco dolore\"  },  {    \"SerialID\": -41350835,    \"SerialUses\": 5810252,    \"SerialCode\": \"mollit minim\"  },  {    \"SerialID\": 40520107,    \"SerialUses\": 74521676,    \"SerialCode\": \"Lorem ut\"  }]", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Products/{catalogid}/Serials", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Serials');

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
    'SerialID': 40064968,
    'SerialUses': 43048347,
    'SerialCode': 'elit in id'
  },
  {
    'SerialID': 89187483,
    'SerialUses': 30534277,
    'SerialCode': 'enim aliqua'
  },
  {
    'SerialID': 3327119,
    'SerialUses': 90353066,
    'SerialCode': 'in ullamco dolore'
  },
  {
    'SerialID': -41350835,
    'SerialUses': 5810252,
    'SerialCode': 'mollit minim'
  },
  {
    'SerialID': 40520107,
    'SerialUses': 74521676,
    'SerialCode': 'Lorem ut'
  }
];

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '[
  {
    "SerialID": 40064968,
    "SerialUses": 43048347,
    "SerialCode": "elit in id"
  },
  {
    "SerialID": 89187483,
    "SerialUses": 30534277,
    "SerialCode": "enim aliqua"
  },
  {
    "SerialID": 3327119,
    "SerialUses": 90353066,
    "SerialCode": "in ullamco dolore"
  },
  {
    "SerialID": -41350835,
    "SerialUses": 5810252,
    "SerialCode": "mollit minim"
  },
  {
    "SerialID": 40520107,
    "SerialUses": 74521676,
    "SerialCode": "Lorem ut"
  }
]'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Serials', values, headers
puts response
```

```python
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '[
  {
    "SerialID": 40064968,
    "SerialUses": 43048347,
    "SerialCode": "elit in id"
  },
  {
    "SerialID": 89187483,
    "SerialUses": 30534277,
    "SerialCode": "enim aliqua"
  },
  {
    "SerialID": 3327119,
    "SerialUses": 90353066,
    "SerialCode": "in ullamco dolore"
  },
  {
    "SerialID": -41350835,
    "SerialUses": 5810252,
    "SerialCode": "mollit minim"
  },
  {
    "SerialID": 40520107,
    "SerialUses": 74521676,
    "SerialCode": "Lorem ut"
  }
]'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Serials', values, headers
puts response
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"SerialID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Serials`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The product/serial(s) was not found.

### Update a specific product serial by id
> To retrieve a Cart from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#serial-object) for more information on the Serial object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Serials/{serialid}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"SerialID\": 91746631,
  \"SerialUses\": -98034734,
  \"SerialCode\": \"nisi dolore\"
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
  
    using (var content = new StringContent("{  \"SerialID\": 91746631,  \"SerialUses\": -98034734,  \"SerialCode\": \"nisi dolore\"}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Products/{catalogid}/Serials/{serialid}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Serials/{serialid}');

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
  'SerialID': 91746631,
  'SerialUses': -98034734,
  'SerialCode': 'nisi dolore'
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "SerialID": 91746631,
  "SerialUses": -98034734,
  "SerialCode": "nisi dolore"
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Serials/{serialid}', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "SerialID": 91746631,
    "SerialUses": -98034734,
    "SerialCode": "nisi dolore"
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Serials/{serialid}', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"SerialID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/Serials/{serialid}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.
serialid | required | The id of the serial to update.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The product/serial was not found.

## Product UpSelling

### Create a new upsell product
> To create a new upsell product, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#upsellingitem-object) for more information on the UpSellingItem object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/UpSelling");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"UpSellingIndexID\": -13799368,
  \"UpSellingItemID\": -58083440,
  \"UpSellingItemSorting\": -68415871
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
  
    using (var content = new StringContent("{  \"UpSellingIndexID\": -13799368,  \"UpSellingItemID\": -58083440,  \"UpSellingItemSorting\": -68415871}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PostAsync("3dCartWebAPI/v1/Products/{catalogid}/UpSelling", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('POST', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/UpSelling');

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
  'UpSellingIndexID': -13799368,
  'UpSellingItemID': -58083440,
  'UpSellingItemSorting': -68415871
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "UpSellingIndexID": -13799368,
  "UpSellingItemID": -58083440,
  "UpSellingItemSorting": -68415871
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.post 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/UpSelling', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "UpSellingIndexID": -13799368,
    "UpSellingItemID": -58083440,
    "UpSellingItemSorting": -68415871
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/UpSelling', data=values, headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"UpSellingIndexID",
    "Value":"1234",
    "Status":"201",
    "Message":"Created successfully",
  }
]
```

See [Data Structures](#upsellingitem-object) for more information on the UpSellingItem object.

#### HTTP Request
`POST https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/UpSelling`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.

### Retrieve a list of upsell products
> To retrieve a list of upsell products, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). 

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/UpSelling?limit=&offset=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Products/{catalogid}/UpSelling"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/UpSelling?limit=&offset=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/UpSelling?limit=&offset=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/UpSelling?limit=&offset=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#upsellingitem-object) for more information on the UpSellingItem object):

```json
[
  {
    "UpSellingIndexID": 1,
    "UpSellingItemID": 1,
    "UpSellingItemSorting": 1
  },
  {
    "UpSellingIndexID": 1,
    "UpSellingItemID": 1,
    "UpSellingItemSorting": 1
  }
]
```

See [Data Structures](#upsellingitem-object) for more information on the UpSellingItem object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/UpSelling`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.
limit | optional | Maximum number of items that can be returned.
offset | optional | Starting point for the return data.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The product was not found or has no upsell items.

### Update a list of upsell products
> To retrieve a Cart from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#upsellingitem-object) for more information on the UpSellingItem object

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/UpSelling");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "[
  {
    \"UpSellingIndexID\": -41249289,
    \"UpSellingItemID\": -59703831,
    \"UpSellingItemSorting\": 49401527
  },
  {
    \"UpSellingIndexID\": 88596059,
    \"UpSellingItemID\": 99266083,
    \"UpSellingItemSorting\": 61714446
  },
  {
    \"UpSellingIndexID\": -93843069,
    \"UpSellingItemID\": 92440678,
    \"UpSellingItemSorting\": -54297201
  },
  {
    \"UpSellingIndexID\": -90562263,
    \"UpSellingItemID\": -59038675,
    \"UpSellingItemSorting\": -64618281
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
  
    using (var content = new StringContent("[  {    \"UpSellingIndexID\": -41249289,    \"UpSellingItemID\": -59703831,    \"UpSellingItemSorting\": 49401527  },  {    \"UpSellingIndexID\": 88596059,    \"UpSellingItemID\": 99266083,    \"UpSellingItemSorting\": 61714446  },  {    \"UpSellingIndexID\": -93843069,    \"UpSellingItemID\": 92440678,    \"UpSellingItemSorting\": -54297201  },  {    \"UpSellingIndexID\": -90562263,    \"UpSellingItemID\": -59038675,    \"UpSellingItemSorting\": -64618281  }]", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Products/{catalogid}/UpSelling", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/UpSelling');

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
    'UpSellingIndexID': -41249289,
    'UpSellingItemID': -59703831,
    'UpSellingItemSorting': 49401527
  },
  {
    'UpSellingIndexID': 88596059,
    'UpSellingItemID': 99266083,
    'UpSellingItemSorting': 61714446
  },
  {
    'UpSellingIndexID': -93843069,
    'UpSellingItemID': 92440678,
    'UpSellingItemSorting': -54297201
  },
  {
    'UpSellingIndexID': -90562263,
    'UpSellingItemID': -59038675,
    'UpSellingItemSorting': -64618281
  }
];

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '[
  {
    "UpSellingIndexID": -41249289,
    "UpSellingItemID": -59703831,
    "UpSellingItemSorting": 49401527
  },
  {
    "UpSellingIndexID": 88596059,
    "UpSellingItemID": 99266083,
    "UpSellingItemSorting": 61714446
  },
  {
    "UpSellingIndexID": -93843069,
    "UpSellingItemID": 92440678,
    "UpSellingItemSorting": -54297201
  },
  {
    "UpSellingIndexID": -90562263,
    "UpSellingItemID": -59038675,
    "UpSellingItemSorting": -64618281
  }
]'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/UpSelling', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  [
    {
      "UpSellingIndexID": -41249289,
      "UpSellingItemID": -59703831,
      "UpSellingItemSorting": 49401527
    },
    {
      "UpSellingIndexID": 88596059,
      "UpSellingItemID": 99266083,
      "UpSellingItemSorting": 61714446
    },
    {
      "UpSellingIndexID": -93843069,
      "UpSellingItemID": 92440678,
      "UpSellingItemSorting": -54297201
    },
    {
      "UpSellingIndexID": -90562263,
      "UpSellingItemID": -59038675,
      "UpSellingItemSorting": -64618281
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/UpSelling', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"UpSellingIndexID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

See [Data Structures](#upsellingitem-object) for more information on the UpSellingItem object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/UpSelling`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The product/upsell item(s) was not found.

### Update a specific upsell product by id
> To retrieve a Cart from the store, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication). See [Data Structures](#upsellingitem-object) for more information on the UpSellingItem object.

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/UpSelling/{upsellingindexid}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

curl_setopt($ch, CURLOPT_POSTFIELDS, "{
  \"UpSellingIndexID\": -36079282,
  \"UpSellingItemID\": 60450793,
  \"UpSellingItemSorting\": 5651050
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
  
    using (var content = new StringContent("{  \"UpSellingIndexID\": -36079282,  \"UpSellingItemID\": 60450793,  \"UpSellingItemSorting\": 5651050}", System.Text.Encoding.Default, "application/json"))
    {
      using (var response = await httpClient.PutAsync("3dCartWebAPI/v1/Products/{catalogid}/UpSelling/{upsellingindexid}", content))
      {
        string responseData = await response.Content.ReadAsStringAsync();
      }
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('PUT', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/UpSelling/{upsellingindexid}');

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
  'UpSellingIndexID': -36079282,
  'UpSellingItemID': 60450793,
  'UpSellingItemSorting': 5651050
};

request.send(JSON.stringify(body));
```

```ruby
require 'rubygems' if RUBY_VERSION < '1.9'
require 'rest_client'

values = '{
  "UpSellingIndexID": -36079282,
  "UpSellingItemID": 60450793,
  "UpSellingItemSorting": 5651050
}'

headers = {
  :content_type => 'application/json',
  :accept => 'application/json',
  :secureurl => '',
  :privatekey => '',
  :token => ''
}

response = RestClient.put 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/UpSelling/{upsellingindexid}', values, headers
puts response
```

```python
from urllib2 import Request, urlopen

values = """
  {
    "UpSellingIndexID": -36079282,
    "UpSellingItemID": 60450793,
    "UpSellingItemSorting": 5651050
  }
"""

headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'SecureURL': '',
  'PrivateKey': '',
  'Token': ''
}
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/UpSelling/{upsellingindexid}', data=values, headers=headers)
request.get_method = lambda: 'PUT'

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this:

```json
[
  {
    "Key":"UpSellingIndexID",
    "Value":"1234",
    "Status":"200",
    "Message":"updated successfully",
  }
]
```

See [Data Structures](#upsellingitem-object) for more information on the UpSellingItem object.

#### HTTP Request
`PUT https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/UpSelling/{upsellingindexid}`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | required | Catalogid of the item.
upsellingindexid | required | The id of the upsell item to update.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The product/upsell item was not found.

## Product SkuInfo
The SkuInfo method allows you to retrieve a list of ProductSKU objects containing only the most basic product information (e.g. price, stock, catalogid, etc.). See [Data Structures](#productsku-object) for more information on the ProductSKU object.

### Retrieve a list of product skuinfo
> To retrieve a list of product skuinfo, use the code below. Make sure to add your Secure URL, Private Key, and Token as described in [Authentication](#authentication).

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/skuinfo?limit=&offset=&countonly=&sku=&name=");
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
  
  using(var response = await httpClient.GetAsync("3dCartWebAPI/v1/Products/{catalogid}/skuinfo"))
  {
 
        string responseData = await response.Content.ReadAsStringAsync();
  }
}
```

```javascript
var request = new XMLHttpRequest();

request.open('GET', 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/skuinfo?limit=&offset=&countonly=&sku=&name=');

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

response = RestClient.get 'https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/skuinfo?limit=&offset=&countonly=&sku=&name=', headers
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
request = Request('https://apirest.3dcart.com/3dCartWebAPI/v1/Products/{catalogid}/skuinfo?limit=&offset=&countonly=&sku=&name=', headers=headers)

response_body = urlopen(request).read()
print response_body
```

> The above request will receive a response with JSON structured like this (See [Data Structures](#productsku-object) for more information on the ProductSKU object):

```json
[
  {
    "CatalogID": 1,
    "SKU": "sample string 1",
    "Name": "sample string 2",
    "Cost": 1.1,
    "Price": 1.1,
    "Currency": "sample string 3",
    "RetailPrice": 1.1,
    "SalePrice": 1.1,
    "OnSale": true,
    "Stock": 1.1
  },
  {
    "CatalogID": 1,
    "SKU": "sample string 1",
    "Name": "sample string 2",
    "Cost": 1.1,
    "Price": 1.1,
    "Currency": "sample string 3",
    "RetailPrice": 1.1,
    "SalePrice": 1.1,
    "OnSale": true,
    "Stock": 1.1
  }
]
```

This method is used to retrieve a list of ProductSKU objects. See [Data Structures](#productsku-object) for more information on the ProductSKU object.

#### HTTP Request
`GET https://apirest.3dcart.com/3dCartWebAPI/v1/Products/skuinfo`

#### URL Parameters

Parameters | Required | Description
---------- | -------- | -----------
catalogid | optional | Catalogid of the item.
limit | optional | Maximum number of items that can be returned.
offset | optional | Starting point for the return data.
countonly | optional | Count the number of rows only.
sku | optional | SKU Code of the product.
name | optional | Name of the product.

#### Responses and Errors

Response Code | Description
------------- | ---------
200 | Successful response code.
400 | Bad request. Check request headers/parameters/body for errors.
401 | Authentication failure. The PrivateKey/Token/SecureURL combination is invalid, or the application scope does not have the correct read/write privileges.
404 | The product was not found.
