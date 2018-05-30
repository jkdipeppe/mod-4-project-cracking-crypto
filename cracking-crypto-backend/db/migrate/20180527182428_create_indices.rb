class CreateIndices < ActiveRecord::Migration[5.1]
  def change
    create_table :indices do |t|
      t.string :name
      t.string :objective

      t.timestamps
    end
  end
end
