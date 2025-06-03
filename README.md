# Weather App

A beautiful, animated weather web app that fetches real-time weather data for any city. Built with HTML, CSS, and JavaScript.

![Weather App Screenshot](screenshot.png)

## Features

- Modern, glassmorphism-inspired UI
- Animated transitions and weather icons
- Responsive and mobile-friendly
- Powered by [Weatherstack](https://weatherstack.com/) API

## Demo

> **Note:** If you deploy this on GitHub Pages, do **not** expose your Weatherstack API key.  
> For public deployments, use a serverless proxy or a public weather API.

## Getting Started

1. **Clone this repository:**
    ```sh
    git clone https://github.com/your-username/weather-app.git
    cd weather-app
    ```

2. **Add your Weatherstack API key:**
    - Open `app.js`
    - Replace `USE THE API YOU GENERATED` with your actual API key:
      ```js
      const API_KEY = "your_api_key_here";
      ```

3. **Open `index.html` in your browser.**

## Deployment

- You can deploy this as a static site (e.g., GitHub Pages, Netlify, Vercel).
- **Do not commit your API key** if your repo is public.
- For production, use a backend proxy to keep your API key secret.

## Folder Structure

```
index.html
style.css
app.js
README.md
screenshot.png
```

## Credits

- Weather data from [Weatherstack](https://weatherstack.com/)
- UI inspired by modern glassmorphism and neumorphism trends

---

**Made with ❤️ by [NithinThotapalli](https://github.com/your-username)**
