require 'spec_helper'

describe 'Example App' do
  before do
    system 'killall node'
    system 'killall rackup'

    system 'yarn start &'
    system 'bundle exec rackup &'
  end

  after do
    system 'killall node'
    system 'killall rackup'
  end

  it 'displays connected status' do
    visit '/'

    expect(page).to have_content `Connect to Your Aircraft's Wireless Network`
    expect(page).to have_content 'Internet: Available'
    expect(page).to have_content 'Bearer: sbb'
    expect(page).to have_css 'li.moderate .present'
    expect(page).to have_css 'li.strong .absent'
    click_on 'Connect'

    system 'killall rackup'

    page.driver.browser.navigate.refresh

    expect(page).to have_content 'Internet: Unavailable'
    expect(page).not_to have_content 'Bearer'
    expect(page).not_to have_content 'Signal Strength'
    expect(page).not_to have_button 'Connect'
  end
end
