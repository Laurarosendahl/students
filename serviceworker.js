const cacheName = 'cache-students'; 

//Når websitet indlæses, cache ressourcer nævnt i listen 
self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll([
                "/students/", 
                "/students/index.html",  
                "/students/javascript.js",
                "/students/members.json", 
                "/students/mystyle.css", 
                "/students/morten.png", 
                "/students/nina.png", 
                "/students/olivia.png",
                "/student/laura.png"
            ]);
        })
    )
})

//Hvis ressource ikke er tilgængelig online, så søg i cachen efter et match
self.addEventListener("fetch", function(event) {
    event.respondWith(
        fetch(event.request).catch(() =>
        caches.open(cacheName).then(cache=>cache.match(event.request)))
    )
})