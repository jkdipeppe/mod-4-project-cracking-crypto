class Api::V1::IndicesController < ApplicationController
  before_action :find_index, only: [:update]

  def index
    @indices = Index.all
    render json: @indices
  end

  private
  def index_params
    params.permit(:name, :objective, :id)
  end

  def find_index
    @user = User.find(params[:id])
  end

end
