var delay_popup = 5000;
setTimeout("document.getElementById('bg_popup').style.display='block'", delay_popup);

function closeWin() {
    document.getElementById('bg_popup').style.display='none';
    return false;
}