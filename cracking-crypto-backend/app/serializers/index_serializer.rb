class IndexSerializer < ActiveModel::Serializer
  has_many :crypto_indices
  has_many :cryptos, through: :crypto_indices
  attributes :id, :name, :objective
end
