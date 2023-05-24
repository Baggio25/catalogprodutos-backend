import { Route, Switch } from "react-router-dom";

import NavbarAdmin from "./NavbarAdmin";
import Users from "./User";

import "./styles.css";

const Admin = () => {
    return(
        <div className="admin-container">
            <NavbarAdmin />
            <div className="admin-content">
                <Switch>
                    <Route path="/admin/dashboard">
                        <h1>Dashboard</h1>
                    </Route>
                    <Route path="/admin/products">
                        <h1>Product CRUD</h1>
                    </Route>
                    <Route path="/admin/categories">
                        <h1>Category CRUD</h1>
                    </Route>
                    <Route path="/admin/users">
                        <Users />
                    </Route>
                </Switch>
            </div>  
        </div>
    )
}

export default Admin;