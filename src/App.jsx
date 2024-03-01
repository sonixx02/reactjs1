import "./app.css";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      ///output -> iske andar json formater ke form mai aagaya sab
      setCourse(output.data);
    } catch (error) {
      toast.error("network me koi dikkat hai");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-blue-900">
      <div>
        <Navbar />
      </div>
      <div>
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
        {/* //as a prop send kiya isko */}
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {loading ? <Spinner /> : <Cards courses={courses} category={category}/>}
        {/* props use kiya */}
      </div>
    </div>
  );
};

export default App;
