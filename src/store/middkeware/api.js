import axios from "axios";



const api=({dispatch})=>(next)=>(action)=>{
  if(action.type!=='api/apiCall'){
      next(action)
      return
  }
    next(action)

  const {onSuccess,value }=action.payload


        axios({
            baseURL:'https://api.openweathermap.org/data/2.5/',
            url:`weather?q=${value}&appid=f6215bcba4731d2c217ee8a8a84cfd88`,

        }).then(res=>{
            dispatch({
                type:onSuccess,
                payload:res.data
            })
        }).catch(err=>{
            dispatch({
                type:'weather/errWeatherResponse'
            })
        })

}
export  default api;