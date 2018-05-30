class CreatePortfolios < ActiveRecord::Migration[5.1]
  def change
    create_table :portfolios do |t|
      t.string :name
      t.integer :num_positions
      t.integer :user_id

      t.timestamps
    end
  end
end
