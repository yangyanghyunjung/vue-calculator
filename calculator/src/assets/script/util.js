export default {
    install(Vue) {
        // -------------------------------
        // function : getDomain
        // Description : 
        // parameter : 
        // -------------------------------
        Vue.config.globalProperties.$getDomain = function () {
            // Default Product Domain
            var bRetVal = "https://"; // api url 넣기
            return bRetVal;
        }
    }
}