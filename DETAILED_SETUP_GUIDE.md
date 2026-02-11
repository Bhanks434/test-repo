# 📖 DETAILED STEP-BY-STEP GUIDE TO ENABLE GITHUB PAGES

## STEP 1: Open GitHub Settings Page
1. Open this link in your browser:
   ```
   https://github.com/Bhanks434/test-repo/settings/pages
   ```

2. Or manually:
   - Go to: https://github.com/Bhanks434/test-repo
   - Click the **Settings** tab (top of page)
   - Look in the left sidebar for **Pages** and click it

---

## STEP 2: Find "Build and deployment" Section

Once on the Pages settings page, you'll see:

```
⚙️ Settings

👈 LEFT SIDEBAR:
   - General
   - Collaborators
   - Pages ← Click this
   - Environments
   - etc.
```

After clicking Pages, scroll down to find:

```
📦 Build and deployment

Source
[Dropdown showing current option]
```

---

## STEP 3: Click the Source Dropdown

Look for a box that says one of these:
- "Deploy from a branch"
- "GitHub Actions"
- "None"
- Just a button that says "Source"

**Click it** - a dropdown menu will appear

---

## STEP 4: Select "Deploy from a branch"

From the dropdown options, select:
```
✓ Deploy from a branch
```

After selecting this, two new dropdowns will appear below it:
- **Branch** dropdown
- **Folder** dropdown

---

## STEP 5: Select Branch "main"

Click the **Branch** dropdown and select:
```
✓ main
```

(This tells GitHub to deploy from your main branch)

---

## STEP 6: Select Folder "/"

Click the **Folder** dropdown and select:
```
✓ / (root)
```

(This tells GitHub to use the root directory where your `/out/` folder is)

---

## STEP 7: Save

Look for a blue **Save** button and click it.

You should see a confirmation message.

---

## STEP 8: Wait (2-3 Minutes)

GitHub will now:
1. ⏳ Process your settings
2. 🔨 Build your site
3. 📤 Upload to servers
4. ✅ Go live

---

## STEP 9: Check Status

After a few minutes, refresh the Pages settings page.

You should see:
```
✓ Your site is live at:
  https://Bhanks434.github.io/test-repo/
```

---

## STEP 10: Visit Your Site

Click the link or go to:
```
https://Bhanks434.github.io/test-repo/
```

Your Tempo Payment App should now load with full styling! 🎉

---

## 📸 SCREENSHOTS REFERENCE

### Before (What you'll see):
```
🔧 Settings > Pages

Source: [Deploy from a branch ▼]
Branch: [main ▼]
Folder: [/ (root) ▼]

[Save] button
```

### After (What you'll see):
```
✓ Your site is live at:
  https://Bhanks434.github.io/test-repo/
```

---

## 🆘 TROUBLESHOOTING

### "I don't see Pages in the sidebar"
- Make sure you're on: https://github.com/Bhanks434/test-repo
- Click **Settings** tab first
- Then scroll down the left sidebar

### "The dropdown won't open"
- Refresh the page (F5)
- Try a different browser
- Make sure you're logged in to GitHub

### "After clicking Save, nothing happens"
- The page might be loading - wait 10 seconds
- Then refresh (F5) to see the status

### "Still showing 'Deploy from a branch'"
- Click **Save** button again
- Make sure both dropdowns are set:
  - Branch: **main**
  - Folder: **/**

---

## ✅ FINAL CHECK

Once complete, you should be able to:
1. ✅ Visit: https://Bhanks434.github.io/test-repo/
2. ✅ See the Tempo Pay logo
3. ✅ See the dark-themed design
4. ✅ See "Connect Wallet" button
5. ✅ Navigate to all pages (Cards, Load, Marketplace)

---

**That's it! You're done!** 🎉
