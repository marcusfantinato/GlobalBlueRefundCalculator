Feature: Calculate refund

As a traveller I want to calculate refund amounts for several purchases before proceeding to a refund office to get an overview on my expected refunds

Scenario Outline: Check if Taveller is able to calculate his refund
Given Traveller is on Refund Calculator Page
When  Traveler Chooses '<Country>'
And   Enter '<Value>' in Purchase Amaunt field
And   Click Calculate
And   Click (+)
Then '<Value>' and '<Tax>' should be displayed correctly in the total Purchase and total Refund Field.

   Examples:
      | Country           | Value  | Tax    |
      | Norway            | 2000   | 260    |
      | Greece            | 312    | 38     |
      | Republic of Korea | 987456 | 68000  |      
 
Scenario Outline: Check if System is calculating the Total Refund and the Purchase Amaunt correctly when there is more than one purchase value
Given Traveller is on Refund Calculator Page
When  Traveler Chooses '<Country>'
And   Enter '<Value>' in Purchase Amaunt field
And   Click Calculate
And   Click (+)
And   Enter '<Value2>' in Purchase Amaunt field
And   Click Calculate
And   Click (+)
And   Enter '<Value3>' in Purchase Amaunt field
And   Click Calculate
And   Click (+)
Then '<Value>'+'<Value2>'+'<Value3>' Amount should be displayed correctly in the Total Purchase Field and '<Tax>' + '<Tax2>' + '<Tax3>' should be displayed correctly in the Total Refund

   Examples:
      | Country  | Value    | Tax     | Value2  | Tax2   | Value3  | Tax3   |
      | Italy    | 200      | 25      | 321     | 40     | 456     | 56     |
      | Poland   | 354      | 40      | 754     | 95     | 1587    | 203    |
      | Lebanon  | 21234567 | 1576000 | 2100000 | 156000 | 3216547 | 239000 |
 
Scenario Outline: Check if Total Purchase and Total Refund values are displayed correctly in the grid When a value is removed
Given Traveller is on Refund Calculator Page
When  Traveler Chooses '<Country>'
And   Enter '<Value>' in Purchase Amaunt field
And   Click Calculate
And   Click (+)
And   Enter '<Value2>' in Purchase Amaunt field
And   Click Calculate
And   Click (+)
And   Enter '<Value3>' in Purchase Amaunt field
And   Click Calculate
And   Click (+)
And   Click (-) and remove Value2 and Value3
Then '<Value>' and '<Tax>' should be displayed correctly in the total Purchase and total Refund Field.


   Examples:
      | Country    | Value | Tax | Value2 | Value3 |
      | Spain      | 200   | 22  | 321    | 456    |     
      | Poland     | 354   | 40  | 582    | 8522   |    
      | Singapore  | 852   | 46  | 875    | 2654   |  

      
 Scenario Outline: Check if The Currency Symbol are displayed correctly
Given Traveller is on Refund Calculator Page
When  Traveler Chooses '<Country>'
And   Enter '<Value>' in Purchase Amaunt field
And   Click Calculate
And   Click (+)
And   Enter '<Value2>' in Purchase Amaunt field
And   Click Calculate
And   Click (+)
Then   The Symbol should be displayed according to the country chosen. E.g "<Country>" = "<Symbol>"

   Examples:
      | Country    | Value | Value2 | Symbol |
      | Italy      | 200   | 582    | EUR    |
      | Argentina  | 312   | 385    | ARS    |
      | Denmark    | 7548  | 4562   | DKK    |
      
      