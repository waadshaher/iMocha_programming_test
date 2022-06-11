# iMocha_programming_test

## LEVEL 1 PROGRAMMING TEST

### Section A

Question 1
Please create a HTML form with the following user input elements:
- Name
- DOB
- Address
- Postcode
- State (Disabled by default)

Question 2
State is expected to be filled automatically after the postcode has been entered
by the user, the backend should be able to return the state based on the
postcode (please refer to the test cases below, you will only need to cater for
that 3 postcodes).

Question 3
Backend should have the following API endpoints:
- Retrieve the state by postcode
- Submit/Save

Question 4
When a user clicks on the "Submit" button, the form should make an AJAX call
to the "Submit/Save" endpoint and insert into the database.

Question 5
Use your preferred database server and create a table with the following
columns:
1) name
2) dob
3) address
4) postcode
5) state_id

Question 6
Query the submitted data with the following columns:
• Name, Age, Address, Postcode, State

### Section B : Test Cases

Question 1
• Name: Andy
• DOB: 1990-09-10
• Address: Jalan 1, 2 and 3
• Postcode: 35000

Question 2
• Name: Jack
• DOB: 2000-01-01
• Address: Jalan 4, 5 and 6
• Postcode: 50000

Question 3
• Name: Ong
• DOB: 1966-05-30
• Address: Jalan 7, 8 and 9
• Postcode: 80000
