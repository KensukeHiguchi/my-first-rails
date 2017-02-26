class Api::V1::ArticlesController < ApplicationController
  def index
    @data = [
      { title: 'Pete Hunt', text: 'This is one comment' },
      { title: 'Jordan Walke', text: 'This is *another* comment' }
    ]
  end
end
