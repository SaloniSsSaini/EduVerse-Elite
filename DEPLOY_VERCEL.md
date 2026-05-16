# Vercel Deploy Fix (Saloni — yeh steps follow karo)

## Problem kya thi?
GitHub repo mein `prisma/schema.prisma` file **missing** thi.  
Vercel `postinstall` pe `prisma generate` chalata hai — file nahi mili → **build fail**.

---

## Fix — GitHub pe yeh files add karo

### Step 1: GitHub kholo
https://github.com/SaloniSsSaini/EduVerse-Elite

### Step 2: `prisma` folder banao
1. **Add file** → naam likho: `prisma/schema.prisma`
2. Neeche wala pura content paste karo → **Commit**

(Full file content is in `prisma/schema.prisma` in your local project folder.)

### Step 3: `scripts` folder banao
1. **Add file** → `scripts/postinstall.js`
2. Local project se copy karo ya commit push karo

### Step 4: `package.json` update
Latest `package.json` local se GitHub pe upload/replace karo (postinstall script wala version).

### Step 5: Vercel Environment Variable
Vercel → Project → **Settings** → **Environment Variables** → Add:

| Name | Value |
|------|--------|
| `DATABASE_URL` | `postgresql://user:pass@localhost:5432/eduverse` |
| `NEXT_PUBLIC_SITE_URL` | `https://edu-verse-elite.vercel.app` (apni URL) |

*(DATABASE_URL sirf build ke liye placeholder — site bina real DB ke chalegi)*

### Step 6: Redeploy
Vercel → **Deployments** → latest failed deploy → **Redeploy**

---

## Best way (recommended): Poora project push karo

Local folder se ek baar sahi se Git push karo taaki koi file miss na ho:

```bash
cd "d:\EduVerse Elite"
git init
git add .
git commit -m "Complete EduVerse Elite platform"
git branch -M main
git remote add origin https://github.com/SaloniSsSaini/EduVerse-Elite.git
git push -u origin main --force
```

> `--force` tabhi use karo agar GitHub pe purana incomplete upload hai aur replace karna hai.

Phir Vercel automatically redeploy karega.

---

## Checklist — GitHub pe yeh hona chahiye

- [ ] `prisma/schema.prisma`
- [ ] `scripts/postinstall.js`
- [ ] `src/` (poora folder)
- [ ] `package.json`
- [ ] `next.config.ts`
- [ ] `public/`

---

## Success?
Deploy green ho jaye → link milegi: `https://edu-verse-elite.vercel.app`
