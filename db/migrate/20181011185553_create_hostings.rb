class CreateHostings < ActiveRecord::Migration[5.2]
  def change
    create_table :hostings do |t|
      t.integer :host_id, null: false
      t.integer :home_id, null: false

      t.timestamps
    end
    add_index :hostings, :home_id, unique: true
    add_index :hostings, :host_id
  end
end
