# ASP.NET Core Template Pack

[![Build status](https://ci.appveyor.com/api/projects/status/2txy5hi1ac7jima6?svg=true)](https://ci.appveyor.com/project/madskristensen/aspnetcoretemplatepack)

Contains various project templates for ASP.NET Core development.

## Install
In the console, execute the following command:

`dotnet new -i "AspNetCore.Web.Templates::*"`

## Templates

### Static Website
Uses the ASP.NET Core project system to provide the latest features in Visual Studio web tooling to create a completely static website. No C# in the project at all - just plain old CSS, JavaScript and HTML.

![Static Web Screenshot](art/static-web-screenshot.png)

#### Use

`dotnet new staticweb -n myapp`

### MVC Basic
This template makes it super easy to get started with building an ASP.NET Core MVC application. It doesn't have any dependencies on Bower, npm, BundlerMinifier, Bootstrap, jQuery or anything else. It's the perfect starting point for developers that know their ASP.NET Core.

![Mvc Basic Screenshot](art/mvc-basic-screenshot.png)

#### Use

`dotnet new mvcbasic -n myapp`