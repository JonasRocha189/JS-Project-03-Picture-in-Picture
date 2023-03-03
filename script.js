const videoElement = document.getElementById('video')
const button = document.getElementById('button')

// Prompt to select media stream, pass to video element, the play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia()
    videoElement.srcObject = mediaStream
    videoElement.onloadedmetadata = () => {
      videoElement.play()
    }
  } catch (error) {
    console.log('whoops, error here:', error)
  }
}

button.addEventListener('click', async () => {
  // Disbale the buttom
  button.disbled = true

  // Start picture in picture
  await videoElement.requestPictureInPicture()

  // Reset buttom
  buttom.disbled = false
})

// On load
selectMediaStream()
