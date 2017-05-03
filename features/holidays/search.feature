Feature: Run search

   Scenario: Run search
     Given I am a customer on the Homepage "https://www.thomascook.com/"
     And I have the following search preferences
     And From: Any London To: Turkey, Any
     And Days to Departure: > 200 days
     And Duration: I don't mind
     And Room 1: 2 Adults, 1 Child, 1 Infant
     When I search using the above preferences
     Then the search results page displays results