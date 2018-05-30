class Crypto < ApplicationRecord
  has_many :crypto_portfolios
  has_many :portfolios, through: :crypto_portfolios
  has_many :crypto_indices
  has_many :indices, through: :crypto_indices
end
