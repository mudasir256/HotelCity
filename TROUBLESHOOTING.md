# Troubleshooting Guide

If you're seeing errors, try these steps:

1. **Clear cache and restart:**
   ```bash
   rm -rf .next
   npm run dev
   ```

2. **Check the browser console** (F12) for any JavaScript errors

3. **Check the terminal** for compilation errors

4. **Verify you're accessing a valid room URL:**
   - Valid: http://localhost:3000/rooms/standard-double
   - Valid: http://localhost:3000/rooms/superior-double
   - Invalid: http://localhost:3000/rooms/invalid-id

5. **Common room IDs:**
   - standard-double
   - superior-double
   - family-room
   - apartment
   - pet-friendly-room
   - allergy-free-room

If you're still getting errors, please share:
- The exact error message from the terminal
- The exact error message from the browser console (F12)
- Which page you're trying to access

