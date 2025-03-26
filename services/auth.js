const sessionIdToUserMap = new Map()

function setUserId(id, user){
    sessionIdToUserMap.set(id,user)
}

function getUser(id){
    return sessionIdToUserMap.get(id);
}

module.exports= { getUser, setUserId}