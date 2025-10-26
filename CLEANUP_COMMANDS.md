# 🧹 Cleanup Commands - Remove Unused Files

## Quick Start (Windows CMD)

### Option 1: Run the Script
```bash
# Just double-click or run:
cleanup-unused-files.bat
```

### Option 2: Copy-Paste These Commands
```bash
REM Remove temp fonts and archives
rmdir /s /q "public\temp-fonts"
del /f "public\fonnts.com-151075.zip"
del /f "public\about .jpg"
del /f "public\Hero sec.jpg"
del /f "public\only logo colour.png"

REM Remove unused CSS modules
del /f "components\AiCodeReviews.module.css"

REM Remove unused UI components
del /f "components\ui\drawer.tsx"
```

### Option 3: Manual Commands (Git Bash or WSL)
```bash
# Remove temp fonts and archives
rm -rf public/temp-fonts/
rm -f public/fonnts.com-151075.zip
rm -f "public/about .jpg"
rm -f "public/Hero sec.jpg"
rm -f "public/only logo colour.png"

# Remove unused CSS modules
rm -f components/AiCodeReviews.module.css

# Remove unused UI components
rm -f components/ui/drawer.tsx
```

---

## 📝 What Gets Removed

### ✅ Safe to Delete (Confirmed Unused)
- `public/temp-fonts/` - Duplicate font folder
- `public/fonnts.com-151075.zip` - Font archive
- `public/about .jpg` - Unused placeholder
- `public/Hero sec.jpg` - Unused hero image
- `public/only logo colour.png` - Duplicate logo
- `components/AiCodeReviews.module.css` - Unused CSS module
- `components/ui/drawer.tsx` - Unused component (already removed vaul from package.json)

### ⚠️ Keep These (Hidden but Potentially Useful)
- All Bento components in `components/bento/`
- `SocialProof`, `DashboardPreview`, `PricingSection` components
- All unused images in `public/images/`
- Alternative logos in `public/logos/`

---

## 🚀 After Cleanup

1. **Run the cleanup script**
2. **Test your build**: `npm run build`
3. **Commit changes**:
```bash
git add .
git commit -m "chore: Remove unused files and components"
git push
```

---

## 💡 Expected Results

- ✅ Build should be slightly faster
- ✅ ~5-10 MB storage saved
- ✅ Cleaner codebase
- ✅ No functionality changes

---

## ⚠️ Important Notes

1. **Backup first** (optional): `git branch backup-before-cleanup`
2. **Test after cleanup**: Make sure the site still works
3. **Don't delete the hidden components** - They might be useful later
4. **Bento components kept** - They're good for future redesigns

---

## 🎯 Summary

**Files to remove**: 7 items (~5-10 MB)  
**Time to cleanup**: < 1 minute  
**Risk level**: Low (all files are confirmed unused)

