class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :image_url
      t.string :nfc_tag
      t.boolean :is_present, default: false
      t.integer :locker_user_id, foreign_key: true

      t.timestamps
    end
  end
end
