// supabase/functions/exchange-token/index.ts

import { serve } from "https://deno.land/std@0.177.0/http/server.ts"

serve(async (req) => {
  const { code } = await req.json()
  if (!code) {
    return new Response(JSON.stringify({ error: "Missing 'code'" }), { status: 400 })
  }

  const clientId = Deno.env.get("WRIKE_CLIENT_ID")
  const clientSecret = Deno.env.get("WRIKE_CLIENT_SECRET")
  const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")
  const supabaseUrl = Deno.env.get("SUPABASE_URL")

  if (!clientId || !clientSecret || !supabaseKey || !supabaseUrl) {
    return new Response(JSON.stringify({ error: "Missing environment variables" }), { status: 500 })
  }

  const tokenRes = await fetch(`https://www.wrike.com/oauth2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "authorization_code",
      code
    })
  })

  const tokenData = await tokenRes.json()
  if (!tokenRes.ok) {
    return new Response(JSON.stringify({ error: "Token exchange failed", details: tokenData }), { status: 400 })
  }

  const { access_token, refresh_token, expires_in } = tokenData
  const expires_at = new Date(Date.now() + expires_in * 1000).toISOString()

  const insertRes = await fetch(`${supabaseUrl}/rest/v1/wrike_tokens`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": supabaseKey,
      "Authorization": `Bearer ${supabaseKey}`
    },
    body: JSON.stringify({
      access_token,
      refresh_token,
      expires_at
    })
  })

  if (!insertRes.ok) {
    const insertErr = await insertRes.text()
    return new Response(JSON.stringify({ error: "Failed to store token", details: insertErr }), { status: 500 })
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 })
})
