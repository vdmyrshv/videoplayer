import axios from 'axios'

const expoHallAPI = axios.create({baseURL: 'http://expo-hall-env.eba-xa8er7aa.us-west-2.elasticbeanstalk.com'})

export default expoHallAPI