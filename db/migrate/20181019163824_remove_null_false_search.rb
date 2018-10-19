class RemoveNullFalseSearch < ActiveRecord::Migration[5.2]
  def change
    remove_column :searches, :author_id


    add_column :searches, :author_id, :integer
    add_index :searches, :author_id
  end
end
