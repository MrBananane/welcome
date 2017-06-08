class InOutController < ApplicationController

  def entrance
    return if params[:nfc_tag].nil?
    locker_user = LockerUser.select(:id, :NFC_tag).find_by(NFC_tag: params[:nfc_tag])
    return if locker_user.nil?
    user = User.find_by(locker_user_id: locker_user.id)
    return if user.nil?
    user.update(is_present: true)
    User.set_entered_user(user.id)

    respond_to do |format|
      format.html { head :ok }
    end
  end

  def exit
    return if params[:nfc_tag].nil?
    locker_user = LockerUser.select(:id, :NFC_tag).find_by(NFC_tag: params[:nfc_tag])
    return if locker_user.nil?
    user = User.find_by(locker_user_id: locker_user.id)
    return if user.nil?
    user.update(is_present: false)
    User.set_entered_user(0)

    respond_to do |format|
      format.html { head :ok }
    end
  end

end
