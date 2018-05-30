class Api::V1::PortfoliosController < ApplicationController
  before_action :find_portfolio, only: [:update]


  def index
    @portfolios = Portfolio.all
    render json: @portfolios
  end

  def create
    
    @portfolio = Portfolio.create(portfolio_params)
    render json: @portfolio, status: :accepted
  end

  def update
    @portfolio.update(portfolio_params)
    if @portfolio.save
      render json: @portfolio, status: :accepted
    else
      render json: {errors: @portfolio.erros.full_messages}, status: :unprocessible_entity
    end
  end

  private
  def portfolio_params
    params.permit(:name, :num_positions, :user_id)
  end

  def find_portfolio
    @portfolio = Portfolio.find(params[:id])
  end
end
