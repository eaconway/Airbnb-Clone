class UpdateHomesTypes < ActiveRecord::Migration[5.2]
  def change
    remove_column :homes, :beds
    remove_column :homes, :baths
    remove_column :homes, :bedrooms

    add_column :homes, :beds, :boolean, default: false
    add_column :homes, :baths, :boolean, default: false
    add_column :homes, :bedrooms, :boolean, default: false
  end
end
