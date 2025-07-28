# 👟 3D Shoe Viewer

A web application that displays a **realistic, rotatable 3D shoe model** using **React** and **Three.js** via the `@react-three/fiber` and `@react-three/drei` libraries. Built to showcase interactive 3D content directly in the browser.

## 🔗 Live Demo

👉 [Click here to view the 3D Shoe Viewer](https://shoe-3-d-viewer-git-main-lahari779783s-projects.vercel.app)


---

## ✨ Features

- 🌀 **Interactive 3D Model** – Smooth camera orbiting using mouse controls
- 🌐 **Realistic Environment** – HDR lighting setup for better visual experience
- ⌛ **Custom Loader** – Spinner displayed while the 3D model loads
- 🔦 **Spotlights & Shadows** – Soft shadows and multiple light angles for depth

---

## 🛠️ Tech Stack

- **Frontend:** React, JavaScript
- **3D Engine:** Three.js (`@react-three/fiber`, `@react-three/drei`)
- **Deployment:** Vercel

---

## 📂 Project Structure

```bash
├── public/
│   ├── shoe.glb          # 3D shoe model
│   └── studio.exr        # HDR environment
├── src/
│   ├── App.js            # Main scene setup
│   ├── ShoeViewer.jsx    # 3D model and environment
│   ├── index.js          # Entry point
│   └── index.css         # Styles
