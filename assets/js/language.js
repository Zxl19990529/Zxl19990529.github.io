(function () {
    'use strict';

    var storageKey = 'academic-homepage-language';
    var root = document.documentElement;
    var language = 'zh';
    var translatedAttributes = ['title', 'aria-label', 'aria-description', 'alt', 'placeholder'];

    try {
        if (localStorage.getItem(storageKey) === 'en') language = 'en';
    } catch (error) {
        // The switch also works when browser storage is unavailable.
    }

    function updateContent() {
        var title = root.getAttribute('data-title-' + language);
        if (title) document.title = title;

        document.querySelectorAll('[data-set-language]').forEach(function (button) {
            var active = button.getAttribute('data-set-language') === language;
            button.setAttribute('aria-pressed', String(active));
            button.classList.toggle('active', active);
        });

        translatedAttributes.forEach(function (attribute) {
            var source = 'data-i18n-' + attribute + '-' + language;
            document.querySelectorAll('[' + source + ']').forEach(function (element) {
                var value = element.getAttribute(source);
                element.setAttribute(attribute, value);
                if (attribute === 'title' && element.hasAttribute('data-original-title')) {
                    element.setAttribute('data-original-title', value);
                }
            });
        });
    }

    function setLanguage(nextLanguage, remember) {
        language = nextLanguage === 'en' ? 'en' : 'zh';
        root.setAttribute('data-language', language);
        root.setAttribute('lang', language === 'zh' ? 'zh-CN' : 'en');
        if (remember) {
            try {
                localStorage.setItem(storageKey, language);
            } catch (error) {
                // Keep the current page usable without persistent storage.
            }
        }
        updateContent();
        document.dispatchEvent(new CustomEvent('languagechange', { detail: { language: language } }));
    }

    // Apply the saved preference in the head, before the page becomes visible.
    setLanguage(language, false);
    document.addEventListener('DOMContentLoaded', updateContent);
    document.addEventListener('click', function (event) {
        var button = event.target.closest('[data-set-language]');
        if (button) setLanguage(button.getAttribute('data-set-language'), true);
    });
    window.addEventListener('storage', function (event) {
        if (event.key === storageKey) setLanguage(event.newValue, false);
    });
}());
