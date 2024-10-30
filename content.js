// Listen for messages from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getHotelID") {
    try {
      // Find the hotel ID from the form's hidden input field
      const hotelID = document.querySelector("form#top-book input[name='hotel_id']")?.value;
      const hotelName = document.querySelector("#hp_hotel_name_reviews")?.textContent.trim();

      // Send back the hotel ID and name or null if not found
      sendResponse({ hotelID: hotelID || null, hotelName: hotelName || null });
    } catch (error) {
      console.error('Error finding hotel ID:', error);
      sendResponse({ hotelID: null, hotelName: null });
    }
    return true; // Indicate that the response will be sent asynchronously
  }
});