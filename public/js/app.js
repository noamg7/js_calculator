$(document).ready(function(){
  var calculator = Object.create(Calculator);
  var $display = $('#display');
  var lastOperation = '';

  $('#clear').on('click', clear);
  $('#plus').on('click', plus);
  $('#equal').on('click', equal);
  $('#subtract').on('click', subtract);
  $('#multiply').on('click', multiply);
  $('#divide').on('click', divide);
  $('.num').on('click', updateDisplay);
  $('mem-plus').on('click', memAdd);
  $('mem-minus').on('click', memSub);
  $('mem-recall').on('click', memDisplay);
  $('mem-clear').on('click', memClear);
  $('#period').on('click', period);
  $('#percentage').on('click', percentage);
  $('#square').on('click', square);
  $('#squareRoot').on('click', squareRoot);

  function updateDisplay(){
    var num = $(this).text();
    if ($display.text() === '0') {
      $display.text(num);
  }else{
    $display.text($display.text()+num);
  }
    console.log(num);
  }
  function divide(){
    var displayText = $display.text();
    var displayNum = parseFloat(displayText);
    calculator.add(displayNum);
    $display.text(0);
    lastOperation = '/';
  }

  function multiply(){
    var displayText = $display.text();
    var displayNum = parseFloat(displayText);
    calculator.add(displayNum);
    $display.text(0);
    lastOperation = '*';
  }

  function subtract(){
    var displayText = $display.text();
    var displayNum = parseFloat(displayText);
    calculator.add(displayNum);
    $display.text(0);
    lastOperation = '-';
  }

  function equal(){
    var displayText = $display.text();
    var num = parseFloat(displayText);
    if(lastOperation === '+'){
      calculator.add(num);
      var result = calculator.result();
      $display.text(result);
      calculator.reset();
    } else if(lastOperation === '-'){
      calculator.subtract(num);
      var result = calculator.result();
      $display.text(result);
      calculator.reset();
    } else if (lastOperation === '/'){
      calculator.divide(num);
      var result = calculator.result();
      $display.text(result);
      calculator.reset();
    } else if (lastOperation === '*') {
      calculator.multiply(num);
      var result = calculator.result();
      $display.text(result);
      calculator.reset();
    }
  }

  function plus(){
    var displayText = $display.text();
    var displayNum = parseFloat(displayText);
    calculator.add(displayNum);
    $display.text(0);
    lastOperation = '+';
  }

  function clear(){

  }

  function memAdd(){

  }

  function memSub(){

  }

  function memClear(){

  }

  function memDisplay(){

  }

  function period(){

  }
  function percentage(){

  }
  function square(){
    var displayText = $display.text();
    var displayNum = parseFloat(displayText);
    calculator.add(displayNum);
    $display.text(0);
    lastOperation = 'square';
  }
  function squareRoot(){
    var displayText = $display.text();
    var displayNum = parseFloat(displayText);
    calculator.add(displayNum);
    $display.text(0);
    lastOperation = 'squareRoot';

  }
});
