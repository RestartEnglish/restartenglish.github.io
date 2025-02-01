async function searchContent() {
    const query = document.getElementById("search").value.toLowerCase();
    const response = await fetch("data/word.txt");
    const text = await response.text();
    const words = text.split("\n").filter(w => w.trim() !== "");

    const result = words.find(word => word.toLowerCase().includes(query));
    document.getElementById("search-result").innerText = result ? result : "No results found.";
}
