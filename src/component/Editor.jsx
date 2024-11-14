import React, { useEffect, useState, } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { useSelector, useDispatch } from 'react-redux'
import { ValueCode } from '../features/SettingSlice'
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
function Editor() {
  const dispatch = useDispatch()
  const RunCodePlay = useSelector((state) => state.setting.run_code)
  const Languages = useSelector((state) => state.setting.Logo)
  const CodeClear = useSelector((state) => state.setting.Clear)
  const Home = useSelector((state) => state.setting.home)
  const JS = useSelector((state) => state.setting.jsCodes)
  const HTML = useSelector((state) => state.setting.htmlCodes)
  const React = useSelector((state) => state.setting.reactCodes)
  const Microphone = useSelector((state) => state.setting.microphone)
  const SayAnything = useSelector((state) => state.setting.textResult)

  
  const initialCode = `
   () => {
    
      return (
        <div>

          <h1 style={{color:'red'}}> Hello World </h1>
      
        </div>
      );
    }
      
    
    
    
    
    
    
    
    
    
    `;

  const [code, setCode] = useState(initialCode);
  const [liveCode, setLiveCode] = useState(code);


  //runCode click
  useEffect(() => {


    if (RunCodePlay === true) {
      setLiveCode(code)
      

    }
    else {
      setLiveCode(code)

    }


  }, [RunCodePlay])




  //newPage click
  useEffect(() => {

    if (CodeClear === true) {
      setLiveCode(`
        


















        
        `)
    }
    else {
      setLiveCode(`
        








        









        
        `)
    }



  }, [CodeClear])



  //home click
  useEffect(() => {
    if (Home === true) {
      setLiveCode(initialCode)
    }
    else {
      setLiveCode(initialCode)
    }


  }, [Home])



  //js Logo Click
  useEffect(() => {
    if (JS === true) {
      setLiveCode(`console.log('Hello World')
         


 















        
        `)
    }
    else {
      setLiveCode(`console.log('Hello World')
         


 















        
        `)
    }


  }, [JS])



  //html Logo Click
  useEffect(() => {
    if (HTML === true) {
      setLiveCode(`<h1> Hello World </h1>
         


 















        
        `)
    }
    else {
      setLiveCode(`<h1> Hello World </h1>
         


 















        
        `)
    }


  }, [HTML])



  //react Logo Click
  useEffect(() => {
    if (React === true) {
      setLiveCode(initialCode)
    }
    else {
      setLiveCode(initialCode)
    }
  }, [React])



  // PDF logo
  useEffect(() => {

    const valueCode = document.querySelectorAll(".LiveEditor");

    valueCode.forEach(element => {
      dispatch(ValueCode(element.textContent))

    });


  })


  //Microphone logo

  const MicrophoneOn = () => {
    if (Microphone === true) {
      setLiveCode(`
   () => {
    
      return (
        <div>

          <h1 style={{color:'red'}}> ${SayAnything} </h1>
      
        </div>
      );
    }
      
    
    
    
    
    
    
    
    
    
    `)
    }
  }

  useEffect(() => {
    MicrophoneOn()



  }, [Microphone])





  return (
    <LiveProvider code={liveCode} language={Languages}>

      <div className='container'>




        <PanelGroup autoSaveId="example" direction="horizontal">

          <Panel  minSize={20} defaultSize={50}>


             <div className='LiveEditorContainer'>

             <LiveEditor
              className='LiveEditor'
              value={code}
              onChange={setCode}
              style={{ fontSize: '14px', backgroundColor: '#f1eabc', color: '#fff', width: '100%', }}
            />
            
             </div>


          </Panel>

          <PanelResizeHandle style={{ border: '1px solid #6F4E37' }} />

          <Panel></Panel>

          <PanelResizeHandle style={{ border: '1px solid #6F4E37' }} />

          <Panel defaultSize={50} minSize={20}>
            <div className='backgroundResults' >
              <LiveError />
              <LivePreview />
            </div>

          </Panel>
        </PanelGroup>







      </div>
    </LiveProvider>
  );
}

export default Editor;

