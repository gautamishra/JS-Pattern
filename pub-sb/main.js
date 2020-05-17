function pubsub() {
    let subscribers = {};

    function publish(eventName, data){
        if(!Array.isArray(subscribers[eventName])){
            return;
        }
        const sub = subscribers[eventName].forEach(callack => {
            callack(data);
        });
    }

    function subbscribe(eventName, callBack){
        if(!Array.isArray(subscribers[eventName])){
            subscribers[eventName] = [];
        }
        subscribers[eventName].push(callBack);
        const index = subscribers[eventName].length -1;

        return {
            unsubscribe(){
                subscribers[eventName].splice(index,1);
            }
        }
    }

    return {
        publish,
        subbscribe
    }
}


const ps = pubsub();

const unsub = ps.subbscribe('createuser', showUserInfo);
const unsub1 =  ps.subbscribe('createuser', getUserStatisctics);


function showUserInfo(userInfo){
    let ele = document.getElementById('userinfo');
    ele.innerHTML = "user name is " + userInfo.name + "user job is " + userInfo.workTitle
}

function getUserStatisctics(data){
    alert('will send ajax call to get user info' + data.workTitle);
}

function createUser({name, workTitle}){
    return {
        name: name,
        workTitle: workTitle
    }
}

const user = new createUser({name:'gautam', 'workTitle': 'Software Engineer'});

ps.publish('createuser', user);
unsub.unsubscribe();
const user1 = new createUser({name:'gautam', 'workTitle': 'architect'});
ps.publish('createuser',user1);

unsub1.unsubscribe();
