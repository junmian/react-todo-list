# React Todo List

## Overview

This is a learning activity in which I followed a tutorial from MDN Web Docs to build a CRUD (Create, Read, Update, Delete) application using React. The app is bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The repo serves as a snapshot of the beginning of my React learning journey. 

## App Description

The Todo app allows a user to read a list of tasks, add a task, edit an existing task, and delete a task. The user can also view a specific subset of tasks: All tasks, Active tasks, or Completed tasks.

## Learning Points

Following a structured tutorial was a great way for me to learn how to assemble my very first React application. A couple of highlights: I learned...

- about the basic `app` component structure.
- that there are multiple ways to solve a problem. For example, the tutorial did not cover how to prevent the user from submitting empty tasks from being added. The standard solution would be to add a check in the form of validation for empty input field in the `handleSubmit()` function. But who would have thought the problem can also be solved - creatively - with plain CSS. Although I recognize the former solution is better optimized to address the problem than the latter solution, it was nonetheless an aha moment to learn how using a placeholder on the input, and changing the `pointer-events`, can disable the Add button when the input is empty. These sorts of discoveries are what make programming interesting!

## Styling

I like apps that not only function well but also look nice because it improves the user experience. So, I added additional styling to make the app more presentable, which was also a great way to learn which React component is connected to which CSS element.

|                                           **Original Styling**                                           |                                               **My Styling**                                                |
| :------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/junmian/todo-react-app/blob/main/original-styling.png" alt="Original Styling"> | <img src="https://github.com/junmian/todo-react-app/blob/main/my-styling.png" alt="My Styling"> |

## App Demo

The Todo app can be used at: https://react-todo-list-2022.netlify.app/

