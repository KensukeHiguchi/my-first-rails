class Api::V1::ArticlesController < ApplicationController
  def index
    @data = [
      { title: 'konnichiwa', text: 'yamaptaro1' },
      { title: 'sayonara', text: 'yamaphanako2' }
    ]
    
    # @data = Article.all
  end
end
