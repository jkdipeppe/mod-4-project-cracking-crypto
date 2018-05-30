
class DataGetter
  def self.data_getter
    all_data = RestClient.get('https://api.coinmarketcap.com/v2/ticker/')
    data_hash = JSON.parse(all_data)
   end
end
