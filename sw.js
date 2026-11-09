// Brasserie Stéphanoise – catalogue pro : service worker minimal (installation de l'appli, pas de cache des tarifs).
self.addEventListener("install", function(){ self.skipWaiting(); });
self.addEventListener("activate", function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function(e){
  if (e.request.mode !== "navigate") return;
  e.respondWith(fetch(e.request).catch(function(){
    return new Response('<meta charset="utf-8"><p style="font-family:Arial;padding:40px;text-align:center">Pas de connexion internet.<br>Reconnectez-vous puis rouvrez l’appli.</p>', {headers: {"Content-Type": "text/html; charset=utf-8"}});
  }));
});
