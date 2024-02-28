import React, { useState } from "react";
import { Connect, connect, useDispatch } from "react-redux";
import { changeTabActive } from "../redux/action";

const NavBar = ({activeTab}) => {
    const [listaNav] = useState(['home','experiencia','proyectos','skills','contacto'])
    const dispatch = useDispatch()
    const changeTab = (value) =>{
        dispatch(changeTabActive(value));
    }
    return (
        <header>
            <div className="logo">
                <img src="/favicon.ico"></img>
            </div>
            <nav>
                {
                    listaNav.map((value,key) =>(
                    <span key = {key} className = {activeTab === value ? 'active': ''}
                    onClick={() =>changeTab(value)} >{value}</span>
                    ))
                }
            </nav>
        </header>
    )
}
const mapStateToProps = (state) => ({
    activeTab:state.activeTab
})

export default connect(mapStateToProps,{changeTabActive})(NavBar)