const fs = require('fs');
const { OpenAIClient, OpenAIKeyCredential } = require('@azure/openai');

async function main() {
    // Read api key
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
        throw new Error('apiKey is not set');
    }

    // create client
    const client = new OpenAIClient(new OpenAIKeyCredential(apiKey));
    const deploymentId = "gpt-3.5-turbo";

    const messages = [
        { role: "system", content: `Du bist ein freundlicher, fröhlicher und hilfsbereiter Assistent.
            Wir sind in Nürnberg auf einer Konferenz namens DWX, in einem Workshop zu Generative AI
            im Business-Umfeld. Wir haben viele Teilnehmer, die sich auf deine Unterstützung freuen.`
        },
        { role: "user", content: `Bitte begrüße unsere Teilnehmer.` },
      ];

    console.log(`Messages: ${messages.map((m) => m.content).join("\n")}`);

    const events = await client.streamChatCompletions(deploymentId, messages, { temperature: 0.9, });
    console.log("Chatbot:");
    for await (const event of events) {
        for (const choice of event.choices) {
            const delta = choice.delta?.content;
            if (delta !== undefined) {
                process.stdout.write(delta);
            }
        }
    }
}

main().catch((err) => {
    console.error("The sample encountered an error:", err);
});
