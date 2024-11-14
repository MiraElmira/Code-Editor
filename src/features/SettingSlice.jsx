import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  Logo: '',
  home: false,
  run_code: false,
  Clear: false,
  jsCodes: false,
  htmlCodes: false,
  reactCodes: false,
  menuLogo: false,
  CodeValue: '',
  microphone: true,
  textResult: `Hello World`
}

export const SettingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {

    HomeIcon: (state) => {
      state.home = !state.home
    },
    RunCode: (state) => {
      state.run_code = !state.run_code
    },
    LogoLanguage: (state, action) => {
      state.Logo = action.payload
    },
    ClearCode: (state) => {
      state.Clear = !state.Clear
    },
    CodesJS: (state) => {
      state.jsCodes = !state.jsCodes
    },
    CodesHTML: (state) => {
      state.htmlCodes = !state.htmlCodes
    },
    CodesReact: (state) => {
      state.reactCodes = !state.reactCodes
    },
    LogoMenu: (state) => {
      state.menuLogo = !state.menuLogo
    },
    ValueCode: (state, action) => {
      state.CodeValue = action.payload
    },
    OpenMicrophone: (state) => {
      state.microphone = !state.microphone
    },
    MicrophoneResult: (state, action) => {
      state.textResult = action.payload;
      
    }



  },
})


export const { RunCode, LogoLanguage, ClearCode, HomeIcon, CodesJS, CodesHTML, CodesReact, LogoMenu, ValueCode, OpenMicrophone, MicrophoneResult } = SettingSlice.actions

export default SettingSlice.reducer