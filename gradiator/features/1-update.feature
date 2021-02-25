Feature: User can update book details
  As a user
  I want to update the details of a book
  So that it displays the way I want it to

  Background: The User is viewing a books details
    Given the user is on the book detail page and would like to update the information stored for the book

  Scenario: The User can see a form to update details
    When the user clicks on the "Update Details" button
    Then the form containing the details should be revealed

  Scenario: The User can submit the form with updated details
    Given the user clicks "Update Details" and updates book details in the form
    When the user click on the "Update Book" button
    Then the user-provided details for that book should be saved
