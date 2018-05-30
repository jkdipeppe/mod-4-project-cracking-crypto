class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :password, :username, :positions
  has_many :portfolios
end
