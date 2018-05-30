Rails.application.routes.draw do
  resources :crypto_indices
  resources :indices
  namespace 'api' do
    namespace 'v1' do
      get '/data', to: 'cryptos#data'
      resources :users
      resources :crypto_portfolios
      resources :cryptos
      resources :portfolios
      resources :indices
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Serve websocket cable requests in-process
  # mount ActionCable.server => 'wss://stream.binance.com'
  #
  # resources :cryptos, param: :slug

end
