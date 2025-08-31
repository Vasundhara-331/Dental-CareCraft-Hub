# Dental Management System – Smart Scheduling Optimization

## Software Requirements Specification (SRS)
**Project:** CareCraft: Dental Management System – Smart Scheduling Optimization  
**Prepared By:** Vasundhara, Niranj, Sradhya
**Date:** 27 June, 2025
**Version:** 1.0

---

## 1. Introduction

### 1.1 Purpose
The purpose of this system is to provide a **web-based Dental Management System (DMS)** that streamlines clinic operations, improves patient experience, optimizes appointment scheduling, and provides real-time tracking of queues, AI-assisted symptom diagnosis, and reports for administrators and doctors.

### 1.2 Scope
The system enables:  
- Patients to book, reschedule, and track appointments.  
- Doctors to view appointments, prescribe treatments, and maintain patient history.  
- Admins to manage doctors, appointments, payments, and generate reports.  
- AI-based assistance for symptom guidance and scheduling optimization.  
- Real-time queue tracking to minimize waiting times.  

The system will support multi-role authentication and be scalable for multiple clinics.

### 1.3 Definitions, Acronyms, and Abbreviations
- **DMS:** Dental Management System  
- **JWT:** JSON Web Token  
- **API:** Application Programming Interface  
- **AI Scheduler:** Algorithm for optimized appointment allocation  
- **DB:** Database

---

## 2. Overall Description

### 2.1 Product Perspective
The DMS is a **standalone web application** with a frontend in **React** and backend in **Flask**. The system uses **MySQL** as the relational database and can integrate payment gateways like **Razorpay** or **Stripe**.  

**Architecture Overview:**  
```
[Patient / Doctor / Admin Frontend] <--> [Flask Backend APIs] <--> [MySQL Database]
                                   \--> [AI Services: Scheduler / Diagnosis / Chatbot]
```

### 2.2 User Classes and Characteristics
| User Role | Description | Privileges |
|-----------|------------|------------|
| **Admin** | Clinic staff responsible for system management | Manage doctors, view all appointments, track payments, generate reports |
| **Doctor** | Dental professionals treating patients | View appointments, patient history, add prescriptions & treatment notes |
| **Patient** | Clinic clients | Book/reschedule appointments, chat with AI assistant, view history, make payments |

### 2.3 Operating Environment
- Web browsers: Chrome, Edge, Firefox  
- Backend server: Python 3.10+, Flask  
- Frontend: React 18+, TailwindCSS/Bootstrap  
- Database: MySQL 5.7+  
- Optional: Docker for containerization

### 2.4 Design & Implementation Constraints
- JWT-based authentication for secure access  
- RESTful API design  
- Must handle concurrent users and real-time queue updates  
- Must comply with basic data privacy for patient records

---

## 3. Functional Requirements

### 3.1 Authentication & Authorization
- JWT-based login for all users  
- Role-based routing  
- Password hashing and secure storage

### 3.2 Patient Features
- Registration & login  
- Book, reschedule, or cancel appointments  
- Select tooth in diagram and describe symptoms  
- Chatbot assistance for guided symptom collection  
- View appointment history and treatment notes  
- Real-time queue tracking  
- Make online payments

### 3.3 Doctor Features
- View scheduled appointments  
- Access patient reports, diagrams, and history  
- Add treatment notes, prescriptions, and follow-ups  
- Notifications for new appointments

### 3.4 Admin Features
- Manage doctor profiles  
- View all appointments  
- Generate payment and performance reports  
- View analytics dashboard

### 3.5 AI-Assisted Features
- **AI Scheduler:** Suggest optimal appointment timings based on doctor availability and patient urgency  
- **AI Chatbot:** Guided symptom collection  
- **Sentiment Analysis:** Optional analysis of patient feedback/messages

---

## 4. Non-Functional Requirements

### 4.1 Performance
- Support up to 100 concurrent users  
- Appointment booking response within 2 seconds

### 4.2 Reliability
- System uptime ≥ 99%  
- Backup daily for patient and appointment data

### 4.3 Usability
- Intuitive interface for patients and staff  
- Mobile-friendly design

### 4.4 Security
- JWT authentication  
- Encrypted password storage  
- Role-based access control  
- HTTPS support in production

### 4.5 Maintainability
- Modular backend (Flask Blueprints)  
- Component-based frontend (React)  
- Clear code documentation

---

## 5. System Interfaces

### 5.1 User Interfaces
- Login/Register Pages  
- Dashboards: Admin / Doctor / Patient  
- Appointment booking form  
- Tooth diagram selection UI  
- Chatbot widget  
- Reports and analytics

### 5.2 Hardware Interfaces
- Standard desktop, laptop, or tablet with internet access

### 5.3 Software Interfaces
- MySQL Database  
- RESTful API endpoints  
- Optional WebSocket for real-time queue updates

---

## 6. Database Requirements
**Tables:**
1. `Users` – id, name, email, password_hash, role  
2. `Appointments` – id, patient_id, doctor_id, date, time, tooth_id, symptoms, notes  
3. `PatientHistory` – id, patient_id, records  
4. `Payments` – id, appointment_id, amount, status, timestamp  
5. `Doctors` – id, name, specialization, availability

---

## 7. Future Enhancements
- Integration with dental imaging tools (X-rays, scans)  
- Machine Learning-based diagnosis recommendations  
- Multi-clinic support  
- SMS/Email reminders

---
