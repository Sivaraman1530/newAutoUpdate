import { App } from '@capacitor/app'
import { BundleInfo, CapacitorUpdater } from '@capgo/capacitor-updater'
import { SplashScreen } from '@capacitor/splash-screen'


const InitializeApp= ()=> {
  let data:any|BundleInfo
    console.log("stage 1")
      App.addListener('appStateChange', async(state) => {
        if (state.isActive) {
          // Do the download during user active app time to prevent failed download
          data = await CapacitorUpdater.download({
          version: '0.0.2',
          url: 'https://github.com/Sivaraman1530/newAutoUpdate/archive/refs/heads/master.zip',
          })
        }
        console.log("data",JSON.stringify(data),CapacitorUpdater.current())
        if (!state.isActive && data.version !== "") {
          // Do the switch when user leave app
          SplashScreen.show()
          try {
            await CapacitorUpdater.set(data)
          } catch (err) {
            console.log(err)
            SplashScreen.hide() // in case the set fail, otherwise the new app will have to hide it
          }
        }
    })
      CapacitorUpdater.notifyAppReady();
 return null
}

export default InitializeApp