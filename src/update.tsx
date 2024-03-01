import { App } from '@capacitor/app'
import { BundleInfo, CapacitorUpdater } from '@capgo/capacitor-updater'
import { SplashScreen } from '@capacitor/splash-screen'


const InitializeApp= ()=> {
  let data:any|BundleInfo
    console.log("stage 1")
      App.addListener('appStateChange', async(state) => {
        if (state.isActive) {
          // Do the download during user active app time to prevent failed download
          try{
          data = await CapacitorUpdater.download({
          version: '0.0.3',
          url: 'https://github.com/Sivaraman1530/newAutoUpdate/archive/refs/heads/master.zip',
          })
          await CapacitorUpdater.set(data)
        }
        catch (error) {
          console.log(error)
        }
        }
        console.log("data",JSON.stringify(data),CapacitorUpdater.current())
    })
      CapacitorUpdater.notifyAppReady();
 return null
}

export default InitializeApp