# Blazeburn: A Sizzling Restaurant Website

Welcome to the official repository for the Blazeburn restaurant website, a modern, fully responsive web application built from the ground up in **Firebase Studio**. This project showcases a fictional restaurant and is designed to be a perfect starting point for any culinary business looking to establish an online presence.

**[Live Demo](https://blazeburn.in)**

## 🔥 Features

-   **Stunning Hero Section:** A captivating introduction to the restaurant.
-   **Responsive Design:** Flawless viewing experience on desktops, tablets, and mobile devices.
-   **Modern UI/UX:** Built with the latest web technologies, including ShadCN UI for a clean, professional aesthetic.
-   **Interactive Sections:** Dedicated components for:
    -   About Us
    -   Menu (Coming Soon!)
    -   Gallery
    -   Contact & Reservations
-   **Interactive Google Map:** An embedded map to display the restaurant's location.
-   **Functional Contact Form:** A user-friendly form for inquiries and booking requests.

## 🛠️ Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/) (using the App Router)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
-   **Icons:** [Lucide React](https://lucide.dev/guide/packages/lucide-react)
-   **Hosting & Deployment:** [Firebase App Hosting](https://firebase.google.com/docs/app-hosting)

## 🚀 Getting Started

To run this project locally, you'll need Node.js (v18 or later) installed on your machine.

### Installation

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/GoradiaNishant/Blazeburn-website-.git
    cd Blazeburn-website-
    ```

2.  **Install Dependencies:**
    This project uses `npm` for package management.
    ```bash
    npm install
    ```

3.  **Run the Development Server:**
    ```bash
    npm run dev
    ```

Now, open [http://localhost:3000](http://localhost:3000) in your browser to see the website in action.

## ☁️ Deployment

This project is pre-configured for seamless deployment using **Firebase App Hosting**.

To deploy your own version of this site, follow these steps:

1.  **Create a Firebase Project:**
    If you don't have one already, go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.

2.  **Install the Firebase CLI:**
    Install the Firebase command-line tools globally on your machine.
    ```bash
    npm install -g firebase-tools
    ```

3.  **Login to Firebase:**
    Authenticate with your Google account.
    ```bash
    firebase login
    ```

4.  **Initialize Firebase Hosting:**
    In your project's root directory, run the initialization command.
    ```bash
    firebase init hosting
    ```
    When prompted, follow the on-screen instructions to connect to your Firebase project.

5.  **Deploy the Website:**
    This command will build your Next.js app and deploy it to Firebase.
    ```bash
    firebase deploy
    ```

Once finished, the CLI will provide you with your live URL. You can also connect a custom domain like `blazeburn.in` through the Firebase console.

---
