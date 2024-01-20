Objective :- Build a Quiz Game Web Application and to learn fundamentals of JavaScript.

How Application Works ?
1. Everytime we reload the page question options get shuffled.
2. We get next question either by clicking on option button or next button.
3. If we click on option button and option is correct then we get +1 marks and if option is incorrect then 0.25 marks deducted from the score obtained.
4. Next button simply skip the question without addition and deduction of marks.
5. When quiz get completed, we see "Quiz Completed" message with score obtained and our next button disappear.

Learnings :-
1. Get required elements by using document.getElementById() method.
2. Dynamically add content using name_of_element.textContent="content";
3. Dynamically created option buttons for each question using  document.createElement("button") method.
4. Appending to optionsDiv using optionsDiv.appendChild(optionBtn).
5. Added addEventListener to each option button and to next button.
6. When Quiz get completed we have removed nextBtn using nextBtn.remove() method.
