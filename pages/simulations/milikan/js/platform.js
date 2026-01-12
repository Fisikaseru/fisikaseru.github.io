let resizeObserver;

export function initEmbeddedMode() {
  try {
    const params = new URLSearchParams(window.location.search);
    const isEmbedded = window.self !== window.top || params.get('embed') === '1';
    if (!isEmbedded) return;

    document.querySelectorAll('[data-embed-hide="true"]').forEach((el) => {
      el.classList.add('hidden');
    });
    document.body.classList.add('embedded-mode');
  } catch {
    /* noop */
  }
}

export function initIframeAutoResize() {
  try {
    if (window.self === window.top) return;
    const notify = () => {
      window.parent.postMessage(
        { type: 'milikan:resize', height: document.documentElement.scrollHeight },
        '*'
      );
    };

    window.addEventListener('load', notify);
    window.addEventListener('resize', notify);

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(notify);
      resizeObserver.observe(document.documentElement);
    }
  } catch {
    /* noop */
  }
}

export function injectDhwsDataInjector() {
  if (document.getElementById('dhws-dataInjector')) return;
  const script = document.createElement('script');
  script.id = 'dhws-dataInjector';
  script.src = '/public/dhws-data-injector.js';
  document.body.appendChild(script);
}
