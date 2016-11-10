class Api::CategoriesController < ApplicationController
  def show
    @category = Category.find()
end
