# Hangzhou Lispo Sports Co., Ltd.

Professional B2B website for hunting and outdoor equipment.

**Live Site**: https://KingofLaniakea.github.io/Lispo-1

## Features

- Responsive design for all devices
- Product catalog with category filtering
- Product detail pages with features and inquiry button
- Company introduction and contact pages
- Nature/outdoor themed backgrounds

## Product Categories

- Hunting Decoys (Goose, Duck, Swan)
- Garden Decorations
- Hunting Bags & Accessories
- Camouflage Blinds
- Ghillie Suits
- Tree Stands
- Camping Products
- Targets
- Fishing Tools
- Knives
- Bird Repelling Products
- Pet Products

## Tech Stack

- React 19
- React Router v7
- CSS3 with responsive design
- GitHub Pages hosting

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The site will open at http://localhost:3000

## Deployment

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

## Project Structure

```
├── public/
│   └── images/              # Product images
├── src/
│   ├── components/
│   │   ├── Header.js        # Navigation header
│   │   └── Footer.js        # Site footer
│   ├── pages/
│   │   ├── Home.js          # Homepage
│   │   ├── Products.js      # Product listing
│   │   ├── ProductDetail.js # Product details
│   │   ├── About.js         # About page
│   │   └── Contact.js       # Contact page
│   ├── data/
│   │   └── products.js      # Product data
│   ├── App.js               # Main app component
│   └── App.css              # Styles
└── package.json
```

## Customization

### Update Company Info
- `src/components/Header.js` - Company name
- `src/components/Footer.js` - Footer content
- `src/pages/About.js` - About page
- `src/pages/Contact.js` - Contact info

### Add Products
Edit `src/data/products.js`:
```javascript
{
  id: 27,
  name: "Product Name",
  category: "Category",
  description: "Description...",
  price: "Contact for Price",
  image: "/images/image.jpg",
  features: ["Feature 1", "Feature 2"]
}
```

## Contact

- **Company**: Hangzhou Lispo Sports Co., Ltd.
- **Email**: tpmam2026@gmail.com
- **Phone/WhatsApp**: +86 13705811629
- **Location**: Hangzhou, Zhejiang, China

## License

MIT
