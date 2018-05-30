class Api::V1::CryptoPortfoliosController < ApplicationController
  def index
    @crypto_portfolios = CryptoPortfolio.all
    render json: @crypto_portfolios
  end

  def create
    @crypto_portfolio = CryptoPortfolio.create(crypto_portfolio_params)
    render json: @crypto_portfolio, status: :accepted
  end

  private
  def crypto_portfolio_params
    params.permit(:crypto_id, :portfolio_id, :id)
  end

  def find_crypto_portfolio
    @crypto_portfolio = CryptoPortfolio.find(params[:id])
  end
end
