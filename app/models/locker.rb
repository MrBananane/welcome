class Locker < ActiveRecord::Base
  establish_connection "locker".to_sym
  self.abstract_class = true
end
