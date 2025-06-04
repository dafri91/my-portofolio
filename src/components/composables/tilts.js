// directives/tilt.js
import VanillaTilt from 'vanilla-tilt';

export default {
  mounted(el, binding) {
    VanillaTilt.init(el, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.4,
      ...binding.value,
    });
  },
  unmounted(el) {
    el.vanillaTilt && el.vanillaTilt.destroy();
  },
};
