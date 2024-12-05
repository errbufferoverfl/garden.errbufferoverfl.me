---
title: "Creating Multiple Endpoints in Azure Functions with Go"
subtitle: "How to Expand Custom Handlers"
author:
  - errbufferoverfl
date: 2021-11-07T10:11:10+10:30
date-modified: 2024-12-04T10:15:41+10:30
categories:
  - Cloud Development
  - Golang Programming
  - Today I Learned
draft: true
---

::: {.callout-note}

**03 December 2024**

This blog post has been migrated from **errbufferoverfl.me** to **garden.errbufferoverfl.me**.

:::

Hello and welcome back to another "Today I Learnt," where I document some of the exciting things I have learnt to do! Today I'll be showing you how to support multiple endpoints in Azure Function with a custom handler.

In my examples, I'll be using an HTTP Trigger. Still, if you plan to use a custom handler with Azure Functions in production, you may be better off using Durable Functions and Azure Logic Apps. These are built to manage state transitions and communication between multiple functions.

If you decide to continue using a standard HTTP Trigger or something similar, you can also use storage queues for cross-function communication.

However, that use case is outside the scope of this TIL article!

## The Problem

I recently started turning a small command-line program to find my top played Spotify artists into an Azure Function. Out of the box, Azure Functions do not support Golang, which is what I wrote the original program in, so it gave me an excellent excuse to use a custom handler.

When I began implementing the Auth0 authentication flow, the problem arose where I needed to define three critical endpoints: `login`, `callback`, and `logout`. When I built the Go binary, I would be able to call a test `hello` endpoint, but when I browsed to the others, I would get a `404` error!

Convinced it was a build problem, I spent a good 24 hours trying to debug my build process; after chatting with a friend and running some more tests, I realised that the build process was not the problem. In fact, any endpoints defined after my test `hello` endpoint didn't exist 🤔.

After a bit more research, I realised that I had missed a moderate-sized portion of how Azure functions worked. After reading through what felt like a million documents, I bring you a tl;dr on creating multiple endpoints in Azure Functions with Golang. 🎉

## Prerequisites

You'll want to have your Azure Functions project set up already, or you can follow through this Microsoft [Quickstart on how to create a Go or Rust function in Azure using Visual Studio Code](https://docs.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-other?tabs=go%2Cmacos). You can stop once you have run the function locally.

## Adding a New Function

During the tutorial, or when configuring your custom project, you may recall creating a `function.json` file within a directory that reflects the name of your endpoint (e.g., `HttpExample`). For this post, my original function will be called `hello`.

The first step is to create a new directory named after your new endpoint; inside this, create a new `function.json` file. The file should be populated with similar values as your original `function.json`. For this post, my new function will be called: `goodbye`.

```json
{
  "bindings": [
    {
      "authLevel": "anonymous",
      "type": "httpTrigger",
      "direction": "in",
      "name": "req",
      "methods": [
        "get",
        "post"
      ]
    },
    {
      "type": "http",
      "direction": "out",
      "name": "res"
    }
  ]
}
````

## Create a New Handler

The next step is to add a new handler to your `main()` function. Depending on the tutorial you used, you may be using Golang's default `http.HandleFunc()`, which is typically fine; however, it does mean that you do not have complete control over the handlers used in the program. I prefer to define a new `http.NewServeMux()`, which allows me to better control the configuration, like so:

```go
func main() {
    port, exists := os.LookupEnv("FUNCTIONS_CUSTOMHANDLER_PORT")
    if !exists {
        port = "8080"
    }

    log.Printf("About to listen on %s. Go to http://127.0.0.1:%s/", port, port)

    mux := http.NewServeMux()

    mux.HandleFunc("/hello", helloHandler)
    log.Fatal(http.ListenAndServe(":"+port, mux))
}

func helloHandler(w http.ResponseWriter, r *http.Request) {
    message := "Hello anon user!.\n"
    name := r.URL.Query().Get("name")
    if name != "" {
        message = fmt.Sprintf("Hello, %s.\n", name)
    }
    fmt.Fprint(w, message)
}
```

You can then add in a new handler for your new function (and associated function for handling the call) like this:

```go
func main() {
    port, exists := os.LookupEnv("FUNCTIONS_CUSTOMHANDLER_PORT")
    if !exists {
        port = "8080"
    }

    log.Printf("About to listen on %s. Go to http://127.0.0.1:%s/", port, port)

    mux := http.NewServeMux()

    mux.HandleFunc("/hello", helloHandler)
    mux.HandleFunc("/goodbye", goodbyeHandler)

    log.Fatal(http.ListenAndServe(":"+port, mux))
}

func helloHandler(w http.ResponseWriter, r *http.Request) {
    message := "Hello anon user!.\n"
    name := r.URL.Query().Get("name")
    if name != "" {
        message = fmt.Sprintf("Hello, %s.\n", name)
    }
    fmt.Fprint(w, message)
}

func goodbyeHandler(w http.ResponseWriter, r *http.Request) {
    message := "Goodbye anon user!.\n"
    name := r.URL.Query().Get("name")
    if name != "" {
        message = fmt.Sprintf("Goodbye, %s!\n", name)
    }
    fmt.Fprint(w, message)
}
```


## Conclusion

Now, a significant thing that we touched on earlier in the prerequisites is that by adding a new "endpoint," we are adding a new function to our project rather than *just* creating a new code path. So if you have multiple functions that need to communicate, you'll want to investigate Durable Functions and Azure Logic Apps, which are built to manage state transitions and communication between numerous functions!

## Additional Resources

- [Best practices for performance and reliability of Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-best-practices)
- [Azure Functions developer guide](https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference)

## References

- [Azure-Samples / functions-custom-handlers](https://github.com/Azure-Samples/functions-custom-handlers/tree/master/go)
