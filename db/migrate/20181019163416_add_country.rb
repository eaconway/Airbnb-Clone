class AddCountry < ActiveRecord::Migration[5.2]
  def change
    add_column :homes, :country, :string, default: ''
  end
end
