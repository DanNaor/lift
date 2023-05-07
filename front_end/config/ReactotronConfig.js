import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from "@react-native-async-storage/async-storage";

const reactotron=Reactotron.setAsyncStorageHandler(AsyncStorage).configure({
    name: 'Lift',
    // host: '192.168.76.208', // your IP address
    // port: 19000 // port number
  })
  .use(reactotronRedux())
  .connect();
  export default reactotron