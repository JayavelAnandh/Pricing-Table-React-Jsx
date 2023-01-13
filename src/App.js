import logo from "./logo.svg";
import "./App.css";

function App() {
  return <Pricetablecard />;
}

export default App;

function Pricetablecard(props) {
  return (
    <div className="SubscribtionPlan">
       {/* first */}
      <div className="Freeplan Plans"><span className="head"><span className="disabled">FREE</span>
         <br></br> <span className="price">$0</span><span className="months">/month</span></span>
        <hr></hr>
        <ul>
          <li className="abled">Single User</li>
          <li className="abled">5GB Storage</li>
          <li className="abled">Unlimited Public Projects</li>
          <li className="abled">Community Access</li>
          <li className="disabled cross">Unlimited Private Projects</li>
          <li className="disabled cross">Dedicated Phone Support</li>
          <li className="disabled cross">Free Subdomain</li>
          <li className="disabled cross">Monthly Status Reports</li>
        </ul>
        <button className="buttons">SUBSCRIBE</button>
      </div>

      <div className="Plusplan Plans"><span className="head"><span className="disabled">PLUS</span>
         <br></br> <span className="price">$9</span><span className="months">/month</span></span>
        <hr></hr>
        <ul>
          <li className="abled"><span className="bold">5 Users </span></li>
          <li className="abled">50GB Storage</li>
          <li className="abled">Unlimited Public Projects</li>
          <li className="abled">Community Access</li>
          <li className="abled">Unlimited Private Projects</li>
          <li className="abled">Dedicated Phone Support</li>
          <li className="abled">Free Subdomain</li>
          <li className="disabled cross">Monthly Status Reports</li>
        </ul>
        <button className="buttons">SUBSCRIBE</button>
      </div>

      <div className="Proplan Plans"><span className="head"><span className="disabled">PRO</span>
         <br></br> <span className="price">$49</span><span className="months">/month</span></span>
        <hr></hr>
        <ul>
          <li className="abled"><span className="bold">Unlimited Users</span></li>
          <li className="abled">150GB Storage</li>
          <li className="abled">Unlimited Public Projects</li>
          <li className="abled">Community Access</li>
          <li className="abled">Unlimited Private Projects</li>
          <li className="abled">Dedicated Phone Support</li>
          <li className="abled"><span className="bold">Unlimited </span>Free Subdomain</li>
          <li className="abled">Monthly Status Reports</li>
        </ul>
        <button className="buttons">SUBSCRIBE</button>
      </div>

    </div>
  );
}
