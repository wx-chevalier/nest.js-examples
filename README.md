[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/FE-Kits/nest-realworld-app">
    <img src="https://docs.nestjs.com/assets/logo-small.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Nest Realworld App</h3>

  <p align="center">
    MVC & ORM & K8s & Test
    <br />
    <a href="https://github.com/FE-Kits/nest-realworld-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/FE-Kits/nest-realworld-app">View Demo</a>
    ·
    <a href="https://github.com/FE-Kits/nest-realworld-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/FE-Kits/nest-realworld-app/issues">Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

# Introduction

[![Product Name Screen Shot](project-logo.png)](https://example.com)

NestJS codebase containing real world examples (CRUD, auth, advanced patterns, K8s, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld-example-apps) API spec.

## Nav | 导航

本案例配套 Nest 教程参考《[Node.js 全栈开发](https://ng-tech.icu/Node-Series/)》。

# Getting started

## Installation

Clone the repository

```sh
git clone https://github.com/FE-Kits/nest-realworld-app
```

Switch to the repo folder

```sh
cd nest-realworld-app
```

Install dependencies

```sh
npm install
```
Copy config file and set JsonWebToken secret key

```sh
    cp src/config.ts.example src/config.ts
```
---

## Database

The example codebase uses [Typeorm](http://typeorm.io/) with a mySQL database.

Create a new mysql database with the name `nestjsrealworld` (or the name you specified in the ormconfig.json)

Copy Typeorm config example file for database settings

```sh
cp ormconfig.json.example ``
```

Set mysql database settings in ormconfig.json

```json
{
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "your-mysql-username",
  "password": "your-mysql-password",
  "database": "nestjsrealworld",
  "entities": ["src/**/**.entity{.ts,.js}"],
  "synchronize": true
}
```

Start local mysql server and create new database 'nestjsrealworld', On application start, tables for all entities will be created.

---

## NPM scripts

- `npm start` - Start application
- `npm run start:watch` - Start application in watch mode
- `npm run test` - run Jest test runner
- `npm run build && npm run start:prod` - Build application
- Test api with `http://localhost:3000/api/articles` in your favourite browser

---

## API Specification

This application adheres to the api specifications set by the [Thinkster](https://github.com/gothinkster) team. This helps mix and match any backend with any other frontend without conflicts.

> [Full API Spec](https://github.com/gothinkster/realworld/tree/master/api)

More information regarding the project can be found here https://github.com/gothinkster/realworld

---

## Authentication

This applications uses JSON Web Token (JWT) to handle authentication. The token is passed with each request using the `Authorization` header with `Token` scheme. The JWT authentication middleware handles the validation and authentication of the token. Please check the following sources to learn more about JWT.

---

## Swagger API docs

This example repo uses the NestJS swagger module for API documentation. [NestJS Swagger](https://github.com/nestjs/swagger) - [www.swagger.io](https://swagger.io/)

# Deployment

## Docker

```sh
# Build docker image
$ ./scripts/docker/build-local.sh

# Run docker image
$ docker run -it -p 7001:7001 nest-realworld-app
```

## K8s Helm

See [helm-biz-app/backend-app](https://github.com/BE-Kits/k8s-examples).

# About

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/FE-Kits/nest-realworld-app/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [NestJs](https://docs.nestjs.com/)

## Copyright & More | 延伸阅读

笔者所有文章遵循 [知识共享 署名-非商业性使用-禁止演绎 4.0 国际许可协议](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh)，欢迎转载，尊重版权。如果觉得本系列对你有所帮助，欢迎给我家布丁买点狗粮(支付宝扫码)~

![技术视野](https://s2.ax1x.com/2019/12/03/QQJLvt.png)

您还可以前往 [NGTE Books](https://ng-tech.icu/books/) 主页浏览包含知识体系、编程语言、软件工程、模式与架构、Web 与大前端、服务端开发实践与工程架构、分布式基础架构、人工智能与深度学习、产品运营与创业等多类目的书籍列表：

![NGTE Books](https://s2.ax1x.com/2020/01/18/19uXtI.png)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/FE-Kits/nest-realworld-app.svg?style=flat-square
[contributors-url]: https://github.com/FE-Kits/nest-realworld-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/FE-Kits/nest-realworld-app.svg?style=flat-square
[forks-url]: https://github.com/FE-Kits/nest-realworld-app/network/members
[stars-shield]: https://img.shields.io/github/stars/FE-Kits/nest-realworld-app.svg?style=flat-square
[stars-url]: https://github.com/FE-Kits/nest-realworld-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/FE-Kits/nest-realworld-app.svg?style=flat-square
[issues-url]: https://github.com/FE-Kits/nest-realworld-app/issues
[license-shield]: https://img.shields.io/github/license/FE-Kits/nest-realworld-app.svg?style=flat-square
[license-url]: https://github.com/FE-Kits/nest-realworld-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
