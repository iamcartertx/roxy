// supabase/functions/log-conversation/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js";

serve(async (req) => {
  const { body, tags } = await req.json();

  if (!body) {
    return new Response(JSON.stringify({ error: "Missing conversation body" }), { status: 400 });
  }

  const supabase = createClient(
    Deno.env.get("SB_URL")!,
    Deno.env.get("SB_SERVICE_ROLE_KEY")!
  );

  // Extract first sentence (used later for UI display)
const title = body.split(/(?<=[.?!])\s+/)[0]?.slice(0, 100) || "Untitled";

  const { error } = await supabase
  .from("conversations")
  .insert([{ body, tags, title }]);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ message: "Conversation saved successfully." }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
});