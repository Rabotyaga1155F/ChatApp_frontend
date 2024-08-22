### README.md

# ChatApp Frontend

This is the frontend of an online chat application that communicates with a backend built using C# Web API, SignalR, and Redis. The frontend is developed using Next.js, a React framework, and is designed to provide a responsive and interactive chat experience.

## Features

- **Real-time Messaging**: Powered by SignalR, providing instant updates and communication between users in chat rooms.
- **Dynamic Chat Rooms**: Users can join specific chat rooms and exchange messages with other participants.
- **Responsive Design**: The UI is optimized for both desktop and mobile devices, ensuring a seamless experience across all screen sizes.
- **Environment-based Configuration**: The backend URL is stored securely in an environment variable for easy configuration across different environments.

## Project Structure

- **Next.js**: The primary framework for building the frontend.
- **TypeScript**: For type-safe development.
- **Tailwind CSS**: For styling and responsive design.

## Prerequisites

- Node.js (version 18 or higher)
- npm (version 8 or higher)
- A running instance of the ChatApp backend (C# Web API with SignalR and Redis)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Rabotyaga1155F/ChatApp_frontend.git
cd ChatApp-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root of the project and add the following line:

```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000/chat
```

This URL should point to the backend API endpoint that handles SignalR connections.

### 4. Run the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### 5. Build for Production

To create an optimized production build:

```bash
npm run build
```

### 6. Start the Production Server

After building the application, you can start the production server with:

```bash
npm start
```

The production server will run on `http://localhost:3000` by default.

## Usage

1. **Join a Chat Room**: Enter a chat room name and your username to join a chat.
2. **Send Messages**: Type your message and click "Отправить" to communicate with other users in the same room.
3. **Leave Chat**: Click "X" to leave the chat room.

## Backend Setup

To run the backend of this application, please visit the [ChatApp Backend Repository](https://github.com/Rabotyaga1155F/ChatApp_backend) and follow the instructions.

### Backend Setup with Docker

The backend project includes a `Dockerfile` and a `docker-compose.yml` file for easy setup. To run the backend using Docker, follow these steps:

1. **Clone the Backend Repository**

   ```bash
   git clone https://github.com/Rabotyaga1155F/chatapp_backend.git
   cd chatapp_backend
   ```

2. **Build and Run with Docker Compose**

   Ensure Docker and Docker Compose are installed on your machine. Then, run the following command:

   ```bash
   docker-compose up --build
   ```

   This will build the necessary images and start the backend services, including the C# Web API, SignalR hub, and Redis.

3. **Access the Backend**

   The backend API should be accessible at `http://localhost:5000/chat`.


---
