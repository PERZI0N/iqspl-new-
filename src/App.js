import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";

import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";

import ServicesSystemAdmin from "./pages/ServicesSystemAdmin";
import ServicesWebApp from "./pages/ServicesWebApp";
import ServicesEmail from "./pages/ServicesEmail";
import ServicesITHelpdesk from "./pages/ServicesITHelpdesk";
import ServicesContract from "./pages/ServicesContract";
import ServicesWinServer from "./pages/ServicesWinServer";
import ServicesDesktop from "./pages/ServicesDesktop";
import ServicesNetwork from "./pages/ServicesNetwork";
import ServicesServer from "./pages/ServicesServer";

// import SolutionsInformationSecurity from "./pages/SolutionsInformationSecurity";
// import SolutionsNetwork from "./pages/SolutionsNetwork";
// import SolutionsRoom from "./pages/SolutionsRoom";
// import SolutionsSoftware from "./pages/SolutionsSoftware";

import SolutionNextGenFirewall from "./pages/SolutionNextGenFirewall";
import SolutionEndpoint from "./pages/SolutionEndpoint";
import SolutionDataBackup from "./pages/SolutionDataBackup";
import SolutionStructuredCabling from "./pages/SolutionStructuredCabling";
import SolutionWANDesign from "./pages/SolutionWANDesign";
import SolutionSDWAN from "./pages/Solution-SDWAN";
import SolutionDigitalClassroom from "./pages/SolutionDigitalClassroom";
import SolutionAVDesign from "./pages/SolutionAVDesign";
import SolutionLiveStream from "./pages/SolutionLiveStream";

import ProductRoom from "./pages/ProductRoom";
import ProductVideo from "./pages/ProductVideo";
import ProductContact from "./pages/ProductContact";
import ProductCyber from "./pages/ProductCyber";
import ProductLMS from "./pages/ProductLMS";
import ProductRecruitment from "./pages/ProductRecruitment";
import ProductTyping from "./pages/ProductTyping";
import ProductAI from "./pages/ProductAI";
import ProductEvent from "./pages/ProductEvent";
import ProductScreenMarking from "./pages/ProductScreenMarking";

import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App font-primary">
      <Router>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/about" exact element={<AboutUs />} />
          <Route path="/blog" exact element={<Blog />} />

          <Route
            path="/services/system-admin"
            exact
            element={<ServicesSystemAdmin />}
          />
          <Route path="/services/web-app" exact element={<ServicesWebApp />} />
          <Route path="/services/email" exact element={<ServicesEmail />} />
          <Route
            path="/services/it-helpdesk"
            exact
            element={<ServicesITHelpdesk />}
          />
          <Route
            path="/services/contract"
            exact
            element={<ServicesContract />}
          />
          <Route
            path="/services/windows-server"
            exact
            element={<ServicesWinServer />}
          />
          <Route path="/services/desktop" exact element={<ServicesDesktop />} />
          <Route path="/services/network" exact element={<ServicesNetwork />} />
          <Route path="/services/server" exact element={<ServicesServer />} />

          <Route
            path="/solutions/next-gen-firewall"
            exact
            element={<SolutionNextGenFirewall />}
          />
          <Route
            path="/solutions/endpoint"
            exact
            element={<SolutionEndpoint />}
          />
          <Route
            path="/solutions/data-backup"
            exact
            element={<SolutionDataBackup />}
          />
          <Route
            path="/solutions/structured-cabeling"
            exact
            element={<SolutionStructuredCabling />}
          />
          <Route
            path="/solutions/wan-design"
            exact
            element={<SolutionWANDesign />}
          />
          <Route path="/solutions/sd-wan" exact element={<SolutionSDWAN />} />
          <Route
            path="/solutions/digital-classroom"
            exact
            element={<SolutionDigitalClassroom />}
          />
          <Route
            path="/solutions/av-design"
            exact
            element={<SolutionAVDesign />}
          />
          <Route
            path="/solutions/livestream"
            exact
            element={<SolutionLiveStream />}
          />

          <Route path="/product/room" exact element={<ProductRoom />} />
          <Route path="/product/video" exact element={<ProductVideo />} />
          <Route path="/product/contact" exact element={<ProductContact />} />
          <Route path="/product/cyber" exact element={<ProductCyber />} />
          <Route path="/product/LMS" exact element={<ProductLMS />} />
          <Route path="/product/AI" exact element={<ProductAI />} />
          <Route
            path="/product/recruitment"
            exact
            element={<ProductRecruitment />}
          />
          <Route path="/product/typing" exact element={<ProductTyping />} />
          <Route path="/product/event" exact element={<ProductEvent />} />
          <Route
            path="/product/screen-marking"
            exact
            element={<ProductScreenMarking />}
          />

          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
