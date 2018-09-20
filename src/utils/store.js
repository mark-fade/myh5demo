const STORAGR_KEY = "todos-vuejs"
export default{
    fetch:function(){
        return JSON.parse(window.localStorage.getItem(STORAGR_KEY)||'[]');
    },
    save:function(items){
        window.localStorage.setItem(STORAGR_KEY,JSON.stringify(items));
    }
}