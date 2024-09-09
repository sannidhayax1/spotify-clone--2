console.log("Let's write JavaScript!");

async function getSongs(){
    let songs = []; 
    try {
        let a = await fetch("http://127.0.0.1:3000/songs/");
        let response = await a.text(); 
        console.log(response);
        
        let div = document.createElement("div");
        div.innerHTML = response;
        
        let as = div.getElementsByTagName("a");
        for(let index = 0; index < as.length; index++){
            const element = as[index];
            if(element.href.endsWith(".mp3")){
                songs.push(element.href);  
            }
        }
    } catch (error) {
        console.error("Error fetching songs:", error);
    }
    return songs;
}

async function main(){
    let songs = await getSongs();
    console.log(songs);

        var audio = new Audio(songs[0]);
        audio.play();
        
        audio.addEventListener("loadeddata" , () =>{
            let duration = audioElement.duration;
        })
        console.log("No songs found.");
}

main();