import { PROFILE_CONTEXT } from "@/lib/profile";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message?.trim()) {
      return Response.json({ error: "Message is required" }, { status: 400 });
    }

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        max_tokens: 180,
        messages: [
          { role: "system", content: PROFILE_CONTEXT },
          { role: "user", content: message },
        ],
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Groq error:", res.status, errText);
      return Response.json({ error: "AI service error" }, { status: 500 });
    }

    const data = await res.json() as { choices: { message: { content: string } }[] };
    const reply = data.choices?.[0]?.message?.content ?? "Sorry, I couldn't get a response.";
    return Response.json({ reply });

  } catch (err) {
    console.error("Chat route error:", err);
    return Response.json({ error: String(err) }, { status: 500 });
  }
}
