document.addEventListener("DOMContentLoaded", () => {
  const statusTextElement = document.getElementById("status");
  const copyButton = document.getElementById("copyButton");
  const messageElement = document.getElementById("message");

  // Get the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];

    // Check if the active tab is a Booking.com page
    if (!activeTab.url.includes("booking.com")) {
      statusTextElement.textContent = "Not a Booking.com page.";
      copyButton.style.display = "none";
      return;
    }

    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      files: ['content.js']
    }, () => {
      if (chrome.runtime.lastError) {
        console.error('Error injecting script:', chrome.runtime.lastError);
        statusTextElement.textContent = "Failed to inject script. Please try again.";
        copyButton.style.display = "none";
        return;
      }

      chrome.tabs.sendMessage(activeTab.id, { action: "getHotelID" }, (response) => {
        if (chrome.runtime.lastError) {
          console.error("Error:", chrome.runtime.lastError.message);
          statusTextElement.textContent = "Could not retrieve hotel ID.";
          copyButton.style.display = "none";
          return;
        }

        if (!response || !response.hotelID || !response.hotelName) {
          statusTextElement.textContent = "Failed to retrieve hotel ID.";
          copyButton.style.display = "none";
          return;
        }

        // Display the hotel name and ID
        statusTextElement.textContent = `The hotel ${response.hotelName} has the ID: ${response.hotelID}`;
        copyButton.style.display = "block";

        // Add event listener to copy button
        copyButton.addEventListener("click", () => {
          navigator.clipboard.writeText(response.hotelID)
            .then(() => {
              messageElement.textContent = "Copied to clipboard!";
              messageElement.style.display = "block";
            })
            .catch(() => {
              messageElement.textContent = "Failed to copy.";
              messageElement.style.display = "block";
            });
        });
      });
    });
  });
});