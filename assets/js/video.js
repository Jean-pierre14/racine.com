let localStream;
let remoteStream;

let Init = async() => {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    document.getElementById('video-1').srcObjet = localStream
}

Init()