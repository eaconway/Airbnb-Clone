class AddHostStatus < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :host_status, :boolean, null:false, default: false
  end
end
