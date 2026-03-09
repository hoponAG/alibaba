# Deployment Guide for Ali Baba Snackbar

Follow these steps to deploy the Ali Baba Snackbar V4 Premium website using your hosting provider.

## 1. Prerequisites
- A hosting account (e.g., Netlify, Vercel, Hostinger, or a standard FTP server).
- Your files should be localized in a public folder (the root of this repository).

## 2. GitHub Deployment
Your website is already pushed to GitHub: `https://github.com/hoponAG/alibaba.git`.

### Automatic Deployment (Recommended)
You can link this GitHub repository to **Netlify** or **Vercel** for automatic continuous deployment. 
1. Log in to Netlify/Vercel.
2. Choose "Import from Git".
3. Select `alibaba` repository.
4. Set the build command to `(none or empty)` since it's a static HTML site.
5. Set the publish directory to `./`.
6. Deploy!

## 3. Manual FTP/SFTP Deployment
If you are using a traditional web hosting provider:
1. Connect via FileZilla or similar FTP client.
2. Upload the following files to your `public_html` or `www` directory:
   - `index_v4.html` (Rename this to `index.html` for it to be your homepage!)
   - `css/` folder
   - `js/` folder
   - `Assets/` folder

## 4. Final Verification
- Check if all images in the `Assets` folder are loading correctly.
- Verify that the WhatsApp button links to your phone number: `+32 490 46 65 48`.
- Ensure all GSAP animations (ScrollTrigger) are smooth on both mobile and desktop.

---
*Created with Ali Baba Snackbar V5 Framework*
