/* Service worker mínimo, a propósito.
   Está sólo para que Android ofrezca instalar la app: Chrome pide que exista
   un service worker con un manejador de fetch. NO guarda nada en caché — si
   guardara, volveríamos al problema de quedarnos con una versión vieja, que
   es justo lo que se acaba de arreglar con el aviso de APP_VER. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* directo a la red, sin caché propio */ });
