This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## To Run the Project Against the Simulator

### Start the simulator (Note: This will be replaced with a node server)

1. install `ruby` and `gem` ([`rbenv`](https://github.com/rbenv/rbenv#installation) is a convenient way to do this)
1. `gem install bundler` 
1. `bundle`
1. `bundle exec rackup`

### Start the web server

1. `brew install yarn`
1. `yarn start`
1. Navigate to `localhost:3000`


## To Run the Tests

### Smoke test (rspec is to be considered a *proposed* framework for this piece)

1. `brew install chromedriver`
1. `bundle`
1. `bundle exec rspec`