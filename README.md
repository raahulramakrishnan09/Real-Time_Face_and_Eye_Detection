# 🔴 Real-Time Face & Eye Detection with Flask & OpenCV

This project is a **real-time face and eye detection web application** built using **Flask** and **OpenCV**. The system streams live video from the webcam and detects **faces and eyes** using Haar cascade classifiers.

## 📸 Demo
![Live Streaming Preview](https://via.placeholder.com/800x400?text=Live+Face+Detection)  

---

## 🚀 Features
✔️ **Real-Time Face & Eye Detection** using OpenCV  
✔️ **Live Video Streaming** via Flask  
✔️ **Haar Cascade Classifiers** for accurate detection  
✔️ **Responsive UI** with Bootstrap  
✔️ **Smooth Transitions & Animations** using JavaScript  

---

## 🛠️ Technologies Used
- **Python 3.x**
- **Flask**
- **OpenCV**
- **HTML5, CSS3, Bootstrap**
- **JavaScript (ES6)**
  
---

## 📂 Project Structure

📂 Face_Eye_Detection

│-- 📂 static

│   │-- 📂 css

│   │   └── style.css

│   │-- 📂 js
│   │   └── script.js
│-- 📂 templates
│   └── index.html
│-- 📂 Haarcascades
│   │-- haarcascade_frontalface_default.xml
│   │-- haarcascade_eye.xml
│-- app.py
│-- requirements.txt
│-- README.md


### **Folder & File Descriptions**
- **`static/`** → Contains CSS & JavaScript files for UI styling and interactions.  
- **`templates/`** → Contains the `index.html` file for rendering the web page.  
- **`Haarcascades/`** → Stores the pre-trained Haar cascade classifiers for face & eye detection.  
- **`app.py`** → The Flask application handling live video streaming & detection.  
- **`requirements.txt`** → Lists dependencies required for the project.  
- **`README.md`** → Documentation for setup, usage, and customization.  

---

## 🛠️ Setup & Installation  

### 🔹 **1. Clone the Repository**  
```bash
git clone https://github.com/your-username/Face-Eye-Detection-Flask.git
cd Face-Eye-Detection-Flask
```

### **Create & Activate a Virtual Environment**
```bash
# On Windows
python -m venv venv
venv\Scripts\activate

# On macOS / Linux
python3 -m venv venv
source venv/bin/activate
```
### **Install Dependencies**
```bash
pip install -r requirements.txt
```
### **Run the Flask Application**
```bash
python app.py
```
### **Open in Browser**
```bash
Go to **http://127.0.0.1:5000/** in your web browser.
```
