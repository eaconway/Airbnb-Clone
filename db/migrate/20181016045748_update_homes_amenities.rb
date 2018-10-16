class UpdateHomesAmenities < ActiveRecord::Migration[5.2]
  def change
    remove_column :homes, :beds
    remove_column :homes, :baths
    remove_column :homes, :bedrooms

    add_column :homes, :beds, :integer, default: 0
    add_column :homes, :baths, :integer, default: 0
    add_column :homes, :bedrooms, :integer, default: 0

    remove_column :homes, :internet
    remove_column :homes, :washer
    remove_column :homes, :dryer

    add_column :homes, :internet, :boolean, default: false
    add_column :homes, :washer, :boolean, default: false
    add_column :homes, :dryer, :boolean, default: false
  end
end
