import React from 'react'
import { reducer as voxeetReducer } from "@voxeet/react-components"
import { ConferenceRoom, VoxeetProvider } from "@voxeet/react-components"
import thunkMidleware from "redux-thunk"
import { combineReducers, createStore, applyMiddleware } from "redux"
import "@voxeet/react-components/dist/voxeet-react-components.css"

const reducers = combineReducers({
  voxeet: voxeetReducer,
})

const configureStore = () =>
  createStore(reducers, applyMiddleware(thunkMidleware))


function VideoCall(props) {

  const settings = {
    consumerKey: "8dwLOLNnnpdS0CtL80QOJA==",
    consumerSecret: "KFPSIzyaoW2rZmluXgpo0NKIxlntmqzRpFhI7YfnS00=",
    conferenceAlias: props.id,
  }

  const handleIt = props.handleLeave || (() => {});

  return (
    <VoxeetProvider store={configureStore()}>
      <ConferenceRoom
        autoJoin
        consumerKey={settings.consumerKey}
        consumerSecret={settings.consumerSecret}
        conferenceAlias={settings.conferenceAlias}
        handleOnLeave={handleIt}
      />
    </VoxeetProvider>
  )
}

export default VideoCall
