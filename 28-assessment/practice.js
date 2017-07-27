// musical instrument
  // belongs to category
// categories
  // has many musical
// xylophone.category

  // percussion.instruments()
    // snare drum, bass drum, steel drum


// make a form that creates an instrument
  // 1. creates musical instrument
  // 2. associates instrument with the category
// from the form we should be able to associate multiple instruments
// with the same category

//
// 1. get a class working
// 2. get your associations
// 3. get data rendering with mvc.

let category = new Category('percussion')
// {name: 'percussion'}
new Instrument('bass drum', percussion)
let bassDrum = store.instruments[0]
  // {id: 1, name: 'bass drum', categoryId: 1}

let percussion = bassDrum.category()
  // {id: 1, name: 'percussion' }
percussion.instruments()
// category.instruments()
//
