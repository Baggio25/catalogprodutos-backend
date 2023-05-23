import NavbarAdmin from "./NavbarAdmin";

import "./styles.css";

const Admin = () => {
    return(
        <div className="admin-container">
            <NavbarAdmin />
            <div className="admin-content">
                <h1>Conteúdo</h1>
            </div>
        </div>
    )
}

export default Admin;