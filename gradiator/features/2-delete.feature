Feature: User can delete a book
  As a User
  I want to remove books from my collection
  So that it accurately represents my favorite books

  Scenario: A User clicks the remove button from details
    Given the User on the book detail page would like to remove a book from the collection
    When the User clicks on the "Delete Book" button
    Then the book should be removed from the collection
