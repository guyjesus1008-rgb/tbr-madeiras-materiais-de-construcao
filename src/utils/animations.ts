export const fadeIn = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" } as any,
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } as any
};

export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export const floatAnimation: any = {
  animate: {
    y: [0, -15, 0],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const breathAnimation: any = {
  animate: {
    scale: [1, 1.03, 1],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const waveAnimation: any = {
  animate: {
    rotate: [0, 1, -1, 0],
  },
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut"
  }
};
