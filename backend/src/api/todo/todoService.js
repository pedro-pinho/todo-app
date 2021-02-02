const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
 //o update, por padrão, retorna o registro antigo, e não roda validações
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo