'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "fce25eee437e165c703f0bf89154143a",
"version.json": "966de5ad56bf473fa3a715816b575196",
"index.html": "5d346d2d306b7f58835cd2c91456b8c9",
"/": "5d346d2d306b7f58835cd2c91456b8c9",
"favicon-16x16%20copy.png": "84471c56cd3ddd7e305657140b7e9236",
"main.dart.js": "fce318bb3cfd3a7612eb72c364f2c910",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"icons/android-icon-192x192.png": "c6e237208f0b2b41d3664d33e1d6d8d4",
"icons/android-icon-72x72.png": "eff2235904ea9733d45121413365c3ad",
"icons/android-icon-96x96.png": "74693a517ec0c0c34796f8eee653cced",
"icons/android-icon-36x36.png": "bb6219c302a3fb69d2710ff127507620",
"icons/android-icon-48x48.png": "841c6019d6bd3e31a0b1b0208d7fdcd2",
"icons/android-icon-144x144.png": "f3592f43e9e5a4bca08c808803b2d20d",
"manifest.json": "c435d8864a011cfb865e0a530c3ee289",
"assets/AssetManifest.json": "e2bf51febba94688115a63dbecc6b5a4",
"assets/NOTICES": "27e84c594bad439fe627ff9e471b50fa",
"assets/FontManifest.json": "06e2f8728e1fc47fa18656cba008916a",
"assets/AssetManifest.bin.json": "285109390e84163a1bfb8a6c5b39b649",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0160fee2e783771457b8c1cdd628ddcb",
"assets/fonts/MaterialIcons-Regular.otf": "5d79516351676190b7c3ea59198e0bac",
"assets/assets/images/Fees.png": "7872415096219030cb5c299bd4bf6642",
"assets/assets/images/HozmaTech.png": "e54cddbaa312f81bb733087af1a8c88e",
"assets/assets/images/MehatarContainer.png": "5c1055350b367e1f051356168bdae0c4",
"assets/assets/images/QuestionIcon.png": "b22b01ab8e9dce2939f10cb9f6bd6f6f",
"assets/assets/images/download.png": "993de9706478f7f04e761e164c56bfc4",
"assets/assets/images/NoFees.png": "7872415096219030cb5c299bd4bf6642",
"assets/assets/images/MobileMockUp%25202.png": "bad904d2233c12a96e18dbe90e4452d7",
"assets/assets/images/KFU.png": "75d1b948e45cdbbaa00ac1f112ed0b6c",
"assets/assets/images/tiktok1.png": "81e219a6653011558ff6ff6f5d8063ac",
"assets/assets/images/Goals.png": "3e2477f5210cbd7cbe8849a183b216eb",
"assets/assets/images/whySayeer.gif": "cd88a54ca54efa067f258d3e30bb5e36",
"assets/assets/images/give.png": "a708dc5aaddeca6ad1e9ed278446dd5e",
"assets/assets/images/EasySearch.png": "a6f2e8027165af9c4edef2a89a6da599",
"assets/assets/images/CardsDesktop.png": "06065fd7435c6340564476cf2fe2892f",
"assets/assets/images/Mehtar_desktop.png": "298e6f28e8d72cb13795ba826e72c701",
"assets/assets/images/gov.png": "2dbbc3101701421ad45900e0b9cd5899",
"assets/assets/images/Monshaat.png": "0277d0563ec180269c60e07f11e1011e",
"assets/assets/images/background_image.png": "500e66f64f1edd1a8ba4bb59913d118b",
"assets/assets/images/search.png": "29c5ebd4c250f24f513fb580593c2ef0",
"assets/assets/images/tiktok.png": "4bcecf17d4ef3b2a4294f3daa0f542af",
"assets/assets/images/Desktop_cards2.png": "ea2e59e8f33d6414f1f3575ea403fc46",
"assets/assets/images/NTDP.png": "b7d9476ad9f4db3452e4aa94e6d42dea",
"assets/assets/images/small_company.png": "9b570493b2bdeea340aae62631fb9013",
"assets/assets/images/Desktop_cards.png": "aa24d36d8aaeb85dec487d86c6ae81e0",
"assets/assets/images/linkdin.png": "50cec25c55f46011ac40db75469c87d8",
"assets/assets/images/small_mehtar.png": "6180ef6b5c8863a575b093827d40bde3",
"assets/assets/images/logo.png": "6a3a9b88ebebf4a6f75ea7224eba05c3",
"assets/assets/images/Mehtar.png": "c4855cf82a96c57b9847bf88ab8651cb",
"assets/assets/images/DesktopCards.png": "8a4af3d5c90c6399c1c3a7e9a7933f44",
"assets/assets/images/mock.png": "738427344a4b453cb94ab1e18963b2db",
"assets/assets/images/twitter.png": "5a128d65c6ece97d70a7cfd0b6cabcd5",
"assets/assets/images/NameAndLogo.png": "f20a62f2154df128fecf01900011815b",
"assets/assets/images/CodeLab.png": "f7e9aed8ab479fdc95732a6b32f53abf",
"assets/assets/images/business.png": "80b365156ea41024e1f661f47a52ce10",
"assets/assets/images/Success.png": "2dc722913335844033751ed41c96baa2",
"assets/assets/images/SayerLogo.png": "42679b0ee220091aec643450a1116af0",
"assets/assets/images/small_cars.png": "8209a20678d81b5c7ea9563bf164e171",
"assets/assets/images/small_offer.png": "f7190d753546d0e41e1cd27ba1d38b30",
"assets/assets/images/small_order.png": "433f8d91f53051a033e10413c487e738",
"assets/assets/images/HomeMainMockUp.png": "85d82a1421c94cc1040931fd2a6b1edb",
"assets/assets/fonts/IBMPlexSansArabic-Regular.ttf": "bf7497338196d1ed6c36ea4d010f12a8",
"assets/assets/fonts/IBMPlexSansArabic-Bold.ttf": "3b112e6aa65695f31fa1e1a8fb0589a9",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
