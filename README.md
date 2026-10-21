# My Personal Space

A responsive, dark-themed personal website built with HTML, CSS, and JavaScript.

## Preview locally
1. Download or unzip this folder.
2. Open `index.html` in a browser.
3. Edit the text in `index.html` to personalize your About, interests, journey, and project sections.
4. Edit `posts.js` to add or update blog cards.

## Add a blog post (simple file-based method)
Open `posts.js`, copy one object inside `blogPosts`, and edit its fields:

- `title`: the post title
- `date`: date in `YYYY-MM-DD` format
- `category`: `Life`, `Learning`, or `Reflections`
- `excerpt`: short preview shown on the card
- `body`: text shown when a reader opens the post

Save the file and push the change to GitHub. GitHub Pages will update the site after deployment.

## Keep longer drafts in Markdown
Use the `blog/` folder for longer drafts, for example `blog/my-first-week.md`.
GitHub Pages will not automatically turn arbitrary Markdown files in this folder into matching blog pages with this plain HTML setup. For now, copy the public post text into `posts.js` too. If you later want automatic Markdown-to-blog pages, we can migrate the site to Astro.

## Publish with GitHub Pages
1. Sign in to GitHub and create a new **public** repository, e.g. `my-personal-space`.
2. Upload `index.html`, `style.css`, `script.js`, `posts.js`, and the `blog/` folder to the repository root. Keep the filenames unchanged.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`, then click **Save**.
6. Wait a few minutes and revisit Settings → Pages for the published URL. It will usually look like `https://YOUR-USERNAME.github.io/my-personal-space/`.
7. If you want the shorter URL `https://YOUR-USERNAME.github.io/`, the repository must be named exactly `YOUR-USERNAME.github.io`.

## Do I need a database?
No, not for this first version. The website is static: its content lives in files in your repository. This is free and simple, but adding posts means editing `posts.js` and committing the change.

A database and publishing dashboard can come later. For that, you would need a backend or a service such as Supabase, plus authentication and access rules. Never put private API keys in browser-side JavaScript. GitHub Pages alone does not run server-side code.

## Personalize before publishing
- Replace generic copy with your real story and interests.
- Add your GitHub profile link to the project spotlight.
- Remove any sample blog posts you do not want.
- Do not publish private details, passwords, private conversations, or information about other people without permission.
