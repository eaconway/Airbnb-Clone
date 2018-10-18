class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false
      t.integer :home_id, null: false
      t.text :body, null: false, default: ""
      t.float :rating, null: false
      t.timestamps
    end

    add_index :reviews, [:author_id , :home_id], unique: true
  end
end
