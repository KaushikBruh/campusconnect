(() => {
  const ready = window.CAMPUSCONNECT_BACKEND_READY && window.supabase;
  const client = ready ? window.supabase.createClient(window.CAMPUSCONNECT_SUPABASE_URL, window.CAMPUSCONNECT_SUPABASE_ANON_KEY) : null;
  window.ccAuth = {
    ready: Boolean(client), client,
    async user() { if (!client) return null; const {data:{user}} = await client.auth.getUser(); return user || null; },
    async profile() { const user = await this.user(); if (!user) return null; const {data,error}=await client.from('profiles').select('*').eq('id',user.id).maybeSingle(); if(error) throw error; return data; },
    async requireUser(redirect='login.html') { if(!client){this.showSetupNotice();return null;} const user=await this.user(); if(!user){location.href=redirect;return null;} return user; },
    async requireAdmin() { const user=await this.requireUser('admin-login.html'); if(!user)return null; const profile=await this.profile(); if(profile?.role!=='admin'){location.href='student-dashboard.html?denied=1';return null;} return user; },
    async signOut() { if(client) await client.auth.signOut(); location.href='index.html'; },
    showSetupNotice() { document.querySelectorAll('[data-backend-notice]').forEach(el=>{el.classList.remove('hidden');el.textContent='Backend setup required: configure the Supabase Project URL and anon/public key in supabase-config.js, then run supabase-schema.sql. Do not enter real personal information until setup is complete.';}); document.querySelectorAll('[data-auth-submit]').forEach(b=>{b.disabled=true;b.title='Configure the backend first';}); }
  };
  document.addEventListener('DOMContentLoaded', async () => {
    if(!client) { window.ccAuth.showSetupNotice(); return; }
    document.querySelectorAll('[data-logout]').forEach(b=>b.addEventListener('click',()=>window.ccAuth.signOut()));
    const user=await window.ccAuth.user();
    document.querySelectorAll('[data-user-email]').forEach(el=>el.textContent=user?.email||'Guest');
  });
})();