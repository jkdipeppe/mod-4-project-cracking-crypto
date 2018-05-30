class CreateCryptos < ActiveRecord::Migration[5.1]
  def change
    create_table :cryptos do |t|
      t.string :name
      t.string :abbreviation
      t.string :crypto_type
      t.decimal :quantity
      t.decimal :buy_price

      t.timestamps
    end
  end
end
