const videoElement = document.getElementById('video');
const button = document.getElementById('button');
const button2 = document.getElementById('button2');

// Prompt to select media stream, pass to videoelement, then play

async function selectMediaStream() {
    // console.log('unko1')
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error){
        // Catch Error Here
        console.log('whoops, error here:', error)
    }
}

button.addEventListener('click', async () => {
    // console.log('unko2')
    // Disable button
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});

// On load
selectMediaStream();