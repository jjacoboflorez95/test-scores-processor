# 🏆 Test Scores Processor

## 📌 Project Overview

**Test Scores Processor** is a **Node.js application** designed to process **test scores** entered via command-line arguments. The script **calculates the average score** and displays all provided scores in a formatted manner. This lightweight application is ideal for **quick score analysis** without needing external dependencies.

Developed as part of a **professional portfolio**, this project highlights **command-line processing, input validation, and JavaScript array operations**.

---

## 🚀 Features

- 📊 **Processes test scores** entered as command-line arguments.
- 🔢 **Calculates the average score** based on user input.
- 🖥️ **Command-line execution**, making it lightweight and efficient.
- ⚠ **Error handling** to validate input and prevent invalid operations.

---

## 🛠 Technologies Used

- **Node.js** → JavaScript runtime environment.
- **JavaScript (ES6+)** → Implements functions using modern JS syntax.

---

## 🎯 Project Purpose

This project demonstrates:

- ✅ **Processing command-line arguments in Node.js**.
- ✅ **Performing calculations and array operations in JavaScript**.
- ✅ **Validating user input and handling errors effectively**.
- ✅ **Building lightweight CLI tools** for automation and data processing.

---

## 📂 Project Structure

```
📁 test_scores
 ├── 📄 index.js  # Main Node.js script
```

---

## 📌 Prerequisites

Before running the script, ensure **Node.js** is installed. Verify with:

```sh
node -v
```

---

## 🏃‍♂️ How to Use

1️⃣ **Open a terminal** and navigate to the project folder:

```sh
cd test_scores
```

2️⃣ **Run the script** by providing test scores as arguments:

```sh
node index.js 89 100 92 93
```

---

## 📝 Example Output

If executed with:

```sh
node index.js 89 100 92 93
```

The console output will be:

```sh
All scores: 89, 100, 92, 93
Average score: 93.5
```

---

## ⚠️ Error Handling

- If **no scores** are provided, the script will display:

```sh
Error:
Please enter at least one score.
```

- If a **non-numeric value** is entered, the script will display:

```sh
Error:
All scores must be numbers.
Invalid score detected: <invalid_value>
```

---

## 🌟 Future Improvements

- 📊 **Median and Mode Calculation** – Extend functionality to calculate more statistics.
- 📂 **Export Results** – Save results to a file instead of just displaying them.
- 📤 **Integration with Databases** – Store and retrieve test scores from a database.
- 📈 **Graphical Output** – Display scores in a visual format using a graphing library.

---

## 📜 License

This project is licensed under the **MIT** License.

---

## 💼 Author

👤 **Juan Jacobo Florez Monroy**  
🌐 **Portfolio**: [jjacobo95.com](https://jjacobo95.com)  
🐙 **GitHub**: [github.com/jjacoboflorez95](https://github.com/jjacoboflorez95)