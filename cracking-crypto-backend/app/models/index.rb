class Index < ApplicationRecord
  has_many :crypto_indices
  has_many :cryptos, through: :crypto_indices
end
