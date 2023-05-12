Google doc Link: https://docs.google.com/document/d/1Mtx-N5fVoasvn9iA9EQ4HZ29lVIMi8V3Msq2CFAFvL4/edit?usp=sharing 

Overview
Test the functionality of the game 

Links
http://localhost:3000/


Test Criteria:
* Make sure 5 random robots show up when user clicks draw
* Add to Duo button works 
* Remove from duo button works 
* Duel button works 
* Notification of some kind to single the match has started 
* win/losses are incremented correctly 
* Notification for win/loss appears 
* Play again button shows up after the match 
* Play again button restarts the game 


Entry Criteria: 
* Test Criteria provided 
* Running version of the game 
* A machine to that can run a browser 


Exit Criteria:
* All the tests pass
* The allotted time is up


Other Details 
* Environment: Windows ten
* Any browser with the exception of Internet explor. Chrome is the preferred default 


Coverage:
* Complete coverage 




Test case1


Description
Make sure 5 robots appear when Draw button is clicked, and the “add to duo” button adds the correct robot


Steps:
* Navigate to http://localhost:3000/ after running npm start
* Click on the draw button 
* Confirm 5 robots appear 
* When you click on “add to duo” the same robot shows up under “your duo”
* When 2 robots appear under your duo the duel button appears 
* The remove robot button takes the robot from your duo and adds it back to the draw hand 


Test Post-conditions:
* All buttons worked correctly 


Other Details:
* Environment: os: WINDOWS, Browser: CHROME




Test case2


Description
Duel button works and notifies the user on wins/losses and the play again button appears 


Steps:
* Navigate to http://localhost:3000/ after running npm start
* Click on the draw button 
* Choose two robots  
* Click the duel button 
* Confirm notifications appear when the duel starts / ends
* Play again button appears 
 


Test Post-conditions:
* All buttons worked correctly 


Other Details:
* Environment: os: WINDOWS, Browser: CHROME






Bug Report 


Description
The “See all bots” button crashes the server


Steps to reproduce:
* Navigate to http://localhost:3000/ after running npm start
* Click on the get all robots button 


Expected Result:
* All available robots appear on the screen


Actual Result:
* The server crashes. The game appears to run still 


Other Details:
* Environment: os: WINDOWS, Browser: CHROME