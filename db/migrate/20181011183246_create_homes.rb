class CreateHomes < ActiveRecord::Migration[5.2]
  def change
    create_table :homes do |t|
      t.string :status, null: false, default: 'active'
      t.float :lng, null: false
      t.float :lat, null: false
      t.string :street_address
      t.string :city
      t.string :state
      t.integer :zipcode
      t.integer :beds, null: false
      t.integer :baths, null: false
      t.integer :bedrooms, null: false
      t.integer :internet, null: false, default: false
      t.integer :washer, null: false, default: false
      t.integer :dryer, null: false, default: false
      t.integer :guests, null: false, default: 1
      t.string :type, null: false

      t.timestamps
    end

    add_index :homes, :city
    add_index :homes, :state
  end
end
