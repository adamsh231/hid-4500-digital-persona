# Digital Persona Fingerprint Demo

A beautiful, modern web application demonstrating the Digital Persona Fingerprint API capabilities. Built with Vite and designed with a focus on user experience and visual appeal.

Ref:
- https://github.com/shanxp/fingerprint-digital-persona-u-are-u-4500-web-example/tree/master
- https://github.com/hidglobal/digitalpersona-fingerprint/blob/d61f5e9d0d828cf6a0b205971b164f4edf7f4cd2/docs/usage/index.adoc

## Features

🔒 **Fingerprint Capture** - Capture fingerprints in multiple formats (PNG, Raw, Intermediate, Compressed)  
📱 **Device Management** - Enumerate and monitor fingerprint device connections  
📊 **Quality Reporting** - Real-time fingerprint quality assessment with visual indicators  
⚡ **Live Events** - Real-time event logging and status monitoring  
🎨 **Beautiful UI** - Modern, responsive design with smooth animations  
📱 **Mobile Friendly** - Responsive design that works on all devices  

## Prerequisites

Before running this demo, you need to have the HID DigitalPersona software installed on your machine:

- **HID DigitalPersona Workstation** (recommended), or
- **HID DigitalPersona Kiosk**, or  
- **HID Authentication Device Client** ([Download here](https://digitalpersona.hidglobal.com/lite-client/))

## Installation

1. **Clone or download this repository**
2. **Install dependencies:**
   ```bash
   yarn install
   ```

## Running the Demo

### Development Mode
```bash
yarn dev
```
This will start the development server at `http://localhost:3000` and automatically open your browser.

### Production Build
```bash
yarn build
```
This creates an optimized production build in the `dist` folder.

### Preview Production Build
```bash
yarn preview
```
Preview the production build locally.

## How to Use

### 1. **Device Setup**
   - Ensure your fingerprint device is connected
   - Click "Enumerate Devices" to scan for available devices
   - The connection status indicator shows real-time connectivity

### 2. **Capture Fingerprints**
   - Select your preferred sample format (PNG Image recommended for visual feedback)
   - Click "Start Capture" to begin fingerprint acquisition
   - Place your finger on the scanner when prompted
   - Monitor the quality indicator for optimal capture
   - Click "Stop Capture" when finished

### 3. **View Results**
   - Captured samples appear in the "Sample History" panel
   - Real-time events are logged in the "Events Log" panel
   - Quality scores are displayed with visual indicators

## API Features Demonstrated

- ✅ **Device Enumeration** - `enumerateDevices()`
- ✅ **Device Events** - Connection/disconnection monitoring
- ✅ **Sample Acquisition** - Multiple format support
- ✅ **Quality Reporting** - Real-time quality assessment
- ✅ **Error Handling** - Comprehensive error management
- ✅ **Status Monitoring** - Acquisition start/stop events

## Sample Formats Supported

| Format | Description | Use Case |
|--------|-------------|----------|
| **PNG Image** | Visual fingerprint image | UI display, verification |
| **Raw** | Unprocessed fingerprint data | Advanced processing |
| **Intermediate** | Processed template data | Matching algorithms |
| **Compressed** | Compressed fingerprint data | Storage optimization |

## Architecture

```
digital-persona-fingerprint-demo/
├── index.html          # Main application entry point
├── main.js            # Core application logic and API integration
├── styles.css         # Modern CSS styling with CSS Grid/Flexbox
├── package.json       # Dependencies and build scripts
├── vite.config.js     # Vite configuration
└── README.md          # Documentation
```

## Technology Stack

- **⚡ Vite** - Modern build tool for fast development
- **🎨 Modern CSS** - CSS Grid, Flexbox, CSS Variables
- **📱 Responsive Design** - Mobile-first approach
- **🔤 Inter Font** - Modern typography
- **🎯 Font Awesome** - Beautiful icons
- **🔐 Digital Persona API** - Fingerprint capture and management

## Browser Compatibility

This demo requires:
- Modern browsers with ES6+ support
- HTTPS connection (required by Digital Persona API)
- WebRTC/WebSockets support for device communication

## Troubleshooting

### "Cannot connect to fingerprint device"
1. Ensure your fingerprint device is properly connected
2. Verify HID DigitalPersona software is installed and running
3. Check device drivers are up to date
4. Try running the application as administrator

### "Digital Persona API not available"
1. Install [HID Authentication Device Client](https://digitalpersona.hidglobal.com/lite-client/)
2. Restart your browser after installation
3. Ensure the DigitalPersona Agent service is running

### Quality scores are low
1. Clean your fingerprint scanner surface
2. Ensure your finger is clean and dry
3. Press firmly but not too hard on the scanner
4. Try different fingers for better results

## Development

This project uses:
- **ES6 Modules** for modern JavaScript
- **CSS Custom Properties** for theming
- **Progressive Enhancement** for feature detection
- **Error Boundary Pattern** for robust error handling

### Adding New Features

The application is structured for easy extension:

1. **Add UI elements** to `index.html`
2. **Style components** in `styles.css`  
3. **Implement logic** in `main.js`
4. **Update documentation** in `README.md`

## License

This project is for demonstration purposes. Check Digital Persona licensing for production use.

## Support

For Digital Persona API issues, visit the [official repository](https://github.com/hidglobal/digitalpersona-fingerprint).

---

*Built with ❤️ for demonstration of Digital Persona Fingerprint API capabilities*