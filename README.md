# 🍳 Food Valley

Food Valley is a personal iOS cookbook application built with **React Native, Expo, and TypeScript**. It allows users to create and manage their own digital recipe collection, track recipes they have completed, and save photos of their finished dishes.

The project was designed as a complete mobile application with persistent local storage, image handling, navigation, audio, and notifications, while maintaining a cozy and simple user interface.

---

## 📱 Features

### 📖 Recipe Management
Users can create and manage their own recipe collection.

- Add new recipes
- View recipe details
- Edit existing recipes
- Delete recipes
- Store ingredients and cooking instructions
- Save recipes locally between app sessions

### ✅ Completed Recipes
Recipes can be marked as completed after cooking them.

- Track completed recipes
- Add a photo of the finished dish
- View completed recipes separately
- Remove or replace completion photos

### 📸 Photo Support
Food Valley integrates with the device's photo library and camera.

Users can attach photos of their finished meals directly to completed recipes.

### 🎵 Background Music
The application includes background music to create a more relaxed cooking experience.

- Multiple built-in music tracks
- Music playback controls
- Music enabled by default
- Audio continues while navigating through the app

### 🔔 Daily Notifications
Food Valley can schedule local notifications that encourage users to cook or explore their saved recipes.

Notifications are handled directly on the device and do not require an external server.

### 💾 Local Data Storage
Recipes are stored locally using **AsyncStorage**, allowing the application to work without requiring an account, database server, or internet connection.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React Native** | Mobile application development |
| **Expo** | Development environment and native functionality |
| **TypeScript** | Application logic and type safety |
| **Expo Router** | File-based navigation and routing |
| **AsyncStorage** | Persistent local recipe storage |
| **Expo Image Picker** | Camera and photo-library access |
| **Expo File System** | Managing locally stored images |
| **Expo Audio** | Background music and audio playback |
| **Expo Notifications** | Local notification scheduling |

---

## 🗂️ Application Structure

The application uses Expo Router for navigation.

```text
app/
├── _layout.tsx
├── welcome.tsx
├── recipe/
│   └── [id].tsx
├── edit-recipe/
│   └── [id].tsx
└── (tabs)/
    ├── recipes
    ├── add-recipe
    └── completed

src/
├── storage/
│   └── recipes.ts
├── types/
│   └── recipe.ts
└── ...

assets/
├── images/
├── fonts/
└── audio/
```

The app is divided into reusable components, storage utilities, recipe types, navigation routes, and application assets.

---

## 🧭 Main App Sections

### My Recipes
Displays the user's saved recipes and provides access to each recipe's details.

### Add Recipe
Allows users to create a recipe by entering its information and saving it to their personal cookbook.

### Completed
Displays recipes the user has already prepared, including photos of the finished dishes.

### Recipe Details
Provides a complete view of a recipe and options for editing, deleting, or marking it as completed.

---

## 💾 Data Persistence

Food Valley currently uses **AsyncStorage** for local persistence.

Recipe information remains available after closing and reopening the application without requiring an external database.

This architecture was intentionally chosen for the current version because Food Valley is designed as a personal, offline-first application.

---

## 🚀 Running the Project

### Requirements

Make sure the following are installed:

- Node.js
- npm
- Expo
- Git

Clone the repository:

```bash
git clone https://github.com/Kemuel05/Food-Valley.git
```

Move into the project directory:

```bash
cd Kitchen-Helper-Project
```

Install dependencies:

```bash
npm install
```

Start the Expo development server:

```bash
npx expo start
```

You can then run the application using an iOS device or another supported Expo development environment.

---

## 📲 iOS

Food Valley was primarily designed and tested for **iOS**.

The application has been tested on a physical iPhone and includes native functionality such as:

- Camera access
- Photo-library access
- Local notifications
- Persistent file storage
- Background audio

---

## 📸 Screenshots


<p align="center">
  <img src="https://github.com/user-attachments/assets/67e60a81-c232-4b4e-85b2-7b87c84ab94e" width="190" />
  <img src="https://github.com/user-attachments/assets/d1616dec-6116-47c3-8ed4-dfd13431a0de" width="190" />
  <img src="https://github.com/user-attachments/assets/d61b55a1-b7f9-4993-982a-b3787ed3d291" width="190" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/edd66eac-9107-4e3c-9276-a160c8d1aa71" width="190" />
  <img src="https://github.com/user-attachments/assets/4a301d5a-782a-49d4-8831-06a307e4100d" width="190" />
</p>


---

## 🎯 Project Goals

Food Valley was created to explore the process of building a complete mobile application rather than only individual UI components.

The project provided experience with:

- Designing a multi-screen mobile application
- Managing application state and persistent data
- Implementing CRUD operations
- Working with native iOS functionality through Expo
- Managing images and local files
- Implementing audio playback
- Scheduling local notifications
- Designing reusable React Native components
- Using TypeScript in a larger application
- Testing and deploying an application to a physical iPhone
- Managing development using Git and GitHub

---

## 🔮 Future Improvements

Possible future additions include:

- Cloud synchronization
- User accounts
- Recipe categories and tags
- Search and filtering
- Favorites
- Ingredient-based recipe suggestions
- Improved music selection controls
- Custom icons and additional visual polish
- Recipe import/export
- Sharing recipes between users

---

## 📌 Project Status

Food Valley's core functionality is complete.

Current development is focused primarily on visual improvements, additional customization, and quality-of-life features.

---

## 👨‍💻 Author

**Kemuel Cubero**

Software Engineering Student  
University of Puerto Rico at Mayagüez

[GitHub](https://github.com/Kemuel05)
