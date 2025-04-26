console.log('Lancement du script');

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
    console.log('🚀 Début de la détection des shorts...');
    clearInterval(checkInterval); // pour éviter les doublons
    checkInterval = setInterval(deleteShit, 500);
}

// ✅ 1. Lancer dès que le DOM est prêt
document.addEventListener("DOMContentLoaded", startDetection);

// ✅ 2. Relancer en cas de navigation interne (SPA)
if (window.navigation && window.navigation.addEventListener) {
    window.navigation.addEventListener("navigate", () => {
        console.log("🔁 Navigation détectée (SPA)");
        startDetection();
    });
}
