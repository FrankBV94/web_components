// Video guide on creating this interaction: https://youtu.be/AIq2sfYCVrs
// Button effect created by Jhey Tompkins: https://codepen.io/jh3y/pen/eYPYKep

// Get Video tracks and listen for a "cuechange" event
// to add a class to the button when a specific word
// ("subscribe" in this example) is mentioned.
const tracks = document.querySelectorAll("track");
const button = document.querySelector(".button");

// Loop over all "track" elements
for (const track of tracks) {
  track.addEventListener("cuechange", (event) => {
    const cues = event.target.track.activeCues;
    button.classList.remove("animate");

    // Loop over cues and search for
    // "subscribe" in text to add a
    // highlight effect to the button
    for (cue of cues) {
      const txt = cue.text.toLowerCase();
      if (txt.includes("subscri")) {
        button.classList.add("animate");
      }
    }
  });
}
