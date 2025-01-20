# 🏆 Test Scores Processor

## 📌 Project

**Test Scores Processor** is a **Node.js** application designed to process test scores from command-line input. It calculates the average score and displays all provided scores in a formatted manner.

## 🚀 Features

- 📊 **Processes test scores** entered as command-line arguments.
- 🔢 **Calculates the average score** based on user input.
- 🖥️ **Command-line execution**, making it lightweight and efficient.
- 🔄 **Error handling** for invalid inputs or missing scores.

## 📂 Project Structure

```
📁 test_scores
 ├── 📄 index.js  # Main Node.js script
```

## 🛠 Technologies Used

- **Node.js**: JavaScript runtime environment.
- **JavaScript (ES6+)**: Implements functions using modern JS syntax.

## 📌 Prerequisites

Before running the script, ensure **Node.js** is installed. Verify with:

```sh
node -v
```

## 🏃‍♂️ How to Use

1️⃣ **Open a terminal** and navigate to the project folder:

```sh
cd test_scores
```

2️⃣ **Run the script** by providing test scores as arguments:

```sh
node index.js 89 100 92 93
```

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

## ⚠️ Error Handling

- If no scores are provided, the script will display:

```sh
Error:
Please enter at least one score.
```

- If a non-numeric value is entered, the script will display:

```sh
Error:
All scores must be a number.
Score incorrect found: <invalid_value>
```

## 🎯 Project Purpose

This project is part of my **professional portfolio** and demonstrates skills in:
- **Processing command-line arguments in Node.js**.
- **Performing calculations and array operations in JavaScript**.
- **Implementing error handling in CLI applications**.

## 📜 License

This project is licensed under the **MIT** License.

---

💼 **Author:** Juan Jacobo Florez Monroy | 🚀 Portfolio: [Portfolio Website or GitHub]