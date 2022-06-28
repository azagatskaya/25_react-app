// import logo from './logo.svg';
import './App.css';
import {
  Chart
} from "react-google-charts";

const dataOld = [
  ["Knowleges", "Degrees"],
  ["HTML", 40],
  ["CSS", 40],
  ["SCSS", 20],
  ["Bootstrap", 7],
  ["JS", 0],
  ["React", 0]
];

const dataNew = [
   ["Knowleges", "Degrees"],
   ["HTML", 40],
   ["CSS", 40],
   ["SCSS", 20],
   ["Bootstrap", 7],
   ["JS", 20],
   ["React", 5]
];

export const diffdata = {
  old: dataOld,
  new: dataNew,
};

export const options = {
  title: "My knowledges",
  pieSliceText: "label",
};

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My knowleges
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Chart
      chartType = "PieChart"
      diffdata = {diffdata}
      options = {options}
      width = "100%"
      height = "400px"
      legendToggle
        />
    </div>
  );
}

export default App;
