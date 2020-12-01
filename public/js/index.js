const socket = io()

//templates
const roomListTemplate = document.querySelector('#roomListTemplate').innerHTML

socket.on('roomList', ({rooms}) => {
    const html = Mustache.render(roomListTemplate, {
        rooms
    })

    if(rooms.length) {
        document.querySelector('#roomList').innerHTML = html
        document.getElementById("newRoom").setAttribute('name', 'newRoom')
        document.getElementById("newRoom").required = false;
        
    }
})
