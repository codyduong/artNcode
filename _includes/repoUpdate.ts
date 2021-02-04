function updateHTMLfromUrl(url: string, id: string) {
    let xhttp: XMLHttpRequest = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(id)
            console.log(this.responseText)
        } else {
            console.log("Something went wrong with repoUpdate.js")
        }
    }
    xhttp:open("GET", url)
}