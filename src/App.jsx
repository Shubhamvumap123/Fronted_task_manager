// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";
import Index from "./Pages/Index";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import TaskDashboard from "./Pages/TaskDashboard";
import NotFound from "./Pages/NotFound"; 

const App = () => (
  <AuthProvider>
    <TaskProvider>
      {/* <TooltipProvider> */}
        {/* <Toaster /> */}
        {/* <Sonner /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tasks" element={<TaskDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      {/* </TooltipProvider> */}
    </TaskProvider>
  </AuthProvider>
);

export default App;