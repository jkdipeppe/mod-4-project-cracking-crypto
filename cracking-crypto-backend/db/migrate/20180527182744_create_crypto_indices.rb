class CreateCryptoIndices < ActiveRecord::Migration[5.1]
  def change
    create_table :crypto_indices do |t|
      t.integer :crypto_id
      t.integer :index_id

      t.timestamps
    end
  end
end
