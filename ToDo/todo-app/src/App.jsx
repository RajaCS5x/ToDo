import { useState } from "react";
import todo from "./Components/todos";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import Completed from "./pages/Completed";
import Layout from "./pages/Layout";


function App() {

  const [todos, setTodos] = useState(todo);


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<HomePage
      todos={todos}
      setTodos={setTodos}/>}/>
      <Route path="completed" element={<Completed todos={todos}/>}/>
    </Route>
  ))
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}
export default App;
