export async function GET() {
    const res = await fetch('https://doodle.com/sign-up-sheet/participate/2e77d6a5-d2b8-49dc-94ab-eea3224209fd/select');
    const html = await res.text();
  
    console.log('[HTML] Début du contenu brut de la page HTML :');

const sliceSize = 1000;
for (let i = 0; i < html.length; i += sliceSize) {
  console.log(`[HTML chunk ${i / sliceSize + 1}]:`, html.slice(i, i + sliceSize));
}

    const match = html.match(/<span[^>]*>\s*(\d+)\s*participants\s*<\/span>/i);
    const count = match ? parseInt(match[1]) : null;
  
    return Response.json({ participants: count });
  }