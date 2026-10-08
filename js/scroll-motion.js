/* Progressive enhancement: never hide content without JS or IntersectionObserver. */
(()=>{if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
const selectors=['#about .section-label','#about h2','#about .about-body','#facilities .section-label','#facilities .section-heading','#facilities .facility-card','#documents .section-label','#documents .section-heading','#documents .document-card','.shop-section .shop-image','.shop-section .shop-copy','#contact .contact-layout > div'];
const nodes=[...document.querySelectorAll(selectors.join(','))];
const viewport=window.innerHeight;
nodes.forEach(el=>{if(el.getBoundingClientRect().top>=viewport-40)el.classList.add('reveal-on-scroll');});
document.querySelectorAll('#facilities .facility-card').forEach((el,i)=>el.style.setProperty('--reveal-delay',Math.min(i*130,390)+'ms');
document.documentElement.classList.add('motion-ready');
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.12,rootMargin:'0px 0px -30px 0px'});
nodes.filter(el=>el.classList.contains('reveal-on-scroll')).forEach(el=>observer.observe(el));
})();
