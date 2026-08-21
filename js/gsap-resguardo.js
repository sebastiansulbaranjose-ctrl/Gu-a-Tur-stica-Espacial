/* Resguardo sin animación: si el CDN de GSAP no responde, define una versión mínima que aplica
   el estado final de inmediato y sigue disparando onComplete, para que el minijuego siga siendo
   jugable en vez de quedar inerte al pulsar "INICIAR ESCANEO TEMPORAL". */
if (typeof window.gsap === "undefined") {
  window.gsap = (function () {
    const SKIP = { duration: 1, ease: 1, delay: 1, stagger: 1, repeat: 1, yoyo: 1, onComplete: 1, onStart: 1, x: 1, y: 1, rotation: 1, scale: 1 };
    function applyVars(target, vars) {
      if (!target || !vars) return;
      for (const key in vars) {
        if (SKIP[key]) continue;
        try { target.style[key] = vars[key]; } catch (e) {}
      }
    }
    function tweenTo(target, vars) {
      let resolveFn;
      const promise = new Promise((resolve) => { resolveFn = resolve; });
      const timer = window.setTimeout(() => {
        applyVars(target, vars);
        if (vars && typeof vars.onComplete === "function") vars.onComplete();
        resolveFn();
      }, 0);
      promise.kill = () => window.clearTimeout(timer);
      promise.pause = () => promise;
      promise.play = () => promise;
      return promise;
    }
    return {
      to: (target, vars) => tweenTo(target, vars),
      fromTo: (target, fromVars, toVars) => { applyVars(target, fromVars); return tweenTo(target, toVars); },
      set: (target, vars) => applyVars(target, vars),
      timeline: () => {
        const self = {
          to: (target, vars) => { applyVars(target, vars); if (vars && typeof vars.onComplete === "function") vars.onComplete(); return self; },
          set: (target, vars) => { applyVars(target, vars); return self; }
        };
        return self;
      },
      getProperty: () => 0,
      utils: { random: (min, max) => (min + max) / 2 }
    };
  })();
}
