const goals = ["Drive engagement", "Promote an event", "Showcase a vibe"];
const audiences = ["Travelers in Ibiza", "Cocktail lovers", "Music enthusiasts"];
const topics = ["Sunset parties", "DJ performances", "Signature cocktails"];
const tones = ["Fun", "Elegant", "Adventurous"];
const ctas = ["Tag a friend", "Follow us", "Share your favorite memory"];

function randomizeField(fieldId, options) {
    const field = document.getElementById(fieldId);
    const randomIndex = Math.floor(Math.random() * options.length);
    field.value = options[randomIndex];
}

document.getElementById("randomize-btn").addEventListener("click", () => {
    randomizeField("goal", goals);
    randomizeField("audience", audiences);
    randomizeField("topic", topics);
    randomizeField("tone", tones);
    randomizeField("cta", ctas);
});

document.getElementById("generate-btn").addEventListener("click", () => {
    const goal = document.getElementById("goal").value;
    const audience = document.getElementById("audience").value;
    const topic = document.getElementById("topic").value;
    const tone = document.getElementById("tone").value;
    const cta = document.getElementById("cta").value;

    const output = `
        <h2>Generated Hook</h2>
        <p><strong>Goal:</strong> ${goal}</p>
        <p><strong>Audience:</strong> ${audience}</p>
        <p><strong>Topic:</strong> ${topic}</p>
        <p><strong>Tone:</strong> ${tone}</p>
        <p><strong>Call to Action:</strong> ${cta}</p>
    `;
    document.getElementById("output").innerHTML = output;
});
