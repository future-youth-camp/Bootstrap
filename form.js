$(document).ready(function(){
  // Nästaknappen
  var next_question_btn = $("#next_question")

  // Resultaten
  var current_result = 0
  var result = $("#result")
  var result_container = $("#result_container")

  // Frågorna
  var q = [$("#q1"), $("#q2"), $("#q3")]

  // Svarsalternativen
  var s = [$("[name='s1']"), $("[name='s2']"), $("[name='s3']")]

  // Rätta svaren
  var answers = [$("#s1_4"), $("#s2_2"), $("#s3_3")]

  // Nuvarande fråga
  var current_question = 0

  // När man klickar på nästa fråga
  next_question_btn.click(function(){
    // 1. Kolla om svaret är rätt
    if(check_answer() === false) {
      return
    }
    // 2. Göm nuvarande fråga
    hide_current()
    // 3. Visa nästa fråga
    show_next()
    // 4. Öka nuvarande fråga-räknaren med 1
    increase_question_counter()
    // 5. Om sista, visa resultat
    if(last_question()) {
      return render_result()
    }
  })

  function last_question() {
    if(current_question >= q.length) {
    return true
    } else {
    return false
    }
  }

  function render_result() {
    next_question_btn.fadeOut()
    result_container.hide().removeClass("hidden").fadeIn()
  }

  function check_answer() {
    if(answers[current_question].is(":checked")) {
      current_result = current_result + 1
      result.html(current_result)
      return true
    }
    var result_given = false
    s[current_question].each(function(){
      if($(this).is(":checked")){
        result_given = true
      }
    })
    return result_given
  }

  function hide_current() {
    q[current_question].fadeOut().addClass("hidden")
  }

  function show_next() {
    if(current_question + 1 < q.length) {
      q[current_question + 1].hide().removeClass("hidden").fadeIn()
    }
  }

  function increase_question_counter() {
    current_question = current_question + 1
  }

})
