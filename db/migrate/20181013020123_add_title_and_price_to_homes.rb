class AddTitleAndPriceToHomes < ActiveRecord::Migration[5.2]
  def change
    add_column :homes, :title, :string, null:false, default: ""
    add_column :homes, :price, :integer, null:false, default: 0
  end
end
