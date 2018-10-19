class UpdateSearchesQuery < ActiveRecord::Migration[5.2]
  def change
    remove_column :searches, :query

    add_column :searches, :query, :string
  end
end
