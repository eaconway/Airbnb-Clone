class CreateSearch < ActiveRecord::Migration[5.2]
  def change
    create_table :searches do |t|
      t.string :query, null: false
      t.integer :author_id, null: false
      t.timestamps
    end

    add_index :searches, :author_id
  end
end
