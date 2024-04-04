import React, { useEffect, useState } from "react";
import axios from "axios";

function EncodingParametersInURLs() {
  const [a, setA] = useState(17);
  const [b, setB] = useState(38);

  const [result, setResult] = useState(0);
  const fetchSum = async (a: any, b: any) => {
    const response = await
      axios.get(`http://localhost:4000/a5/add/${a}/${b}`);
    setResult(response.data);
  };
  const fetchSubtraction = async (a: any, b: any) => {
    const response = await axios.get(
      `http://localhost:4000/a5/subtract/${a}/${b}`);
    setResult(response.data);
  };

  const [welcome, setWelcome] = useState("");
  const fetchWelcome = async () => {
    const response = await axios.get("http://localhost:4000/a5/welcome");
    setWelcome(response.data);
  };
  useEffect(() => {
    fetchWelcome();
  }, []);


  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Integrating React with APIs</h4>
      <h5>Fetching Welcome</h5>
      <h6>{welcome}</h6>

      <h4>Calculator</h4>
      <input type="number" value={a}
        onChange={(e) => setA(parseInt(e.target.value))}/>
      <input type="number"
        onChange={(e) => setB(parseInt(e.target.value))} value={b}/>
      <h3>Path Parameters</h3>
      <a className="btn btn-primary" href={`http://localhost:4000/a5/add/${a}/${b}`}>
        Add {a} + {b} 
      </a>
      <a className="btn btn-danger" href={`http://localhost:4000/a5/subtract/${a}/${b}`}>
        Substract {a} - {b}
      </a>
      <br/>
      <a href={`http://localhost:4000/a5/calculator?operation=add&a=34&b=23`}> link 1 </a>
      <a href={`http://localhost:4000/a5/calculator?operation=subtract&a=34&b=23`}> link 2 </a>
      <h3>Query Parameters</h3>
        <a className="btn btn-primary"
        href={`http://localhost:4000/a5/calculator?a=${a}&b=${b}&operation=add`}>
        Add {a} + {b} 
        </a>
        <a className="btn btn-danger"
        href={`http://localhost:4000/a5/calculator?a=${a}&b=${b}&operation=subtract`}>
        Substract {a} - {b}
        </a>
        <br/>
        <input value={a} />
        <br/>
        <input value={b} />
        <br/>
        <input value={result} type="number" readOnly />
        <br/>
        <h3>Fetch Result</h3>
        <button className="btn btn-primary" onClick={() => fetchSum(a, b)} >
            Fetch Sum of {a} + {b}
        </button>
        <button className="btn btn-danger" onClick={() => fetchSubtraction(a, b)} >
            Fetch Substraction of {a} - {b}
        </button>
        <br/>
        <h3>Multiplication and Division</h3>
        <h3>Path Parameters</h3>
        <a className="btn btn-primary" href={`http://localhost:4000/a5/multiply/${a}/${b}`}>
            Multiply {a} * {b} 
        </a>
        <a className="btn btn-danger" href={`http://localhost:4000/a5/divide/${a}/${b}`}>
            Divide {a} / {b}
        </a>
        <h3>Query Parameters</h3>
        <a className="btn btn-primary"
        href={`http://localhost:4000/a5/calculator?a=${a}&b=${b}&operation=multiply`}>
        Multiply {a} * {b} 
        </a>
        <a className="btn btn-danger"
        href={`http://localhost:4000/a5/calculator?a=${a}&b=${b}&operation=divide`}>
        Divide {a} / {b}
        </a>
        <br/>
    </div>
  );
}
export default EncodingParametersInURLs;