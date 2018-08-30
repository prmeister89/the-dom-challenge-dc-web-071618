let seconds = 0;
let interval = setInterval(incrementSeconds, 1000);
let pause = false;


//Variables that grab specific HTML attributes
let counterElement = document.getElementById('counter');
let pauseElement = document.getElementById('pause');
let downElement = document.getElementById('-');
let upElement = document.getElementById('+');
let likeElement = document.getElementById('<3');
let likes = document.querySelector('.likes')
let commentValue = document.getElementById('commentInput')
let commentForm = document.getElementById('comment-form')
let commentList = document.querySelector('#list.comments')


//Seconds Counter
function incrementSeconds() {
  seconds += 1;
  counterElement.innerText = seconds;
}

//Add Seconds Button
upElement.onclick = function() {
  seconds+= 1;
  counterElement.innerText = seconds
}

//Minus Seconds Button
downElement.onclick = function() {
  seconds-= 1;
  counterElement.innerText = seconds
}

//Like Button, prints what number has been liked as (<li>)
likeElement.onclick = function() {
  let likeSentence = document.createElement('li');
  likeSentence.innerText = `The number: ${seconds} has been liked.`
  likes.appendChild(likeSentence)
}

//Pause Button
pauseElement.onclick = function() {
  if (pause = !pause ) {
    pauseElement.innerText = "resume"
    setTimeout(function() {
      clearInterval(interval)
    });
  }
  else {
    interval = setInterval(incrementSeconds, 1000);
    pauseElement.innerText = "pause"
  }
}

//Add Comment, prints comment as (<li>)
commentForm.addEventListener('submit', function(event) {
  event.preventDefault();
  let newComment = document.createElement('li');
  newComment.innerText = commentValue.value;
  commentList.appendChild(newComment)
  commentForm.reset()
})
