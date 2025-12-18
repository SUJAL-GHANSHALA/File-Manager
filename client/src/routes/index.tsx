import { createBrowserRouter } from "react-router-dom";
import Login from "@/app/Login";
import Signup from "@/app/Signup";
import Dashboard from "@/app/Dashboard";
import NotFound from "@/app/NotFound";
import Stars from "@/app/Stars";
import DashboardLayout from "@/layout/DashboardLayout";
import AuthGuard from "@/guards/AuthGuard";
import GuestGuard from "@/guards/GuestGuard";
import RedirectRoot from "@/components/RedirectRoot";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RedirectRoot />,
    },
    {
        path: "/login",
        element: (
            <GuestGuard>
                <Login />
            </GuestGuard>
        ),
    },
    {
        path: "signup",
        element: (
            <GuestGuard>
                <Signup />
            </GuestGuard>
        ),
    },
    {
        path: "/dashboard",
        element: (
            <AuthGuard>
                <DashboardLayout />
            </AuthGuard>
        ),
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "stars",
                element: <Stars />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);



// src/
// │
// ├── app/                        # All main pages (routes)
// │   ├── auth/
// │   │   ├── login.tsx
// │   │   ├── signup.tsx
// │   │   ├── forgot-password.tsx
// │   │   └── reset-password.tsx
// │   │
// │   ├── dashboard/
// │   │   ├── index.tsx          # Main dashboard page
// │   │   ├── shared-files.tsx   # E.g. sub-pages like shared files
// │   │   └── uploads.tsx        # Maybe recent uploads etc.
// │   │
// │   └── home.tsx               # Or landing/home page (guest)
// │
// ├── components/                # Reusable UI components
// │   ├── Sidebar.tsx
// │   ├── Navbar.tsx
// │   └── FileCard.tsx           # Example reusable component
// │
// ├── config/                    # Constants, messages, etc.
// │   ├── constants.ts
// │   └── messages.ts
// │
// ├── guards/                    # Route guards
// │   ├── AuthGuard.tsx
// │   └── GuestGuard.tsx
// │
// ├── layouts/                   # App layout wrappers
// │   ├── AuthLayout.tsx         # Maybe for login/signup
// │   └── DashboardLayout.tsx    # Sidebar + Navbar layout
// │
// ├── routes/                    # All routing logic
// │   ├── index.ts               # createBrowserRouter
// │   ├── paths.ts               # Named path constants
// │   ├── routes.tsx             # Lazy-loaded route component mapping
// │   └── Loadable.tsx           # Lazy loader HOC
// │
// ├── theme/                     # Theme provider (e.g. MUI, Tailwind configs)
// │   └── index.tsx
// │
// ├── App.tsx                    # Entry point
// └── main.tsx                   # Root render logic (if using Vite)



// src/
// ├── app/
// │   └── pages/
// │       ├── Login.tsx
// │       ├── Signup.tsx
// │       └── Dashboard.tsx
// │       └── NotFound.tsx
// ├── components/
// │   ├── Navbar.tsx
// │   └── Sidebar.tsx
// ├── layout/
// │   └── DashboardLayout.tsx
// ├── routes/
// │   ├── index.tsx
// ├── guards/
// │   └── AuthGuard.tsx
// ├── App.tsx
// └── main.tsx