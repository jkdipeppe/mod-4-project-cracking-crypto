class CryptoIndexSerializer < ActiveModel::Serializer
  belongs_to :crypto
  belongs_to :index
  
  attributes :id, :crypto_id, :index_id
end
