# 04 Web APIs: Code Quiz

As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz...

WHEN I click the start button
THEN a timer starts and I am presented with a question

WHEN I answer a question
THEN I am presented with another question

WHEN I answer a question incorrectly
THEN time is subtracted from the clock

WHEN all questions are answered or the timer reaches 0
THEN the game is over

WHEN the game is over
THEN I can save my initials and score

WHEN I save my initials and score
THEN I can view my previous scores
```

The following animation demonstrates the application functionality:

![code quiz](./Assets/04-web-apis-homework-demo.gif)

## Hints

* Use local storage to save high scores.

* Allow plenty of time (at least several hours) to work on this one. So don't wait until the day it is due to begin working on it.

### Demonstration Video

[Panopto: Homework 4 Demo](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=92f2e680-96d7-4fbd-8c1b-ab8000fe2e33)


## Review

You are required to submit the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

## Repository Quality Requirements

* The repository must have a unique name. (e.i. Does not contain words like "assignment" or "homework" in the repository name.)

* Follows best practices for file structure and naming conventions.
  * Avoid uppercase letters in file names. (Except for .js files which export a constructor or React component.)
  * File names MUST NOT contain spaces. Use "-" or "_" to separate words in a file name.
  * Avoid using special characters.
  * Organize assets using folders.
  * Has an `index.html` file at the root of the repo if deploying on GitHub pages.

* Follows best practices for code formatting.
  * Variable and function names use consistent casing such as camelCase or snake case. Avoid single letter names for things.
  * Indentation applied to functions, objects, and other code blocks.
  * Uses consistent indentation characters: tabs, 2 spaces, or 4 spaces.
  * Comments used where code is difficult to understand or reason for a series of expressions is not obvious.

* Repository contains a quality readme with a description, screenshot, link to deployed application, etc. (see [Good README Guide](../../01-HTML-Git-CSS/04-Supplemental/Good-README-GUIDE/README.md))

* Several commits should be made during the development process as features and assets were completed/updated. Refer to [Commit Early and Often](#commit-early-and-often) below.

## Application Quality Requirements

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

* Your commit history is a signal to employers that you are actively working on projects and learning new skills.

* Your commit history allows you to revert your codebase in the event that you need to return to a previous state.

Follow these guidelines for committing:

* Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

* Don't commit half-done work, for the sake of your collaborators (and your future self!).

* Test your application before you commit to ensure functionality at every step in the development process.

We would like you to have well over 200 commits by graduation, so commit early and often!

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
