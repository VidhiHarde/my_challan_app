# Traffic Awareness & Invoice Management - React Native App

### Project Overview
A cross-platform mobile application built with **React Native** and **Expo**. The app serves a dual purpose: educating users on traffic regulations and providing a streamlined interface for invoice management.

### Key Features
* **Tab-Based Navigation:** Implemented a `BottomTabNavigator` to allow seamless switching between "Traffic Rules" and "Invoice" modules.
* **Custom UI Components:** Developed modular components like `AppHeader` and custom Tab Bar icons to enhance user experience.
* **Responsive Styling:** Utilized `RFValue` (Responsive Font Value) to ensure the UI scales correctly across different mobile screen sizes and densities.
* **Asset Integration:** Managed local image assets and integrated third-party vector icons (`Ionicons`) for a professional visual look.

### Technologies Used
* **React Native:** Core framework for building the native mobile interface.
* **Expo:** Used for development environment setup and testing.
* **React Navigation:** Implemented `createAppContainer` and `createBottomTabNavigator` for app flow.
* **JavaScript (ES6):** Used class-based components and arrow functions for logic.

### What I Learned
* **Mobile Lifecycle:** Understood how mobile screens mount and unmount during navigation.
* **Component Architecture:** Practiced breaking down a large app into smaller, reusable pieces (Screens vs. Components).
* **Navigation Logic:** Learned how to pass state through navigators to dynamically update the UI based on the active route.

### How to Run
1. Install the **Expo Go** app on your mobile device.
2. Clone this repository and run `npm install`.
3. Run `npx expo start` and scan the QR code to view the app live.
