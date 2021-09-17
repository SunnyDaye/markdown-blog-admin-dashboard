# Markdown Blog Dashboard
[Click here to see the project live!](https://markdown-blog-admin-dashboard.herokuapp.com/articles)
# Table of Contents
  - [1.0 Overview](#10-overview)
  - [2.0 How to Use](#20-how-to-use)
  - [3.0 Licensed](#30-licensed)
## 1.0 Overview
### 1.1 Description
&nbsp;&nbsp;&nbsp;&nbsp;This project is a basic markdown blog CMS using MVC architecture.
### 1.2 Technologies
&nbsp;&nbsp;&nbsp;&nbsp;This project uses Node, Express, Knex, EJS, and PostgreSQL.
### 1.3 Features
&nbsp;&nbsp;&nbsp;&nbsp; A user can:
- Create a markdown article
- Read a list of markdown articles
- Read individual articles 
- Edit individual articles
- Inject scripts and attempt to break the application(will fail)
## 2.0 How to Use
1. Fork and clone repo
2. ```npm install``` to install depedencies
3. Create a `.env` file
4. Inside the `.env` file, set ```NODE_ENV``` to `development` or `production`.Set ```PORT``` to a port of your choice. Then set ```DATABASE_URL``` to the url of your database
5. Run ```knew migrate:latest``` and ```knex seed:run``` to migrate and seed
6. Run ```npm install`` to run the API locally
## 3.0 License
MIT License

Copyright (c) 2021 by Suncerie Daye

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

