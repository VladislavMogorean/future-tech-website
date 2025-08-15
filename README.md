# 🚀 FutureTech

FutureTech is a multi-page website representing an innovative technology company. The site includes informational pages, blog, news, podcasts, and resources for users.

⚠️ **Educational Project Notice**: This is a learning project that may contain incomplete features, experimental code, or areas that need improvement. It serves as a demonstration of web development skills and modern frontend technologies.
The public website layout was taken from the link(Figma): https://www.figma.com/design/YzTDRV7OaSoeCUBNYaoCZV/FutureTech

### 🎯 Main Sections:

- **Home Page** - company and services presentation
- **Blog** - articles and materials about technology
- **News** - current events and updates
- **Podcasts** - audio content from experts
- **Resources** - useful materials and tools
- **Contacts** - contact information

## 🛠️ Technology Stack

### Frontend:

- **HTML5** - semantic markup
- **SCSS/Sass** - CSS preprocessor with modern styling approach
- **JavaScript (ES6+)** - interactivity and dynamic behavior
- **Webpack 5** - project bundling and optimization

### Development Tools:

- **Babel** - modern JavaScript transpilation
- **PostCSS** - CSS post-processing
- **Webpack Dev Server** - local development server
- **Hot Module Replacement** - hot module reloading

### Additional Libraries:

- **IMask** - input field masks
- **PostCSS Preset Env** - modern CSS features

## 📁 Project Structure

```
future-tech/
├── src/                          # Source files
│   ├── *.html                    # HTML pages
│   ├── css/                      # Styles
│   │   ├── main.scss            # Main stylesheet
│   │   ├── blocks/              # Components (BEM methodology)
│   │   └── helpers/             # Helper styles
│   ├── scripts/                 # JavaScript files
│   │   ├── main.js             # Entry point
│   │   └── *.js                # Component modules
│   ├── images/                  # Images
│   ├── icons/                   # Icons and SVG
│   └── videos/                  # Video files
├── dist/                        # Built project (generated)
├── webpack.config.js           # Webpack configuration
├── package.json               # Project dependencies
└── .browserslistrc           # Supported browsers
```

## 🚀 Quick Start

### Requirements:

- Node.js (version 16 or higher)
- npm or yarn

### Installation:

1. **Clone the repository:**

```bash
git clone https://github.com/VladislavMogorean/future-tech.git
cd future-tech
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the project in development mode:**

```bash
npm start
```

The site will be available at: `http://localhost:8080`

## 📝 Available Scripts

- `npm start` - Start development server with hot reload
- `npm run build-dev` - Development build
- `npm run buld-prod` - Production build (optimized)
- `npm run sass-watch` - Watch SCSS file changes
- `npm run clear` - Clear dist folder

## 🎨 Design Features

- **Responsive Design** - correct display on all devices
- **Modern UI/UX** - intuitive user interface
- **Animations and Transitions** - smooth interactive elements
- **Performance Optimization** - fast page loading
- **Semantic Markup** - accessibility and SEO

## 🔧 Components and Functionality

### JavaScript Modules:

- **Header.js** - navigation and mobile menu
- **VideoPlayer.js** - custom video player
- **Tabs.js** - tab switching
- **ExpandableContent.js** - expandable content
- **PhoneInput.js** - phone number validation
- **ClosePromo.js** - promo block management

### SCSS Components:

- Grid and container system
- Buttons and forms
- Content cards
- Navigation and menus
- Media elements

## 🌍 Browser Support

The project supports all modern browsers thanks to Browserslist configuration:

- Chrome (latest versions)
- Firefox (latest versions)
- Safari (latest versions)
- Edge (latest versions)

## 📱 Responsiveness

The site is optimized for the following resolutions:

- 🖥️ Desktop: 1920px and above
- 💻 Laptop: 1024px - 1919px
- 📱 Tablet: 768px - 1023px
- 📱 Mobile: 320px - 767px

## 🔍 SEO and Performance

- Semantic HTML markup
- Optimized images
- CSS and JavaScript minification
- Resource compression
- Proper heading structure

## 📄 Important

This project is educational and created for demonstration purposes only. It may contain incomplete features, experimental implementations, or areas that require further development.
