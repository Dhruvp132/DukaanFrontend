import React from "react";
import "./MainContent.css";
import ImportExportIcon from '@mui/icons-material/ImportExport';
import DownloadIcon from '@mui/icons-material/Download';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HelpIcon from '@mui/icons-material/Help';
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
import ArrowDropDownCircleRoundedIcon from "@mui/icons-material/ArrowDropDownCircleRounded";
import './Sidebar.css'
import { useState } from "react";
function MainContent(props) {
  const { openNav } = props; 

  return (
    <>
      <div className="mainContent">
        <div className="headerbar">
          <div className="flex1">
          <span style={{ "font-size": "30px","marginRight" : "5px", "cursor": "pointer" }} onClick={openNav}>&#9776;</span>
            <div>Payments</div>
            <HelpIcon style={{"height" : "23px", "margin" : "10px"}}/> 
            <div className="hidden help" style={{"marginLeft" : "3px", "color": "rgb(77 77 77)"}}>How it works</div>
          </div>
          <div className="header_SearchBar">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path></svg>
          <input className="inputBox1" type="text"  placeholder="Search features, tutorials, etc."/>
          </div>

          <div className="flex1">
            <ArrowDropDownCircleRoundedIcon style={{"marginLeft" : "10px"}}></ArrowDropDownCircleRoundedIcon>
            <TextsmsRoundedIcon style={{"marginLeft" : "15px"}}></TextsmsRoundedIcon>
          </div>
        </div>
        
        <h3>Overview</h3>

        <div className="orders">
          <p className="ordersPflex1" style={{"padding": "20px", "fontSize" : "20px","color": "rgb(77 77 77)"}} >Online orders: <h2  style={{"color" : "black"}}>231</h2></p>
          <p className="ordersPflex2" style={{"padding": "20px", "fontSize" : "20px","color": "rgb(77 77 77)"}} >Amount received: <h2 style={{"color" : "black"}}>₹23,92,312.19</h2></p>
        </div>

        <h3>Transaction | This Month </h3>
        <div className='flex2'>
        <div className="header_SearchBar2">
        <svg style={{"margin" : "4px"}}stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path></svg>
        <input type="text" className="inputBox2" placeholder="Search by order ID..." />
        </div>
        <div>
        <button style={{"height" : "35px", "fontSize" : "25px", "color": "rgb(77 77 77)"}}>Sort <ImportExportIcon /></button>
        <button style={{"marginLeft" : "5px"}}><DownloadIcon/></button>
        </div>
        </div>

        <table className="transactions">
          <tr>
            <th className='tablecolLeft1'>Order ID</th>
            <th className='tablecolLeft1'>Order date </th>
            <th className='tablecolRight1'>Order amount </th>
            <th className='tablecolRight1'>Transaction Fees </th>
          </tr>
          <tr>
            <td style={{"color" : "rgb(20 110 180)", "fontWeight": "500"}}>#8721809</td>
            <td>7 July, 2023</td>
            <td className='tablecolRight'>₹1,279.23</td>
            <td className='tablecolRight'>₹32</td>
          </tr>
          <tr>
            <td style={{"color" : "rgb(20 110 180)", "fontWeight": "500"}}>#8721809</td>
            <td>7 July, 2023</td>
            <td className='tablecolRight'>₹1,279.23</td>
            <td className='tablecolRight'>₹32</td>
          </tr>
          <tr>
            <td style={{"color" : "rgb(20 110 180)", "fontWeight": "500"}}>#8721809</td>
            <td>7 July, 2023</td>
            <td className='tablecolRight'>₹1,279.23</td>
            <td className='tablecolRight'>₹32</td>
          </tr>
          <tr>
            <td style={{"color" : "rgb(20 110 180)", "fontWeight": "500"}}>#8721809</td>
            <td>7 July, 2023</td>
            <td className='tablecolRight'>₹1,279.23</td>
            <td className='tablecolRight'>₹32</td>
          </tr>
          <tr>
            <td style={{"color" : "rgb(20 110 180)", "fontWeight": "500"}}>#8721809</td>
            <td>7 July, 2023</td>
            <td className='tablecolRight'>₹1,279.23</td>
            <td className='tablecolRight'>₹32</td>
          </tr>
          <tr>
            <td style={{"color" : "rgb(20 110 180)", "fontWeight": "500"}}>#8721809</td>
            <td>7 July, 2023</td>
            <td className='tablecolRight'>₹1,279.23</td>
            <td className='tablecolRight'>₹32</td>
          </tr>
          <tr>
            <td style={{"color" : "rgb(20 110 180)", "fontWeight": "500"}}>#8721809</td>
            <td>7 July, 2023</td>
            <td className='tablecolRight'>₹1,279.23</td>
            <td className='tablecolRight'>₹32</td>
          </tr>
          <tr>
            <td style={{"color" : "rgb(20 110 180)", "fontWeight": "500"}}>#8721809</td>
            <td>7 July, 2023</td>
            <td className='tablecolRight'>₹1,279.23</td>
            <td className='tablecolRight'>₹32</td>
          </tr>
          <tr>
            <td style={{"color" : "rgb(20 110 180)", "fontWeight": "500"}}>#8721809</td>
            <td>7 July, 2023</td>
            <td className='tablecolRight'>₹1,279.23</td>
            <td className='tablecolRight'>₹32</td>
          </tr>
          <tr>
            <td style={{"color" : "rgb(20 110 180)", "fontWeight": "500"}}>#8721809</td>
            <td>7 July, 2023</td>
            <td className='tablecolRight'>₹1,279.23</td>
            <td className='tablecolRight'>₹32</td>
          </tr>
          <tr>
            <td style={{"color" : "rgb(20 110 180)", "fontWeight": "500"}}>#8721809</td>
            <td>7 July, 2023</td>
            <td className='tablecolRight'>₹1,279.23</td>
            <td className='tablecolRight'>₹32</td>
          </tr>
          <tr>
            <td style={{"color" : "rgb(20 110 180)", "fontWeight": "500"}}>#8721809</td>
            <td>7 July, 2023</td>
            <td className='tablecolRight'>₹1,279.23</td>
            <td className='tablecolRight'>₹32</td>
          </tr>
          <tr>
            <td style={{"color" : "rgb(20 110 180)", "fontWeight": "500"}}>#8721809</td>
            <td>7 July, 2023</td>
            <td className='tablecolRight'>₹1,279.23</td>
            <td className='tablecolRight'>₹32</td>
          </tr>
          <tr>
            <td style={{"color" : "rgb(20 110 180)", "fontWeight": "500"}}>#8721809</td>
            <td>7 July, 2023</td>
            <td className='tablecolRight'>₹1,279.23</td>
            <td className='tablecolRight'>₹32</td>
          </tr>
          <tr>
            <td style={{"color" : "rgb(20 110 180)", "fontWeight": "500"}}>#8721809</td>
            <td>7 July, 2023</td>
            <td className='tablecolRight'>₹1,279.23</td>
            <td className='tablecolRight'>₹32</td>
          </tr>
          <tr>
            <td style={{"color" : "rgb(20 110 180)", "fontWeight": "500"}}>#8721809</td>
            <td>7 July, 2023</td>
            <td className='tablecolRight'>₹1,279.23</td>
            <td className='tablecolRight'>₹32</td>
          </tr>
          <tr>
            <td style={{"color" : "rgb(20 110 180)", "fontWeight": "500"}}>#8721809</td>
            <td>7 July, 2023</td>
            <td className='tablecolRight'>₹1,279.23</td>
            <td className='tablecolRight'>₹32</td>
          </tr>
          <tr>
            <td style={{"color" : "rgb(20 110 180)", "fontWeight": "500"}}>#8721809</td>
            <td>7 July, 2023</td>
            <td className='tablecolRight'>₹1,279.23</td>
            <td className='tablecolRight'>₹32</td>
          </tr>
          <tr>
            <td style={{"color" : "rgb(20 110 180)", "fontWeight": "500"}}>#8721809</td>
            <td>7 July, 2023</td>
            <td className='tablecolRight'>₹1,279.23</td>
            <td className='tablecolRight'>₹32</td>
          </tr>
          
        </table>


        {/* Footer */}
        <div className="footer">
            <div>
            <button style={{"height" : "30px"}}> <ChevronLeftIcon style={{"height" : "15px", "paddingTop" : "5px", "margin-top" : "-5px"}} />Previous</button>
                </div>
            <div style ={{"display" : "flex","marginTop" : "2px"}}>
            <div>1</div>
            <div>...</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
            <div>16</div>
            <div>17</div>
            <div>18</div>
            </div>
            <div>
            <button style={{"height" : "30px"}}>Next <ChevronRightIcon style={{"height" : "15px", "margin-top" : "-5px", "paddingTop" : "5px"}}/></button>
            </div>
        </div>
      </div>
    </>
  );
}

export default MainContent;
