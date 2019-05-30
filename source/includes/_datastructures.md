# Definitions

## Admin (object)

```json
[
	{
		"AdminId": 1,
		"Username": "sample string strCount",
		"Email": "sample string strCount",
		"Name": "sample string strCount",
		"ExternalId": "sample string strCount",
		"Lastlogin": "sample string strCount",
		"AdminPermissionsList": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
AdminId | integer |  | database reference = admins.id
Username | string | 50 | database reference = admins.username
Email | string | 255 | database reference = admins.email
Name | string | 50 | database reference = admins.name
ExternalId | string | 50 | database reference = admins.alt_id
Lastlogin | string |  | database reference = admins.lastlogin
AdminPermissionsList | collection |  | Collection of [AdminPermission](#adminpermission-object) objects

## AdminPermission (object)

```json
[
	{
		"Id": 1,
		"Section": "sample string strCount",
		"Action": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
Id | integer |  | database reference = adminpages.id
Section | string | 50 | database reference = adminpages.Page
Action | string | 25 | database reference = adminpages.Action

## AdminPUT (object)

```json
[
	{
		"AdminId": 1,
		"Username": "sample string strCount",
		"Email": "sample string strCount",
		"Name": "sample string strCount",
		"Password": "sample string strCount",
		"ExternalId": "sample string strCount",
		"AdminPermissionsList": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
AdminId | integer |  | database reference = admins.id
Username | string | 50 | database reference = admins.username
Email | string | 255 | database reference = admins.email
Name | string | 50 | database reference = admins.name
Password | string | 50 | database reference = admins.pass
ExternalId | string | 50 | database reference = admins.alt_id
AdminPermissionsList | collection |  | Collection of [AdminPermission](#adminpermission-object) objects

## AdminPOST (object)

```json
[
	{
		"AdminId": 1,
		"Username": "sample string strCount",
		"Email": "sample string strCount",
		"Name": "sample string strCount",
		"Password": "sample string strCount",
		"ExternalId": "sample string strCount",
		"AdminPermissionsList": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
AdminId | integer |  | database reference = admins.id
Username | string | 50 | database reference = admins.username
Email | string | 255 | database reference = admins.email
Name | string | 50 | database reference = admins.name
Password | string | 50 | database reference = admins.pass
ExternalId | string | 50 | database reference = admins.alt_id
AdminPermissionsList | collection |  | Collection of [AdminPermission](#adminpermission-object) objects

## AdminLoginToken (object)

```json
[
	{
		"Token": "sample string strCount",
		"Loginurl": "sample string strCount",
		"Expiration": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
Token | string | 50 | No database reference.
Loginurl | string | 255 | No database reference.
Expiration | string |  | No database reference.

## Cart (object)

```json
[
	{
		"OrderKey": "sample string strCount",
		"OrderDate": "sample string strCount",
		"OrderAmount": 1.1,
		"OrderWeight": 1.1,
		"LastUpdate": "sample string strCount",
		"CheckoutURL": "sample string strCount",
		"CustomerId": 1,
		"BillingFirstName": "sample string strCount",
		"BillingLastName": "sample string strCount",
		"BillingCompany": "sample string strCount",
		"BillingAddress": "sample string strCount",
		"BillingAddress2": "sample string strCount",
		"BillingCity": "sample string strCount",
		"BillingState": "sample string strCount",
		"BillingZipCode": "sample string strCount",
		"BillingCountry": "sample string strCount",
		"BillingPhoneNumber": "sample string strCount",
		"BillingEmail": "sample string strCount",
		"ShipmentFirstName": "sample string strCount",
		"ShipmentLastName": "sample string strCount",
		"ShipmentCompany": "sample string strCount",
		"ShipmentAddress": "sample string strCount",
		"ShipmentAddress2": "sample string strCount",
		"ShipmentCity": "sample string strCount",
		"ShipmentState": "sample string strCount",
		"ShipmentZipCode": "sample string strCount",
		"ShipmentCountry": "sample string strCount",
		"ShipmentPhone": "sample string strCount",
		"ShipmentEmail": "sample string strCount",
		"CartItemList": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
OrderKey | string | 16 | database reference = orders.orderkey
OrderDate | string |  | database reference = orders.odate
OrderAmount | number |  | database reference = orders.orderamount
OrderWeight | number |  | Dynamically generated value. No database reference.
LastUpdate | string |  | database reference = orders.last_update
CheckoutURL | string |  | Dynamically generated value. No database reference.
CustomerId | integer |  | database reference = orders.ocustomerid
BillingFirstName | string | 100 | database reference = orders.ofirstname
BillingLastName | string | 100 | database reference = orders.olastname
BillingCompany | string | 255 | database reference = orders.ocompany
BillingAddress | string | 200 | database reference = orders.oaddress
BillingAddress2 | string | 50 | database reference = orders.oaddress2
BillingCity | string | 100 | database reference = orders.ocity
BillingState | string | 100 | database reference = orders.ostate
BillingZipCode | string | 20 | database reference = orders.ozip
BillingCountry | string | 50 | database reference = orders.ocountry
BillingPhoneNumber | string | 30 | database reference = orders.ophone
BillingEmail | string | 100 | database reference = orders.oemail
ShipmentFirstName | string | 100 | database reference = orders.oshipfirstname
ShipmentLastName | string | 50 | database reference = orders.oshiplastname
ShipmentCompany | string | 200 | database reference = orders.oshipcompany
ShipmentAddress | string | 255 | database reference = orders.oshipaddress
ShipmentAddress2 | string | 50 | database reference = orders.oshipaddress2
ShipmentCity | string | 50 | database reference = orders.oshipcity
ShipmentState | string | 50 | database reference = orders.oshipstate
ShipmentZipCode | string | 20 | database reference = orders.oshipzip
ShipmentCountry | string | 50 | database reference = orders.oshipcountry
ShipmentPhone | string | 50 | database reference = orders.oshipphone
ShipmentEmail | string | 100 | database reference = orders.oshipemail
CartItemList | collection |  | Collection of [CartItem](#cartitem-object) objects

## CartItem (object)

```json
[
	{
		"CatalogID": 1,
		"CartItemID": 1,
		"ItemID": "sample string strCount",
		"ItemQuantity": 1.1,
		"ItemDescription": "sample string strCount",
		"ItemUnitPrice": 1.1,
		"ItemOptionPrice": 1.1,
		"ItemDateAdded": "sample string strCount",
		"ItemImage1": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
CatalogID | integer |  | database reference = oitems.catalogid
CartItemID | integer |  | database reference = oitems.orderitemid
ItemID | string | 150 | database reference = oitems.itemid
ItemQuantity | number |  | database reference = oitems.numitems
ItemDescription | string | 65535 | database reference = oitems.itemname
ItemUnitPrice | number |  | database reference = oitems.unitprice
ItemOptionPrice | number |  | database reference = oitems.optionprice
ItemDateAdded | string |  | database reference = oitems.date_added
ItemImage1 | string | 255 | database reference = products.image1

## CartReduced (object)

```json
[
	{
		"CustomerId": 1,
		"BillingFirstName": "sample string strCount",
		"BillingLastName": "sample string strCount",
		"BillingCompany": "sample string strCount",
		"BillingAddress": "sample string strCount",
		"BillingAddress2": "sample string strCount",
		"BillingCity": "sample string strCount",
		"BillingState": "sample string strCount",
		"BillingZipCode": "sample string strCount",
		"BillingCountry": "sample string strCount",
		"BillingPhoneNumber": "sample string strCount",
		"BillingEmail": "sample string strCount",
		"ShipmentFirstName": "sample string strCount",
		"ShipmentLastName": "sample string strCount",
		"ShipmentCompany": "sample string strCount",
		"ShipmentAddress": "sample string strCount",
		"ShipmentAddress2": "sample string strCount",
		"ShipmentCity": "sample string strCount",
		"ShipmentState": "sample string strCount",
		"ShipmentZipCode": "sample string strCount",
		"ShipmentCountry": "sample string strCount",
		"ShipmentPhone": "sample string strCount",
		"ShipmentEmail": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
CustomerId | integer |  | database reference = orders.ocustomerid
BillingFirstName | string | 100 | database reference = orders.ofirstname
BillingLastName | string | 100 | database reference = orders.olastname
BillingCompany | string | 255 | database reference = orders.ocompany
BillingAddress | string | 200 | database reference = orders.oaddress
BillingAddress2 | string | 50 | database reference = orders.oaddress2
BillingCity | string | 100 | database reference = orders.ocity
BillingState | string | 100 | database reference = orders.ostate
BillingZipCode | string | 20 | database reference = orders.ozip
BillingCountry | string | 50 | database reference = orders.ocountry
BillingPhoneNumber | string | 30 | database reference = orders.ophone
BillingEmail | string | 100 | database reference = orders.oemail
ShipmentFirstName | string | 100 | database reference = orders.oshipfirstname
ShipmentLastName | string | 50 | database reference = orders.oshiplastname
ShipmentCompany | string | 200 | database reference = orders.oshipcompany
ShipmentAddress | string | 255 | database reference = orders.oshipaddress
ShipmentAddress2 | string | 50 | database reference = orders.oshipaddress2
ShipmentCity | string | 50 | database reference = orders.oshipcity
ShipmentState | string | 50 | database reference = orders.oshipstate
ShipmentZipCode | string | 20 | database reference = orders.oshipzip
ShipmentCountry | string | 50 | database reference = orders.oshipcountry
ShipmentPhone | string | 50 | database reference = orders.oshipphone
ShipmentEmail | string | 100 | database reference = orders.oshipemail

## CartItemPost (object)

```json
[
	{
		"CatalogID": 1,
		"ItemQuantity": 1.1,
		"ItemOptions": 1.1,
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
CatalogID | integer |  | database reference = oitems.catalogid
ItemQuantity | number |  | database reference = oitems.numitems
ItemOptions | collection |  | Collection of [CartItemOption](#cartitemoption-object) objects

## CartItemOption (object)

```json
[
	{
		"OptionSetID": 1,
		"OptionID": 1,
		"OptionValue": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
OptionSetID | integer |  | database reference = prodfeatures.id
OptionID | integer |  | database reference = prodfeatures_options.id
OptionValue | string |  | No database reference.

## CartItemPut (object)

```json
[
	{
		"ItemQuantity": 1.1,
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
ItemQuantity | number |  | database reference = oitems.numitems

## Category (object)

```json
[
	{
		"CategoryID": 1,
		"CategoryName": "sample string strCount",
		"Link": "sample string strCount",
		"CategoryDescription": "sample string strCount",
		"CategoryIcon": "sample string strCount",
		"CategoryMain": "sample string strCount",
		"CategoryParent": 1,
		"Sorting": 1,
		"Hide": 1,
		"UserID": "sample string strCount",
		"LastUpdate": "sample string strCount",
		"CategoryMenuGroup": 1,
		"HomeSpecialCategory": 1,
		"FilterCategory": 1,
		"TemplateCategoryPage": 1,
		"DefaultProductsSorting": 1,
		"SubcategoryColumnsCategorySpecials": 1,
		"ProductColumnsCategorySpecials": 1,
		"ProductColumnsCategoryGeneralItems": 1,
		"ItemsPerPageCategorySpecialItems": 1,
		"ItemsPerPageCategoryGeneralItems": 1,
		"DisplayTypeCategorySpecialItems": 1,
		"DisplayTypeCategoryGeneralProducts": 1,
		"AllowAccess": "sample string strCount",
		"OnFailRedirectTo": "sample string strCount",
		"HideLeftBar": "sample string strCount",
		"HideRightBar": "sample string strCount",
		"HideTopMenu": "sample string strCount",
		"SmartCategories": 1,
		"SmartCategoriesSearchKeyword": "sample string strCount",
		"SmartCategoriesLinkTarget": "sample string strCount",
		"TemplateProductPage": 1,
		"ProductColumnsRelatedProducts": 1,
		"ProductColumnsUpsellProducts": 1,
		"DisplayTypeRelatedItems": 1,
		"DisplayTypeUpsellItems": 1,
		"OptionSetList": 1,
		"Title": "sample string strCount",
		"CustomFileName": "sample string strCount",
		"MetaTags": "sample string strCount",
		"CategoryHeader": "sample string strCount",
		"CategoryFooter": "sample string strCount",
		"AdditionalKeywords": "sample string strCount",
		"CategoryExternalIdsList": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
CategoryID | integer |  | Primary key. Auto-incremented. database reference = category.id
CategoryName | string | 150 | database reference = category.category_name
Link | string | 255 | database reference = category.link
CategoryDescription | string | 65535 | database reference = category.category_description
CategoryIcon | string | 100 | database reference = category.iconimage
CategoryMain | boolean |  | database reference = category.category_main
CategoryParent | integer |  | database reference = category.category_parent
Sorting | integer |  | database reference = category.sorting
Hide | boolean |  | database reference = category.reference
UserID | string | 50 | database reference = category.userid
LastUpdate | string |  | database reference = category.last_update
CategoryMenuGroup | integer |  | database reference = category.menu_group
HomeSpecialCategory | boolean |  | database reference = category.homespecial
FilterCategory | boolean |  | database reference = category.isFilter
TemplateCategoryPage | integer |  | database reference = category.category_displaytype
DefaultProductsSorting | integer |  | database reference = category.category_defaultsorting
SubcategoryColumnsCategorySpecials | integer |  | database reference = category.category_columnum
ProductColumnsCategorySpecials | integer |  | database reference = category.special_columnum
ProductColumnsCategoryGeneralItems | integer |  | database reference = category.columnum
ItemsPerPageCategorySpecialItems | integer |  | database reference = category.special_numtolist
ItemsPerPageCategoryGeneralItems | integer |  | database reference = category.numtolist
DisplayTypeCategorySpecialItems | integer |  | database reference = category.special_displaytype
DisplayTypeCategoryGeneralProducts | integer |  | database reference = category.displaytype
AllowAccess | string | 250 | database reference = category.accessgroup
OnFailRedirectTo | string | 150 | database reference = category.redirectto
HideLeftBar | boolean |  | database reference = category.hide_left
HideRightBar | boolean |  | database reference = category.hide_right
HideTopMenu | boolean |  | database reference = category.hide_framemenu
SmartCategories | integer |  | database reference = category.smartcategory
SmartCategoriesSearchKeyword | string | 255 | database reference = category.smartcategory_keyword
SmartCategoriesLinkTarget | string | 50 | database reference = category.link_target
TemplateProductPage | integer |  | database reference = category.listing_displaytype
ProductColumnsRelatedProducts | integer |  | database reference = category.related_columnum
ProductColumnsUpsellProducts | integer |  | database reference = category.upsellitems_columnum
DisplayTypeRelatedItems | integer |  | database reference = category.related_displaytype
DisplayTypeUpsellItems | integer |  | database reference = category.upsellitems_displaytype
OptionSetList | collection |  | Collection of [OptionSet](#optionset-object) objects
Title | string | 65535 | database reference = category.category_title
CustomFileName | string | 255 | database reference = category.filename
MetaTags | string | 65535 | database reference = category.category_meta
CategoryHeader | string | 65535 | database reference = category.category_header
CategoryFooter | string | 65535 | database reference = category.category_footer
AdditionalKeywords | string | 65535 | database reference = category.keywords
CategoryExternalIdsList | collection |  | Collection of [CategoryExternalId](#categoryexternalid-object) objects

## OptionSet (object)

```json
[
	{
		"OptionSetID": 1,
		"OptionSetName": "sample string strCount",
		"OptionSorting": 1.1,
		"OptionRequired": 1.1,
		"OptionType": "sample string strCount",
		"OptionURL": "sample string strCount",
		"OptionAdditionalInformation": "sample string strCount",
		"OptionSizeLimit": 1,
		"OptionList": 1,
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
OptionSetID | integer |  | Primary key, auto-incremented. database reference = prodfeatures.id
OptionSetName | string | 255 | database reference = prodfeatures.featurecaption
OptionSorting | number |  | database reference = prodfeatures.sorting
OptionRequired | boolean |  | database reference = prodfeatures.featurerequired
OptionType | string | 10 | database reference = prodfeatures.featuretype
OptionURL | string | 65535 | database reference = prodfeatures.url
OptionAdditionalInformation | string | 65535 | database reference = prodfeatures.info
OptionSizeLimit | integer |  | database reference = prodfeatures.textlimit
OptionList | collection |  | Collection of [Options](#options-object) objects 

## CategoryExternalId (object)

```json
[
	{
		"ID": 1,
		"CategoryID": 1,
		"ExternalId1": "sample string strCount",
		"ExternalIdType": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
ID | integer |  | Primary key, auto-incremented. database reference = category_external_id.id
CategoryID | integer |  | database reference = category_external_id.categoryid
ExternalId1 | string |  | database reference = category_external_id.externalid1
ExternalIdType | string |  | database reference = category_external_id.externalidtype

## Options (object)

```json
[
	{
		"OptionID": 1,
		"OptionName": "sample string strCount",
		"OptionSelected": "sample string strCount",
		"OptionHide": "sample string strCount",
		"OptionValue": 1.1,
		"OptionPartNumber": "sample string strCount",
		"OptionSorting": 1.1,
		"OptionImagePath": "sample string strCount",
		"OptionBundleCatalogId": 1,
		"OptionBundleQuantity": 1,
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
OptionID | integer |  | Primary key, auto-incremented. database reference = prodfeatures_options.id
OptionName | string | 255 | database reference = prodfeatures_options.featurename
OptionSelected | boolean |  | database reference = prodfeatures_options.selected
OptionHide | boolean |  | database reference = prodfeatures_options.hidden
OptionValue | number |  | database reference = prodfeatures_options.featureprice
OptionPartNumber | string | 50 | database reference = prodfeatures_options.partnumber
OptionSorting | number |  | database reference = prodfeatures_options.sorting
OptionImagePath | string | 255 | database reference = prodfeatures_options.imagepath
OptionBundleCatalogId | integer |  | database reference = prodfeatures_options.optcatalogid
OptionBundleQuantity | integer |  | database reference = prodfeatures_options.qty

## CRM (object)

```json
[
	{
		"CrmID": 1,
		"DateOpened": "sample string strCount",
		"DateLastAction": "sample string strCount",
		"Subject": "sample string strCount",
		"DepartmentID": 1,
		"StatusID": 1,
		"CustomerName": "sample string strCount",
		"CustomerEmail": "sample string strCount",
		"CustomerPhone": "sample string strCount",
		"CustomerIpAddress": "sample string strCount",
		"OrderID": 1,
		"CustomerID": 1,
		"ProductId": 1,
		"CrmMessageList": 1,
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
CrmID | integer |  | Primary key. Auto-incremented. database reference = CRM.id
DateOpened | string |  | database reference = CRM.datentime
DateLastAction | string |  | database reference = CRM.lastactiondatentime
Subject | string | 50 | database reference = CRM.subject
DepartmentID | integer |  | database reference = CRM.departmentid
StatusID | integer |  | database reference = CRM.status
CustomerName | string | 255 | database reference = CRM.customer
CustomerEmail | string | 100 | database reference = CRM.custemail
CustomerPhone | string | 50 | database reference = CRM.phone
CustomerIpAddress | string | 50 | database reference = CRM.custip
OrderID | integer |  | database reference = CRM.orderid
CustomerID | integer |  | database reference = CRM.custid
ProductId | integer |  | database reference = CRM.productid
CrmMessageList | collection |  | Collection of [CrmMessage](#crmmessage-object) objects

## CrmMessage (object)

```json
[
	{
		"MessageId": 1,
		"DateCreated": "sample string strCount",
		"Message": "sample string strCount",
		"Sender": 1,
		"SenderName": "sample string strCount",
		"SenderEmail": "sample string strCount",
		"CustomerIPAddress": "sample string strCount",
		"CrmFileList": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
MessageId | integer |  | Primary key. Auto-incremented. database reference = CRM_messages.id
DateCreated | string |  | database reference = CRM_messages.datentime
Message | string | 65535 | database reference = CRM_messages.message
Sender | integer |  | database reference = CRM_messages.sender
SenderName | string | 150 | database reference = CRM_messages.sendername
SenderEmail | string | 100 | database reference = CRM_messages.senderemail
CustomerIPAddress | string | 16 | database reference = CRM_messages.custip
CrmFileList | collection |  | Collection of [CrmFile](#crmfile-object) objects

## CrmFile (object)

```json
[
	{
		"FileId": 1,
		"FileName": "sample string strCount",
		"DateCreated": "sample string strCount",
		"IsAdminUploaded": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
FileId | integer |  | Primary key. Auto-incremented. database reference = CRM_files.crmFileID
FileName | string | 255 | database reference = CRM_files.FileName
DateCreated | string |  | database reference = CRM_files.dateTimeCreated
IsAdminUploaded | boolean |  | database reference = CRM_files.isAdminUploaded

## CrmDepartment (object)

```json
[
	{
		"DepartmentId": 1,
		"Name": "sample string strCount",
		"Visible": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
DepartmentId | integer |  | Primary key. Auto-incremented. database reference = CRM_Department.id
Name | string | 255 | database reference = CRM_Department.department
Visible | boolean |  | database reference = CRM_Department.visible

## CrmStatus (object)

```json
[
	{
		"Id": 1,
		"StatusId": 1,
		"StatusName": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
Id | integer |  | Primary key. Auto-incremented. database reference = CRM_status.id
StatusId | integer |  | database reference = CRM_status.statusid
StatusName | string | 50 | database reference = CRM_status.statustext

## CrmSavedReply (object)

```json
[
	{
		"Id": 1,
		"Title": "sample string strCount",
		"Message": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
Id | integer |  | Primary key. Auto-incremented. database reference = crm_saved_replies.id
Title | string | 100 | database reference = crm_saved_replies.title
Message | string | 65535 | database reference = crm_saved_replies.message

## CustomerGroup (object)

```json
[
	{
		"CustomerGroupID": 1,
		"Name": "sample string strCount",
		"Description": "sample string strCount",
		"MinimumOrder": 1.1,
		"NonTaxable": 1.1,
		"AllowRegistration": 1.1,
		"DisableRewardPoints": 1.1,
		"AutoApprove": 1.1,
		"RegistrationMessage": "sample string strCount",
		"PriceLevel": 1,
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
CustomerGroupID | integer |  | Primary key. database reference = discount_groups.id
Name | string | 150 | database reference = discount_groups.GroupName
Description | string | 65535 | database reference = discount_groups.Description
MinimumOrder | number |  | database reference = discount_groups.minimumorder
NonTaxable | boolean |  | database reference = discount_groups.nontaxable
AllowRegistration | boolean |  | database reference = discount_groups.allow_registration
DisableRewardPoints | boolean |  | database reference = discount_groups.disable_reward_points
AutoApprove | boolean |  | database reference = discount_groups.autoapprove
RegistrationMessage | string | 65535 | database reference = discount_groups.registration_message
PriceLevel | integer |  | database reference = discount_groups.price_level

## Customer (object)

```json
[
	{
		"CustomerID": 1,
		"Email": "sample string strCount",
		"Password": "sample string strCount",
		"BillingCompany": "sample string strCount",
		"BillingFirstName": "sample string strCount",
		"BillingLastName": "sample string strCount",
		"BillingAddress1": "sample string strCount",
		"BillingAddress2": "sample string strCount",
		"BillingCity": "sample string strCount",
		"BillingState": "sample string strCount",
		"BillingZipCode": "sample string strCount",
		"BillingCountry": "sample string strCount",
		"BillingPhoneNumber": "sample string strCount",
		"BillingTaxID": "sample string strCount",
		"ShippingCompany": "sample string strCount",
		"ShippingFirstName": "sample string strCount",
		"ShippingLastName": "sample string strCount",
		"ShippingAddress1": "sample string strCount",
		"ShippingAddress2": "sample string strCount",
		"ShippingCity": "sample string strCount",
		"ShippingState": "sample string strCount",
		"ShippingZipCode": "sample string strCount",
		"ShippingCountry": "sample string strCount",
		"ShippingPhoneNumber": "sample string strCount",
		"ShippingAddressType": 1,
		"CustomerGroupID": 1,
		"Enabled": 1,
		"MailList": 1,
		"NonTaxable": 1,
		"DisableBillingSameAsShipping": 1,
		"Comments": "sample string strCount",
		"AdditionalField1": "sample string strCount",
		"AdditionalField2": "sample string strCount",
		"AdditionalField3": "sample string strCount",
		"TotalStoreCredit": 1.1,
		"ResetPassword": 1.1,
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
CustomerID | integer |  | Primary key. Auto-incremented. database reference = customers.contactid
Email | string | 100 | database reference = customers.email
Password | string | 50 | database reference = customers.pass
BillingCompany | string | 255 | database reference = customers.billing_company
BillingFirstName | string | 50 | database reference = customers.billing_firstname
BillingLastName | string | 50 | database reference = customers.billing_lastname
BillingAddress1 | string | 255 | database reference = customers.billing_address
BillingAddress2 | string | 50 | database reference = customers.billing_address2
BillingCity | string | 100 | database reference = customers.billing_city
BillingState | string | 100 | database reference = customers.billing_state
BillingZipCode | string | 20 | database reference = customers.billing_zip
BillingCountry | string | 100 | database reference = customers.billing_country
BillingPhoneNumber | string | 50 | database reference = customers.billing_phone
BillingTaxID | string | 50 | database reference = customers.accountno
ShippingCompany | string | 255 | database reference = customers.shipping_company
ShippingFirstName | string | 50 | database reference = customers.shipping_firstname
ShippingLastName | string | 50 | database reference = customers.shipping_lastname
ShippingAddress1 | string | 255 | database reference = customers.shipping_address
ShippingAddress2 | string | 50 | database reference = customers.shipping_address2
ShippingCity | string | 100 | database reference = customers.shipping_city
ShippingState | string | 100 | database reference = customers.shipping_state
ShippingZipCode | string | 20 | database reference = customers.shipping_zip
ShippingCountry | string | 100 | database reference = customers.shipping_country
ShippingPhoneNumber | string | 50 | database reference = customers.shipping_phone
ShippingAddressType | integer |  | database reference = customers.oshipaddresstype
CustomerGroupID | integer |  | database reference = customers.discount
Enabled | boolean |  | database reference = customers.custenabled
MailList | boolean |  | database reference = customers.maillist
NonTaxable | boolean |  | database reference = customers.type
DisableBillingSameAsShipping | boolean |  | 
Comments | string | 255 | database reference = customers.comments
AdditionalField1 | string | 250 | database reference = customers.additional_field1
AdditionalField2 | string | 250 | database reference = customers.additional_field2
AdditionalField3 | string | 150 | database reference = customers.additional_field3
TotalStoreCredit | number |  | computed column ==&gt; sum(customer_credit.credit) of all records
ResetPassword | boolean |  | database reference = customers.reset_pass

## Distributor (object)

```json
[
	{
		"DistributorID": 1,
		"CompanyName": "sample string strCount",
		"ContactName": "sample string strCount",
		"Address": "sample string strCount",
		"Address2": "sample string strCount",
		"City": "sample string strCount",
		"State": "sample string strCount",
		"Zip": "sample string strCount",
		"Country": "sample string strCount",
		"Phone": "sample string strCount",
		"Fax": "sample string strCount",
		"Email": "sample string strCount",
		"Comments": "sample string strCount",
		"NotifyOnNewOrder": "sample string strCount",
		"NotifyOnNewOrderEmailSubject": "sample string strCount",
		"NotifyOnNewOrderEmailMessage": "sample string strCount",
		"UserID": "sample string strCount",
		"LastUpdate": "sample string strCount",
		"IsDropShipper": "sample string strCount",
		"NotifyOnCancelledOrder": "sample string strCount",
		"NotifyOnCancelledOrderEmailSubject": "sample string strCount",
		"NotifyOnCancelledOrderEmailMessage": "sample string strCount",
		"POStyle": 1,
		"POEmailNotification": 1,
		"POShippingInfo": "sample string strCount",
		"POPaymentInfo": "sample string strCount",
		"POAdditionalNotes": "sample string strCount",
		"POEmailSubject": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
DistributorID | integer |  | database reference = distributors.id
CompanyName | string | 50 | database reference = distributors.company
ContactName | string | 50 | database reference = distributors.contact
Address | string | 50 | database reference = distributors.address
Address2 | string | 50 | database reference = distributors.address2
City | string | 50 | database reference = distributors.city
State | string | 50 | database reference = distributors.state
Zip | string | 50 | database reference = distributors.zip
Country | string | 50 | database reference = distributors.country
Phone | string | 50 | database reference = distributors.telephone
Fax | string | 50 | database reference = distributors.fax
Email | string | 50 | database reference = distributors.email
Comments | string | 65535 | database reference = distributors.comments
NotifyOnNewOrder | boolean |  | database reference = distributors.isdropshipper
NotifyOnNewOrderEmailSubject | string | 250 | database reference = distributors.emailsubject
NotifyOnNewOrderEmailMessage | string | 65535 | database reference = distributors.emailmessage
UserID | string | 50 | database reference = distributors.userid
LastUpdate | string |  | database reference = distributors.last_update
IsDropShipper | boolean |  | database reference = distributors.iswarehouse
NotifyOnCancelledOrder | boolean |  | database reference = distributors.sendcancelemail
NotifyOnCancelledOrderEmailSubject | string | 250 | database reference = distributors.cancelemailsubject
NotifyOnCancelledOrderEmailMessage | string | 65535 | database reference = distributors.cancelemailmessage
POStyle | integer |  | database reference = distributors.PO_Style
POEmailNotification | boolean |  | database reference = distributors.PO_IsEmailNotification
POShippingInfo | string | 65535 | database reference = distributors.PO_shipping_info
POPaymentInfo | string | 65535 | database reference = distributors.PO_payment_info
POAdditionalNotes | string | 65535 | database reference = distributors.PO_additional_notes
POEmailSubject | string | 250 | database reference = distributors.PO_email_subject

## FrontendScripts (object)

```json
[
	{
		"FrontendScriptID": 1,
		"Placement": "sample string strCount",
		"Code": "sample string strCount",
		"DateCreated": "sample string strCount",
		"LastUpdate": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
FrontendScriptID | integer |  | Primary key. Auto-incremented. database reference = FrontendScripts.id
Placement | string | 50 | (BODY | HEAD) database reference = FrontendScripts.placement
Code | string | 65535 | database reference = FrontendScripts.code
DateCreated | string |  | database reference = FrontendScripts.date_created
LastUpdate | string |  | database reference = FrontendScripts.last_update

## GiftRegistry (object)

```json
[
	{
		"CustomerAddressBook": "sample string strCount",
		"GiftRegistryID": 1,
		"Name": "sample string strCount",
		"Created": "sample string strCount",
		"LastUpdate": "sample string strCount",
		"Expires": "sample string strCount",
		"Event": "sample string strCount",
		"Message": "sample string strCount",
		"ShipToAddress": "sample string strCount",
		"Sold": 1,
		"Items": 1,
		"GiftRegistryItemList": 1,
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
CustomerAddressBook |  |  | 
GiftRegistryID | integer |  | Primary key. Auto-incremented. database reference = WSH_wishlist.WSH_Id
Name | string | 50 | database reference = WSH_wishlist.WSH_Name
Created | string |  | database reference = WSH_wishlist.WSH_Created
LastUpdate | string |  | database reference = WSH_wishlist.WSH_LastMod
Expires | string |  | database reference = WSH_wishlist.WSH_Expiration
Event | string |  | database reference = WSH_wishlist.WSH_EventDate
Message | string | 65535 | database reference = WSH_wishlist.WSH_Message
ShipToAddress | boolean |  | database reference = WSH_wishlist.WSH_ShipMyAddress
Sold | integer |  | calculated field:
Items | integer |  | calculated field:
GiftRegistryItemList | collection |  | Collection of [GiftRegistryItem](#giftregistryitem-object) objects

## CustomerAddressBook (object)

```json
[
	{
		"CustomerAddressId": 1,
		"FirstName": "sample string strCount",
		"LastName": "sample string strCount",
		"Address1": "sample string strCount",
		"Address2": "sample string strCount",
		"City": "sample string strCount",
		"State": "sample string strCount",
		"ZipCode": "sample string strCount",
		"Country": "sample string strCount",
		"Company": "sample string strCount",
		"PhoneNumber": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
CustomerAddressId | integer |  | database reference = customers_addressbook.CustomerAddressId
FirstName | string | 50 | database reference = customers_addressbook.shipping_firstname
LastName | string | 50 | database reference = customers_addressbook.shipping_lastname
Address1 | string | 255 | database reference = customers_addressbook.shipping_address
Address2 | string | 50 | database reference = customers_addressbook.shipping_address2
City | string | 100 | database reference = customers_addressbook.shipping_city
State | string | 100 | database reference = customers_addressbook.shipping_state
ZipCode | string | 20 | database reference = customers_addressbook.shipping_zip
Country | string | 100 | database reference = customers_addressbook.shipping_country
Company | string | 255 | database reference = customers_addressbook.shipping_company
PhoneNumber | string | 50 | database reference = customers_addressbook.shipping_phone

## GiftRegistryItem (object)

```json
[
	{
		"CatalogID": 1,
		"SKU": "sample string strCount",
		"ItemName": "sample string strCount",
		"Listed": 1,
		"Price": 1.1,
		"Subtotal": 1.1,
		"Sold": 1,
		"SoldOffline": 1,
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
CatalogID | integer |  | database reference = WSI_WishlistItems.catalogid
SKU | string | 300 | database reference = WSI_WishlistItems.itemid
ItemName | string | 65535 | database reference = WSI_WishlistItems.itemname
Listed | integer |  | database reference = WSI_WishlistItems.numitems
Price | number |  | database reference = WSI_WishlistItems.unitprice
Subtotal | number |  | calculated
Sold | integer |  | database reference = WSI_WishlistItems.numitems
SoldOffline | integer |  | database reference = WSI_WishlistItems.numitems

## Manufacturer (object)

```json
[
	{
		"ManufacturerID": 1,
		"ManufacturerName": "sample string strCount",
		"Logo": "sample string strCount",
		"Sorting": 1,
		"Header": "sample string strCount",
		"Website": "sample string strCount",
		"UserID": "sample string strCount",
		"LastUpdate": "sample string strCount",
		"PageTitle": "sample string strCount",
		"MetaTags": "sample string strCount",
		"RedirectURL": "sample string strCount",
		"FileName": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
ManufacturerID | integer |  | Primary key. Auto-incremented. database reference = manufacturer.id
ManufacturerName | string | 50 | database reference = manufacturer.manufacturer
Logo | string | 255 | database reference = manufacturer.logo
Sorting | integer |  | database reference = manufacturer.sorting
Header | string | 65535 | database reference = manufacturer.header
Website | string | 50 | database reference = manufacturer.website
UserID | string | 50 | database reference = manufacturer.userid
LastUpdate | string |  | database reference = manufacturer.last_update
PageTitle | string | 150 | database reference = manufacturer.title
MetaTags | string | 65535 | database reference = manufacturer.meta
RedirectURL | string | 255 | database reference = manufacturer.link
FileName | string | 255 | database reference = manufacturer.filename

## Order (object)

```json
[
	{
		"InvoiceNumberPrefix": "sample string strCount",
		"InvoiceNumber": 1,
		"OrderID": 1,
		"CustomerID": 1,
		"OrderDate": "sample string strCount",
		"OrderStatusID": 1,
		"LastUpdate": "sample string strCount",
		"UserID": "sample string strCount",
		"SalesPerson": "sample string strCount",
		"ContinueURL": "sample string strCount",
		"AlternateOrderID": "sample string strCount",
		"OrderType": "sample string strCount",
		"PaymentTokenID": 1,
		"BillingFirstName": "sample string strCount",
		"BillingLastName": "sample string strCount",
		"BillingCompany": "sample string strCount",
		"BillingAddress": "sample string strCount",
		"BillingAddress2": "sample string strCount",
		"BillingCity": "sample string strCount",
		"BillingState": "sample string strCount",
		"BillingZipCode": "sample string strCount",
		"BillingCountry": "sample string strCount",
		"BillingPhoneNumber": "sample string strCount",
		"BillingEmail": "sample string strCount",
		"BillingPaymentMethod": "sample string strCount",
		"BillingOnLinePayment": "sample string strCount",
		"BillingPaymentMethodID": "sample string strCount",
		"ShipmentList": "sample string strCount",
		"OrderItemList": "sample string strCount",
		"PromotionList": "sample string strCount",
		"OrderDiscount": 1.1,
		"OrderDiscountCoupon": 1.1,
		"OrderDiscountPromotion": 1.1,
		"SalesTax": 1.1,
		"SalesTax2": 1.1,
		"SalesTax3": 1.1,
		"OrderAmount": 1.1,
		"AffiliateCommission": 1.1,
		"TransactionList": 1.1,
		"CardType": "sample string strCount",
		"CardNumber": "sample string strCount",
		"CardName": "sample string strCount",
		"CardExpirationMonth": "sample string strCount",
		"CardExpirationYear": "sample string strCount",
		"CardIssueNumber": "sample string strCount",
		"CardStartMonth": "sample string strCount",
		"CardStartYear": "sample string strCount",
		"CardAddress": "sample string strCount",
		"CardVerification": "sample string strCount",
		"RewardPoints": "sample string strCount",
		"QuestionList": "sample string strCount",
		"Referer": "sample string strCount",
		"IP": "sample string strCount",
		"CustomerComments": "sample string strCount",
		"InternalComments": "sample string strCount",
		"ExternalComments": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
InvoiceNumberPrefix | string | 50 | database reference = orders.invoicenum_prefix
InvoiceNumber | integer |  | database reference = orders.invoicenum
OrderID | integer |  | Primary key. Auto-incremented. database reference = orders.orderid
CustomerID | integer |  | database reference = orders.ocustomerid
OrderDate | string |  | database reference = orders.odate
OrderStatusID | integer |  | database reference = orders.order_status
LastUpdate | string |  | database reference = orders.last_update
UserID | string | 50 | database reference = orders.userid
SalesPerson | string | 50 | database reference = orders.salesperson
ContinueURL | string |  | Dynamically generated value. No database reference.
AlternateOrderID | string |  | Alternate OrderID
OrderType | string |  | OrderType
PaymentTokenID | integer |  | PaymentTokenID
BillingFirstName | string | 100 | database reference = orders.ofirstname
BillingLastName | string | 100 | database reference = orders.olastname
BillingCompany | string | 255 | database reference = orders.ocompany
BillingAddress | string | 200 | database reference = orders.oaddress
BillingAddress2 | string | 50 | database reference = orders.oaddress2
BillingCity | string | 100 | database reference = orders.ocity
BillingState | string | 100 | database reference = orders.ostate
BillingZipCode | string | 20 | database reference = orders.ozip
BillingCountry | string | 50 | database reference = orders.ocountry
BillingPhoneNumber | string | 30 | database reference = orders.ophone
BillingEmail | string | 100 | database reference = orders.oemail
BillingPaymentMethod | string |  | 
BillingOnLinePayment | boolean |  | 
BillingPaymentMethodID | string |  | database reference = orders.opaymethod
ShipmentList | collection |  | Collection of [Shipment](#shipment-object) objects
OrderItemList | collection |  | Collection of [OrderItem](#orderitem-object) objects
PromotionList | collection |  | Collection of [Promotion](#promotion-object) objects
OrderDiscount | number |  | OrderDiscountCoupon + OrderDiscountPromotion (Readonly)
OrderDiscountCoupon | number |  | database reference = orders.coupondiscount (automatic promotion)
OrderDiscountPromotion | number |  | database reference = orders.odiscount (coupon promotion)
SalesTax | number |  | database reference = orders.otax
SalesTax2 | number |  | database reference = orders.otax2
SalesTax3 | number |  | database reference = orders.otax3
OrderAmount | number |  | database reference = orders.orderamount
AffiliateCommission | number |  | database reference = orders.affiliate_commission
TransactionList | collection |  | Collection of [Transaction](#transaction-object) objects
CardType | string | 50 | database reference = orders.ocardtype
CardNumber | string | 255 | database reference = orders.ocardno
CardName | string | 200 | database reference = orders.ocardname
CardExpirationMonth | string | 10 | database reference = orders.ocardexpiresmonth
CardExpirationYear | string | 10 | database reference = orders.ocardexpiresyear
CardIssueNumber | string | 10 | database reference = orders.ocardissuenum
CardStartMonth | string | 10 | database reference = orders.ocardstartmonth
CardStartYear | string | 10 | database reference = orders.ocardstartyear
CardAddress | string | 150 | database reference = orders.ocardaddress
CardVerification | string | 50 | database reference = orders.ocardverification
RewardPoints | string |  | 
QuestionList | collection |  | Collection of [Question](#question-object) objects
Referer | string | 65535 | database reference = orders.referer
IP | string | 16 | database reference = orders.ip
CustomerComments | string | 65535 | database reference = orders.ocomment
InternalComments | string | 65535 | database reference = orders.ointernalcomment
ExternalComments | string | 50 | database reference = orders.oexternalcomment

## Shipment (object)

```json
[
	{
		"ShipmentID": 1,
		"ShipmentLastUpdate": "sample string strCount",
		"ShipmentBoxes": 1,
		"ShipmentInternalComment": "sample string strCount",
		"ShipmentOrderStatus": 1,
		"ShipmentAddress": "sample string strCount",
		"ShipmentAddress2": "sample string strCount",
		"ShipmentAlias": "sample string strCount",
		"ShipmentCity": "sample string strCount",
		"ShipmentCompany": "sample string strCount",
		"ShipmentCost": 1.1,
		"ShipmentCountry": "sample string strCount",
		"ShipmentEmail": "sample string strCount",
		"ShipmentFirstName": "sample string strCount",
		"ShipmentLastName": "sample string strCount",
		"ShipmentMethodID": 1,
		"ShipmentMethodName": "sample string strCount",
		"ShipmentShippedDate": "sample string strCount",
		"ShipmentPhone": "sample string strCount",
		"ShipmentState": "sample string strCount",
		"ShipmentZipCode": "sample string strCount",
		"ShipmentTax": 1.1,
		"ShipmentWeight": 1.1,
		"ShipmentTrackingCode": "sample string strCount",
		"ShipmentUserID": "sample string strCount",
		"ShipmentNumber": 1,
		"ShipmentAddressTypeID": 1,
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
ShipmentID | integer |  | database reference = orders_shipments.id
ShipmentLastUpdate | string |  | database reference = orders_shipments.last_update
ShipmentBoxes | integer |  | database reference = orders_shipments.oboxes
ShipmentInternalComment | string | 65535 | database reference = orders_shipments.ointernalcomment
ShipmentOrderStatus | integer |  | database reference = orders_shipments.order_status
ShipmentAddress | string | 255 | database reference = orders_shipments.oshipaddress
ShipmentAddress2 | string | 50 | database reference = orders_shipments.oshipaddress2
ShipmentAlias | string | 100 | database reference = orders_shipments.oshipalias
ShipmentCity | string | 50 | database reference = orders_shipments.oshipcity
ShipmentCompany | string | 200 | database reference = orders_shipments.oshipcompany
ShipmentCost | number |  | database reference = orders_shipments.oshipcost
ShipmentCountry | string | 50 | database reference = orders_shipments.oshipcountry
ShipmentEmail | string | 100 | database reference = orders_shipments.oshipemail
ShipmentFirstName | string | 100 | database reference = orders_shipments.oshipfirstname
ShipmentLastName | string | 50 | database reference = orders_shipments.oshiplastname
ShipmentMethodID | integer |  | database reference = orders_shipments.shipping_id
ShipmentMethodName | string | 150 | database reference = orders_shipments.oshipmethod
ShipmentShippedDate | string | 50 | database reference = orders_shipments.oshippeddate
ShipmentPhone | string | 50 | database reference = orders_shipments.oshipphone
ShipmentState | string | 50 | database reference = orders_shipments.oshipstate
ShipmentZipCode | string | 20 | database reference = orders_shipments.oshipzip
ShipmentTax | number |  | database reference = orders_shipments.otax
ShipmentWeight | number |  | database reference = orders_shipments.oweight
ShipmentTrackingCode | string | 100 | database reference = orders_shipments.trackingcode
ShipmentUserID | string | 50 | database reference = orders_shipments.userid
ShipmentNumber | integer |  | database reference = orders_shipments.shipment_number
ShipmentAddressTypeID | integer |  | database reference = orders_shipments.oshipaddresstype

## OrderItem (object)

```json
[
	{
		"CatalogID": 1,
		"ItemIndexID": 1,
		"ItemID": "sample string strCount",
		"ItemShipmentID": 1,
		"ItemQuantity": 1.1,
		"ItemWarehouseID": 1,
		"ItemDescription": "sample string strCount",
		"ItemUnitPrice": 1.1,
		"ItemWeight": 1.1,
		"ItemOptionPrice": 1.1,
		"ItemAdditionalField1": "sample string strCount",
		"ItemAdditionalField2": "sample string strCount",
		"ItemAdditionalField3": "sample string strCount",
		"ItemPageAdded": "sample string strCount",
		"ItemAvailability": "sample string strCount",
		"ItemDateAdded": "sample string strCount",
		"ItemUnitCost": 1.1,
		"ItemUnitStock": 1.1,
		"ItemOptions": "sample string strCount",
		"ItemCatalogIDOptions": "sample string strCount",
		"ItemSerial": "sample string strCount",
		"ItemImage1": "sample string strCount",
		"ItemImage2": "sample string strCount",
		"ItemImage3": "sample string strCount",
		"ItemImage4": "sample string strCount",
		"ItemWarehouseLocation": "sample string strCount",
		"ItemWarehouseBin": "sample string strCount",
		"ItemWarehouseAisle": "sample string strCount",
		"ItemWarehouseCustom": "sample string strCount",
		"RecurringOrderFrequency": 1,
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
CatalogID | integer |  | database reference = oitems.catalogid
ItemIndexID | integer |  | database reference = oitems.orderitemid
ItemID | string | 150 | database reference = oitems.itemid
ItemShipmentID | integer |  | database reference = oitems.shipment_id
ItemQuantity | number |  | database reference = oitems.numitems
ItemWarehouseID | integer |  | database reference = oitems.warehouseID
ItemDescription | string | 65535 | database reference = oitems.itemname
ItemUnitPrice | number |  | database reference = oitems.unitprice
ItemWeight | number |  | database reference = oitems.weight
ItemOptionPrice | number |  | database reference = oitems.optionprice
ItemAdditionalField1 | string | 255 | database reference = oitems.additional_field1
ItemAdditionalField2 | string | 255 | database reference = oitems.additional_field2
ItemAdditionalField3 | string | 255 | database reference = oitems.additional_field3
ItemPageAdded | string | 255 | database reference = oitems.page_added
ItemAvailability | string | 150 | 
ItemDateAdded | string |  | database reference = oitems.date_added
ItemUnitCost | number |  | database reference = oitems.unitcost
ItemUnitStock | number |  | database reference = oitems.unitstock
ItemOptions | string | 65535 | database reference = oitems.options
ItemCatalogIDOptions | string | 255 | database reference = oitems.catalogidoptions
ItemSerial | string | 255 | database reference = serials_used.catalogidoptions
ItemImage1 | string | 255 | database reference = products.image1
ItemImage2 | string | 255 | database reference = products.image2
ItemImage3 | string | 255 | database reference = products.image3
ItemImage4 | string | 255 | database reference = products.image4
ItemWarehouseLocation | string | 150 | database reference = products.warehouse_location
ItemWarehouseBin | string | 150 | database reference = products.warehouse_bin
ItemWarehouseAisle | string | 150 | database reference = products.warehouse_aisle
ItemWarehouseCustom | string | 150 | database reference = products.warehouse_custom
RecurringOrderFrequency | integer |  | database reference = oitems.recurring_order_frequency

## Promotion (object)

```json
[
	{
		"PromotionID": 1,
		"PromotionName": "sample string strCount",
		"Coupon": "sample string strCount",
		"DiscountAmount": 1.1,
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
PromotionID | integer |  | Primary key, auto-incremented. database reference = promotions.id
PromotionName | string | 150 | database reference = promotions.promotion_name
Coupon | string | 50 | database reference = order_discounts.coupon
DiscountAmount | number |  | database reference = order_discounts.discount_amount

## Transaction (object)

```json
[
	{
		"TransactionIndexID": 1,
		"OrderID": 1,
		"TransactionID": "sample string strCount",
		"TransactionDateTime": "sample string strCount",
		"TransactionType": "sample string strCount",
		"TransactionMethod": "sample string strCount",
		"TransactionAmount": 1.1,
		"TransactionApproval": "sample string strCount",
		"TransactionReference": "sample string strCount",
		"TransactionGatewayID": 1,
		"TransactionCVV2": "sample string strCount",
		"TransactionAVS": "sample string strCount",
		"TransactionResponseText": "sample string strCount",
		"TransactionResponseCode": "sample string strCount",
		"TransactionCaptured": 1,
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
TransactionIndexID | integer |  | Primary key, auto-incremented. database reference = transactions.id
OrderID | integer |  | database reference = transactions.orderid
TransactionID | string | 50 | database reference = transactions.transactionid
TransactionDateTime | string |  | database reference = transactions.datetime
TransactionType | string | 10 | database reference = transactions.ttype
TransactionMethod | string | 255 | database reference = transactions.paymenttype
TransactionAmount | number |  | database reference = transactions.amount
TransactionApproval | string | 50 | database reference = transactions.approvalcode
TransactionReference | string | 255 | database reference = transactions.reference
TransactionGatewayID | integer |  | database reference = transactions.gwid
TransactionCVV2 | string | 255 | database reference = transactions.cvv2
TransactionAVS | string | 255 | database reference = transactions.avs
TransactionResponseText | string | 65535 | database reference = transactions.responsetext
TransactionResponseCode | string | 50 | database reference = transactions.responsecode
TransactionCaptured | integer |  | database reference = transactions.captured

## Question (object)

```json
[
	{
		"QuestionAnswerIndexID": 1,
		"OrderID": 1,
		"QuestionID": 1,
		"QuestionTitle": "sample string strCount",
		"QuestionAnswer": "sample string strCount",
		"QuestionType": "sample string strCount",
		"QuestionCheckoutStep": 1,
		"QuestionSorting": 1,
		"QuestionDiscountGroup": 1,
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
QuestionAnswerIndexID | integer |  | database reference = order_questions.id
OrderID | integer |  | database reference = order_questions.orderid
QuestionID | integer |  | database reference = order_questions.questionid
QuestionTitle | string | 65535 | database reference = checkout_questions.Question
QuestionAnswer | string | 65535 | database reference = order_questions.answer
QuestionType | string | 10 | database reference = checkout_questions.qtype
QuestionCheckoutStep | integer |  | database reference = checkout_questions.checkoutstep
QuestionSorting | integer |  | database reference = checkout_questions.sorting
QuestionDiscountGroup | integer |  | database reference = checkout_questions.discountgroup

## OrderStatus (object)

```json
[
	{
		"OrderStatusID": 1,
		"Sorting": 1,
		"StatusDefinition": "sample string strCount",
		"StatusText": "sample string strCount",
		"Visible": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
OrderStatusID | integer |  | Primary key. Auto-incremented. database reference = Order_Status.id
Sorting | integer |  | database reference = Order_Status.StatusID
StatusDefinition | string | 50 | database reference = Order_Status.StatusDefinition
StatusText | string | 50 | database reference = Order_Status.StatusText
Visible | boolean |  | database reference = Order_Status.Visible

## PaymentToken (object)

```json
[
	{
		"PaymentTokenID": 1,
		"CustomerID": 1,
		"OrderID": 1,
		"CustomerProfileID": "sample string strCount",
		"PaymentProfileID": "sample string strCount",
		"CardLast4": 1,
		"CardExpMonth": 1,
		"CardExpYear": 1,
		"BillingPaymentMethodID": 1,
		"LastUpdate": "sample string strCount",
		"GatewayName": "sample string strCount",
		"GatewayID": 1,
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
PaymentTokenID | integer |  | database reference = customers_pmntprofiles.id
CustomerID | integer |  | database reference = customers_pmntprofiles.contactid
OrderID | integer |  | database reference = customers_pmntprofiles.contactid
CustomerProfileID | string | 50 | database reference = customers_pmntprofiles.custProfileId
PaymentProfileID | string | 50 | database reference = customers_pmntprofiles.custPmntProfileId
CardLast4 | integer |  | database reference = customers_pmntprofiles.cardlastdigits
CardExpMonth | integer |  | database reference = customers_pmntprofiles.cardexp
CardExpYear | integer |  | database reference = customers_pmntprofiles.cardexp
BillingPaymentMethodID | integer |  | database reference = customers_pmntprofiles.gateway_id / customers_pmntprofiles.gateway
LastUpdate | string |  | database reference = customers_pmntprofiles.datecreated
GatewayName | string | 50 | database reference = customers_pmntprofiles.gateway
GatewayID | integer |  | database reference = customers_pmntprofiles.gateway_id

## Product (object)

```json
[
	{
		"SKUInfo": 1,
		"MFGID": "sample string strCount",
		"ShortDescription": "sample string strCount",
		"ManufacturerID": 1,
		"ManufacturerName": "sample string strCount",
		"DistributorList": "sample string strCount",
		"LastUpdate": "sample string strCount",
		"UserID": "sample string strCount",
		"GTIN": "sample string strCount",
		"CategoryList": "sample string strCount",
		"ExternalIdsList": "sample string strCount",
		"CategoryExternalIdsList": "sample string strCount",
		"NonTaxable": "sample string strCount",
		"NotForSale": "sample string strCount",
		"Hide": "sample string strCount",
		"GiftCertificate": "sample string strCount",
		"HomeSpecial": "sample string strCount",
		"CategorySpecial": "sample string strCount",
		"NonSearchable": "sample string strCount",
		"GiftWrapItem": "sample string strCount",
		"ShipCost": 1.1,
		"Weight": 1.1,
		"Height": 1.1,
		"Width": 1.1,
		"Depth": 1.1,
		"SelfShip": 1.1,
		"FreeShipping": 1.1,
		"RewardPoints": 1,
		"RedeemPoints": 1,
		"DisableRewards": 1,
		"StockAlert": 1,
		"ReorderQuantity": 1,
		"InStockMessage": "sample string strCount",
		"OutOfStockMessage": "sample string strCount",
		"BackOrderMessage": "sample string strCount",
		"InventoryControl": 1,
		"WarehouseLocation": "sample string strCount",
		"WarehouseBin": "sample string strCount",
		"WarehouseAisle": "sample string strCount",
		"WarehouseCustom": "sample string strCount",
		"Description": "sample string strCount",
		"Keywords": "sample string strCount",
		"ExtraField1": "sample string strCount",
		"ExtraField2": "sample string strCount",
		"ExtraField3": "sample string strCount",
		"ExtraField4": "sample string strCount",
		"ExtraField5": "sample string strCount",
		"ExtraField6": "sample string strCount",
		"ExtraField7": "sample string strCount",
		"ExtraField8": "sample string strCount",
		"ExtraField9": "sample string strCount",
		"ExtraField10": "sample string strCount",
		"ExtraField11": "sample string strCount",
		"ExtraField12": "sample string strCount",
		"ExtraField13": "sample string strCount",
		"FeatureList": "sample string strCount",
		"PluginList": "sample string strCount",
		"SampleEnable": "sample string strCount",
		"SampleName": "sample string strCount",
		"SampleSKUPrefix": "sample string strCount",
		"SamplePrice": 1.1,
		"SampleWeight": 1.1,
		"ReviewAverage": 1.1,
		"ReviewCount": 1,
		"MainImageFile": "sample string strCount",
		"MainImageCaption": "sample string strCount",
		"ThumbnailFile": "sample string strCount",
		"MediaFile": "sample string strCount",
		"AdditionalImageFile2": "sample string strCount",
		"AdditionalImageCaption2": "sample string strCount",
		"AdditionalImageFile3": "sample string strCount",
		"AdditionalImageCaption3": "sample string strCount",
		"AdditionalImageFile4": "sample string strCount",
		"AdditionalImageCaption4": "sample string strCount",
		"ImageGalleryList": "sample string strCount",
		"OptionSetList": "sample string strCount",
		"AdvancedOptionList": "sample string strCount",
		"RelatedProductList": "sample string strCount",
		"UpSellingItemList": "sample string strCount",
		"DiscountList": "sample string strCount",
		"DoNotUseCategoryOptions": "sample string strCount",
		"DateCreated": "sample string strCount",
		"ListingTemplateID": 1,
		"ListingTemplateName": "sample string strCount",
		"LoginRequiredOptionID": 1,
		"LoginRequiredOptionName": "sample string strCount",
		"LoginRequiredOptionRedirectTo": "sample string strCount",
		"AllowAccessCustomerGroupID": 1,
		"AllowAccessCustomerGroupName": "sample string strCount",
		"RMAMaxPeriod": "sample string strCount",
		"CanonicalUrl": "sample string strCount",
		"TaxCode": "sample string strCount",
		"DisplayText": "sample string strCount",
		"MinimumQuantity": 1.1,
		"MaximumQuantity": 1.1,
		"AllowOnlyMultiples": 1.1,
		"AllowFractionalQuantity": 1.1,
		"QuantityOptions": "sample string strCount",
		"GroupOptionsForQuantityPricing": "sample string strCount",
		"ApplyQuantityDiscountToOptions": "sample string strCount",
		"EnableMakeAnOfferFeature": "sample string strCount",
		"MinimumAcceptableOffer": "sample string strCount",
		"PriceLevel1": 1.1,
		"PriceLevel1Hide": 1.1,
		"PriceLevel2": 1.1,
		"PriceLevel2Hide": 1.1,
		"PriceLevel3": 1.1,
		"PriceLevel3Hide": 1.1,
		"PriceLevel4": 1.1,
		"PriceLevel4Hide": 1.1,
		"PriceLevel5": 1.1,
		"PriceLevel5Hide": 1.1,
		"PriceLevel6": 1.1,
		"PriceLevel6Hide": 1.1,
		"PriceLevel7": 1.1,
		"PriceLevel7Hide": 1.1,
		"PriceLevel8": 1.1,
		"PriceLevel8Hide": 1.1,
		"PriceLevel9": 1.1,
		"PriceLevel9Hide": 1.1,
		"PriceLevel10": 1.1,
		"PriceLevel10Hide": 1.1,
		"BuyButtonLink": "sample string strCount",
		"ProductLink": "sample string strCount",
		"Title": "sample string strCount",
		"CustomFileName": "sample string strCount",
		"RedirectLink": "sample string strCount",
		"MetaTags": "sample string strCount",
		"SpecialInstructions": "sample string strCount",
		"AssignKey": "sample string strCount",
		"ReUseKeys": "sample string strCount",
		"SerialList": "sample string strCount",
		"EProductList": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
SKUInfo | object |  | Object of type [ProductSKU](#productsku-object) 
MFGID | string | 50 | database reference = products.mfgid
ShortDescription | string | 65535 | database reference = products.description
ManufacturerID | integer |  | database reference = products.manufacturer
ManufacturerName | string | 50 | database reference = manufacturer.manufacturer
DistributorList | collection |  | Collection of [Distributor](#distributor-object) objects 
LastUpdate | string |  | database reference = products.last_update
UserID | string | 50 | database reference = products.userid
GTIN | string | 50 | database reference = products.gtin
CategoryList | collection |  | Collection of [ProductCategory](#productcategory-object) objects
ExternalIdsList | collection |  | Collection of [ExternalId](#externalid-object) objects
CategoryExternalIdsList | collection |  | Collection of [CategoryExternalId](#categoryexternalid-object) objects
NonTaxable | boolean |  | database reference = products.nontax
NotForSale | boolean |  | database reference = products.notforsale
Hide | boolean |  | database reference = products.hide
GiftCertificate | boolean |  | database reference = products.giftcertificate
HomeSpecial | boolean |  | database reference = products.homespecial
CategorySpecial | boolean |  | database reference = products.categoryspecial
NonSearchable | boolean |  | database reference = products.nonsearchable
GiftWrapItem | boolean |  | database reference = products.giftwrap_option
ShipCost | number |  | database reference = products.shipcost
Weight | number |  | database reference = products.weight
Height | number |  | database reference = products.height
Width | number |  | database reference = products.width
Depth | number |  | database reference = products.depth
SelfShip | boolean |  | database reference = products.self_ship
FreeShipping | boolean |  | database reference = products.free_shipping
RewardPoints | integer |  | database reference = products.reward_points
RedeemPoints | integer |  | database reference = products.reward_redeem
DisableRewards | boolean |  | database reference = products.reward_disable
StockAlert | integer |  | database reference = products.stock_alert
ReorderQuantity | integer |  | database reference = products.qty_reorder
InStockMessage | string | 150 | database reference = products.instock_message
OutOfStockMessage | string | 150 | database reference = products.outofstock_message
BackOrderMessage | string | 150 | database reference = products.backorder_message
InventoryControl | integer |  | database reference = products.show_out_stock
WarehouseLocation | string | 150 | database reference = products.warehouse_location
WarehouseBin | string | 150 | database reference = products.warehouse_bin
WarehouseAisle | string | 150 | database reference = products.warehouse_aisle
WarehouseCustom | string | 150 | database reference = products.warehouse_custom
Description | string | 65535 | database reference = products.extended_description
Keywords | string | 65535 | database reference = products.keywords
ExtraField1 | string | 150 | database reference = products.extra_field_1
ExtraField2 | string | 150 | database reference = products.extra_field_2
ExtraField3 | string | 150 | database reference = products.extra_field_3
ExtraField4 | string | 150 | database reference = products.extra_field_4
ExtraField5 | string | 150 | database reference = products.extra_field_5
ExtraField6 | string | 65535 | database reference = products.extra_field_6
ExtraField7 | string | 65535 | database reference = products.extra_field_7
ExtraField8 | string | 65535 | database reference = products.extra_field_8
ExtraField9 | string | 65535 | database reference = products.extra_field_9
ExtraField10 | string | 65535 | database reference = products.extra_field_10
ExtraField11 | string | 65535 | database reference = products.extra_field_11
ExtraField12 | string | 65535 | database reference = products.extra_field_12
ExtraField13 | string | 65535 | database reference = products.extra_field_13
FeatureList | collection |  | Collection of [Feature](#feature-object) objects
PluginList | object |  | 
SampleEnable | boolean |  | database reference = products.sample_enable
SampleName | string | 255 | database reference = products.sample_name
SampleSKUPrefix | string | 25 | database reference = products.sample_sku_prefix
SamplePrice | number |  | database reference = products.sample_price
SampleWeight | number |  | database reference = products.sample_weight
ReviewAverage | number |  | database reference = products.review_average
ReviewCount | integer |  | database reference = products.review_count
MainImageFile | string | 255 | database reference = products.
MainImageCaption | string | 65535 | database reference = products.imagecaption1
ThumbnailFile | string | 255 | database reference = products.thumbnail
MediaFile | string | 255 | database reference = products.realmedia
AdditionalImageFile2 | string | 255 | database reference = products.image2
AdditionalImageCaption2 | string | 65535 | database reference = products.imagecaption2
AdditionalImageFile3 | string | 255 | database reference = products.image3
AdditionalImageCaption3 | string | 65535 | database reference = products.imagecaption3
AdditionalImageFile4 | string | 255 | database reference = products.image4
AdditionalImageCaption4 | string | 65535 | database reference = products.imagecaption4
ImageGalleryList | collection |  | Collection of [Feature](#feature-object) objects
OptionSetList | collection |  | Collection of [OptionSet](#optionset-object) objects
AdvancedOptionList | collection |  | Collection of [AdvancedOption](#advancedoption-object) objects
RelatedProductList | collection |  | Collection of [RelatedProduct](#relatedproduct-object) objects
UpSellingItemList | collection |  | Collection of [UpSellingItem](#upsellingitem-object) objects
DiscountList | collection |  | Collection of [Discount](#discount-object) objects
DoNotUseCategoryOptions | boolean |  | database reference = products.usecatoptions
DateCreated | string |  | database reference = products.date_created
ListingTemplateID | integer |  | database reference = products.listing_displaytype
ListingTemplateName | string |  | Dynamically generated field. No database reference.
LoginRequiredOptionID | integer |  | database reference = products.loginlevel
LoginRequiredOptionName | string |  | Dynamically generated field. No database reference.
LoginRequiredOptionRedirectTo | string | 150 | database reference = products.redirectto
AllowAccessCustomerGroupID | integer | 250 | database reference = products.accessgroup
AllowAccessCustomerGroupName | string |  | Dynamically generated field. No database reference.
RMAMaxPeriod | string |  | database reference = products.rma_maxperiod
CanonicalUrl | string |  | database reference = products.canonical_url
TaxCode | string |  | database reference = products.tax_code
DisplayText | string | 50 | database reference = products.displaytext
MinimumQuantity | number |  | database reference = products.minimumorder
MaximumQuantity | number |  | database reference = products.maximumorder
AllowOnlyMultiples | boolean |  | database reference = products.minorderpkg
AllowFractionalQuantity | boolean |  | database reference = products.fractional_qty
QuantityOptions | string | 250 | database reference = products.qtyoptions
GroupOptionsForQuantityPricing | boolean |  | database reference = products.pricing_groupopt
ApplyQuantityDiscountToOptions | boolean |  | database reference = products.qtydiscount_opt
EnableMakeAnOfferFeature | boolean |  | database reference = products.makeanoffer_enabled
MinimumAcceptableOffer | string | 10 | database reference = products.makeanoffer_price
PriceLevel1 | number |  | database reference = products.price_1
PriceLevel1Hide | boolean |  | database reference = products.hide_1
PriceLevel2 | number |  | database reference = products.price_2
PriceLevel2Hide | boolean |  | database reference = products.hide_2
PriceLevel3 | number |  | database reference = products.price_3
PriceLevel3Hide | boolean |  | database reference = products.hide_3
PriceLevel4 | number |  | database reference = products.price_4
PriceLevel4Hide | boolean |  | database reference = products.hide_4
PriceLevel5 | number |  | database reference = products.price_5
PriceLevel5Hide | boolean |  | database reference = products.hide_5
PriceLevel6 | number |  | database reference = products.price_6
PriceLevel6Hide | boolean |  | database reference = products.hide_6
PriceLevel7 | number |  | database reference = products.price_7
PriceLevel7Hide | boolean |  | database reference = products.hide_7
PriceLevel8 | number |  | database reference = products.price_8
PriceLevel8Hide | boolean |  | database reference = products.hide_8
PriceLevel9 | number |  | database reference = products.price_9
PriceLevel9Hide | boolean |  | database reference = products.hide_9
PriceLevel10 | number |  | database reference = products.price_10
PriceLevel10Hide | boolean |  | database reference = products.hide_10
BuyButtonLink | string |  | Dynamically generated field. No database reference.
ProductLink | string |  | Dynamically generated field. No database reference.
Title | string | 150 | database reference = products.title
CustomFileName | string | 255 | database reference = products.filename
RedirectLink | string | 250 | database reference = products.link
MetaTags | string | 65535 | database reference = products.metatags
SpecialInstructions | string | 65535 | database reference = products.eproduct_instructions
AssignKey | boolean |  | database reference = products.eproduct_serial
ReUseKeys | boolean |  | database reference = products.eproduct_reuseserial
SerialList | collection |  | Collection of [Serial](#serial-object) objects
EProductList | collection |  | Collection of [EProduct](#eproduct-object) objects

## ProductSKU (object)

```json
[
	{
		"CatalogID": 1,
		"SKU": "sample string strCount",
		"Name": "sample string strCount",
		"Cost": 1.1,
		"Price": 1.1,
		"Currency": "sample string strCount",
		"RetailPrice": 1.1,
		"SalePrice": 1.1,
		"OnSale": 1.1,
		"Stock": 1.1,
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
CatalogID | integer |  | Primary key. Auto-incremented. database reference = products.catalogid
SKU | string | 255 | database reference = products.id
Name | string | 255 | database reference = products.name
Cost | number |  | database reference = products.cost
Price | number |  | database reference = products.price
Currency | string |  | Dynamically generated field. No database reference.
RetailPrice | number |  | database reference = products.price2
SalePrice | number |  | database reference = products.saleprice
OnSale | boolean |  | database reference = products.onsale
Stock | number |  | database reference = products.stock

## ProductDistributor (object)

```json
[
	{
		"DistributorID": 1,
		"DistributorName": "sample string strCount",
		"DistributorItemCost": 1.1,
		"DistributorItemID": "sample string strCount",
		"DistributorStockID": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
DistributorID | integer |  | database reference = product_distributor.distributorid
DistributorName | string | 50 | database reference = distributor.company
DistributorItemCost | number |  | database reference = product_distributor.cost
DistributorItemID | string | 50 | database reference = product_distributor.itemid
DistributorStockID | string | 50 | database reference = product_distributor.stockid

## ProductCategory (object)

```json
[
	{
		"CategoryID": 1,
		"CategoryName": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
CategoryID | integer |  | 
CategoryName | string | 150 | database reference = category.category_name

## ExternalId (object)

```json
[
	{
		"ID": 1,
		"AdvancedOptionSufix": "sample string strCount",
		"ExternalId1": "sample string strCount",
		"ExternalId2": "sample string strCount",
		"ExternalIdType": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
ID | integer |  | Primary key, auto-incremented. database reference = product_external_id.id
AdvancedOptionSufix | string | 50 | database reference = product_external_id.ao_suffix
ExternalId1 | string | 50 | database reference = product_external_id.externalid1
ExternalId2 | string | 50 | database reference = product_external_id.externalid2
ExternalIdType | string | 20 | database reference = product_external_id.externalidtype

## Feature (object)

```json
[
	{
		"FeatureID": 1,
		"FeatureTitle": "sample string strCount",
		"FeatureDescription": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
FeatureID | integer |  | database reference = prod_addfeatures.ID
FeatureTitle | string | 150 | database reference = prod_addfeatures.ProdFeatureTitle
FeatureDescription | string | 150 | database reference = prod_addfeatures.ProdFeatureTitle

## ImageGallery (object)

```json
[
	{
		"ImageGalleryID": 1,
		"ImageGalleryFile": "sample string strCount",
		"ImageGalleryCaption": "sample string strCount",
		"ImageGallerySorting": 1,
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
ImageGalleryID | integer |  | Primary key, auto-incremented. database reference = product_images.id
ImageGalleryFile | string | 65535 | database reference = product_images.image
ImageGalleryCaption | string | 65535 | database reference = product_images.caption
ImageGallerySorting | integer |  | database reference = product_images.sorting

## AdvancedOption (object)

```json
[
	{
		"AdvancedOptionCode": "sample string strCount",
		"AdvancedOptionSufix": "sample string strCount",
		"AdvancedOptionName": "sample string strCount",
		"AdvancedOptionCost": 1.1,
		"AdvancedOptionStock": 1,
		"AdvancedOptionWeight": 1.1,
		"AdvancedOptionPrice": 1.1,
		"AdvancedOptionGTIN": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
AdvancedOptionCode | string | 50 | database reference = options_Advanced.AO_Code
AdvancedOptionSufix | string | 50 | database reference = options_Advanced.AO_Sufix
AdvancedOptionName | string | 65535 | database reference = options_Advanced.AO_Name
AdvancedOptionCost | number |  | database reference = options_Advanced.AO_Cost
AdvancedOptionStock | integer |  | database reference = options_Advanced.AO_Stock
AdvancedOptionWeight | number |  | database reference = options_Advanced.AO_Weight
AdvancedOptionPrice | number |  | database reference = options_Advanced.AO_Price
AdvancedOptionGTIN | string | 50 | database reference = options_Advanced.gtin

## RelatedProduct (object)

```json
[
	{
		"RelatedIndexID": 1,
		"RelatedProductID": 1,
		"RelatedProductSorting": 1,
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
RelatedIndexID | integer |  | Primary key, auto-incremented. database reference = product_related.id
RelatedProductID | integer |  | database reference = product_related.related_id
RelatedProductSorting | integer |  | database reference = product_related.sorting

## UpSellingItem (object)

```json
[
	{
		"UpSellingIndexID": 1,
		"UpSellingItemID": 1,
		"UpSellingItemSorting": 1,
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
UpSellingIndexID | integer |  | Primary key, auto-incremented. database reference = product_accessories.id
UpSellingItemID | integer |  | database reference = product_accessories.accessory_id
UpSellingItemSorting | integer |  | database reference = product_accessories.sorting

## Discount (object)

```json
[
	{
		"DiscountID": 1,
		"DiscountPriceLevel": 1,
		"DiscountLowbound": 1,
		"DiscountUpbound": 1,
		"DiscountPrice": 1.1,
		"DiscountPercentage": 1.1,
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
DiscountID | integer |  | Primary key, auto-incremented. database reference = pricing.id
DiscountPriceLevel | integer |  | database reference = pricing.price_level
DiscountLowbound | integer |  | database reference = pricing.lowbound
DiscountUpbound | integer |  | database reference = pricing.upbound
DiscountPrice | number |  | database reference = pricing.price
DiscountPercentage | boolean |  | database reference = pricing.percentage

## Serial (object)

```json
[
	{
		"SerialID": 1,
		"SerialUses": 1,
		"SerialCode": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
SerialID | integer |  | Primary key, auto-incremented. database reference = serials.id
SerialUses | integer |  | database reference = serials.used
SerialCode | string | 255 | database reference = serials.serial

## EProduct (object)

```json
[
	{
		"FileNumber": 1,
		"FilePath": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
FileNumber | integer |  | 
FilePath | string |  | 

## Promotions (object)

```json
[
	{
		"PromotionID": 1,
		"PromotionName": "sample string strCount",
		"PromotionDescription": "sample string strCount",
		"PromotionStart": "sample string strCount",
		"PromotionEnd": "sample string strCount",
		"PromotionEnabled": 1,
		"PromotionByAmount": 1,
		"PromotionCheckByAmount": 1,
		"PromotionByQuantity": 1,
		"PromotionCheckByQuantity": 1,
		"PromotionByProduct": 1,
		"PromotionByCategory": "sample string strCount",
		"PromotionAmount": 1.1,
		"PromotionPercentage": 1,
		"PromotionPerItem": 1,
		"PromotionCategory": "sample string strCount",
		"PromotionProduct": "sample string strCount",
		"PromotionFreeShipping": 1,
		"PromotionFreeProduct": "sample string strCount",
		"PromotionProduct1ID": 1,
		"PromotionProduct1Quantity": 1,
		"PromotionProduct2ID": 1,
		"PromotionProduct2Quantity": 1,
		"PromotionProduct3ID": 1,
		"PromotionProduct3Quantity": 1,
		"PromotionProductID": 1,
		"PromotionProduct4Quantity": 1,
		"PromotionCoupon": "sample string strCount",
		"PromotionUses": 1,
		"PromotionMaxUses": 1,
		"PromotionUsesPerCustomer": 1,
		"PromotionGroupID": "sample string strCount",
		"PromotionUserid": "sample string strCount",
		"PromotionLastUpdate": "sample string strCount",
		"PromotionByAmount2": 1.1,
		"PromotionByQuantity2": 1.1,
		"PromotionCountry": "sample string strCount",
		"PromotionState": "sample string strCount",
		"PromotionNonStackable": 1,
		"PromotionRulesRetailPrice": 1,
		"PromotionExcludeManufacturers": "sample string strCount",
		"PromotionFreeProductPrice": 1.1,
		"PromotionExcludePreorder": 1,
		"PromotionExcludeSpecialOrder": 1,
		"PromotionShippingDiscount": 1.1,
		"PromotionShippingOptions": "sample string strCount",
		"PromotionRecurringOrders": 1,
		"PromotionBonusRewardPoints": 1,
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
PromotionID | integer |  | Primary key. Auto-incremented. database reference = promotions.id
PromotionName | string | 150 | database reference = promotions.promotion_name
PromotionDescription | string | 65535 | database reference = promotions.promotion_description
PromotionStart | string |  | database reference = promotions.promotion_start
PromotionEnd | string |  | database reference = promotions.promotion_end
PromotionEnabled | integer |  | database reference = promotions.promotion_enabled
PromotionByAmount | integer |  | database reference = promotions.by_amount
PromotionCheckByAmount | integer |  | database reference = promotions.chk_byamount
PromotionByQuantity | integer |  | database reference = promotions.by_quantity
PromotionCheckByQuantity | integer |  | database reference = promotions.chk_byquantity
PromotionByProduct | integer |  | database reference = promotions.by_product
PromotionByCategory | string | 65535 | database reference = promotions.by_category
PromotionAmount | number |  | database reference = promotions.promotion_amount
PromotionPercentage | integer |  | database reference = promotions.promotion_percentage
PromotionPerItem | integer |  | database reference = promotions.promotion_peritem
PromotionCategory | string | 65535 | database reference = promotions.promotion_category
PromotionProduct | string | 150 | database reference = promotions.promotion_product
PromotionFreeShipping | integer |  | database reference = promotions.promotion_freeshipping
PromotionFreeProduct | string | 150 | database reference = promotions.promotion_freeproduct
PromotionProduct1ID | integer |  | database reference = promotions.prod1_id
PromotionProduct1Quantity | integer |  | database reference = promotions.prod1_qty
PromotionProduct2ID | integer |  | database reference = promotions.prod2_id
PromotionProduct2Quantity | integer |  | database reference = promotions.prod2_qty
PromotionProduct3ID | integer |  | database reference = promotions.prod3_id
PromotionProduct3Quantity | integer |  | database reference = promotions.prod3_qty
PromotionProductID | integer |  | database reference = promotions.prod4_id
PromotionProduct4Quantity | integer |  | database reference = promotions.prod4_qty
PromotionCoupon | string | 50 | database reference = promotions.coupon
PromotionUses | integer |  | database reference = promotions.promotion_uses
PromotionMaxUses | integer |  | database reference = promotions.promotion_maxuses
PromotionUsesPerCustomer | integer |  | database reference = promotions.promotion_usespercust
PromotionGroupID | string | 255 | database reference = promotions.coupon_group
PromotionUserid | string | 50 | database reference = promotions.userid
PromotionLastUpdate | string |  | database reference = promotions.last_update
PromotionByAmount2 | number |  | database reference = promotions.by_amount2
PromotionByQuantity2 | number |  | database reference = promotions.by_quantity2
PromotionCountry | string | 50 | database reference = promotions.promotion_country
PromotionState | string | 50 | database reference = promotions.promotion_state
PromotionNonStackable | integer |  | database reference = promotions.nonstackable
PromotionRulesRetailPrice | integer |  | database reference = promotions.rules_retailprice
PromotionExcludeManufacturers | string | 65535 | database reference = promotions.exc_manufacturer
PromotionFreeProductPrice | number |  | database reference = promotions.promotion_freeproduct_price
PromotionExcludePreorder | integer |  | database reference = promotions.exc_preorder
PromotionExcludeSpecialOrder | integer |  | database reference = promotions.exc_specialorder
PromotionShippingDiscount | number |  | database reference = promotions.shipping_discount
PromotionShippingOptions | string | 150 | database reference = promotions.shipping_options
PromotionRecurringOrders | integer |  | database reference = promotions.recurringorders
PromotionBonusRewardPoints | integer |  | database reference = promotions.bonus_reward_points

## RMA (object)

```json
[
	{
		"RMAID": 1,
		"RmaDate": "sample string strCount",
		"OrderID": 1,
		"RMAReasonID": 1,
		"RMAMethodID": 1,
		"RMAStatusID": 1,
		"Comments": "sample string strCount",
		"InternalComments": "sample string strCount",
		"StaffComments": "sample string strCount",
		"RMAItemList": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
RMAID | integer |  | Primary key. Auto-incremented. database reference = RMA.idRma
RmaDate | string |  | database reference = RMA.RmaDate
OrderID | integer |  | database reference = RMA.orderid
RMAReasonID | integer |  | database reference = RMA.idRmaReason
RMAMethodID | integer |  | database reference = RMA.idRmaMethod
RMAStatusID | integer |  | database reference = RMA.idRmaStatus
Comments | string | 65535 | database reference = RMA.Comments
InternalComments | string | 65535 | database reference = RMA.intComments
StaffComments | string | 65535 | database reference = RMA.staffComments
RMAItemList | collection |  | Collection of [RMAItem](#rmaitem-object) objects

## RMAItem (object)

```json
[
	{
		"CatalogID": 1,
		"SKU": "sample string strCount",
		"ItemName": "sample string strCount",
		"ReturnQuantity": 1,
		"ReceivedQuantity": 1,
		"RestockQuantity": 1,
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
CatalogID | integer |  | database reference = RMA_oitem.orderitemid
SKU | string | 150 | database reference = oitems.itemid
ItemName | string | 65535 | database reference = oitems.itemname
ReturnQuantity | integer |  | database reference = RMA_oitem.qty_return
ReceivedQuantity | integer |  | database reference = RMA_oitem.qty_received
RestockQuantity | integer |  | database reference = RMA_oitem.qty_restock

## StoreSettings (object)

```json
[
	{
		"StoreInformation": 1,
		"MerchantInformation": 1,
		"StoreStandards": 1,
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
StoreInformation |  |  | 
MerchantInformation |  |  | 
StoreStandards |  |  | 

## StoreInformation (object)

```json
[
	{
		"StoreName": "sample string strCount",
		"StoreSlogan": "sample string strCount",
		"StoreLogo": "sample string strCount",
		"StoreEmail": "sample string strCount",
		"StoreURL": "sample string strCount",
		"StoreSecureURL": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
StoreName | string | 250 | database reference = store_settings2.storename
StoreSlogan | string | 250 | database reference = store_settings2.storeslogan
StoreLogo | string | 250 | database reference = store_settings2.storelogo
StoreEmail | string | 250 | database reference = company_info.email
StoreURL | string | 250 | database reference = store_settings2.store_url
StoreSecureURL | string | 250 | database reference = store_settings2.store_secure_url

## MerchantInformation (object)

```json
[
	{
		"Company": "sample string strCount",
		"Address1": "sample string strCount",
		"Address2": "sample string strCount",
		"City": "sample string strCount",
		"State": "sample string strCount",
		"Country": "sample string strCount",
		"ZipCode": "sample string strCount",
		"Phone": "sample string strCount",
		"AlternatePhone": "sample string strCount",
		"Fax": "sample string strCount",
		"InvoiceLogo": "sample string strCount",
		"InvoiceTerms": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
Company | string | 65535 | database reference = company_info.company
Address1 | string | 255 | database reference = company_info.address1
Address2 | string | 255 | database reference = company_info.address2
City | string | 200 | database reference = company_info.city
State | string | 50 | database reference = company_info.state
Country | string | 50 | database reference = company_info.country
ZipCode | string | 50 | database reference = company_info.zip
Phone | string | 50 | database reference = company_info.phone1
AlternatePhone | string | 50 | database reference = company_info.phone2
Fax | string | 50 | database reference = company_info.fax
InvoiceLogo | string | 65535 | database reference = company_info.invoicelogo
InvoiceTerms | string | 65535 | database reference = company_info.invoice_terms

## StoreStandards (object)

```json
[
	{
		"StoreTimeZone": "sample string strCount",
		"CurrencySymbol": "sample string strCount",
		"DecimalPlacesOnPrice": "sample string strCount",
		"CurrencyCode": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
StoreTimeZone | string | 250 | database reference = store_settings2.time_zone
CurrencySymbol | string | 10 | database reference = store_settings2.currency
DecimalPlacesOnPrice | string | 250 | database reference = store_settings2.prod_decimal_places
CurrencyCode | string | 3 | database reference = store_settings2.currency_code

## Event (object)

```json
[
	{
		"EventType": 1,
		"EventName": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
EventType | integer |  | database reference = webhook_events.event_type
EventName | string | 100 | database reference = webhook_events.event_name

## Webhook (object)

```json
[
	{
		"Id": 1,
		"Name": "sample string strCount",
		"Url": "sample string strCount",
		"EventType": 1,
		"DateCreated": "sample string strCount",
		"DateUpdated": "sample string strCount",
		"Format": "sample string strCount",
		"Enabled": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
Id | integer |  | database reference = webhooks.id
Name | string | 80 | database reference = webhooks.name
Url | string | 1000 | database reference = webhooks.url
EventType | integer |  | database reference = webhooks.event_type
DateCreated | string |  | database reference = webhooks.datecreated
DateUpdated | string |  | database reference = webhooks.dateupdated
Format | string | 50 | (JSON or XML) database reference = webhook_formats.format_name
Enabled | boolean |  | database reference = webhooks.enabled

## WebhookPUT (object)

```json
[
	{
		"Id": 1,
		"Name": "sample string strCount",
		"Url": "sample string strCount",
		"Enabled": "sample string strCount",
		"Format": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
Id | integer |  | database reference = webhooks.id
Name | string | 80 | database reference = webhooks.name
Url | string | 1000 | database reference = webhooks.url
Enabled | boolean |  | database reference = webhooks.enabled
Format | string | 50 | (JSON or XML) database reference = webhook_formats.format_name

## WebhookPOST (object)

```json
[
	{
		"Name": "sample string strCount",
		"Url": "sample string strCount",
		"EventType": 1,
		"Format": "sample string strCount",
		"Enabled": "sample string strCount",
	}
]
```
Property | Type | Max Length | Description
-------- | ---- | ---------- | -----------
Name | string | 80 | database reference = webhooks.name
Url | string | 1000 | database reference = webhooks.url
EventType | integer |  | database reference = webhooks.event_type
Format | string | 50 | (JSON or XML) database reference = webhook_formats.format_name
Enabled | boolean |  | database reference = webhooks.enabled

