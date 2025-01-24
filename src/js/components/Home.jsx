import React from "react";
import { useState } from "react";



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [count,setCount] = useState(0);
	return (
		<div className="text-center">
            

			<h1 className="text-center mt-5">How many puppies do you want? {count}</h1>
			<button className="more" onClick={() => setCount (count + 1)}>More puppies</button>
			<button className="less" onClick={() => setCount (count - 1)}>Less puppies</button>


		</div>
	);
};

export default Home;