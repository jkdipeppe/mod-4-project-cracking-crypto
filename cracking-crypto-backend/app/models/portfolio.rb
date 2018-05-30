class Portfolio < ApplicationRecord
  belongs_to :user
  has_many :crypto_portfolios
  has_many :cryptos, through: :crypto_portfolios
end
