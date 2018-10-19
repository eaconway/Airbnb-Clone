json.homes do
  @homes.each do |home|
    json.set! home.id do
      json.partial! 'home', home: home
    end
  end
end

json.hostings do
  @hostings.each do |hosting|
    json.set! hosting.id do
      json.extract! hosting, :id, :host_id, :home_id
    end
  end
end
