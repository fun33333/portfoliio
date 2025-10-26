@echo off
REM Quadgentics Portfolio - Unused Files Cleanup Script (Windows)
REM This script removes confirmed unused files and components

echo 🧹 Starting cleanup of unused files...
echo.

REM 1. Remove temp fonts and archives
echo 📦 Removing temporary fonts and archives...
if exist "public\temp-fonts" rmdir /s /q "public\temp-fonts"
if exist "public\fonnts.com-151075.zip" del /f "public\fonnts.com-151075.zip"
if exist "public\about .jpg" del /f "public\about .jpg"
if exist "public\Hero sec.jpg" del /f "public\Hero sec.jpg"
if exist "public\only logo colour.png" del /f "public\only logo colour.png"

echo ✅ Removed temp files
echo.

REM 2. Remove unused CSS modules
echo 🎨 Removing unused CSS modules...
if exist "components\AiCodeReviews.module.css" del /f "components\AiCodeReviews.module.css"

echo ✅ Removed unused CSS
echo.

REM 3. Remove unused UI components
echo 🗑️  Removing unused UI components...
if exist "components\ui\drawer.tsx" del /f "components\ui\drawer.tsx"

echo ✅ Removed unused components
echo.

REM 4. Remove any remaining zip files
echo 🧼 Final cleanup...
for /r public %%i in (*.zip) do del /f "%%i"

echo ✅ Removed zip files
echo.

echo ✨ Cleanup complete!
echo.
echo 📊 Files removed:
echo   - Temp fonts directory
echo   - Font archive files
echo   - Unused CSS modules
echo   - Unused UI components
echo   - Duplicate/placeholder images
echo.
echo 💡 Note: Bento components and hidden components (SocialProof, etc.) were kept
echo    for potential future use in your project.

pause

