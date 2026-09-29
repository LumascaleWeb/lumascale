// Service worker minimal — sert uniquement a satisfaire la condition
// technique de Chrome pour autoriser l'installation de l'app (icone
// "Installer"). L'app a besoin d'une connexion internet pour fonctionner
// (Supabase, Bluetooth), donc ce fichier ne fournit pas de vrai mode
// hors-ligne — juste un gestionnaire "fetch" minimal, qui est la seule
// exigence technique verifiee par Chrome pour l'installabilite.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => new Response("Hors ligne", { status: 503 }))
  );
});
