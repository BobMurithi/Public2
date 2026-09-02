# Bobsave — Workflow Automation Platform

> **Automate your business. Save time. Grow smarter.**
> Built with HTML, CSS, JavaScript · Powered by n8n · Hosted on Cloudflare Pages

---

## 🌐 Live Site
**[bobsave.com](https://bobsave.com)** — Nairobi, Kenya

---

## 📁 Project Structure

```
bobsave-site/
├── index.html              # Home page
├── services.html           # Full services catalog (8 workflow types)
├── blog.html               # AI/Tech news blog (auto-updated via n8n)
├── dashboard.html          # Client workflow dashboard
├── admin.html              # Admin panel (password protected)
├── assets/
│   ├── images/
│   │   ├── bobsave-logo.svg          # Main logo (light bg)
│   │   ├── bobsave-logo-dark.svg     # Dark background logo
│   │   ├── bobsave-workflow-timeline.png
│   │   └── [pexels images...]
│   ├── data/
│   │   └── blog-feed.json            # Auto-updated by n8n every 6hrs
│   ├── bootstrap/                    # Bootstrap 5 CSS/JS
│   ├── theme/                        # Mobirise theme CSS/JS
│   ├── mobirise/                     # Additional Mobirise CSS
│   ├── embla/                        # Embla carousel
│   ├── dropdown/                     # Navbar dropdown
│   ├── smoothscroll/                 # Smooth scroll
│   └── ytplayer/                     # YouTube player
└── README.md
```

---

## 🤖 n8n Automation Workflows Required

| Workflow | Trigger | What it does |
|---|---|---|
| **Blog Auto-Update** | Schedule (every 6hrs) | Pulls RSS feeds → GPT rewrites → updates `blog-feed.json` → pushes to GitHub |
| **Lead Capture** | Webhook `/webhook/new-lead` | Receives form/WhatsApp lead → logs to Google Sheets → sends WhatsApp alert to admin |
| **Client Auth** | Webhook `/webhook/auth` | Validates client email+ID → returns client data for dashboard |
| **Payment Confirmation** | M-Pesa Daraja webhook | Confirms payment → updates client record → sends receipt via WhatsApp |
| **Newsletter Subscribe** | Webhook `/webhook/newsletter` | Saves subscriber → sends welcome email/WhatsApp |
| **Support Ticket** | Webhook `/webhook/support` | Receives ticket → notifies admin on WhatsApp → logs to sheet |
| **Blog Refresh (Manual)** | Webhook `/webhook/refresh-blog` | Manually trigger blog refresh from admin panel |
| **Payment Reminder** | Schedule (monthly -3 days) | Checks upcoming renewals → sends WhatsApp reminders to clients |

---

## 🎨 Brand Colours

| Role | Hex | Usage |
|---|---|---|
| Primary Green | `#9fe870` | Buttons, accents, CTAs |
| Green Dark | `#264d0c` | Button text, dark accents |
| Pink | `#ffd7ef` | Secondary highlights |
| Yellow | `#ffea64` | Result boxes, warnings |
| Teal | `#a0e2e1` | Info, tags, teal accents |
| Dark Brown | `#3a341c` | Sidebar, dark sections |
| Dark | `#232323` | Body text |
| Sage | `#edefeb` | Backgrounds, cards |

---

## 🔗 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, Vanilla JS, Bootstrap 5 |
| Fonts | Inter Tight (Google Fonts) |
| Carousel | Embla |
| Automation Engine | n8n (self-hosted) |
| AI | OpenAI GPT-4 |
| Payments | M-Pesa Daraja API + Stripe |
| Messaging | WhatsApp Business API |
| Hosting | Cloudflare Pages |
| DNS | Cloudflare |
| Auth (admin/dashboard) | Cloudflare Access (Zero Trust) |
| CRM / DB | Google Sheets (phase 1) → Airtable/Supabase (phase 2) |

---

## 🚀 Deployment

This site is deployed automatically via **Cloudflare Pages**.

Every `git push` to `main` triggers a new deploy (~30 seconds).

```bash
# Make changes, then:
git add .
git commit -m "Your change description"
git push
# → Cloudflare Pages auto-deploys
```

### Branch Strategy
| Branch | Purpose |
|---|---|
| `main` | Production — live site |
| `dev` | Development / staging |

---

## ⚙️ Environment Variables (Cloudflare Pages)

Set these in **Cloudflare Dashboard → Pages → Settings → Environment Variables**:

```
N8N_BASE_URL=https://n8n.yourdomain.com
N8N_WEBHOOK_SECRET=your_secret
MPESA_CONSUMER_KEY=...
MPESA_CONSUMER_SECRET=...
OPENAI_API_KEY=sk-...
WHATSAPP_API_TOKEN=...
```

---

## 📞 Contact

**Bobsave** — Workflow Automation  
📍 Nairobi, Kenya  
📧 bobomurithi@gmail.com  
📱 +254 702 505 946  
💬 [WhatsApp](https://wa.me/254702505946)

---

## 📄 License

Private — All rights reserved © 2025 Bobsave
