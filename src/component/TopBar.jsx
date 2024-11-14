import React from 'react'
import { FaPlayCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { RunCode } from '../features/SettingSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function TopBar() {
    const dispatch = useDispatch()
    const Languages = useSelector((state) => state.setting.Logo)


    function LangState(lang) {


        switch (lang) {
            case "js":
             
                break;
            case 'html':
          
                break;
            case 'react':
          
                break;
            default: toast("Please choose a language");

        }



    }

    function MyRun_Code() {
        dispatch(RunCode(true))
        LangState(Languages);

    }


    return (
        <div className='TopBar'>
            <span>  Code Editor</span>
            <div className='RunCode'>

                <ToastContainer />
                <button onClick={MyRun_Code} ><FaPlayCircle style={{ color: 'white', fontSize: '18px' }} /> Run Code</button>

            </div>
        </div >
    )
}

export default TopBar