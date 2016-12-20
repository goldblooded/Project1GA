# Project1GA
https://github.com/goldblooded/Project1GA

Language/tech used: 
Vanilla JS, jQuery, CSS, HTML

Guidelines/Rules:
A variation on the classic Guess Who board game. Instead of two players with two boards however, the user is one player playing against themselves. The objective is to figure out who the computer has randomly selected as the Guess Who character within 5 questions. A dropdown and searchable list of yes/no questions from a const array of question objects is prseented to the user to 'ask'. Each character has a certain number of attributes and values/properties in the const array of person objects. Both vary from character to character. The computer responds with a display prompt indicating the answer and how many questions the user has left to ask. The user uses the process of elimination by clicking on character tiles to 'eliminate' them as the possible character which changes the opacity. If the user changes their mind they may click on the tile again to change the opacity back to 1. 

Lessons learned:
Many. The positives: click handlers are great for board games that need several compenents. jQuery reduces work and coding errors. Hard lessons: don't change topics.. think and plan out what is feasible given the time constraints and personal knowledge and comfort. Don't neglect styling for the sake of logic/coding and wait until the last minute. I am a very visual person so coding and then viewing the physical page would have allowed me to to get my thoughts and ideas together more effectively. I did a few things to make the coding more flexible, i.e. iterating over an array to assign id's to empty id strings. Also, not using inheritance with classes to generate new instances of class objects because I wanted flexibility with number of objects and number of attributes. 

Improvements:
Many. Time efficiency, understanding/foreseeing what limitations I might have.
