import React from "react";
import "./Sidebar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import DiscountIcon from "@mui/icons-material/Discount";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import PaymentsIcon from "@mui/icons-material/Payments";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AssignmentIcon from "@mui/icons-material/Assignment";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import IconButton from "@mui/material/IconButton";

function Sidebar(props) {
  const { isOpen, closeNav } = props;

  return (
    <>
      <div className="sidenav" style={{ width: isOpen ? "250px" : "0" }}>
        <div style = {{"padding": "20px" }}className="sidenav_Header">
          <img className="img_logo" src="https://dukaan.b-cdn.net/200x200/webp/5179822/17f41e92-75fb-4c49-b68c-0c3c7cdc9c9d/1634643435224-7c36895b-b0d0-4599-9ee3-65cf84143d3b.jpeg" alt="" />
          <div className="sidenav_Header2" style={{ marginRight: "50px" }}>
            <div>Nishyan</div>
            <div>Visit store</div>
          </div>
          <KeyboardArrowDownIcon  style = {{"padding": "20px", "marginRight": "-25px"}} onClick={closeNav} className="closebtn"/>
        </div>

        <div className="sidenav_Items">
            <HomeOutlinedIcon />
          <div>Home</div>
        </div>
    <div className='sidenav_Items'>
        <AssignmentIcon></AssignmentIcon>
        <div>Orders</div>
    </div>
    <div className='sidenav_Items'>
        <GridViewRoundedIcon></GridViewRoundedIcon>
        <div>Products</div>
    </div>
    <div className='sidenav_Items'>
        <LocalShippingOutlinedIcon></LocalShippingOutlinedIcon>
        <div>Delivery</div>
    </div>
    <div className='sidenav_Items'>
        <ShoppingBasketIcon></ShoppingBasketIcon>
        <div>Marketing</div>
    </div>
    <div className='sidenav_Items'>
        <BarChartOutlinedIcon></BarChartOutlinedIcon>
        <div>Analytics</div>
    </div>
    <div className='sidenav_Items'>
        <PaymentsIcon></PaymentsIcon>
        <div>Payments</div>
    </div>
    <div className='sidenav_Items'>
        <NearMeOutlinedIcon></NearMeOutlinedIcon>
        <div>Tools</div>
    </div>
    <div className='sidenav_Items'>
        <DiscountIcon></DiscountIcon>
        <div>Discounts</div>
    </div>
    <div className='sidenav_Items'>
        <PeopleAltOutlinedIcon></PeopleAltOutlinedIcon>
        <div>Audience</div>
    </div>
    <div className='sidenav_Items'>
        <PaletteOutlinedIcon></PaletteOutlinedIcon>
        <div>Appearance</div>
    </div>
    <div className='sidenav_Items'>
        <ElectricBoltOutlinedIcon></ElectricBoltOutlinedIcon>
        <div>Plugins</div>
    </div>


    <div className="endItemFlex">
    <AccountBalanceWalletIcon style={{"margin" : "10px" }}/> 
        <div>
        <div style={{"marginTop" : "5px","fontSize" : "10px"}}>Available credits</div>
        <div>222.10</div>
        </div>
    </div>
    </div>
    

    </>
  )
}

export default Sidebar;