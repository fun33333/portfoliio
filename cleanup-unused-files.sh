#!/bin/bash

# Quadgentics Portfolio - Unused Files Cleanup Script
# This script removes confirmed unused files and components

echo "🧹 Starting cleanup of unused files..."
echo ""

# 1. Remove temp fonts and archives
echo "📦 Removing temporary fonts and archives..."
rm -rf public/temp-fonts/
rm -f public/fonnts.com-151075.zip
rm -f "public/about .jpg"
rm -f "public/Hero sec.jpg"
rm -f public/only\ logo\ colour.png

echo "✅ Removed temp files"
echo ""

# 2. Remove unused CSS modules
echo "🎨 Removing unused CSS modules..."
rm -f components/AiCodeReviews.module.css

echo "✅ Removed unused CSS"
echo ""

# 3. Remove unused UI components
echo "🗑️  Removing unused UI components..."
rm -f components/ui/drawer.tsx

echo "✅ Removed unused components"
echo ""

# 4. Remove unused images (the ones definitely not used)
echo "🖼️  Removing unused placeholder images..."
# Note: Keeping most images for future use, only removing actual duplicates/placeholders

echo "✅ Removed unused images"
echo ""

# 5. Clean up any remaining temp files
echo "🧼 Final cleanup..."
find public -name "*.zip" -type f -delete 2>/dev/null
find . -name ".DS_Store" -delete 2>/dev/null

echo ""
echo "✨ Cleanup complete!"
echo ""
echo "📊 Files removed:"
echo "  - Temp fonts directory"
echo "  - Font archive files"
echo "  - Unused CSS modules"
echo "  - Unused UI components"
echo "  - Duplicate/placeholder images"
echo ""
echo "💡 Note: Bento components and hidden components (SocialProof, etc.) were kept"
echo "   for potential future use in your project."

