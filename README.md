# Kanban Board Application

A fully interactive and responsive Kanban Board for project management. Built with React, TypeScript, and DaisyUI, this app allows users to create, edit, delete, and move tasks (tickets) across multiple swimlanes such as “Todo”, “In Progress”, and “Done”. It includes user authentication, ensuring secure access and personalized ticket assignment.

## Table of Contents

	[Features] (#features)
	[Tech Stack] (#Tech Stack)
3.	[Usage] (#Usage)
4.	[API Endpoints] (#API Endpoints)
5.	[Screenshots] (#Screenshots)
6.	[Deployed Application] (#Deployed Application)
7.	[Future Enhancements] (#Future Enhancements)
8.	[Contributing] (#Contributing)

## Features
	•	User authentication and secure access.
	•	Task creation, editing, and deletion.
	•	Assign tasks to users from a dynamically fetched user list.
	•	Tickets are categorized and moved between Todo, In Progress, and Done swimlanes.
	•	Real-time updates on ticket changes.
	•	Responsive design for mobile and desktop using DaisyUI.
	•	Error handling for failed API requests.

## Tech Stack
	•	Frontend: React, TypeScript, DaisyUI (Tailwind v5.0)
	•	Backend: Node.js, Express.js (for ticket-related API)
	•	Database: PostgreSQL (with Sequelize ORM)
	•	Authentication: JSON Web Token (JWT)
	•	Other Tools: React Router, Axios


## API Endpoints
	•	GET /tickets: Retrieve all tickets.
	•	POST /tickets: Create a new ticket.
	•	PUT /tickets/:id: Update an existing ticket.
	•	DELETE /tickets/:id: Delete a ticket.
	•	GET /users: Retrieve all users (to assign tickets).

 ## Usage
1. Login:
	•	Users must log in to create, view, and manage tickets.
2.	Create Tickets:
	•	Click on the “New Ticket” button to create a task.
3.	Swimlane View:
	•	Drag and drop tickets between Todo, In Progress, and Done swimlanes to manage progress.
4.	Edit/Delete Tickets:
	•	Edit a ticket by clicking the “Edit” button or delete it using the “Delete” button.

  
## Deployed Application

The application is deployed at:

Kanban Board - Live Site

	The live site link will be added once the project is deployed.

## Screenshots

### Future Enhancements
- Drag-and-Drop Functionality: Enable users to drag and drop tickets between swimlanes.
- Real-time collaboration: Add WebSocket support for real-time updates across multiple users.
- Priority and Deadline Support: Add functionality for ticket prioritization and due dates.
- Advanced Search and Filtering: Enable search and filter capabilities for tickets by user, status, or date.

### Contributing

Contributions are welcome! Please follow these steps to contribute:
1.	Fork the repository.
2.	Create a new branch (git checkout -b feature-branch).
3.	Make your changes and commit (git commit -m 'Add some feature').
4.	Push to the branch (git push origin feature-branch).
5.	Open a pull request.

### Questions

Contact me for any further questions;
- Github: [github.com/rvrutan]
- Email: [rutanroni@gmail.com](mailtorutanroni@gmail.com)
