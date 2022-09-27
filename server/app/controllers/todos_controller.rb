class TodosController < ApplicationController
  before_action :getTodo, only: [:showTodo, :updateTodo, :deleteTodo]
  def getTodos
    @todos = Todo.all
    if @todos
      render json: @todos, status: :ok
    else
      render json: {msg: "Todos is empty"}, status: :unprocessable_entity
    end
  end
  def showTodo
    if @todo
      render json: @todo, status: :ok
    else
      render json:{msg: "Todo not found"}, status: :unprocessable_entity
    end
  end
  def addTodo
    todo = Todo.new(todoparams)
    if todo.save()
      render json: todo, status: :ok
    else
      render json: {msg: "Todo not added", error: todo.errors}, status: :unprocessable_entity
    end
  end
  def updateTodo
    if @todo
      if @todo.update(todoparams)
        render json: @todo, status: :ok
      else
        render json:{msg: "Updated todo failed", error: @todo.errors},status: :unprocessable_entity
      end
    else
      render json:{msg: "Todo not found"},status: :unprocessable_entity
    end
  end
  def deleteTodo
    if @todo
      if @todo.destroy()
        render json:{msg: "Deleted todo successfully"},status: :ok
      else
        render json:{msg: "Deleted todo failed"},status: :unprocessable_entity
      end
    else
      render json:{msg: "Todo not found"},status: :unprocessable_entity
    end
  end
  private
  def todoparams
    params.permit(:title, :des, :completed)
  end
  def getTodo
    @todo = Todo.find(params[:id])
  end
end