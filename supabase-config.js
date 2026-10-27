/* CampusConnect backend configuration.
   Create a Supabase project, then replace these placeholders with the Project URL and anon/public key.
   NEVER put a service_role key or database password in browser code. */
window.CAMPUSCONNECT_SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL";
window.CAMPUSCONNECT_SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_PUBLIC_KEY";
window.CAMPUSCONNECT_BACKEND_READY = Boolean(
  window.CAMPUSCONNECT_SUPABASE_URL.startsWith("https://") &&
  !window.CAMPUSCONNECT_SUPABASE_URL.includes("YOUR_") &&
  window.CAMPUSCONNECT_SUPABASE_ANON_KEY &&
  !window.CAMPUSCONNECT_SUPABASE_ANON_KEY.includes("YOUR_")
);
