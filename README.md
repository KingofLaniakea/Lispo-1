# Hangzhou Lispo Sports Co., Ltd. - Company Website

A professional B2B website for hunting and outdoor equipment.

## Quick Start

### Local Development
```bash
cd E:\Company\company_claude
npm start
```
The site will open at http://localhost:3000

### Build for Production
```bash
npm run build
```

## Deploy to GitHub Pages

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Create a new repository named `company_claude` (or any name you prefer)
3. Keep it public for free GitHub Pages hosting

### Step 2: Update Homepage URL
Edit `package.json` and change the homepage to match your GitHub username:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/company_claude"
```

### Step 3: Initialize Git and Push
```bash
cd E:\Company\company_claude
git init
git add .
git commit -m "Initial commit - Lispo Sports website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/company_claude.git
git push -u origin main
```

### Step 4: Deploy to GitHub Pages
```bash
npm run deploy
```

### Step 5: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" > "Pages"
3. Under "Source", select "gh-pages" branch
4. Click "Save"
5. Your site will be live at: `https://YOUR_USERNAME.github.io/company_claude`

## Project Structure

```
company_claude/
├── public/
│   └── images/          # Product images
├── src/
│   ├── components/
│   │   ├── Header.js    # Navigation header
│   │   └── Footer.js    # Site footer
│   ├── pages/
│   │   ├── Home.js      # Homepage
│   │   ├── Products.js  # Product listing
│   │   ├── ProductDetail.js  # Product details
│   │   ├── About.js     # About page
│   │   └── Contact.js   # Contact page
│   ├── data/
│   │   └── products.js  # Product data
│   ├── App.js           # Main app component
│   └── App.css          # All styles
└── package.json
```

## Customization

### Update Company Information
- Edit `src/components/Header.js` - Company name in header
- Edit `src/components/Footer.js` - Footer info and contact
- Edit `src/pages/About.js` - About page content
- Edit `src/pages/Contact.js` - Contact information
- Edit `src/pages/Home.js` - Homepage content

### Add/Edit Products
Edit `src/data/products.js` to add or modify products:
```javascript
{
  id: 27,
  name: "New Product Name",
  category: "Category Name",
  description: "Product description...",
  price: "Contact for Price",
  image: "/images/your-image.jpg",
  features: ["Feature 1", "Feature 2", "Feature 3"]
}
```

### Add New Images
1. Place images in `public/images/`
2. Reference them in products.js as `/images/filename.jpg`

## Contact Information
- **Company**: Hangzhou Lispo Sports Co., Ltd.
- **Email**: tpmam2026@gmail.com
- **Phone/WhatsApp**: +86 13705811629
- **Location**: Hangzhou, Zhejiang, China
