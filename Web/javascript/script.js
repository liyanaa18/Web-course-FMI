function func(id) {
    var copyCode = document.getElementById("toCopy" + id);

    navigator.clipboard.writeText(copyCode.textContent);

    alert("The text is copied successfully!");
}