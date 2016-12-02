(function(){
  var animating = false;

  function animatejob(ev) {
    if (animating === false) {
      var t = ev.target;
      if (t.className === 'but-nope') {
        t.parentNode.classList.add('nope');
        animating = true;
        fireCustomEvent('nopejob',
          {
            origin: t,
            container: t.parentNode,
            job: t.parentNode.querySelector('.job')
          }
        );
      }
      if (t.className === 'but-yay') {
        t.parentNode.classList.add('yes');
        animating = true;
        fireCustomEvent('yepjob',
          {
            origin: t,
            container: t.parentNode,
            job: t.parentNode.querySelector('.job')
          }
        );
      }
      if (t.classList.contains('current')) {
        fireCustomEvent('jobchosen',
          {
            container: getContainer(t),
            job: t
          }
        );
      }
    }
  }

  function fireCustomEvent(name, payload) {
    var newevent = new CustomEvent(name, {
      detail: payload
    });
    document.body.dispatchEvent(newevent);
  }

  function getContainer(elm) {
    var origin = elm.parentNode;
    if (!origin.classList.contains('jobcontainer')){
      origin = origin.parentNode;
    }
    return origin;
  }

  function animationdone(ev) {
    animating = false;
    var origin = getContainer(ev.target);
    if (ev.animationName === 'yay') {
      origin.classList.remove('yes');
    }
    if (ev.animationName === 'nope') {
      origin.classList.remove('nope');
    }
    if (origin.classList.contains('list')) {
      if (ev.animationName === 'nope' ||
          ev.animationName === 'yay') {
        origin.querySelector('.current').remove();
        if (!origin.querySelector('.job')) {
          fireCustomEvent('deckempty', {
            origin: origin.querySelector('button'),
            container: origin,
            job: null
          });
          $(".govuk-related-items.shortlist").hide();
          $(".tinder").addClass('shortlist');
     } else {
          origin.querySelector('.job').classList.add('current');
        }
      }
    }
  }
  document.body.addEventListener('animationend', animationdone);
  document.body.addEventListener('webkitAnimationEnd', animationdone);
  document.body.addEventListener('click', animatejob);
  window.addEventListener('DOMContentLoaded', function(){
  document.body.classList.add('tinder');
  });
})();

/* Shortlist code - START */
(function(){

     $("button.but-yay").click(function(){
          $("aside.shortlist .grey").hide();
          var selected = $(this).siblings(".list").find("h2");
          if (selected.html() == "<span>1.</span> Bank manager") {
               $("aside.shortlist li.bank-manager").show("slow");
          }
          if (selected.html() == "<span>2.</span> Chef") {
               $("aside.shortlist li.chef").show("slow");
          }
          if (selected.html() == "<span>3.</span> Medical secretary") {
               $("aside.shortlist li.medical").show("slow");
          }
          if (selected.html() == "<span>4.</span> Credit controller") {
               $("aside.shortlist li.credit").show("slow");
          }
          if (selected.html() == "<span>5.</span> Diver") {
               $("aside.shortlist li.diver").show("slow");
          }
          if (selected.html() == "<span>6.</span> Paralegal") {
               $("aside.shortlist li.paralegal").show("slow");
          }
          if (selected.html() == "<span>7.</span> Plumber") {
               $("aside.shortlist li.plumber").show("slow");
          }
          if (selected.html() == "<span>8.</span> Publican") {
               $("aside.shortlist li.publican").show("slow");
          }

     });

     $("button.but-nope").click(function(){
          $("aside.removed").show("slow");
          var selected = $(this).siblings(".list").find("h2");
          if (selected.html() == "<span>1.</span> Bank manager") {
               $("aside.removed li.bank-manager").show("slow");
          }
          if (selected.html() == "<span>2.</span> Chef") {
               $("aside.removed li.chef").show("slow");
          }
          if (selected.html() == "<span>3.</span> Medical secretary") {
               $("aside.removed li.medical").show("slow");
          }
          if (selected.html() == "<span>4.</span> Credit controller") {
               $("aside.removed li.credit").show("slow");
          }
          if (selected.html() == "<span>5.</span> Diver") {
               $("aside.removed li.diver").show("slow");
          }
          if (selected.html() == "<span>6.</span> Paralegal") {
               $("aside.removed li.paralegal").show("slow");
          }
          if (selected.html() == "<span>7.</span> Plumber") {
               $("aside.removed li.plumber").show("slow");
          }
          if (selected.html() == "<span>8.</span> Publican") {
               $("aside.removed li.publican").show("slow");
          }
     });

     $(".hide").click(function(){
          event.preventDefault();
          $(this).parent().hide("slow");
     });

})();
/* Shortlist code - END */
