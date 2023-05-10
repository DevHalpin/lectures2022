class QuotesController < ApplicationController
  def index
    @character = Character.find(params[:character_id]) #Params gives us access to the int in our url
    @quotes = @character.quotes # Works because of our AR model relationship
  end
end
