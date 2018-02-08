require 'spec_helper'

describe 'Example App' do
  before do
    system 'yarn start &'
    system 'bundle exec rackup &'
  end

  after do
    system 'killall node'
    system 'killall rackup'
  end

  it 'displays connected status' do
    visit '/'

    expect(page).to have_content 'The connected state is connected'
  end
end
