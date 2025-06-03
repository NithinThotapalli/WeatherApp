const API_KEY = "47ede113ddf64944e12e813b06587548"; // Replace with your Weatherstack API key

document.getElementById("weatherForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const city = document.getElementById("cityInput").value.trim();
    if (!city) return;

    showError(""); // Clear error
    showCard(false);

    try {
        const res = await fetch(
            `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${encodeURIComponent(city)}`
        );
        const data = await res.json();

        if (res.ok && data.success !== false) {
            document.getElementById("location").textContent = `${data.location.name}, ${data.location.country}`;
            document.getElementById("description").textContent = data.current.weather_descriptions[0];
            document.getElementById("temperature").textContent = `${data.current.temperature}°C`;
            document.getElementById("humidity").textContent = `${data.current.humidity}%`;

            // Weather icon
            const icon = document.getElementById("weatherIcon");
            icon.classList.remove("fade-in");
            icon.src = data.current.weather_icons[0] || "";
            setTimeout(() => icon.classList.add("fade-in"), 100);

            showCard(true);
        } else {
            showError("City not found or API error.");
        }
    } catch (err) {
        showError("Network error. Please try again.");
    }
});

function showCard(show) {
    const card = document.getElementById("weatherCard");
    if (show) {
        card.classList.remove("hidden");
    } else {
        card.classList.add("hidden");
    }
}

function showError(msg) {
    const errorDiv = document.getElementById("errorMsg");
    if (msg) {
        errorDiv.textContent = msg;
        errorDiv.classList.remove("hidden");
    } else {
        errorDiv.textContent = "";
        errorDiv.classList.add("hidden");
    }
}