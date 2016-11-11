class Api::CategoriesController < ApplicationController
  def show
    @category = Category.find(params[:id])
    @events = @category.events
  end

  def index
    @categories = Category.all
    if params[:search]
      @categories = Category.search
    end
  end

  def self.search(search)
    where("name ILIKE?", "%#{search}%")
  end
end
