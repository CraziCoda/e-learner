const container = document.querySelector('.dnd');

socket.on('files', (files)=>{
    container.innerHTML = '';
    for(let i = 0;i < files.length;i++){
        let file = files[i];
        let str = `<div class="download" onclick="download(\`${file}\`)"><div class="leftside"><span class="sub small">PDF</span><br>
                    <span class="topic">${file}</span></div><div class="rightside">
                    <span class="sub-topics"></span></div></div>`;
        container.innerHTML += str;
    }
});

function download(file){
    file = file.replaceAll(" ", "_");
    let ext = file.substring(file.length - 3);
    file = file.substring(0, file.length - 4);
    alert('Download is not currently available')
    
    location.href = `download?file=${file}&ext=${ext}`;
}