Rails.application.routes.draw do
  get '/todos', action: :getTodos, controller: :todos
  post '/todos', action: :addTodo, controller: :todos
  put '/todos/:id', action: :updateTodo, controller: :todos
  delete '/todos/:id', action: :deleteTodo, controller: :todos
  get '/todos/:id', action: :showTodo, controller: :todos
  # root "articles#index"
end
