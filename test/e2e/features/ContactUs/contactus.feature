@all
Feature: Contact Us

    Background: Go to Contact Us page
        Given I open "https://www.epam.com/about/who-we-are/contact" url           
    
    @epam
    Scenario Outline: As a user I can send an email     
    Given Click accept the cookies <Cookie> 
    Given I fill out the form with <FirstName>,<LastName>,<Email>,<Reason>,<Consent>    
    Then All fields are filled out with values <FirstName>,<LastName>,<Email>,<Reason>,<Consent>

    Examples: Form Contact Data
    |FirstName|LastName|Email           |Reason                               |Consent |Cookie|
    |John     |Kennedy |john@test.com   |Talk to Sales in Continental Europe  |Yes     |Yes   |
    |Anny     |Lee     |anny@test.com   |Talk to Sales in the UK              |No      |No    |