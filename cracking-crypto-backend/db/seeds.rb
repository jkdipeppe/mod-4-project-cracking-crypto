# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Crypto.create(name:'Bitcoin', abbreviation: 'btc', crypto_type:'coin', quantity: 1, buy_price: 5000)
Crypto.create(name:'Ethereum', abbreviation: 'eth', crypto_type:'token', quantity: 2, buy_price: 500)
Crypto.create(name:'Ripple', abbreviation: 'xrp',  crypto_type:'coin', quantity: 4000, buy_price: 0.22)
Crypto.create(name:'Bitcoin Cash', abbreviation: 'bch', crypto_type:'coin', quantity: 2, buy_price: 800)
Crypto.create(name:'EOS', abbreviation: 'eos',  crypto_type:'token', quantity: 250, buy_price: 4.15)
Crypto.create(name:'Litecoin', abbreviation: 'ltc', crypto_type:'coin', quantity: 325, buy_price: 30)
Crypto.create(name:'Stellar', abbreviation: 'xlm', crypto_type:'token', quantity: 5000, buy_price: 0.19)
Crypto.create(name:'Cardano', abbreviation: 'ada', crypto_type:'token', quantity: 2500, buy_price: 0.27)
Crypto.create(name:'TRON', abbreviation: 'trx',  crypto_type:'token', quantity: 13000, buy_price: 0.05)
Crypto.create(name:'IOTA', abbreviation: 'miota',  crypto_type:'token', quantity: 425, buy_price: 2.56)

Index.create(name: 'top 4', objective: 'Portfolio comprised of the top 4 Cryptos')
Index.create(name: 'top 9', objective: 'Simple portfolio to always hold the top 10 cryptos')

CryptoIndex.create(crypto_id: 1, index_id: 1)
CryptoIndex.create(crypto_id: 2, index_id: 1)
CryptoIndex.create(crypto_id: 3, index_id: 1)
CryptoIndex.create(crypto_id: 4, index_id: 1)
CryptoIndex.create(crypto_id: 1, index_id: 2)
CryptoIndex.create(crypto_id: 2, index_id: 2)
CryptoIndex.create(crypto_id: 3, index_id: 2)
CryptoIndex.create(crypto_id: 4, index_id: 2)
CryptoIndex.create(crypto_id: 5, index_id: 2)
CryptoIndex.create(crypto_id: 6, index_id: 2)
CryptoIndex.create(crypto_id: 7, index_id: 2)
CryptoIndex.create(crypto_id: 8, index_id: 2)
CryptoIndex.create(crypto_id: 9, index_id: 2)
