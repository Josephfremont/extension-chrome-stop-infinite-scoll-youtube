let checkInterval;

function deleteShit() {
    const targets = document.querySelectorAll('div.reel-video-in-sequence-new.style-scope.ytd-shorts');
    if (targets.length > 1) {
        console.log('🎯 Shorts trouvés ! TUER lEEEEE !!!!');
        targets.forEach(el => {
            const id = parseInt(el.id, 10);
            if (!isNaN(id) && id > 0) {
                el.style.display = 'none';
                console.log(`🧹 Élément avec id=${id} caché`);
            }
        });

        clearInterval(checkInterval);
    } else {
        console.log('🔍 A la recherche de la petite merde.');
    }
}

function startDetection() {
    clearInterval(checkInterval);
    checkInterval = setInterval(deleteShit, 500);
}

if (window.location.href.split('/')[3] == "shorts") {
    // ✅ 1. Lancer dès que le DOM est prêt
    document.addEventListener("DOMContentLoaded", startDetection());
}

// ✅ 2. Relancer en cas de navigation interne (SPA)

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      // listen for messages sent from background.js
      if (request.message === 'start') {
        if (window.location.href.split('/')[3] == "shorts") {
            console.log("🔁 Navigation détectée (SPA)");
            startDetection();
        }
      }
    }
);
