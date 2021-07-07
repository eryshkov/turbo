/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

const findCacheControlMeta = () => {
    return document.querySelector('meta[name="turbo-cache-control"]');
}

document.addEventListener('show.bs.modal', () => {
    if (findCacheControlMeta()) {
        return;
    }

    const meta = document.createElement('meta');
    meta.name = 'turbo-cache-control';
    meta.content = 'no-cache';
    meta.dataset.removable = true;
    document.querySelector('head').appendChild(meta);
});

document.addEventListener('hidden.bs.modal', () => {
    const meta = findCacheControlMeta();
    if (!meta || !meta.dataset.removable) {
        return;
    }
    meta.remove();
});