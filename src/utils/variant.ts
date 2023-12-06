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

const sentence = {
  hidden: {
    opacity : 1
  },
  visible:{
    opacity:1, 
    transition:{
      delay:1,
      delayChildren: 1,
      staggerChildren:0.1,
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
      delayChildren: 0.5,
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
      duration: 0.5,
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
      duration: 0.5,
      delay: 0.5,
    }
  }
}

const box = {
  hidden:{
    left:0
  },
  visible:{
    left: '100%',
    transition:{
      duration: 0.5,
      delay: 0.25,
    }
  }
}


export {introbg, sentence, letter, navreveal, iconreveal, language, text, box, fly}