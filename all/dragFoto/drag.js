var leftbox = document.getElementById('leftbox');

function doFirst() {
  var mypic = document.getElementById('tiger');
  mypic.addEventListener('dragstart', startDrag, false);
  mypic.addEventListener('dragend', endDrag, false);

  leftbox.addEventListener(
    'dragenter',
      dragenter,
    false,
  );
  leftbox.addEventListener(
    'dragleave',
    dragleave,
    false,
  );
  leftbox.addEventListener(
    'dragover',
    function(e) {
      e.preventDefault();
    },
    false,
  );
  leftbox.addEventListener('drop', dropped, false);
}

function startDrag(e) {
  var code =
    '<img src="http://www.free-icons-download.net/images/tiger-icon-49341.png" alt="">';
  e.dataTransfer.setData('Text', code);
}

function dropped(e) {
  e.preventDefault();
  leftbox.innerHTML = e.dataTransfer.getData('Text')
}

function dragenter(e) {
  e.preventDefault();
  leftbox.style.background = 'SkyBlue';
  leftbox.style.border ='3px solid red';
}

function dragleave(e) {
  e.preventDefault();
  leftbox.style.background = 'White';
  leftbox.style.border ='3px solid blue';
}

function endDrag(e) {
  var pic = e.target;
  pic.style.visibility = 'hidden';
}

window.addEventListener('load', doFirst, false);
