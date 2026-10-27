# Zaid Shaikh – Portfolio Website

A simple portfolio built with plain HTML and CSS (plus a tiny JavaScript file for the phone menu).
No frameworks, no paid services.

```
portfolio/
├── index.html      ← all the content (text, links, sections)
├── style.css       ← colours, fonts, layout, mobile styles
├── script.js       ← opens/closes the menu on phones
├── images/
│   └── profile.jpg ← your photograph
└── README.md       ← these instructions
```

## 1. Open the website on your computer

1. Unzip the folder.
2. Double-click `index.html`. It opens in your browser. No internet or server is needed.

## 2. Change your photograph

1. Pick a clear, front-facing photo (portrait orientation works best, about 800 × 1000 pixels).
2. Rename it `profile.jpg`.
3. Put it in the `images` folder and replace the old file.

The image is cropped automatically (not stretched). If your face is cut off, open `style.css`,
find `.hero-photo img` and change `object-position: center top;` to `center center;`.

## 3. Edit the content

Open `index.html` in Notepad, VS Code, or any text editor. Each section starts with a comment such as
`<!-- ===== PROJECTS ===== -->`. Change the text between the tags and save the file.

| What you want to do | Where to do it |
| --- | --- |
| Change the LinkedIn link | Search for `linkedin.com/in/zaid-shaikh-it` (2 places: hero and contact) |
| Link the exact project repository | In Project 1, change the "View on GitHub" `href` to `https://github.com/zaidshaikh2006/Smart-Food-Expiry` (or your repository URL) |
| Add a certificate link | Copy the example button in the comment above the certification cards and paste your URL |
| Mark Project 2 as finished | Change `status-wip` to `status-done` and the text to `Completed`. Also remove the yellow "work in progress" note and update the description with your real results |
| Add a new project | Copy a whole `<article class="card project"> … </article>` block and edit it |
| Change colours | Edit the values at the top of `style.css` inside `:root { … }` |

Tip: only add things that are true. Add new skills, certificates, or results after you have actually completed them.

## 4. Upload to GitHub (website method, no commands)

1. Sign in at https://github.com and click **New repository**.
2. Name it `portfolio` and set it to **Public**. Click **Create repository**.
3. Click **uploading an existing file**.
4. Drag in `index.html`, `style.css`, `script.js`, `README.md`, and the `images` folder. Wait for the upload to finish.
5. Click **Commit changes**.

## 5. Upload to GitHub (Git commands)

```bash
cd portfolio
git init
git add .
git commit -m "Add portfolio website"
git branch -M main
git remote add origin https://github.com/zaidshaikh2006/portfolio.git
git push -u origin main
```

## 6. Publish it online with GitHub Pages (free)

1. Open your `portfolio` repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose branch **main** and folder **/ (root)**, then click **Save**.
5. Wait 1 to 3 minutes and refresh. GitHub shows your live link:

   `https://zaidshaikh2006.github.io/portfolio/`

Submit that link for your assignment. After any later change, upload the changed file again and the site updates automatically.

## 7. Before you submit

- Open the live link on your phone and your computer.
- Click Home, About, Skills, Projects, Certifications, Education, and Contact in the menu.
- Click the Email, GitHub, and LinkedIn links to confirm they open the right place.
