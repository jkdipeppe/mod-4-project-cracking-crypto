class CreateCryptoPortfolios < ActiveRecord::Migration[5.1]
  def change
    create_table :crypto_portfolios do |t|
      t.integer :crypto_id
      t.integer :portfolio_id

      t.timestamps
    end
  end
end
