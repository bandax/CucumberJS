  
@all
Feature: Home page

  Background: Go to Home Page
    Given I open "https://www.epam.com/" url   

  @epam
  Scenario: As a User I can get access to the Home page    
    Then Title of page should be "EPAM | Enterprise Software Development, Design & Consulting"    
  
  @epam
  Scenario: As a User I want to go to Contact Us page from Home page    
    Then There is a button with the text "Contact Us"
    And Click on the button
    Then Title of page should be "Learn more about EPAM and Contact Us | EPAM"    