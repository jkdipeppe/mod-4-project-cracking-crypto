class Api::V1::CryptosController < ApplicationController
  def index
    @cryptos = Crypto.all
    render json: @cryptos
  end

  def create
    @crypto = Crypto.create(crypto_params)
    render json: @crypto, status: :accepted
  end
  def data
    render json: DataGetter.data_getter, status: 200
  end

  private
  def crypto_params
    params.permit(:name, :abbreviation, :crypto_type, :quantity, :buy_price)
  end

  def find_crypto
    @crypto = Crypto.find(params[:id])
  end

end
