# Methodist Comprehensive College Data Collection (React)

This is a modern, high-fidelity React implementation of the data collection form for **Methodist Comprehensive College, Sagamu**.

## ✨ Features
- **Modern Tech Stack**: Built with React, Vite, and Framer Motion.
- **Micro-Animations**: Smooth transitions, scale effects, and modal entry/exit.
- **Premium Design**: Navy Blue & Gold palette with Inter and Outfit typography.
- **State Management**: React-controlled form with asynchronous submission handling.
- **Robustness**: Proper loading, success, and error states.

## 🚀 Getting Started

### 1. Installation
Ensure you have Node.js installed, then run:
```bash
npm install
```

### 2. Configure Google Sheets Backend
1. Open your [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1QlSxCSFQ2GFIeiKSn_Q8o3MQq2N7tFYNkkmFvlvR7Hc/edit).
2. Go to **Extensions** > **Apps Script**.
3. Create a new file and paste the code from `google-apps-script_original.gs`.
4. Click **Deploy** > **New Deployment** > Type: **Web App**.
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the **Web App URL**.

### 3. Connect to React
1. Open `src/App.jsx`.
2. Find the line: `const SCRIPT_URL = 'PASTE_YOUR_APPS_SCRIPT_URL_HERE';`
3. Replace the placeholder with your **Web App URL**.

### 4. Launch Development Server
```bash
npm run dev
```

## 🏗️ Build for Production
To generate a production-ready folder (`dist/`):
```bash
npm run build
```

---
*Created with Honesty and Industry — MCC Sagamu*
