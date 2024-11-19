'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "396b989748d10207ce3d7b5d599147b2",
".git/config": "d62d3ba3d6477823e28195757a2603c1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3047e3ef23a12db733f4cc9382947937",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4955b78dc941b9f7dae06ae1699ee86c",
".git/logs/refs/heads/master": "d9033703e124c6db24ace7528c4f46c0",
".git/logs/refs/remotes/origin/master": "fbc7be30ba4ed6c3ce0b7aada127e1db",
".git/objects/03/cb015e920b8cea8df6a15b313af10fefa9b27e": "946986180d5b896d0d0a5e632444f3ab",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0b/5dbacc984a993ca79e299a4df6eac9a85ad6e2": "f15b129461dba2b56654577fdb1829d9",
".git/objects/0b/9e28aa1fb0319ac5a853ad364757b030cb8b90": "6793e0ece51b0195dcad10c37c8e55d5",
".git/objects/13/bfff910df1d5ce35fb67e7d26d16a74aaf95f7": "e85733f308a59f3bb4465d07498ecd42",
".git/objects/17/ac613db2007e5178ec97e608eb796ed8351dbd": "df69f969ada363813a5aa0e914c3eb08",
".git/objects/18/e0751e2c2385ece768c04e271a759461cc8be5": "73094d1ca1fd6591f02d39f0868a821d",
".git/objects/1c/8ca7347698c74a6ba6a632f132c6597c217664": "08a275bf876f5b4970eeeff137ef6276",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/6c4cde0a0821c54217b0ad5d69f1de64bcb721": "b4bd386d5a8dcdddddd3f19060048bbc",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/27/f6789fcafd7e4f8b212228e76dca01c89a33bf": "2b25c1b67d0b8274eea447a385c0ad8a",
".git/objects/39/7692c652711491bd8242b0b89fb326ff9df5a8": "6c7f2c96bc68d3e70f9a8099c7344d34",
".git/objects/43/1661391abd86f73b3cf333fac6d52a0fea5980": "0b13c056a6f37b8f248b7b18a781d719",
".git/objects/43/4eb27466ab525b52f815b64049d21b888ebfe9": "4568413d4baeec8bb004cd790babe133",
".git/objects/43/72ab25349bae84f046a64396d70de80d98afa8": "ee1365edae8608d26bf62348fbfb5065",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/54/696bec7b7725f948fb6c7bccff2d260f2f37a3": "3c930141b528e341a04eedf971e3977d",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/57/b1ff3a9c93042a3adaa45d5718e526f41067a8": "5cb4de7b103e1cef68c26bf736fb8cc5",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/66/662f22f5d01af8cf4c7ffcaf7868a017e3c139": "d5de0c319e6fbdc0b0888dc72d6cc514",
".git/objects/6c/fb664a6180aa311eb5f1fd111d0e518b481e48": "3e629567399e296e077fd6dbeaa1df09",
".git/objects/6d/2d5858e2e44b2d27c52047819acea0953fb784": "7c46d03c3e4b0b9c2da554988e13287f",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6e/4b22e779e515463025a3217491517a7888af53": "e8ab7cf554e45dc4d060714bf7811366",
".git/objects/72/0f71fde5520678b5e05300a853ab3cf22e3893": "18e8a9c0e11ca434e0beb9639dcb9a76",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/7a/5ae737bed49ed0af01f3a8737b4720cb9fc10b": "bf8ae1677e27ccd26e41c6a0da96cb9b",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/55df7e052dc8d8c34a5f7352322bb4c7b4f782": "7c51a7648ac6eba97f465a993c258c98",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/45a466b6d64716c4c0a24a288a377f7f170d1f": "07cc27b20211cba0fc8c76f2551c17b2",
".git/objects/89/7d5a59677f026ac3d6fd9086138a248b9536e1": "0be8013566145ed3420c64f2002148db",
".git/objects/8b/ed81a3fda6b4feea0a97c3708fb04059f38531": "6604a65c4a24bf5505b40eef25182ba3",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/90/424dc02b2f719059e76d5831b2d407decbc5f9": "18264db0ca66b31b320d97f66d869bf4",
".git/objects/91/72cfeb29b7cca7aaece3f9ddc98816ad5efefa": "9d31e61d0e83fba308549dd5d4bce0c0",
".git/objects/94/e30fdbce8c8aee7fadb1518bb3c6aa2e6e6b3f": "00c9c3d2328469c5d1317af704f5bc4d",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9f/00232c24532fa2a34e2dfa7e036fb103876b0d": "e37511209eb4f786b56fbfc9706f3de9",
".git/objects/a4/44087bc23a0cfe0be38e5a21f97cf601bca219": "32a25073f66cb2e80dd7851dcf9c9191",
".git/objects/a9/762fb2bd2000d4b7e98a2a1fafebba804385c5": "44dc302fac903c48d7b4f2bbddb81762",
".git/objects/aa/30acb84d51178e6458d76130dea0bbdfddeba2": "5939ed4b009fe5603746f6fce0dac102",
".git/objects/ac/a56bc4614f5c912b7e5fd0af58fd0a465baabd": "b6a4dc35af083bbaea8e54ceef9f6c45",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b5/73f1d7c4f3e532598c3ecb7667c8058d921c88": "6b1ec1ab2eaaace372c63a6f16e21397",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/5e81385cee0cdd440c234b0d684f885c478bc9": "862821ab9ac8978e987c80883af8e048",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c2/4057f23734b64dd51c5d3c2d2d61f5d9575042": "570658f368b66e01192f53ce7567c854",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/f817860972b89b2a1b85e2a12bceea618ab824": "9a2d3bbc3c094fbf6b7ae3bf261851ce",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/563e79d970e3ddfbc1cccf0e6fca3cfcf54dca": "69ad0fe99406d593ecf5c3b9e49bcfcd",
".git/objects/c7/68c0976e99dd3c0d456f932636f120343ece37": "44c2dc19be4f9af05120bdcfd0dc45f9",
".git/objects/c7/8b3f4f91c0039843dff9650ce5e49c7cb03a53": "189140b7dcf3da96b8964830033328c7",
".git/objects/cd/49ac3ffaf120b9a170d0549da60489aefbe6e8": "433a9b0d36a95395c4702364bc61bed1",
".git/objects/ce/38275266be7ac967d10c505567f0b0c5a7137a": "dd47f3d7d49a8c1d34396abc7b23cf8b",
".git/objects/d3/8c6cc3c7a711241255fadef2aa143028039f1f": "2faf925c724c246d8aec3a1e13c2545d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/3a4cd5cac1751406e2380a290d2ec7a687e01e": "20c1f3843745e31913fef7103fca5d14",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/5c8951a22fc9d366ff6f30225befa3faa57a22": "3d7a0259d6cb898065c023b28281b584",
".git/objects/da/9069c80b5574ecb990e24f1d452ebbc4f1def4": "c20db9940906fe69f1258a0f27eaa7b2",
".git/objects/e6/73bcc84572587e696ec3e54a610b8d5f34fe4c": "2b29991b8bf8a45987018fad2834d104",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ed/1cda0a7f386e27cf3dcd31a7bb047c5024a62f": "a4731bb78125d4c4c654e80ed986b95d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/227c5d8ce4c9441d3d13d0a0969f24a99cef9b": "2e25fbe382bc8ac7b92963883c93f46a",
".git/refs/heads/master": "fd73c2e5b1332c7d7b21c3382da96e7e",
".git/refs/remotes/origin/master": "fd73c2e5b1332c7d7b21c3382da96e7e",
"assets/AssetManifest.bin": "485b0febc92616fef08d6146c56ca2a6",
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
"flutter_bootstrap.js": "434dd07b90d260d50ef791d1905b3f6c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c766173d8757ef15c24e550d4c528730",
"/": "c766173d8757ef15c24e550d4c528730",
"main.dart.js": "60775df3489ca0b939f72c4481be0f54",
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
