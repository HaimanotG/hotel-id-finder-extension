# Hotel ID Finder

**Hotel ID Finder** is a Chrome extension that helps you quickly find and copy the `hotel_id` from Booking.com hotel pages. This can be useful for developers, travel agents, or anyone working with Booking.com data who needs quick access to hotel IDs.

## Features

- **One-click hotel ID retrieval**: Easily copy the hotel ID from any Booking.com hotel page.
- **Simple interface**: A clean and user-friendly popup that displays status messages.
- **Auto-detection**: Works only on Booking.com pages, avoiding unnecessary actions on other sites.

## How to Install (usage)

1. **Download the Extension:**
   - Download the [hotel-id-finder-extension.zip](https://github.com/HaimanotG/hotel-id-finder-extension/blob/main/hotel-id-finder-extension.zip) file from the repository.

2. **Extract the ZIP File:**
   - Extract the contents of the `hotel-id-finder-extension.zip` file to a folder on your computer.

3. **Load the Extension in Chrome:**
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" by toggling the switch in the top right corner.
   - Click on the "Load unpacked" button.
   - Select the folder where you extracted the contents of the ZIP file.

4. **Using the Extension:**
   - Navigate to a Booking.com hotel page.
   - Click on the extension icon in the Chrome toolbar.
   - Click the "Copy Hotel ID" button to retrieve and copy the hotel ID to your clipboard.

## Project Structure

- **manifest.json**: Defines the extension's metadata and permissions.
- **popup.html**: The HTML structure for the extension's popup.
- **popup.js**: JavaScript logic for handling button clicks and displaying status messages.
- **content.js**: Script injected into Booking.com pages to extract the hotel ID.
- **icon** files: Icons used for the extension in various sizes.

## Code Overview

- **popup.js**: Sends a message to the content script (`content.js`) to retrieve the hotel ID. It then copies the hotel ID to the clipboard if found and displays a success or error message.
- **content.js**: Injected into Booking.com pages and locates the `hotel_id` from the page's HTML structure.
  
## Example Workflow

1. User opens a Booking.com hotel page.
2. Clicks on the extension icon and presses **Copy Hotel ID**.
3. The extension retrieves the hotel ID and copies it to the clipboard, showing a "Copied successfully!" message.

## Troubleshooting

- **Error: "Could not retrieve hotel ID"**: Ensure you're on a valid Booking.com hotel page. The extension only works on pages with a specific form structure.
- **Error: "Failed to copy"**: If copying to the clipboard fails, make sure the browser tab is focused.

## Contributing

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are welcome!

## License

This project is open-source and available under the MIT License.
