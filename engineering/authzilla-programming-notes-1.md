---
title: "AuthZilla Programming Notes #1"
subtitle: "In which a Yak was shaved."
author:
  - errbufferoverfl
date: 2024-11-05T15:27:36+10:30
date-modified: 2024-12-03T10:57:18+10:30
categories:
  - Programming
  - Python
  - Yak Shaving
---

I don't normally write too much about my development efforts, 1. because I don't build things outside of work very often and 2. it constantly feels like I have nothing meaningful to contribute. But after reading a Mastodon post that I can't seem to find anymore I'm starting to reconsider. That post made me realise that sharing my work—even the messy, unfinished parts—might resonate with others who are also grappling with similar issues or ideas.

So here I am, diving into this journey, sharing the highs, lows, and unexpected yaks while attempting to build an Auth0-esque platform—a RESTful experience in all the worst possible ways. Just to clarify (before anyone gets excited or horrified): I’m not building this platform as a service for anyone to actually use! This isn’t some polished, scalable, production-ready product that’s ready to be unleashed on the world. Instead, it’s more of a *playground of pain*, a project purely for my own experimentation, so I get to wrestle firsthand with the delightful quirks, endless edge cases, and security challenges of delivering a secure authentication and authorization platform.

In other words, this is my way of staring down the beast that is secure access control, with all the drama and messiness that entails, just so I can (hopefully) emerge a little wiser on the other side.

That out of the way, today's adventure though began with a simple goal: to get pagination information appended to the Clients API response. Here's a taste:

```json
{
   "clients":[
      {
         "client_id":"cl-ab12cd34ef56gh78",
         "name":"My Example App",
         "client_secret":"<client_secret>",
         "is_public":true,
         "client_type":"regular_web",
         "client_uri":"https://example.com",
         "metadata":{
            "description":"An example application that demonstrates OAuth flow.",
            "logo":"https://example.com/logo.png",
            "tos":"https://example.com/tos",
            "privacy_policy":"https://example.com/privacy",
            "security_contact":"security@example.com",
            "privacy_contact":"privacy@example.com"
         },
         "configuration":{
            "oidc_conformant":true,
            "sender_constrained":true,
            "token_endpoint_auth_method":"client_secret_basic",
            "uris":{
               "app_login_uri":"https://example.com/login",
               "redirect_uris":[
                  "https://example.com/callback",
                  "https://example.com/redirect"
               ],
               "logout_uris":[
                  "https://example.com/logout"
               ],
               "web_origins":[
                  "https://example.com"
               ]
            },
            "cors":{
               "is_enabled":"true",
               "allowed_origins":[
                  "https://example.com",
                  "https://anotherexample.com"
               ],
               "fallback_url":"https://example.com/cors-fallback"
            },
            "refresh":{
               "refresh_token_rotation_enabled":true,
               "rotation_overlap_period":300,
               "idle_refresh_token_lifetime_enabled":true,
               "idle_refresh_token_lifetime":1296000,
               "maximum_refresh_token_lifetime_enabled":true,
               "maximum_refresh_token_lifetime":2592000
            },
            "jwt":{
               "algorithm":"RS256"
            }
         },
         "_links":{
            "self":"https://api.example.com/clients/cl-ab12cd34ef56gh78"
         }
      },
      {
         "client_id":"cl-ijklmn12op34qrst",
         "name":"Sample Mobile App",
         "client_secret":"<client_secret>",
         "is_public":false,
         "client_type":"native",
         "client_uri":"https://mobile.example.com",
         "metadata":{
            "description":"Mobile client for seamless OAuth integration.",
            "logo":"https://mobile.example.com/logo.png",
            "tos":"https://mobile.example.com/tos",
            "privacy_policy":"https://mobile.example.com/privacy",
            "security_contact":"security@mobile.example.com",
            "privacy_contact":"privacy@mobile.example.com"
         },
         "configuration":{
            "oidc_conformant":false,
            "sender_constrained":false,
            "token_endpoint_auth_method":"client_secret_post",
            "uris":{
               "app_login_uri":"https://mobile.example.com/login",
               "redirect_uris":[
                  "myapp://callback"
               ],
               "logout_uris":[
                  "myapp://logout"
               ],
               "web_origins":[
                  "https://mobile.example.com"
               ]
            },
            "cors":{
               "is_enabled":false,
               "allowed_origins":[
                  
               ],
               "fallback_url":""
            },
            "refresh":{
               "refresh_token_rotation_enabled":false,
               "rotation_overlap_period":0,
               "idle_refresh_token_lifetime_enabled":true,
               "idle_refresh_token_lifetime":86400,
               "maximum_refresh_token_lifetime_enabled":false,
               "maximum_refresh_token_lifetime":604800
            },
            "jwt":{
               "algorithm":"HS256"
            }
         },
         "_links":{
            "self":"https://api.example.com/clients/cl-ijklmn12op34qrst"
         }
      }
   ],
   "page":1,
   "per_page":50,
   "total":0
}  
```

But as I dove in, I quickly realised computers were a mistake, RESTful ones doubly so. In particular I realised there were unresolved issues in my existing schemas and databases.

`paginated_clients` returned a straightforward list:

```text
[<Client 1>, <Client 2>, …, <Client 35>]
```

So far, so good. But once I serialised each client, I realised I was missing critical `configuration_blob` and `client_metadata`. Time to dig deeper.

## Yak #1: Pulling in Configuration and Metadata

I started by iterating through each `paginated_client`, aiming to fetch metadata and configuration from separate tables:

```python
clients_data = []  
for client in paginated_clients.items:  
    metadata = ClientMetadata.query.filter_by(client_id=client.client_id).first()
    configuration = ClientConfiguration.query.filter_by(client_id=client.client_id).first()
    
    clients_data.append({
        "client_id": client.client_id,
        "name": client.client_name,
        "client_secret": client.client_secret,
        "is_public": client.is_public,
        "client_type": client.app_type,
        "client_uri": client.client_uri,
        "metadata": metadata.metadata_blob if metadata else {},
        "configuration": configuration.configuration_blob if configuration else {},
    })
```

That’s when I realised I hadn’t included a version or timestamp for `client_metadata`, this isn't a huge problem given the metadata aims to describe the client while the configuration aims to well, configure it.

This oversight might come back to bite me later, but I'm ignoring the problem for now because I need a better story around versioning in clients more generally anyway.

After making these changes and re-running AuthZilla, the results were still incomplete. 

```json
{
   "client_id":"cl-cskoisj24t2n2nr24tr0",
   "client_secret":"<client_secret>",
   "client_type":"web",
   "client_uri":"None",
   "configuration":{},
   "is_public":false,
   "metadata":{},
   "name":"New Client"
}
```

Is there a problem in the database? 

Taking a quick peak at the `client_metadata` table, unlikely:

```text
35,35,"{""description"": """", ""logo"": ""https://example.com/logo.png"", ""tos"": ""https://example.com/tos"", ""privacy policy"": ""https://example.com/privacy"", ""security contact"": ""security@example.com"", ""privacy contact"": ""privacy@example.com""}"
```

Checking the `client_configuration` table as well just to be sure:

```text
35,35,1,"{""oidc_conformant"": true, ""sender_constrained"": false, ""token_endpoint_auth_method"": ""client_secret_basic"", ""uris"": {""app_login_uri"": ""https://example.com/login"", ""redirect_uris"": [""https://example.com/callback""], ""logout_uris"": [""https://example.com/logout""], ""web_origins"": [""https://example.com""]}, ""cors"": {""is_enabled"": false, ""allowed_origins"": [""https://example.com""], ""fallback_url"": ""https://example.com/fallback""}, ""refresh"": {""refresh_token_rotation_enabled"": false, ""rotation_overlap_period"": 0, ""idle_refresh_token_lifetime_enabled"": false, ""idle_refresh_token_lifetime"": 1296000, ""maximum_refresh_token_lifetime_enabled"": false, ""maximum_refresh_token_lifetime"": 2592000}, ""jwt"": {""algorithm"": ""RS256""}}",2024-11-05 02:56:36.547202
```

The database *has* data, which means something in the query is wrong. Which makes sense because as I was looking through the data dump something felt off. After some inspection, it became clear: the query for `ClientMetadata` and `ClientConfiguration` relied on an external `client_id`:

```python
ClientConfiguration.query.filter_by(client_id=client.client_id).first()
```

But if we take another look at the data dump above, you'll see that the `client_id` is also populated with the internal, auto-incrementing `id`. 

While the code didn't actually do what I intended it to do, I had initially planned to link `ClientMetadata` and `ClientConfiguration` entries to clients based on the `client_id`, which is an external identifier (e.g., `cl-cshjbnr24t2io6r24teg`).

```python
client_metadata = ClientMetadata(client_id=client.client_id, metadata_blob=args["metadata_blob"])
client_configuration = ClientConfiguration(client_id=client.client_id, configuration_blob=args["configuration_blob"])
```

And this is when I hit an inflection point: why the hell was I juggling both internal and external IDs if I wasn’t even going to use the internal ones for anything meaningful? Really, what was the point? Besides, there were plenty of practical reasons to rely on the internal `id`. For one, the `client_id` could change down the road—especially if I get tired of using XID—but the internal `id` is an indexed, auto-incrementing primary key. And let’s face it, the database engine is probably way smarter than I am and has already optimised it for joins and lookups. So, sticking with `client_id` as the referential ID in the database isn’t just redundant; it’s also inefficient, potentially slowing things down as the dataset grows.

## Yak #2: Nested Serializer Failures

After making these changes we're starting to get the results we're after, at least when we query the database:

```json
{
   "name":"New Client",
   "client_id":"cl-cshjbnr24t2io6r24teg",
   "client_secret":"<client_secret>",
   "client_type":"web",
   "client_uri":"None",
   "configuration":{
      "oidc_conformant":true,
      "sender_constrained":false,
      "token_endpoint_auth_method":"client_secret_basic",
      "uris":{},
      "maximum_refresh_token_lifetime_enabled":false,
      "maximum_refresh_token_lifetime":2592000
   },
   "jwt":{
      "algorithm":"RS256"
   },
   "is_public":false,
   "metadata":{
      "description":"Default description",
      "logo":"https://example.com/logo.png",
      "tos":"https://example.com/tos",
      "privacy policy":"https://example.com/privacy",
      "security contact":"security@example.com",
      "privacy contact":"privacy@example.com"
   }
}
```

But, we're still running into issues with serialisation.

I turned to the serialization logic, which involved nested schemas for `MetadataResponseSchema` and `ClientConfigurationResponseSchema`.

Earlier when setting up the serialisers I made a fun design decision in which I nested my serialisers so it looked something like this:

```python
class MetadataResponseSchema(Schema):  
    description = fields.Str(dump_only=True)  
    logo = fields.Str(dump_only=True)  
    tos = fields.Url(dump_only=True)  
    privacy_policy = fields.Url(dump_only=True)  
    security_contact = fields.Str(dump_only=True)  
    privacy_contact = fields.Str(dump_only=True)  
  
class ClientConfigurationResponseSchema(Schema):  
    oidc_conformant = fields.Bool(dump_only=True)  
    sender_constrained = fields.Bool(dump_only=True)  
    token_endpoint_auth_method = fields.Str(dump_only=True)  
    uris = fields.Nested(URIsSchema(), dump_only=True)  
    cors = fields.Nested(CORSConfigSchema(), dump_only=True)  
    refresh = fields.Nested(RefreshTokenSettingsSchema(), dump_only=True)  
    jwt = fields.Nested(JWTSettingsSchema(), dump_only=True)  

class ClientSecretSchema(Schema):  
    value = fields.Str(required=True)  
    visibility = fields.Str(required=True, default="private")  

class LinksSchema(Schema):  
    self = fields.Url(required=True)  

class ClientResponse(Schema):  
    client_id = fields.Str(dump_only=True)  
    name = fields.Str(dump_only=True)  
    client_secret = fields.Str(dump_only=True)  
    is_public = fields.Bool(dump_only=True)  
    client_type = fields.Str(dump_only=True)  
    client_uri = fields.Url(missing="")  
    metadata = fields.Nested(MetadataResponseSchema(), attribute="metadata_blob", dump_only=True)  
    configuration = fields.Nested(ClientConfigurationResponseSchema(), attribute="configuration_blob", dump_only=True)  
    _links = fields.Nested(LinksSchema(), dump_only=True)  
  
    @post_dump  
    def add_links(self, data, **kwargs):  
        """Adds a self link based on client_id."""  
        if "client_id" in data:  
            data["_links"] = {"self": f"/api/clients/{data['client_id']}"}  
        return data  

class ClientResponseWrapper(Schema):  
    clients = fields.List(fields.Nested(ClientResponse()), dump_only=True)  
    total = fields.Int(dump_only=True)  
    page = fields.Int(dump_only=True)  
    per_page = fields.Int(dump_only=True)  
  
    @post_dump(pass_many=True)  
    def wrap_with_pagination(self, data, many, **kwargs):  
        """Wraps the response with pagination details."""  
        if many:  
            pagination_data = kwargs.get("pagination", {})  
            return {  
                "clients": data,  
                "page": pagination_data.get("page", 1),  
                "per_page": pagination_data.get("per_page", 50),  
                "total": pagination_data.get("total", 0)  
            }  
        else:  
            return {"client": data}
```

Look at all those nested fields! So much modularity, so many pains in the ass.

![A close-up photo of a Shiba Inu dog looking at the camera with a slightly surprised expression, eyes wide and mouth closed, giving an impression of curiosity or mild confusion.](/imgs/authzilla-yak-diaries-issue-01.png)

It felt like a smart decision at the time, and look I don't regret it *that* much, but I will say what I didn't foresee (despite how obvious it is now) was that when trying to dump a `ClientResponse` I would need to also load every nested field.

```python
for client in paginated_clients.items:  
    metadata = (  
        ClientMetadata.query.filter_by(client_id=client.id)  
        .first()  # <1>
    )  
    metadata = MetadataResponseSchema().load(metadata.metadata_blob, many=False)  # <2>

    configuration = (  
        ClientConfiguration.query.filter_by(client_id=client.id)  
        .order_by(ClientConfiguration.version.desc())  
        .first()  # <3>
    )  
    configuration = ClientConfigurationResponseSchema().load(configuration.configuration_blob, many = False)  # <4>
  
    clients_data.append({  
        "client_id": client.client_id,  
        "name": client.client_name,  
        "client_secret": client.client_secret,  
        "is_public": client.is_public,  
        "client_type": client.app_type,  
        "client_uri": client.client_uri,  
        "metadata": metadata,  
        "configuration": configuration,  
    })
```

1. Retrieves the latest metadata entry for the client based on the internal `id`.
2. Loads and validates the metadata blob data into the `MetadataResponseSchema`.
3. Retrieves the latest configuration for the client, ordering by version in descending order to ensure the most recent version.
4. Loads and validates the configuration blob data into the `ClientConfigurationResponseSchema`.

Problem solved! 🙌

For those of you who have dealt with schemas more you can probably already see the next problem…

## Yak #3: Loading and Dumping Data

At the core of my problem was that I had assumed that all these fields would be dumped (i.e. read only) — and that's true, the consumer of the API would read all these values but to read them I need to be able to write them.

The breakdown in how these schemas are built is in large part thanks to how they were originally constructed — as request schemas only, it wasn't until more recently I considered it beneficial to make seperate request and response schemas, and so I hadn't thought too much about the fact for a request I'd be dumping data, and for responses, I'd be loading data.

It meant that fields like `metadata_blob` and `configuration_blob` within the `ClientResponse` schema couldn’t be properly deserialised because each nested schema lacked the loading definitions. Fixing this was straightforward enough—just a matter of removing the `dump_only` parameter—but it was an inconvenience I hadn’t anticipated.

```python
class ClientResponse(Schema):  
    client_id = fields.Str()  
    name = fields.Str()  
    client_secret = fields.Str()  
    is_public = fields.Bool()  
    client_type = fields.Str()  
    client_uri = fields.Url(missing="")  
    metadata = fields.Nested(MetadataResponseSchema(), attribute="metadata_blob")
    configuration = fields.Nested(ClientConfigurationResponseSchema(), attribute="configuration_blob")
    _links = fields.Nested(LinksSchema())  
  
    @post_dump  
    def add_links(self, data, **kwargs):  
        """Adds a self link based on client_id."""  
        if "client_id" in data:  
            data["_links"] = {"self": f"/api/clients/{data['client_id']}"}  
        return data
```

At this point things were looking up but I still saw missing metadata and configuration values. Like most of the problems today, the fix was easy and I just had to adjust the `attribute` references to correctly match the data source fields.

```python
class ClientResponse(Schema):  
    client_id = fields.Str()  
    name = fields.Str()  
    client_secret = fields.Str()  
    is_public = fields.Bool()  
    client_type = fields.Str()  
    client_uri = fields.Url(missing="")  
    metadata = fields.Nested(MetadataResponseSchema(), attribute="metadata_blob")  # <1>
    configuration = fields.Nested(ClientConfigurationResponseSchema(), attribute="configuration_blob")  # <2>
    _links = fields.Nested(LinksSchema())  
  
    @post_dump  
    def add_links(self, data, **kwargs):  
        """Adds a self link based on client_id."""  
        if "client_id" in data:  
            data["_links"] = {"self": f"/api/clients/{data['client_id']}"}  
        return data
```

1. Became `metadata = fields.Nested(MetadataResponseSchema(), attribute="metadata")`
2. Became `configuration = fields.Nested(ClientConfigurationResponseSchema(), attribute="configuration")`

## Enter Yak #4: Field Naming Conflicts

By now I'd been at this for longer than I expected and I was no closer to getting pagination information appended to the Clients API response. But that didn't stop the yaks.

While things were now looking up generally, on the next run through of AuthZilla an additional snag with specific field names like `privacy_policy`, `privacy_contact`, and `security_contact`.

These fields when serialised dropped the underscore meaning that the schema couldn't find `privacy policy`, `privacy contact` and `security contact`. Because of this mismatch, any attempt to deserialise these fields resulted in a `ValidationError`.

Despite this ultimately being an easy problem to solve, finding the remedy was a little tricker than expected. To address it, I had to explicitly map each field in the `MetadataResponseSchema` using `data_key` to align with the database’s field names:

```python
class MetadataResponseSchema(Schema):
    description = fields.Str()
    logo = fields.Str()
    tos = fields.Url()
    privacy_policy = fields.Url(data_key="privacy policy")
    security_contact = fields.Str(data_key="security contact")
    privacy_contact = fields.Str(data_key="privacy contact")
```

With this change, the `ClientResponse` schema could finally load and serialize metadata and configuration without raising errors or missing data. But, I wasn’t completely out of the woods. While individual clients were now fully populated with the correct metadata, wrapping them in the `ClientResponseWrapper` still wasn’t working quite right. I hadn’t pinpointed the root cause (although I have a few theories), but at least fixing the nested schema issues had solved a good chunk of the missing data problem.

And so, the yaks continue. But at this point, they’re starting to look more like manageable shearing jobs than full-blown shaves—small progress, but progress nonetheless.

xoxo gossip girl
