# wiki

Standards, Research and Documentation for Vellum-IO.

## Development

Run development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

## Deployment to GitHub Pages

This project includes a GitHub Actions workflow that automatically builds and deploys the documentation to GitHub Pages.

### Setup

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Push to main branch**: The workflow will automatically trigger on pushes to the `main` branch

3. **Manual deployment**: You can also trigger the workflow manually from the Actions tab

Your documentation will be available at:

- `https://<username>.github.io/<repository-name>/` (if not using a custom domain)
