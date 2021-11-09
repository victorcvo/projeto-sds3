import Barchart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import Navbar from "components/NavBar";


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text secondary">Pecenutal de vedas %</h5>
            <Barchart />
          </div>

          <div className="col-sm-6">
            <h5 className="text-center tex-secondary">Todas as vendas</h5>
            <DonutChart />
          </div>
        </div>
          <div className="py-3">
           <h2 className="text-primary">Todas as Vendas</h2>
          </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
