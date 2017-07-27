// List Model

function createList() {
  let id = 0  

  return class {
    constructor(title){
      this.title = title
      this.id = id++
      store.lists.push(this)
    }
    tasks(){
      return store.tasks.filter((task) => {
        // console.log(id)
        return task.listId == this.id;
      })
    }
    static find(listId){
      return store.lists.filter(function(list){
        return list.id == listId;
      })[0]
    }
    destroy(){
      this.tasks().forEach(function(task){
        task.destroy()
      })

      return store.lists = store.lists.filter((list) => {
        return list.id !== this.id;
      })
    }
  }
}

var List = createList()


// function find(className, id){
//   return store[`${className}s`].filter(function(obj){
//     return obj.id === id
//   })
// }
//
// select('task', {priority: "high"})
//
// function select(className, attribute){
//   return store[`${className}s`].filter(function(obj){
//     let key = Object.keys(attribute)[0]
//
//     return obj[key] === attribute[key]
//   })
// }
// find('list')

// class List
// has_many :tasks, :dependent_destroy
// end
