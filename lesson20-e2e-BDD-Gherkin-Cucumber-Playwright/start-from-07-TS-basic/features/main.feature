Feature: MainPage tests

  Background:
    Given the user is navigated to the main page

#   Scenario: Click GetStarted button that redirect to /docs/intro page in the same tab
#     When the user click the GetStarted button that opens in the same tab
#     Then the tab should have the GetStarted URL 'https://playwright.dev/docs/intro'

#   Scenario: Click GitHubStars button that redirect to github in new tab
#     When the user click the GitHubStars button that opens in a new tab
#     Then the new tab should have the GitHubStars URL 'https://github.com/microsoft/playwright'

#   Scenario: Click GitHubStarsGazers button that redirect to github in new tab
#     When the user click the GitHubStarsGazers button that opens in a new tab
#     Then the new tab should have the GitHubStarsGazers URL 'https://github.com/microsoft/playwright/stargazers'

#   Scenario: Click GitHub button in header that redirect to github in new tab
#     When the user click the GitHub button in header that opens in a new tab
#     Then the new tab should have the GitHub URL 'https://github.com/microsoft/playwright'

#   Scenario: Click Discord button in header that redirect to github in new tab
#     When the user click the Discord button in header that opens in a new tab
#     Then the new tab should have the Discord URL 'https://discord.com/servers/playwright-807756831384403968'

#   Scenario: Check that by default site open with system mode
#     When the site is opened
#     Then the system mode is chosen

#   Scenario: Check that switch mode button change mode to light first time
#     When the user click switch mode button first time
#     Then the mode should change to 'light' first time

#   Scenario: Check that switch mode button change mode to dark second time
#     When the user click switch mode button second time
#     Then the mode should change to 'dark' second time

#   Scenario: Check that switch mode button change mode to system third time
#     When the user click switch mode button third time
#     Then the mode should change to 'system' third time

  Scenario: Check that user could search for data from header
   When the user click search button
   And the user type 'assertion'
   Then the input field is filled with 'assertion'
   And the data is found
   And the data is found as array
#   Scenario: Verify header menu contains menu options
#     When the user reads the header menu options
#     Then the user verifies that header menu contains the following options:
#       | options |
#       | For you |
#       | Recent  |
#       | Starred |
#       | Plans   |
#       | Spaces  |
#   Scenario: Click jira side menu option 'Customize sidebar' opens customize modal
#     When the user clicks the 'Customize sidebar' menu item
#     Then the customize sidebar modal should be opened
#     When the user reads the customize navigation elements
#     Then the following options should be present in the customize sidebar modal:
#       | options |
#       | For you |
#       | Recent  |
#       | Starred |
#       | Plans   |
#       | Spaces  |
