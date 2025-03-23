document.addEventListener("DOMContentLoaded", () => {
    // Get references to UI elements
    const videoFeed = document.getElementById("video-feed");
    const startButton = document.querySelector(".btn-start");
    const stopButton = document.querySelector(".btn-stop");
    const loader = document.getElementById("loader");
    const loadingText = document.getElementById("loading-text");

    // Function to start the stream
    function startStream() {
        videoFeed.style.display = "block";
        startButton.style.display = "none";
        stopButton.style.display = "inline-block";
        loader.style.display = "block";
        loadingText.style.display = "block";

        // Simulate loading delay before hiding the loader
        setTimeout(() => {
            loader.style.display = "none";
            loadingText.style.display = "none";
        }, 2000);
    }

    // Function to stop the stream
    function stopStream() {
        videoFeed.style.display = "none";
        startButton.style.display = "inline-block";
        stopButton.style.display = "none";
    }

    // Attach event listeners
    startButton.addEventListener("click", startStream);
    stopButton.addEventListener("click", stopStream);
});
