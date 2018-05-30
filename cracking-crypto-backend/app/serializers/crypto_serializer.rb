class CryptoSerializer < ActiveModel::Serializer
  has_many :portfolios
  has_many :indices
  attributes :id, :name, :abbreviation, :crypto_type, :quantity, :buy_price

end
