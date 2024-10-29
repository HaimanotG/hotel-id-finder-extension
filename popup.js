document.getElementById("copyButton").addEventListener("click", () => {
  // Get the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];

    const statusTextElement = document.getElementById("status");

    // Check if the active tab is a Booking.com page
    if (!activeTab.url.includes("booking.com")) {
      statusTextElement.textContent = "Not a Booking.com page.";
      return;
    }

    chrome.tabs.sendMessage(activeTab.id, { action: "getHotelID" }, (response) => {
      if (chrome.runtime.lastError) {
        console.error("Error:", chrome.runtime.lastError.message);
        statusTextElement.textContent = "Could not retrieve hotel ID.";
        return;
      }

      if (!response || !response.hotelID) {
        statusTextElement.textContent = "Failed to retrieve hotel ID.";
        return;
      }

      // Directly copy to clipboard in popup.js
      navigator.clipboard.writeText(response.hotelID)
        .then(() => {
          statusTextElement.textContent = "Copied to clipboard!";
        })
        .catch(() => {
          statusTextElement.textContent = "Failed to copy.";
        });

    });

  });
});
