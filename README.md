📦 project/
├── 📁 app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── (public-pages)/           # Public routes
│   │   ├── login/
│   │   ├── register/
│   │   └── forgot-password/
│   ├── dashboard/                # Private pages (protected)
│   │   ├── layout.tsx            # Layout riêng của dashboard
│   │   ├── page.tsx
│   │   ├── analytics/
│   │   └── users/
│   ├── api/                      # Next.js API Routes (Server functions)
│   │   ├── auth/
│   │   └── user/
│   └── (marketing)/              # Group routes
│       ├── about/
│       └── contact/
│
├── 📁 components/
│   ├── ui/                       # UI components (button, modal...)
│   ├── layout/                   # Header, Footer, Sidebar...
│   ├── forms/                    # Form components
│   └── shared/                   # Component dùng chung
│
├── 📁 hooks/
│   ├── useAuth.ts
│   ├── useDebounce.ts
│   └── useTheme.ts
│
├── 📁 lib/
│   ├── axios.ts                  # Config axios
│   ├── fetcher.ts                # useSWR fetcher
│   ├── auth.ts                   # JWT, cookies function
│   ├── utils.ts                  # Helper chung
│   ├── validation.ts             # Yup/Zod schemas
│   ├── constants.ts              # Các biến cố định
│   └── handler.ts                # Error handler
│
├── 📁 services/                  # Gọi API theo module
│   ├── auth.service.ts
│   ├── user.service.ts
│   └── product.service.ts
│
├── 📁 store/                     # Zustand, Redux, Jotai...
│   ├── user.store.ts
│   └── theme.store.ts
│
├── 📁 types/                     # TypeScript types + interfaces
│   ├── auth.d.ts
│   ├── user.d.ts
│   └── common.d.ts
│
├── 📁 public/                    # Image tĩnh
│   ├── logo.png
│   └── icons/
│
├── 📁 styles/
│   ├── globals.css
│   └── variables.css / scss
│
├── 📁 middleware.ts              # Auth, redirect...
├── 📁 next.config.js
├── 📁 tsconfig.json
└── 📁 package.json

Package
- Shadcn UI