# Blazeburn Restaurant Website

This is a modern, responsive website for a fictional restaurant called "Blazeburn," built with Next.js and styled with Tailwind CSS and ShadCN UI components. The project was created and developed within Firebase Studio.

## Features

-   **Responsive Design:** Looks great on desktops, tablets, and mobile devices.
-   **Modern UI:** Clean and professional design using ShadCN UI components.
-   **Interactive Sections:** Includes sections for Hero, About, Menu, Gallery, and Contact.
-   **Embedded Google Map:** Shows the restaurant's location.
-   **Contact Form:** A functional form for inquiries and reservations (demo).

## Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/) (App Router)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
-   **Icons:** [Lucide React](https://lucide.dev/guide/packages/lucide-react)
-   **Deployment:** [Firebase App Hosting](https://firebase.google.com/docs/app-hosting)

## Getting Started

### Prerequisites

-   Node.js (v18 or later)
-   npm or yarn

### Installation & Running Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/GoradiaNishant/Blazeburn-website-.git
    cd Blazeburn-website-
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is configured for easy deployment with [Firebase App Hosting](https://firebase.google.com/docs/app-hosting).

To deploy your own version:

1.  **Create a Firebase Project:** Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2.  **Install Firebase CLI:** If you haven't already, install the Firebase CLI globally:
    ```bash
    npm install -g firebase-tools
    ```
3.  **Login to Firebase:**
    ```bash
    firebase login
    ```
4.  **Initialize Firebase in your project:**
    ```bash
    firebase init hosting
    ```
    -   Select your Firebase project.
    -   Follow the prompts to configure App Hosting.
5.  **Deploy the website:**
    ```bash
    firebase deploy
    ```
