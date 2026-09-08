// Lightbox for photographs, and an active-section marker in the navigation.
(function () {
  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    var lbImg = lightbox.querySelector('img');
    var lbCaption = lightbox.querySelector('.lightbox-caption');
    var lastFocus = null;

    function open(img) {
      lbImg.src = img.currentSrc || img.src;
      lbImg.alt = img.alt;
      lbCaption.textContent = img.alt;
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      lastFocus = document.activeElement;
      lightbox.querySelector('.lightbox-close').focus();
    }
    function close() {
      lightbox.hidden = true;
      lbImg.src = '';
      document.body.style.overflow = '';
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    var zoomable = document.querySelectorAll(
      '.stops img'
    );
    Array.prototype.forEach.call(zoomable, function (img) {
      img.setAttribute('tabindex', '0');
      img.setAttribute('role', 'button');
      img.addEventListener('click', function () { open(img); });
      img.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(img); }
      });
    });
    lightbox.addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !lightbox.hidden) close();
    });
  }

  // Play looping clips only while they are on screen.
  var clips = document.querySelectorAll('video[autoplay]');
  if (clips.length && 'IntersectionObserver' in window) {
    var clipObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var v = entry.target;
        if (entry.isIntersecting) {
          var p = v.play();
          if (p && p.catch) p.catch(function () {});
        } else {
          v.pause();
        }
      });
    }, { rootMargin: '200px 0px' });
    Array.prototype.forEach.call(clips, function (v) { clipObserver.observe(v); });
  }

  var links = document.querySelectorAll('.site-nav a[href^="#"]');
  if (links.length && 'IntersectionObserver' in window) {
    var byId = {};
    Array.prototype.forEach.call(links, function (a) {
      byId[a.getAttribute('href').slice(1)] = a;
    });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        Array.prototype.forEach.call(links, function (a) { a.classList.remove('is-active'); });
        var a = byId[entry.target.id];
        if (a) a.classList.add('is-active');
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    Object.keys(byId).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }
})();
