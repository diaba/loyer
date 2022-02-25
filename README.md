# Loyer


# Description

Loyer is a full stack application that manage rental properties. The application will allow the user(admin only) to add monthly rental and display information such as client and the asset they rent.

## Goals
My goal is to build a fully responsive web application that is secured and that meets my client requirement.

##### Planning

![ERD image](https://github.com/diaba/loyer/blob/main/loyer.drawio.png?raw=true "timeLine")

## Approch

- build a spring boot REST API
- Create an angular application 
- Connect the 2 applications
# User stories


# Wireframes

![home Image](https://github.com/diaba/loyer/blob/main/loyer.png?raw=true "Project wireframe")

## Endpoints

| Endpoints                                                                        | Methods | Access  |  
|----------------------------------------------------------------------------------|---------|---------|
| auth/users/register                                                              | POST    | Public  |
| auth/users/login                                                                 | POST    | Public  |
| api/customers                                                                    | PUT     | Public  |
| api/customers                                                                    | GET     | Public  |
| api/categories                                                                   | GET     | Public  |
| api/categories/{categoryId}                                                      | GET     | Public  |
| api/categories/{categoryId}/meals/{mealId}                                       | GET     | Public  |
| api/categories/{categoryId}/meals                                                | GET     | Public  |
| api/meals                                                                        | GET     | Public  |
| api/orders                                                                       | POST    | Private |

## Project Challenges


##### Back-end
- Java SpringBoot
- Maven
- PostGreSQL
##### Front-end
- Angular
- Boostrap
##### Deployment
- AWS

### Dependencies
##### Back-end (Maven)
- spring-boot-starter-data-jpa
- spring-security-web
- spring-security-config
- spring-security-core
- postgresql
##### Front-End (Angular)
- BrowserModule
- AppRoutingModule
- BrowserAnimationsModule
- FormsModule
- HttpClientModule
- NgbModule



## System Tools Used

|                                                                                                                      |  |
|----------------------------------------------------------------------------------------------------------------------| :--- |
|   <img src="http://assets.tianmaying.com/avatars/90227ff73b68435eb2449571d0258043.png" alt="angular" width="40" height="40"/>                          | Spring Boot
|  <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/>   | Postman
| <img src="https://git.generalassemb.ly/matthewljames/paypal-java-capstone-project/blob/master/images/img_6.png" alt="angular" width="40" height="40"/> | IntelliJ IDEA 17
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/>   | Postgres
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/> | GitHub 
| <img src="https://user-images.githubusercontent.com/433659/152461436-b8756e24-6dcb-46dc-ad47-e40c821a7887.png" alt="angular" width="40" height="40"/>     | Figma
| <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40"/>         | Angular

# Repos
- 👨‍💻 Backend
  - Git url [here](https://github.com/diaba/loyer)
- 👨‍💻 Frontend
  - [here](https://github.com/diaba/loyer-server)

# Getting Started

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
