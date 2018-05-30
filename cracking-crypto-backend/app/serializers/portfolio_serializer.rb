class PortfolioSerializer < ActiveModel::Serializer
  belongs_to :user
  has_many :cryptos
  attributes :id, :user_id, :name, :num_positions, :cryptos, :user
end
