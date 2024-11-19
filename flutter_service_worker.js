'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "485b0febc92616fef08d6146c56ca2a6",
"assets/AssetManifest.bin.json": "0bbca3f66be4e4b3d08951d7add3bbc9",
"assets/AssetManifest.json": "38aa634367d8b377e90c4ab86a2b3b60",
"assets/assets/images/bg_picture.png": "3db4b803b653a1405469df6cbaf46805",
"assets/assets/images/difference_logo.png": "a5d109956c101b9d19de9f527a310bb1",
"assets/assets/images/icon/assessment.png": "2973451869c98084076bf58bb23c1a9c",
"assets/assets/images/icon/awards.png": "c2abc61b3502deb9113c230f8283b8bd",
"assets/assets/images/icon/book-mark.png": "cadd9c7be06dcaad25da3fb4701b6fcc",
"assets/assets/images/icon/chart.png": "e1ac80ff2c4b4bb4da0a60d68f3a2d53",
"assets/assets/images/icon/chat.png": "b31965d7a3ba3a13f60f01ff6d99d4af",
"assets/assets/images/icon/copyright.png": "6c9aa1884092a3f24dd867e8204a9a78",
"assets/assets/images/icon/email.png": "8cfbffededcc55bc5e0731dbbaba6fbd",
"assets/assets/images/icon/facebook.png": "a7c2aeaa6b935862e15f05825236f76a",
"assets/assets/images/icon/instagram.png": "fc0d91e5203622f15a35874ef268ac9f",
"assets/assets/images/icon/linkedin.png": "2aa079f9b04967f336125fc649600e6c",
"assets/assets/images/icon/minus.png": "440bf857fb20d0fa50b51c64162990ea",
"assets/assets/images/icon/phone.png": "b01b4252fb8b5e7571b6d434e1f647e3",
"assets/assets/images/icon/twitter.png": "d7547f930f7bb038a3907e7cffaa3b0d",
"assets/assets/images/icon/user.png": "70d5967e2ea85760297b576b3deb1d2e",
"assets/assets/images/latest.png": "60c5e2f19a60c36192a5d6a17b030139",
"assets/assets/images/mock_up.png": "2fe83dc03bb31a6c1b78af9c6c844f19",
"assets/assets/images/picture1.jpeg": "9dc79d20bc70c5f5687e59be502b3983",
"assets/assets/images/picture1.png": "243f8c7a9a22d1ece4da9d2482c5baaa",
"assets/assets/images/picture2.jpeg": "08410da143e68862c1fd1776101df10f",
"assets/assets/images/picture2.png": "e2021c060dd16bb83bfb8e2c7de03848",
"assets/assets/images/picture3.jpeg": "18fc0b335cc80d0074d82ec107eae66e",
"assets/assets/images/picture3.png": "6aa7fcc6cb485c30d3f5bae66d5e1544",
"assets/assets/images/Rectangle.jpg": "188f3cd32a441862ff907dfddf4970bc",
"assets/assets/images/sdg%2520chart.png": "960b88f6eca92c8a776332809f3e9d02",
"assets/assets/images/unduel%2520mock%2520up.jpg": "07326ad6060ae940a05752c0d375deb1",
"assets/assets/images/watermark.png": "7883e1e6c392daf72766574e3f8c330d",
"assets/flutter_assets/videos/FearNot.mp4": "ae60a8533aadc20cce0fd4100f4116c1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"assets/NOTICES": "0c330f8b77fd41d822893683356ba0f3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "78f5606f44f5bf657ac993b3d4ea0a14",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "2558739e33266ec2354d7c193d5ca012",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c766173d8757ef15c24e550d4c528730",
"/": "c766173d8757ef15c24e550d4c528730",
"main.dart.js": "572f4d0e9747b61c56ae2eef9fc099a0",
"manifest.json": "3f9f46d43b9a25da68f5dd4800d5ed6d",
"version.json": "c2a08cda2a1e690bfed5ce9fc4d9e5b1"};
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
