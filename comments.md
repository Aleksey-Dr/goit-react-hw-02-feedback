07.05.2023 Step 1

1. Added "import { Component } from 'react';" to the App.jsx file.
2. Added "export class App;" to the App.jsx.
3. Changed "App" component to "App" component-class.
4. Added the method render() to the "App" component-class.
5. Added the method render() to the "App" component-class.
6. Added a markup to the render() of "App" component-class.
7. npm i prop-types
8. npm i clsx

Step 2

1. Added new markup to the render() of "App" component-class.
2. Added a method countTotalFeedback() for count of all feedbacks (derived data)
   to the "App" component-class.
3. Added a method countPositiveFeedbackPercentage() (derived data) to the "App"
   component-class.

   08.05.2023 Step 3

4. Created a "statistics" folder in the "components" folder.
5. Created a Statistics.jsx file in the "statistics" folder.
6. Created a "Statistics" component in the Statistics.jsx for show statistics.
7. Added a markup to the "Statistics" component.
8. Added "export default Statistics;" to the Statistics.jsx.
9. Added props to the "Statistics" component.
10. Added import the "Statistics" component to the App.jsx.
11. Added parameters to the <Statistics> component in the "App".
12. Changed the part markup in the render() of the "App" component-class to
    <Statistics> component.
13. Created a "feedbackOptions" folder in the "components" folder.
14. Created a FeedbackOptions.jsx file in the "feedbackOptions" folder.
15. Created a "FeedbackOptions" component in the FeedbackOptions.jsx
16. Added a markup to the "FeedbackOptions" component.
17. Added props to the "FeedbackOptions".
18. Added "export default FeedbackOptions;" to the FeedbackOptions.jsx.
19. Added import the "FeedbackOptions" component to the App.jsx.
20. Changed the part markup in the render() of the "App" component-class to
    <FeedbackOptions> component.
21. Added parameters to the <FeedbackOptions> component in the "App".
22. Created a "section" folder in the "components" folder.
23. Created a Section.jsx file in the "section" folder.
24. Created a "Section" component in the Section.jsx.
25. Added a markup to the "Section" component.
26. Added "{children}" props to the "Section" component.
27. Added "{children}" element to the "Section" component.
28. Added "export default Section;" to the Section.jsx.
29. Added import the "Section" component to the App.jsx.
30. Added parameters to the <Section> component in the "App" component-class.
31. Added the <Statistics> component in <Section>.
32. Added the <FeedbackOptions> component in <Section>.
33. Added parameters to the <Section> component in the "App" component-class.

Step 4 "Expanded functionality of the application"
1. Added render the "Statistics" block by condition.
2. Created a "notification" folder in the "components" folder.
3. Created a Notification.jsx file in the "notification" folder.
4. Created a "Notification" component in the Notification.jsx.
5. Added a markup to the "Notification" component.
6. Added "export default Notification;" to the Notification.jsx.
7. Added props to the "Notification" component.
8. Added import the "Notification" component to the Statistics.jsx.
9. Added the <Notification> component to the "Statistics" component.
10. Added parameters to the <Notification> component in the "Statistics" component.

Commons
1. Added PropTypes to the "Notification" component.
2. Added PropTypes to the "Section" component.
3. Added PropTypes to the "Statistics" component.
4. Added PropTypes to the "FeedbackOptions" component.

CSS
1. Created a Notification.module.css in the "notification" folder.
2. Created a FeedbackOptions.module.css in the "feedbackOptions" folder.
3. Added classNames to the "Notification" component.
4. Added classNames to the "FeedbackOptions" component.

12.05.2023
Fixed (feedback)
1. Created an "onLeaveFeedback" method in the "App" component-class.
2. Added argument to the "onLeaveFeedback" method.
3. Sended the "onLeaveFeedback" method to props of the <FeedbackOptions> component.
4. Changed props of the "FeedbackOptions" component to "options" - (array of "state" elements) and "onLeaveFeedback" - 
   (method for count all feedbacks) props.
5. Changed propTypes of the FeedbackOptions.
6. Render the "Notification" component move to the "App" component-class.
7. Add index.js files to the folders: "feedbackOptions", "notification", "section", "statistics".

TOTAL:
1. Unite all methods of count all feedbacks to an "onLeaveFeedback" method.
2. Render the "Notification" component move to the "App" component-class.