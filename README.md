# PARCEL GitHub Pages Repo

This folder is the publishable repository root for the PARCEL project page.

## Exact URL: when `parcel-elastic-inference.github.io` is possible

GitHub’s rule is:

- a **user/org site** must live in a repository named `<owner>.github.io`
- the published URL is then `https://<owner>.github.io/`

So the exact URL

- `https://parcel-elastic-inference.github.io/`

is possible **only if the GitHub account or organization name is also**

- `parcel-elastic-inference`

and the repository name is

- `parcel-elastic-inference.github.io`

Source: [GitHub Pages docs](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)

## Recommended paths

### Option A: Exact URL

Create either:

- a GitHub **organization** named `parcel-elastic-inference`, or
- a GitHub **user account** named `parcel-elastic-inference`

Then create the repository:

- `parcel-elastic-inference.github.io`

Upload the contents of this folder to that repository root.

Your final site URL will be:

- `https://parcel-elastic-inference.github.io/`

### Option B: Use your existing GitHub account

If your GitHub username is something else, use a normal project repo instead, for example:

- `parcel-elastic-inference`

Then the site URL will be:

- `https://<your-username>.github.io/parcel-elastic-inference/`

The current site already uses relative asset paths, so it will work for either option.

## Repo Structure

```text
parcel-elastic-inference.github.io/
├── .gitignore
├── .nojekyll
├── README.md
├── index.html
├── script.js
├── styles.css
└── assets/
    └── figures/
```

## Publish Steps

1. Create the GitHub repository.
2. Upload every file from this folder into the repository root.
3. Push to the `main` branch.
4. Open the repository on GitHub.
5. Go to `Settings` → `Pages`.
6. Under `Build and deployment`, choose `Deploy from a branch`.
7. Select:
   - Branch: `main`
   - Folder: `/ (root)`
8. Save and wait a few minutes for the first deployment.

## Current placeholders

- Replace the `Code soon` button in `index.html` with your actual repository link once the code repo is public.
- If the paper is accepted later, update the venue line in the hero section.
- If you add a teaser video later, the hero section is the best place for a `Video` button.
