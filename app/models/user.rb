class User < ApplicationRecord
  @@entered_user = 0

  def self.set_entered_user(id)
      @@entered_user = id
  end

  def self.get_entered_user
      return @@entered_user
  end
end
