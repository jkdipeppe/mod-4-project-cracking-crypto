class CryptoPortfolio < ApplicationRecord
  belongs_to :crypto
  belongs_to :portfolio
end
