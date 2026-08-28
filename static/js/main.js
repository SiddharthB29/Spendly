// main.js — theme toggle and shared UI helpers

// ------------------------------------------------------------------ //
// Theme toggle (light / dark)                                        #
// ------------------------------------------------------------------ #

(function () {
    var toggle = document.getElementById('theme-toggle');
    var thumb = document.getElementById('theme-thumb');
    var root = document.documentElement;

    if (!toggle || !thumb) return;

    var imgLight = toggle.dataset.imgLight;
    var imgDark = toggle.dataset.imgDark;

    function setTheme(theme) {
        root.classList.toggle('theme-dark', theme === 'dark');
        thumb.src = theme === 'dark' ? imgDark : imgLight;
    }

    // Toggle on click
    toggle.addEventListener('click', function () {
        var isDark = root.classList.contains('theme-dark');
        var next = isDark ? 'light' : 'dark';
        setTheme(next);
        try {
            localStorage.setItem('spendly-theme', next);
        } catch (e) {
            // localStorage unavailable — ignore
        }
    });

    // Restore saved theme preference (defaults to light)
    try {
        var saved = localStorage.getItem('spendly-theme');
        if (saved === 'dark' || saved === 'light') {
            setTheme(saved);
        }
    } catch (e) {
        // localStorage unavailable — ignore
    }
})();