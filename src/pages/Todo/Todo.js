import { useState, useEffect } from "react";
import Footer from "../../components/Todo/Footer/Footer";
import Header from "../../components/Todo/Header/Header";
//import List from "../../components/Todo/List/List";
import TaskContainer from "../../components/Todo/TaskContainer/TaskContainer";
 
function Todo() {
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState([]);
  const [btn, setBtn] = useState("");

  useEffect(() => {
    //console.log(status);
  }, [todo]);

  return (
    <div className="h-[100vh] document-container">
      <Header />
        <section className="todoapp">
          <TaskContainer/>
        </section>
      <Footer/>
    </div>
  );
} 

export default Todo;
