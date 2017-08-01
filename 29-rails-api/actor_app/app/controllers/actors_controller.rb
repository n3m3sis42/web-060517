class ActorsController < ApplicationController
  def new
    @actor = Actor.new(name: 'bob')
    @actor.save
    # <id: 1>
    # render 'actors/new'
  end

  def create
    @actor = Actor.new
    byebug
    @actor.name = params[:actor][:name]
    @actor.hometown = params[:actor][:hometown]
    @actor.save
    render json: {actors: Actor.all, songs: Song.all}

  end

  def index
    # query parameters
    # actors?discounted=true&name="bob"
    # {discounted: true, name: 'bob'}
    @actors = Actor.where(params)
    # render 'actors/index'
    render json: @actors
    # ""
  end

  def show

  end


  def act
    binding.pry
  end
end
