const startBtn = document.querySelector('.start-btn');

function setInputFilter(textboxes, inputFilter) {

    //input fields validation
    
    textboxes.forEach(function(textbox){
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
        textbox.addEventListener(event, function() {
        if (inputFilter(this.value)) {
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
            this.value = "";
        }
    
        //show warning if input value is less than 1
    
        if (this.value.replace(/[^0-9]/g, '') == 0 && this.id == 'work'){
            document.querySelector('.work-warning p').style.display="block";
        } else if (this.value.replace(/[^0-9]/g, '') == 0 && this.id == 'break'){
            document.querySelector('.break-warning p').style.display="block";
        } else {
            document.querySelector('.work-warning p').style.display="none";
            document.querySelector('.break-warning p').style.display="none";
        }
        });
    });
    
    });
}

function inputToTimer(input_value) {

    //format and send input value to timer field
    
        if(hasNumber(input_value)){
          if(input_value.replace(/[^0-9]/g, '') < 10 && input_value.replace(/[^0-9]/g, '') > 0) {
            document.querySelector('.timer span').textContent = "0" + input_value.replace(/[^0-9]/g, '') + ":00";
          } else if(input_value.replace(/[^0-9]/g, '') == 0) {
            document.querySelector('.timer span').textContent = "00:00";
          } else {
            document.querySelector('.timer span').textContent = input_value.replace(/[^0-9]/g, '') + ":00";
          }
        } else {
          document.querySelector('.timer span').textContent = "00:00";
        }
        if (input_value.replace(/[^0-9]/g, '') == 0){
          startBtn.disabled = true;
        } else {
          startBtn.disabled = false;
        }
    }
    
    function hasNumber(myString) {
      return /\d/.test(myString);
    }
    


export {inputToTimer, setInputFilter};