import './App.css';
import BarGraph from './Components/BarGraph/BarGraph';
import ScatterPlot from './Components/ScatterPlot/ScatterPlot';

function App() {
  return (
    <div className="MainWindow">
      <div className="gradient-dark-grey2">
          <div className="gradient-vertical-strip-grey"></div>
          <div className="card-body">
            <div className="card-title">Bar Chart</div>
              <BarGraph/>
          </div>
      </div>


      <div className=" gradient-blue2 ">
        <div className="gradient-vertical-strip"></div>

        <div className="card-body">
          <div className="card-title">
           Scatter Plot
          </div>
          <ScatterPlot/>

        </div>
      </div>
    </div>
  );
}

export default App;
