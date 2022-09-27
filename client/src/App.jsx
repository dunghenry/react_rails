import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
const App = () => {
  React.useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:3000/todos");
      console.log(response.data);
    }
    fetchData();
  }, []);
  return <div>App</div>;
};

export default App;
