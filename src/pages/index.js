import React, {useState} from "react"
import Header from "../components/common/Header";
import TabOptions from "../components/common/tabOptions";
import Footer from "../components/common/Footer";
import Delivery from "../components/Delivery";
import DinningOut from "../components/DInningOut";
import NightLife from "../components/NightLife";

const getCorrectScreen = (type)=>{
    switch (type){
        case "Delivery": return <div><Delivery /></div>
        case "Dining Out": return <div><DinningOut /></div>
        case "Nightlife": return <div><NightLife /></div>
        default: return <div><Delivery /></div>
    }
}

const HomePage = ()=>{
    const [ activeTab, setActiveTab ] = useState("Delivery")
    return(
        <div>
            <Header />
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
            {
                getCorrectScreen(activeTab)
            }
            <Footer />
        </div>
    )
}

export default HomePage