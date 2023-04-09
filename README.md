## ChatNet

### Technologies Used
- [`NextJS / TypeScript`](https://nextjs.org/) : Front-end
- [`TailwindCSS`](https://tailwindcss.com/) : Styling
- [`Redis`](https://redis.io/) : Database

##### Others
- [`Upstash`](https://upstash.com/) : Manage Redis database
- [`NextAuth`](https://next-auth.js.org/) : Authentication
- [`Class Variance Authority`](https://cva.style/) : Create type-safe component variants
- [`clsx`](https://github.com/lukeed/clsx#readme) : construct classnames conditionally
- [`tailwind-merge`](https://www.npmjs.com/package/tailwind-merge) : Merge tailwind classes efficiently.
- [`Lucide Icon Library`](https://lucide.dev/docs/lucide-react) : Tree-shakeable icons

### Notes
-  Decided to use Redis because it would allow for very quick almost-instant realtime chat.
- Using  JSON Web Tokens (JWT) to store sessions instead of storing session data in database