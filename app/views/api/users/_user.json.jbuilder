json.extract! user, :id, :email, :fname

json.profileUrl url_for(user.profile_pic)
json.hostStatus user.host_status
