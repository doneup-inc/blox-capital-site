## Blox Capital Site

Next.js 16 + React 19 marketing property for Blox Capital, the regulated operator of Blox Pay and Blox Wallet. The site mirrors the MU1 groundwork tracked in `/investor_messaging` (licensing plan, policy stack, timelines) and provides structured CTAs for investors, partners, and regulators.

### Structure

- `src/content/site.ts` — single source for hero copy, licensing grid, policy stack, investor metrics, and contact metadata.
- `src/app/_components/` — composable section components (Hero, PlatformOverview, ComplianceStack, etc.).
- `src/app/api/contact/route.ts` — lightweight route handler that receives contact form submissions (wire up to email/SaaS provider in production).
- `public/assets` — static imagery (logos, wordmarks, etc.).
- `src/lib/mu-data.ts` — pulls licensing timelines and update blurbs directly from `investor_messaging/pre_application_groundwork.md`; deploy the site from the monorepo root so those files exist at runtime.

### Developing

```bash
pnpm install
pnpm dev
```

The app runs at `http://localhost:3000`. Content edits generally happen inside `src/content/site.ts`; layout updates live with the components.

### Environment Variables

Create a `.env.local` with:

```
RESEND_API_KEY=your_resend_key
CONTACT_FORWARD_TO=greg@blox.capital,compliance@blox.capital
```

`CONTACT_FORWARD_TO` accepts a comma-delimited list; defaults to `compliance@blox.capital` if omitted.

### Contact Form Delivery

`POST /api/contact` uses [Resend](https://resend.com) for transactional email. Swap the implementation if your stack prefers SES/Postmark/etc.

### Deployment

The project assumes Vercel or another Node-compatible platform. Set `NODE_ENV=production` and run `pnpm build && pnpm start`. Add environment variables once the contact endpoint integrates with a provider.
