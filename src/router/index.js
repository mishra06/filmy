import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import DetailsPage from "../pages/DetailsPage";
import SearchPage from "../pages/SearchPage";
import ExplorePage from "../pages/ExplorePage";

const router = createBrowserRouter([
        {
            path: "/",
            element: <App/>,
            children: [
                { path: "", element: <Home /> },
                {path: ':explore', element: <ExplorePage/>},
                {path: ":explore/:id", element: <DetailsPage/>},
                {path: "search" , element: <SearchPage/>}
    ]}
]);

export default router;



// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import App from "../App";
// import Home from "../pages/Home";
// import DetailsPage from "../pages/DetailsPage";
// import SearchPage from "../pages/SearchPage";
// import ExplorePage from "../pages/ExplorePage";

// const AppRouter = () => {
//     return (
//         <Router>
//             <App>
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path=":explore" element={<ExplorePage />} />
//                     <Route path=":explore/:id" element={<DetailsPage />} />
//                     <Route path="search" element={<SearchPage />} />
//                 </Routes>
//             </App>
//         </Router>
//     );
// };

// export default AppRouter;