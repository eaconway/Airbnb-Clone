class AddDescAndExtraInfo < ActiveRecord::Migration[5.2]
  def change
    add_column :homes, :description, :text
    add_column :homes, :extra_info, :text
  end
end
