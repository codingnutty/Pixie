get '/' do
  # @photos = Photo.all
  erb :index
end


get '/media/popular' do
  content_type :json
  client = Instagram.client
  client.media_popular.to_json
end

get '/media/search' do
  if session_logged_in? && (params[:name] != nil)
    Location.create(latitude: params[:latitude], longitude: params[:longitude], name: params[:name], user_id: session_current_user.id)
  end
  content_type :json
  client = Instagram.client
  client.media_search(params[:latitude], params[:longitude]).to_json
end

get '/media/tags' do
  if session_logged_in? && (params[:hashtag] != nil)
    Tag.create(hashtag: params[:hashtag], user_id: session_current_user.id)
  end
  content_type :json
  client = Instagram.client
  client.tag_recent_media(params[:hashtag]).to_json
end


get '/logout' do
  session.clear
  redirect ('/')
end

not_found do
  erb :error
end

