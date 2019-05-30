# Getting Started

## Registration
The first step in getting started is to signup for a developer account at the [Developer Portal](http://devportal.3dcart.com). Once you have finished registration, click the `Add New` button to add an application to your account. Enter your application's name and click the `Create App` button. This will generate a public/private key pair. The private key is required within your application to connect to the 3dcart API, and will be passed in each request header with the `PrivateKey` header key (see chapter on [Authentication](#Authentication) for more details and code examples).

The public key is required by 3dcart merchants to subscribe to your application, which authorizes your application to access the 3dcart merchant's store data. So, the public key will be used by 3dcart merchants to authorize your application. The 3dcart merchant will complete this process in their store administration panel at `Modules -> REST API`.

Once the merchant has subscribed to your application, their domain name will be listed in your application's information screen within the [Developer Portal](http://devportal.3dcart.com) under the section '**Stores that are using this APP**'. Also listed on this page is the token that was generated when the merchant subscribed to your application.

The token is required within your application to connect to the 3dcart merchant's store, and will be passed in each request header with the `Token` header key (see chapter on [Authentication](#authentication) for more details and code examples).

### CallBackURL
An important feature of your application within the developer portal is the CallBackURL. If the CallBackURL field is populated, when a merchant subscribes or unsubscribes to your application, 3dcart will POST to this URL (See example on the right). 

> The 3dcart POST request will contain the following JSON content:

```json
{
	"PublicKey":"12121212121212121212121212121212",
	"TimeStamp":"MM-DD-YYYY HH:MM:SS",
	"TokenKey":"34343434343434343434343434343434",
	"Action":"AUTHORIZE",
	"SecureURL":"https://merchant-store.3dcartstores.com",
}
```

> In the above JSON, the TimeStamp is Eastern Standard Time (EST) and the Action has two possible values: AUTHORIZE and REMOVE. An HTTP response code of 200 is expected to be received, and this will complete the merchant's subscription/removal process. Optionally, you can include JSON content in this response, as below:

```json
{
	"PostBackURL:" "http://www.software-dev.com/path/to/some/page.html?query_string"
}
```

If this response is received by 3dcart, we will open this URL in a popup for the merchant and complete the registration. Some example use cases for this feature might be to present a registration window to an unregistered merchant attempting to subscribe to your application, a "thank you for subscribing" confirmation message, or a survey questionnaire when unsubscribing.

If the response code is anything other than 200, a "Server not Responding" message will be presented to the 3dcart merchant, and they will not be able to subscribe to your application.

## Authentication
The 3dcart REST API supports two different methods of authentication; Basic and Oauth

### Basic
Once the registration and subscription process has been completed (see chapter on 'Registration' for more information), you will have the information necessary for authentication with your API client. You will need the following from your application's information within your Dashboard at http://devportal.3dcart.com: 
The Secure URL, Private Key, and Token will then need to be included in the HTTP Header of every request (see 'Sample Authentication' below):


* SecureUrl: 3dcart merchant's Secure URL.
* PrivateKey: Your application's private key.
* Token: The 3dcart merchant's token.

The endpoint URL for all requests will be (please note that you MUST connect securely via HTTPS): `https://apirest.3dcart.com/3dCartWebAPI/{version}/{service}`

### Oauth
To use the OAuth authorization protocol, your application would need to use an OAuth client you develop.

Step 1: Go to this URL with the necessary parameters in order to get the authorization code needed for the first step:

`https://apirest.3dcart.com/oauth/authorize?client_id={publicKey}&redirect_uri={redirectUri}&state={text}&response_type=code&store_url=[optional]`

When Store URL is not specified, a page will be shown to enter the 3dcart Store URL. If a Store URL is specified, you would be redirected straight to that store to authorize the application.

You should receive an authorization code and the same state value you sent previously. Validate it in order to be sure the request you are receiving is a response for your initial request.

Once that is done, you will then need to do a POST with that authorization code to retrieve the token.

Step 2: Need to do a post to this URL and pass these parameters:
`POST https://apirest.3dcart.com/oauth/token`
Content type -> "application/x-www-form-urlencoded”

Parameters:
Code={authorization code you receive in the first request }
client_id={public key}
client_secret={secret key}
grant_type=authorization_code

The response will be a Json object with the access token you need for the API calls.

## Versioning
In order to better support backwards compatibility, and to make sure that future updates to the API do not cause service interruptions to your application, the 3dcart API requires the version to be included as one of the URL parameters (e.g. '/3dCartWebAPI/v1/Customers').

## OData
The 3dcart RestAPI supports some functionality of the OData standard when retrieving information via an HTTP GET method. The OData queries currently supported are:


* SELECT
* ORDERBY

It is important to note that the SELECT and ORDERBY queries will be executed on the result set already returned in the API response. So, it acts as an additional filter - post execution - of your API request. The 3dcart sample client(s) were developed with this in mind, and can be used to demonstrate usage of OData queries with the 3dcart RestAPI.

Please see www.odata.org for more information on OData.

## Rate Limits
Requests to the 3dcart Rest API have the following rules: 

Batch size
This is the maximum number of records that can be retrieved in a single request.

* GET Orders: 300
* GET Products: 200
* All Others: 500

* POST - ALL
* PUT - (see the throttling limits below)

### Maximum requests
Using the [Leaky Bucket](http://en.wikipedia.org/wiki/Leaky_bucket) algorithm for throttling, the maximum number of requests (bucket size) is 50 with a "leak" rate of 2/second. This allows you to send small "bursts" of up to 50 requests when needed, as long as the rate you send requests remains under 2 per second after this burst.

These limits help to manage load on our servers, ensuring that high API request volumes don’t impact on overall store performance. They also help to protect stores from deliberate or accidental denial of service as a result of the API being flooded with requests.

## Responses

HTTP Method | HTTP Response Code | Message/Response Content
----------- | ------------------ | ------------------------
POST | 201 | A JSON array will be returned. See below.
PUT | 200 | A JSON array will be returned. See below.
PUT | 206 | Partial update. Some items within the request failed to process. A JSON array will be returned for each item that was sent in the update request (See below for array details). An individual resopnse code will be returned for each item.
PUT | 404 | No response content will be received, however, this means the item being updated in the request was not found in the database.
DELETE | 200 | A JSON array will be returned. See below.
DELETE | 404 | No response content will be received, however, this means the item being updated in the request was not found in the database.
ALL | 400 | No response content will be received, however, this means the JSON object sent was invalid for the service requested.
ALL | 415 | Unsupported media type. Please check the Content-type header value to make sure it is a valid XML or JSON content type.
ALL | 500 | No response content will be received, however, this means an internal server error occured. If the problem continues, contact Technical Support.

###Response Array:

KEY | VALUE
--- | ------
Key | The primary key of the table being updated. For example, if adding a product, this value will be 'CatalogID'.
Value |	The unique value that was inserted into the table being updated. Using the previous example of a product being added, this would be the unique, auto-incremented integer inserted into the 'products' table.
Status	| The HTTP status code (e.g. 200 or 201, depending on the HTTP Method)
Message	| A confirmation message.