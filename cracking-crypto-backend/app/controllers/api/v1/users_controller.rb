class Api::V1::UsersController < ApplicationController
  before_action :find_user, only: [:update]

  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.create(user_params)
    render json: @user, status: :accepted
  end

  def update
    @user.update(user_params)
    if @user.save
      render json: @user, status: :accepted
    else
      render json: {errors: @user.erros.full_messages}, status: :unprocessible_entity
    end
  end

  private
  def user_params
    params.permit(:first_name, :last_name, :username, :password, :positions)
  end

  def find_user
    @user = User.find(params[:id])
  end

end
