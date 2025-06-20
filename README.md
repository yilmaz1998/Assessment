# 📊  Data Viz Platform

## 📝 Description
A modern, interactive data visualization platform that allows users to explore economic trends through a dynamic line chart interface. 
Authenticated users can adjust variables such as GDP growth and inflation, and filter data by custom year ranges. 
The intuitive UI includes a slide-over panel for editing chart parameters and responsive visual feedback on hover, making the experience both insightful and engaging.


## 🛠️ Tech Stack

- **Framework:** React 18 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS, Bootstrap, Material UI
- **State Management:** Zustand
- **Charts:** @mui/x-charts (LineChart)
- **Routing:** React Router
- **Authentication:** Firebase Auth (Google OAuth and Email/Password)


## 📦 Features Implemented
- Firebase authentication (Google OAuth and email/password)
- Interactive line chart (GDP & Inflation data)
- Sidebar panel to edit visualization variables
- Filter data by year range and variable selection
- Hover effect on chart points (tooltip details)
- Responsive layout (mobile/tablet/desktop)
- Clean, reusable component architecture

## ⚙️ Technical Decisions and Trade-offs

- **State management:** Chose Zustand for its simplicity and minimal boilerplate over Redux, suitable for this small-medium scale project.  
- **UI library:** Used Tailwind CSS for fast, responsive styling and MUI’s LineChart for chart rendering to leverage well-tested components.  
- **Authentication:** Integrated Firebase Auth for easy and secure user authentication without building a backend from scratch.  
- **Routing:** React Router for straightforward navigation between screens.  
- **Trade-offs:** Avoided complex global state management tools to keep the project lightweight. Some advanced chart customizations were omitted due to time constraints.

## ⚠️ Known Limitations

- The chart currently supports only two variables (GDP, Inflation); adding more requires extending the state logic.  
- No persistence of user preferences beyond session (no database save for variable selections).  
- Limited error handling on network failures and input validations.  
- Mobile responsiveness is basic and could be enhanced for better UX.  
- Authentication is minimal; no role-based access or user profile management yet.

## 🧭 Time Spent
This project took approximately 8 hours over 3 days, focusing on implementing the core UI, state management with Zustand, interactive data visualization features, and Firebase Authentication integration.
## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yilmaz1998/Assessment.git
```
### 2. Install the packages
```bash
cd data-viz-platform
npm install
```
### 3. Start the development server
```bash
npm run dev
```
