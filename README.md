# Student Management System – Spring Boot Web Application

A full-stack **Student Management System** built using **Java, Spring Boot, MySQL, HTML, CSS, and JavaScript**.  
This project allows users to **add, view, update, and delete student records** through a clean and responsive web interface integrated with **RESTful APIs**.

---

## 🚀 Features

- Add new student records
- View all students in a structured table
- Update existing student details
- Delete student records
- RESTful API integration
- MySQL database connectivity
- Responsive and modern dark-themed UI
- Layered architecture using Controller, Service, and Repository
- API testing support with Postman

---

## 🛠️ Tech Stack

### Backend
- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- Hibernate

### Frontend
- HTML
- CSS
- JavaScript

### Database
- MySQL

### Tools & Build
- Maven
- Postman
- IntelliJ IDEA / Spring Tool Suite / VS Code

---

## 📂 Project Structure

```bash
student-management-system-spring-boot/
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/charanpreet/studentmanagementsystem/
│   │   │       ├── controller/
│   │   │       ├── entity/
│   │   │       ├── repository/
│   │   │       ├── service/
│   │   │       ├── exception/
│   │   │       └── StudentManagementSystemApplication.java
│   │   │
│   │   └── resources/
│   │       ├── static/
│   │       │   ├── index.html
│   │       │   ├── style.css
│   │       │   └── script.js
│   │       └── application.properties
│   │
│   └── test/
│
├── .mvn/                    # (if present)
├── mvnw                     # (if present)
├── mvnw.cmd                 # (if present)
├── pom.xml
├── .gitignore
└── README.md
