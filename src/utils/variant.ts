const introbg = {
  hidden:{
    opacity:0, 
    x: '-100%'
  }, 
  visible:{
    opacity: 1, 
    x:0,
    transition:{
      delay:0.7,
    }
  }
}

const introimg = {
  hidden:{
    opacity:0, 
  }, 
  visible:{
    opacity:1, 
    transition:{
      duration: 2,
    }
  }
}

const preambletext = {
  hidden:{
    opacity:0, 
  }, 
  visible:{
    opacity: 1, 
    transition:{
      delay:1,
      duration: 1
    }
  }
}

const cubereveal = {
  hidden: {
    opacity:0, 
    scale : 0.2,
  },
  visible:{
    opacity:1, 
    scale:1,
    transition:{
      delay:0.7,
      duration: 1,
    }
  }
}

const sentence = {
  hidden: {
    opacity : 1
  },
  visible:{
    opacity:1, 
    transition:{
      delay:1,
      delayChildren: 1,
      staggerChildren:0.05,
    }
  }
}

const letter = {
  hidden:{
    opacity:0, 
    y:50
  }, 
  visible:{
    opacity: 1, 
    y:0,
  }
}


const language = {
  hidden: {opacity : 1},
  visible:{
    opacity:1, 
    transition:{
      delay:1,
      delayChildren: 0.2,
      staggerChildren:0.1,
    }
  }
}

const text = {
  hidden:{
    opacity: 0, 
    y:-75
  },
  visible:{
    opacity: 1, 
    y:0,
  }
}


const iconreveal = {
  hidden: {
    opacity:0, 
    scale : 0.5
  },
  visible:{
    opacity:1, 
    scale:1,
    transition:{
      duration: 1,
    }
  }
}

const navreveal = {
  hidden:{
    opacity: 0, 
    y:-75
  },
  visible:{
    opacity: 1, 
    y:0,
    transition:{
      duration: 1,
      delay: 0.25,
    }
  }
}

const fly = {
  hidden:{
    opacity: 0, 
    y: 75
  },
  visible:{
    opacity: 1, 
    y:0,
    transition:{
      duration: 0.3,
      delay: 0.3,
    }
  }
}

const box = {
  hidden:{
    right:0
  },
  visible:{
    right: '100%',
    transition:{
      duration: 0.3,
      delay: 0.2,
    }
  }
}


export {introbg, sentence, letter, navreveal, iconreveal, language, text, box, fly, cubereveal, preambletext,introimg}