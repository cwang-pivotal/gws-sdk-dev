require 'api_sim'

app = ApiSim.build_app do
  configure_endpoint 'GET', '/api/v1/connectivity', {connected: true}.to_json, 200, {'Access-Control-Allow-Origin' => '*'}
end

run app