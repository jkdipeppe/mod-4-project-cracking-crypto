class CryptoPortfoliosSerializer < ActiveModel::Serializer
  attributes :id, :crypto_id, :portfolio_id

  belongs_to :crypto
  belongs_to :portfolio
end
