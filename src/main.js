// import { Card } from './memory';
import { cardMatch } from './memory';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function() {
  // var card1 = new Card("red", 1);
  // var card2 = new Card("blue", 2);
  // var card3 = new Card("green", 3);
  // var card4 = new Card("yellow", 4);
  // var card5 = new Card("purple", 5);
  // var cards = [card1, card2, card3, card4, card5];
  var firstChoice;
  var secondChoice;
  var count = 0;

  $('input[type=checkbox]').click(function(){
    if (count === 0) {
      firstChoice = $(this).val();
      count += 1;
    } else if (count === 1) {
      secondChoice = $(this).val();
      count += 1;
    }

    if (count === 2) {
      if (cardMatch(firstChoice, secondChoice) === true) {
        count = 0;
        //do nothing
      } else if (cardMatch(firstChoice, secondChoice) === false) {
        $("input[type=checkbox]").prop('checked', false);
        count = 0;
      }
    }
    //
    // console.log(firstChoice);
    // // console.log(cardMatch(match));
  });
});
