document.getElementById("pistaun").onclick = PlayPauseAudio;

function PlayPauseAudio() {

    if (document.getElementById("musica").paused) {
        document.getElementById("musica").play();


    } else {
        document.getElementById("musica").pause();

    }
}

document.getElementById("sliderVol").value=
document.getElementById("musica").volume;

document.getElementById("sliderVol").oninput=canviaVolum;

function canviaVolum(){
    document.getElementById("musica").volume= 
    document.getElementById("sliderVol").value;
}

document.getElementById("musica").oncanplay = actualitzaMaxDuracio1;

function actualitzaMaxDuracio1(){
    document.getElementById("sliderDur").max=document.getElementById("musica").duration;
}


document.getElementById("sliderDur").oninput=canviaTemps;


function canviaTemps(){
    document.getElementById("musica").currentTime= 
    document.getElementById("sliderDur").value;
}

document.getElementById("musica").ontimeupdate = actualitzaDuracio;

function actualitzaDuracio(){
    document.getElementById("sliderDur").value=
    document.getElementById("musica").currentTime;

}

document.getElementById("loop").onclick = playloop;

function playloop(){
    
    if(document.getElementById("musica").loop ==  false){
         document.getElementById("musica").loop =  true;
    }else{
        document.getElementById("musica").loop = false;
   }
}

document.getElementById("pistados").onclick = PlayPauseAudiodos;

function PlayPauseAudiodos() {

    if (document.getElementById("musicados").paused) {
        document.getElementById("musicados").play();

    } else {
        document.getElementById("musicados").pause();

    }
}

document.getElementById("sliderVoldos").value=
document.getElementById("musicados").volume;

document.getElementById("sliderVoldos").oninput=canviaVolumdos;

function canviaVolumdos(){
    document.getElementById("musicados").volume= 
    document.getElementById("sliderVoldos").value;
}

document.getElementById("musicados").oncanplay = actualitzaMaxDuraciodos;

function actualitzaMaxDuraciodos(){
    document.getElementById("sliderDurdos").max=document.getElementById("musicados").duration;
}


document.getElementById("sliderDurdos").oninput=canviaTempsdos;


function canviaTempsdos(){
    document.getElementById("musicados").currentTime= 
    document.getElementById("sliderDurdos").value;
}

document.getElementById("musicados").ontimeupdate = actualitzaDuraciodos;

function actualitzaDuraciodos(){
    document.getElementById("sliderDurdos").value=
    document.getElementById("musicados").currentTime;

}

document.getElementById("loopdos").onclick = playloopdos;

function playloopdos(){
    
    if(document.getElementById("musicados").loop ==  false){
         document.getElementById("musicados").loop =  true;
    }else{
        document.getElementById("musicados").loop = false;
   }
}

document.getElementById("pistatres").onclick = PlayPauseAudiotres;

function PlayPauseAudiotres() {

    if (document.getElementById("musicatres").paused) {
        document.getElementById("musicatres").play();

    } else {
        document.getElementById("musicatres").pause();

    }
}

document.getElementById("sliderVoltres").value=
document.getElementById("musicatres").volume;

document.getElementById("sliderVoltres").oninput=canviaVolumtres;

function canviaVolumtres(){
    document.getElementById("musicatres").volume= 
    document.getElementById("sliderVoltres").value;
}

document.getElementById("musicatres").oncanplay = actualitzaMaxDuraciotres;

function actualitzaMaxDuraciotres(){
    document.getElementById("sliderDurtres").max=document.getElementById("musicatres").duration;
}


document.getElementById("sliderDurtres").oninput=canviaTempstres;


function canviaTempstres(){
    document.getElementById("musicatres").currentTime= 
    document.getElementById("sliderDurtres").value;
}

document.getElementById("musicatres").ontimeupdate = actualitzaDuraciotres;

function actualitzaDuraciotres(){
    document.getElementById("sliderDurtres").value=
    document.getElementById("musicatres").currentTime;

}


document.getElementById("looptres").onclick = playlooptres;

function playlooptres(){
    
    if(document.getElementById("musicatres").loop ==  false){
         document.getElementById("musicatres").loop =  true;
    }else{
        document.getElementById("musicatres").loop = false;
   }
}


document.getElementById("pistaquatre").onclick = PlayPauseAudioquatre;

function PlayPauseAudioquatre() {

    if (document.getElementById("musicaquatre").paused) {
        document.getElementById("musicaquatre").play();

    } else {
        document.getElementById("musicaquatre").pause();

    }
}

document.getElementById("sliderVolquatre").value=
document.getElementById("musicaquatre").volume;

document.getElementById("sliderVolquatre").oninput=canviaVolumquatre;

function canviaVolumquatre(){
    document.getElementById("musicaquatre").volume= 
    document.getElementById("sliderVolquatre").value;
}

document.getElementById("musicaquatre").oncanplay = actualitzaMaxDuracioquatre;

function actualitzaMaxDuracioquatre(){
    document.getElementById("sliderDurquatre").max=document.getElementById("musicaquatre").duration;
}


document.getElementById("sliderDurquatre").oninput=canviaTempsquatre;


function canviaTempsquatre(){
    document.getElementById("musicaquatre").currentTime= 
    document.getElementById("sliderDurquatre").value;
}

document.getElementById("musicaquatre").ontimeupdate = actualitzaDuracioquatre;

function actualitzaDuracioquatre(){
    document.getElementById("sliderDurquatre").value=
    document.getElementById("musicaquatre").currentTime;

}

document.getElementById("loopquatre").onclick = playloopquatre;

function playloopquatre(){
    
    if(document.getElementById("musicaquatre").loop ==  false){
         document.getElementById("musicaquatre").loop =  true;
    }else{
        document.getElementById("musicaquatre").loop = false;
   }
}

document.getElementById("pistacinc").onclick = PlayPauseAudiocinc;

function PlayPauseAudiocinc() {

    if (document.getElementById("musicacinc").paused) {
        document.getElementById("musicacinc").play();

    } else {
        document.getElementById("musicacinc").pause();

    }
}

document.getElementById("sliderVolcinc").value=
document.getElementById("musicacinc").volume;

document.getElementById("sliderVolcinc").oninput=canviaVolumcinc;

function canviaVolumcinc(){
    document.getElementById("musicacinc").volume= 
    document.getElementById("sliderVolcinc").value;
}

document.getElementById("musicacinc").oncanplay = actualitzaMaxDuraciocinc;

function actualitzaMaxDuraciocinc(){
    document.getElementById("sliderDurcinc").max=document.getElementById("musicacinc").duration;
}


document.getElementById("sliderDurcinc").oninput=canviaTempscinc;


function canviaTempscinc(){
    document.getElementById("musicacinc").currentTime= 
    document.getElementById("sliderDurcinc").value;
}

document.getElementById("musicacinc").ontimeupdate = actualitzaDuraciocinc;

function actualitzaDuraciocinc(){
    document.getElementById("sliderDurcinc").value=
    document.getElementById("musicacinc").currentTime;

}

document.getElementById("loopcinc").onclick = playloopcinc;

function playloopcinc(){
    
    if(document.getElementById("musicacinc").loop ==  false){
         document.getElementById("musicacinc").loop =  true;
    }else{
        document.getElementById("musicacinc").loop = false;
   }
}



document.getElementById("pistasis").onclick = PlayPauseAudiosis;

function PlayPauseAudiosis() {

    if (document.getElementById("musicasis").paused) {
        document.getElementById("musicasis").play();

    } else {
        document.getElementById("musicasis").pause();

    }
}

document.getElementById("sliderVolsis").value=
document.getElementById("musicasis").volume;

document.getElementById("sliderVolsis").oninput=canviaVolumsis;

function canviaVolumsis(){
    document.getElementById("musicasis").volume= 
    document.getElementById("sliderVolsis").value;
}

document.getElementById("musicasis").oncanplay = actualitzaMaxDuraciosis;

function actualitzaMaxDuraciosis(){
    document.getElementById("sliderDursis").max=document.getElementById("musicasis").duration;
}


document.getElementById("sliderDursis").oninput=canviaTempssis;


function canviaTempssis(){
    document.getElementById("musicasis").currentTime= 
    document.getElementById("sliderDursis").value;
}

document.getElementById("musicasis").ontimeupdate = actualitzaDuraciosis;

function actualitzaDuraciosis(){
    document.getElementById("sliderDursis").value=
    document.getElementById("musicasis").currentTime;

}

document.getElementById("loopsis").onclick = playloopsis;

function playloopsis(){
    
    if(document.getElementById("musicasis").loop ==  false){
         document.getElementById("musicasis").loop =  true;
    }else{
        document.getElementById("musicasis").loop = false;
   }
}

document.getElementById("pistaset").onclick = PlayPauseAudioset;

function PlayPauseAudioset() {

    if (document.getElementById("musicaset").paused) {
        document.getElementById("musicaset").play();

    } else {
        document.getElementById("musicaset").pause();

    }
}

document.getElementById("sliderVolset").value=
document.getElementById("musicaset").volume;

document.getElementById("sliderVolset").oninput=canviaVolumset;

function canviaVolumset(){
    document.getElementById("musicaset").volume= 
    document.getElementById("sliderVolset").value;
}

document.getElementById("musicaset").oncanplay = actualitzaMaxDuracioset;

function actualitzaMaxDuracioset(){
    document.getElementById("sliderDurset").max=document.getElementById("musicaset").duration;
}


document.getElementById("sliderDurset").oninput=canviaTempsset;


function canviaTempsset(){
    document.getElementById("musicaset").currentTime= 
    document.getElementById("sliderDurset").value;
}

document.getElementById("musicaset").ontimeupdate = actualitzaDuracioset;

function actualitzaDuracioset(){
    document.getElementById("sliderDurset").value=
    document.getElementById("musicaset").currentTime;

}

document.getElementById("loopset").onclick = playloopset;

function playloopset(){
    
    if(document.getElementById("musicaset").loop ==  false){
         document.getElementById("musicaset").loop =  true;
    }else{
        document.getElementById("musicaset").loop = false;
   }
}


document.getElementById("pistavuit").onclick = PlayPauseAudiovuit;

function PlayPauseAudiovuit() {

    if (document.getElementById("musicavuit").paused) {
        document.getElementById("musicavuit").play();

    } else {
        document.getElementById("musicavuit").pause();

    }
}

document.getElementById("sliderVolvuit").value=
document.getElementById("musicavuit").volume;

document.getElementById("sliderVolvuit").oninput=canviaVolumvuit;

function canviaVolumvuit(){
    document.getElementById("musicavuit").volume= 
    document.getElementById("sliderVolvuit").value;
}

document.getElementById("musicavuit").oncanplay = actualitzaMaxDuraciovuit;

function actualitzaMaxDuraciovuit(){
    document.getElementById("sliderDurvuit").max=document.getElementById("musicavuit").duration;
}


document.getElementById("sliderDurvuit").oninput=canviaTempsvuit;


function canviaTempsvuit(){
    document.getElementById("musicavuit").currentTime= 
    document.getElementById("sliderDurvuit").value;
}

document.getElementById("musicavuit").ontimeupdate = actualitzaDuraciovuit;

function actualitzaDuraciovuit(){
    document.getElementById("sliderDurvuit").value=
    document.getElementById("musicavuit").currentTime;

}

document.getElementById("loopvuit").onclick = playloopvuit;

function playloopvuit(){
    
    if(document.getElementById("musicavuit").loop ==  false){
         document.getElementById("musicavuit").loop =  true;
    }else{
        document.getElementById("musicavuit").loop = false;
   }
}


document.getElementById("pistanou").onclick = PlayPauseAudionou;

function PlayPauseAudionou() {

    if (document.getElementById("musicanou").paused) {
        document.getElementById("musicanou").play();

    } else {
        document.getElementById("musicanou").pause();

    }
}

document.getElementById("sliderVolnou").value=
document.getElementById("musicanou").volume;

document.getElementById("sliderVolnou").oninput=canviaVolumnou;

function canviaVolumnou(){
    document.getElementById("musicanou").volume= 
    document.getElementById("sliderVolnou").value;
}

document.getElementById("musicanou").oncanplay = actualitzaMaxDuracionou;

function actualitzaMaxDuracionou(){
    document.getElementById("sliderDurnou").max=document.getElementById("musicanou").duration;
}


document.getElementById("sliderDurnou").oninput=canviaTempsnou;


function canviaTempsnou(){
    document.getElementById("musicanou").currentTime= 
    document.getElementById("sliderDurnou").value;
}

document.getElementById("musicanou").ontimeupdate = actualitzaDuracionou;

function actualitzaDuracionou(){
    document.getElementById("sliderDurnou").value=
    document.getElementById("musicanou").currentTime;

}

document.getElementById("loopnou").onclick = playloopnou;

function playloopnou(){
    
    if(document.getElementById("musicanou").loop ==  false){
         document.getElementById("musicanou").loop =  true;
    }else{
        document.getElementById("musicanou").loop = false;
   }
}

