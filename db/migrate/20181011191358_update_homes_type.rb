class UpdateHomesType < ActiveRecord::Migration[5.2]
  def change
    remove_column :homes, :type
    add_column :homes, :home_type, :string, null: false
  end
end
