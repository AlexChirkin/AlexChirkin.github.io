$(".btn-number").click(function(e) {
  e.preventDefault();

  fieldName = $(this).attr("data-field");
  type = $(this).attr("data-type");
  var input = $("input[name='" + fieldName + "']");
  var currentVal = parseInt(input.val());
  if (!isNaN(currentVal)) {
    if (type == "minus") {
      if (currentVal > input.attr("min")) {
        input.val(currentVal - 1).change();
      }
      if (parseInt(input.val()) == input.attr("min")) {
        $(this).attr("disabled", true);
      }
    } else if (type == "plus") {
      if (currentVal < input.attr("max")) {
        input.val(currentVal + 1).change();
      }
      if (parseInt(input.val()) == input.attr("max")) {
        $(this).attr("disabled", true);
      }
    }
  } else {
    input.val(0);
  }
});
$(".input-number").focusin(function() {
  $(this).data("oldValue", $(this).val());
});
$(".input-number").change(function() {
  minValue = parseInt($(this).attr("min"));
  maxValue = parseInt($(this).attr("max"));
  valueCurrent = parseInt($(this).val());

  name = $(this).attr("name");
  if (valueCurrent >= minValue) {
    $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr(
      "disabled"
    );
  } else {
    alert("Документ в котором нет ни одного листа?");
    $(this).val($(this).data("oldValue"));
  }
  if (valueCurrent <= maxValue) {
    $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr(
      "disabled"
    );
  } else {
    alert("А не много ли?");
    $(this).val($(this).data("oldValue"));
  }
});
$(".input-number").keydown(function(e) {
  // Allow: backspace, delete, tab, escape, enter and .
  if (
    $.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
    // Allow: Ctrl+A
    (e.keyCode == 65 && e.ctrlKey === true) ||
    // Allow: home, end, left, right
    (e.keyCode >= 35 && e.keyCode <= 39)
  ) {
    // let it happen, don't do anything
    return;
  }
  // Ensure that it is a number and stop the keypress
  if (
    (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
    (e.keyCode < 96 || e.keyCode > 105)
  ) {
    e.preventDefault();
  }
});

$("#chooseFile").bind("change", function() {
  var filename = $("#chooseFile").val();
  if (/^\s*$/.test(filename)) {
    $(".file-upload").removeClass("active");
    $("#noFile").text("Файл не выбран");
  } else {
    $(".file-upload").addClass("active");
    $("#noFile").text(filename.replace("C:\\fakepath\\", ""));
  }
});

$('.dropdown-menu a[data-toggle="tab"]').click(function(e) {
  e.stopPropagation();
  e.preventDefault();
  $(this).tab("show");
});

$(function() {
  $("#datepicker")
    .datepicker({
      autoclose: true,
      todayHighlight: true,
        language: "ru",
        daysOfWeekHighlighted: "0,6",
    })
    .datepicker("update", new Date());
});


$(function() {
    $("#datepicker2")
        .datepicker({
            autoclose: true,
            todayHighlight: true,
            language: "ru",
            daysOfWeekHighlighted: "0,6",
        })
        .datepicker("update", new Date());
});
$(function() {
    $("#datepicker3")
        .datepicker({
            autoclose: true,
            todayHighlight: true,
            language: "ru",
            daysOfWeekHighlighted: "0,6",
        })
        .datepicker("update", new Date());
});
$(function() {
    $("#datepicker4")
        .datepicker({
            autoclose: true,
            todayHighlight: true,
            language: "ru",
            daysOfWeekHighlighted: "0,6",
        })
        .datepicker("update", new Date());
});
$(function() {
    $("#datepicker5")
        .datepicker({
            autoclose: true,
            todayHighlight: true,
            language: "ru",
            daysOfWeekHighlighted: "0,6",
        })
        .datepicker("update", new Date());
});

$(function() {
    $("#datepicker6")
        .datepicker({
            autoclose: true,
            todayHighlight: true,
            language: "ru",
            daysOfWeekHighlighted: "0,6",
        })
        .datepicker("update", new Date());
});
$(function() {
    $("#datepicker7")
        .datepicker({
            autoclose: true,
            todayHighlight: true,
            language: "ru",
            daysOfWeekHighlighted: "0,6",
        })
        .datepicker("update", new Date());
});

$(function() {
    $("#datepicker8")
        .datepicker({
            autoclose: true,
            todayHighlight: true,
            language: "ru",
            daysOfWeekHighlighted: "0,6",
        })
        .datepicker("update", new Date());
});


$(document).ready(function(){

    var counter = 2;

    $("#addButton").click(function () {

        if(counter>3){
            alert("Только 3");
            return false;
        }

        var newTextBoxDiv = $(document.createElement('div'))
            .attr("id", 'TextBoxDiv' + counter);

        newTextBoxDiv.after().html(
            '<input type="text" class="form-control custom-fc custom-width" name="textbox' + counter +
            '" id="textbox' + counter + '" value="" >');

        newTextBoxDiv.appendTo("#TextBoxesGroup");


        counter++;
    });

    $("#removeButton").click(function () {
        if(counter==1){
            alert("Нечего удалять");
            return false;
        }

        counter--;

        $("#TextBoxDiv" + counter).remove();

    });

    $("#getButtonValue").click(function () {

        var msg = '';
        for(i=1; i<counter; i++){
            msg += "\n Textbox #" + i + " : " + $('#textbox' + i).val();
        }
        alert(msg);
    });
});


