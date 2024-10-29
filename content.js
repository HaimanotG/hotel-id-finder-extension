// Listen for messages from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getHotelID") {
    try {
      // Find the hotel ID from the form's hidden input field
      const hotelID = document.querySelector("form#top-book input[name='hotel_id']")?.value;

      // Send back the hotel ID or null if not found
      sendResponse({ hotelID: hotelID || null });
    } catch (error) {
      console.error('Error finding hotel ID:', error);
      sendResponse({ hotelID: null });
    }
    return true; // Indicate that the response will be sent asynchronously
  }
});